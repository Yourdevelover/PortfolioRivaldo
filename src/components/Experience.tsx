import { GraduationCap, BookOpen, Sparkles } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { experiences, academics } from '../data/portfolio';
import DisplayCards from './DisplayCards';
import { courseCards, managementCards } from '../data/experienceCards';
import TiltCard from './TiltCard';

export default function Experience() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="experience" className="section-padding relative">
      {/* Liquid Glass Divider Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative max-w-5xl mx-auto" ref={ref}>
        {/* Header */}
        <div className={`text-center transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="section-eyebrow mb-4 justify-center">
            <Sparkles size={14} className="text-sky-400" />
            <span>Rekam Jejak & Pengalaman</span>
          </div>
          <h2 className="section-headline">
            Belajar dan{' '}
            <span className="apple-gradient-text">berkembang.</span>
          </h2>
          <p className="section-subheadline mt-4 max-w-xl mx-auto">
            Jejak akademik, pengalaman proyek profesional, dan kompetensi teruji.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className={`mt-14 sm:mt-16 transition-all duration-500 delay-150 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-center gap-2">
              <GraduationCap size={22} className="text-sky-400" />
              Modul Akademik Inti
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Kelompok mata kuliah utama S1 Sistem Informasi
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            <DisplayCards cards={courseCards} />
            <DisplayCards cards={managementCards} />
          </div>
        </div>

        {/* Full Coursework List with TiltCard */}
        <div className={`mt-12 transition-all duration-500 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <TiltCard className="p-6 sm:p-8">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="p-3 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400 shrink-0">
                <GraduationCap size={22} />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Daftar Lengkap Mata Kuliah Inti</h3>
                <p className="text-xs text-slate-400">Kurikulum S1 Sistem Informasi</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {academics.coursework.map((course) => (
                <span key={course} className="apple-tag hover:border-sky-400/50 hover:text-white transition-all cursor-default">
                  {course}
                </span>
              ))}
            </div>
          </TiltCard>
        </div>

        {/* Skripsi Status with TiltCard */}
        <div className={`mt-6 transition-all duration-500 delay-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <TiltCard className="p-6 sm:p-8">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="p-3 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400 shrink-0">
                <BookOpen size={22} />
              </div>
              <h3 className="text-base font-bold text-white">Status Tugas Akhir / Skripsi</h3>
            </div>
            <p className="text-sm text-slate-200 font-medium leading-relaxed mb-4">
              {academics.thesis.title}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3.5 py-1 text-xs font-bold rounded-full bg-sky-500/15 text-sky-400 border border-sky-500/30">
                {academics.thesis.status}
              </span>
              <span className="apple-tag">
                {academics.thesis.methodology}
              </span>
            </div>
          </TiltCard>
        </div>

        {/* Experience Timeline */}
        <div className="mt-16 relative">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-400 via-blue-500 to-transparent" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div
                key={exp.role + exp.company}
                className={`relative pl-12 md:pl-16 transition-all duration-500 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${450 + i * 150}ms` }}
              >
                {/* Glowing Timeline Dot */}
                <div className="absolute left-2.5 md:left-4 top-3 w-4 h-4 rounded-full border-2 border-sky-400 bg-[#030712] z-10 shadow-[0_0_12px_#38bdf8]">
                  <div className="absolute inset-0.5 rounded-full bg-sky-400 animate-pulse" />
                </div>

                <TiltCard className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-lg font-bold text-white">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono font-bold text-sky-400 bg-sky-500/10 px-3.5 py-1 rounded-full w-fit border border-sky-500/20">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-slate-300 mb-3">{exp.company}</p>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4 font-normal">{exp.description}</p>
                  <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
