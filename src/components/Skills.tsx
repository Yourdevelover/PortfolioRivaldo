import { useInView } from '../hooks/useInView';
import { skills, services } from '../data/portfolio';

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const { ref, isInView } = useInView(0.3);

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-sm text-navy-200 font-medium">{name}</span>
        <span className={`text-xs font-mono text-navy-400 transition-opacity duration-500 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          {level}%
        </span>
      </div>
      <div className="h-1.5 bg-navy-800 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-1000 ease-out"
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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/30 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div ref={headerRef} className={`transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="section-label">Keahlian & Kompetensi</p>
          <h2 className="section-title">
            Kemampuan yang terus saya <span className="gradient-text">kembangkan</span>
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, catIdx) => (
            <div
              key={category.category}
              className={`glass-card p-6 transition-all duration-700 ${
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(catIdx + 1) * 100}ms` }}
            >
              <h3 className="text-sm font-semibold text-navy-100 mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                {category.category}
              </h3>
              <div className="space-y-3.5">
                {category.items.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={skillIdx * 60}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div ref={servicesRef} className="mt-20">
          <div className={`transition-all duration-700 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="section-label">Layanan</p>
            <h3 className="text-xl md:text-2xl font-bold text-navy-100 mb-10">
              Apa yang bisa saya <span className="gradient-text">kontribusikan</span>
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className={`glass-card-hover p-6 group transition-all duration-700 ${
                  servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="p-3 rounded-lg bg-amber-500/10 text-amber-400 w-fit mb-4 group-hover:bg-amber-500/20 transition-colors duration-300">
                  <Icon size={22} />
                </div>
                <h4 className="text-base font-semibold text-navy-100 mb-2">{title}</h4>
                <p className="text-sm text-navy-400 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
