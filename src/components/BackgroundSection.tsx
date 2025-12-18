const BackgroundSection = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-4">
            // Background
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Built on Engineering Principles.
          </h3>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
            Brooker Systems is led by an <span className="text-foreground font-medium">Electrical Engineer</span> with 
            a background in <span className="text-foreground font-medium">Cybersecurity</span> and{" "}
            <span className="text-foreground font-medium">Cryptocurrency Startups</span>. 
            We don't believe in over-complicating things. We combine the structural logic of 
            engineering with the speed of modern development tools.
          </p>
          
          <p className="text-foreground font-medium text-lg sm:text-xl mb-8">
            You get the velocity of a startup with the reliability of an engineer.
          </p>
          
          <div className="flex justify-center gap-8 text-sm font-mono text-primary">
            <span>Secure.</span>
            <span>Fast.</span>
            <span>Reliable.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundSection;
