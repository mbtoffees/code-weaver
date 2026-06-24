import { FormEvent, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "https://code-weaver-nine.vercel.app";

const capabilities = [
  {
    title: "Build software",
    copy: "Custom web apps, portals, dashboards and internal tools built around how your business actually works.",
  },
  {
    title: "Automate repetitive work",
    copy: "Replace copy-paste, spreadsheet wrangling, file handling, checking and follow-up loops with reliable workflows.",
  },
  {
    title: "Connect systems",
    copy: "Move information between CRMs, accounting tools, cloud drives, spreadsheets, email and specialist platforms.",
  },
  {
    title: "Clean up messy data",
    copy: "Normalise exports, find duplicates, validate fields, reconcile records and keep the same information consistent in multiple places.",
  },
  {
    title: "Use AI practically",
    copy: "Document review, classification, summaries, extraction and first-pass analysis with clear human review steps.",
  },
  {
    title: "Make things maintainable",
    copy: "Security-minded builds with logging, testing, deployment notes and enough documentation to keep the system usable later.",
  },
];

const examples = [
  {
    label: "AWB / construction workflows",
    title: "Automation and document review tooling",
    copy: "Workflow infrastructure for handling documents, checking details and producing reviewable outputs instead of relying on manual back-and-forth.",
  },
  {
    label: "Equilytics",
    title: "Horse sport science platform",
    copy: "Training schedules, dashboards, imports, reporting and role-aware workflows for racehorse performance operations.",
  },
  {
    label: "Fact-finding product",
    title: "Crypto tax fact-finding portal",
    copy: "A secure portal for collecting client information, managing submissions, drafting questionnaires and supporting accounting workflows.",
  },
];

const outcomes = [
  "Less manual computer work",
  "Cleaner data across systems",
  "Faster reports and reviews",
  "Fewer avoidable mistakes",
];

const industries = ["Construction", "Accounting", "Blockchain", "Cybersecurity", "Sports science", "Businesses with messy computer work"];

const inputStyle = {
  fontFamily: "inherit",
  fontSize: 15,
  color: "#211C15",
  padding: "12px 13px",
  border: "1px solid #E0D6C4",
  borderRadius: 10,
  background: "#FDFBF6",
  outline: "none",
} as const;

const Index = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    setError(false);

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <main style={{ minHeight: "100vh", background: "#F4EEE3", color: "#211C15", fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(244,238,227,0.88)", backdropFilter: "blur(12px)", borderBottom: "1px solid #E7DECE" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px", height: 70, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 11, textDecoration: "none", color: "#211C15" }}>
            <img src="/brooker-mark.png" alt="" style={{ width: 38, height: 38, borderRadius: 10, objectFit: "contain", background: "#FFFFFF", padding: 2 }} />
            <span style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, fontSize: 19, letterSpacing: "-0.01em" }}>Brooker Systems</span>
          </a>
          <nav style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 14, fontWeight: 600 }}>
            <a href="#work" style={{ color: "#574F42", textDecoration: "none" }}>Work</a>
            <a href="#services" style={{ color: "#574F42", textDecoration: "none" }}>Services</a>
            <a href="#contact" style={{ background: "#C44E1E", color: "#FBF7EF", textDecoration: "none", padding: "10px 18px", borderRadius: 10 }}>Get my free task review</a>
          </nav>
        </div>
      </header>

      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(120% 90% at 80% -10%, #FBEFE3 0%, rgba(251,239,227,0) 55%), radial-gradient(90% 80% at -5% 110%, #F7E6DA 0%, rgba(247,230,218,0) 50%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(54px,8vw,96px) 28px clamp(56px,7vw,92px)", position: "relative", display: "grid", gridTemplateColumns: "minmax(0, 1.15fr) minmax(280px, 0.85fr)", gap: "clamp(32px,6vw,72px)", alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 13, fontWeight: 500, color: "#C44E1E", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 20px" }}>Brooker Systems // software + automation</p>
            <h1 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, color: "#211C15", fontSize: "clamp(2.7rem,6vw,5rem)", lineHeight: 1.02, letterSpacing: "-0.04em", margin: 0, maxWidth: "13ch" }}>
              I build software that removes repetitive computer work.
            </h1>
            <p style={{ fontSize: "clamp(1.08rem,1.7vw,1.3rem)", lineHeight: 1.55, color: "#574F42", margin: "24px 0 0", maxWidth: "68ch" }}>
              Brooker Systems helps businesses build custom software, automate workflows, connect systems, clean up data and use AI where it actually saves time.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 34 }}>
              <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "#C44E1E", color: "#FBF7EF", textDecoration: "none", fontWeight: 600, fontSize: 16, padding: "15px 24px", borderRadius: 12, boxShadow: "0 10px 24px -10px rgba(196,78,30,0.7)" }}>Get my free task review →</a>
              <a href="#services" style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "#FFFFFF", color: "#211C15", textDecoration: "none", fontWeight: 600, fontSize: 16, padding: "15px 24px", borderRadius: 12, border: "1px solid #E0D6C4" }}>See what I can build</a>
            </div>
          </div>

          <div style={{ background: "#FFFFFF", border: "1px solid #EFE6D6", borderRadius: 24, padding: 24, boxShadow: "0 24px 60px -40px rgba(33,28,21,0.45)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
              <img src="/max-brooker.jpg" alt="Max Brooker" style={{ width: 76, height: 76, borderRadius: 18, objectFit: "cover", objectPosition: "top", border: "1px solid #E7DECE" }} />
              <div>
                <p style={{ margin: 0, fontWeight: 700, fontSize: 18 }}>Built by Max Brooker</p>
                <p style={{ margin: "5px 0 0", color: "#7C715F", fontSize: 14 }}>Electrical engineer, developer and automation builder.</p>
              </div>
            </div>
            <div style={{ display: "grid", gap: 12 }}>
              {outcomes.map((outcome) => (
                <div key={outcome} style={{ display: "flex", alignItems: "center", gap: 10, background: "#FDFBF6", border: "1px solid #EFE6D6", borderRadius: 13, padding: "13px 14px" }}>
                  <span style={{ width: 8, height: 8, borderRadius: 999, background: "#C44E1E", flex: "0 0 auto" }} />
                  <span style={{ color: "#2C261D", fontWeight: 500 }}>{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" style={{ background: "#FBF7EF", borderTop: "1px solid #ECE3D4", borderBottom: "1px solid #ECE3D4" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(64px,8vw,108px) 28px" }}>
          <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 13, fontWeight: 500, color: "#C44E1E", letterSpacing: "0.02em", margin: "0 0 18px" }}>// what I can do</p>
          <h2 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, color: "#211C15", fontSize: "clamp(2rem,4vw,3.2rem)", lineHeight: 1.06, letterSpacing: "-0.03em", margin: 0, maxWidth: "16ch" }}>Software, automation, data and AI — without the agency nonsense.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18, marginTop: 44 }}>
            {capabilities.map((capability) => (
              <div key={capability.title} style={{ background: "#FFFFFF", border: "1px solid #EFE6D6", borderRadius: 18, padding: 28 }}>
                <h3 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, fontSize: "1.35rem", letterSpacing: "-0.02em", margin: "0 0 10px", color: "#211C15" }}>{capability.title}</h3>
                <p style={{ margin: 0, color: "#5C5446", lineHeight: 1.55, fontSize: 15.5 }}>{capability.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" style={{ background: "#F4EEE3" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(64px,8vw,108px) 28px" }}>
          <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 13, fontWeight: 500, color: "#C44E1E", letterSpacing: "0.02em", margin: "0 0 18px" }}>// recent work</p>
          <h2 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, color: "#211C15", fontSize: "clamp(2rem,4vw,3.2rem)", lineHeight: 1.06, letterSpacing: "-0.03em", margin: 0, maxWidth: "16ch" }}>Different industries, same pattern: messy work turned into reliable software.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18, marginTop: 44 }}>
            {examples.map((example) => (
              <article key={example.title} style={{ background: "#FFFFFF", border: "1px solid #EFE6D6", borderRadius: 20, padding: 30, minHeight: 250 }}>
                <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 12, color: "#B06B43", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 24px" }}>{example.label}</p>
                <h3 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, color: "#211C15", fontSize: "1.55rem", lineHeight: 1.12, margin: "0 0 12px", letterSpacing: "-0.02em" }}>{example.title}</h3>
                <p style={{ margin: 0, color: "#5C5446", lineHeight: 1.55 }}>{example.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#211C15", color: "#E7DCCB" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(52px,6vw,84px) 28px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "clamp(28px,6vw,70px)", alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 13, fontWeight: 500, color: "#F2A074", letterSpacing: "0.02em", margin: "0 0 14px" }}>// where this fits</p>
            <h2 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, color: "#FBF7EF", fontSize: "clamp(1.8rem,3vw,2.6rem)", lineHeight: 1.08, letterSpacing: "-0.03em", margin: 0 }}>Useful for any business where people do repetitive work behind a computer.</h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {industries.map((industry) => (
              <span key={industry} style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 15.5, fontWeight: 500, color: "#EADFCE", border: "1px solid #463C2C", background: "#2A2419", borderRadius: 999, padding: "11px 19px" }}><span style={{ width: 6, height: 6, borderRadius: 999, background: "#C44E1E" }} />{industry}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={{ background: "#FBF7EF", borderTop: "1px solid #ECE3D4" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(64px,8vw,108px) 28px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "clamp(32px,6vw,72px)" }}>
            <div>
              <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 13, fontWeight: 500, color: "#C44E1E", letterSpacing: "0.02em", margin: "0 0 18px" }}>// contact</p>
              <h2 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, color: "#211C15", fontSize: "clamp(1.9rem,3.6vw,2.9rem)", lineHeight: 1.08, letterSpacing: "-0.03em", margin: 0, maxWidth: "16ch" }}>Tell me about the problems slowing your team down.</h2>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.55, color: "#574F42", margin: "20px 0 0", maxWidth: "42ch" }}>Send the messy version. If it is not worth automating, I will tell you that too.</p>
            </div>
            {submitted ? (
              <div style={{ background: "#FFFFFF", border: "1px solid #EBE2D2", borderRadius: 18, padding: "40px 32px", textAlign: "center", boxShadow: "0 18px 40px -28px rgba(33,28,21,0.35)" }}>
                <h3 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, color: "#211C15", fontSize: "1.4rem", margin: "0 0 8px" }}>Thanks — message sent.</h3>
                <p style={{ margin: 0, color: "#5C5446", lineHeight: 1.55 }}>I will get back to you with a practical view on whether it is worth automating.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} style={{ background: "#FFFFFF", border: "1px solid #EBE2D2", borderRadius: 18, padding: 28, display: "flex", flexDirection: "column", gap: 16, boxShadow: "0 18px 40px -28px rgba(33,28,21,0.35)" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
                  <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#211C15" }}>Name</span>
                    <input type="text" required value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} style={inputStyle} />
                  </label>
                  <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#211C15" }}>Email</span>
                    <input type="email" required value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} style={inputStyle} />
                  </label>
                </div>
                <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#211C15" }}>Message</span>
                  <textarea required rows={5} value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} placeholder="Tell me what is annoying, slow or error-prone in your business." style={{ ...inputStyle, resize: "vertical", lineHeight: 1.5 }} />
                </label>
                {error && <p style={{ margin: 0, color: "#B42318", fontSize: 14 }}>Something went wrong. Please try again.</p>}
                <button type="submit" disabled={sending} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 9, background: "#C44E1E", color: "#FBF7EF", border: "none", fontFamily: "inherit", fontWeight: 600, fontSize: 16, padding: "15px 24px", borderRadius: 12, cursor: sending ? "wait" : "pointer", marginTop: 4 }}>{sending ? "Sending..." : "Get my free task review →"}</button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer style={{ background: "#211C15", color: "#A89B86" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "44px 28px", display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
            <img src="/brooker-mark.png" alt="" style={{ width: 34, height: 34, borderRadius: 9, objectFit: "contain", background: "#FBF7EF", padding: 2 }} />
            <span style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, fontSize: 17, color: "#F4EEE3" }}>Brooker Systems</span>
          </div>
          <p style={{ margin: 0, fontSize: 14, fontFamily: "'Spline Sans Mono', monospace" }}>Perth, Australia</p>
          <p style={{ margin: 0, fontSize: 13, color: "#7C715F" }}>© 2026 Brooker Systems</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
