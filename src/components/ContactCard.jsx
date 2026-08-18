import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function ContactCard() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Construct mailto link
    // Replace 'your.email@example.com' with your actual email address
    const mailtoLink = `mailto:hamzadeleonw123@gmail.com?subject=Portfolio Contact from ${name}&body=${message}%0D%0A%0D%0AReply to: ${email}`;
    
    // Open default mail client
    window.location.href = mailtoLink;

    setSubmitted(true);
    e.target.reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <motion.div
      id="contact"
      className="steam-card rounded-xl p-4 md:p-5 relative"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-3 border-b border-cyan-500/20 pb-2">
        <h3 className="text-xs font-semibold text-cyan-300 font-[family-name:var(--font-heading)] uppercase tracking-wider flex items-center gap-2">
          <MessageSquare size={14} className="text-cyan-400" />
          <span>Contact me</span>
        </h3>
        <span className="text-[10px] font-mono text-cyan-400/60">
          Leave a comment
        </span>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            name="name"
            required
            placeholder="Name..."
            className="flex-1 px-3 py-2 rounded bg-sky-950/70 border border-cyan-400/30 text-xs text-sky-100 placeholder-cyan-300/40 focus:outline-none focus:border-cyan-400 transition-colors font-mono"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email..."
            className="flex-1 px-3 py-2 rounded bg-sky-950/70 border border-cyan-400/30 text-xs text-sky-100 placeholder-cyan-300/40 focus:outline-none focus:border-cyan-400 transition-colors font-mono"
          />
        </div>

        <textarea
          name="message"
          rows={3}
          required
          placeholder="Send a message..."
          className="w-full px-3 py-2 rounded bg-sky-950/70 border border-cyan-400/30 text-xs text-sky-100 placeholder-cyan-300/40 focus:outline-none focus:border-cyan-400 transition-colors font-mono resize-none"
        />

        <div className="flex items-center justify-between">
          <span className="text-[10px] text-cyan-300/60 font-mono">
            + Respect comments policy (っ'--')っ
          </span>

          <button
            type="submit"
            className="steam-btn px-4 py-2 rounded text-xs font-semibold flex items-center gap-2 cursor-pointer"
          >
            {submitted ? (
              <>
                <CheckCircle2 size={13} className="text-emerald-400" />
                <span>Comment Posted!</span>
              </>
            ) : (
              <>
                <Send size={13} className="text-cyan-300" />
                <span>Send</span>
              </>
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
}
