import { FormEvent, useState } from "react";

const outcomes = [
  "Less time spent copying information between systems",
  "Faster processes with fewer missed steps",
  "Cleaner reports so managers can see what is actually going on",
  "Fewer mistakes from manual handling and spreadsheet work",
];

const examples = [
  {
    title: "~80%",
    copy: "less manual form-processing work after replacing repeated manual steps with a custom workflow.",
  },
  {
    title: "Hours → minutes",
    copy: "AI-assisted review pipelines that analyse documents and produce structured outputs much faster than manual review.",
  },
  {
    title: "Cleaner data",
    copy: "Checks and synchronisation tools that help keep the same information consistent across multiple places.",
  },
  {
    title: "Less inbox chasing",
    copy: "Email automations that sort, route, summarise and follow up on routine messages so staff do not have to.",
  },
];

const goodFits = [
  "A staff member copies the same details from one system into another.",
  "Someone rebuilds the same weekly report from spreadsheets and exports.",
  "Documents, forms or attachments need to be checked, renamed or filed.",
  "Managers only find data problems after the report is already wrong.",
  "Different systems have different names, job numbers or customer details.",
  "Important work relies on one person remembering the exact steps.",
];

const services = [
  {
    title: "Automate repetitive work",
    copy: "Remove boring handoffs: copying, checking, renaming, matching, filing, chasing and updating records.",
  },
  {
    title: "Turn messy files into usable information",
    copy: "Pull useful details out of emails, PDFs, spreadsheets, forms and exports so your team can review them faster.",
  },
  {
    title: "Find data problems early",
    copy: "Flag missing fields, duplicates, inconsistent details and other issues while they can still be fixed.",
  },
  {
    title: "Use AI where it actually helps",
    copy: "Use AI for classification, summaries, first-pass checks and review queues — with humans approving important work.",
  },
  {
    title: "Build safe internal tools",
    copy: "Create practical tools around your current workflow, with clear review steps instead of fragile spreadsheet workarounds.",
  },
];

const industries = ["Construction", "Blockchain", "Cybersecurity", "Sports science", "Accounting"];

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

const API_URL = import.meta.env.VITE_API_URL || "https://code-weaver-nine.vercel.app";

