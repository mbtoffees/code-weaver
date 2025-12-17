import { Shield, Zap, Lock } from "lucide-react";

const BackgroundSection = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-4">
            // Background
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Built with Engineering Rigour.
          </h3>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-10">
            I am an <span className="text-foreground font-medium">Electrical Engineer</span> by 
            trade with a background in <span className="text-foreground font-medium">Cybersecurity</span> and{" "}
            <span className="text-foreground font-medium">Cryptocurrency Startups</span>. 
            I don't believe in over-engineering. I use the latest AI-assisted development 
            tools to build robust, secure software faster than traditional agencies.
          </p>
          
          <p className="text-foreground font-medium text-lg sm:text-xl">
            You get the speed of modern development with the reliability of an engineer.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-16 max-w-lg mx-auto">
          {[
            { icon: Shield, label: "Secure" },
            { icon: Zap, label: "Fast" },
            { icon: Lock, label: "Reliable" },
          ].map((item) => (
            <div 
              key={item.label}
              className="flex flex-col items-center gap-2 text-muted-foreground"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="font-mono text-xs uppercase tracking-wider">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BackgroundSection;
