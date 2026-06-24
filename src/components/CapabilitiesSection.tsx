import {
  Brain,
  Database,
  FileText,
  Link2,
  Lock,
  Rocket,
  TestTube2,
} from "lucide-react";

const capabilities = [
  {
    icon: Rocket,
    title: "Custom Web Applications",
    description: "Portals, dashboards, admin tools, and SaaS products tailored to the way your business actually works.",
    className: "md:col-span-2",
  },
  {
    icon: Brain,
    title: "AI-Assisted Analysis",
    description: "Document extraction, specification checks, discrepancy flags, and reviewable outputs with human sign-off.",
    className: "md:col-span-1",
  },
  {
    icon: Link2,
    title: "APIs & Integrations",
    description: "The glue between cloud services, email providers, storage, CRMs, accounting tools, and internal systems.",
    className: "md:col-span-1",
  },
  {
    icon: Database,
    title: "Data Pipelines",
    description: "CSV imports, normalization, validation, dashboards, exports, audit trails, and messy-data cleanup.",
    className: "md:col-span-1",
  },
  {
    icon: Lock,
    title: "Security-Minded Buildouts",
    description: "Firm-scoped access, MFA, private file storage, signed URLs, encrypted fields, and logging where it matters.",
    className: "md:col-span-1",
  },
  {
    icon: FileText,
    title: "Workflow Automation",
    description: "Turn repeatable operational processes into guided software flows, from intake to review to delivery.",
    className: "md:col-span-1",
  },
  {
    icon: TestTube2,
    title: "QA, Smoke Tests & Runbooks",
    description: "Practical release checks, Playwright coverage, build verification, documentation, and handoff notes.",
    className: "md:col-span-2",
  },
];

const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="py-24 px-4 bg-secondary/20">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-4">
            // Capabilities
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            What Brooker Systems builds
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className={`
                group relative bg-card rounded-2xl p-6 sm:p-8
                border-glow card-hover cursor-default overflow-hidden
                ${capability.className}
              `}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
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
