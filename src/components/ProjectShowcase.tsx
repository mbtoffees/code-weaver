import {
  Activity,
  Bot,
  CheckCircle2,
  Cloud,
  DatabaseZap,
  FileSearch,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const projects = [
  {
    eyebrow: "Construction / AWB workflow",
    title: "Cloud automation and document review tooling",
    summary:
      "Production-style automation infrastructure and document/specification analysis workflows for a construction-related business, with reviewable outputs instead of black-box AI answers.",
    points: [
      "Terraform-managed Google Cloud VM with Docker, Chrome/ChromeDriver, Browserless Chrome, persistent logs, downloads, and restartable services.",
      "Remote browser automation designed for long-running authenticated workflows using persistent browser sessions and operational runbooks.",
      "Document intake patterns that classify files, extract fields, normalize data, compare against specs, and flag missing or low-confidence items for human review.",
    ],
    stack: ["Google Cloud", "Terraform", "Docker", "Browserless", "Puppeteer", "AI extraction"],
    icon: Cloud,
  },
  {
    eyebrow: "Equilytics",
    title: "Horse sport science platform",
    summary:
      "A modular racehorse training and performance platform covering training schedules, exercise prescriptions, annual plans, dashboards, imports, and role-aware stable operations.",
    points: [
      "Apps for training schedules, prescription tracking, annual planning, horse dashboards, trainer dashboards, admin/settings, and race-day analysis.",
      "CSV import pipelines for roster data, RAPRO race history, Equimetre sessions, lactate samples, and race-readiness field data.",
      "Cloudflare Pages/Worker/D1 architecture with stable tenancy, role-based access, staff horse assignments, PWA caching, and offline queued writes.",
    ],
    stack: ["Cloudflare", "Hono", "D1", "Preact", "TypeScript", "PWA"],
    icon: Activity,
  },
  {
    eyebrow: "Crypto tax fact-finding",
    title: "White-labelled accounting firm portal",
    summary:
      "A secure multi-tenant portal for Australian accounting firms to collect crypto and individual tax fact-finding data from clients.",
    points: [
      "Firm-branded subdomain portals with magic-link client auth, structured questionnaires, autosave, draft restoration, and repeat-client roll-forward.",
      "Admin workflows for clients, submissions, instructions, delivered files, PDFs/ZIP exports, secure messages, and firm-scoped access control.",
      "Private Cloudflare R2 storage, pre-signed downloads, field-level encryption/masking for sensitive bank details, MFA for admin routes, and audit logs.",
    ],
    stack: ["Next.js", "React", "Prisma", "Postgres", "R2", "Resend", "Playwright"],
    icon: ShieldCheck,
  },
];

const proofPoints = [
  { icon: Bot, label: "AI-assisted workflows", text: "Extraction and review systems with deterministic checks where accuracy matters." },
  { icon: DatabaseZap, label: "Messy data to clean systems", text: "CSV imports, normalized schemas, dashboards, audit trails, and export workflows." },
  { icon: Workflow, label: "End-to-end builds", text: "Frontend, backend, auth, storage, cloud deployment, runbooks, and smoke tests." },
  { icon: FileSearch, label: "Reviewable outputs", text: "Exceptions, confidence flags, supporting references, and human sign-off paths." },
];

const ProjectShowcase = () => {
  return (
    <section id="work" className="relative overflow-hidden py-24 px-4">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="container max-w-6xl">
        <div className="mb-14 max-w-3xl">
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4">
            // Selected builds
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Real tools I have built, not stock portfolio filler.
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            No testimonials yet, so this section sticks to shipped or actively-built systems: automation infrastructure,
            specialist SaaS workflows, integrations, secure portals, dashboards, and analysis tools.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex h-full flex-col rounded-2xl border border-border bg-card/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <div className="rounded-2xl bg-primary/10 p-3 ring-1 ring-primary/20 transition-colors group-hover:bg-primary/20">
                  <project.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {project.eyebrow}
                </span>
              </div>

              <h3 className="mb-3 text-2xl font-semibold tracking-tight text-foreground">
                {project.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                {project.summary}
              </p>

              <ul className="mb-6 space-y-3 text-sm text-muted-foreground">
                {project.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {proofPoints.map((item) => (
            <div key={item.label} className="rounded-xl border border-border bg-secondary/40 p-5">
              <item.icon className="mb-4 h-5 w-5 text-primary" />
              <h4 className="mb-2 font-mono text-sm font-semibold text-foreground">{item.label}</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
