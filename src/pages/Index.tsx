import SiteHeader from "@/components/SiteHeader";
import ContactFormSection from "@/components/ContactFormSection";
import SEO from "@/components/SEO";
import { businessJsonLd } from "@/components/seoData";

const BOOKING_URL = import.meta.env.VITE_BOOKING_URL || "https://cal.com/maxbrooker/20-min-meeting";

const pillars = [
  {
    title: "Business systems",
    copy: "Custom software that turns repeated business processes into clear screens, structured data, reliable handoffs and useful outputs.",
  },
  {
    title: "Agents and automations",
    copy: "Reliable 24/7 workflows for reading, checking, classifying, filing, reconciling, chasing and keeping records aligned across tools.",
  },
  {
    title: "Apps and portals",
    copy: "Customer portals, dashboards, internal tools and full web applications built around the way your business actually works.",
  },
];

const systems = ["Simpro", "Procore", "Rapid Global", "Xero", "Zoho", "Power Automate", "MYOB", "custom APIs"];

const examples = [
  "A business process becomes a small internal app instead of another spreadsheet, inbox thread or manual checklist.",
  "An AI workflow reads documents, extracts useful fields, checks them against rules and sends edge cases to a person.",
  "A dashboard shows exceptions across jobs, invoices, documents and data quality so the team knows what to fix next.",
  "A customer-facing app or portal gives clients a cleaner way to submit information, track progress or use your service.",
];

const process = [
  {
    title: "Understand what you need built",
    copy: "We work through the process, app idea, customer journey or repeated task, then decide what the smallest useful version should do.",
  },
  {
    title: "Design the right system",
    copy: "I split the work into screens, data flows, automations, AI-assisted parts, security boundaries, review points and outputs your team can trust.",
  },
  {
    title: "Build the smallest useful version",
    copy: "Then I ship the first version, test it against real examples and harden the parts that prove they are worth keeping.",
  },
];

const publicWork = [
  {
    name: "Equilytics",
    href: "https://equilytics.com.au",
    label: "Sport science platform",
    copy: "Training plans, performance data and daily stable operations brought together in one practical system for horse training and conditioning.",
  },
  {
    name: "Client Ready Solutions",
    href: "https://clientreadysolutions.com.au",
    label: "Accounting software",
    copy: "I co-founded Client Ready Solutions with a friend to build software for accounting firms. Our first product, Gather, turns end-of-financial-year data collection into a structured client workflow and produces workpapers ready for compliance.",
  },
  {
    name: "Vocabull",
    href: "https://vocabull.app",
    label: "Vocabulary learning app",
    copy: "Turns a Kindle Vocabulary Builder word list into quick practice games that help readers remember the words they looked up.",
  },
];

