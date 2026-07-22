import { motion } from 'framer-motion';
import { Sparkles, Wifi } from 'lucide-react';

export default function StatusBadgeCard() {
  return (
    <motion.div
      className="steam-card rounded-xl p-4 relative overflow-hidden"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Badge Card */}
      <div className="flex items-center gap-3 p-2.5 rounded-lg bg-sky-950/60 border border-sky-400/30">
        <div className="w-9 h-9 rounded-lg overflow-hidden border border-cyan-400/40 flex-shrink-0 bg-gradient-to-br from-sky-800 to-sky-950 flex items-center justify-center text-cyan-300 shadow-[0_0_12px_rgba(56,189,248,0.3)]">
          <Sparkles size={18} />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-sky-100 leading-tight font-[family-name:var(--font-heading)]">
            Fullstack Web Developer
          </span>
          <span className="text-[10px] text-cyan-400 font-mono">100 XP</span>
        </div>
      </div>

      {/* Currently Online Status */}
      <div className="flex items-center gap-2 mt-3 text-[11px] text-cyan-300/80 font-mono">
        <Wifi size={12} className="text-cyan-400" />
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping opacity-75" />
        <span>Currently Online</span>
      </div>
    </motion.div>
  );
}
