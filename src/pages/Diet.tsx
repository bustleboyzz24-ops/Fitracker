import { GlassCard } from '@/components/GlassCard';
import { PlanCard } from '@/components/PlanCard';

export default function Diet() {
  return (
    <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-7 items-center">
      <div>
        <h2 className="text-4xl font-bold mb-3" style={{ color: '#ff8c42' }}>
          Diet Charts
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-3">
          Simple templates: weight loss, muscle gain, maintenance.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
          <PlanCard
            title="Weight Loss"
            price="Low cal"
            description="High fiber and protein focus."
          />
          <PlanCard
            title="Muscle Gain"
            price="High protein"
            description="Calorie surplus + strength training."
          />
          <PlanCard
            title="Maintenance"
            price="Balanced"
            description="Consistent meals and activity."
          />
        </div>
      </div>
      <aside>
        <GlassCard>
          <h3 className="text-primary font-semibold mb-2">Export</h3>
          <p className="text-muted-foreground leading-relaxed">
            Export diet templates (demo after register).
          </p>
        </GlassCard>
      </aside>
    </div>
  );
}
