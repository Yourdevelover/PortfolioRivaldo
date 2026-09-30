import { useState } from 'react';
import { ExternalLink, Github, Sparkles, FolderGit2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { projects } from '../data/portfolio';
import TiltCard from './TiltCard';
import MagneticButton from './MagneticButton';

const categories = ['Semua', 'Web Full-Stack', 'Mobile App', 'UI/UX Design', 'Utility Tool'];

export default function Projects() {
  const { ref, isInView } = useInView(0.05);
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = projects.filter((p) => {
    if (selectedCategory === 'Semua') return true;
    if (selectedCategory === 'Web Full-Stack') return p.tech.includes('Laravel 10') || p.tech.includes('React') || p.tech.includes('HTML');
    if (selectedCategory === 'Mobile App') return p.tech.includes('Flutter') || p.subtitle.includes('Parking');
    if (selectedCategory === 'UI/UX Design') return p.tech.includes('Adobe Photoshop') || p.tech.includes('Figma');
    if (selectedCategory === 'Utility Tool') return p.tech.includes('Python') || p.tech.includes('Networking');
    return true;
  });

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <section id="projects" className="section-padding relative">
      {/* Divider Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-slate-800" />

      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Header */}
        <div className={`text-center transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="section-eyebrow mb-4 justify-center">
            <FolderGit2 size={14} className="text-sky-400" />
            <span>Portofolio Proyek</span>
          </div>
          <h2 className="section-headline">
            Karya yang{' '}
            <span className="text-sky-400">berbicara.</span>
          </h2>
          <p className="section-subheadline mt-4 max-w-xl mx-auto">
            Solusi digital nyata yang menggabungkan logika backend tangguh dan antarmuka presisi.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 text-xs font-semibold rounded-full transition-all duration-200 backdrop-blur-xl cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/30 border border-sky-400/50'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800 hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-14 space-y-8">
          {displayedProjects.map((project, i) => (
            <ProjectItem key={project.title} project={project} index={i} isVisible={isInView} />
          ))}
        </div>

        {/* Load More Button */}
        {!showAll && filteredProjects.length > 4 && (
          <div className="mt-14 text-center">
            <MagneticButton onClick={() => setShowAll(true)} className="liquid-btn text-sm font-bold">
              <Sparkles size={16} />
              Tampilkan Semua ({filteredProjects.length}) Proyek
            </MagneticButton>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectItem({
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
      className={`transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${(index + 1) * 100}ms` }}
    >
      <TiltCard className="overflow-hidden p-0">
        <div className={`grid md:grid-cols-2 gap-0 ${!isEven ? 'md:[direction:rtl]' : ''}`}>
          {/* Image Showcase */}
          <div className="relative overflow-hidden aspect-video md:aspect-auto md:min-h-[300px] group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="project-card-overlay" />

            {/* Action links */}
            <div className={`absolute bottom-5 left-5 flex gap-3 ${!isEven ? 'md:[direction:ltr]' : ''}`}>
              <MagneticButton
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full backdrop-blur-xl bg-slate-900/90 border border-slate-700 text-slate-200 hover:text-white hover:border-sky-400 transition-all shadow-lg"
              >
                <Github size={18} />
              </MagneticButton>
              {project.live && (
                <MagneticButton
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full backdrop-blur-xl bg-sky-500 border border-sky-300/40 text-white hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/30"
                >
                  <ExternalLink size={18} />
                </MagneticButton>
              )}
            </div>
          </div>

          {/* Details Content */}
          <div className={`p-7 sm:p-9 flex flex-col justify-between ${!isEven ? 'md:[direction:ltr]' : ''}`}>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sky-400 text-xs font-bold uppercase tracking-wider">
                  {project.subtitle}
                </span>
                {project.featured && (
                  <span className="px-2.5 py-0.5 text-[10px] font-extrabold rounded-full bg-sky-500/15 text-sky-300 border border-sky-400/30">
                    Utama
                  </span>
                )}
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3.5 tracking-tight">
                {project.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
              {project.tech.map((t) => (
                <span key={t} className="apple-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </TiltCard>
    </div>
  );
}
