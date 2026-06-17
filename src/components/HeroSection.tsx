import { motion } from "motion/react";
import { MessageCircle, Phone, Calendar, Star, Award, Shield, CheckCircle } from "lucide-react";
import { LANDING_METRICS } from "../data";

export default function HeroSection() {
  const handleScrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const whatsappUrl = `https://wa.me/917219261729?text=Hi%20Tranceform%20Fitness,%20I'm%20visiting%20your%20website%20and%20want%20to%20book%20a%20FREE%20TRIAL%20class!`;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 sm:pb-24 bg-white">
      
      {/* Background Hero Image with Premium Overlay & Parallax effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/gym_hero_banner_1781692305937.jpg"
          alt="Tranceform Fitness Gym Interior"
          className="w-full h-full object-cover object-center brightness-[0.3] contrast-[1.1]"
          referrerPolicy="no-referrer"
        />
        {/* Modern Sports Brand Contrast Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-brand-black/60"></div>
        {/* Subtle Orange Ambience Glow */}
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-brand-orange/5 rounded-full blur-[120px] animate-radial-glow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-brand-orange-dark/5 rounded-full blur-[140px] animate-radial-glow" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Trusted Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-neutral-800 shadow-lg mb-8"
        >
          <span className="flex items-center text-brand-orange">
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
          </span>
          <span className="text-[10px] font-extrabold font-plus-jakarta text-white tracking-widest uppercase">
            #1 Gym in Dhankawadi, Pune
          </span>
        </motion.div>

        {/* Hero Slogan / Headlines */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 uppercase italic font-space-grotesk leading-none"
        >
          Transform Your Body.<br />
          <span className="text-brand-orange">Transform Your Life.</span>
        </motion.h1>

        {/* Subordinate descriptions */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl text-slate-300 text-base sm:text-lg md:text-xl font-normal font-plus-jakarta leading-relaxed mb-10 text-center"
        >
          Join one of Dhankawadi's most trusted fitness communities with professional trainers, modern equipment and proven transformation programs. Located behind Bharati Vidyapeeth, Pune.
        </motion.p>

        {/* Direct conversion buttons with Nike/Gymshark hover reactions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full max-w-lg mb-16"
        >
          {/* Main Booking Callout */}
          <button
            onClick={handleScrollToBooking}
            className="flex-1 flex items-center justify-center space-x-2.5 px-8 py-4 rounded-xl font-extrabold font-space-grotesk tracking-wider uppercase text-black bg-white hover:bg-brand-orange hover:text-white hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-lg"
          >
            <Calendar className="w-4 h-4 stroke-[2.5]" />
            <span>Book Free Trial</span>
          </button>

          {/* WhatsApp Direct Line */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center space-x-2.5 px-8 py-4 rounded-xl font-extrabold font-space-grotesk tracking-wider uppercase text-white bg-brand-black hover:bg-neutral-950 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 shadow-lg border border-neutral-800"
          >
            <MessageCircle className="w-4 h-4 fill-emerald-500 text-emerald-500" />
            <span>WhatsApp Chat</span>
          </a>

          {/* Phone Hotline Dial */}
          <a
            href={`tel:${LANDING_METRICS.phone}`}
            className="flex-1 sm:flex-none flex items-center justify-center space-x-2 px-6 py-4 rounded-xl font-extrabold font-space-grotesk tracking-wider uppercase text-white bg-neutral-900/50 hover:bg-neutral-900 border border-neutral-800 hover:border-brand-orange transition-all duration-200"
          >
            <Phone className="w-4 h-4" />
            <span className="sm:hidden">Call Now</span>
          </a>
        </motion.div>

        {/* Dynamic Trust Metrics Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-2xl bg-black/80 backdrop-blur-md border border-neutral-800"
        >
          {/* Rating Metric */}
          <div className="flex flex-col items-center justify-center text-center p-3 border-r border-neutral-800 last:border-0 md:border-r">
            <div className="flex items-center text-brand-orange font-black text-2xl sm:text-3xl font-space-grotesk mb-1">
              <span>{LANDING_METRICS.averageRating}</span>
              <Star className="w-5 h-5 fill-brand-orange text-brand-orange ml-1 inline-block" />
            </div>
            <p className="text-[10px] font-extrabold text-neutral-400 font-plus-jakarta uppercase tracking-wider">
              Google Rating
            </p>
          </div>

          {/* Reviews Metric */}
          <div className="flex flex-col items-center justify-center text-center p-3 border-r border-neutral-800 last:border-0 md:border-r">
            <span className="text-2xl sm:text-3xl font-black font-space-grotesk text-white mb-1">
              {LANDING_METRICS.totalReviews.split(" ")[0]}
            </span>
            <p className="text-[10px] font-extrabold text-neutral-400 font-plus-jakarta uppercase tracking-wider">
              Real Reviews
            </p>
          </div>

          {/* Coaches Metric */}
          <div className="flex flex-col items-center justify-center text-center p-3 border-r border-neutral-800 last:border-0 md:border-r">
            <span className="text-2xl sm:text-3xl font-black font-space-grotesk text-brand-orange mb-1">
              ELITE
            </span>
            <p className="text-[10px] font-extrabold text-neutral-400 font-plus-jakarta uppercase tracking-wider">
              Certified Trainers
            </p>
          </div>

          {/* Equipment Metric */}
          <div className="flex flex-col items-center justify-center text-center p-3">
            <span className="text-2xl sm:text-3xl font-black font-space-grotesk text-white mb-1">
              PREMIUM
            </span>
            <p className="text-[10px] font-extrabold text-neutral-400 font-plus-jakarta uppercase tracking-wider">
              Modern Equipment
            </p>
          </div>
        </motion.div>
      </div>

      {/* Elegant Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-200"></div>
    </section>
  );
}
