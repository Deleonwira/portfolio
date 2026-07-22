import { useEffect, useRef } from 'react';

export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.8 + 0.4;
        this.speedY = -Math.random() * 0.25 - 0.05;
        this.speedX = (Math.random() - 0.5) * 0.15;
        this.opacity = Math.random() * 0.7 + 0.2;
        this.twinkleSpeed = Math.random() * 0.02 + 0.005;
        this.twinkleOffset = Math.random() * Math.PI * 2;
        // Color variation: cyan, soft blue, white
        const colors = [
          'rgba(112, 225, 255, ',
          'rgba(56, 189, 248, ',
          'rgba(226, 241, 255, ',
          'rgba(30, 117, 255, ',
        ];
        this.colorBase = colors[Math.floor(Math.random() * colors.length)];
      }

      update(time) {
        this.x += this.speedX;
        this.y += this.speedY;
        this.currentOpacity =
          this.opacity * (0.4 + 0.6 * Math.sin(time * this.twinkleSpeed + this.twinkleOffset));

        if (this.y < -10 || this.x < -10 || this.x > canvas.width + 10) {
          this.reset();
          this.y = canvas.height + 10;
        }
      }

      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `${this.colorBase}${this.currentOpacity})`;
        ctx.fill();

        // Star bokeh glow for larger particles
        if (this.size > 1.2) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = `${this.colorBase}${this.currentOpacity * 0.18})`;
          ctx.fill();
        }
      }
    }

    const init = () => {
      resize();
      const count = Math.floor((canvas.width * canvas.height) / 7000);
      particles = Array.from({ length: Math.min(count, 180) }, () => new Particle());
    };

    let time = 0;
    const animate = () => {
      time++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.update(time);
        p.draw(ctx);
      });

      animationId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => resize();
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#030712]">
      {/* Dynamic Cosmic Blue Background Gradients */}
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background: `
            radial-gradient(ellipse 90% 60% at 50% 0%, rgba(10, 40, 105, 0.45) 0%, transparent 70%),
            radial-gradient(ellipse 70% 50% at 15% 35%, rgba(30, 117, 255, 0.22) 0%, transparent 60%),
            radial-gradient(ellipse 80% 60% at 85% 65%, rgba(0, 242, 254, 0.18) 0%, transparent 65%),
            radial-gradient(ellipse 100% 80% at 50% 100%, rgba(3, 15, 45, 0.9) 0%, transparent 80%)
          `,
        }}
      />

      {/* Floating Bokeh Nebula Orbs */}
      <div
        className="absolute top-10 left-1/4 w-96 h-96 rounded-full opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.35) 0%, transparent 70%)',
          filter: 'blur(70px)',
          animation: 'float 10s ease-in-out infinite',
        }}
      />
      <div
        className="absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(30, 117, 255, 0.4) 0%, transparent 70%)',
          filter: 'blur(90px)',
          animation: 'float 14s ease-in-out infinite reverse',
        }}
      />

      {/* Interactive Star Field Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Vignette Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 40%, rgba(2, 5, 14, 0.75) 100%)',
        }}
      />
    </div>
  );
}
