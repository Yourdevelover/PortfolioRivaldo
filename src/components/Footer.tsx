import { Github, Linkedin, Heart } from 'lucide-react';
import { navLinks } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="relative">
      {/* Top divider */}
      <div className="w-full h-px bg-white/[0.06]" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-12 sm:py-16 safe-bottom">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <a href="#" className="text-lg font-semibold text-white hover:text-apple-blue transition-colors">
              rivaldo<span className="text-apple-blue">.</span>dev
            </a>
            <p className="mt-3 text-sm text-white/40 leading-relaxed max-w-xs">
              Sistem Informasi yang berfokus pada pengembangan web, desain kreatif, dan manajemen database.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { Icon: Github, href: 'https://github.com/Yourdevelover', label: 'GitHub' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/rivaldo-aldo-34b160340/', label: 'LinkedIn' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-full text-white/30 hover:text-white/70 transition-colors apple-focus"
                  style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white/60 mb-4">Navigasi</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/30 hover:text-white/60 transition-colors apple-focus"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-sm font-semibold text-white/60 mb-4">Kontak</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:rrivald20@gmail.com" className="text-sm text-white/30 hover:text-white/60 transition-colors apple-focus">
                  rrivald20@gmail.com
                </a>
              </li>
              <li className="text-sm text-white/30">Jakarta, Indonesia</li>
              <li className="text-sm text-white/30">Terbuka untuk remote & on-site</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} Rivaldo. All rights reserved.
          </p>
          <p className="text-xs text-white/20 flex items-center gap-1">
            Dibangun dengan <Heart size={10} className="text-apple-red" /> dan banyak kopi
          </p>
        </div>
      </div>
    </footer>
  );
}
