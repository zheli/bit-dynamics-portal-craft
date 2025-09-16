
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export const Clients = () => {
  return (
    <section id="clients" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Trusted By Industry Leaders</h2>
          <p className="text-lg text-muted-foreground mt-2">
            We are proud to have partnered with innovative companies.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <Card className="bg-secondary border-border/50 text-center p-6 transition-transform transform hover:-translate-y-2">
            <CardHeader className="p-0">
              <CardTitle className="text-xl md:text-2xl font-bold tracking-tight">Minna Technology</CardTitle>
            </CardHeader>
          </Card>
          <Card className="bg-secondary border-border/50 text-center p-6 transition-transform transform hover:-translate-y-2">
            <CardHeader className="p-0">
              <CardTitle className="text-xl md:text-2xl font-bold tracking-tight">Gateway.FM</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};
