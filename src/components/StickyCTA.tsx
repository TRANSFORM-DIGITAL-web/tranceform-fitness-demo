import { useState, useEffect } from "react";
import { MessageCircle, Phone, Calendar, ArrowRight } from "lucide-react";
import { LANDING_METRICS } from "../data";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky widgets after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const whatsappUrl = `https://wa.me/917219261729?text=Hi%20Tranceform%20Fitness,%20I'm%20on%20your%20landing%20page%20and%20want%20to%20reserve%20my%20FREE%20TRIAL%20slot!`;

  return (
    <>
      {/* Floating Bubbles on bottom right side */}
      <div className="fixed bottom-24 sm:bottom-8 right-4 sm:right-8 z-40 flex flex-col space-y-3.5">
        
        {/* Call Now Bubble */}
        <a
          href={`tel:${LANDING_METRICS.phone}`}
          className="w-13 h-13 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-brand-orange flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform cursor-pointer group relative"
          aria-label="Call Tranceform Fitness Support"
        >
          <Phone className="w-5 h-5" />
          
          {/* Hover Tooltip tooltip */}
          <span className="absolute right-15 bg-white border border-slate-200 text-brand-black font-bold font-plus-jakarta text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
            Call Gym Hotline
          </span>
        </a>

        {/* WhatsApp Direct Chat Bubble */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="w-13 h-13 rounded-full bg-[#128C7E] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform cursor-pointer group relative"
          aria-label="Chat with Tranceform Fitness Coach"
        >
          <MessageCircle className="w-6 h-6 fill-white text-[#128C7E]" />
          
          {/* Hover Tooltip tooltip */}
          <span className="absolute right-15 bg-white border border-slate-200 text-[#128C7E] font-bold font-plus-jakarta text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
            WhatsApp Live Support
          </span>
        </a>
      </div>

      {/* Sticky Mobile CTA Bar at the bottom of the screen (Mobile Only) */}
      {isVisible && (
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-4 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] animate-slide-up flex items-center justify-between gap-3">
          <div className="flex flex-col text-left">
            <span className="text-[9px] tracking-widest font-black uppercase text-brand-orange font-space-grotesk">
              LIMITED PERIOD PASS
            </span>
            <span className="text-brand-black font-extrabold text-sm tracking-tight">
              Book Free Slot
            </span>
          </div>

          <button
            onClick={handleScrollToBooking}
            className="flex-1 max-w-[210px] py-3 px-4 rounded-lg bg-brand-black hover:bg-brand-orange text-white font-extrabold text-xs uppercase tracking-wider shadow-md flex items-center justify-center space-x-1.5 active:scale-95 transition-all cursor-pointer"
          >
            <span>Claim Free Pass</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </>
  );
}
