import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container max-w-4xl text-center">
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          If You Can Imagine the Workflow,{" "}
          <span className="text-gradient">I Can Build the Software.</span>
        </h1>
        
        <p 
          className="font-mono text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          Electrical Engineer. Cybersecurity Specialist. Builder. I design and deploy 
          custom web apps, automation tools, and AI solutions. Fast, secure, and built 
          for your specific needs.
        </p>
        
        <div 
          className="opacity-0 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <Button 
            size="lg" 
            className="glow-primary-sm hover:glow-primary transition-all duration-300 text-base px-8 py-6"
            asChild
          >
            <a href="mailto:hello@example.com">Tell Me Your Idea</a>
          </Button>
        </div>

        <div 
          className="mt-20 flex justify-center gap-2 text-muted-foreground/50 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.7s" }}
        >
          <span className="font-mono text-xs">scroll</span>
          <svg 
            className="w-4 h-4 animate-bounce" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