const Index = () => {

  return (
    <main style={{ minHeight: "100vh", background: "#F6F6F1", color: "#1A1C20", fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <SEO
        title="Brooker Systems | Apps, Agents & Automations"
        description="Brooker Systems helps Australian businesses build apps, agents and automations for real business workflows."
        path="/"
        jsonLd={businessJsonLd}
      />
      <SiteHeader />

      <section style={{ background: "#F6F6F1", borderBottom: "1px solid #DEDFD8" }}>
        <div className="home-hero-inner" style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(48px,7vw,92px) 28px clamp(48px,7vw,86px)", display: "grid", gridTemplateColumns: "minmax(0, 1.1fr) minmax(300px, 0.9fr)", gap: "clamp(32px,6vw,68px)", alignItems: "center" }}>
          <div>
            <p className="home-hero-eyebrow" style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 13, fontWeight: 650, color: "#0E6C5D", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 20px" }}>Apps // agents // automations</p>
            <h1 className="home-hero-title" style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 780, color: "#1A1C20", fontSize: "clamp(2.75rem,6vw,5.2rem)", lineHeight: 1.01, letterSpacing: "0", margin: 0, maxWidth: "12ch" }}>
              I build software systems for your business.
            </h1>
            <p style={{ fontSize: "clamp(1.08rem,1.6vw,1.28rem)", lineHeight: 1.58, color: "#4B535C", margin: "24px 0 0", maxWidth: "68ch" }}>
              I help businesses turn ideas, processes and repeated work into apps, agents and automations. The goal is simple: useful software that saves time, improves handoffs and gives your team room to scale.
            </p>
            <div className="home-hero-actions" style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 32 }}>
              <a className="home-hero-action" href={BOOKING_URL} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#B64A22", color: "#FFFFFF", textDecoration: "none", fontWeight: 750, fontSize: 16, padding: "15px 22px", borderRadius: 8, boxShadow: "0 14px 28px -18px rgba(182,74,34,0.8)" }}>Book a 20-minute call</a>
              <a className="home-hero-action" href="#contact" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#FFFFFF", color: "#1A1C20", textDecoration: "none", fontWeight: 750, fontSize: 16, padding: "15px 22px", borderRadius: 8, border: "1px solid #D7D9D2" }}>Send an enquiry</a>
            </div>
          </div>

          <aside className="home-profile-card" style={{ background: "#FFFFFF", border: "1px solid #DADDD6", borderRadius: 8, padding: 24, boxShadow: "0 24px 55px -42px rgba(26,28,32,0.45)" }}>
            <div className="home-profile-row" style={{ display: "grid", gridTemplateColumns: "132px minmax(0, 1fr)", gap: 20, alignItems: "center", marginBottom: 22 }}>
              <img className="home-profile-image" src="/max-brooker-640.webp" alt="Max Brooker" style={{ width: 132, height: 132, borderRadius: 8, objectFit: "cover", objectPosition: "center 24%", border: "1px solid #D7D9D2" }} />
              <div>
                <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 12, fontWeight: 650, color: "#0E6C5D", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 8px" }}>Max Brooker</p>
                <p style={{ margin: 0, fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 780, fontSize: 28, letterSpacing: "0", lineHeight: 1.05 }}>Brooker Systems</p>
                <p style={{ margin: "8px 0 0", color: "#59616A", fontSize: 16, lineHeight: 1.42 }}>Cyber security engineer, software developer and practical systems builder.</p>
              </div>
            </div>
            <div style={{ background: "#1A1C20", color: "#E7ECE7", borderRadius: 8, padding: 18 }}>
              <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.55 }}>
                I build across the whole stack: polished web apps, secure portals, integrations, AI-assisted workflows and the operational details that make software reliable after launch.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section style={{ background: "#FFFFFF", borderBottom: "1px solid #DEDFD8" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "22px 28px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px 20px" }}>
          <p style={{ margin: 0, fontFamily: "'Spline Sans Mono', monospace", fontSize: 12, fontWeight: 650, color: "#0E6C5D", letterSpacing: "0.08em", textTransform: "uppercase" }}>Systems I work with</p>
          {systems.map((system) => (
            <span key={system} style={{ color: "#4B535C", fontSize: 15, fontWeight: 650 }}>{system}</span>
          ))}
        </div>
      </section>

      <section id="systems" style={{ background: "#FFFFFF", borderBottom: "1px solid #DEDFD8" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(58px,7vw,96px) 28px" }}>
          <div>
            <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 13, fontWeight: 650, color: "#0E6C5D", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 16px" }}>What I build</p>
            <h2 className="home-single-line-heading" style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 780, color: "#1A1C20", fontSize: "clamp(1.9rem,3.6vw,3rem)", lineHeight: 1.08, letterSpacing: "0", margin: 0 }}>
              Software for the work your business needs done.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18, marginTop: 40 }}>
            {pillars.map((pillar) => (
              <article key={pillar.title} style={{ background: "#F6F6F1", border: "1px solid #DADDD6", borderRadius: 8, padding: 24 }}>
                <h3 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 780, color: "#1A1C20", fontSize: "1.55rem", lineHeight: 1.1, letterSpacing: "0", margin: "0 0 12px" }}>{pillar.title}</h3>
                <p style={{ margin: 0, color: "#555E66", lineHeight: 1.58, fontSize: 15.8 }}>{pillar.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="examples" style={{ background: "#F6F6F1", borderBottom: "1px solid #DEDFD8" }}>
        <div className="home-split-section" style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(58px,7vw,96px) 28px", display: "grid", gridTemplateColumns: "minmax(240px, 0.72fr) minmax(0, 1.28fr)", gap: "clamp(28px,5vw,58px)", alignItems: "start" }}>
          <div>
            <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 13, fontWeight: 650, color: "#0E6C5D", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 16px" }}>Examples</p>
            <h2 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 780, color: "#1A1C20", fontSize: "clamp(1.85rem,3.3vw,2.8rem)", lineHeight: 1.08, letterSpacing: "0", margin: 0 }}>
              The shape depends on the job.
            </h2>
            <p style={{ color: "#59616A", lineHeight: 1.62, margin: "18px 0 0", fontSize: 16.5 }}>
              Sometimes the answer is an automation. Sometimes it is an AI-assisted review workflow. Sometimes it is a full app, portal or dashboard.
            </p>
          </div>
          <div style={{ display: "grid", gap: 14 }}>
            {examples.map((example, index) => (
              <article key={example} style={{ border: "1px solid #DADDD6", borderRadius: 8, padding: 20, background: "#FFFFFF", display: "grid", gridTemplateColumns: "44px minmax(0, 1fr)", gap: 16, alignItems: "start" }}>
                <p style={{ fontFamily: "'Spline Sans Mono', monospace", color: "#B64A22", fontSize: 13, margin: 0 }}>{String(index + 1).padStart(2, "0")}</p>
                <p style={{ margin: 0, color: "#252B31", fontSize: 16, lineHeight: 1.5 }}>{example}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" style={{ background: "#FFFFFF", borderBottom: "1px solid #DEDFD8" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(58px,7vw,96px) 28px" }}>
          <div>
            <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 13, fontWeight: 650, color: "#0E6C5D", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 16px" }}>How I work</p>
            <h2 className="home-single-line-heading" style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 780, color: "#1A1C20", fontSize: "clamp(1.9rem,3.6vw,3rem)", lineHeight: 1.08, letterSpacing: "0", margin: 0 }}>
              Understand first. Build second.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18, marginTop: 40 }}>
            {process.map((step) => (
              <article key={step.title} style={{ background: "#FFFFFF", border: "1px solid #DADDD6", borderRadius: 8, padding: 24 }}>
                <h3 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 780, color: "#1A1C20", fontSize: "1.35rem", lineHeight: 1.15, letterSpacing: "0", margin: "0 0 10px" }}>{step.title}</h3>
                <p style={{ margin: 0, color: "#555E66", lineHeight: 1.58, fontSize: 15.8 }}>{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="public-work" style={{ background: "#FFFFFF", borderBottom: "1px solid #DEDFD8" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(58px,7vw,96px) 28px" }}>
          <div className="home-public-work-intro" style={{ maxWidth: 720 }}>
            <div>
              <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 13, fontWeight: 650, color: "#0E6C5D", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 16px" }}>Public products</p>
              <h2 className="home-single-line-heading" style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 780, color: "#1A1C20", fontSize: "clamp(1.9rem,3.6vw,3rem)", lineHeight: 1.08, letterSpacing: "0", margin: 0 }}>
                Software products I've built.
              </h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18, marginTop: 40 }}>
            {publicWork.map((project) => (
              <a key={project.name} href={project.href} target="_blank" rel="noreferrer" style={{ display: "flex", flexDirection: "column", minHeight: 230, background: "#F6F6F1", border: "1px solid #DADDD6", borderRadius: 8, padding: 24, textDecoration: "none", color: "#1A1C20" }}>
                <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 12, fontWeight: 650, color: "#0E6C5D", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 18px" }}>{project.label}</p>
                <h3 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 780, color: "#1A1C20", fontSize: "1.7rem", lineHeight: 1.05, margin: "0 0 14px" }}>{project.name}</h3>
                <p style={{ margin: 0, color: "#555E66", lineHeight: 1.58, fontSize: 15.8 }}>{project.copy}</p>
                <span style={{ marginTop: "auto", paddingTop: 24, color: "#B64A22", fontWeight: 750, fontSize: 15 }}>Open project</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <ContactFormSection source="Homepage enquiry" />

      <footer style={{ background: "#1A1C20", color: "#ACB7B0" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "40px 28px", display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
            <img src="/brooker-mark-160.webp" alt="" style={{ width: 44, height: 44, objectFit: "contain" }} />
            <span style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 780, fontSize: 17, color: "#FFFFFF" }}>Brooker Systems</span>
          </div>
          <p style={{ margin: 0, fontSize: 14, fontFamily: "'Spline Sans Mono', monospace" }}>Perth, Western Australia</p>
          <p style={{ margin: 0, fontSize: 13, color: "#7E8983" }}>Copyright 2026 Brooker Systems</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
