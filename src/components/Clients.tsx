
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
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          <div className="flex items-center space-x-3 grayscale hover:grayscale-0 transition-all">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto text-foreground">
                <title>Mastercard</title>
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.12 7.82a6 6 0 0 1-1.3 6.95 6.01 6.01 0 0 1-7.64 0 6.01 6.01 0 0 1 0-7.64 6 6 0 0 1 6.94-1.3v1.99a4 4 0 1 0 2 0V7.82zM12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" fill="currentColor"/>
            </svg>
            <span className="text-2xl font-semibold text-foreground">mastercard</span>
          </div>
          <div className="grayscale hover:grayscale-0 transition-all">
            <span className="text-3xl font-bold tracking-tight text-foreground">Gateway.FM</span>
          </div>
        </div>
      </div>
    </section>
  );
};
