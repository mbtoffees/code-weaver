const PhilosophySection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container max-w-3xl">
        <div className="border-l-2 border-primary/30 pl-8 md:pl-12">
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-6">
            // Philosophy
          </h2>
          
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            Built to Solve, Not Just to Sell.
          </h3>
          
          <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
            <p>
              Most agencies try to force you into a box or sell you off-the-shelf 
              products that don't fit. <span className="text-foreground font-medium">Brooker Systems</span> works 
              differently. We start with your specific problem and build the exact 
              solution required to fix it.
            </p>
            
            <p>
              By leveraging modern AI-assisted development, we deliver complex, secure, 
              and fully functional software in a fraction of the time of traditional firms.
            </p>
            
            <p className="text-foreground font-medium">
              We turn your business logic into reliable software.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
