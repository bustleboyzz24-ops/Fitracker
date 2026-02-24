import { Switch, Route } from 'wouter';
import { queryClient } from './lib/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BackgroundMedia } from '@/components/BackgroundMedia';
import Home from '@/pages/Home';
import Plans from '@/pages/Plans';
import Diet from '@/pages/Diet';
import Checklist from '@/pages/Checklist';
import Progress from '@/pages/Progress';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Register from '@/pages/Register';
import NotFound from '@/pages/not-found';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/plans" component={Plans} />
      <Route path="/diet" component={Diet} />
      <Route path="/checklist" component={Checklist} />
      <Route path="/progress" component={Progress} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/register" component={Register} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BackgroundMedia />
        <div className="relative min-h-screen">
          <Header />
          <main className="w-full max-w-[1200px] mx-auto mt-[120px] mb-20 px-2.5 relative min-h-[70vh] flex items-center justify-center">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
