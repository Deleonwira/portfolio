import { motion } from 'framer-motion';

export default function SectionTitle({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={`flex items-center gap-2 mb-3 ${className}`}
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="w-0.5 h-4 rounded-full bg-gradient-to-b from-primary to-primary-light shadow-glow-button" />
      <h2 className="text-sm font-semibold font-[family-name:var(--font-heading)] text-text-primary tracking-tight">
        {children}
      </h2>
    </motion.div>
  );
}
