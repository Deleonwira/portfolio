import { motion } from 'framer-motion';
import {
  GitCommitHorizontal, Atom, Layers, Moon,
} from 'lucide-react';
import {
  ReactIcon,
  LaravelIcon,
  ExpressIcon,
  JavaScriptIcon,
  PhpIcon,
  CodeIgniterIcon,
  PythonIcon,
  MySqlIcon,
  MongoDbIcon,
} from './icons/BrandIcons';

const techStack = [
  { Icon: ReactIcon, title: 'React.js' },
  { Icon: LaravelIcon, title: 'Laravel' },
  { Icon: ExpressIcon, title: 'Express.js' },
  { Icon: JavaScriptIcon, title: 'JavaScript' },
  { Icon: PhpIcon, title: 'PHP' },
  { Icon: CodeIgniterIcon, title: 'CodeIgniter 4' },
  { Icon: PythonIcon, title: 'Python' },
  { Icon: MySqlIcon, title: 'MySQL' },
  { Icon: MongoDbIcon, title: 'MongoDB' },
];

const badges = [
  { Icon: GitCommitHorizontal, label: '100+ Commits' },
  { Icon: Atom, label: 'React Architect' },
  { Icon: Layers, label: 'Full Stack Master' },
  { Icon: Moon, label: 'Night Owl Coder' },
];

const steamStats = [
  { label: 'Projects / Games', count: '109', href: '#projects' },
  { label: 'Inventory / Skills', count: '24', href: '#about' },
  { label: 'Screenshots', count: '68', href: '#projects' },
  { label: 'Videos', count: '12', href: '#projects' },
  { label: 'Workshop Items', count: '10', href: '#projects' },
  { label: 'Reviews', count: '13', href: '#contact' },
  { label: 'Guides', count: '30', href: '#education' },
  { label: 'Artwork', count: '268', href: '#projects' },
  { label: 'Groups', count: '92', href: '#about' },
];

const scrollTo = (id) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export default function Sidebar() {
  return (
    <motion.aside
      className="w-full flex flex-col gap-4"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Status Header */}
      <div className="steam-card rounded-xl p-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-semibold text-cyan-200 font-[family-name:var(--font-heading)] uppercase tracking-wider">
            Currently Online
          </span>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="steam-card rounded-xl p-3.5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-cyan-300 font-[family-name:var(--font-heading)]">
            Tech Stack <span className="text-cyan-400 font-mono">{techStack.length}</span>
          </span>
          <button
            onClick={() => scrollTo('#about')}
            className="text-[10px] text-cyan-400/60 font-mono hover:text-cyan-300 transition-colors cursor-pointer"
          >
            View All
          </button>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto py-1">
          {techStack.map((tech, i) => (
            <div
              key={i}
              className="w-8.5 h-8.5 rounded-md bg-sky-950/80 border border-cyan-400/30 flex items-center justify-center shadow-[0_0_10px_rgba(56,189,248,0.15)] hover:border-cyan-400/60 hover:scale-110 transition-transform cursor-pointer flex-shrink-0"
              title={tech.title}
            >
              <tech.Icon size={16} />
            </div>
          ))}
        </div>
      </div>

      {/* Badges 77 */}
      <div className="steam-card rounded-xl p-3.5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-cyan-300 font-[family-name:var(--font-heading)]">
            Badges <span className="text-cyan-400 font-mono">77</span>
          </span>
          <button
            onClick={() => scrollTo('#projects')}
            className="text-[10px] text-cyan-400/60 font-mono hover:text-cyan-300 transition-colors cursor-pointer"
          >
            Showcase
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {badges.map((badge, i) => (
            <div
              key={i}
              className="p-1.5 rounded bg-sky-950/60 border border-sky-400/20 flex items-center gap-1.5 hover:border-cyan-400/50 transition-colors"
            >
              <badge.Icon size={12} className="text-cyan-400 flex-shrink-0" />
              <span className="text-[10px] text-sky-100 font-mono truncate">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation & Steam Stats List */}
      <div className="steam-card rounded-xl p-3.5">
        <div className="flex flex-col gap-1.5 text-xs font-mono">
          {steamStats.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="flex items-center justify-between py-1 px-1.5 rounded hover:bg-sky-950/60 transition-colors cursor-pointer group w-full text-left"
            >
              <span className="text-cyan-300/80 group-hover:text-cyan-200">{item.label}</span>
              <span className="text-cyan-400 font-semibold">{item.count}</span>
            </button>
          ))}
        </div>
      </div>
    </motion.aside>
  );
}
