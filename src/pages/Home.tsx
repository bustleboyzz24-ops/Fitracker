import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/GlassCard';

export default function Home() {
  const [, setLocation] = useLocation();

  return (
    <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-7 items-center">
      <div>
        <h2 className="text-4xl font-bold mb-3" style={{ color: '#ff8c42' }}>
          Track. Transform. Triumph.
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-3">
          FitTrackr helps you stick to fitness habits with simple tools — diet charts, checklists,
          progress snapshots and plans.
        </p>
        <div className="flex gap-3 mt-4 flex-wrap">
          <Button
            onClick={() => setLocation('/plans')}
            className="font-extrabold"
            style={{
              background: 'linear-gradient(90deg, #ff8c42, #ff9d5a)',
              color: '#000',
            }}
            data-testid="button-see-plans"
          >
            See Plans
          </Button>
          <Button
            variant="outline"
            onClick={() => setLocation('/contact')}
            className="font-semibold border-white/10"
            data-testid="button-contact-us"
          >
            Contact Us
          </Button>
        </div>
      </div>
      <aside>
        <GlassCard>
          <h3 className="text-primary font-semibold mb-2">Quick Stats</h3>
          <p className="text-muted-foreground leading-relaxed">
            Steps: 5,200 • Calories: 1,780 kcal • Sleep: 7h
          </p>
        </GlassCard>
      </aside>
    </div>
  );
}
