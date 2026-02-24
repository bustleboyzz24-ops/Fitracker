import { Button } from '@/components/ui/button';

interface PlanCardProps {
  title: string;
  price: string;
  description: string;
  onSelect?: () => void;
}

export function PlanCard({ title, price, description, onSelect }: PlanCardProps) {
  return (
    <div
      className="rounded-xl p-3.5"
      style={{
        background: 'linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.55))',
        border: '1px solid rgba(255,140,66,0.06)',
      }}
    >
      <h3 className="text-primary font-semibold mb-1.5">{title}</h3>
      <div
        className="text-xl font-black mb-2"
        style={{ color: '#ff9d5a' }}
      >
        {price}
      </div>
      <p className="text-muted-foreground leading-relaxed text-sm mb-2">{description}</p>
      {onSelect && (
        <Button
          onClick={onSelect}
          className="w-full font-extrabold mt-2"
          style={{
            background: 'linear-gradient(90deg, #ff8c42, #ff9d5a)',
            color: '#000',
          }}
          data-testid={`button-select-${title.toLowerCase()}`}
        >
          Proceed
        </Button>
      )}
    </div>
  );
}
