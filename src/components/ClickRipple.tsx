import { useState, useEffect } from 'react';

interface SingleRipple {
  x: number;
  y: number;
  id: number;
}

export default function ClickRipple() {
  const [ripples, setRipples] = useState<SingleRipple[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;

      const newRipple = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(),
      };

      // Keep only max 2 active ripples to prevent clutter
      setRipples((prev) => [...prev.slice(-2), newRipple]);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  const removeRipple = (id: number) => {
    setRipples((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          onAnimationEnd={() => removeRipple(ripple.id)}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-400/60 bg-sky-400/5 animate-ripple shadow-[0_0_15px_rgba(56,189,248,0.3)]"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 70,
            height: 70,
          }}
        />
      ))}
    </div>
  );
}
