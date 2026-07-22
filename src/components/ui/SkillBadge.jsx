import { motion } from 'framer-motion';

export default function SkillBadge({ name, delay = 0 }) {
  return (
    <motion.span
      className="
        inline-flex items-center px-2.5 py-1
        glass rounded-full text-[11px] font-medium
        text-accent-lavender cursor-default
        transition-all duration-300
        hover:bg-bg-card-hover hover:shadow-glow
        hover:scale-105 hover:text-white
        hover:border-border-glass-hover
      "
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.3, delay, ease: 'easeOut' }}
    >
      {name}
    </motion.span>
  );
}
