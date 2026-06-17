import { motion } from "motion/react";
import { Award, Star, BookOpen, Clock, HeartHandshake } from "lucide-react";
import { TRAINERS } from "../data";

export default function TrainerTeam() {
  return (
    <section id="trainers" className="relative py-24 bg-white overflow-hidden">
      {/* Decorative background horizontal grid accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-slate-200"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] tracking-[0.3em] font-extrabold text-brand-orange uppercase mb-3 block font-space-grotesk">
            EXPERTS IN YOUR CORNER
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-brand-black uppercase italic tracking-tight font-space-grotesk mb-6">
            Elite Certified Coaches
          </h2>
          <div className="w-20 h-1 bg-brand-orange mx-auto mb-6"></div>
          <p className="text-slate-500 font-plus-jakarta text-base sm:text-lg">
            No uncertified gym assistants. Our trainers hold official sports medicine, kinesiology, and certified nutrition credentials to keep you 100% safe and highly result-oriented.
          </p>
        </div>

        {/* Trainer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
          {TRAINERS.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col bg-white overflow-hidden rounded-2xl border border-slate-200 hover:border-brand-orange/30 hover:shadow-2xl transition-all duration-300"
            >
              {/* Photo Area */}
              <div className="relative aspect-[3/4] overflow-hidden z-10 bg-slate-100">
                <img
                  src={trainer.imageUrl}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 brightness-95"
                  referrerPolicy="no-referrer"
                />
                {/* Visual Vignette overlay fading into card container */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                
                {/* Years Experience Badge float */}
                <div className="absolute bottom-4 left-4 bg-brand-black text-white font-extrabold font-space-grotesk text-[10px] uppercase px-3.5 py-1.5 tracking-wider rounded-lg flex items-center space-x-1.5 shadow-lg">
                  <Clock className="w-3.5 h-3.5 text-brand-orange" />
                  <span>{trainer.experience} Experience</span>
                </div>
              </div>

              {/* Coach details content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between bg-white">
                <div>
                  {/* Name and Designation */}
                  <h3 className="text-2xl font-black font-space-grotesk text-brand-black group-hover:text-brand-orange transition-colors duration-200 leading-tight">
                    {trainer.name}
                  </h3>
                  <p className="text-xs font-extrabold text-brand-orange font-plus-jakarta tracking-wider uppercase mt-1">
                    {trainer.role}
                  </p>

                  {/* Specializations List */}
                  <div className="mt-5">
                    <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest font-plus-jakarta mb-2 flex items-center">
                      <HeartHandshake className="w-3.5 h-3.5 text-brand-orange mr-1.5" />
                      Specializations
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {trainer.specialization.map((spec, i) => (
                        <span key={i} className="text-[11px] font-bold font-plus-jakarta text-slate-700 bg-slate-50 border border-slate-150 px-2.5 py-1 rounded-md">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Certifications Block */}
                  <div className="mt-5">
                    <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest font-plus-jakarta mb-2 flex items-center">
                      <Award className="w-3.5 h-3.5 text-brand-orange mr-1.5" />
                      Key Certifications
                    </p>
                    <ul className="space-y-1">
                      {trainer.certifications.map((cert, idx) => (
                        <li key={idx} className="text-xs text-slate-600 font-plus-jakarta flex items-start leading-relaxed">
                          <span className="text-brand-orange mr-1.5 font-bold">•</span>
                          <span>{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Instant Coach Interaction Booking CTA */}
                <div className="mt-8 pt-4 border-t border-slate-100">
                  <a
                    href={`https://wa.me/917219261729?text=Hi%20Tranceform%20Fitness,%20I'm%20interested%20in%20personal%20training%20sessions%20with%20coach%20${encodeURIComponent(trainer.name)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-brand-black hover:bg-brand-orange text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer"
                  >
                    <span>Request This Coach</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
