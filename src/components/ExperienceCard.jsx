import { motion } from 'framer-motion';
import { Briefcase, Building2, Globe, Calendar, CheckCircle2, Sparkles, Code2, Rocket, ArrowUpRight } from 'lucide-react';

const experienceList = [
  {
    role: 'Fullstack Developer',
    company: 'Freelance & Independent Projects',
    type: 'Freelance',
    status: 'Active',
    period: '2021 — Present',
    description:
      'Designing, developing, and deploying full-stack web applications for clients and custom platforms. Building responsive client-side UIs, robust RESTful APIs, database architectures, and managing end-to-end web performance.',
    skills: ['React.js', 'Node.js', 'Laravel', 'Express.js', 'TailwindCSS', 'MySQL', 'MongoDB', 'REST APIs'],
    icon: Globe,
    current: true,
  },
  {
    role: 'Frontend Developer',
    company: 'Mercu Buana University (Universitas Mercu Buana)',
    type: 'Internship',
    status: 'Completed',
    period: '2021',
    description:
      'Developed interactive and responsive frontend web pages and modules for university platforms. Collaborated with dev team members to translate UI wireframes into clean, accessible web components and optimized frontend assets.',
    skills: ['Frontend Dev', 'JavaScript', 'HTML5 & CSS3', 'UI Component Design', 'Responsive Web', 'Cross-Browser Compatibility'],
    icon: Building2,
    current: false,
  },
];

export default function ExperienceCard() {
  return (
    <motion.div
      id="experience"
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
          <Briefcase size={15} className="text-cyan-400" />
          <span>Work Experience</span>
        </h3>
        <span className="text-[10px] text-cyan-400/60 font-mono flex items-center gap-1">
          <Sparkles size={10} className="text-cyan-400" />
          Career Journey
        </span>
      </div>

      {/* Timeline List */}
      <div className="relative flex flex-col gap-3.5 pl-1">
        {/* Timeline Connecting Line */}
        <div className="absolute left-[15px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-cyan-400/50 via-sky-500/30 to-cyan-500/10" />

        {experienceList.map((exp, index) => {
          const IconComp = exp.icon;
          return (
            <div key={index} className="relative flex items-start gap-3 group">
              {/* Timeline Icon Badge */}
              <div
                className={`relative z-10 w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 border transition-all duration-300 ${
                  exp.current
                    ? 'bg-sky-950 border-cyan-400 text-cyan-300 shadow-[0_0_12px_rgba(56,189,248,0.35)]'
                    : 'bg-sky-950/60 border-cyan-400/30 text-cyan-400/70 group-hover:border-cyan-400/60'
                }`}
              >
                <IconComp size={13} />
              </div>

              {/* Card Container */}
              <div className="flex-1 p-3 rounded-xl bg-sky-950/40 border border-cyan-400/15 hover:border-cyan-400/35 transition-all duration-300 group-hover:bg-sky-950/60">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h4 className="text-xs font-bold text-sky-100 font-[family-name:var(--font-heading)] flex items-center gap-1.5">
                    {exp.role}
                    <span className="text-[10px] text-cyan-400/60 font-mono font-normal">
                      @ {exp.company}
                    </span>
                  </h4>
                  <span className="text-[10px] text-cyan-400/80 font-mono flex items-center gap-1 flex-shrink-0">
                    <Calendar size={10} />
                    {exp.period}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span
                    className={`px-2 py-0.5 text-[9px] rounded-full font-mono uppercase tracking-wider flex items-center gap-1 ${
                      exp.current
                        ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-400/40'
                        : 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                    }`}
                  >
                    {exp.current ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    ) : (
                      <CheckCircle2 size={9} />
                    )}
                    {exp.type} &bull; {exp.status}
                  </span>
                </div>

                <p className="text-[11px] text-text-secondary leading-relaxed mb-2.5">
                  {exp.description}
                </p>

                {/* Tech Skills Tags */}
                <div className="flex flex-wrap gap-1">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-1.5 py-0.5 text-[9px] rounded bg-sky-950/80 border border-cyan-400/20 text-cyan-300/90 font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
