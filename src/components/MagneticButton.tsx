import { useRef, useState, type ReactNode, type MouseEvent } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
  strength?: number;
}

export default function MagneticButton({
  children,
  href,
  onClick,
  className = '',
  target,
  rel,
  strength = 0.2,
}: MagneticButtonProps) {
  const btnRef = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    // Disable magnetic pull on touch devices for mobile stability
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (!btnRef.current) return;

    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    setPosition({ x: x * strength, y: y * strength });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const handleTouchEnd = () => {
    setPosition({ x: 0, y: 0 });
  };

  const relValue = target === '_blank' ? (rel || 'noopener noreferrer') : rel;

  const style = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0px)`,
    transition: position.x === 0 && position.y === 0
      ? 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
      : 'transform 0.1s ease-out',
  };

  if (href) {
    return (
      <a
        ref={btnRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={relValue}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchEnd={handleTouchEnd}
        style={style}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={btnRef as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchEnd={handleTouchEnd}
      style={style}
      className={className}
    >
      {children}
    </button>
  );
}
