import { useState } from 'react';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thanks — feedback received (demo).');
    setFeedback('');
  };

  return (
    <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-7 items-center">
      <div>
        <h2 className="text-4xl font-bold mb-3" style={{ color: '#ff8c42' }}>
          Contact
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-3">
          Questions, enterprise plans, or collabs — reach out.
        </p>
        <GlassCard className="mt-3">
          <div className="space-y-2">
            <p className="text-muted-foreground">
              <strong className="text-foreground">Email:</strong>{' '}
              <a href="mailto:fitrackr@gmail.com" className="text-primary hover:underline">
                fitrackr@gmail.com
              </a>
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Phone:</strong>{' '}
              <a href="tel:+919876543210" className="text-primary hover:underline">
                +91 9876543210
              </a>
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Instagram:</strong>{' '}
              <a
                href="https://instagram.com/fitrackr_fitness"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                @fitrackr_fitness
              </a>
            </p>
          </div>
        </GlassCard>
      </div>
      <aside>
        <GlassCard>
          <h3 className="text-primary font-semibold mb-2">Feedback</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <Textarea
              rows={4}
              placeholder="Your message..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
              className="bg-white/5 border-white/10"
              data-testid="textarea-feedback"
            />
            <Button
              type="submit"
              className="font-extrabold mt-2"
              style={{
                background: 'linear-gradient(90deg, #ff8c42, #ff9d5a)',
                color: '#000',
              }}
              data-testid="button-send-feedback"
            >
              Send
            </Button>
          </form>
        </GlassCard>
      </aside>
    </div>
  );
}
