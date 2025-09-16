
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
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="grayscale hover:grayscale-0 transition-all">
            <span className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">Minna Technology</span>
          </div>
          <div className="grayscale hover:grayscale-0 transition-all">
            <span className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">Gateway.FM</span>
          </div>
        </div>
      </div>
    </section>
  );
};
