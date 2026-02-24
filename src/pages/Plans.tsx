import { useState } from 'react';
import { GlassCard } from '@/components/GlassCard';
import { PlanCard } from '@/components/PlanCard';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Plans() {
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: string } | null>(null);

  const handlePlanSelect = (name: string, price: string) => {
    setSelectedPlan({ name, price });
  };

  const handlePayment = () => {
    alert('Payment processed (demo)');
    setSelectedPlan(null);
  };

  return (
    <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-7 items-center">
      <div>
        <h2 className="text-4xl font-bold mb-3" style={{ color: '#ff8c42' }}>
          Subscription Plans
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-3">
          Pick a plan — demo checkout (front-end only).
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
          <PlanCard
            title="Normal"
            price="₹2,500"
            description="2 months — workout split, health tips"
            onSelect={() => handlePlanSelect('Normal', '₹2,500')}
          />
          <PlanCard
            title="Gold"
            price="₹4,500"
            description="3 months — diet charts, notifications"
            onSelect={() => handlePlanSelect('Gold', '₹4,500')}
          />
          <PlanCard
            title="Premium"
            price="₹7,000"
            description="4 months — 1-on-1 trainer & personalized plans"
            onSelect={() => handlePlanSelect('Premium', '₹7,000')}
          />
        </div>
      </div>
      <aside>
        <GlassCard>
          <h3 className="text-primary font-semibold mb-2">Secure (Demo)</h3>
          <p className="text-muted-foreground leading-relaxed">
            No payment data collected — front-end simulation.
          </p>
        </GlassCard>
      </aside>

      <Dialog open={!!selectedPlan} onOpenChange={() => setSelectedPlan(null)}>
        <DialogContent className="bg-card border-card-border">
          <DialogHeader>
            <DialogTitle className="text-primary">Demo Payment</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              You selected: <strong>{selectedPlan?.name}</strong> — {selectedPlan?.price}
            </p>
            <Input placeholder="Card holder name" data-testid="input-card-name" />
            <Input placeholder="Card number (demo)" data-testid="input-card-number" />
            <div className="flex gap-2">
              <Input placeholder="MM/YY" className="flex-1" data-testid="input-expiry" />
              <Input placeholder="CVV" className="w-28" data-testid="input-cvv" />
            </div>
            <div className="flex gap-2">
              <Button
                onClick={handlePayment}
                className="flex-1 font-extrabold"
                style={{
                  background: 'linear-gradient(90deg, #ff8c42, #ff9d5a)',
                  color: '#000',
                }}
                data-testid="button-pay"
              >
                Pay (Demo)
              </Button>
              <Button
                variant="outline"
                onClick={() => setSelectedPlan(null)}
                className="border-white/10"
                data-testid="button-cancel"
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
