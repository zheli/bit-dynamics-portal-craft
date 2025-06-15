
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Server, Share2, Network } from "lucide-react";

const services = [
  {
    icon: <Server className="h-10 w-10 text-primary mb-4" />,
    title: "Application Service Development",
    description: "We build scalable, high-performance web and mobile applications tailored to your business requirements.",
  },
  {
    icon: <Share2 className="h-10 w-10 text-primary mb-4" />,
    title: "Blockchain Application Development",
    description: "Leverage the power of decentralized technology with our expert blockchain development and integration services.",
  },
  {
    icon: <Network className="h-10 w-10 text-primary mb-4" />,
    title: "DevOps",
    description: "Streamline your development lifecycle with our CI/CD, automation, and cloud infrastructure management.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Expertise</h2>
          <p className="text-lg text-muted-foreground mt-2">
            We provide a wide range of software development services.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-secondary border-border/50 text-center p-6 flex flex-col items-center transition-transform transform hover:-translate-y-2">
              {service.icon}
              <CardHeader className="p-0">
                <CardTitle className="text-xl font-semibold mb-2">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
