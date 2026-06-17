import React, { useState } from "react";
import { CheckCircle2, MessageCircle, AlertCircle, Sparkles, Send, Calendar, Clock, Target } from "lucide-react";
import { LANDING_METRICS } from "../data";
import { saveBooking } from "../utils/bookingStore";

export default function FreeTrialBooking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    goal: "Weight Loss",
    timing: "Morning (6:00 AM - 10:00 AM)"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const fitnessGoals = [
    "Weight Loss & Fat Burn",
    "Lean Muscle Gain & Bulk",
    "Strength Building & Power",
    "General Endurance & Flexibility",
    "Contest Prep & Sports rehabilitation"
  ];

  const timingSlots = [
    "Early Morning (06:00 AM - 09:00 AM)",
    "Late Morning (09:00 AM - 12:00 PM)",
    "Afternoon (12:00 PM - 04:00 PM)",
    "Evening Rush (04:00 PM - 07:00 PM)",
    "Night Workout (07:00 PM - 10:00 PM)"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error
    if (error) setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name.trim()) {
      setError("Please enter your name to book a trial.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setError("Please enter a valid 10-digit mobile phone number.");
      return;
    }

    setIsSubmitting(true);

    // Save booking to local storage database
    try {
      saveBooking({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        type: "trial",
        goal: formData.goal,
        timing: formData.timing
      });
    } catch (e) {
      console.error("Local booking save failed", e);
    }

    // Replicate API submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Construct WhatsApp message content
      const msg = [
        `💪 *NEW TRIAL INQUIRY*`,
        `=======================`,
        `👤 *Name:* ${formData.name}`,
        `📞 *Phone:* ${formData.phone}`,
        `🎯 *Goal:* ${formData.goal}`,
        `🕒 *Preferred Timing:* ${formData.timing}`,
        `=======================`,
        `Sent from Tranceform website. Please book my slot!`
      ].join("\n");

      // Set timeout to launch WhatsApp deep link in a new window/tab safely
      const waUrl = `https://wa.me/917219261729?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, "_blank", "noreferrer");
    }, 1200);
  };

  return (
    <section id="booking" className="relative py-24 bg-white overflow-hidden">
      {/* Decorative Orange Light from Left */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-orange/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Informative text column - Left */}
          <div className="lg:col-span-15 text-left lg:col-span-5">
            <span className="text-[11px] tracking-[0.3em] font-extrabold text-brand-orange uppercase mb-3 block font-space-grotesk">
              LIMITED CAPACITY TIME
            </span>
            <h2 className="text-3.5xl sm:text-5xl font-black text-brand-black uppercase italic tracking-tight font-space-grotesk mb-6 leading-none">
              Start Your Fitness Journey Today
            </h2>
            <div className="w-16 h-1 bg-brand-orange mb-6"></div>
            
            <p className="text-slate-550 font-plus-jakarta text-sm sm:text-base leading-relaxed mb-8">
              Book a free workout pass. No credit card required. Experience our modern machines, talk directly with Rahul or Sneha, and explore our high-energy atmosphere without paying a single Rupee.
            </p>

            {/* Structured Value Props List */}
            <div className="space-y-4">
              {[
                { title: "Free 1-Day Trial Access", desc: "Unrestricted access to strength & cardio sections" },
                { title: "Complimentary Posture Review", desc: "Check structural imbalances with our coaches" },
                { title: "Zero Hard Sales Pressure", desc: "Our results speak for themselves, join only if you love it" }
              ].map((value, idx) => (
                <div key={idx} className="flex items-start space-x-3 bg-slate-50 border border-slate-200/80 rounded-xl p-4">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-brand-orange shrink-0 border border-slate-200 shadow-sm">
                    <CheckCircle2 className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-space-grotesk text-brand-black">
                      {value.title}
                    </h4>
                    <p className="text-xs text-slate-500 font-plus-jakarta mt-0.5">
                      {value.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form column - Right */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 relative shadow-xl">
              {/* Highlight Corner details */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-2xl pointer-events-none"></div>

              {/* SUCCESS STATE */}
              {isSubmitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-emerald-550/10 border border-emerald-500 rounded-full flex items-center justify-center mx-auto text-emerald-600 mb-6 shadow-sm">
                    <CheckCircle2 className="w-10 h-10 animate-bounce" />
                  </div>
                  <h3 className="text-2xl sm:text-3.5xl font-extrabold font-space-grotesk text-brand-black mb-2">
                    Slot Requested Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-plus-jakarta max-w-md mx-auto mb-8">
                    An automated copy of your enquiry details was generated. We are redirecting you to your phone's WhatsApp application to instantly finalize your booking.
                  </p>

                  <div className="space-y-3 max-w-sm mx-auto">
                    <a
                      href={`https://wa.me/917219261729?text=${encodeURIComponent(`Hi Tranceform Fitness, I've filled my Name: ${formData.name}, Phone: ${formData.phone}, Goal: ${formData.goal} details on your website. Please book my Slot!`)}`}
                      className="w-full py-4 px-6 rounded-xl font-extrabold font-space-grotesk text-xs tracking-wider uppercase text-white bg-brand-black hover:bg-brand-orange flex items-center justify-center space-x-2.5 shadow-md transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-5 h-5 fill-white text-white" />
                      <span>Proceed on WhatsApp</span>
                    </a>
                    
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", phone: "", goal: "Weight Loss", timing: "Morning (6:00 AM - 10:00 AM)" });
                      }}
                      className="text-xs text-slate-400 hover:text-brand-orange underline font-semibold transition-colors cursor-pointer"
                    >
                      Fill another form booking
                    </button>
                  </div>
                </div>
              ) : (
                /* RAW INPUT FORM */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center space-x-2.5 mb-2">
                    <Sparkles className="w-5 h-5 text-brand-orange" />
                    <span className="text-sm font-black font-space-grotesk tracking-tight text-brand-black uppercase">
                      RESERVE TRIAL WORKOUT
                    </span>
                  </div>

                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-widest text-slate-400 font-plus-jakarta mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Shinde"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-orange text-brand-black font-plus-jakarta placeholder-slate-400 focus:outline-none transition-colors text-sm"
                    />
                  </div>

                  {/* Phone field */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-widest text-slate-400 font-plus-jakarta mb-2">
                      Contact Mobile Number
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-450 font-bold text-sm">
                        +91
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        maxLength={10}
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="7219261729"
                        className="w-full pl-13 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-orange text-brand-black font-plus-jakarta placeholder-slate-400 focus:outline-none transition-colors text-sm"
                      />
                    </div>
                  </div>

                  {/* Fitness Goal dropdown */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-widest text-slate-400 font-plus-jakarta mb-2 flex items-center">
                      <Target className="w-3.5 h-3.5 mr-1.5 text-brand-orange" />
                      Primary Fitness Goal
                    </label>
                    <select
                      name="goal"
                      value={formData.goal}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-orange text-brand-black font-plus-jakarta focus:outline-none transition-colors text-sm cursor-pointer"
                    >
                      {fitnessGoals.map((g, idx) => (
                        <option key={idx} value={g} className="text-brand-black bg-white">
                          {g}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Timing Slot dropdown */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-widest text-slate-400 font-plus-jakarta mb-2 flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1.5 text-brand-orange" />
                      Preferred Workouts Slot
                    </label>
                    <select
                      name="timing"
                      value={formData.timing}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-orange text-brand-black font-plus-jakarta focus:outline-none transition-colors text-sm cursor-pointer"
                    >
                      {timingSlots.map((ts, idx) => (
                        <option key={idx} value={ts} className="text-brand-black bg-white">
                          {ts}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Display error if there is one */}
                  {error && (
                    <div className="flex items-start space-x-2 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-xs font-bold">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Submit trial slot button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl font-extrabold font-space-grotesk text-xs uppercase tracking-wider text-white bg-brand-black hover:bg-brand-orange transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <span>{isSubmitting ? "Generating Booking..." : "Submit Pass & Go To WhatsApp"}</span>
                    <Send className="w-3.5 h-3.5 fill-white text-white stroke-[2.5]" />
                  </button>

                  <p className="text-[10px] text-center text-slate-400 font-plus-jakarta mt-2 lg:max-w-md lg:mx-auto">
                    🔒 We respect privacy. Your mobile number will never be sold or spammed. It is used strictly to reserve your workout timeslot with the front desk.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
