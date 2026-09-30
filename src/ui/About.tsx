import { MapPin, Briefcase, GraduationCap, Code2, UserCheck } from 'lucide-react';
import { useInView } from '../state/useInView';
import TiltCard from './TiltCard';
import { personalBio } from '../data/portfolio';

const stats = [
  { label: 'Pendidikan', value: 'S1 SI', icon: GraduationCap },
  { label: 'Proyek Selesai', value: '10+', icon: Code2 },
  { label: 'Stack & Dev Tools', value: '20+', icon: Briefcase },
  { label: 'Lokasi Utama', value: 'Tangerang Selatan', icon: MapPin },
];

export default function About() {
  const { ref, isInView } = useInView(0.15);

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      {/* Divider Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className={`text-center transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="section-eyebrow mb-4 justify-center">
            <UserCheck size={14} className="text-sky-400" />
            <span>Profil Lengkap</span>
          </div>
          <h2 className="section-headline">
            Teknologi bertemu{' '}
            <span className="text-sky-400">kreativitas.</span>
          </h2>
          <p className="section-subheadline mt-4 max-w-2xl mx-auto">
            Presisi dalam arsitektur sistem, keindahan dalam antarmuka visual modern.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-16 sm:mt-20 grid md:grid-cols-5 gap-10 lg:gap-14 items-center">
          
          {/* Photo Showcase */}
          <div className={`md:col-span-2 transition-all duration-500 delay-150 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}>
            <TiltCard className="p-3 max-w-xs md:max-w-none mx-auto">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
                <img
                  src="https://i.ibb.co.com/nsC3f6GX/result-0.jpg"
                  alt="Rivaldo"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800">
                  <p className="text-xs font-bold text-white">Rivaldo</p>
                  <p className="text-[11px] text-sky-400 font-mono font-medium">Full-Stack & Mobile Developer</p>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Bio Description */}
          <div className={`md:col-span-3 flex flex-col justify-center transition-all duration-500 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}>
            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                Saya <span className="text-white font-bold">Rivaldo</span>, {personalBio.fullBio}
              </p>
            </div>

            {/* Stat Tilt Cards */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map(({ label, value, icon: Icon }) => (
                <TiltCard
                  key={label}
                  className="p-4 flex items-center gap-3.5"
                >
                  <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 shrink-0">
                    <Icon size={19} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xl sm:text-2xl font-black text-white tracking-tight">{value}</p>
                    <p className="text-xs text-slate-400 truncate font-semibold">{label}</p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
