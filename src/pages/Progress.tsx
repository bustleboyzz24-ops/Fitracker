import { GlassCard } from '@/components/GlassCard';

export default function Progress() {
  return (
    <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-7 items-center">
      <div>
        <h2 className="text-4xl font-bold mb-3" style={{ color: '#ff8c42' }}>
          Progress Tracker
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-3">
          Snapshots of your steps, calories, sleep and workouts.
        </p>
        <GlassCard className="mt-3">
          <p className="text-muted-foreground leading-relaxed">
            Demo charts can be integrated via Chart.js later.
          </p>
        </GlassCard>
      </div>
      <aside>
        <GlassCard>
          <h3 className="text-primary font-semibold mb-2">Snapshot</h3>
          <p className="text-muted-foreground leading-relaxed">
            Steps • Calories • Sleep • Workout minutes
          </p>
        </GlassCard>
      </aside>
    </div>
  );
}
