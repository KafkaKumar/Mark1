import React from 'react';
import { ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#08080a] border-t border-neutral-900 text-neutral-400 py-16 text-xs">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="#"
              className="text-xl font-serif tracking-[0.28em] font-medium text-white uppercase hover:text-[#c5a880] transition-colors block"
            >
              ARCANE STUDIO
            </a>
            <p className="text-neutral-400 text-xs font-light leading-relaxed max-w-sm">
              Luxury interior architecture, custom precision millwork, and bespoke spatial curation for high-end residential and boutique commercial spaces.
            </p>
            <div className="pt-2 text-neutral-300 space-y-1.5 font-mono text-[11px]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>Arcane Design Pavilion, 450 Grand Avenue, Design District</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
                <a href="tel:+18005552722" className="hover:text-white transition-colors">+1 (800) 555-ARCANE</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#c5a880]" />
                <a href="mailto:studio@arcanestudio.luxury" className="hover:text-white transition-colors">studio@arcanestudio.luxury</a>
              </div>
            </div>
          </div>

          {/* Portfolio Links */}
          <div className="space-y-3">
            <span className="text-white uppercase font-semibold tracking-wider text-[11px] block">
              Portfolio
            </span>
            <ul className="space-y-2">
              <li><a href="#gallery" className="hover:text-white transition-colors">Luxury Penthouses</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Modular Kitchens</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Master Sanctuaries</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Living & Dining Salons</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Commercial Studios</a></li>
              <li><a href="#before-after" className="hover:text-white transition-colors">Before & After Showcase</a></li>
            </ul>
          </div>

          {/* Studio Focus */}
          <div className="space-y-3">
            <span className="text-white uppercase font-semibold tracking-wider text-[11px] block">
              Studio
            </span>
            <ul className="space-y-2">
              <li><a href="#gallery" className="hover:text-white transition-colors">Curated Portfolio</a></li>
              <li><a href="#before-after" className="hover:text-white transition-colors">Transformations</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Client Testimonies</a></li>
              <li><button onClick={onOpenBooking} className="hover:text-white transition-colors cursor-pointer text-left">Private Consultation</button></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">10-Year Craftsmanship Warranty</a></li>
            </ul>
          </div>

          {/* Direct Action Column */}
          <div className="space-y-3">
            <span className="text-white uppercase font-semibold tracking-wider text-[11px] block">
              Direct Inquiries
            </span>
            <p className="text-neutral-400 text-xs font-light leading-relaxed">
              Ready to begin your space planning? Reserve an architectural consultation with our Design Director.
            </p>
            <button
              onClick={onOpenBooking}
              className="mt-3 px-4 py-2.5 bg-[#c5a880] hover:bg-[#d4b993] text-black font-semibold text-xs uppercase tracking-wider rounded-sm transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>Schedule Call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} Arcane Studio. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-300 transition-colors">Privacy Policy</a>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:text-neutral-300 transition-colors">Terms of Service</a>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:text-neutral-300 transition-colors">Warranty Charter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
