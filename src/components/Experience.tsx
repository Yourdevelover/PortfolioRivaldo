import { GraduationCap, BookOpen, Code2, Database, BarChart3, Layout, Palette } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { experiences, academics } from '../data/portfolio';
import DisplayCards from './DisplayCards';

const courseCards = [
  {
    icon: <Code2 className="size-4 text-apple-blue" />,
    title: 'Pemrograman & Web',
    description: 'Algoritma, Pemrograman Web, Java, Python, PHP, JavaScript, React',
    tag: '6 MK',
    className: 'hover:-translate-y-10 before:absolute before:w-full before:h-full before:rounded-apple before:outline-1 before:outline-white/[0.06] before:content-[\'\'] before:bg-black/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 relative',
  },
  {
    icon: <Database className="size-4 text-apple-cyan" />,
    title: 'Database & Data',
    description: 'Database Management, SQL, PostgreSQL, Data Analysis, DBeaver',
    tag: '3 MK',
    className: 'translate-x-10 translate-y-16 hover:-translate-y-[-25px] before:absolute before:w-full before:h-full before:rounded-apple before:outline-1 before:outline-white/[0.06] before:content-[\'\'] before:bg-black/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 relative',
  },
  {
    icon: <Layout className="size-4 text-apple-green" />,
    title: 'Sistem & Infrastruktur',
    description: 'Sistem Informasi, Jaringan Komputer, Sistem Operasi, Cloud Computing',
    tag: '4 MK',
    className: 'translate-x-20 translate-y-32 hover:-translate-y-[-90px] relative',
  },
];

const managementCards = [
  {
    icon: <BarChart3 className="size-4 text-apple-purple" />,
    title: 'Manajemen & Bisnis',
    description: 'Software Engineering (SDLC), ERP, E-Business, Manajemen TI',
    tag: '4 MK',
    className: 'hover:-translate-y-10 before:absolute before:w-full before:h-full before:rounded-apple before:outline-1 before:outline-white/[0.06] before:content-[\'\'] before:bg-black/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 relative',
  },
  {
    icon: <BookOpen className="size-4 text-apple-orange" />,
    title: 'Riset & Akademik',
    description: 'Metodologi Penelitian, Penulisan Akademik, Format APA, Skripsi',
    tag: '3 MK',
    className: 'translate-x-10 translate-y-16 hover:-translate-y-[-25px] before:absolute before:w-full before:h-full before:rounded-apple before:outline-1 before:outline-white/[0.06] before:content-[\'\'] before:bg-black/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 relative',
  },
  {
    icon: <Palette className="size-4 text-apple-pink" />,
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
      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-white/[0.06]" />

      <div className="relative max-w-5xl mx-auto" ref={ref}>
        {/* Header */}
        <div className={`text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="section-eyebrow mb-4">Perjalanan</p>
          <h2 className="section-headline">
            Belajar dan{' '}
            <span className="apple-gradient-text">berkembang.</span>
          </h2>
          <p className="section-subheadline mt-4 max-w-xl mx-auto">
            Akademik, pengalaman kerja, dan kompetensi yang terus diasah.
          </p>
        </div>

        {/* Display Cards — Course categories */}
        <div className={`mt-16 sm:mt-20 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
            <GraduationCap size={20} className="text-apple-blue" />
            Mata Kuliah Inti
          </h3>
          <p className="text-sm text-white/40 mb-8">
            Kursus yang membentuk fondasi keahlian — hover kartu untuk detail.
          </p>

          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-16">
            <DisplayCards cards={courseCards} />
            <DisplayCards cards={managementCards} />
          </div>
        </div>

        {/* Full course list */}
        <div className={`mt-40 transition-all duration-700 delay-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="apple-glass p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-apple-sm bg-apple-blue/10 text-apple-blue">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-base font-bold text-white">Daftar Lengkap Mata Kuliah</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {academics.coursework.map((course) => (
                <span key={course} className="apple-tag">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Thesis */}
        <div className={`mt-4 sm:mt-5 transition-all duration-700 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="apple-glass p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-apple-sm bg-apple-blue/10 text-apple-blue">
                <BookOpen size={20} />
              </div>
              <h3 className="text-base font-bold text-white">Skripsi</h3>
            </div>
            <p className="text-sm text-white/70 font-medium leading-relaxed mb-3">
              {academics.thesis.title}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-apple-blue/10 text-apple-blue border border-apple-blue/20">
                {academics.thesis.status}
              </span>
              <span className="apple-tag">
                {academics.thesis.methodology}
              </span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-16 sm:mt-20 relative">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-white/[0.08]" />

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={exp.role + exp.company}
                className={`relative pl-12 md:pl-16 transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${600 + i * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-4 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-apple-blue bg-black z-10">
                  <div className="absolute inset-0.5 rounded-full bg-apple-blue" />
                </div>

                <div className="apple-glass-hover p-5 sm:p-6 md:p-8 group">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-apple-blue/90 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono text-apple-blue/80 bg-apple-blue/10 px-3 py-1 rounded-full w-fit border border-apple-blue/15">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-white/60 mb-3">{exp.company}</p>
                  <p className="text-sm text-white/40 leading-relaxed mb-4">{exp.description}</p>
                  <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-white/40">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-apple-blue/60 flex-shrink-0" />
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
