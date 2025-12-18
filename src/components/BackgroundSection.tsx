const BackgroundSection = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-4">
            // Background
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Led by Engineering Experience.
          </h3>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-10">
            Brooker Systems is led by <span className="text-foreground font-medium">Max Brooker</span>, 
            who has a background in <span className="text-foreground font-medium">Cybersecurity</span> and{" "}
            <span className="text-foreground font-medium">Engineering</span>. 
            We don't believe in over-engineering. We combine the discipline of traditional 
            engineering with the speed of AI-assisted development.
          </p>
          
          <p className="text-foreground font-medium text-lg sm:text-xl">
            You get the velocity of a startup with the reliability of an engineer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BackgroundSection;
