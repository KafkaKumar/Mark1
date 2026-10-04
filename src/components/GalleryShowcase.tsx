import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectItem, PROJECTS } from '../data/projects';
import { ArrowUpRight, X, MapPin, Maximize2, Check, Clock } from 'lucide-react';

interface GalleryShowcaseProps {
  onSelectProjectForConsultation: (project: ProjectItem) => void;
}

export const GalleryShowcase: React.FC<GalleryShowcaseProps> = ({ onSelectProjectForConsultation }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    if (!selectedProject) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'penthouse', label: 'Luxury Penthouses' },
    { id: 'kitchen', label: 'Modular Kitchens' },
    { id: 'bedroom', label: 'Master Suites' },
    { id: 'residential', label: 'Living Salons' },
    { id: 'commercial', label: 'Commercial Studios' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="gallery" className="pt-28 md:pt-36 pb-24 bg-[#0c0d0e] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-medium mb-3">
              Curated Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-normal tracking-tight">
              Dynamic Project Showcase
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md font-light leading-relaxed">
            Explore bespoke residences and commercial environments delivered with uncompromising architectural integrity and precision millwork.
          </p>
        </div>

        {/* Interactive Filter Tabs (functional segmented buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {filters.map((f) => {
            const isActive = activeFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 text-xs font-medium tracking-wider uppercase transition-all duration-200 rounded-sm whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#c5a880] text-black shadow-md'
                    : 'bg-neutral-900/60 text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Project Grid with Animated Presence */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group bg-neutral-950/60 border border-neutral-800/80 rounded-sm overflow-hidden flex flex-col hover:border-neutral-700 transition-all duration-300"
              >
                {/* Image Frame with hover zoom */}
                <div
                  className="relative aspect-[4/3] overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Corner affordance indicator */}
                  <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 backdrop-blur-sm text-neutral-300 group-hover:text-white transition-colors">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  {/* Unboxed metadata on image bottom */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-neutral-200">
                    <span className="font-serif italic tracking-wide">{project.categoryLabel}</span>
                    <span className="flex items-center gap-1 font-mono text-[11px] text-neutral-300">
                      <Clock className="w-3 h-3 text-[#c5a880]" />
                      {project.timeline}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed location & area metadata with clean separator */}
                    <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
                      <span className="flex items-center gap-1 truncate">
                        <MapPin className="w-3 h-3 text-[#c5a880]" />
                        {project.location}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono text-neutral-300 shrink-0">{project.area}</span>
                    </div>

                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="text-xl font-serif text-white font-medium group-hover:text-[#c5a880] transition-colors cursor-pointer mb-2"
                    >
                      {project.title}
                    </h3>

                    <p className="text-xs text-neutral-400 font-light leading-relaxed line-clamp-2 mb-4">
                      {project.tagline}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-900 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5 text-[11px] text-neutral-400">
                      {project.materials.slice(0, 2).map((m, i) => (
                        <span key={i} className="text-neutral-300">
                          {m}{i < 1 ? ' ·' : ''}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs text-[#c5a880] hover:text-[#d4b993] font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition-transform cursor-pointer"
                    >
                      <span>Explore</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox / Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedProject(null);
              }
            }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-[#121316] border border-neutral-800 rounded-sm max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 hover:bg-black text-neutral-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Hero Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-black/30" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-xs uppercase tracking-[0.2em] text-[#c5a880] mb-2 font-medium">
                    {selectedProject.categoryLabel} · {selectedProject.area}
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white font-medium">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-8">
                {/* Meta details bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-neutral-800 text-xs">
                  <div>
                    <span className="text-neutral-500 block mb-1">Location</span>
                    <span className="text-neutral-200 font-medium">{selectedProject.location}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block mb-1">Execution Time</span>
                    <span className="text-[#c5a880] font-medium font-mono">{selectedProject.timeline}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block mb-1">Architectural Style</span>
                    <span className="text-neutral-200 font-medium">{selectedProject.style}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block mb-1">Floor Area</span>
                    <span className="text-neutral-200 font-medium font-mono">{selectedProject.area}</span>
                  </div>
                </div>

                {/* Narrative */}
                <div>
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">
                    Design Narrative & Scope
                  </h4>
                  <p className="text-sm text-neutral-300 font-light leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
                    Architectural & Engineering Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedProject.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <Check className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Material Palette */}
                <div>
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
                    Bespoke Material Palette
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.materials.map((mat, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 text-xs bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-sm"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Client Quote */}
                {selectedProject.clientQuote && (
                  <div className="p-5 rounded-sm bg-neutral-900/60 border-l-2 border-[#c5a880]">
                    <p className="font-serif italic text-base text-neutral-200 mb-3">
                      "{selectedProject.clientQuote.text}"
                    </p>
                    <div className="text-xs text-neutral-400">
                      <span className="font-medium text-white">{selectedProject.clientQuote.author}</span>
                      <span aria-hidden="true"> · </span>
                      <span>{selectedProject.clientQuote.role}</span>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-xs text-neutral-400 hover:text-white uppercase tracking-wider cursor-pointer"
                  >
                    Close Showcase
                  </button>

                  <button
                    onClick={() => {
                      const proj = selectedProject;
                      setSelectedProject(null);
                      onSelectProjectForConsultation(proj);
                    }}
                    className="px-6 py-3 bg-[#c5a880] hover:bg-[#d4b993] text-black text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors cursor-pointer flex items-center gap-2"
                  >
                    <span>Inquire About Replicating This Style</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
