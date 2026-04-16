const steps = [
  {
    number: "01",
    title: "We talk about your problem.",
    description: "No intake forms. Just a straight conversation about what's broken, slow, or missing in your business.",
  },
  {
    number: "02",
    title: "I scope the work and give you a clear proposal.",
    description: "You'll know exactly what I'm building and what it'll cost - whether that's a fixed-price build or ongoing hourly work. No ambiguity.",
  },
  {
    number: "03",
    title: "You get working software in weeks.",
    description: "Not months. Not a roadmap. Actual software that solves the problem we talked about.",
  },
];

const HowIWorkSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-4">
            // Process
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            How I Work
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="group relative bg-card rounded-lg p-6 sm:p-8 border-glow card-hover cursor-default">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />

              <div className="relative z-10">
                <span className="font-mono text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                  {step.number}
                </span>

                <h4 className="font-mono text-lg sm:text-xl font-semibold mt-4 mb-3 text-foreground">
                  {step.title}
                </h4>

                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIWorkSection;
