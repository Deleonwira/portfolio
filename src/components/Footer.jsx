import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 mt-8 pb-6">
      <div className="max-w-[820px] mx-auto px-5">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-5" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-text-muted">
            © {new Date().getFullYear()} Leon Wira. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-[10px] text-text-muted">
            Built with <Heart size={10} className="text-primary-light fill-primary-light" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
}
