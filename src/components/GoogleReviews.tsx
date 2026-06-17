import { motion } from "motion/react";
import { Star, ShieldCheck, SquareUser, RefreshCw } from "lucide-react";
import { REVIEWS, LANDING_METRICS } from "../data";

export default function GoogleReviews() {
  return (
    <section id="testimonials" className="relative py-24 bg-brand-light overflow-hidden">
      {/* Structural bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-200"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Google Rating Banner Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 pb-12 border-b border-slate-200">
          
          <div className="lg:col-span-6 text-left">
            <span className="text-[11px] tracking-[0.3em] font-extrabold text-brand-orange uppercase mb-3 block font-space-grotesk">
              THE PUBLIC VOICE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-brand-black uppercase italic tracking-tight font-space-grotesk mb-4">
              Loved By The Community
            </h2>
            <p className="text-slate-500 font-plus-jakarta text-sm sm:text-base leading-relaxed">
              Read authentic feedback from working professionals, students from Bharati Vidyapeeth, and physical enthusiasts who have made Tranceform Fitness their secondary home in Dhankawadi, Pune.
            </p>
          </div>

          {/* Big aggregate Google summary card - right */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-2xl"></div>
            
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-xl bg-slate-50 border border-slate-250 flex items-center justify-center">
                {/* Standard Google colors "G" represented elegantly */}
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                  <path d="M22.5 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 font-plus-jakarta uppercase tracking-wider">
                  Google Maps Business
                </p>
                <div className="flex items-center mt-1">
                  <span className="text-3xl font-black text-brand-black font-space-grotesk mr-2">
                    {LANDING_METRICS.averageRating}
                  </span>
                  <div className="flex text-brand-orange">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current opacity-70" />
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center sm:text-right">
              <p className="text-xl font-black font-space-grotesk text-brand-orange">
                {LANDING_METRICS.totalReviews}
              </p>
              <a
                href={LANDING_METRICS.googleMapsLink}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-slate-500 hover:text-brand-orange underline decoration-brand-orange underline-offset-4 mt-1.5 inline-block transition-colors"
              >
                Verify Live on Google Maps →
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Cards Masonry-style Flex Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pt-4">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between hover:border-brand-orange/25 hover:shadow-xl transition-all"
            >
              <div>
                {/* Reviewer Meta info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {/* User profile avatar initials */}
                    <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-150 flex items-center justify-center font-bold text-slate-700 text-sm">
                      {review.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-sm font-bold font-space-grotesk text-brand-black">
                        {review.name}
                      </p>
                      <div className="flex items-center space-x-1.5 text-slate-400 text-[11px] font-plus-jakarta mt-0.5">
                        <span>{review.date}</span>
                        {review.isVerified && (
                          <span className="flex items-center text-emerald-600 font-semibold space-x-0.5 bg-emerald-50 px-1.5 py-0.5 rounded">
                            <ShieldCheck className="w-3.5 h-3.5 fill-emerald-100" />
                            <span>Verified Local Review</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex text-brand-orange mt-1.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating ? "fill-brand-orange" : "opacity-30"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Review Paragraph text */}
                <p className="text-slate-600 font-plus-jakarta text-xs sm:text-sm leading-relaxed italic">
                  "{review.review}"
                </p>
              </div>

              {/* Minimal feedback indicator bottom */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                <span className="flex items-center">
                  <SquareUser className="w-3.5 h-3.5 mr-1" />
                  Local Guide • Pune
                </span>
                <span className="text-brand-orange font-extrabold uppercase tracking-widest text-[9px] bg-slate-50 px-2 py-0.5 rounded border border-slate-150">
                  ⭐⭐⭐⭐⭐ Google
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call of action bottom */}
        <div className="mt-16 text-center">
          <p className="text-xs text-slate-500 font-plus-jakarta">
            Already a valued member of Tranceform Family? 
            <a 
              href={LANDING_METRICS.googleMapsLink}
              target="_blank"
              rel="noreferrer"
              className="text-brand-orange font-bold hover:underline ml-1.5"
            >
              Share your transformation story on Google Maps →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
