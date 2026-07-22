import { motion } from 'framer-motion';

export default function GlowButton({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  icon: Icon,
  download,
  ...props
}) {
  const baseClasses = `
    inline-flex items-center gap-1.5 px-3.5 py-1.5
    rounded-lg font-medium text-[11px]
    transition-all duration-300 cursor-pointer
    font-[family-name:var(--font-heading)]
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-primary to-primary-light
      text-white shadow-glow-button
      hover:shadow-glow-strong hover:-translate-y-0.5
      active:translate-y-0
    `,
    secondary: `
      glass text-text-secondary
      hover:text-white hover:bg-bg-card-hover
      hover:border-border-glass-hover hover:-translate-y-0.5
    `,
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  const content = (
    <>
      {Icon && <Icon size={12} />}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileTap={{ scale: 0.97 }}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        download={download}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {content}
    </motion.button>
  );
}
