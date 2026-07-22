import { FormEvent, useState } from "react";
import SEO from "@/components/SEO";
import { serviceJsonLd } from "@/components/seoData";

const problemExamples = [
  "Someone re-types data from one system into another every day.",
  "The same weekly report gets rebuilt from exports by hand.",
  "Documents need renaming, checking and filing before anyone can use them.",
  "Customer, job or supplier details don't match between two systems.",
  "The same follow-ups get chased manually every week.",
  "You only spot a data error after the email, report or invoice has already gone out.",
];

const proofPoints = [
  {
    title: "~80%",
    copy: "less manual form work after replacing repeated data entry with a custom workflow.",
  },
  {
    title: "~5 hrs/week",
    copy: "saved on a weekly cost report that used to be rebuilt from exports by hand.",
  },
];

const capabilities = [
  {
    title: "Automate repetitive work",
    copy: "Replace copy-paste, checking, renaming, filing, chasing and updating records with reliable workflows.",
  },
  {
    title: "Connect systems that don't talk",
    copy: "Move information between CRMs, accounting tools, email, cloud drives, spreadsheets and specialist platforms.",
  },
  {
    title: "Clean up messy data",
    copy: "Find duplicates, validate fields, normalise exports and keep the same information consistent in multiple places.",
  },
  {
    title: "Build the internal tool",
    copy: "Turn the spreadsheet workaround your team keeps maintaining into a simple tool built around the real process.",
  },
  {
    title: "Use AI where it helps",
    copy: "Use AI for extraction, classification, summaries and first-pass checks, with human review where the work matters.",
  },
];

const workSteps = [
  {
    title: "You show me the work",
    copy: "The repetitive task that wastes time or causes mistakes.",
  },
  {
    title: "We design the workflow together",
    copy: "We work through the steps, handoffs and outcome you want, then choose the simplest useful solution.",
  },
  {
    title: "I build the system",
    copy: "Sized to the problem. Small fix or full internal tool, scoped to pay for itself.",
  },
];

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

const CONTACT_EMAIL = "max@brookersystems.com.au";

