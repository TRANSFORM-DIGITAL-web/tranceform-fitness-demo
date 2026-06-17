import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { BENEFITS } from "../data";

export default function WhyTranceform() {
  const renderIcon = (iconName: string) => {
    // Dynamically retrieve the Lucide icon element
    const IconComponent = (Icons as any)[iconName];
    if (!IconComponent) return <Icons.Check className="w-6 h-6 text-brand-orange" />;
    return <IconComponent className="w-6 h-6 text-brand-orange" />;
  };

  return (
    <section id="why-us" className="relative py-24 bg-brand-light overflow-hidden">
      {/* Decorative vertical orange strip */}
      <div className="absolute top-0 left-0 w-1 h-32 bg-gradient-to-b from-brand-orange to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[11px] tracking-[0.3em] font-extrabold text-brand-orange uppercase mb-3 font-space-grotesk">
            Uncompromising Standards
          </h2>
          <p className="text-3xl sm:text-5xl font-black text-brand-black uppercase italic tracking-tight font-space-grotesk mb-6">
            Why Choose Tranceform Fitness?
          </p>
          <div className="w-20 h-1 bg-brand-orange mx-auto mb-6"></div>
          <p className="text-slate-500 font-plus-jakarta text-base sm:text-lg leading-relaxed">
            We are not just a room full of iron. We are a scientifically structured transformation studio located in the heart of Dhankawadi, built specifically to guide, support, and guarantee real health gains.
          </p>
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative p-6 rounded-2xl bg-white border border-slate-100 hover:border-brand-orange/20 hover:shadow-xl transition-all duration-300"
            >
              {/* Top Accent Light Highlight */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-orange/0 to-transparent group-hover:via-brand-orange/35 transition-all duration-300"></div>

              {/* Icon Circle */}
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-300 shadow-sm">
                <span className="group-hover:text-white group-hover:scale-110 transition-all duration-300 text-brand-orange">
                  {renderIcon(benefit.iconName)}
                </span>
              </div>

              {/* Title & Description */}
              <p className="text-xl font-bold text-brand-black font-space-grotesk group-hover:text-brand-orange transition-colors duration-200 mb-3">
                {benefit.title}
              </p>
              <p className="text-sm text-slate-500 leading-relaxed font-plus-jakarta group-hover:text-neutral-700 transition-colors duration-200">
                {benefit.description}
              </p>
              
              {/* Subtle Corner Sparkle Detail */}
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Icons.Sparkles className="w-4 h-4 text-brand-orange" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Bottom Conversion Highlight */}
        <div className="mt-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-plus-jakarta">
            Stop putting it off. The best time to start was yesterday. The second best time is <span className="text-brand-orange font-bold">Today</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
