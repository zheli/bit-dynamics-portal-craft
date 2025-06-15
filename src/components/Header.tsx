
import { CodeXml } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <CodeXml className="h-6 w-6 mr-2 text-primary" />
          <a href="/" className="font-bold text-lg">Bit Dynamics AB</a>
        </div>
        <nav className="flex items-center gap-6 text-sm flex-1">
          <a href="#services" className="transition-colors hover:text-foreground/80 text-foreground/60">Services</a>
          <a href="#clients" className="transition-colors hover:text-foreground/80 text-foreground/60">Clients</a>
        </nav>
        <div className="flex items-center justify-end">
            <Button asChild>
                <a href="mailto:contact@bitdynamics.se">Get in Touch</a>
            </Button>
        </div>
      </div>
    </header>
  );
};
