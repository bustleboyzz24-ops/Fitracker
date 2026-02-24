import { PlanCard } from '../PlanCard';

export default function PlanCardExample() {
  return (
    <div className="grid grid-cols-3 gap-3 max-w-4xl">
      <PlanCard
        title="Normal"
        price="₹2,500"
        description="2 months — workout split, health tips"
        onSelect={() => console.log('Normal plan selected')}
      />
      <PlanCard
        title="Gold"
        price="₹4,500"
        description="3 months — diet charts, notifications"
        onSelect={() => console.log('Gold plan selected')}
      />
      <PlanCard
        title="Premium"
        price="₹7,000"
        description="4 months — 1-on-1 trainer & personalized plans"
        onSelect={() => console.log('Premium plan selected')}
      />
    </div>
  );
}
