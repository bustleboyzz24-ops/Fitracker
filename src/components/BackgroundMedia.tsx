import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';

// Background media configuration for each page
const pageBackgrounds: Record<string, { video: string; fallback: string }> = {
  '/': {
    video: 'https://cdn.coverr.co/videos/coverr-gym-fitness-workout-8617/1080p.mp4',
    fallback: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80',
  },
  '/plans': {
    video: 'https://cdn.coverr.co/videos/coverr-fitness-offer-clip-8999/1080p.mp4',
    fallback: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&q=80',
  },
  '/diet': {
    video: 'https://cdn.coverr.co/videos/coverr-fresh-vegetables-on-the-table-5844/1080p.mp4',
    fallback: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1920&q=80',
  },
  '/checklist': {
    video: 'https://cdn.coverr.co/videos/coverr-morning-workout-7316/1080p.mp4',
    fallback: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&q=80',
  },
  '/progress': {
    video: 'https://cdn.coverr.co/videos/coverr-tech-dashboard-9999/1080p.mp4',
    fallback: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80',
  },
  '/about': {
    video: 'https://cdn.coverr.co/videos/coverr-team-gym-collab-8701/1080p.mp4',
    fallback: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&q=80',
  },
  '/contact': {
    video: 'https://cdn.coverr.co/videos/coverr-team-gym-collab-8701/1080p.mp4',
    fallback: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80',
  },
  '/register': {
    video: 'https://cdn.coverr.co/videos/coverr-sunrise-workout-7004/1080p.mp4',
    fallback: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&q=80',
  },
};

export function BackgroundMedia() {
  const [location] = useLocation();
  const [useVideo, setUseVideo] = useState(true);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Detect if we should use video based on device and network
    const isMobile = /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth <= 820;
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    const netType = connection?.effectiveType || '4g';
    const slowNetwork = ['2g', '3g', 'slow-2g'].includes(netType);
    
    // Use video only on desktop with good connection
    setUseVideo(!isMobile && !slowNetwork);
    setVideoError(false);
  }, [location]);

  const currentBg = pageBackgrounds[location] || pageBackgrounds['/'];

  useEffect(() => {
    // Add gradient pulse animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes gradPulse {
        0% { filter: brightness(1); }
        50% { filter: brightness(1.05); }
        100% { filter: brightness(1); }
      }
    `;
    document.head.appendChild(style);
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <>
      {/* Video or Image Background */}
      <div
        className="fixed inset-0 overflow-hidden pointer-events-none"
        style={{ zIndex: -2 }}
      >
        {useVideo && !videoError ? (
          <video
            key={currentBg.video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
            onError={() => setVideoError(true)}
            style={{ display: 'block' }}
          >
            <source src={currentBg.video} type="video/mp4" />
          </video>
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${currentBg.fallback})`,
              filter: 'brightness(0.6)',
            }}
          />
        )}
      </div>

      {/* Animated Gradient Background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: -3,
          background: 'linear-gradient(135deg, #050505, #111)',
          animation: 'gradPulse 12s linear infinite',
        }}
      />
    </>
  );
}
