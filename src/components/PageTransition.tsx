import { ReactNode, useEffect, useState } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  isActive: boolean;
}

export function PageTransition({ children, isActive }: PageTransitionProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isActive) {
      setShow(true);
    } else {
      const timer = setTimeout(() => setShow(false), 600);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  if (!show && !isActive) return null;

  return (
    <div
      className="absolute inset-0 flex items-center justify-center px-7 py-12 transition-all duration-600"
      style={{
        transform: isActive ? 'translateX(0)' : 'translateX(120%)',
        opacity: isActive ? 1 : 0,
        pointerEvents: isActive ? 'auto' : 'none',
        zIndex: isActive ? 5 : 0,
        transitionTimingFunction: 'cubic-bezier(0.2, 0.9, 0.2, 1)',
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </div>
  );
}
