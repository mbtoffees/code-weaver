import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[82vh] overflow-hidden px-4 py-20 flex items-center">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.18),transparent_34%),radial-gradient(circle_at_bottom_right,hsl(var(--primary)/0.10),transparent_30%)]" />
      <div className="container max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.12fr_0.88fr]">
          <div>
            <p
              className="mb-5 font-mono text-sm uppercase tracking-[0.25em] text-primary opacity-0 animate-fade-up"
              style={{ animationDelay: "0.05s" }}
            >
              Brooker Systems // automation + internal tools
            </p>
            <h1
              className="max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Stop wasting hours copying, pasting and doing mundane computer work.
            </h1>

            <p
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mb-10 leading-relaxed opacity-0 animate-fade-up"
              style={{ animationDelay: "0.25s" }}
            >
              I help businesses cut down repetitive computer work, speed up processes, keep data consistent and reduce mistakes caused by manual handling.
            </p>

            <div
              className="flex flex-col gap-3 sm:flex-row opacity-0 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                size="lg"
                className="glow-primary-sm hover:glow-primary transition-all duration-300 text-base px-8 py-6"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get my free task review
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 py-6" asChild>
                <a href="#work">See recent builds</a>
              </Button>
            </div>
          </div>

          <div
            className="opacity-0 animate-fade-up"
            style={{ animationDelay: "0.55s" }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card/80 p-5 shadow-2xl shadow-primary/10 backdrop-blur">
              <div className="grid gap-5 sm:grid-cols-[0.85fr_1.15fr] lg:grid-cols-1 xl:grid-cols-[0.85fr_1.15fr]">
                <div className="relative min-h-64 overflow-hidden rounded-2xl border border-border bg-secondary">
                  <img
                    src="/max-brooker.jpg"
                    alt="Max Brooker"
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-transparent" />
                </div>

                <div className="flex flex-col justify-center">
                  <div className="mb-5 flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-primary" />
                    <span className="ml-auto font-mono text-xs text-muted-foreground">build-log.ts</span>
                  </div>
                  <div className="space-y-3 font-mono text-sm">
                    {[
                      "construction automation infra deployed",
                      "horse sport science dashboards wired",
                      "crypto tax portal secured",
                      "AI extraction output verified",
                    ].map((line) => (
                      <div key={line} className="flex items-start gap-3 rounded-xl bg-secondary/50 p-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{line}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
