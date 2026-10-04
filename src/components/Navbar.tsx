import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Showcase', href: '#gallery' },
    { label: 'Before & After', href: '#before-after' },
    { label: 'Client Reviews', href: '#testimonials' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0c0d0e]/90 backdrop-blur-md border-b border-neutral-800/60 py-3 shadow-xl'
          : 'bg-gradient-to-b from-[#0c0d0e]/90 via-[#0c0d0e]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a
          href="#"
          className="text-xl md:text-2xl font-serif tracking-[0.28em] font-medium text-white uppercase hover:text-[#c5a880] transition-all duration-300 drop-shadow-sm inline-block"
        >
          ARCANE STUDIO
        </a>

        {/* Zone 2: Clean Text Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#c5a880] transition-colors py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#c5a880] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="tel:+18005552722"
            className="flex items-center gap-2 text-xs text-neutral-400 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
            <span className="hidden xl:inline">+1 (800) 555-ARCANE</span>
          </a>
          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-[#c5a880] hover:bg-[#d4b993] active:scale-[0.98] transition-all rounded-sm cursor-pointer whitespace-nowrap flex items-center gap-1.5 shadow-sm"
          >
            <span>Book Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="px-3.5 py-2 text-xs font-medium uppercase tracking-wider text-black bg-[#c5a880] rounded-sm sm:hidden"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e0f11] border-b border-neutral-800 px-6 py-6 transition-all animate-fadeIn">
          <div className="flex flex-col gap-4 text-base font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-300 hover:text-[#c5a880] py-2 border-b border-neutral-800/50"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="mt-4 w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-black bg-[#c5a880] rounded-sm"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
