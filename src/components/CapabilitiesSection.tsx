import { 
  Globe, 
  Brain, 
  Database, 
  Link2, 
  Rocket 
} from "lucide-react";

const capabilities = [
  {
    icon: Globe,
    title: "Custom Web Applications",
    description: "Secure portals, dashboards, and internal tools tailored to your business logic.",
    className: "md:col-span-2",
  },
  {
    icon: Brain,
    title: "Intelligent Automation & AI",
    description: "Tools that \"think.\" Parsing documents, extracting data, and automating decision-making.",
    className: "md:col-span-1",
  },
  {
    icon: Database,
    title: "Data Normalization",
    description: "Chaos in, structure out. Turning messy inputs into clean, standardized data.",
    className: "md:col-span-1",
  },
  {
    icon: Link2,
    title: "Connectors & Integrations",
    description: "The \"glue\" code that makes your CRM talk to your accounting software.",
    className: "md:col-span-1",
  },
  {
    icon: Rocket,
    title: "SaaS & MVP Development",
    description: "From napkin sketch to live product in days, not months.",
    className: "md:col-span-2",
  },
];

const CapabilitiesSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-4">
            // Capabilities
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            What I Build
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className={`
                group relative bg-card rounded-lg p-6 sm:p-8
                border-glow card-hover cursor-default
                ${capability.className}
              `}
              style={{ 
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  <capability.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h4 className="font-mono text-lg sm:text-xl font-semibold mb-3 text-foreground">
                  {capability.title}
                </h4>
                
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {capability.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
