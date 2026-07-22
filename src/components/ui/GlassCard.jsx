import { motion } from 'framer-motion';

export default function GlassCard({
  children,
  className = '',
  hover = true,
  glow = false,
  animate = true,
  delay = 0,
  ...props
}) {
  const Component = animate ? motion.div : 'div';

  const animateProps = animate
    ? {
        initial: { opacity: 0, y: 15 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-50px' },
        transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] },
      }
    : {};

  return (
    <Component
      className={`
        glass rounded-xl p-4
        ${hover ? 'transition-all duration-300 hover:bg-bg-card-hover hover:border-border-glass-hover hover:shadow-glow' : ''}
        ${glow ? 'glow-purple' : ''}
        ${className}
      `}
      {...animateProps}
      {...props}
    >
      {children}
    </Component>
  );
}
