import { GlassCard } from '@/components/GlassCard';

export default function About() {
  return (
    <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-7 items-center">
      <div>
        <h2 className="text-4xl font-bold mb-3" style={{ color: '#ff8c42' }}>
          About FitTrackr
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-3">
          Built to make fitness accessible with consistent, simple tools.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Made with passion by RK Verse — your future dev partner.
        </p>
      </div>
      <aside>
        <GlassCard>
          <h3 className="text-primary font-semibold mb-2">Mission</h3>
          <p className="text-muted-foreground leading-relaxed">
            Habit-based fitness over quick fixes.
          </p>
        </GlassCard>
      </aside>
    </div>
  );
}
