import { Github, Linkedin, Instagram, Heart } from 'lucide-react';
import { navLinks } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-navy-800/50">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <a href="#" className="text-xl font-bold text-navy-100 hover:text-amber-400 transition-colors">
              rivaldo<span className="text-amber-400">.</span>dev
            </a>
            <p className="mt-3 text-sm text-navy-400 leading-relaxed max-w-xs">
              Mahasiswa Sistem Informasi yang berfokus pada pengembangan web, desain kreatif, dan manajemen database.
            </p>
            <div className="mt-4 flex gap-3">
              {[
                { Icon: Github, href: 'https://github.com/Yourdevelover', label: 'GitHub' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/rivaldo-aldo-34b160340/', label: 'LinkedIn' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-2 rounded-lg text-navy-500 hover:text-amber-400 transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-navy-200 mb-4">Navigasi</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-navy-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-navy-200 mb-4">Kontak</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:rivaldo@example.com" className="text-sm text-navy-400 hover:text-amber-400 transition-colors">
                  rrivald20@gmail.com
                </a>
              </li>
              <li className="text-sm text-navy-400">Jakarta, Indonesia</li>
              <li className="text-sm text-navy-400">Terbuka untuk remote & on-site</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-navy-500">
            &copy; {new Date().getFullYear()} Rivaldo. All rights reserved.
          </p>
          <p className="text-xs text-navy-500 flex items-center gap-1">
            Dibangun dengan <Heart size={12} className="text-amber-500" /> dan banyak kopi
          </p>
        </div>
      </div>
    </footer>
  );
}
