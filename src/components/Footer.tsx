import { Github, Linkedin, Heart } from 'lucide-react';
import { navLinks } from '../data/portfolio';
import MagneticButton from './MagneticButton';

export default function Footer() {
  return (
    <footer className="relative">
      {/* Top liquid divider line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-14 sm:py-20 safe-bottom">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <MagneticButton href="#" className="inline-flex items-center gap-1.5 text-lg font-black text-white tracking-tight">
              <span>rivaldo</span>
              <span className="text-apple-cyan">.</span>
              <span className="text-xs font-mono font-semibold text-apple-blue px-2 py-0.5 rounded-full bg-apple-blue/10 border border-apple-blue/20">dev</span>
            </MagneticButton>
            
            <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-xs font-normal">
              Mahasiswa Sistem Informasi S1 yang berfokus pada Full-Stack Web, Mobile Applications, dan UI/UX Design.
            </p>

            <div className="mt-6 flex gap-3">
              {[
                { Icon: Github, href: 'https://github.com/Yourdevelover', label: 'GitHub' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/rivaldo-aldo-34b160340/', label: 'LinkedIn' },
              ].map(({ Icon, href, label }) => (
                <MagneticButton
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-full text-white/40 hover:text-white transition-colors apple-glass-hover"
                >
                  <Icon size={18} />
                </MagneticButton>
              ))}
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/70 mb-5">Navigasi Utama</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-apple-cyan transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact & Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/70 mb-5">Informasi</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li>
                <a href="mailto:rrivald20@gmail.com" className="hover:text-apple-cyan transition-colors font-medium">
                  rrivald20@gmail.com
                </a>
              </li>
              <li>Tangerang Selatan & Jakarta, ID</li>
              <li className="text-apple-green font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-apple-green animate-pulse" />
                Terbuka untuk semua
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 font-mono">
            &copy; {new Date().getFullYear()} Rivaldo. All rights reserved.
          </p>
          <p className="text-xs text-white/40 flex items-center gap-1.5 font-medium">
            <span>Dibuat dengan</span>
            <Heart size={12} className="text-apple-red fill-apple-red animate-pulse" />
            <span>& React + TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
