import { useState } from 'react';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Registration successful (demo)');
    setFormData({ name: '', email: '', username: '', password: '' });
  };

  return (
    <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-7 items-center">
      <div>
        <h2 className="text-4xl font-bold mb-3" style={{ color: '#ff8c42' }}>
          Create Account
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-3">
          Join FitTrackr and get personalized plans.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-sm">
          <Input
            placeholder="Full name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="bg-white/5 border-white/10"
            data-testid="input-name"
          />
          <Input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="bg-white/5 border-white/10"
            data-testid="input-email"
          />
          <Input
            placeholder="Username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            required
            className="bg-white/5 border-white/10"
            data-testid="input-username"
          />
          <Input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
            className="bg-white/5 border-white/10"
            data-testid="input-password"
          />
          <Button
            type="submit"
            className="font-extrabold"
            style={{
              background: 'linear-gradient(90deg, #ff8c42, #ff9d5a)',
              color: '#000',
            }}
            data-testid="button-register"
          >
            Register
          </Button>
        </form>
      </div>
      <aside>
        <GlassCard>
          <h3 className="text-primary font-semibold mb-2">Why join?</h3>
          <p className="text-muted-foreground leading-relaxed">
            Simple, no-fluff tools to build daily fitness consistency.
          </p>
        </GlassCard>
      </aside>
    </div>
  );
}
