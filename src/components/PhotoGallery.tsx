import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Camera, ZoomIn, Eye, Sparkles } from "lucide-react";
import { GALLERY } from "../data";

export default function PhotoGallery() {
  const [filter, setFilter] = useState<"all" | "gym" | "equipment" | "classes" | "members">("all");
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const filteredItems = filter === "all" ? GALLERY : GALLERY.filter(i => i.category === filter);

  return (
    <section id="gallery" className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] tracking-[0.3em] font-extrabold text-brand-orange uppercase mb-3 block font-space-grotesk">
            INSIDE OUR SANCTUARY
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-brand-black uppercase italic tracking-tight font-space-grotesk mb-6 font-space-grotesk">
            Explore Facilities
          </h2>
          <div className="w-20 h-1 bg-brand-orange mx-auto mb-6"></div>
          <p className="text-slate-500 font-plus-jakarta text-base sm:text-lg">
            A premium visual tour of our clean, motivating, high-performance training floor, professional cardio section, and elite group workshop spaces behind Bharati Vidyapeeth, Pune.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { tag: "all", label: "All Photos" },
            { tag: "gym", label: "Gym Interior" },
            { tag: "equipment", label: "Strength & Equipment" },
            { tag: "classes", label: "Classes & Spars" },
            { tag: "members", label: "Active Members" }
          ].map((tab) => (
            <button
              key={tab.tag}
              onClick={() => setFilter(tab.tag as any)}
              className={`px-4.5 py-2.5 rounded-xl text-xs font-bold font-plus-jakarta uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                filter === tab.tag
                  ? "bg-brand-orange text-white shadow-md font-black"
                  : "bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-brand-black border border-slate-200/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Image Grid with Animation Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout bg-black">
            {filteredItems.map((photo) => (
              <motion.div
                layout
                key={photo.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-50 border border-slate-100 cursor-pointer shadow-sm hover:shadow-md"
                onClick={() => setSelectedPhoto(photo.imageUrl)}
              >
                {/* Image */}
                <img
                  src={photo.imageUrl}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Cover Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-black uppercase tracking-widest text-brand-orange bg-brand-black px-2 py-0.5 rounded border border-brand-orange/20 font-space-grotesk">
                        {photo.category}
                      </span>
                      <p className="text-sm font-bold text-white font-space-grotesk mt-2">
                        {photo.caption}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-md">
                      <Eye className="w-4.5 h-4.5" />
                    </div>
                  </div>
                </div>

                {/* Subtle visual lens indicator */}
                <div className="absolute top-4 right-4 p-2 rounded-lg bg-white/85 border border-slate-150 text-slate-500 group-hover:text-brand-orange group-hover:border-brand-orange/30 transition-all">
                  <Camera className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Lightbox Viewer */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhoto(null)}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
            >
              <button 
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-6 right-6 text-neutral-400 hover:text-white text-3xl font-light focus:outline-none"
              >
                &times;
              </button>
              
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="relative max-w-4xl max-h-[80vh] overflow-hidden rounded-xl border border-neutral-800 bg-black"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedPhoto}
                  alt="High quality facility preview"
                  className="max-h-[75vh] w-auto max-w-full object-contain mx-auto block"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
