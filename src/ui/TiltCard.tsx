import { useRef, useState, type ReactNode, type MouseEvent } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}

export default function TiltCard({ children, className = '', maxTilt = 5 }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState('rotateX(0deg) rotateY(0deg)');
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    // Skip 3D tilt on touch screens for mobile scroll stability
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTransformStyle(`rotateX(${rotateX.toFixed(1)}deg) rotateY(${rotateY.toFixed(1)}deg)`);

    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransformStyle('rotateX(0deg) rotateY(0deg)');
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchEnd={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: isHovered ? 'transform 0.05s ease-out' : 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`apple-glass-hover liquid-spotlight ${className}`}
    >
      {children}
    </div>
  );
}
