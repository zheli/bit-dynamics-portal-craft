
import React, { useState } from 'react';
import { CodeXml, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <CodeXml className="h-6 w-6 mr-2 text-primary" />
          <a href="/" className="font-bold text-lg">Bit Dynamics</a>
        </div>
        <div className="flex flex-1 items-center justify-end">
            <div className="hidden md:flex">
                <Button asChild>
                    <a href="mailto:hi@bitdynamics.me">Get in Touch</a>
                </Button>
            </div>
            <div className="md:hidden">
                <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px]">
                        <div className="p-4">
                            <a href="/" onClick={() => setIsMenuOpen(false)} className="font-bold text-lg flex items-center mb-8">
                                <CodeXml className="h-6 w-6 mr-2 text-primary" />
                                Bit Dynamics
                            </a>
                            <nav className="flex flex-col gap-6 text-lg">
                                <Button asChild className="mt-4">
                                    <a href="mailto:hi@bitdynamics.me">Get in Touch</a>
                                </Button>
                            </nav>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
};
