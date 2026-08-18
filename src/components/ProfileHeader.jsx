import { motion } from 'framer-motion';
import {
  Download,
  MessageCircle,
  MapPin,
  Moon,
  Code2,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons';

export default function ProfileHeader() {
  return (
    <div className="steam-card rounded-xl p-4 md:p-5 relative overflow-hidden">
          {/* Subtle top banner glow */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

          {/* Left Column: Avatar & Main Profile Details */}
          <div className="flex items-start gap-4 flex-1">
            {/* Anime Avatar with Glowing Steam Frame */}
            <motion.div
              className="relative flex-shrink-0"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="w-[84px] h-[84px] md:w-[96px] md:h-[96px] rounded-lg overflow-hidden border-2 border-cyan-400/50 shadow-[0_0_20px_rgba(56,189,248,0.35)] relative group">
                <img
                  src="/images/foto_leon.jpg"
                  alt="Leon Wira"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Subtle inner overlay sheen */}
                <div className="absolute inset-0 bg-gradient-to-t from-sky-950/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Online Status Pill Indicator */}
              <div className="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded-full bg-[#07192f] border border-cyan-400/40 flex items-center gap-1 shadow-md">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[9px] font-semibold text-cyan-300 tracking-wider uppercase">Online</span>
              </div>
            </motion.div>

            {/* Steam Profile Meta */}
            <div className="flex flex-col gap-1.5 flex-1 min-w-0">
              {/* Username + Country */}
              <div className="flex items-center flex-wrap gap-2">
                <h1 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-heading)] text-e2f1ff tracking-wide flex items-center gap-2">
                  <Moon size={18} className="text-cyan-400" />
                  Hamza Deleon Wiradarma
                  <Moon size={14} className="text-cyan-400/60" />
                </h1>

                <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded bg-sky-950/80 border border-sky-400/30 text-sky-200">
                  <MapPin size={10} className="text-cyan-400" /> Indonesia
                </span>
              </div>

              {/* Decorative Steam Kaomoji Line
              <div className="text-[11px] font-mono text-cyan-300/70 select-none tracking-tight flex items-center gap-1">
                <span>·.·´¯`·.·</span>
                <Moon size={9} className="text-cyan-400" />
                <span>·.·´¯`·.·</span>
              </div> */}

              {/* Subtitle Row
              <div className="text-xs text-sky-200/90 font-sans tracking-widest flex items-center gap-2 select-all">
                <Code2 size={12} className="text-cyan-400/80" />
                <span className="text-[10px] text-cyan-400/60 font-mono">[ fullstack architect ]</span>
              </div> */}

              {/* Short Bio */}
              <p className="text-xs text-text-secondary max-w-lg leading-relaxed mt-0.5">
                Fully passionate in tech especially AI. Love learning new things and still learning to be better than yesterday.
              </p>

              {/* Action Buttons & Links */}
              <div className="flex flex-wrap items-center gap-2 mt-2">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="steam-btn px-3 py-1.5 rounded text-xs font-medium flex items-center gap-1.5"
                >
                  <MessageCircle size={13} className="text-cyan-300" />
                  <span>Contact Me</span>
                </a>
                <a
                  href="https://drive.google.com/file/d/1LAmn2JrLKZBWcQ8N21wZbN5YRA4cmzMv/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="steam-btn px-3 py-1.5 rounded text-xs font-medium flex items-center gap-1.5"
                >
                  <Download size={13} className="text-cyan-300" />
                  <span>Resume</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded bg-sky-950/60 border border-sky-400/30 hover:border-cyan-400 text-sky-200 hover:text-white transition-all"
                  title="GitHub"
                >
                  <GithubIcon size={14} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded bg-sky-950/60 border border-sky-400/30 hover:border-cyan-400 text-sky-200 hover:text-white transition-all"
                  title="LinkedIn"
                >
                  <LinkedinIcon size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
  );
}
