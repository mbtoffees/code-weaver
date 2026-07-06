import { FormEvent, useState } from "react";

const BOOKING_URL = import.meta.env.VITE_BOOKING_URL || "https://cal.com/maxbrooker/20-min-meeting";
const API_URL = import.meta.env.VITE_API_URL || "https://code-weaver-nine.vercel.app";
const GOOGLE_ADS_LEAD_CONVERSION = "AW-18270478625/Sp1XCPPchcUcEKHChYhE";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const trackLeadConversion = () => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return Promise.resolve();

  return new Promise<void>((resolve) => {
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      resolve();
    };

    window.setTimeout(finish, 1000);
    window.gtag?.("event", "conversion", {
      send_to: GOOGLE_ADS_LEAD_CONVERSION,
      value: 1.0,
      currency: "AUD",
      event_callback: finish,
    });
  });
};

const deliverables = [
  "A live, working web app you can send to customers, investors or your team",
  "Fast iteration using modern AI-assisted development, testing and delivery workflows",
  "Clean product design, practical user flows and real functionality — not just a mockup",
  "Auth, forms, dashboards, data flows, integrations or AI features where the product needs them",
  "A builder who can move quickly without the layers, meetings and overhead of a traditional agency",
];

const projects = [
  {
    name: "Equilytics",
    href: "https://equilytics.com.au",
    label: "Sports science platform",
    copy: "A specialist platform turning training plans, performance data and stable workflows into a usable product experience.",
  },
  {
    name: "Client Ready Solutions",
    href: "https://clientreadysolutions.com.au",
    label: "Service-business web presence",
    copy: "A polished, conversion-focused site built around trust, clarity and making the next enquiry easy.",
  },
  {
    name: "Vocabull",
    href: "https://vocabull.app",
    label: "Kindle vocabulary product",
    copy: "A niche app idea turned into a live interactive product for reviewing and playing with saved Kindle words.",
  },
];

const trustSignals = [
  "Live products delivered across SaaS, sports science, service-business and vocabulary-learning workflows",
  "Typical focused prototype builds start from A$3k+ depending on scope",
  "Perth-based solo builder with electrical engineering and cybersecurity experience",
];

const steps = [
  {
    title: "Tell me the idea",
    copy: "You bring the problem, rough notes, screenshots, spreadsheet, workflow or half-formed concept. I turn it into a clear build plan fast.",
  },
  {
    title: "I build quickly",
    copy: "I use modern tooling, AI-assisted development, my own QA harnesses and tight testing loops to move from idea to working product fast.",
  },
  {
    title: "You get a live link",
    copy: "You get something real to use, show, test, improve and keep building from — as quickly as the scope allows.",
  },
];

const inputStyle = {
  fontFamily: "inherit",
  fontSize: 15,
  color: "#1A1C20",
  padding: "12px 13px",
  border: "1px solid #D7D9D2",
  borderRadius: 8,
  background: "#FFFFFF",
  outline: "none",
} as const;

