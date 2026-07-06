import { MapPin, Briefcase, GraduationCap, Code2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const stats = [
  { label: 'Semester', value: '5th', icon: GraduationCap },
  { label: 'Proyek', value: '10+', icon: Code2 },
  { label: 'Teknologi', value: '20+', icon: Briefcase },
  { label: 'Lokasi', value: 'Pamulang, ID', icon: MapPin },
];

export default function About() {
  const { ref, isInView } = useInView(0.15);

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="section-label">Tentang Saya</p>
          <h2 className="section-title">
            Menggabungkan teknologi & kreativitas dengan <span className="gradient-text">presisi</span>
          </h2>
        </div>

        <div className="mt-12 md:mt-16 grid md:grid-cols-5 gap-12 lg:gap-16">
          <div className={`md:col-span-2 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://i.ibb.co.com/nsC3f6GX/result-0.jpg"
                  alt="Rivaldo"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />
              </div>
              <div className="absolute -inset-1 rounded-2xl border border-amber-500/20 -z-10 group-hover:border-amber-500/40 transition-colors duration-500" />
              <div className="absolute -inset-3 rounded-2xl border border-navy-700/20 -z-20" />
            </div>
          </div>

          <div className={`md:col-span-3 flex flex-col justify-center transition-all duration-700 delay-400 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="space-y-5 text-navy-300 leading-relaxed">
              <p>
                Saya Rivaldo, mahasiswa Sistem Informasi semester 5 yang berfokus pada
                pengembangan web, aplikasi, dan desain kreatif.
              </p>
              <p>
                Selama kuliah, saya aktif mengerjakan berbagai proyek — mulai dari
                prototype aplikasi web berbasis laravel, react, desain database PostgreSQL,
              Setiap proyek mengajarkan saya bahwa produk digital yang berkualitas lahir dari perpaduan logika yang kuat dan visual yang menarik.
              </p>
              <p>
                Di luar koding dan desain, saya juga mendalami analisis data,
                manajemen proyek, dan riset akademik.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {stats.map(({ label, value, icon: Icon }, i) => (
                <div
                  key={label}
                  className={`glass-card-hover p-4 flex items-center gap-3 transition-all duration-500 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${500 + i * 100}ms` }}
                >
                  <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-navy-100">{value}</p>
                    <p className="text-xs text-navy-400">{label}</p>
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
