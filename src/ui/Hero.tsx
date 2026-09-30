import { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, ExternalLink, Sparkles, Bot, Palette, Code2, Droplet } from 'lucide-react';
import MagneticButton from './MagneticButton';
import TiltCard from './TiltCard';

const roles = [
  'Full-Stack Developer & Software Engineer',
  'UI/UX Designer',
  'Mobile App Developer',
  'DevOps & System Engineer',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.slice(0, displayText.length - 1)
              : currentRole.slice(0, displayText.length + 1)
          );
        },
        isDeleting ? 20 : 45
      );
    }

    return () => clearTimeout(timeout);
  }, [roleIndex, displayText, isDeleting]);

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-24 sm:py-32">
      {/* Liquid Water Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-sky-400/4 blur-[80px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[320px] h-[320px] rounded-full bg-blue-600/4 blur-[70px]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center">
        
        {/* Status Liquid Water Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/8 backdrop-blur-xl border border-white/15 shadow-lg mb-8">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/50 opacity-50"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400/70"></span>
          </span>
          <span className="text-xs font-bold tracking-wider text-slate-200 uppercase flex items-center gap-1.5">
            <Droplet size={13} className="text-sky-400/70" />
            Full‑stack • Mobile • UI/UX
          </span>
        </div>

        {/* Headline */}
        <div className="space-y-3">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black text-white tracking-tight leading-none">
            <span className="hero-name">Rivaldo</span><span className="text-sky-400">.</span>
          </h1>
          
          {/* Dynamic Fast Typing Role */}
          <div className="h-12 sm:h-14 flex items-center justify-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-sky-400 tracking-tight flex items-center gap-1.5">
              {displayText}
              <span className="inline-block w-1 h-7 sm:h-8 bg-sky-400/70 animate-pulse rounded-full" />
            </p>
          </div>
        </div>

        {/* Bio Subheadline */}
<p className="text-slate-300/80 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mt-6 font-medium">
            Full-Stack Developer dan UI/UX Designer dengan fokus pada pengembangan web dan aplikasi mobile. terbiasa menggunakan Next.js, Laravel, dan Flutter, serta mengelola PostgreSQL dan MySQL. Terbiasa menangani alur kerja DevOps, mulai dari Git, Docker, Nginx, hingga Supabase dan Vercel, untuk menciptakan produk yang efisien dan berdampak.
          </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mt-10 w-full max-w-2xl">
          <MagneticButton href="#projects" className="liquid-btn text-sm font-bold group">
            <Sparkles size={16} className="text-white group-hover:rotate-12 transition-transform" />
            Lihat Proyek Pilihan
            <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </MagneticButton>

          <MagneticButton
            href="https://port-folio-design-lake.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-pill text-xs sm:text-sm font-semibold"
          >
            <Palette size={15} className="text-sky-400" />
            Portofolio Desain
            <ExternalLink size={13} className="opacity-60" />
          </MagneticButton>

          <MagneticButton
            href="https://risa-ai-asisten.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-pill text-xs sm:text-sm font-semibold"
          >
            <Bot size={15} className="text-sky-400" />
            Risa AI Asisten
            <ExternalLink size={13} className="opacity-60" />
          </MagneticButton>
        </div>

        {/* Highlights Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
          {[
            { title: 'Full-Stack Web', desc: 'Next.js & Laravel', icon: Code2 },
            { title: 'Mobile Apps', desc: 'Flutter Cross-Platform', icon: Sparkles },
            { title: 'UI/UX Design', desc: 'Figma & Design Systems', icon: Palette },
          ].map((item) => (
            <TiltCard key={item.title} className="p-4 text-left flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 shrink-0">
                <item.icon size={19} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">{item.title}</h4>
                <p className="text-xs text-slate-400">{item.desc}</p>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Social Links */}
        <div className="mt-10 flex items-center justify-center gap-3.5">
          {[
            { Icon: Github, href: 'https://github.com/Yourdevelover', label: 'GitHub' },
            { Icon: Linkedin, href: 'https://www.linkedin.com/in/rivaldo-aldo-34b160340', label: 'LinkedIn' },
          ].map(({ Icon, href, label }) => (
            <MagneticButton
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full text-slate-300 hover:text-white apple-glass-hover"
            >
              <Icon size={19} />
            </MagneticButton>
          ))}
        </div>
      </div>
    </section>
  );
}
