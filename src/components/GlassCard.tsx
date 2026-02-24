import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div
      className={`rounded-xl p-4 ${className}`}
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,140,66,0.04)',
        boxShadow: '0 12px 30px rgba(0,0,0,0.5)',
      }}
    >
      {children}
    </div>
  );
}
