import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Coins, ExternalLink } from "lucide-react";

const products = [
  {
    icon: <Activity className="h-10 w-10 text-primary mb-4" />,
    title: "PosGuard",
    description: "A comprehensive monitoring service for Ethereum validators, ensuring optimal performance and uptime.",
    url: "https://posguard.me",
  },
  {
    icon: <Coins className="h-10 w-10 text-primary mb-4" />,
    title: "Bits Heaven",
    description: "Professional staking service for Ethereum and Gnosis networks with secure and reliable infrastructure.",
    url: "https://bitsheaven.com",
  },
];

export const Products = () => {
  return (
    <section id="products" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Products</h2>
          <p className="text-lg text-muted-foreground mt-2">
            Discover our innovative blockchain solutions and services.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product, index) => (
            <Card key={index} className="bg-background border-border/50 text-center p-6 flex flex-col items-center transition-transform transform hover:-translate-y-2">
              {product.icon}
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl font-semibold mb-2">{product.title}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4">{product.description}</CardDescription>
              </CardHeader>
              <Button asChild className="mt-auto">
                <a href={product.url} target="_blank" rel="noopener noreferrer">
                  Visit Product <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};