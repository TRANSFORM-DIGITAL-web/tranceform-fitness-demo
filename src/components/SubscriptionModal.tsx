import React, { useState } from "react";
import { X, Sparkles, MessageCircle, AlertCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { saveBooking } from "../utils/bookingStore";

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  planPrice: string;
  planPeriod: string;
}

export default function SubscriptionModal({
  isOpen,
  onClose,
  planName,
  planPrice,
  planPeriod
}: SubscriptionModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Please enter your name to register.");
      return;
    }
    if (!phone.trim() || phone.length < 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setIsSubmitting(true);
    
    // Save to local storage database
    saveBooking({
      name: name.trim(),
      phone: phone.trim(),
      type: "subscription",
      planName,
      planPrice
    });

    setTimeout(() => {
      setIsSubmitting(false);
      
      // Construct WhatsApp message content
      const msg = [
        `🔥 *NEW MEMBERSHIP INQUIRY*`,
        `=======================`,
        `👤 *Name:* ${name.trim()}`,
        `📞 *Phone:* ${phone.trim()}`,
        `💎 *Plan Selected:* ${planName}`,
        `💰 *Plan Price:* ${planPrice} / ${planPeriod}`,
        `=======================`,
        `Sent from Tranceform website. Please hold this offer for me!`
      ].join("\n");

      const waUrl = `https://wa.me/917219261729?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, "_blank", "noreferrer");
      
      onClose();
      setName("");
      setPhone("");
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in font-plus-jakarta">
      <div 
        className="relative w-full max-w-md bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/5 rounded-full blur-xl pointer-events-none"></div>

        {/* Header Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-50 border border-slate-100 text-slate-400 hover:text-brand-black hover:border-slate-250 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header content */}
        <div className="mb-6">
          <div className="inline-flex items-center space-x-1.5 p-1 px-2.5 rounded bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-[10px] font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Limited Period Rate Lock</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black font-space-grotesk text-brand-black uppercase italic tracking-tight">
            Claim {planName}
          </h3>
          <p className="text-xs text-slate-500 font-plus-jakarta mt-1">
            Fill in your contact details below to reserve this price ({planPrice} / {planPeriod}) at the front desk.
          </p>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[10px] font-extrabold uppercase tracking-wider text-slate-450 font-plus-jakarta mb-1.5">
              Your Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (error) setError("");
              }}
              placeholder="e.g. Ramesh Shinde"
              className="w-full px-3.5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-orange text-brand-black font-plus-jakarta placeholder-slate-400 focus:outline-none transition-colors text-xs"
            />
          </div>

          <div>
            <label className="block text-[10px] font-extrabold uppercase tracking-wider text-slate-450 font-plus-jakarta mb-1.5">
              WhatsApp Mobile Number
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-extrabold text-xs">
                +91
              </span>
              <input
                type="tel"
                maxLength={10}
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (error) setError("");
                }}
                placeholder="7219261729"
                className="w-full pl-12 pr-3.5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-orange text-brand-black font-plus-jakarta placeholder-slate-400 focus:outline-none transition-colors text-xs"
              />
            </div>
          </div>

          {error && (
            <div className="flex items-start space-x-1.5 p-2.5 bg-red-50 border border-red-200 rounded-lg text-red-600 text-xs font-bold">
              <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 rounded-xl font-bold font-space-grotesk text-xs uppercase tracking-wider text-white bg-brand-black hover:bg-brand-orange hover:scale-103 active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white text-white" />
              <span>{isSubmitting ? "Holding Offer..." : "Proceed & Enquire on WhatsApp"}</span>
              <ArrowRight className="w-3 h-3 stroke-[2.5]" />
            </button>
          </div>

          <div className="flex items-center justify-center space-x-1.5 text-[9px] text-slate-400 pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
            <span>100% verified private secure slot reservation</span>
          </div>
        </form>
      </div>
    </div>
  );
}
