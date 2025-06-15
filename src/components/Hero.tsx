
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" 
            alt="Development environment" 
            className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="relative z-20 container mx-auto px-4 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
                Building Tomorrow's Software, Today.
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80 mb-8">
                From complex application services to cutting-edge blockchain solutions, Bit Dynamics delivers robust, scalable, and secure software tailored to your needs.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <a href="#services">Our Services</a>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                    <a href="mailto:contact@bitdynamics.se">Contact Us</a>
                </Button>
            </div>
        </div>
    </section>
  );
};
