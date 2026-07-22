import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '../icons/BrandIcons';

export default function ProjectCard({
  title,
  description,
  image,
  tags = [],
  github,
  demo,
  delay = 0,
}) {
  return (
    <motion.div
      className="
        glass rounded-xl overflow-hidden
        transition-all duration-400 group
        hover:shadow-glow-strong hover:-translate-y-0.5
        hover:border-border-glass-hover
      "
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Thumbnail */}
      <div className="relative h-32 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-base/80 via-transparent to-transparent" />
        
        {/* Hover overlay with links */}
        <div className="
          absolute inset-0 bg-primary/10 backdrop-blur-sm
          flex items-center justify-center gap-2
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        ">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md
                border border-white/20 flex items-center justify-center
                text-white hover:bg-white/20 transition-all duration-200
              "
            >
              <GithubIcon size={14} />
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md
                border border-white/20 flex items-center justify-center
                text-white hover:bg-white/20 transition-all duration-200
              "
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-3.5">
        <h3 className="text-sm font-semibold font-[family-name:var(--font-heading)] text-text-primary mb-1 group-hover:text-primary-light transition-colors duration-300">
          {title}
        </h3>
        <p className="text-[11px] text-text-secondary leading-relaxed mb-2.5 line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="
                px-2 py-0.5 text-[10px] rounded-md
                bg-primary/10 text-accent-lavender
                border border-primary/20
              "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
