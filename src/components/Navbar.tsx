import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/portfolio';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 safe-top transition-all duration-500 ${
        isScrolled ? 'nav-glass' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl w-full mx-auto px-5 sm:px-6 flex items-center justify-between h-12">
        {/* Logo */}
        <a
          href="#"
          className="text-sm font-semibold text-white/90 hover:text-white transition-colors apple-focus"
        >
          rivaldo<span className="text-apple-blue">.</span>dev
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs text-white/60 hover:text-white transition-colors duration-300 font-medium apple-focus"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA — desktop */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-4 py-1.5 text-xs font-medium rounded-full bg-apple-blue text-white hover:bg-blue-500 transition-all duration-300 apple-focus"
        >
          Hubungi Saya
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden p-2 text-white/60 hover:text-white transition-colors apple-focus"
          aria-label={isMobileOpen ? 'Tutup menu' : 'Buka menu'}
        >
          {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="md:hidden fixed inset-0 top-12 z-40 safe-top" style={{
          background: 'rgba(0, 0, 0, 0.92)',
          backdropFilter: 'blur(40px) saturate(180%)',
          WebkitBackdropFilter: 'blur(40px) saturate(180%)',
        }}>
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="text-2xl font-semibold text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileOpen(false)}
              className="mt-4 px-6 py-2.5 text-sm font-medium rounded-full bg-apple-blue text-white hover:bg-blue-500 transition-colors"
            >
              Hubungi Saya
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
