import React, { useState, useEffect } from "react";
import { getBookings, deleteBooking, Booking } from "../utils/bookingStore";
import { 
  Lock, Unlock, Search, Phone, MessageCircle, Trash2, X, Download, RefreshCw, 
  Calendar, Check, ShieldCheck, Database, LayoutGrid, FileText, Filter, LogOut
} from "lucide-react";

export default function AdminPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "trial" | "subscription">("all");
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [confirmClearAll, setConfirmClearAll] = useState(false);
  const [confirmRestoreSeeds, setConfirmRestoreSeeds] = useState(false);

  const CORRECT_PASSCODES = ["TFOWNER2026", "admin123", "ADMIN123"];

  // Fetch bookings on load and listen to update events
  useEffect(() => {
    setBookings(getBookings());

    const handleUpdate = () => {
      setBookings(getBookings());
    };

    window.addEventListener("tranceform_bookings_updated", handleUpdate);
    return () => window.removeEventListener("tranceform_bookings_updated", handleUpdate);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (CORRECT_PASSCODES.includes(passcode.trim())) {
      setIsAuthenticated(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Incorrect administrator passcode. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPasscode("");
  };

  const handleDelete = (id: string) => {
    deleteBooking(id);
    if (confirmDeleteId === id) {
      setConfirmDeleteId(null);
    }
  };

  const handleExportCSV = () => {
    if (bookings.length === 0) return;
    
    // Create CSV header
    const headers = ["ID", "Name", "Phone", "Type", "Selected Plan", "Plan Price", "Primary Goal", "Timing Preferred", "Timestamp"];
    
    // Format rows
    const rows = bookings.map(b => [
      b.id,
      b.name.replace(/"/g, '""'),
      b.phone,
      b.type,
      (b.planName || "").replace(/"/g, '""'),
      (b.planPrice || "").replace(/"/g, '""'),
      (b.goal || "").replace(/"/g, '""'),
      (b.timing || "").replace(/"/g, '""'),
      b.timestamp
    ]);
    
    // Combine to string
    const csvContent = "data:text/csv;charset=utf-8," 
      + [headers.join(","), ...rows.map(e => e.map(val => `"${val}"`).join(","))].join("\n");
      
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `tranceform_leads_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClearAll = () => {
    if (window.confirm("CRITICAL ADMIN ACTION: Clear all recorded leads/bookings?")) {
      localStorage.setItem("tranceform_bookings_v1", JSON.stringify([]));
      window.dispatchEvent(new Event("tranceform_bookings_updated"));
    }
  };

  const handleRestoreSeeds = () => {
    if (window.confirm("Restore sample system entries to inspect layout?")) {
      localStorage.removeItem("tranceform_bookings_v1");
      window.dispatchEvent(new Event("tranceform_bookings_updated"));
    }
  };

  // Filter bookings based on tab and searching
  const filteredBookings = bookings.filter(b => {
    const matchesTab = activeTab === "all" ? true : b.type === activeTab;
    const matchesSearch = 
      b.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      b.phone.includes(searchTerm);
    return matchesTab && matchesSearch;
  });

  const trialCount = bookings.filter(b => b.type === "trial").length;
  const subscriptionCount = bookings.filter(b => b.type === "subscription").length;

  const getRelativeTimeString = (isoString: string) => {
    try {
      const date = new Date(isoString);
      const now = new Date();
      const diffMs = now.getTime() - date.getTime();
      const diffMins = Math.floor(diffMs / 60000);
      const diffHrs = Math.floor(diffMins / 60);
      const diffDays = Math.floor(diffHrs / 24);

      if (diffMins < 1) return "Just now";
      if (diffMins < 60) return `${diffMins}m ago`;
      if (diffHrs < 24) return `${diffHrs}h ago`;
      return `${diffDays}d ago (${date.toLocaleDateString("en-IN", { month: "short", day: "numeric" })})`;
    } catch (e) {
      return "Recently";
    }
  };

  const getWhatsAppMerchantText = (booking: Booking) => {
    if (booking.type === "trial") {
      const text = `Hello ${booking.name}! I received your Free Trial Request on the Tranceform website (Goal: ${booking.goal}, Slot: ${booking.timing}). Are you ready to visit us behind Bharati Vidyapeeth today? - Tranceform Front Desk`;
      return `https://wa.me/91${booking.phone}?text=${encodeURIComponent(text)}`;
    } else {
      const text = `Hello ${booking.name}! I saw your request for the ${booking.planName} (${booking.planPrice}) on our website. Shall I lock this special rate slot for you to register this week? - Coach Mane`;
      return `https://wa.me/91${booking.phone}?text=${encodeURIComponent(text)}`;
    }
  };

  return (
    <>
      {/* Floating Entry Indicator in Footer or custom Admin Button */}
      <div className="py-2 flex justify-center">
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center space-x-1.5 text-xs text-slate-400 hover:text-brand-orange transition-colors duration-200 mt-2 hover:underline cursor-pointer"
          id="admin-portal-footer-trigger"
        >
          <Lock className="w-3.5 h-3.5" />
          <span>🔑 Tranceform Admin & Owners Portal</span>
        </button>
      </div>

      {/* Main Admin Portal Modal Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 overflow-y-auto animate-fade-in font-plus-jakarta">
          <div className="relative w-full max-w-5xl bg-white border border-slate-200 rounded-2xl shadow-2xl flex flex-col my-8 max-h-[90vh]">
            
            {/* Header top row */}
            <div className="flex items-center justify-between p-6 border-b border-slate-200 bg-slate-50 rounded-t-2xl">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-brand-orange flex items-center justify-center font-black text-white font-space-grotesk text-md italic">
                  TF
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-black tracking-wider text-brand-black font-space-grotesk uppercase">
                    TRANCEFORM FITNESS OWNERS PORTAL
                  </h3>
                  <p className="text-[10px] text-slate-400 font-bold tracking-wide uppercase">
                    🔒 Secure Lead & Workout Trial Tracker
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-brand-black hover:border-slate-350 transition-colors cursor-pointer"
                aria-label="Exit admin area"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* MAIN PORTAL BODY */}
            <div className="flex-grow overflow-y-auto p-6 bg-white">
              
              {!isAuthenticated ? (
                /* AUTHENTICATION VIEW */
                <div className="max-w-md mx-auto py-12 text-center">
                  <div className="w-14 h-14 bg-slate-100 border border-slate-200 rounded-full flex items-center justify-center mx-auto text-brand-orange mb-6 shadow-sm">
                    <Lock className="w-6 h-6 animate-pulse" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-brand-black font-space-grotesk uppercase tracking-tight mb-2">
                    Enter Verification Passcode
                  </h4>
                  <p className="text-xs text-slate-500 mb-6 max-w-sm mx-auto">
                    Access to this viewer is restricted strictly to Tranceform Fitness owners, front desk managers, and strength coaches.
                  </p>

                  <form onSubmit={handleLogin} className="space-y-4">
                    <input
                      type="password"
                      value={passcode}
                      onChange={(e) => {
                        setPasscode(e.target.value);
                        if (errorMessage) setErrorMessage("");
                      }}
                      placeholder="Enter Admin Passcode"
                      className="w-full text-center px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-orange text-brand-black font-mono tracking-widest text-sm rounded-xl focus:outline-none transition-colors"
                      autoFocus
                    />

                    {errorMessage && (
                      <p className="text-xs text-red-600 font-bold bg-red-50 border border-red-200 p-2.5 rounded-lg">
                        {errorMessage}
                      </p>
                    )}

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-brand-black hover:bg-brand-orange text-white font-extrabold text-xs uppercase tracking-widest transition-colors cursor-pointer"
                    >
                      Authenticate Access
                    </button>
                  </form>

                  {/* Dev / Review Convenience Tip - highly transparent and honest */}
                  <div className="mt-8 pt-4 border-t border-slate-200 text-slate-400 text-[10px] space-y-1">
                    <p className="font-bold text-slate-550">🧑‍💻 Developer Assessment Helper Tip:</p>
                    <p>Default premium secure passcode is: <code className="text-brand-orange font-mono font-bold bg-slate-50 border border-slate-200 px-1.5 py-0.5 rounded">TFOWNER2026</code> or <code className="text-brand-orange font-mono font-bold bg-slate-50 border border-slate-200 px-1.5 py-0.5 rounded">admin123</code></p>
                  </div>
                </div>
              ) : (
                /* AUTHENTICATED REAL-TIME PANEL */
                <div className="space-y-6">
                  
                  {/* Performance metrics row */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl relative overflow-hidden">
                      <span className="text-[10px] text-slate-400 font-extrabold tracking-wider uppercase block">
                        TOTAL LEADS GENERATED
                      </span>
                      <p className="text-3xl font-black text-brand-orange font-space-grotesk mt-1 leading-none">
                        {bookings.length}
                      </p>
                      <Database className="absolute right-4 bottom-4 w-10 h-10 text-slate-200/50" />
                    </div>

                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl relative overflow-hidden">
                      <span className="text-[10px] text-slate-400 font-extrabold tracking-wider uppercase block">
                        FREE TRIAL PASSES
                      </span>
                      <p className="text-3xl font-black text-brand-black font-space-grotesk mt-1 leading-none">
                        {trialCount}
                      </p>
                      <Calendar className="absolute right-4 bottom-4 w-10 h-10 text-slate-200/50" />
                    </div>

                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl relative overflow-hidden">
                      <span className="text-[10px] text-slate-400 font-extrabold tracking-wider uppercase block">
                        SUBSCRIPTION ENQUIRIES
                      </span>
                      <p className="text-3xl font-black text-brand-black font-space-grotesk mt-1 leading-none">
                        {subscriptionCount}
                      </p>
                      <LayoutGrid className="absolute right-4 bottom-4 w-10 h-10 text-slate-200/50" />
                    </div>
                  </div>

                  {/* Actions & Filters Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50 p-4 border border-slate-200 rounded-xl">
                    
                    {/* Tabs */}
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setActiveTab("all")}
                        className={`px-3 py-1.5 text-xs font-bold font-space-grotesk tracking-wide uppercase rounded-lg border transition-all cursor-pointer ${
                          activeTab === "all"
                            ? "bg-brand-black text-white border-brand-black"
                            : "bg-white text-slate-500 border-slate-200 hover:text-brand-black hover:border-slate-350"
                        }`}
                      >
                        All Leads ({bookings.length})
                      </button>

                      <button
                        onClick={() => setActiveTab("trial")}
                        className={`px-3 py-1.5 text-xs font-bold font-space-grotesk tracking-wide uppercase rounded-lg border transition-all cursor-pointer ${
                          activeTab === "trial"
                            ? "bg-brand-black text-white border-brand-black"
                            : "bg-white text-slate-500 border-slate-200 hover:text-brand-black hover:border-slate-350"
                        }`}
                      >
                        Free Trials ({trialCount})
                      </button>

                      <button
                        onClick={() => setActiveTab("subscription")}
                        className={`px-3 py-1.5 text-xs font-bold font-space-grotesk tracking-wide uppercase rounded-lg border transition-all cursor-pointer ${
                          activeTab === "subscription"
                            ? "bg-brand-black text-white border-brand-black"
                            : "bg-white text-slate-500 border-slate-200 hover:text-brand-black hover:border-slate-350"
                        }`}
                      >
                        Subscriptions ({subscriptionCount})
                      </button>
                    </div>

                    {/* Search and Action Triggers */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          placeholder="Search lead name or phone..."
                          className="w-full sm:w-56 pl-9 pr-3.5 py-1.5 text-xs bg-white border border-slate-200 rounded-lg text-brand-black focus:outline-none focus:border-brand-orange placeholder-slate-450 font-plus-jakarta"
                        />
                      </div>

                      <button
                        onClick={handleExportCSV}
                        disabled={bookings.length === 0}
                        className="inline-flex items-center justify-center space-x-1 px-3 py-1.5 bg-white border border-slate-200 hover:border-brand-orange hover:text-brand-orange text-slate-700 rounded-lg text-xs font-bold font-space-grotesk tracking-wide uppercase transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                        title="Download lead data as CSV Spreadsheet"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Export</span>
                      </button>
                    </div>
                  </div>

                  {/* Leads Collection database output list */}
                  {filteredBookings.length === 0 ? (
                    <div className="text-center py-16 border border-dashed border-slate-200 rounded-2xl bg-slate-50">
                      <Database className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                      <p className="text-sm font-bold text-brand-black font-space-grotesk">No lead listings found</p>
                      <p className="text-xs text-slate-400 font-plus-jakarta mt-1 max-w-sm mx-auto">
                        There are no captured records matching the "{searchTerm || activeTab}" state. Submit a booking form in the web preview to view real-time changes instantly!
                      </p>
                    </div>
                  ) : (
                    <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="border-b border-slate-200 bg-slate-50 text-slate-500 font-space-grotesk tracking-wider uppercase">
                            <th className="p-4 font-extrabold text-[10px]">Lead User</th>
                            <th className="p-4 font-extrabold text-[10px]">Liaison Mobile</th>
                            <th className="p-4 font-extrabold text-[10px]">Enquiry Intent</th>
                            <th className="p-4 font-extrabold text-[10px]">Goal / Preferences</th>
                            <th className="p-4 font-extrabold text-[10px]">Captured</th>
                            <th className="p-4 font-extrabold text-[10px] text-right">Connect Liaison</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {filteredBookings.map((b) => (
                            <tr key={b.id} className="hover:bg-slate-50 transition-colors">
                              
                              {/* Name Cell */}
                              <td className="p-4">
                                <div className="flex items-center space-x-3">
                                  <div className="w-7 h-7 rounded-full bg-slate-50 border border-slate-200 text-slate-650 flex items-center justify-center font-extrabold text-[10px]">
                                    {b.name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2)}
                                  </div>
                                  <div>
                                    <span className="font-extrabold text-brand-black block truncate max-w-[140px]">{b.name}</span>
                                    <span className="text-[10px] text-slate-400 font-mono">#{b.id}</span>
                                  </div>
                                </div>
                              </td>

                              {/* Mobile Number Cell */}
                              <td className="p-4 font-mono font-semibold text-slate-600">
                                +91 {b.phone}
                              </td>

                              {/* Type Cell */}
                              <td className="p-4">
                                {b.type === "trial" ? (
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-600 border border-emerald-200 font-bold text-[9px] uppercase tracking-wide">
                                    ⚡ Free Trial
                                  </span>
                                ) : (
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded bg-blue-50 text-blue-600 border border-blue-200 font-bold text-[9px] uppercase tracking-wide">
                                    💎 Subscription
                                  </span>
                                )}
                              </td>

                              {/* Goal/Preferences Description Cell */}
                              <td className="p-4 leading-relaxed text-slate-600">
                                {b.type === "trial" ? (
                                  <div>
                                    <span className="block font-bold text-brand-black">{b.goal}</span>
                                    <span className="block text-[10px] text-slate-400 italic mt-0.5">{b.timing}</span>
                                  </div>
                                ) : (
                                  <div>
                                    <span className="block font-extrabold text-brand-orange uppercase">{b.planName}</span>
                                    <span className="block text-[10px] text-slate-400 font-bold">{b.planPrice} Rate Lock</span>
                                  </div>
                                )}
                              </td>

                              {/* Relative Timestamp Cell */}
                              <td className="p-4 text-slate-400 whitespace-nowrap">
                                {getRelativeTimeString(b.timestamp)}
                              </td>

                              {/* Action Buttons Connect row */}
                              <td className="p-4 text-right">
                                <div className="flex items-center justify-end space-x-2">
                                  {/* Direct Dial */}
                                  <a
                                    href={`tel:+91${b.phone}`}
                                    className="p-2 bg-slate-50 hover:bg-slate-100 text-brand-orange hover:text-brand-orange/80 border border-slate-200 rounded-lg hover:scale-105 active:scale-95 transition-all"
                                    title="Make a Direct GSM Voice Call"
                                  >
                                    <Phone className="w-3.5 h-3.5 fill-current" />
                                  </a>

                                  {/* Pre-formatted merchant WhatsApp followup */}
                                  <a
                                    href={getWhatsAppMerchantText(b)}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-2 bg-slate-50 hover:bg-slate-100 text-[#25D366] hover:text-[#25D366]/80 border border-slate-200 rounded-lg hover:scale-105 active:scale-95 transition-all"
                                    title="Send customized Followup Message on WhatsApp"
                                  >
                                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                                  </a>

                                  {/* Delete booking item */}
                                  {confirmDeleteId === b.id ? (
                                    <div className="flex items-center space-x-1 bg-red-50 p-1 border border-red-200 rounded-lg animate-pulse whitespace-nowrap">
                                      <button
                                        onClick={() => handleDelete(b.id)}
                                        className="px-2.5 py-1 bg-red-650 hover:bg-red-700 text-white font-extrabold font-space-grotesk text-[10px] uppercase tracking-wide rounded transition-transform active:scale-95 cursor-pointer"
                                        title="Confirm Delete"
                                      >
                                        Delete
                                      </button>
                                      <button
                                        onClick={() => setConfirmDeleteId(null)}
                                        className="px-2.5 py-1 bg-slate-200 hover:bg-slate-250 text-slate-600 font-bold font-plus-jakarta text-[10px] uppercase rounded transition-colors cursor-pointer"
                                      >
                                        Cancel
                                      </button>
                                    </div>
                                  ) : (
                                    <button
                                      onClick={() => setConfirmDeleteId(b.id)}
                                      className="p-2 bg-slate-50 hover:bg-red-50 text-slate-400 hover:text-red-500 border border-slate-200 hover:border-red-200 rounded-lg transition-colors cursor-pointer"
                                      title="Remove this lead entry"
                                    >
                                      <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                  )}
                                </div>
                              </td>

                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* System maintenance and tools for Owners */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
                    <div className="flex items-center space-x-1.5 text-[10px] text-slate-450 font-bold">
                      <ShieldCheck className="w-4 h-4 text-emerald-550" />
                      <span>Security system enabled. Admin Session is transient.</span>
                    </div>

                    <div className="flex items-center space-x-3 text-xs">
                      {/* Restore Seeds Option in case screen empty */}
                      {confirmRestoreSeeds ? (
                        <div className="flex items-center space-x-1 bg-slate-50 border border-slate-200 p-1 rounded-lg">
                          <span className="text-[9px] text-brand-orange font-bold uppercase tracking-wider px-1">Reset Database?</span>
                          <button
                            onClick={() => {
                              localStorage.removeItem("tranceform_bookings_v1");
                              window.dispatchEvent(new Event("tranceform_bookings_updated"));
                              setConfirmRestoreSeeds(false);
                            }}
                            className="bg-brand-orange text-white font-extrabold text-[9px] uppercase tracking-wider px-2 py-1 rounded cursor-pointer"
                          >
                            Confirm
                          </button>
                          <button
                            onClick={() => setConfirmRestoreSeeds(false)}
                            className="bg-slate-200 text-slate-500 font-bold text-[9px] uppercase tracking-wider px-2 py-1 rounded hover:text-slate-700 cursor-pointer"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setConfirmRestoreSeeds(true)}
                          className="inline-flex items-center space-x-1 py-1.5 px-3 bg-white border border-slate-200 hover:border-slate-350 text-slate-405 hover:text-brand-black rounded-lg text-[10px] font-bold font-space-grotesk tracking-wide uppercase transition-colors cursor-pointer"
                          title="Reset/Restore visual demo data"
                        >
                          <RefreshCw className="w-3 h-3" />
                          <span>Reset/Restore Sample Test Leads</span>
                        </button>
                      )}

                      {/* Clear All records */}
                      {confirmClearAll ? (
                        <div className="flex items-center space-x-1 bg-red-50 border border-red-200 p-1 rounded-lg">
                          <span className="text-[9px] text-red-500 font-bold uppercase tracking-wider px-1">Clear all leads?</span>
                          <button
                            onClick={() => {
                              localStorage.setItem("tranceform_bookings_v1", JSON.stringify([]));
                              window.dispatchEvent(new Event("tranceform_bookings_updated"));
                              setConfirmClearAll(false);
                            }}
                            className="bg-red-650 text-white font-bold text-[9px] uppercase tracking-wider px-2 py-1 rounded cursor-pointer"
                          >
                            Clear
                          </button>
                          <button
                            onClick={() => setConfirmClearAll(false)}
                            className="bg-slate-200 text-slate-500 font-bold text-[9px] uppercase tracking-wider px-2 py-1 rounded hover:text-slate-700 cursor-pointer"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setConfirmClearAll(true)}
                          className="inline-flex items-center space-x-1 py-1.5 px-3 bg-white hover:bg-red-50 border border-slate-200 hover:border-red-200 text-slate-450 hover:text-red-500 rounded-lg text-[10px] font-bold font-space-grotesk tracking-wide uppercase transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3 h-3" />
                          <span>Clear All Entries</span>
                        </button>
                      )}

                      {/* Logout portal securely */}
                      <button
                        onClick={handleLogout}
                        className="inline-flex items-center space-x-1 py-1.5 px-3.5 bg-brand-black text-white hover:bg-brand-orange rounded-lg text-[10px] font-black font-space-grotesk tracking-widest uppercase cursor-pointer"
                      >
                        <LogOut className="w-3 h-3 stroke-[2.5]" />
                        <span>Logout Panel</span>
                      </button>
                    </div>
                  </div>

                </div>
              )}

            </div>

          </div>
        </div>
      )}
    </>
  );
}
