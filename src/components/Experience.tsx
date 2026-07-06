import { GraduationCap, BookOpen, Code2, Database, BarChart3, Server, Globe, Palette, Wrench, Shield, Layout, Monitor } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { experiences, academics } from '../data/portfolio';
import DisplayCards from './DisplayCards';

const courseCards = [
  {
    icon: <Code2 className="size-4 text-amber-400" />,
    title: 'Pemrograman & Web',
    description: 'Algoritma, Pemrograman Web, Java, Python, PHP, JavaScript, React',
    tag: '6 MK',
    className: 'hover:-translate-y-10 before:absolute before:w-full before:h-full before:rounded-xl before:outline-1 before:outline-navy-700/40 before:content-[\'\'] before:bg-navy-950/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 relative',
  },
  {
    icon: <Database className="size-4 text-amber-100" />,
    title: 'Database & Data',
    description: 'Database Management, SQL, PostgreSQL, Data Analysis, DBeaver',
    tag: '3 MK',
    className: 'translate-x-10 translate-y-16 hover:-translate-y-[-25px] before:absolute before:w-full before:h-full before:rounded-xl before:outline-1 before:outline-navy-700/40 before:content-[\'\'] before:bg-navy-950/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 relative',
  },
  {
    icon: <Layout className="size-4 text-amber-400" />,
    title: 'Sistem & Infrastruktur',
    description: 'Sistem Informasi, Jaringan Komputer, Sistem Operasi, Cloud Computing',
    tag: '4 MK',
    className: 'translate-x-20 translate-y-32 hover:-translate-y-[-90px] relative',
  },
];

const managementCards = [
  {
    icon: <BarChart3 className="size-4 text-blue-400" />,
    title: 'Manajemen & Bisnis',
    description: 'Software Engineering (SDLC), ERP, E-Business, Manajemen TI',
    tag: '4 MK',
    className: 'hover:-translate-y-10 before:absolute before:w-full before:h-full before:rounded-xl before:outline-1 before:outline-navy-700/40 before:content-[\'\'] before:bg-navy-950/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 relative',
  },
  {
    icon: <BookOpen className="size-4 text-blue-400" />,
    title: 'Riset & Akademik',
    description: 'Metodologi Penelitian, Penulisan Akademik, Format APA, Skripsi',
    tag: '3 MK',
    className: 'translate-x-10 translate-y-16 hover:-translate-y-[-25px] before:absolute before:w-full before:h-full before:rounded-xl before:outline-1 before:outline-navy-700/40 before:content-[\'\'] before:bg-navy-950/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 relative',
  },
  {
    icon: <Palette className="size-4 text-blue-400" />,
    title: 'Desain & Praktik',
    description: 'UI/UX Design, Adobe Photoshop, Illustrator, Video Editing, Branding',
    tag: 'Praktik',
    className: 'translate-x-20 translate-y-32 hover:-translate-y-[-90px] relative',
  },
];

export default function Experience() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/20 to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto" ref={ref}>
        <div className={`transition-all duration-70 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="section-label">Perjalanan Akademik & Pengalaman</p>
          <h2 className="section-title">
            Di mana saya <span className="gradient-text">belajar & berkembang</span>
          </h2>
        </div>

        {/* Display Cards — Mata Kuliah */}
        <div className={`mt-12 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-lg font-bold text-navy-100 mb-2 flex items-center gap-2">
            <GraduationCap size={20} className="text-amber-400" />
            Mata Kuliah Inti
          </h3>
          <p className="text-sm text-navy-400 mb-8">
            Kursus yang membentuk fondasi keahlian saya — hover kartu untuk melihat detail.
          </p>

          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-16">
            <DisplayCards cards={courseCards} />
            <DisplayCards cards={managementCards} />
          </div>
        </div>

        {/* Full course list */}
        <div className={`mt-40 transition-all duration-700 delay-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass-card p-6 md:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400">
                <GraduationCap size={22} />
              </div>
              <h3 className="text-base font-bold text-navy-100">Daftar Lengkap Mata Kuliah</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {academics.coursework.map((course) => (
                <span
                  key={course}
                  className="px-2.5 py-1 text-xs rounded bg-navy-800/60 text-navy-300 border border-navy-700/40"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Thesis */}
        <div className={`mt-6 transition-all duration-700 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass-card p-6 md:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400">
                <BookOpen size={22} />
              </div>
              <h3 className="text-base font-bold text-navy-100">Skripsi</h3>
            </div>
            <p className="text-sm text-navy-200 font-medium leading-relaxed mb-2">
              {academics.thesis.title}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-2.5 py-1 text-xs font-mono rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                {academics.thesis.status}
              </span>
              <span className="px-2.5 py-1 text-xs font-mono rounded bg-navy-800/60 text-navy-300 border border-navy-700/40">
                {academics.thesis.methodology}
              </span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-16 relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-navy-700/50" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div
                key={exp.role + exp.company}
                className={`relative pl-14 md:pl-20 transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${600 + i * 200}ms` }}
              >
                <div className="absolute left-2 md:left-6 top-1 w-4 h-4 rounded-full border-2 border-amber-500 bg-navy-950 z-10">
                  <div className="absolute inset-1 rounded-full bg-amber-400" />
                </div>

                <div className="glass-card-hover p-6 md:p-8 group">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-lg font-bold text-navy-100 group-hover:text-amber-400/90 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono text-amber-400/80 bg-amber-500/10 px-3 py-1 rounded-full w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-navy-200 mb-3">{exp.company}</p>
                  <p className="text-sm text-navy-400 leading-relaxed mb-4">{exp.description}</p>
                  <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-navy-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400/70 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
