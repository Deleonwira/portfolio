import { useState } from 'react';
import { Play, Pause, Music, Volume2, SkipForward } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="steam-card rounded-full px-3 py-2 border border-cyan-400/40 shadow-[0_0_20px_rgba(0,242,254,0.3)] flex items-center gap-3 backdrop-blur-md bg-[#040914]/90">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-sky-700 flex items-center justify-center text-white shadow-md flex-shrink-0 animate-pulse">
          <Music size={14} />
        </div>

        <div className="flex flex-col min-w-[120px] max-w-[160px]">
          <span className="text-[11px] font-semibold text-sky-100 truncate font-[family-name:var(--font-heading)]">
            <Music size={10} className="inline text-cyan-400" /> Lofi Starry Night
          </span>
          <span className="text-[9px] text-cyan-300/70 font-mono">
            {isPlaying ? 'Playing • 02:45' : 'Paused • Steam Vibe'}
          </span>
        </div>

        <div className="flex items-center gap-1.5 border-l border-cyan-500/20 pl-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-7 h-7 rounded-full bg-sky-950 border border-cyan-400/40 hover:border-cyan-300 flex items-center justify-center text-cyan-300 hover:text-white transition-colors cursor-pointer"
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause size={12} /> : <Play size={12} className="ml-0.5" />}
          </button>
        </div>
      </div>
    </div>
  );
}
