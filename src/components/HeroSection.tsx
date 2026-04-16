import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="container max-w-4xl text-center">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          I build custom software that{" "}
          <span className="text-gradient">solves specific problems.</span>
        </h1>

        <p
          className="font-mono text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          Custom web apps, automation tools, and AI solutions -
          built for your specific problem.
        </p>

        <div
          className="opacity-0 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <Button
            size="lg"
            className="glow-primary-sm hover:glow-primary transition-all duration-300 text-base px-8 py-6"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Discuss Your Project
          </Button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