const ConstructionSoftwareIntegrations = () => {
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
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(244,238,227,0.86)", backdropFilter: "blur(12px)", borderBottom: "1px solid #E7DECE" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px", height: 70, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 11, textDecoration: "none", color: "#211C15" }}>
            <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 34, height: 34, borderRadius: 9, background: "#211C15", color: "#F4EEE3", fontFamily: "'Spline Sans Mono', monospace", fontWeight: 600, fontSize: 15 }}>bs</span>
            <span style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, fontSize: 19, letterSpacing: "-0.01em" }}>Brooker Systems</span>
          </a>
          <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#C44E1E", color: "#FBF7EF", textDecoration: "none", fontWeight: 600, fontSize: 15, padding: "10px 18px", borderRadius: 10 }}>Get my free task review</a>
        </div>
      </header>

      <section id="top" style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(120% 90% at 80% -10%, #FBEFE3 0%, rgba(251,239,227,0) 55%), radial-gradient(90% 80% at -5% 110%, #F7E6DA 0%, rgba(247,230,218,0) 50%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(28px,5vw,58px) 28px clamp(36px,5vw,64px)", position: "relative" }}>
          <h1 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, color: "#211C15", fontSize: "clamp(2.7rem,6vw,4.85rem)", lineHeight: 1.02, letterSpacing: "-0.035em", margin: "26px 0 0", maxWidth: "15ch" }}>
            Stop wasting hours copying, pasting and doing mundane computer work.
          </h1>
          <p style={{ fontSize: "clamp(1.08rem,1.7vw,1.3rem)", lineHeight: 1.55, color: "#574F42", margin: "24px 0 0", maxWidth: "72ch" }}>
            I help businesses cut down repetitive computer work, speed up processes, keep data consistent and reduce mistakes caused by manual handling.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 34 }}>
            <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "#C44E1E", color: "#FBF7EF", textDecoration: "none", fontWeight: 600, fontSize: 16, padding: "15px 24px", borderRadius: 12, boxShadow: "0 10px 24px -10px rgba(196,78,30,0.7)" }}>Get my free task review →</a>
            <a href="#build" style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "#FFFFFF", color: "#211C15", textDecoration: "none", fontWeight: 600, fontSize: 16, padding: "15px 24px", borderRadius: 12, border: "1px solid #E0D6C4" }}>See what can be automated</a>
          </div>
        </div>
      </section>

      <section style={{ background: "#FBF7EF", borderTop: "1px solid #ECE3D4", borderBottom: "1px solid #ECE3D4" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(48px,6vw,80px) 28px" }}>
          <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 13, fontWeight: 500, color: "#C44E1E", letterSpacing: "0.02em", margin: "0 0 28px" }}>// what you get</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 18 }}>
            {outcomes.map((outcome) => (
              <div key={outcome} style={{ background: "#FFFFFF", border: "1px solid #EFE6D6", borderRadius: 16, padding: 24 }}>
                <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.4, color: "#211C15", fontWeight: 500 }}>{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#F4EEE3", borderBottom: "1px solid #ECE3D4" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(46px,6vw,76px) 28px" }}>
          <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 13, fontWeight: 500, color: "#C44E1E", letterSpacing: "0.02em", margin: "0 0 24px" }}>// examples of work I can do</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 18 }}>
            {examples.map((example) => (
              <div key={example.title} style={{ background: "#FFFFFF", border: "1px solid #EFE6D6", borderRadius: 18, padding: 28 }}>
                <p style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, color: "#211C15", fontSize: "clamp(1.8rem,2.7vw,2.55rem)", lineHeight: 1, margin: 0 }}>{example.title}</p>
                <p style={{ margin: "14px 0 0", fontSize: 16, lineHeight: 1.5, color: "#574F42" }}>{example.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#211C15", color: "#E7DCCB" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(52px,6vw,84px) 28px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "clamp(24px,5vw,60px)", alignItems: "center" }}>
            <div style={{ maxWidth: "34ch" }}>
              <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 13, fontWeight: 500, color: "#F2A074", letterSpacing: "0.02em", margin: "0 0 14px" }}>// where I've worked</p>
              <h2 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, color: "#FBF7EF", fontSize: "clamp(1.6rem,3vw,2.3rem)", lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0 }}>Experience across very different industries.</h2>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {industries.map((industry) => (
                <span key={industry} style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 15.5, fontWeight: 500, color: "#EADFCE", border: "1px solid #463C2C", background: "#2A2419", borderRadius: 999, padding: "11px 19px" }}><span style={{ width: 6, height: 6, borderRadius: 999, background: "#C44E1E" }} />{industry}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="build">
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(64px,8vw,108px) 28px" }}>
          <div style={{ maxWidth: "62ch" }}>
            <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 13, fontWeight: 500, color: "#C44E1E", letterSpacing: "0.02em", margin: "0 0 18px" }}>// good fits</p>
            <h2 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, color: "#211C15", fontSize: "clamp(1.9rem,3.6vw,2.9rem)", lineHeight: 1.08, letterSpacing: "-0.02em", margin: 0 }}>If your team does the same computer task every week, it is probably worth looking at.</h2>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.55, color: "#574F42", margin: "20px 0 0" }}>The first step is not a big software project. It is finding one annoying process where automation can save time quickly.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginTop: 44 }}>
            {goodFits.map((fit, index) => (
              <div key={fit} style={{ background: "#FFFFFF", border: "1px solid #EBE2D2", borderRadius: 16, padding: "24px 24px 26px", display: "flex", flexDirection: "column", gap: 14 }}>
                <span style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 13, color: "#B89F84" }}>{String(index + 1).padStart(2, "0")}</span>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.5, color: "#2C261D" }}>{fit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#FBF7EF", borderTop: "1px solid #ECE3D4", borderBottom: "1px solid #ECE3D4" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(64px,8vw,108px) 28px" }}>
          <div style={{ maxWidth: "60ch" }}>
            <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 13, fontWeight: 500, color: "#C44E1E", letterSpacing: "0.02em", margin: "0 0 18px" }}>// what I can build</p>
            <h2 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, color: "#211C15", fontSize: "clamp(1.9rem,3.6vw,2.9rem)", lineHeight: 1.08, letterSpacing: "-0.02em", margin: 0 }}>Automation that gives your team time back.</h2>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.55, color: "#574F42", margin: "20px 0 0" }}>I build practical tools around the software, documents and spreadsheets already in your business. The outcome should be simple: less busywork, faster processes and fewer avoidable mistakes.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginTop: 44 }}>
            {services.map((service) => (
              <div key={service.title} style={{ background: "#FFFFFF", border: "1px solid #EBE2D2", borderRadius: 18, padding: 28 }}>
                <h3 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, color: "#211C15", fontSize: "1.28rem", margin: "0 0 8px", letterSpacing: "-0.01em" }}>{service.title}</h3>
                <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.55, color: "#5C5446" }}>{service.copy}</p>
              </div>
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
            </div>
            {submitted ? (
              <div style={{ background: "#FFFFFF", border: "1px solid #EBE2D2", borderRadius: 18, padding: "40px 32px", textAlign: "center", boxShadow: "0 18px 40px -28px rgba(33,28,21,0.35)" }}>
                <h3 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, color: "#211C15", fontSize: "1.4rem", margin: "0 0 8px" }}>Thanks — message ready to send.</h3>
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
            <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 32, height: 32, borderRadius: 8, background: "#C44E1E", color: "#FBF7EF", fontFamily: "'Spline Sans Mono', monospace", fontWeight: 600, fontSize: 14 }}>bs</span>
            <span style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, fontSize: 17, color: "#F4EEE3" }}>Brooker Systems</span>
          </div>
          <p style={{ margin: 0, fontSize: 14, fontFamily: "'Spline Sans Mono', monospace" }}>Perth, Australia</p>
          <p style={{ margin: 0, fontSize: 13, color: "#7C715F" }}>© 2026 Brooker Systems</p>
        </div>
      </footer>
    </main>
  );
};

export default ConstructionSoftwareIntegrations;
