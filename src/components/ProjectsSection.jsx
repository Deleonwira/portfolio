import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, Star } from 'lucide-react';
import { GithubIcon } from './icons/BrandIcons';

const projects = [
  {
    id: 1,
    title: 'Aesthetic Steam Portfolio Engine',
    description: 'An interactive custom profile web engine inspired by Steam anime aesthetics, custom cards, and floating starry canvas.',
    tags: ['React', 'TailwindCSS', 'Framer Motion', 'Canvas'],
    image: '/images/hero-banner.png',
    stars: 128,
    liveUrl: '#',
    githubUrl: 'https://github.com',
  },
  {
    id: 2,
    title: 'Anime Stream & Vault Web App',
    description: 'Next-gen streaming dashboard featuring real-time chat, custom theme engine, and high performance video player.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
    image: '/images/project-1.png',
    stars: 94,
    liveUrl: '#',
    githubUrl: 'https://github.com',
  },
  {
    id: 3,
    title: 'Cyberpunk Game Community Hub',
    description: 'Full-stack platform for gamers to track achievements, share custom screenshots, and showcase profile badges.',
    tags: ['Laravel', 'Vue.js', 'REST API', 'MySQL'],
    image: '/images/project-2.png',
    stars: 76,
    liveUrl: '#',
    githubUrl: 'https://github.com',
  },
  {
    id: 4,
    title: 'Lofi Audio & Visualizer Studio',
    description: 'Web audio application with custom shaders, ambient audio synthesis, and interactive particle visualizer.',
    tags: ['JavaScript', 'Web Audio API', 'Canvas 2D'],
    image: '/images/project-3.png',
    stars: 112,
    liveUrl: '#',
    githubUrl: 'https://github.com',
  },
];

export default function ProjectsSection() {
  return (
    <section className="flex flex-col gap-4">
      {/* Header */}
      <div className="steam-card rounded-xl p-3.5 flex items-center justify-between">
        <h3 className="text-xs font-semibold text-cyan-300 font-[family-name:var(--font-heading)] uppercase tracking-wider flex items-center gap-2">
          <Sparkles size={14} className="text-cyan-400" />
          <span>Featured Projects Showcase</span>
        </h3>
        <span className="text-[10px] font-mono text-cyan-400/60">
          4 Featured Items
        </span>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="steam-card steam-card-hover rounded-xl p-3 flex flex-col justify-between relative group"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div>
              {/* Image Preview Container */}
              <div className="relative h-36 rounded-lg overflow-hidden border border-cyan-400/30 mb-3 bg-sky-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040914] via-transparent to-transparent opacity-80" />

                {/* Stars Counter Badge */}
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#040914]/80 border border-cyan-400/40 text-[10px] font-mono text-cyan-300 flex items-center gap-1">
                  <Star size={11} className="text-cyan-400 fill-cyan-400" />
                  <span>{project.stars}</span>
                </div>
              </div>

              {/* Title & Description */}
              <h4 className="text-sm font-semibold text-e2f1ff group-hover:text-cyan-300 transition-colors font-[family-name:var(--font-heading)] flex items-center justify-between">
                <span>{project.title}</span>
              </h4>
              <p className="text-[11px] text-text-secondary line-clamp-2 mt-1 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tags & Action Buttons */}
            <div className="mt-3 pt-2.5 border-t border-cyan-500/20 flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-1.5 py-0.5 text-[9px] rounded bg-sky-950 border border-cyan-400/20 text-cyan-300 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1.5">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1 rounded hover:bg-cyan-500/20 text-cyan-300 transition-colors"
                  title="Source Code"
                >
                  <GithubIcon size={13} />
                </a>
                <a
                  href={project.liveUrl}
                  className="p-1 rounded hover:bg-cyan-500/20 text-cyan-300 transition-colors"
                  title="Live Demo"
                >
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
