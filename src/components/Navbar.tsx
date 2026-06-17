import { useState } from "react";
import { Phone, MessageCircle, Menu, X, Award } from "lucide-react";
import { LANDING_METRICS } from "../data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const formattedWhatsAppUrl = `https://wa.me/917219261729?text=Hi%20Tranceform%20Fitness,%20I'm%20interested%20in%20joining%20your%20gym!%20Please%20share%20membership%20details.`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Name */}
          <div 
            onClick={() => handleScroll("hero")} 
            className="flex items-center space-x-2.5 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded bg-brand-black flex items-center justify-center transition-all duration-300 group-hover:bg-brand-orange">
              <span className="text-white font-black text-xl italic font-space-grotesk">TF</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black tracking-tighter font-space-grotesk text-brand-black leading-none uppercase">
                TRANCEFORM
              </span>
              <span className="text-[9px] tracking-[0.3em] font-extrabold text-brand-orange font-plus-jakarta uppercase leading-none mt-1">
                FITNESS
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 font-plus-jakarta font-bold text-xs uppercase tracking-wider text-neutral-800">
            <button 
              onClick={() => handleScroll("why-us")} 
              className="text-neutral-500 hover:text-brand-black hover:underline decoration-brand-orange decoration-2 underline-offset-8 transition-all duration-200"
            >
              Why Us
            </button>
            <button 
              onClick={() => handleScroll("plans")} 
              className="text-neutral-500 hover:text-brand-black hover:underline decoration-brand-orange decoration-2 underline-offset-8 transition-all duration-200"
            >
              Memberships
            </button>
            <button 
              onClick={() => handleScroll("trainers")} 
              className="text-neutral-500 hover:text-brand-black hover:underline decoration-brand-orange decoration-2 underline-offset-8 transition-all duration-200"
            >
              Trainers
            </button>
            <button 
              onClick={() => handleScroll("testimonials")} 
              className="text-neutral-500 hover:text-brand-black hover:underline decoration-brand-orange decoration-2 underline-offset-8 transition-all duration-200"
            >
              Reviews
            </button>
            <button 
              onClick={() => handleScroll("gallery")} 
              className="text-neutral-500 hover:text-brand-black hover:underline decoration-brand-orange decoration-2 underline-offset-8 transition-all duration-200"
            >
              Gallery
            </button>
            <button 
              onClick={() => handleScroll("location")} 
              className="text-neutral-500 hover:text-brand-black hover:underline decoration-brand-orange decoration-2 underline-offset-8 transition-all duration-200"
            >
              Location
            </button>
          </div>

          {/* Desktop Call to Action Buttons */}
          <div className="hidden lg:flex items-center space-x-6">
            <a 
              href={`tel:${LANDING_METRICS.phone}`}
              className="flex items-center space-x-2 text-neutral-700 hover:text-brand-orange font-bold text-xs uppercase tracking-wider transition-colors duration-200"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              <span>{LANDING_METRICS.phone}</span>
            </a>
            
            <button
              onClick={() => handleScroll("booking")}
              className="px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider bg-brand-black text-white hover:bg-brand-orange active:scale-95 transition-all duration-200 shadow-sm cursor-pointer"
            >
              Book Free Trial
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <a 
              href={`tel:${LANDING_METRICS.phone}`}
              className="p-2.5 rounded-full bg-slate-100 text-brand-black active:scale-90 transition-transform"
              aria-label="Call Gym"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-full bg-slate-100 text-brand-black hover:text-brand-orange active:scale-90 transition-transform cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dynamic Slideout Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-4 shadow-xl animate-fade-in text-brand-black">
          <div className="grid grid-cols-2 gap-2 text-xs font-bold uppercase tracking-wider">
            <button 
              onClick={() => handleScroll("why-us")} 
              className="py-3 px-4 rounded-xl bg-slate-50 border border-slate-100 text-neutral-700 hover:text-brand-orange text-left transition-colors"
            >
              Why Us
            </button>
            <button 
              onClick={() => handleScroll("plans")} 
              className="py-3 px-4 rounded-xl bg-slate-50 border border-slate-100 text-neutral-700 hover:text-brand-orange text-left transition-colors"
            >
              Memberships
            </button>
            <button 
              onClick={() => handleScroll("trainers")} 
              className="py-3 px-4 rounded-xl bg-slate-50 border border-slate-100 text-neutral-700 hover:text-brand-orange text-left transition-colors"
            >
              Coaches
            </button>
            <button 
              onClick={() => handleScroll("testimonials")} 
              className="py-3 px-4 rounded-xl bg-slate-50 border border-slate-100 text-neutral-700 hover:text-brand-orange text-left transition-colors"
            >
              Reviews
            </button>
            <button 
              onClick={() => handleScroll("gallery")} 
              className="py-3 px-4 rounded-xl bg-slate-50 border border-slate-100 text-neutral-700 hover:text-brand-orange text-left transition-colors"
            >
              Gallery
            </button>
            <button 
              onClick={() => handleScroll("location")} 
              className="grid border-0 py-3 px-4 rounded-xl bg-slate-50 border-slate-100 text-neutral-700 hover:text-brand-orange text-left transition-colors"
            >
              Location
            </button>
          </div>

          {/* Call & Chat Quick Access */}
          <div className="flex flex-col space-y-2.5 pt-3 border-t border-slate-100">
            <button
              onClick={() => handleScroll("booking")}
              className="w-full text-center py-3 rounded-xl bg-brand-black text-white hover:bg-brand-orange font-extrabold text-xs uppercase tracking-wider transition-all cursor-pointer"
            >
              Book Free Workout Trial
            </button>
            <div className="flex space-x-2">
              <a 
                href={formattedWhatsAppUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl bg-slate-100 border border-slate-200 text-emerald-600 font-bold text-xs uppercase transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-100 text-slate-100" />
                <span>WhatsApp</span>
              </a>
              <a 
                href={`tel:${LANDING_METRICS.phone}`}
                className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl bg-slate-100 border border-slate-200 text-brand-black font-bold text-xs uppercase transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-orange" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
