import { MessageCircle, Phone, Calendar, ArrowRight } from "lucide-react";
import { LANDING_METRICS } from "../data";

export default function FinalCTA() {
  const handleScrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const whatsappUrl = `https://wa.me/917219261729?text=Hi%20Tranceform%20Fitness,%20I'm%20joining!%20Please%20book%20my%20slot.`;

  return (
    <section className="relative py-28 bg-white overflow-hidden border-t border-slate-100">
      {/* Background Graphic elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[140px] pointer-events-none"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Banner callout */}
        <span className="text-[11px] tracking-[0.4em] font-extrabold text-brand-orange uppercase mb-5 block font-space-grotesk">
          ⚡ NO MORE EXCUSES ⚡
        </span>
        
        <h2 className="text-4xl sm:text-6xl font-black text-brand-black uppercase italic tracking-tight font-space-grotesk mb-6">
          Ready To Transform Yourself?
        </h2>
        
        <p className="max-w-2xl text-slate-500 text-base sm:text-lg font-plus-jakarta leading-relaxed mb-10 mx-auto">
          Book your free trial session today and take the first step toward your physical, strength and health goals. Join Dhankawadi's premier fitness family.
        </p>

        {/* Buttons Group */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full max-w-lg mx-auto">
          {/* Book trial pass */}
          <button
            onClick={handleScrollToBooking}
            className="flex-1 flex items-center justify-center space-x-2.5 px-8 py-4.5 rounded-xl font-bold font-space-grotesk tracking-wider uppercase text-white bg-brand-black hover:bg-brand-orange hover:scale-103 active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-sm"
          >
            <Calendar className="w-5 h-5 stroke-[2.5]" />
            <span>Book Free Trial</span>
          </button>

          {/* Chat WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center space-x-2.5 px-8 py-4.5 rounded-xl font-bold font-space-grotesk tracking-wider uppercase text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all duration-200"
          >
            <MessageCircle className="w-5 h-5 text-[#25D366] fill-[#25D366]/10" />
            <span>WhatsApp Now</span>
          </a>

          {/* Quick Telephone Dial */}
          <a
            href={`tel:${LANDING_METRICS.phone}`}
            className="flex-1 sm:flex-none flex items-center justify-center space-x-2.5 px-6 py-4.5 rounded-xl font-bold font-space-grotesk tracking-wider uppercase text-slate-550 bg-white border border-slate-200 hover:border-brand-orange hover:text-brand-orange transition-all duration-200"
            title="Call Gymnasium"
          >
            <Phone className="w-5 h-5" />
            <span className="sm:hidden">Call Now</span>
          </a>
        </div>

        {/* Local SEO tags text inline */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest font-plus-jakarta">
          <span>#BestGymInDhankawadi</span>
          <span className="text-slate-200">•</span>
          <span>#GymNearBharatiVidyapeeth</span>
          <span className="text-slate-200">•</span>
          <span>#FitnessCenterDhankawadi</span>
          <span className="text-slate-200">•</span>
          <span>#PersonalTrainingPune</span>
          <span className="text-slate-200">•</span>
          <span>#WeightLossGymPune</span>
        </div>
      </div>
    </section>
  );
}
