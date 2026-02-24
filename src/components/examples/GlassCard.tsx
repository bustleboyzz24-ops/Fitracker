import { GlassCard } from '../GlassCard';

export default function GlassCardExample() {
  return (
    <GlassCard>
      <h3 className="text-primary font-semibold mb-2">Quick Stats</h3>
      <p className="text-muted-foreground leading-relaxed">
        Steps: 5,200 • Calories: 1,780 kcal • Sleep: 7h
      </p>
    </GlassCard>
  );
}
