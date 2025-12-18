import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="container max-w-4xl text-center">
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Engineering Precision. Agile Speed.{" "}
          <span className="text-gradient">Bespoke Software.</span>
        </h1>
        
        <p 
          className="font-mono text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          We design and deploy custom web apps, automation tools, and AI solutions. 
          Fast, secure, and built for your specific needs.
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
            <a href="mailto:yourname@brookersystems.com?subject=Project%20Inquiry%20-%20[Company%20Name]&body=Hi%20Brooker%20Systems%2C%0A%0AI'm%20looking%20for%20help%20with...">Discuss Your Project</a>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
