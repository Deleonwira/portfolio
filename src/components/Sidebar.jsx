import { motion } from 'framer-motion';
import {
  Trophy, Rocket, Monitor, Coffee, Palette, Wand2,
  GitCommitHorizontal, Atom, Layers, Moon,
  Heart,
} from 'lucide-react';

const awards = [
  { Icon: Trophy, title: 'Top Developer' },
  { Icon: Rocket, title: 'Fast Shipper' },
  { Icon: Monitor, title: 'Clean Code' },
  { Icon: Coffee, title: 'Coffee Fueled' },
  { Icon: Palette, title: 'Pixel Perfect' },
  { Icon: Wand2, title: 'Tech Wizard' },
];

const badges = [
  { Icon: GitCommitHorizontal, label: '100+ Commits' },
  { Icon: Atom, label: 'React Architect' },
  { Icon: Layers, label: 'Full Stack Master' },
  { Icon: Moon, label: 'Night Owl Coder' },
];

const steamStats = [
  { label: 'Projects / Games', count: '109' },
  { label: 'Inventory / Skills', count: '24' },
  { label: 'Screenshots', count: '68' },
  { label: 'Videos', count: '12' },
  { label: 'Workshop Items', count: '10' },
  { label: 'Reviews', count: '13' },
  { label: 'Guides', count: '30' },
  { label: 'Artwork', count: '268' },
  { label: 'Groups', count: '92' },
];

const groups = [
  { name: 'Code & Dreams', members: '2 Members', avatar: '/images/avatar.png' },
  { name: 'Neko Devs', members: '2,056 Members', avatar: '/images/avatar.png' },
  { name: 'Pawsome Coder', members: '8,761 Members', avatar: '/images/avatar.png' },
];

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

      {/* Profile Awards 23 */}
      <div className="steam-card rounded-xl p-3.5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-cyan-300 font-[family-name:var(--font-heading)]">
            Profile Awards <span className="text-cyan-400 font-mono">23</span>
          </span>
          <span className="text-[10px] text-cyan-400/60 font-mono">View All</span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto py-1">
          {awards.map((award, i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-md bg-sky-950/80 border border-cyan-400/30 flex items-center justify-center text-cyan-300 shadow-[0_0_10px_rgba(56,189,248,0.2)] hover:scale-110 transition-transform cursor-pointer flex-shrink-0"
              title={award.title}
            >
              <award.Icon size={14} />
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
          <span className="text-[10px] text-cyan-400/60 font-mono">Showcase</span>
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
            <div
              key={item.label}
              className="flex items-center justify-between py-1 px-1.5 rounded hover:bg-sky-950/60 transition-colors cursor-pointer group"
            >
              <span className="text-cyan-300/80 group-hover:text-cyan-200">{item.label}</span>
              <span className="text-cyan-400 font-semibold">{item.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Groups Showcase */}
      <div className="steam-card rounded-xl p-3.5">
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-xs font-semibold text-cyan-300 font-[family-name:var(--font-heading)]">
            Groups <span className="text-cyan-400 font-mono">92</span>
          </span>
        </div>

        <div className="flex flex-col gap-2">
          {groups.map((group, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 p-1.5 rounded hover:bg-sky-950/50 transition-colors cursor-pointer"
            >
              <div className="w-7 h-7 rounded overflow-hidden border border-cyan-400/40 flex-shrink-0 bg-sky-900">
                <img src={group.avatar} alt={group.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] font-semibold text-sky-100 truncate flex items-center gap-1">
                  <Heart size={9} className="text-cyan-400 flex-shrink-0" />
                  {group.name}
                </span>
                <span className="text-[9px] text-cyan-400/60 font-mono">{group.members}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.aside>
  );
}
