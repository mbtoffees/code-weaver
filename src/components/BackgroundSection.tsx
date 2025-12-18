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
            <span className="text-foreground font-medium">Max</span> is an <span className="text-foreground font-medium">Electrical Engineer</span> by trade with a lifelong passion for technology.
          </p>
          
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
            Throughout his career, no matter the role, he always found himself automating the work. This passion led him out of traditional engineering and into the startup world—first honing his development skills at a tech startup, then deepening his <span className="text-foreground font-medium">cybersecurity and automation expertise</span> as a cybersecurity consultant.
          </p>
          
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
            He founded <span className="text-foreground font-medium">Brooker Systems</span> to bring this wide range of skills to other businesses. Now, he builds custom, secure solutions for clients with unique problems.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default BackgroundSection;
