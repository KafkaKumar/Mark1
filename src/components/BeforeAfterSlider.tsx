import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import { ArrowLeftRight, CheckCircle2 } from 'lucide-react';

interface TransformationScene {
  id: string;
  name: string;
  roomType: string;
  beforeImg: string;
  afterImg: string;
  beforeAlt: string;
  afterAlt: string;
}

const SCENES: TransformationScene[] = [
  {
    id: 'salon',
    name: 'Contemporary Grand Salon',
    roomType: 'Living, Hallway & Architectural Pillars',
    beforeImg: '/images/matched_living_before_1791118582550.jpg',
    afterImg: '/images/living_after_bespoke_1791118277448.jpg',
    beforeAlt: 'Raw concrete shell with identical doorways, halls, and pillars before renovation',
    afterAlt: 'Completed bright luxury salon with identical doorways, halls, marble finishes, and pillars',
  },
  {
    id: 'penthouse',
    name: 'Skyview Duplex Penthouse',
    roomType: 'Grand Living & Double-Height Atrium',
    beforeImg: '/images/matched_penthouse_before_1791118596805.jpg',
    afterImg: '/images/hero_luxury_penthouse_1791094202424.jpg',
    beforeAlt: 'Raw concrete shell of penthouse living room before renovation, identical angle',
    afterAlt: 'Completed luxury penthouse with bookmatched marble wall and cove lighting, identical angle',
  },
];

export const BeforeAfterSlider: React.FC = () => {
  const [activeSceneId, setActiveSceneId] = useState<string>('salon');
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentScene = SCENES.find((s) => s.id === activeSceneId) || SCENES[0];

  useEffect(() => {
    if (!containerRef.current) return;
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percent);
  }, []);

  const onMouseDown = () => setIsDragging(true);
  const onMouseUp = () => setIsDragging(false);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section id="before-after" className="py-24 bg-[#0a0a0c] border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-medium mb-3">
            Identical Camera Angle
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-normal tracking-tight mb-4">
            From Bare Shell to Architectural Opulence
          </h2>
          <p className="text-neutral-400 text-sm font-light leading-relaxed">
            Slide the divider to see the exact millimeter transformation. Captured from the identical static camera angle to showcase structural, acoustic, and joinery milestones.
          </p>
        </div>

        {/* Scene Selector Tabs */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {SCENES.map((scene) => (
            <button
              key={scene.id}
              onClick={() => {
                setActiveSceneId(scene.id);
                setSliderPos(50);
              }}
              className={`px-4 py-2 text-xs font-medium tracking-wider uppercase rounded-sm transition-all cursor-pointer ${
                activeSceneId === scene.id
                  ? 'bg-[#c5a880] text-black shadow-md font-semibold'
                  : 'bg-neutral-900/80 text-neutral-400 hover:text-white hover:bg-neutral-800'
              }`}
            >
              {scene.name}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            onTouchMove={onTouchMove}
            className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-sm overflow-hidden select-none cursor-ew-resize border border-neutral-800 shadow-2xl bg-neutral-950"
          >
            {/* "After" Image (Complete luxury interior from exact same camera angle) */}
            <img
              src={currentScene.afterImg}
              alt={currentScene.afterAlt}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              referrerPolicy="no-referrer"
              draggable={false}
            />

            {/* "Before" Image (Clipped overlay from exact same camera angle) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={currentScene.beforeImg}
                alt={currentScene.beforeAlt}
                className="absolute inset-0 h-full object-cover max-w-none"
                style={{ width: containerWidth ? `${containerWidth}px` : '100%' }}
                referrerPolicy="no-referrer"
                draggable={false}
              />

              {/* "Before" Label */}
              <div className="absolute top-5 left-5 px-3 py-1.5 bg-black/85 backdrop-blur-md border border-neutral-700/60 text-white text-[11px] font-mono uppercase tracking-wider rounded-sm shadow-md">
                Before: Bare Civil Shell
              </div>
            </div>

            {/* "After" Label */}
            <div className="absolute top-5 right-5 px-3 py-1.5 bg-[#c5a880] text-black text-[11px] font-mono uppercase font-bold tracking-wider rounded-sm shadow-md pointer-events-none">
              After: Completed Bespoke Space
            </div>

            {/* Draggable Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)] z-20 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              {/* Drag Handle Button */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-black/90 border-2 border-white text-white flex items-center justify-center shadow-2xl backdrop-blur-sm cursor-grab active:cursor-grabbing pointer-events-auto">
                <ArrowLeftRight className="w-4 h-4 text-[#c5a880]" />
              </div>
            </div>

            {/* Bottom Scene Indicator */}
            <div className="absolute bottom-4 left-6 px-3 py-1 rounded-sm bg-black/80 backdrop-blur-md border border-neutral-800 text-[11px] text-neutral-300 font-serif italic pointer-events-none">
              {currentScene.name} · {currentScene.roomType}
            </div>

            {/* Subtle bottom interaction prompt */}
            <div className="absolute bottom-4 right-6 px-3.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-neutral-800 text-[11px] text-neutral-300 flex items-center gap-2 pointer-events-none">
              <ArrowLeftRight className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>Drag to compare</span>
            </div>
          </div>

          {/* Transformation Milestones Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="p-6 rounded-sm bg-neutral-950/60 border border-neutral-800/80">
              <div className="text-[#c5a880] font-serif text-lg mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Single-Angle Geometry Check</span>
              </div>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Notice how window openings, datum heights, and structural columns align to the exact millimeter between the raw civil shell and the final millwork installation.
              </p>
            </div>

            <div className="p-6 rounded-sm bg-neutral-950/60 border border-neutral-800/80">
              <div className="text-[#c5a880] font-serif text-lg mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>50-Point Structural Audit</span>
              </div>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                From conduit waterproofing and laser floor leveling to moisture testing on marine-grade ply substrates before marble and veneer cladding.
              </p>
            </div>

            <div className="p-6 rounded-sm bg-neutral-950/60 border border-neutral-800/80">
              <div className="text-[#c5a880] font-serif text-lg mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Zero Civil Dust on Handover</span>
              </div>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                All cabinetry, fluted wood slats, and quartz slabs are fabricated off-site in our dust-controlled German CNC facility for rapid, pristine on-site assembly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