const AppPrototype = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    setError(false);

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          message: `[App prototype enquiry]\n\n${formData.message}`,
        }),
      });

      if (!res.ok) throw new Error("Failed to send");

      await trackLeadConversion();
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      window.location.assign("/thank-you");
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <main style={{ minHeight: "100vh", background: "#F6F6F1", color: "#1A1C20", fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(246,246,241,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #DEDFD8" }}>
        <div className="home-header-inner" style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px", height: 82, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 11, textDecoration: "none", color: "#1A1C20" }}>
            <img className="home-header-logo" src="/brooker-mark.png" alt="" style={{ width: 58, height: 58, objectFit: "contain" }} />
            <span className="home-header-name" style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 750, fontSize: 20 }}>Brooker Systems</span>
          </a>
          <nav className="home-header-nav" style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 14, fontWeight: 700 }}>
            <a className="home-header-cta" href="#contact" style={{ background: "#B64A22", color: "#FFFFFF", textDecoration: "none", padding: "11px 18px", borderRadius: 8 }}>Tell me your idea</a>
          </nav>
        </div>
      </header>

      <section style={{ background: "#F6F6F1", borderBottom: "1px solid #DEDFD8" }}>
        <div className="home-hero-inner" style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(48px,7vw,92px) 28px clamp(48px,7vw,86px)", display: "grid", gridTemplateColumns: "minmax(0, 1.08fr) minmax(300px, 0.92fr)", gap: "clamp(32px,6vw,68px)", alignItems: "center" }}>
          <div>
            <p className="home-hero-eyebrow" style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 13, fontWeight: 650, color: "#0E6C5D", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 20px" }}>App prototypes // MVPs // product ideas</p>
            <h1 className="home-hero-title" style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 780, color: "#1A1C20", fontSize: "clamp(2.75rem,6vw,5.2rem)", lineHeight: 1.01, letterSpacing: 0, margin: 0, maxWidth: "12ch" }}>
              Turn your app idea into a working product fast.
            </h1>
            <p style={{ fontSize: "clamp(1.08rem,1.6vw,1.28rem)", lineHeight: 1.58, color: "#4B535C", margin: "24px 0 0", maxWidth: "68ch" }}>
              I build high-quality apps and prototypes very quickly for founders, consultants and small teams. I'm Perth-based and use the latest tools, AI-assisted development and rigorous testing workflows to turn rough ideas into polished working products without agency overhead.
            </p>
            <div style={{ display: "grid", gap: 10, marginTop: 24, maxWidth: 760 }}>
              {trustSignals.map((signal) => (
                <div key={signal} style={{ display: "flex", gap: 10, alignItems: "flex-start", color: "#303840", fontSize: 15.5, lineHeight: 1.45 }}>
                  <span aria-hidden="true" style={{ color: "#0E6C5D", fontWeight: 900, lineHeight: 1.3 }}>✓</span>
                  <span>{signal}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 32 }}>
              <a href="#contact" style={{ display: "inline-flex", alignItems: "center", background: "#B64A22", color: "#FFFFFF", textDecoration: "none", fontWeight: 750, fontSize: 16, padding: "15px 22px", borderRadius: 8, boxShadow: "0 14px 28px -18px rgba(182,74,34,0.8)" }}>Tell me your idea</a>
              <a href="#examples" style={{ display: "inline-flex", alignItems: "center", background: "#FFFFFF", color: "#1A1C20", textDecoration: "none", fontWeight: 750, fontSize: 16, padding: "15px 22px", borderRadius: 8, border: "1px solid #D7D9D2" }}>See live examples</a>
            </div>
          </div>

          <aside className="home-profile-card" style={{ background: "#FFFFFF", border: "1px solid #DADDD6", borderRadius: 8, padding: 24, boxShadow: "0 24px 55px -42px rgba(26,28,32,0.45)" }}>
            <div className="home-profile-row" style={{ display: "grid", gridTemplateColumns: "132px minmax(0, 1fr)", gap: 20, alignItems: "center", marginBottom: 22 }}>
              <img className="home-profile-image" src="/max-brooker.jpg" alt="Max Brooker" style={{ width: 132, height: 132, borderRadius: 8, objectFit: "cover", objectPosition: "center 24%", border: "1px solid #D7D9D2" }} />
              <div>
                <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 12, fontWeight: 650, color: "#0E6C5D", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 8px" }}>Max Brooker</p>
                <p style={{ margin: 0, fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 780, fontSize: 28, lineHeight: 1.05 }}>Electrical engineer, cybersecurity background, app builder.</p>
              </div>
            </div>
            <div style={{ background: "#1A1C20", color: "#E7ECE7", borderRadius: 8, padding: 18 }}>
              <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.55 }}>
                I am an electrical engineer with cybersecurity experience. Now I build apps and web products for people, and I have become very good at turning ideas into polished, working software quickly.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section id="offer" style={{ background: "#FFFFFF", borderBottom: "1px solid #DEDFD8" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(58px,7vw,96px) 28px", display: "grid", gridTemplateColumns: "minmax(240px, 0.75fr) minmax(0, 1.25fr)", gap: "clamp(28px,5vw,58px)", alignItems: "start" }}>
          <div>
            <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 13, fontWeight: 650, color: "#0E6C5D", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 16px" }}>What you get</p>
            <h2 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 780, color: "#1A1C20", fontSize: "clamp(1.9rem,3.6vw,3rem)", lineHeight: 1.08, margin: 0 }}>
              Fast product builds without the agency slowdown.
            </h2>
            <p style={{ color: "#59616A", lineHeight: 1.62, margin: "18px 0 0", fontSize: 16.5 }}>
              Best for people who want a serious builder to move quickly, make smart product decisions and deliver something real without months of back-and-forth.
            </p>
          </div>
          <div style={{ display: "grid", gap: 14 }}>
            {deliverables.map((item, index) => (
              <article key={item} style={{ border: "1px solid #DADDD6", borderRadius: 8, padding: 20, background: "#F6F6F1", display: "grid", gridTemplateColumns: "44px minmax(0, 1fr)", gap: 16, alignItems: "start" }}>
                <p style={{ fontFamily: "'Spline Sans Mono', monospace", color: "#B64A22", fontSize: 13, margin: 0 }}>{String(index + 1).padStart(2, "0")}</p>
                <p style={{ margin: 0, color: "#252B31", fontSize: 16, lineHeight: 1.5 }}>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="examples" style={{ background: "#F6F6F1", borderBottom: "1px solid #DEDFD8" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(58px,7vw,96px) 28px" }}>
          <div style={{ maxWidth: "68ch" }}>
            <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 13, fontWeight: 650, color: "#0E6C5D", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 16px" }}>Live examples</p>
            <h2 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 780, color: "#1A1C20", fontSize: "clamp(1.9rem,3.6vw,3rem)", lineHeight: 1.08, margin: 0 }}>
              Some live projects I've built that are publicly available.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18, marginTop: 40 }}>
            {projects.map((project) => (
              <a key={project.name} href={project.href} target="_blank" rel="noreferrer" style={{ display: "flex", flexDirection: "column", minHeight: 260, background: "#FFFFFF", border: "1px solid #DADDD6", borderRadius: 8, padding: 24, textDecoration: "none", color: "#1A1C20", boxShadow: "0 18px 40px -34px rgba(26,28,32,0.55)" }}>
                <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 12, fontWeight: 650, color: "#0E6C5D", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 18px" }}>{project.label}</p>
                <h3 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 780, color: "#1A1C20", fontSize: "1.7rem", lineHeight: 1.05, margin: "0 0 14px" }}>{project.name}</h3>
                <p style={{ margin: 0, color: "#555E66", lineHeight: 1.58, fontSize: 15.8 }}>{project.copy}</p>
                <span style={{ marginTop: "auto", paddingTop: 26, color: "#B64A22", fontWeight: 750, fontSize: 15 }}>Open project →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="process" style={{ background: "#FFFFFF", borderBottom: "1px solid #DEDFD8" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(58px,7vw,96px) 28px" }}>
          <div style={{ maxWidth: "66ch" }}>
            <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 13, fontWeight: 650, color: "#0E6C5D", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 16px" }}>How it works</p>
            <h2 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 780, color: "#1A1C20", fontSize: "clamp(1.9rem,3.6vw,3rem)", lineHeight: 1.08, margin: 0 }}>
              Quick build cycles. Real product quality.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18, marginTop: 40 }}>
            {steps.map((step) => (
              <article key={step.title} style={{ background: "#FFFFFF", border: "1px solid #DADDD6", borderRadius: 8, padding: 24 }}>
                <h3 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 780, color: "#1A1C20", fontSize: "1.35rem", lineHeight: 1.15, margin: "0 0 10px" }}>{step.title}</h3>
                <p style={{ margin: 0, color: "#555E66", lineHeight: 1.58, fontSize: 15.8 }}>{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={{ background: "#EDF4F0" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(58px,7vw,98px) 28px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 30 }}>
              <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 13, fontWeight: 650, color: "#0E6C5D", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 16px" }}>Start here</p>
              <h2 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 780, color: "#1A1C20", fontSize: "clamp(2rem,3.6vw,3rem)", lineHeight: 1.08, margin: 0 }}>
                Send the idea. I will tell you what I would build first.
              </h2>
              <p style={{ color: "#59616A", lineHeight: 1.62, margin: "18px auto 0", fontSize: 17, maxWidth: "58ch" }}>
                A short description is enough. If it looks like a fit, we can use a 20-minute call to turn it into a fast, practical build plan.
              </p>
            </div>

            {submitted ? (
              <div style={{ background: "#FFFFFF", border: "1px solid #DADDD6", borderRadius: 8, padding: "38px 28px", textAlign: "center" }}>
                <h3 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 780, color: "#1A1C20", fontSize: "1.45rem", margin: "0 0 8px" }}>Thanks. I have your idea.</h3>
                <p style={{ margin: 0, color: "#59616A", lineHeight: 1.55 }}>I will come back with a practical view of how I would build it quickly and well.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} style={{ background: "#FFFFFF", border: "1px solid #DADDD6", borderRadius: 8, padding: 24, display: "flex", flexDirection: "column", gap: 16, boxShadow: "0 18px 40px -34px rgba(26,28,32,0.55)" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, alignItems: "start" }}>
                  <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#1A1C20" }}>Name</span>
                    <input type="text" required value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} style={inputStyle} />
                  </label>
                  <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#1A1C20" }}>Email</span>
                    <input type="email" required value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} style={inputStyle} />
                  </label>
                  <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#1A1C20" }}>Phone <span style={{ color: "#7E8983", fontWeight: 500 }}>(optional)</span></span>
                    <input type="tel" value={formData.phone} onChange={(event) => setFormData({ ...formData, phone: event.target.value })} style={inputStyle} />
                  </label>
                </div>
                <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#1A1C20" }}>What is the app idea?</span>
                  <textarea required rows={5} value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} placeholder="What should it do, who is it for, and what would make it valuable?" style={{ ...inputStyle, resize: "vertical", lineHeight: 1.5 }} />
                </label>
                {error && <p style={{ margin: 0, color: "#B42318", fontSize: 14 }}>Something went wrong. Please try again or book a call instead.</p>}
                <button type="submit" disabled={sending} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#B64A22", color: "#FFFFFF", border: "none", fontFamily: "inherit", fontWeight: 750, fontSize: 16, padding: "15px 22px", borderRadius: 8, cursor: sending ? "wait" : "pointer" }}>{sending ? "Sending..." : "Send the idea"}</button>
                <a href={BOOKING_URL} target="_blank" rel="noreferrer" onClick={() => void trackLeadConversion()} style={{ textAlign: "center", color: "#0E6C5D", fontWeight: 750, textDecoration: "none", fontSize: 15 }}>Or book a 20-minute call</a>
              </form>
            )}
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

export default AppPrototype;
