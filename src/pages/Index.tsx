const BOOKING_URL = import.meta.env.VITE_BOOKING_URL || "https://cal.com/maxbrooker/20-min-meeting";

const pillars = [
  {
    title: "Agents",
    copy: "Practical AI agents that read, classify, check, draft, route and report inside real business workflows.",
  },
  {
    title: "Automations",
    copy: "Reliable systems for the repetitive work: copying, checking, renaming, reconciling, filing, chasing and updating records.",
  },
  {
    title: "Workflow systems",
    copy: "Internal tools, portals and dashboards that turn scattered process knowledge into something your team can actually run.",
  },
];

const examples = [
  "An agent reads inbox items, classifies them, extracts the useful fields and sends edge cases to a review queue.",
  "A workflow checks PDFs, quotes or forms against rules, then produces a structured report instead of loose AI prose.",
  "A dashboard shows exceptions across jobs, invoices, documents and data quality so people know what to fix next.",
  "A system connects the tools you already use, keeps records aligned and logs what happened when something fails.",
];

const process = [
  {
    title: "Map the workflow",
    copy: "We work out what starts the process, who touches it, where data moves, where judgement is needed and where mistakes happen.",
  },
  {
    title: "Systemise the steps",
    copy: "I split the work into deterministic checks, AI-assisted parts, human approvals, logs and outputs your team can trust.",
  },
  {
    title: "Build the smallest useful version",
    copy: "Then I ship the first version, test it against real examples and harden the parts that prove they are worth keeping.",
  },
];

const proof = [
  "AI document extraction and review pipelines",
  "Simpro, Procore, Zoho and Microsoft 365 automations",
  "Quote compliance and spec-checking workflows",
  "Inbox triage, invoice checks and approval queues",
  "Operational dashboards and exception reports",
  "Internal tools for messy spreadsheet processes",
];

