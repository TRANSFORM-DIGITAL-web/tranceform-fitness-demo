import { Instagram, Star, ExternalLink, Image } from "lucide-react";
import { LANDING_METRICS } from "../data";

export default function InstagramSection() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Accent border top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-slate-200"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Instagram logo circle */}
          <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-[#FD1D1D] via-[#F56040] to-[#833AB4] flex items-center justify-center text-white mx-auto mb-6 shadow-[0_4px_15px_rgba(245,96,64,0.2)] hover:scale-105 transition-transform duration-300">
            <Instagram className="w-9 h-9 stroke-[1.5]" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-brand-black uppercase italic tracking-tight font-space-grotesk mb-4 leading-none">
            Follow Tranceform Fitness
          </h2>
          <p className="text-brand-orange font-extrabold font-space-grotesk text-sm sm:text-base tracking-wider uppercase mb-6">
            View Latest Transformations & Daily Reels
          </p>
          <div className="w-16 h-1 bg-brand-orange mx-auto mb-6"></div>

          <p className="text-slate-500 font-plus-jakarta text-sm sm:text-base leading-relaxed mb-8">
            Get your daily dose of heavy motivation! We post raw, unedited progress files, member workouts, quick diet recipes, stretching posture corrections, and training atmosphere highlights every single day.
          </p>

          {/* Highlights grids of items */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
            {[
              { title: "Weight Transformations", tag: "#weightloss" },
              { title: "Certified Workouts", tag: "#fitroutine" },
              { title: "Gym Floor Life", tag: "#community" },
              { title: "Nutrition Blueprint", tag: "#macros" }
            ].map((feed, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center space-x-2 text-slate-750 text-xs sm:text-sm font-bold font-plus-jakarta hover:border-brand-orange/30 transition-colors">
                <Image className="w-4 h-4 text-brand-orange shrink-0" />
                <span>{feed.title}</span>
              </div>
            ))}
          </div>

          {/* Action trigger button */}
          <a
            href={LANDING_METRICS.instagramLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl font-extrabold font-space-grotesk text-xs tracking-wider uppercase text-white bg-brand-black hover:bg-brand-orange transition-all cursor-pointer shadow-md"
          >
            <span>Visit @tranceformfitness</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
