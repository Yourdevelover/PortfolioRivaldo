import { useInView } from '../state/useInView';
import { skills, services } from '../data/portfolio';
import { Cpu, Layers } from 'lucide-react';
import TiltCard from './TiltCard';

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const { ref, isInView } = useInView(0.2);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-200 font-semibold">{name}</span>
        <span className={`text-xs font-mono font-bold text-sky-400 transition-opacity duration-300 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          {level}%
        </span>
      </div>
      <div className="skill-track">
        <div
          className="skill-fill"
          style={{
            width: isInView ? `${level}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref: headerRef, isInView: headerVisible } = useInView(0.15);
  const { ref: servicesRef, isInView: servicesVisible } = useInView(0.1);

  return (
    <section id="skills" className="section-padding relative">
      {/* Divider Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-slate-800" />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className={`text-center transition-all duration-500 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="section-eyebrow mb-4 justify-center">
            <Cpu size={14} className="text-sky-400" />
            <span>Stack & Skill Set</span>
          </div>
          <h2 className="section-headline">
            Kemampuan yang terus{' '}
            <span className="text-sky-400">berkembang.</span>
          </h2>
          <p className="section-subheadline mt-4 max-w-xl mx-auto">
            Teknologi modern dan kompetensi teknik yang saya kuasai secara mendalam.
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="mt-14 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, catIdx) => (
            <div
              key={category.category}
              className={`transition-all duration-500 ${
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${(catIdx + 1) * 80}ms` }}
            >
              <TiltCard className="p-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-400" />
                    {category.category}
                  </h3>
                  <div className="space-y-4">
                    {category.items.map((skill, skillIdx) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        delay={skillIdx * 50}
                      />
                    ))}
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>

        {/* Services & Contributions */}
        <div ref={servicesRef} className="mt-28 sm:mt-36">
          <div className={`text-center transition-all duration-500 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="section-eyebrow mb-4 justify-center">
              <Layers size={14} className="text-sky-400" />
              <span>Layanan & Nilai Tambah</span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Apa yang bisa saya{' '}
              <span className="text-sky-400">kontribusikan.</span>
            </h3>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className={`transition-all duration-500 ${
                  servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <TiltCard className="p-5 h-full flex flex-col justify-between group">
                  <div>
                    <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 w-fit mb-3 group-hover:scale-110 transition-all duration-200">
                      <Icon size={20} />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">{title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">{description}</p>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
