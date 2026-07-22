import { motion } from 'framer-motion';

export default function StatItem({ icon: Icon, label, value, delay = 0 }) {
  return (
    <motion.div
      className="
        flex items-center justify-between py-1.5 px-2.5
        rounded-lg transition-all duration-300
        hover:bg-bg-card-hover group cursor-default
      "
      initial={{ opacity: 0, x: 15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="flex items-center gap-2">
        {Icon && (
          <Icon
            size={12}
            className="text-text-muted group-hover:text-primary-light transition-colors duration-300"
          />
        )}
        <span className="text-[11px] text-text-secondary group-hover:text-text-primary transition-colors duration-300">
          {label}
        </span>
      </div>
      <span className="text-[11px] font-semibold text-accent-lavender font-[family-name:var(--font-heading)]">
        {value}
      </span>
    </motion.div>
  );
}
