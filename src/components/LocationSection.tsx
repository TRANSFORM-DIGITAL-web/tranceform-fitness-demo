import { MapPin, Phone, Clock, Compass, ExternalLink, CalendarDays } from "lucide-react";
import { LANDING_METRICS, WORKING_HOURS } from "../data";

export default function LocationSection() {
  return (
    <section id="location" className="relative py-24 bg-brand-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Working Hours / Address info - Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[11px] tracking-[0.3em] font-extrabold text-brand-orange uppercase mb-3 block font-space-grotesk">
                HOW TO FIND US
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-brand-black uppercase italic tracking-tight font-space-grotesk mb-6 font-space-grotesk">
                Our Location
              </h2>
              <div className="w-16 h-1 bg-brand-orange mb-8"></div>

              {/* Real Address Card */}
              <div className="flex items-start space-x-4 bg-white border border-slate-200 rounded-2xl p-6 mb-6 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-150 flex items-center justify-center text-brand-orange inline-flex shrink-0">
                  <MapPin className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-space-grotesk text-brand-black uppercase tracking-wider">
                    Gym Address
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-plus-jakarta mt-2 leading-relaxed">
                    Plot No 11,12 Pushkaraj Society,<br />
                    Behind Bharati Vidyapeeth, Opp RamaKrishna Hostel,<br />
                    Dhankawadi, Pune, Maharashtra 411043
                  </p>
                </div>
              </div>

              {/* Phone Line Card */}
              <div className="flex items-start space-x-4 bg-white border border-slate-200 rounded-2xl p-6 mb-6 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-150 flex items-center justify-center text-brand-orange inline-flex shrink-0">
                  <Phone className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-space-grotesk text-brand-black uppercase tracking-wider">
                    Gym Landline Hotline
                  </h4>
                  <a
                    href={`tel:${LANDING_METRICS.phone}`}
                    className="text-lg sm:text-xl font-extrabold text-brand-orange hover:underline font-space-grotesk mt-2 block"
                  >
                    {LANDING_METRICS.phone}
                  </a>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="flex items-start space-x-4 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-150 flex items-center justify-center text-brand-orange inline-flex shrink-0">
                  <Clock className="w-5 h-5 text-brand-orange" />
                </div>
                <div className="w-full">
                  <h4 className="text-sm font-bold font-space-grotesk text-brand-black uppercase tracking-wider mb-2">
                    Hours Of Operation
                  </h4>
                  <div className="space-y-2 mt-2">
                    {WORKING_HOURS.map((wh, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs sm:text-sm font-plus-jakarta border-b border-slate-100 last:border-0 pb-1">
                        <span className="text-slate-500 font-medium">{wh.days}</span>
                        <span className="text-brand-black font-extrabold">{wh.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Maps Directions launcher button */}
            <div className="mt-8">
              <a
                href={LANDING_METRICS.googleMapsLink}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-xl font-extrabold font-space-grotesk text-xs tracking-wider uppercase text-white bg-brand-black hover:bg-brand-orange transition-colors cursor-pointer shadow-md"
              >
                <Compass className="w-4 h-4 text-white" />
                <span>Get Driving Directions</span>
                <ExternalLink className="w-3.5 h-3.5 text-white" />
              </a>
            </div>
          </div>

          {/* Map Iframe Column - Right Column */}
          <div className="lg:col-span-7 flex flex-col items-stretch">
            <div className="flex-1 min-h-[350px] lg:min-h-[480px] rounded-3xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xl relative">
              
              {/* Dynamic Google Maps embed based on Pune metrics */}
              <iframe
                title="Tranceform Fitness Location on Google Maps"
                src="https://maps.google.com/maps?q=Tranceform%20Fitness%20Best%20Gym%20in%20Dhankawadi%20Pune&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              ></iframe>
              
              {/* Top Indicator label */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-slate-200 px-4 py-2.5 rounded-xl shadow shadow-slate-200 flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping shrink-0"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute left-4 shrink-0"></div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-black font-plus-jakarta">
                  Tranceform Fitness Pune
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
