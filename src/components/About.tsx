import { MapPin, Briefcase, GraduationCap, Code2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const stats = [
  { label: 'Semester', value: '5th', icon: GraduationCap },
  { label: 'Proyek', value: '10+', icon: Code2 },
  { label: 'Teknologi', value: '20+', icon: Briefcase },
  { label: 'Lokasi', value: 'Tangerang Selatan', icon: MapPin },
];

export default function About() {
  const { ref, isInView } = useInView(0.15);

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      {/* Section divider — Apple style thin line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-white/[0.06]" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className={`text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="section-eyebrow mb-4">Tentang Saya</p>
          <h2 className="section-headline">
            Teknologi bertemu{' '}
            <span className="apple-gradient-text">kreativitas.</span>
          </h2>
          <p className="section-subheadline mt-4 max-w-2xl mx-auto">
            Presisi dalam kode, keindahan dalam desain.
          </p>
        </div>

        {/* Content grid */}
        <div className="mt-16 sm:mt-20 grid md:grid-cols-5 gap-10 lg:gap-14 items-center">
          {/* Photo */}
          <div className={`md:col-span-2 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}>
            <div className="relative group mx-auto max-w-xs md:max-w-none">
              <div className="relative overflow-hidden rounded-apple-lg">
                <img
                  src="https://i.ibb.co.com/nsC3f6GX/result-0.jpg"
                  alt="Rivaldo"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              {/* Subtle glow */}
              <div className="absolute -inset-px rounded-apple-lg border border-white/[0.08] pointer-events-none" />
            </div>
          </div>

          {/* Bio */}
          <div className={`md:col-span-3 flex flex-col justify-center transition-all duration-700 delay-400 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}>
            <div className="space-y-5 text-white/60 text-base sm:text-lg leading-relaxed">
              <p>
                Saya Rivaldo, mahasiswa Sistem Informasi semester 5 yang berfokus pada
                pengembangan web, aplikasi, dan desain kreatif.
              </p>
              <p>
                Selama kuliah, saya aktif mengerjakan berbagai proyek — mulai dari
                prototype aplikasi web berbasis Laravel, React, desain database PostgreSQL.
                Setiap proyek mengajarkan saya bahwa produk digital yang berkualitas lahir
                dari perpaduan logika yang kuat dan visual yang menarik.
              </p>
              <p>
                Di luar koding dan desain, saya juga mendalami analisis data,
                manajemen proyek, dan riset akademik.
              </p>
            </div>

            {/* Stat cards */}
            <div className="mt-10 grid grid-cols-2 gap-3">
              {stats.map(({ label, value, icon: Icon }, i) => (
                <div
                  key={label}
                  className={`apple-glass-hover p-4 flex items-center gap-3 transition-all duration-500 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${500 + i * 100}ms` }}
                >
                  <div className="p-2 rounded-apple-sm bg-apple-blue/10 text-apple-blue flex-shrink-0">
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-lg sm:text-xl font-bold text-white">{value}</p>
                    <p className="text-xs text-white/40 truncate">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
