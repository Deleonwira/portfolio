import { motion } from 'framer-motion';
import { Rocket, Zap, Palette, Gem, Globe, Gamepad2, Headphones, Coffee, Code2, MoveIcon, Video, Theater, Balloon, LucideBalloon } from 'lucide-react';

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
      id="about"
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

          <span className="text-sky-200">About Me</span>
        </h3>
      </div>

      <div className="flex flex-col gap-3 text-xs text-text-secondary leading-relaxed">
        <p>
          I'm Leon, a Full Stack Developer from Indonesia passionate about building thoughtful digital experiences. I enjoy crafting beautiful interfaces, scalable full-stack applications, and clean, maintainable code.
        </p>

        <div className="p-3 rounded-lg bg-sky-950/40 border border-cyan-400/20 flex flex-col gap-1.5 font-mono text-[11px]">
          <div className="flex items-center gap-2">
            <span className="text-cyan-400">* Status:</span>
            <span className="text-emerald-400 font-semibold">Available for Freelance, intern &amp; collaborations</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-cyan-400">* Specialty:</span>
            <span className="text-sky-200">React.js, Node.js, Express.js, Pyhton, TailwindCSS, MySQL, MongoDB</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-cyan-400 flex-shrink-0">* Education:</span>
            <span className="text-sky-200">
              &bull; Politeknik Negeri Jakarta (Informatics Engineering) - 5th Sem  <br/> 
              &bull; CCIT FTUI (Information Technology) - Graduate <br/>
              &bull; SMK Telkom Jakarta (Software Engineering) - Graduate
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-cyan-400 flex-shrink-0">* Hobbies:</span>
            <span className="text-sky-200 flex items-center gap-1.5 flex-wrap">
              <Theater size={11} className="text-cyan-400 inline" /> Movies,
              <Balloon size={11} className="text-cyan-400 inline" /> Billiard,
              <Gamepad2 size={11} className="text-cyan-400 inline" /> Gaming
            </span>
          </div>
        </div>

        <p>
          Whether building responsive web interfaces or architecting scalable backend APIs, I strive for visual excellence and optimal performance in every line of code.
        </p>

        
      </div>
    </motion.div>
  );
}
