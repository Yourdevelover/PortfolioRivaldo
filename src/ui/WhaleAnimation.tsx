import { useEffect } from 'react';

// Restored simple whale animation using inline CSS keyframes
export default function WhaleAnimation() {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes swim {
        0% { transform: translateX(-10%); }
        100% { transform: translateX(110%); }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div
        className="fixed inset-0 pointer-events-none z-20 opacity-70"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 40"
        className="absolute bottom-5 w-80 h-20"
        style={{ animation: 'swim 15s linear infinite' }}
      >
        <path
          d="M10 20 C20 0, 40 0, 50 20 C60 40, 80 40, 90 20"
          fill="none"
          stroke="#4A90E2"
          strokeWidth="4"
        />
      </svg>
    </div>
  );
}
