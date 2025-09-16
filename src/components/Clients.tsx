
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Building2, Radio } from "lucide-react";

const clients = [
  {
    icon: <Building2 className="h-10 w-10 text-primary mb-4" />,
    title: "Minna Technology",
    description: "Leading fintech company providing innovative financial solutions and payment technologies.",
  },
  {
    icon: <Radio className="h-10 w-10 text-primary mb-4" />,
    title: "Gateway.FM",
    description: "Decentralized infrastructure provider offering reliable blockchain connectivity and services.",
  },
];

export const Clients = () => {
  return (
    <section id="clients" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Trusted By Industry Leaders</h2>
          <p className="text-lg text-muted-foreground mt-2">
            We are proud to have partnered with innovative companies.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {clients.map((client, index) => (
            <Card key={index} className="bg-background border-border/50 text-center p-6 flex flex-col items-center transition-transform transform hover:-translate-y-2">
              {client.icon}
              <CardHeader className="p-0">
                <CardTitle className="text-xl font-semibold mb-2">{client.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{client.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
