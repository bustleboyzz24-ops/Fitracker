import { Mail, Phone } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';

export function Footer() {
  return (
    <footer
      className="w-full max-w-[1200px] mx-auto mt-4 mb-8 px-3.5 py-3.5 rounded-lg flex justify-between items-center gap-3 flex-wrap"
      style={{
        background: 'linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.5))',
        border: '1px solid rgba(255,140,66,0.03)',
      }}
      role="contentinfo"
      data-testid="footer-main"
    >
      <div>
        <small className="text-muted-foreground">Stay fit, stay strong — FitTrackr</small>
      </div>
      <div className="flex items-center gap-3">
        <small className="text-muted-foreground">Contact: fitrackr@gmail.com</small>
        <div className="flex gap-2.5 items-center">
          <a
            href="mailto:fitrackr@gmail.com"
            title="Email"
            className="hover-elevate active-elevate-2 p-1 rounded"
            data-testid="link-email"
          >
            <Mail className="w-4 h-4 text-muted-foreground" />
          </a>
          <a
            href="tel:+919876543210"
            title="Phone"
            className="hover-elevate active-elevate-2 p-1 rounded"
            data-testid="link-phone"
          >
            <Phone className="w-4 h-4 text-muted-foreground" />
          </a>
          <a
            href="https://instagram.com/fitrackr_fitness"
            title="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-elevate active-elevate-2 p-1 rounded"
            data-testid="link-instagram"
          >
            <SiInstagram className="w-4 h-4 text-muted-foreground" />
          </a>
        </div>
      </div>
    </footer>
  );
}
