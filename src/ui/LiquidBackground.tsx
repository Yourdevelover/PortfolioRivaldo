import { useEffect, useRef } from 'react';

interface WaterRipple {
  x: number;
  y: number;
  r: number;
  maxR: number;
  opacity: number;
  speed: number;
}

export default function LiquidWaterBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let ripples: WaterRipple[] = [];
    let mouse = { x: width / 2, y: height / 2, lastX: width / 2, lastY: height / 2 };

    let lastRipple = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const dist = Math.hypot(e.clientX - mouse.lastX, e.clientY - mouse.lastY);

      if (dist > 35) {
        const now = performance.now();
        if (now - lastRipple > 50) {
          ripples.push({
            x: e.clientX,
            y: e.clientY,
            r: 2,
            maxR: 35 + Math.random() * 20,
            opacity: 0.25,
            speed: 1.2 + Math.random() * 0.8,
          });
          lastRipple = now;
        }

        mouse.lastX = e.clientX;
        mouse.lastY = e.clientY;
      }

      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    // Calm ambient water nodes
    const waterOrbs = [
      { x: width * 0.25, y: height * 0.25, r: 350, color: 'rgba(14, 165, 233, 0.06)' },
      { x: width * 0.75, y: height * 0.35, r: 380, color: 'rgba(3, 105, 161, 0.07)' },
      { x: width * 0.5, y: height * 0.7, r: 420, color: 'rgba(56, 189, 248, 0.05)' },
    ];

    let time = 0;
    let lastFrame = 0;

    const render = (now: number) => {
      if (now - lastFrame < 16) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }
      lastFrame = now;
      time += 0.005;
      ctx.clearRect(0, 0, width, height);

      // 1. Calm Ambient Floating Water Orbs
      waterOrbs.forEach((orb, i) => {
        const cx = orb.x + Math.sin(time + i) * 30;
        const cy = orb.y + Math.cos(time * 0.7 + i) * 30;

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, orb.r);
        grad.addColorStop(0, orb.color);
        grad.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, orb.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Gentle Mouse Light Spotlight
      const mouseGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 250);
      mouseGrad.addColorStop(0, 'rgba(56, 189, 248, 0.05)');
      mouseGrad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = mouseGrad;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 250, 0, Math.PI * 2);
      ctx.fill();

      // 3. Subtle Water Ripples
      ripples = ripples.filter((r) => r.opacity > 0.01);
      ripples.forEach((r) => {
        r.r += r.speed;
        r.opacity *= 0.95;

        ctx.strokeStyle = `rgba(56, 189, 248, ${r.opacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render(0);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-100"
      aria-hidden="true"
    />
  );
}
