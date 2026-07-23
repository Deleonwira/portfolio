import { motion } from 'framer-motion';
import { Rocket, Zap, Palette, Gem, Globe, Gamepad2, Headphones, Coffee, Code2 } from 'lucide-react';

const tags = [
  { Icon: Rocket, label: 'Fullstack' },
  { Icon: Zap, label: 'Fast UI' },
  { Icon: Palette, label: 'Aesthetic Anime Vibe' },
  { Icon: Gem, label: 'Clean Code' },
  { Icon: Globe, label: 'Open Source' },
];

export default function AboutCard() {
  return (
    <motion.div
      className="steam-card rounded-xl p-4 md:p-5 relative"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Title */}
      <div className="flex items-center justify-between mb-3 border-b border-cyan-500/20 pb-2">
        <h3 className="text-xs font-semibold text-cyan-300 font-[family-name:var(--font-heading)] uppercase tracking-wider flex items-center gap-1.5">
          <Code2 size={13} className="text-cyan-400" />
          <span>Custom Info Box</span>
          <span className="text-cyan-400/40">—</span>
          <span className="text-sky-200">About Me</span>
        </h3>
      </div>

      <div className="flex flex-col gap-3 text-xs text-text-secondary leading-relaxed">
        <p>
          Hello &amp; welcome to my profile! I am <span className="text-cyan-300 font-semibold">Leon Wira</span>, a Full Stack Developer &amp; UI artisan based in Indonesia. I create aesthetic web experiences, performant fullstack web apps, and clean maintainable code.
        </p>

        <div className="p-3 rounded-lg bg-sky-950/40 border border-cyan-400/20 flex flex-col gap-1.5 font-mono text-[11px]">
          <div className="flex items-center gap-2">
            <span className="text-cyan-400">* Status:</span>
            <span className="text-emerald-400 font-semibold">Available for Freelance &amp; Collaborations</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-cyan-400">* Specialty:</span>
            <span className="text-sky-200">React, Node.js, TailwindCSS, Laravel, Cloud APIs</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-cyan-400 flex-shrink-0">* Education:</span>
            <span className="text-sky-200">
              Politeknik Negeri Jakarta (Informatics Eng. - 5th Sem) &bull; CCIT FTUI &bull; SMK Telkom Jakarta (RPL)
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-cyan-400 flex-shrink-0">* Hobbies:</span>
            <span className="text-sky-200 flex items-center gap-1.5 flex-wrap">
              <Gamepad2 size={11} className="text-cyan-400 inline" /> Gaming,
              <Palette size={11} className="text-cyan-400 inline" /> Pixel Art,
              <Headphones size={11} className="text-cyan-400 inline" /> Lofi Music,
              <Coffee size={11} className="text-cyan-400 inline" /> Coffee
            </span>
          </div>
        </div>

        <p>
          Whether building responsive web interfaces or architecting scalable backend APIs, I strive for visual excellence and optimal performance in every line of code.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          {tags.map((tag) => (
            <span
              key={tag.label}
              className="px-2 py-0.5 text-[10px] rounded bg-sky-950 border border-cyan-400/30 text-cyan-300 font-mono flex items-center gap-1"
            >
              <tag.Icon size={10} className="text-cyan-400" />
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
