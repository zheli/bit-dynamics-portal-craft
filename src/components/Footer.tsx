
import { CodeXml } from 'lucide-react';

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="border-t border-border/40">
            <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
                <div className="flex items-center mb-4 sm:mb-0">
                    <CodeXml className="h-5 w-5 mr-2 text-primary" />
                    <p className="text-sm text-muted-foreground">&copy; {currentYear} Bit Dynamics AB. All rights reserved.</p>
                </div>
                <div className="text-sm text-muted-foreground">
                    <a href="mailto:contact@bitdynamics.se" className="hover:text-primary">contact@bitdynamics.se</a>
                </div>
            </div>
        </footer>
    );
}
