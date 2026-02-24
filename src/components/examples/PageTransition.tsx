import { PageTransition } from '../PageTransition';
import { GlassCard } from '../GlassCard';

export default function PageTransitionExample() {
  return (
    <div className="relative w-full h-96">
      <PageTransition isActive={true}>
        <GlassCard>
          <h2 className="text-primary text-3xl mb-3">Page Content</h2>
          <p className="text-muted-foreground">This page slides in with smooth transitions</p>
        </GlassCard>
      </PageTransition>
    </div>
  );
}
