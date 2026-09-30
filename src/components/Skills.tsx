import { useInView } from '../hooks/useInView';
import { skills, services } from '../data/portfolio';

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const { ref, isInView } = useInView(0.3);

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-sm text-white/70 font-medium">{name}</span>
        <span className={`text-xs font-mono text-white/30 transition-opacity duration-500 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
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
      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-white/[0.06]" />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className={`text-center transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="section-eyebrow mb-4">Keahlian & Kompetensi</p>
          <h2 className="section-headline">
            Kemampuan yang terus{' '}
            <span className="apple-gradient-text">berkembang.</span>
          </h2>
          <p className="section-subheadline mt-4 max-w-xl mx-auto">
            Teknologi yang saya kuasai dan terus pelajari setiap hari.
          </p>
        </div>

        {/* Skill categories grid */}
        <div className="mt-14 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {skills.map((category, catIdx) => (
            <div
              key={category.category}
              className={`apple-glass p-5 sm:p-6 transition-all duration-700 ${
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${(catIdx + 1) * 100}ms` }}
            >
              <h3 className="text-sm font-semibold text-white/90 mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-apple-blue" />
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

        {/* Services */}
        <div ref={servicesRef} className="mt-24 sm:mt-28">
          <div className={`text-center transition-all duration-700 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <p className="section-eyebrow mb-4">Layanan</p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Apa yang bisa saya{' '}
              <span className="apple-gradient-text">kontribusikan.</span>
            </h3>
          </div>

          <div className="mt-12 sm:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {services.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className={`apple-glass-hover p-5 sm:p-6 group transition-all duration-700 ${
                  servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="p-2.5 rounded-apple-sm bg-apple-blue/10 text-apple-blue w-fit mb-4 group-hover:bg-apple-blue/15 transition-colors duration-300">
                  <Icon size={20} />
                </div>
                <h4 className="text-base font-semibold text-white/90 mb-2">{title}</h4>
                <p className="text-sm text-white/40 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
