import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { projects } from '../data/portfolio';

export default function Projects() {
  const { ref, isInView } = useInView(0.05);
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="section-padding relative">
      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-white/[0.06]" />

      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Header */}
        <div className={`text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="section-eyebrow mb-4">Proyek Pilihan</p>
          <h2 className="section-headline">
            Karya yang{' '}
            <span className="apple-gradient-text">berbicara.</span>
          </h2>
          <p className="section-subheadline mt-4 max-w-xl mx-auto">
            Setiap proyek merepresentasikan pemecahan masalah nyata.
          </p>
        </div>

        {/* Projects grid */}
        <div className="mt-14 sm:mt-16 space-y-5 sm:space-y-6">
          {displayedProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} isVisible={isInView} />
          ))}
        </div>

        {/* Load more */}
        {!showAll && projects.length > 3 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 text-sm font-medium rounded-full bg-apple-blue text-white hover:bg-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-apple-blue/20 apple-focus"
            >
              Lihat Semua Proyek
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
      className={`group overflow-hidden transition-all duration-700 apple-glass-hover ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${(index + 1) * 150}ms` }}
    >
      <div className={`grid md:grid-cols-2 gap-0 ${!isEven ? 'md:[direction:rtl]' : ''}`}>
        {/* Image */}
        <div className="relative overflow-hidden aspect-video md:aspect-auto md:min-h-[280px]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="project-card-overlay" />

          {/* Action buttons on image */}
          <div className="absolute bottom-4 left-4 flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full backdrop-blur-md text-white/70 hover:text-white transition-colors apple-focus"
              style={{ background: 'rgba(0, 0, 0, 0.5)' }}
              aria-label={`${project.title} GitHub`}
            >
              <Github size={16} />
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full backdrop-blur-md text-white/70 hover:text-white transition-colors apple-focus"
                style={{ background: 'rgba(0, 0, 0, 0.5)' }}
                aria-label={`${project.title} Live Demo`}
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className={`p-6 sm:p-8 flex flex-col justify-center ${!isEven ? 'md:[direction:ltr]' : ''}`}>
          <p className="text-apple-blue text-xs font-semibold tracking-wide mb-2">
            {project.subtitle}
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-apple-blue/90 transition-colors tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm text-white/40 leading-relaxed mb-5">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="apple-tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
