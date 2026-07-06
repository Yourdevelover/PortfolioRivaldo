import { useEffect, useState } from 'react';
import { ChevronDown, Download, Github, Linkedin, Instagram, Link } from 'lucide-react';

const roles = [
  'Information Systems Student',
  'Front-End Developer',
  'UI/UX Designer',
  'Creative Technologist',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
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
        isDeleting ? 35 : 70
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse-soft animation-delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-navy-700/10 rounded-full blur-3xl" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up opacity-0">
          <p className="font-mono text-amber-400 text-sm md:text-base tracking-widest uppercase mb-6">
            {/* Hello, I'm */}
          </p>
        </div>

        <div className="animate-fade-in-up opacity-0 animation-delay-200">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-navy-0 mt-40 tracking-tight">
      Rivaldo
          </h1>
        </div>

        <div className="animate-fade-in-up opacity-0 animation-delay-400 h-12 md:h-14 flex items-center justify-center mb-8">
          <p className="text-xl md:text-3xl text-navy-300 font-light">
            {displayText}
            <span className="inline-block w-0.5 h-6 md:h-8 bg-amber-400 ml-1 animate-pulse" />
          </p>
        </div>

        <div className="animate-fade-in-up opacity-0 animation-delay-600">
          <p className="text-navy-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Mahasiswa Sistem Informasi semester 5 dengan keahlian di pengembangan web,
            desain kreatif, dan manajemen database. Menggabungkan keterampilan teknis
            dan visi kreatif untuk membangun solusi digital yang bermakna.
          </p>
        </div>

        <div className="animate-fade-in-up opacity-0 animation-delay-800 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="group px-8 py-3.5 bg-amber-500 text-navy-950 font-semibold rounded-lg hover:bg-amber-400 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20 flex items-center gap-2"
          >
            Lihat Proyek Saya
            <ChevronDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="https://port-folio-design-lake.vercel.app/"
            className="px-8 py-3.5 border border-navy-600 text-navy-200 font-semibold rounded-lg hover:border-amber-500/50 hover:text-amber-400 transition-all duration-300 flex items-center gap-2"
          >
            <Link size={18} />
            Lihat visual
          </a>
            <a
            href="https://risa-ai-asisten.vercel.app/"
            className="px-8 py-3.5 border border-navy-600 text-navy-200 font-semibold rounded-lg hover:border-amber-500/50 hover:text-amber-400 transition-all duration-300 flex items-center gap-2"
          >
            <Link size={18} />
            Tanya AI
          </a>
        </div>

        <div className="animate-fade-in opacity-0 animation-delay-1000 mt-12 flex items-center justify-center gap-5">
          {[
            { Icon: Github, href: 'https://github.com/Yourdevelover', label: 'GitHub' },
            { Icon: Linkedin, href: 'https://www.linkedin.com/in/rivaldo-aldo-34b160340', label: 'LinkedIn' },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="p-3 rounded-lg border border-navy-700/50 text-navy-400 hover:text-amber-400 hover:border-amber-500/30 hover:bg-navy-800/30 transition-all duration-300"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>

    </section>
  );
}
