import { motion } from 'framer-motion';

export default function SocialIcon({ icon: Icon, href, label }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        w-7 h-7 rounded-lg glass
        flex items-center justify-center
        text-text-muted transition-all duration-300
        hover:text-primary-light hover:bg-bg-card-hover
        hover:shadow-glow hover:border-border-glass-hover
        hover:-translate-y-0.5
      "
      whileTap={{ scale: 0.92 }}
    >
      <Icon size={13} />
    </motion.a>
  );
}
