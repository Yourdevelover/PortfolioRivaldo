import { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Link } from 'lucide-react';

const roles = [
  'Full-Stack Developer',
  'UI/UX Designer',
  'Mobile Developer',
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
  }, [roleIndex, displayText, isDeleting]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient background glow — Apple style */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full opacity-[0.08]"
          style={{
            background: 'radial-gradient(circle, #2997FF 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{
            background: 'radial-gradient(circle, #5AC8FA 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">
        {/* Name */}
        <div className="animate-fade-in-up opacity-0">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-bold text-white tracking-apple-tight">
            Rivaldo
          </h1>
        </div>

        {/* Typing role */}
        <div className="animate-fade-in-up opacity-0 animation-delay-200 h-10 sm:h-12 md:h-14 flex items-center justify-center mt-3 mb-8">
          <p className="text-xl sm:text-2xl md:text-3xl text-white/40 font-light tracking-tight">
            {displayText}
            <span className="inline-block w-[2px] h-6 sm:h-7 md:h-8 bg-apple-blue ml-1 animate-pulse" />
          </p>
        </div>

        {/* Description */}
        <div className="animate-fade-in-up opacity-0 animation-delay-400">
          <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Berdedikasi dalam pengembangan Full-Stack Web, Mobile Application,
            dan UI/UX Design. Membangun solusi digital dengan Next.js, Laravel,
            Flutter, serta infrastruktur cloud modern.
          </p>
        </div>

        {/* CTAs */}
        <div className="animate-fade-in-up opacity-0 animation-delay-600 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-10">
          <a
            href="#projects"
            className="group px-7 py-3 bg-apple-blue text-white font-medium rounded-full hover:bg-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-apple-blue/20 flex items-center gap-2 text-sm apple-focus"
          >
            Lihat Proyek
            <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="https://port-folio-design-lake.vercel.app/"
            className="px-7 py-3 text-white/70 font-medium rounded-full hover:text-white transition-all duration-300 flex items-center gap-2 text-sm apple-focus"
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <Link size={14} />
            Lihat Visual
          </a>
          <a
            href="https://risa-ai-asisten.vercel.app/"
            className="px-7 py-3 text-white/70 font-medium rounded-full hover:text-white transition-all duration-300 flex items-center gap-2 text-sm apple-focus"
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <Link size={14} />
            Tanya AI
          </a>
        </div>

        {/* Social icons */}
        <div className="animate-fade-in opacity-0 animation-delay-1000 mt-10 flex items-center justify-center gap-4">
          {[
            { Icon: Github, href: 'https://github.com/Yourdevelover', label: 'GitHub' },
            { Icon: Linkedin, href: 'https://www.linkedin.com/in/rivaldo-aldo-34b160340', label: 'LinkedIn' },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2.5 rounded-full text-white/30 hover:text-white/80 transition-all duration-300 apple-focus"
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