const Index = () => {
  return (
    <main style={{ minHeight: "100vh", background: "#F6F6F1", color: "#1A1C20", fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(246,246,241,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #DEDFD8" }}>
        <div className="home-header-inner" style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px", height: 82, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 11, textDecoration: "none", color: "#1A1C20" }}>
            <img className="home-header-logo" src="/brooker-mark.png" alt="" style={{ width: 58, height: 58, objectFit: "contain" }} />
            <span className="home-header-name" style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 750, fontSize: 20, letterSpacing: "0" }}>Brooker Systems</span>
          </a>
          <nav className="home-header-nav" style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 14, fontWeight: 700 }}>
            <a className="home-header-cta" href={BOOKING_URL} target="_blank" rel="noreferrer" style={{ background: "#B64A22", color: "#FFFFFF", textDecoration: "none", padding: "11px 18px", borderRadius: 8 }}>Book a workflow call</a>
          </nav>
        </div>
      </header>

      <section style={{ background: "#F6F6F1", borderBottom: "1px solid #DEDFD8" }}>
        <div className="home-hero-inner" style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(48px,7vw,92px) 28px clamp(48px,7vw,86px)", display: "grid", gridTemplateColumns: "minmax(0, 1.1fr) minmax(300px, 0.9fr)", gap: "clamp(32px,6vw,68px)", alignItems: "center" }}>
          <div>
            <p className="home-hero-eyebrow" style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 13, fontWeight: 650, color: "#0E6C5D", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 20px" }}>Agents // automations // workflow systems</p>
            <h1 className="home-hero-title" style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 780, color: "#1A1C20", fontSize: "clamp(2.75rem,6vw,5.2rem)", lineHeight: 1.01, letterSpacing: "0", margin: 0, maxWidth: "12ch" }}>
              I build systems for work that should not stay manual.
            </h1>
            <p style={{ fontSize: "clamp(1.08rem,1.6vw,1.28rem)", lineHeight: 1.58, color: "#4B535C", margin: "24px 0 0", maxWidth: "68ch" }}>
              I help businesses turn messy processes into agents, automations, internal tools and reviewable workflows. The goal is simple: less scattered human effort, cleaner handoffs and systems your team can actually rely on.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 32 }}>
              <a href={BOOKING_URL} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", background: "#B64A22", color: "#FFFFFF", textDecoration: "none", fontWeight: 750, fontSize: 16, padding: "15px 22px", borderRadius: 8, boxShadow: "0 14px 28px -18px rgba(182,74,34,0.8)" }}>Book a 20-minute workflow call</a>
              <a href="#systems" style={{ display: "inline-flex", alignItems: "center", background: "#FFFFFF", color: "#1A1C20", textDecoration: "none", fontWeight: 750, fontSize: 16, padding: "15px 22px", borderRadius: 8, border: "1px solid #D7D9D2" }}>What I build</a>
            </div>
          </div>

          <aside className="home-profile-card" style={{ background: "#FFFFFF", border: "1px solid #DADDD6", borderRadius: 8, padding: 24, boxShadow: "0 24px 55px -42px rgba(26,28,32,0.45)" }}>
            <div className="home-profile-row" style={{ display: "grid", gridTemplateColumns: "132px minmax(0, 1fr)", gap: 20, alignItems: "center", marginBottom: 22 }}>
              <img className="home-profile-image" src="/max-brooker.jpg" alt="Max Brooker" style={{ width: 132, height: 132, borderRadius: 8, objectFit: "cover", objectPosition: "center 24%", border: "1px solid #D7D9D2" }} />
              <div>
                <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 12, fontWeight: 650, color: "#0E6C5D", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 8px" }}>Max Brooker</p>
                <p style={{ margin: 0, fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 780, fontSize: 28, letterSpacing: "0", lineHeight: 1.05 }}>Brooker Systems</p>
                <p style={{ margin: "8px 0 0", color: "#59616A", fontSize: 16, lineHeight: 1.42 }}>Electrical engineering background, cybersecurity discipline, practical software builder.</p>
              </div>
            </div>
            <div style={{ background: "#1A1C20", color: "#E7ECE7", borderRadius: 8, padding: 18 }}>
              <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.55 }}>
                I am strongest where AI meets real operations: structured inputs, bounded agents, deterministic checks, human approval and logs when something breaks.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section id="systems" style={{ background: "#FFFFFF", borderBottom: "1px solid #DEDFD8" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(58px,7vw,96px) 28px" }}>
          <div style={{ maxWidth: "68ch" }}>
            <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 13, fontWeight: 650, color: "#0E6C5D", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 16px" }}>What I build</p>
            <h2 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 780, color: "#1A1C20", fontSize: "clamp(1.9rem,3.6vw,3rem)", lineHeight: 1.08, letterSpacing: "0", margin: 0 }}>
              Software that systemises the work around your software.
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
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(58px,7vw,96px) 28px", display: "grid", gridTemplateColumns: "minmax(240px, 0.72fr) minmax(0, 1.28fr)", gap: "clamp(28px,5vw,58px)", alignItems: "start" }}>
          <div>
            <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 13, fontWeight: 650, color: "#0E6C5D", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 16px" }}>Examples</p>
            <h2 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 780, color: "#1A1C20", fontSize: "clamp(1.85rem,3.3vw,2.8rem)", lineHeight: 1.08, letterSpacing: "0", margin: 0 }}>
              Not a chatbot. A workflow that does useful work.
            </h2>
            <p style={{ color: "#59616A", lineHeight: 1.62, margin: "18px 0 0", fontSize: 16.5 }}>
              Good agents are narrow. They have inputs, rules, review points, outputs and failure modes.
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
          <div style={{ maxWidth: "66ch" }}>
            <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 13, fontWeight: 650, color: "#0E6C5D", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 16px" }}>How I work</p>
            <h2 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 780, color: "#1A1C20", fontSize: "clamp(1.9rem,3.6vw,3rem)", lineHeight: 1.08, letterSpacing: "0", margin: 0 }}>
              Systemise first. Automate second.
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

      <section id="proof" style={{ background: "#F6F6F1", borderBottom: "1px solid #DEDFD8" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(52px,6vw,82px) 28px", display: "grid", gridTemplateColumns: "minmax(240px, 0.72fr) minmax(0, 1.28fr)", gap: "clamp(28px,5vw,58px)", alignItems: "start" }}>
          <div>
            <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 13, fontWeight: 650, color: "#0E6C5D", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 16px" }}>Proof shape</p>
            <h2 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 780, color: "#1A1C20", fontSize: "clamp(1.7rem,3vw,2.4rem)", lineHeight: 1.1, letterSpacing: "0", margin: 0 }}>
              Recent work has been in messy real-world systems.
            </h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {proof.map((item) => (
              <span key={item} style={{ border: "1px solid #D7D9D2", borderRadius: 999, padding: "9px 13px", background: "#FFFFFF", color: "#303840", fontSize: 14.5, fontWeight: 700 }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={{ background: "#EDF4F0" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(58px,7vw,98px) 28px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <div>
              <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 13, fontWeight: 650, color: "#0E6C5D", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 16px" }}>Contact</p>
              <h2 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 780, color: "#1A1C20", fontSize: "clamp(2rem,3.6vw,3rem)", lineHeight: 1.08, letterSpacing: "0", margin: 0 }}>
                Book a 20-minute workflow call.
              </h2>
              <p style={{ color: "#59616A", lineHeight: 1.62, margin: "18px auto 0", fontSize: 17, maxWidth: "58ch" }}>
                Pick a time and add a few notes about the workflow, the tools involved and what would make the call useful. I will review it before we talk.
              </p>
              <a href={BOOKING_URL} target="_blank" rel="noreferrer" style={{ display: "inline-flex", marginTop: 28, alignItems: "center", background: "#B64A22", color: "#FFFFFF", textDecoration: "none", fontWeight: 750, fontSize: 17, padding: "16px 24px", borderRadius: 8, boxShadow: "0 14px 28px -18px rgba(182,74,34,0.8)" }}>
                Book a workflow call
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ background: "#1A1C20", color: "#ACB7B0" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "40px 28px", display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
            <img src="/brooker-mark.png" alt="" style={{ width: 44, height: 44, objectFit: "contain" }} />
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
