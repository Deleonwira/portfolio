import { motion } from 'framer-motion';
import { FileText, ExternalLink } from 'lucide-react';

const documents = [
  { id: 1, title: 'Notare — Notes & Activity Manager', type: 'PDF', size: '2.4 MB', link: 'https://drive.google.com/file/d/1GHLsUO7eVgxoIZ-IyMzb_aMaSMxW-GZ6/view?usp=drive_link' },
  { id: 2, title: 'Ogani — Fullstack E-Commerce Capstone', type: 'PDF', size: '5.1 MB', link: 'https://drive.google.com/file/d/1mIMBooLc52a5DpCP8au1CLHSO6rURiS1/view?usp=sharing' },
  { id: 3, title: 'Testing for Ogani', type: 'PDF', size: '1.8 MB', link: 'https://drive.google.com/file/d/1vZvGX2RjdYr3wGc2d1ksIiBQ1dGqQMGM/view?usp=sharing' },
];

export default function DocumentCard() {
  return (
    <motion.div
      id="documents"
      className="steam-card rounded-xl p-4 md:p-5 relative"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Title */}
      <div className="flex items-center justify-between mb-3 border-b border-cyan-500/20 pb-2">
        <h3 className="text-xs font-semibold text-cyan-300 font-[family-name:var(--font-heading)] uppercase tracking-wider flex items-center gap-1.5">
          <FileText size={13} className="text-cyan-400" />
          <span className="text-sky-200">Project Documents</span>
        </h3>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-xs text-text-secondary leading-relaxed">
          Access complete documentation and technical specifications for my previous projects.
        </p>

        <div className="flex flex-col gap-2">
          {documents.map((doc) => (
            <div key={doc.id} className="flex items-center justify-between p-2.5 rounded-lg bg-sky-950/40 border border-cyan-400/10 hover:border-cyan-400/30 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-sky-900/50 rounded-md">
                  <FileText size={14} className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-[11px] font-semibold text-sky-200">{doc.title}</h4>
                  <p className="text-[10px] text-cyan-500/70">{doc.type} • {doc.size}</p>
                </div>
              </div>

              <a
                href={doc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 py-1.5 px-3 bg-sky-900/40 hover:bg-sky-800/80 border border-cyan-500/30 rounded-md text-cyan-300 text-[10px] font-semibold transition-all duration-200 hover:shadow-[0_0_10px_rgba(34,211,238,0.2)]"
              >
                <span>View PDF</span>
                <ExternalLink size={12} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
