import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Droplet } from 'lucide-react';
import { navLinks } from '../data/portfolio';
import MagneticButton from './MagneticButton';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section scrollSpy
      const sections = navLinks.map((l) => l.href.substring(1));
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 250 && rect.bottom >= 250;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 safe-top pt-4 sm:pt-6 px-4 sm:px-8 pointer-events-none">
      <nav
        className={`max-w-5xl w-full mx-auto flex items-center justify-between px-6 py-3 transition-all duration-300 pointer-events-auto liquid-water-navbar ${
          isScrolled ? 'scale-[0.98] shadow-2xl' : ''
        }`}
      >
        {/* Brand Logo */}
        <MagneticButton href="#" className="flex items-center gap-2 text-base font-extrabold text-white tracking-tight group">
          <div className="p-1.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 group-hover:scale-110 transition-transform">
            <Droplet size={15} />
          </div>
          <span>rivaldo</span>
          <span className="text-sky-400 group-hover:scale-125 transition-transform inline-block">.</span>
          <span className="text-[11px] font-mono font-bold text-sky-400 px-2 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20">dev</span>
        </MagneticButton>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/40 backdrop-blur-xl border border-slate-800">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-200 block select-none ${
                    isActive
                      ? 'text-white bg-sky-500 shadow-md shadow-sky-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA — Desktop */}
        <div className="hidden md:block">
          <MagneticButton
            href="#contact"
            className="liquid-btn text-xs font-extrabold px-5 py-2.5"
          >
            <Sparkles size={14} />
            Hubungi Saya
          </MagneticButton>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden p-2 rounded-full bg-slate-900/80 border border-slate-700 text-white hover:text-sky-400 transition-all apple-focus"
          aria-label={isMobileOpen ? 'Tutup menu' : 'Buka menu'}
        >
          {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMobileOpen && (
        <div
          className="md:hidden fixed inset-0 top-0 z-40 safe-top flex flex-col justify-between p-8 pointer-events-auto"
          style={{
            background: 'rgba(2, 6, 23, 0.96)',
            backdropFilter: 'blur(50px) saturate(180%)',
            WebkitBackdropFilter: 'blur(50px) saturate(180%)',
          }}
        >
          <div className="flex items-center justify-between pt-4 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-2 text-lg font-black text-white">
              <Droplet size={20} className="text-sky-400" />
              <span>rivaldo.dev</span>
            </div>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="p-2 rounded-full bg-slate-800 text-white"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-col gap-5 my-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="text-2xl font-black text-slate-200 hover:text-sky-400 transition-colors flex items-center justify-between border-b border-slate-800/80 pb-3.5"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-sky-400 font-bold">0{navLinks.indexOf(link) + 1}</span>
              </a>
            ))}
          </nav>

          <MagneticButton
            href="#contact"
            onClick={() => setIsMobileOpen(false)}
            className="liquid-btn text-sm font-bold w-full py-4 text-center justify-center mb-6"
          >
            <Sparkles size={18} />
            Hubungi Saya Sekarang
          </MagneticButton>
        </div>
      )}
    </header>
  );
}
