import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { projects } from '../data/portfolio';

export default function Projects() {
  const { ref, isInView } = useInView(0.05);
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="section-label">Proyek Pilihan</p>
          <h2 className="section-title">
            Karya yang merepresentasikan <span className="gradient-text">kemampuan saya</span>
          </h2>
        </div>

        <div className="mt-12 space-y-8">
          {displayedProjects.map((project, i) => {
            return <ProjectCard key={project.title} project={project} index={i} isVisible={isInView} />;
          })}
        </div>

        {!showAll && projects.length > 2 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 bg-amber-400 text-navy-900 font-semibold rounded-lg hover:bg-amber-300 transition-colors"
            >
              Lihat Selengkapnya
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  isVisible,
}: {
  project: (typeof projects)[0];
  index: number;
  isVisible: boolean;
}) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`group glass-card-hover overflow-hidden transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${(index + 1) * 150}ms` }}
    >
      <div className={`grid md:grid-cols-2 gap-0 ${!isEven ? 'md:[direction:rtl]' : ''}`}>
        <div className="relative overflow-hidden aspect-video md:aspect-auto">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="project-card-overlay" />
          <div className="absolute bottom-4 left-4 flex gap-3">
            <a
              href={project.github}
              className="p-2.5 rounded-lg bg-navy-900/80 text-navy-300 hover:text-amber-400 backdrop-blur-sm transition-colors"
              aria-label={`${project.title} GitHub`}
            >
              <Github size={18} />
            </a>
            <a
              href={project.live}
              className="p-2.5 rounded-lg bg-navy-900/80 text-navy-300 hover:text-amber-400 backdrop-blur-sm transition-colors"
              aria-label={`${project.title} Live Demo`}
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        <div className={`p-6 md:p-8 flex flex-col justify-center ${!isEven ? 'md:[direction:ltr]' : ''}`}>
          <p className="text-amber-400 font-mono text-xs tracking-wider uppercase mb-2">
            {project.subtitle}
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-navy-100 mb-3 group-hover:text-amber-400/90 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-navy-400 leading-relaxed mb-5">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => {
              return (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-navy-800/60 text-navy-300 border border-navy-700/40"
                >
                  {t}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
