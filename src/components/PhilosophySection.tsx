const PhilosophySection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container max-w-3xl">
        <div className="border-l-2 border-primary/30 pl-8 md:pl-12">
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-6">
            // Philosophy
          </h2>
          
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            Built to Solve Problems.
          </h3>
          
          <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
            <p>
              Most agencies will slot you into a template or upsell you tools you don't need.
              I don't do that. I start with your specific problem and build exactly what's
              required to fix it — nothing more, nothing less.
            </p>

            <p>
              Using modern AI-assisted development, I deliver simple, secure, and fully
              functional software faster than a traditional firm ever could.
            </p>

            <p className="text-foreground font-medium">
              I turn your business logic into reliable software.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
