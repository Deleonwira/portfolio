import { motion } from 'framer-motion';
import { Heart, Shield } from 'lucide-react';

export default function FavoriteGroupCard() {
  return (
    <motion.div
      className="steam-card rounded-xl p-3.5 md:p-4 relative"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-[11px] font-semibold text-cyan-300/80 font-[family-name:var(--font-heading)] uppercase tracking-wider mb-2.5 flex items-center justify-between">
        <span>Favorite Group</span>
        <span className="text-cyan-400/50 font-mono flex items-center gap-1">
          <Shield size={10} /> Guild <Shield size={10} />
        </span>
      </div>

      <div className="p-3 rounded-lg bg-sky-950/40 border border-sky-400/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        {/* Left: Avatar & Name */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg overflow-hidden border border-cyan-400/50 flex-shrink-0 relative group shadow-[0_0_15px_rgba(56,189,248,0.3)]">
            <img
              src="/images/avatar.png"
              alt="Group Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-sky-100 flex items-center gap-1.5 font-[family-name:var(--font-heading)]">
              <Heart size={12} className="text-cyan-400" /> Code &amp; Dream Guild <Heart size={12} className="text-cyan-400" />
            </h4>
            <p className="text-[11px] text-cyan-300/70 font-mono mt-0.5">
              Official Stack Community &amp; Project Lab
            </p>
          </div>
        </div>

        {/* Right: Steam Group Counters */}
        <div className="grid grid-cols-4 gap-3 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-cyan-500/20 text-center font-mono">
          <GroupStat count="15" label="Members" />
          <GroupStat count="4" label="In-Game" color="text-emerald-400" />
          <GroupStat count="8" label="Online" color="text-cyan-300" />
          <GroupStat count="0" label="In Chat" />
        </div>
      </div>
    </motion.div>
  );
}

function GroupStat({ count, label, color = "text-sky-200" }) {
  return (
    <div className="flex flex-col items-center">
      <span className={`text-xs font-bold ${color}`}>{count}</span>
      <span className="text-[9px] text-cyan-300/60 uppercase">{label}</span>
    </div>
  );
}
