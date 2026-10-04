import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS, TestimonialItem } from '../data/testimonials';
import { Star, CheckCircle, Quote, Play, ChevronLeft, ChevronRight } from 'lucide-react';

export const TestimonialSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [currentVideoTestimonial, setCurrentVideoTestimonial] = useState<TestimonialItem | null>(null);

  useEffect(() => {
    if (!videoModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setVideoModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [videoModalOpen]);

  const activeReview = TESTIMONIALS[activeIdx];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-24 bg-[#0c0d0e] border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-medium mb-3">
              Homeowner Experiences
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-normal tracking-tight">
              Verified Client Testimonies
            </h2>
          </div>

          {/* Aggregate Rating Trust Marker */}
          <div className="flex items-center gap-3 p-3 bg-neutral-950/80 border border-neutral-800 rounded-sm">
            <div className="flex gap-1 text-[#c5a880]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#c5a880]" />
              ))}
            </div>
            <div className="text-xs text-neutral-300">
              <span className="font-semibold text-white">4.9 / 5.0</span>
              <span className="text-neutral-500"> · </span>
              <span className="text-neutral-400">480+ Google Reviews</span>
            </div>
          </div>
        </div>

        {/* Featured Testimonial Spotlight with Smooth Transitions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          {/* Main Quote Card */}
          <div className="lg:col-span-8 bg-neutral-950/90 border border-neutral-800/80 p-8 sm:p-10 rounded-sm relative flex flex-col justify-between">
            <div className="absolute top-6 right-8 text-[#c5a880]/15 pointer-events-none">
              <Quote className="w-20 h-20" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeReview.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.35 }}
                className="relative z-10"
              >
                {/* Project Metadata Bar */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400 mb-6 font-mono">
                  <span className="text-[#c5a880] font-medium">{activeReview.projectType}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeReview.squareFeet}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-400">{activeReview.handoverDuration}</span>
                </div>

                {/* Primary Quote */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-white leading-relaxed mb-6 font-normal">
                  "{activeReview.quote}"
                </h3>

                {/* Detailed Review Prose */}
                <p className="text-sm text-neutral-300 font-light leading-relaxed mb-8">
                  {activeReview.detailedReview}
                </p>

                {/* Highlights tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {activeReview.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-[11px] text-neutral-300 rounded-sm flex items-center gap-1.5"
                    >
                      <CheckCircle className="w-3 h-3 text-[#c5a880]" />
                      <span>{h}</span>
                    </span>
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between border-t border-neutral-900 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-[#c5a880]/20 border border-[#c5a880]/40 flex items-center justify-center text-[#c5a880] font-serif font-semibold text-sm">
                      {activeReview.avatarInitial}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white flex items-center gap-1.5">
                        <span>{activeReview.clientName}</span>
                        {activeReview.verified && (
                          <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-0.5">
                            <CheckCircle className="w-3 h-3" /> Verified Homeowner
                          </span>
                        )}
                      </h4>
                      <p className="text-xs text-neutral-400">{activeReview.roleOrLocation}</p>
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="p-2 rounded-sm bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                      aria-label="Previous Testimonial"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-mono text-neutral-500 px-1">
                      0{activeIdx + 1} / 0{TESTIMONIALS.length}
                    </span>
                    <button
                      onClick={handleNext}
                      className="p-2 rounded-sm bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                      aria-label="Next Testimonial"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Video Walkthrough Preview Card */}
          <div className="lg:col-span-4 bg-neutral-950/90 border border-neutral-800/80 rounded-sm overflow-hidden flex flex-col justify-between">
            <div className="relative aspect-[4/3] bg-neutral-900 overflow-hidden group">
              <img
                src="/images/project_master_suite_1791094233175.jpg"
                alt="Client Home Walkthrough Video Preview"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <button
                  onClick={() => {
                    setCurrentVideoTestimonial(activeReview);
                    setVideoModalOpen(true);
                  }}
                  className="w-14 h-14 rounded-full bg-[#c5a880] text-black flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform cursor-pointer"
                  aria-label="Play Client Video Walkthrough"
                >
                  <Play className="w-5 h-5 fill-black ml-0.5" />
                </button>
              </div>
              <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-black/80 backdrop-blur-sm text-[11px] text-white font-mono rounded-sm">
                Video Walkthrough · 2:45 min
              </div>
            </div>

            <div className="p-6">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#c5a880] block mb-1">
                Live Home Walkthrough
              </span>
              <h4 className="text-base font-serif text-white font-medium mb-2">
                "See our master suite before and after the 32-day handover."
              </h4>
              <p className="text-xs text-neutral-400 font-light leading-relaxed mb-4">
                Watch Dr. Sunita Varma walk through her bedroom suite, demonstrating Blum sensor lighting and acoustic isolation.
              </p>
              <button
                onClick={() => {
                  setCurrentVideoTestimonial(activeReview);
                  setVideoModalOpen(true);
                }}
                className="text-xs text-[#c5a880] hover:text-[#d4b993] font-semibold uppercase tracking-wider flex items-center gap-1 cursor-pointer"
              >
                <span>Watch Walkthrough Film</span>
                <Play className="w-3 h-3 fill-current ml-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {TESTIMONIALS.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setActiveIdx(idx)}
              className={`p-4 text-left rounded-sm border transition-all cursor-pointer ${
                activeIdx === idx
                  ? 'bg-neutral-900 border-[#c5a880] shadow-md'
                  : 'bg-neutral-950/60 border-neutral-800 text-neutral-400 hover:border-neutral-700'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-serif font-semibold text-white">{t.clientName}</span>
              </div>
              <p className="text-[11px] text-neutral-400 truncate">{t.projectName}</p>
              <span className="text-[10px] text-[#c5a880] font-mono mt-1 block">{t.squareFeet}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Video Modal Simulation */}
      <AnimatePresence>
        {videoModalOpen && currentVideoTestimonial && (
          <div
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setVideoModalOpen(false);
              }
            }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#121316] border border-neutral-800 rounded-sm max-w-3xl w-full p-6 relative shadow-2xl"
            >
              <button
                onClick={() => setVideoModalOpen(false)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-white text-xs uppercase cursor-pointer"
              >
                Close ✕
              </button>

              <div className="aspect-video w-full bg-black rounded-sm overflow-hidden mb-4 relative flex items-center justify-center">
                <img
                  src="/images/project_master_suite_1791094233175.jpg"
                  alt="Video Player Frame"
                  className="w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute text-center p-6 bg-black/60 backdrop-blur-sm rounded-sm max-w-md">
                  <Quote className="w-8 h-8 text-[#c5a880] mx-auto mb-2 opacity-80" />
                  <h4 className="text-lg font-serif text-white mb-2">
                    Client Story: {currentVideoTestimonial.clientName}
                  </h4>
                  <p className="text-xs text-neutral-300 mb-4">
                    "{currentVideoTestimonial.quote}"
                  </p>
                  <div className="text-[11px] font-mono text-[#c5a880]">
                    Project: {currentVideoTestimonial.projectName} ({currentVideoTestimonial.squareFeet})
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-neutral-400">
                <span>Handover Completed in {currentVideoTestimonial.handoverDuration}</span>
                <span className="text-emerald-400 font-mono">100% On-Schedule Guarantee Met</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
