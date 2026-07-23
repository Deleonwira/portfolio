import { motion } from 'framer-motion';
import { GraduationCap, Building2, Calendar, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';

const educationList = [
  {
    institution: 'Politeknik Negeri Jakarta (PNJ)',
    degree: 'Informatics Engineering (Teknik Informatika)',
    status: '5th Semester (Active)',
    period: '2023 — Present',
    description:
      'Specializing in software engineering architecture, database administration, web systems development, and mobile computing.',
    icon: GraduationCap,
    current: true,
  },
  {
    institution: 'CCIT FTUI',
    subtitle: 'Center for Computing and Information Technology — Faculty of Engineering, Universitas Indonesia',
    degree: 'Information Technology (Teknologi Informasi)',
    status: 'Professional IT Program',
    period: '2023 — Present',
    description:
      'Intensive professional IT education covering full-stack development, algorithms, system design, and software lifecycle.',
    icon: Building2,
    current: true,
  },
  {
    institution: 'SMK Telkom Jakarta',
    degree: 'Software Engineering (Rekayasa Perangkat Lunak — RPL)',
    status: 'Graduated',
    period: '2020 — 2023',
    description:
      'Core foundation in programming logic, relational databases, web development (HTML/CSS/JS/PHP), and software development methodology.',
    icon: BookOpen,
    current: false,
  },
];

export default function EducationCard() {
  return (
    <motion.div
      className="steam-card rounded-xl p-4 md:p-5 relative overflow-hidden"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Ambient Glow */}
      <div className="absolute -top-12 -right-12 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between mb-4 border-b border-cyan-500/20 pb-2.5">
        <h3 className="text-xs font-semibold text-cyan-300 font-[family-name:var(--font-heading)] uppercase tracking-wider flex items-center gap-2">
          <GraduationCap size={15} className="text-cyan-400" />
          <span>Education &amp; Qualifications</span>
        </h3>
        <span className="text-[10px] text-cyan-400/60 font-mono flex items-center gap-1">
          <Sparkles size={10} className="text-cyan-400" />
          Academic Journey
        </span>
      </div>

      {/* Timeline List */}
      <div className="relative flex flex-col gap-3.5 pl-1">
        {/* Timeline Connecting Line */}
        <div className="absolute left-[15px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-cyan-400/50 via-sky-500/30 to-cyan-500/10" />

        {educationList.map((edu, index) => {
          const IconComp = edu.icon;
          return (
            <div key={index} className="relative flex items-start gap-3 group">
              {/* Timeline Icon Badge */}
              <div
                className={`relative z-10 w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 border transition-all duration-300 ${
                  edu.current
                    ? 'bg-sky-950 border-cyan-400 text-cyan-300 shadow-[0_0_12px_rgba(56,189,248,0.35)]'
                    : 'bg-sky-950/60 border-cyan-400/30 text-cyan-400/70 group-hover:border-cyan-400/60'
                }`}
              >
                <IconComp size={13} />
              </div>

              {/* Card Container */}
              <div className="flex-1 p-3 rounded-xl bg-sky-950/40 border border-cyan-400/15 hover:border-cyan-400/35 transition-all duration-300 group-hover:bg-sky-950/60">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h4 className="text-xs font-bold text-sky-100 font-[family-name:var(--font-heading)]">
                    {edu.institution}
                  </h4>
                  <span className="text-[10px] text-cyan-400/80 font-mono flex items-center gap-1 flex-shrink-0">
                    <Calendar size={10} />
                    {edu.period}
                  </span>
                </div>

                {edu.subtitle && (
                  <p className="text-[10px] text-cyan-300/70 mb-1.5 font-mono leading-tight">
                    {edu.subtitle}
                  </p>
                )}

                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span className="text-[11px] text-cyan-300 font-semibold">
                    {edu.degree}
                  </span>
                  <span
                    className={`px-2 py-0.5 text-[9px] rounded-full font-mono uppercase tracking-wider flex items-center gap-1 ${
                      edu.current
                        ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-400/40'
                        : 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                    }`}
                  >
                    {edu.current ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    ) : (
                      <CheckCircle2 size={9} />
                    )}
                    {edu.status}
                  </span>
                </div>

                <p className="text-[11px] text-text-secondary leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
