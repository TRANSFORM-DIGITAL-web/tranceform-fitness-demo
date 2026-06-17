import { Star, MapPin, Phone, MessageCircle, Instagram, ExternalLink, Dumbbell } from "lucide-react";
import { LANDING_METRICS, WORKING_HOURS } from "../data";
import AdminPanel from "./AdminPanel";

export default function Footer() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const whatsappUrl = `https://wa.me/917219261729?text=Hi%2520Tranceform%252520Fitness,%2520I%25252520want%25252520to%25252520know%25252520more%25252520about%25252520the%25252520membership%25252520plans.`;

  return (
    <footer className="bg-brand-black text-slate-400 font-plus-jakarta border-t border-neutral-900 pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          
          {/* Gym Bio column */}
          <div className="col-span-1 lg:col-span-4 flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded bg-brand-orange flex items-center justify-center font-extrabold text-white font-space-grotesk text-lg italic">
                TF
              </div>
              <div className="flex flex-col">
                <span className="text-md sm:text-lg font-black tracking-wider text-white font-space-grotesk leading-none">
                  TRANCEFORM
                </span>
                <span className="text-[9px] tracking-[0.25em] font-extrabold text-brand-orange leading-none uppercase mt-0.5">
                  FITNESS
                </span>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-2">
              Dhankawadi's premier athletic physical fitness and full body aesthetic transformation gymnasium. Helping individuals achieve healthy weight loss, muscle building, powerlifting, and clinical posture corrections.
            </p>

            {/* Google review micro badge */}
            <div className="pt-2 flex items-center space-x-2">
              <div className="flex text-brand-orange">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="text-xs font-bold text-white">4.4★ ({LANDING_METRICS.totalReviews})</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="col-span-1 lg:col-span-2 flex flex-col space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-space-grotesk border-b border-neutral-900 pb-2">
              Explore Gym
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs">
              <button onClick={() => handleScroll("why-us")} className="text-left text-slate-400 hover:text-brand-orange hover:underline transition-colors cursor-pointer">
                Why Tranceform
              </button>
              <button onClick={() => handleScroll("plans")} className="text-left text-slate-400 hover:text-brand-orange hover:underline transition-colors cursor-pointer">
                Membership Plans
              </button>
              <button onClick={() => handleScroll("trainers")} className="text-left text-slate-400 hover:text-brand-orange hover:underline transition-colors cursor-pointer">
                Our Coaches
              </button>
              <button onClick={() => handleScroll("testimonials")} className="text-left text-slate-400 hover:text-brand-orange hover:underline transition-colors cursor-pointer">
                Google Reviews
              </button>
              <button onClick={() => handleScroll("gallery")} className="text-left text-slate-400 hover:text-brand-orange hover:underline transition-colors cursor-pointer">
                Photo Gallery
              </button>
            </div>
          </div>

          {/* Location Column */}
          <div className="col-span-1 lg:col-span-3 flex flex-col space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-space-grotesk border-b border-neutral-900 pb-2">
              Visit Tranceform
            </h4>
            <div className="flex flex-col space-y-3 text-xs leading-relaxed">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-brand-orange mr-2.5 shrink-0 mt-0.5" />
                <span>Nearby Bharati Vidyapeeth, Behind RamaKrishna Hostel, Dhankawadi, Pune, MH 411043</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-brand-orange mr-2.5 shrink-0" />
                <a href={`tel:${LANDING_METRICS.phone}`} className="hover:text-brand-orange hover:underline font-bold text-white">
                  {LANDING_METRICS.phone}
                </a>
              </div>
              <div className="flex items-center">
                <Instagram className="w-4 h-4 text-brand-orange mr-2.5 shrink-0" />
                <a href={LANDING_METRICS.instagramLink} target="_blank" rel="noreferrer" className="hover:text-brand-orange hover:underline">
                  @tranceformfitness
                </a>
              </div>
            </div>
          </div>

          {/* Operating Hours Column */}
          <div className="col-span-1 lg:col-span-3 flex flex-col space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-space-grotesk border-b border-neutral-900 pb-2">
              Hours of Work
            </h4>
            <div className="space-y-3.5 text-xs">
              {WORKING_HOURS.map((wh, idx) => (
                <div key={idx} className="flex justify-between items-center bg-neutral-900/60 p-2.5 rounded-lg border border-neutral-850">
                  <span className="text-slate-450 font-bold">{wh.days}</span>
                  <span className="text-white font-bold">{wh.hours}</span>
                </div>
              ))}
              <div className="p-2.5 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-[10px] rounded text-center font-bold uppercase tracking-wider">
                ⚡ Open Air-Conditioned Space
              </div>
            </div>
          </div>

        </div>

        {/* Local Business local SEO keywords description block */}
        <div className="border-t border-neutral-900 pt-8 pb-4 mb-8">
          <p className="text-[10px] text-slate-500 font-medium leading-relaxed max-w-5xl text-center md:text-left">
            Tranceform Fitness is optimized for people looking for a: <strong className="text-slate-400">Best Gym in Dhankawadi</strong>, <strong className="text-slate-400">Gym near Bharati Vidyapeeth</strong>, <strong className="text-slate-400">Fitness center in Dhankawadi</strong>, <strong className="text-slate-400">Personal training in Pune</strong>, or <strong className="text-slate-400">Weight Loss gym in Pune</strong>. Our elite strength coaches, premium black and gold infrastructure, certified trainers and biomechanical equipment provide top outcomes under high hygiene standards. Map location: Behind Bharati Vidyapeeth Dhankawadi Pune.
          </p>
        </div>

        {/* Bottom copyright / socials bar */}
        <div className="border-t border-neutral-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          
          <p className="text-slate-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Tranceform Fitness Pune. All Rights Reserved.
          </p>
          
          <div className="flex items-center space-x-6 text-slate-500">
            <a href={LANDING_METRICS.instagramLink} target="_blank" rel="noreferrer" className="hover:text-brand-orange transition-colors" aria-label="Follow Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href={LANDING_METRICS.googleMapsLink} target="_blank" rel="noreferrer" className="hover:text-brand-orange transition-colors" aria-label="Find on Google Maps">
              <MapPin className="w-5 h-5" />
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-brand-orange transition-colors" aria-label="Find on Google Maps">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* Administration portal indicator with passcode challenge */}
        <AdminPanel />

      </div>
    </footer>
  );
}
