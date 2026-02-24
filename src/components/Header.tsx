import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';

export function Header() {
  const [location, setLocation] = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Plans', path: '/plans' },
    { label: 'Diet', path: '/diet' },
    { label: 'Checklist', path: '/checklist' },
    { label: 'Progress', path: '/progress' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className="fixed top-3 left-1/2 -translate-x-1/2 w-[calc(100%-40px)] max-w-[1200px] z-50 glass-header rounded-xl"
      data-testid="header-main"
    >
      <div className="flex justify-between items-center gap-3 px-4 py-2.5">
        <div
          onClick={() => setLocation('/')}
          className="flex items-center gap-2.5 cursor-pointer hover-elevate active-elevate-2 rounded-lg px-2 py-1 -mx-2 -my-1"
          data-testid="link-home"
        >
          <div
            className="w-11 h-11 rounded-lg grid place-items-center text-black font-black tracking-wider text-sm"
            style={{
              background: 'linear-gradient(135deg, #ff8c42, #ff9d5a)',
            }}
            aria-hidden="true"
          >
            FT
          </div>
          <h1 className="text-[1.05rem] font-semibold" style={{ color: '#ff8c42' }}>
            FitTrackr
          </h1>
        </div>

        <nav className="flex gap-2 items-center flex-wrap" role="navigation" aria-label="Primary">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <span
                className={`text-sm font-semibold px-2.5 py-2 rounded-lg transition-all hover-elevate active-elevate-2 cursor-pointer ${
                  location === item.path ? 'text-primary' : 'text-muted-foreground'
                }`}
                data-testid={`link-${item.label.toLowerCase()}`}
              >
                {item.label}
              </span>
            </Link>
          ))}
          <Button
            size="sm"
            onClick={() => setLocation('/register')}
            className="font-extrabold"
            style={{
              background: 'linear-gradient(90deg, #ff8c42, #ff9d5a)',
              color: '#000',
            }}
            data-testid="button-join"
          >
            Join
          </Button>
        </nav>
      </div>
    </header>
  );
}
