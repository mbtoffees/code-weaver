const BackgroundSection = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-4">
            // Background
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Built by Max Brooker.
          </h3>
        </div>

        <div className="max-w-3xl mx-auto text-left">
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
            I'm an <span className="text-foreground font-medium">Electrical Engineer</span> by trade with a lifelong passion for technology.
          </p>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
            Throughout my career, no matter the role, I always found myself automating the work. That passion led me out of traditional engineering and into the startup world — first honing my development skills at a tech startup, then deepening my <span className="text-foreground font-medium">cybersecurity and automation expertise</span> as a cybersecurity consultant.
          </p>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
            I founded <span className="text-foreground font-medium">Brooker Systems</span> to bring that range of skills to other businesses. I build custom, secure solutions for clients with specific problems.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default BackgroundSection;