const AdminAutomation = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    setError(false);

    const body = [
      "Source: Admin automation enquiry",
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      formData.phone ? `Phone: ${formData.phone}` : "Phone: not provided",
      "",
      formData.message,
    ].join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Admin automation enquiry")}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setSending(false);
  };

  return (
    <main style={{ minHeight: "100vh", background: "#F4EEE3", color: "#211C15", fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <SEO
        title="Business Automation Consultant Australia | Brooker Systems"
        description="Practical automation for repeated computer work, reports, spreadsheets, documents and business systems. Built by Brooker Systems in Australia."
        path="/admin-automation"
        jsonLd={serviceJsonLd("Business Automation", "Practical automation for repeated computer work, reports, spreadsheets, documents and business systems.", "/admin-automation")}
      />
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(244,238,227,0.86)", backdropFilter: "blur(12px)", borderBottom: "1px solid #E7DECE" }}>
        <div className="admin-header-inner" style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px", height: 82, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 11, textDecoration: "none", color: "#211C15" }}>
            <img className="admin-header-logo" src="/brooker-mark-160.webp" alt="" style={{ width: 58, height: 58, borderRadius: 0, objectFit: "contain" }} />
            <span className="admin-header-name" style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, fontSize: 19, letterSpacing: "-0.01em" }}>Brooker Systems</span>
          </a>
          <a className="admin-header-cta" href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#C44E1E", color: "#FBF7EF", textDecoration: "none", fontWeight: 600, fontSize: 15, padding: "10px 18px", borderRadius: 10 }}>Get in touch</a>
        </div>
      </header>

      <section id="top" style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(120% 90% at 80% -10%, #FBEFE3 0%, rgba(251,239,227,0) 55%), radial-gradient(90% 80% at -5% 110%, #F7E6DA 0%, rgba(247,230,218,0) 50%)", pointerEvents: "none" }} />
        <div className="landing-hero-inner" style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(34px,6vw,78px) 28px clamp(42px,6vw,74px)", position: "relative", display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(400px, 420px)", gap: "clamp(32px,6vw,72px)", alignItems: "center" }}>
          <div>
            <h1 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, color: "#211C15", fontSize: "clamp(2.55rem,5.6vw,4.7rem)", lineHeight: 1.02, letterSpacing: "-0.035em", margin: 0, maxWidth: "16ch" }}>
              Tell me the repetitive work. I'll build the system that handles it.
            </h1>
            <p style={{ fontSize: "clamp(1.08rem,1.7vw,1.3rem)", lineHeight: 1.55, color: "#574F42", margin: "24px 0 0", maxWidth: "68ch" }}>
              I build automations and small internal tools around the software your business already runs, so repetitive computer work stops needing a person every time.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 34 }}>
              <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "#C44E1E", color: "#FBF7EF", textDecoration: "none", fontWeight: 600, fontSize: 16, padding: "15px 24px", borderRadius: 12, boxShadow: "0 10px 24px -10px rgba(196,78,30,0.7)" }}>See what's automatable</a>
            </div>
          </div>
          <aside className="admin-profile-card" style={{ background: "#FFFFFF", border: "1px solid #EFE6D6", borderRadius: 24, padding: 28, boxShadow: "0 24px 60px -40px rgba(33,28,21,0.45)" }}>
            <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 12, fontWeight: 500, color: "#C44E1E", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 18px" }}>// who am I</p>
            <div className="admin-profile-row" style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 24 }}>
              <img className="admin-profile-image" src="/max-brooker-640.webp" alt="Max Brooker" style={{ width: 168, height: 168, borderRadius: 30, objectFit: "cover", objectPosition: "top", border: "1px solid #E7DECE" }} />
              <div>
                <p style={{ margin: 0, fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, fontSize: 30, letterSpacing: "-0.02em", whiteSpace: "nowrap" }}>Max Brooker</p>
                <p style={{ margin: "6px 0 0", color: "#7C715F", fontSize: 17, lineHeight: 1.45 }}>Cyber security engineer, software builder and automation expert.</p>
              </div>
            </div>
            <p style={{ margin: 0, color: "#574F42", lineHeight: 1.6, fontSize: 16 }}>
              I build practical software for businesses with disjointed computer work: automation systems, AI integrations, internal tools, data pipelines and the connective tissue between the tools you already use.
            </p>
          </aside>
        </div>
      </section>

      <section id="problems" style={{ background: "#FBF7EF", borderTop: "1px solid #ECE3D4", borderBottom: "1px solid #ECE3D4" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(54px,7vw,92px) 28px" }}>
          <div style={{ maxWidth: "62ch" }}>
            <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 13, fontWeight: 500, color: "#C44E1E", letterSpacing: "0.02em", margin: "0 0 18px" }}>Sound familiar?</p>
            <h2 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, color: "#211C15", fontSize: "clamp(1.9rem,3.6vw,2.9rem)", lineHeight: 1.08, letterSpacing: "-0.02em", margin: 0 }}>The work isn't complicated. It's just repeated too often, by hand.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginTop: 44 }}>
            {problemExamples.map((fit, index) => (
              <div key={fit} style={{ background: "#FFFFFF", border: "1px solid #EBE2D2", borderRadius: 16, padding: "24px 24px 26px", display: "flex", flexDirection: "column", gap: 14 }}>
                <span style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 13, color: "#B89F84" }}>{String(index + 1).padStart(2, "0")}</span>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.5, color: "#2C261D" }}>{fit}</p>
              </div>
            ))}
          </div>
          <p style={{ margin: "28px 0 0", color: "#574F42", fontSize: 16.5, lineHeight: 1.6, maxWidth: "58ch" }}>
            If your team does it every week by hand, it's probably worth a look, whether the fix is a small automation or a proper internal system.
          </p>
        </div>
      </section>

      <section id="capabilities" style={{ background: "#F4EEE3", borderBottom: "1px solid #ECE3D4" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(54px,7vw,92px) 28px" }}>
          <div style={{ maxWidth: "62ch" }}>
            <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 13, fontWeight: 500, color: "#C44E1E", letterSpacing: "0.02em", margin: "0 0 18px" }}>What I do</p>
            <h2 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, color: "#211C15", fontSize: "clamp(1.9rem,3.6vw,2.9rem)", lineHeight: 1.08, letterSpacing: "-0.02em", margin: 0 }}>Automation, internal tools and the messy handoffs between systems.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginTop: 44 }}>
            {capabilities.map((capability) => (
              <div key={capability.title} style={{ background: "#FFFFFF", border: "1px solid #EBE2D2", borderRadius: 18, padding: 28 }}>
                <h3 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, color: "#211C15", fontSize: "1.28rem", margin: "0 0 8px", letterSpacing: "-0.01em" }}>{capability.title}</h3>
                <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.55, color: "#5C5446" }}>{capability.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proof" style={{ background: "#F4EEE3", borderBottom: "1px solid #ECE3D4" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(54px,7vw,92px) 28px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
            {proofPoints.map((example) => (
              <div key={example.title} style={{ background: "#FFFFFF", border: "1px solid #EFE6D6", borderRadius: 18, padding: 28 }}>
                <p style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, color: "#211C15", fontSize: "clamp(1.8rem,2.7vw,2.55rem)", lineHeight: 1, margin: 0 }}>{example.title}</p>
                <p style={{ margin: "14px 0 0", fontSize: 16, lineHeight: 1.5, color: "#574F42" }}>{example.copy}</p>
              </div>
            ))}
            <div style={{ background: "#211C15", color: "#E7DCCB", borderRadius: 18, padding: 28 }}>
              <h3 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, color: "#FBF7EF", fontSize: "1.45rem", lineHeight: 1.15, margin: 0 }}>A team was losing about half a day a week rebuilding a report.</h3>
              <p style={{ margin: "14px 0 0", fontSize: 16, lineHeight: 1.55, color: "#E7DCCB" }}>I automated the reporting steps around their existing exports, so the team got that time back every Monday instead of piecing it together by hand.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="how" style={{ background: "#F4EEE3" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(64px,8vw,108px) 28px" }}>
          <div style={{ maxWidth: "60ch" }}>
            <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 13, fontWeight: 500, color: "#C44E1E", letterSpacing: "0.02em", margin: "0 0 18px" }}>How I work</p>
            <h2 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, color: "#211C15", fontSize: "clamp(1.9rem,3.6vw,2.9rem)", lineHeight: 1.08, letterSpacing: "-0.02em", margin: 0 }}>We work through the workflow together, then I map and build the right solution.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginTop: 44 }}>
            {workSteps.map((step) => (
              <div key={step.title} style={{ background: "#FFFFFF", border: "1px solid #EBE2D2", borderRadius: 18, padding: 28 }}>
                <h3 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, color: "#211C15", fontSize: "1.28rem", margin: "0 0 8px", letterSpacing: "-0.01em" }}>{step.title}</h3>
                <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.55, color: "#5C5446" }}>{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={{ background: "#FBF7EF", borderTop: "1px solid #ECE3D4" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(64px,8vw,108px) 28px" }}>
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <div style={{ textAlign: "center", margin: "0 auto 32px" }}>
              <h2 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, color: "#211C15", fontSize: "clamp(1.9rem,3.6vw,2.9rem)", lineHeight: 1.08, letterSpacing: "-0.03em", margin: 0 }}>Tell me what's slowing you down.</h2>
            </div>
            {submitted ? (
              <div style={{ background: "#FFFFFF", border: "1px solid #EBE2D2", borderRadius: 18, padding: "40px 32px", textAlign: "center", boxShadow: "0 18px 40px -28px rgba(33,28,21,0.35)" }}>
                <h3 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, color: "#211C15", fontSize: "1.4rem", margin: "0 0 8px" }}>Thanks. I have your message.</h3>
                <p style={{ margin: 0, color: "#5C5446", lineHeight: 1.55 }}>I will get back to you with a practical view on whether it is worth automating and what building it would involve.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} style={{ background: "#FFFFFF", border: "1px solid #EBE2D2", borderRadius: 18, padding: 28, display: "flex", flexDirection: "column", gap: 16, boxShadow: "0 18px 40px -28px rgba(33,28,21,0.35)" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, alignItems: "start" }}>
                  <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#211C15", minHeight: 32, display: "flex", alignItems: "flex-start" }}>Name</span>
                    <input type="text" required value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} style={inputStyle} />
                  </label>
                  <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#211C15", minHeight: 32, display: "flex", alignItems: "flex-start" }}>Email</span>
                    <input type="email" required value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} style={inputStyle} />
                  </label>
                  <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#211C15", minHeight: 32, display: "block", lineHeight: 1.25 }}>Best number to reach you <span style={{ color: "#8D806B", fontWeight: 500 }}>(optional)</span></span>
                    <input type="tel" value={formData.phone} onChange={(event) => setFormData({ ...formData, phone: event.target.value })} style={inputStyle} />
                  </label>
                </div>
                <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#211C15" }}>What's the task that's driving you mad?</span>
                  <textarea required rows={5} value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} placeholder="What does your team re-type, rename, check, chase or rebuild by hand?" style={{ ...inputStyle, resize: "vertical", lineHeight: 1.5 }} />
                </label>
                {error && <p style={{ margin: 0, color: "#B42318", fontSize: 14 }}>Something went wrong. Please try again.</p>}
                <button type="submit" disabled={sending} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 9, background: "#C44E1E", color: "#FBF7EF", border: "none", fontFamily: "inherit", fontWeight: 600, fontSize: 16, padding: "15px 24px", borderRadius: 12, cursor: sending ? "wait" : "pointer", marginTop: 4 }}>{sending ? "Sending..." : "Send it through"}</button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer style={{ background: "#211C15", color: "#A89B86" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "44px 28px", display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
            <img src="/brooker-mark-160.webp" alt="" style={{ width: 46, height: 46, borderRadius: 0, objectFit: "contain" }} />
            <span style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, fontSize: 17, color: "#F4EEE3" }}>Brooker Systems</span>
          </div>
          <p style={{ margin: 0, fontSize: 14, fontFamily: "'Spline Sans Mono', monospace" }}>Based in Perth, working with Australian businesses</p>
          <p style={{ margin: 0, fontSize: 13, color: "#7C715F" }}>© 2026 Brooker Systems</p>
        </div>
      </footer>
    </main>
  );
};

export default AdminAutomation;
