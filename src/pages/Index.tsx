import { FormEvent, useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SEO from "@/components/SEO";
import { businessJsonLd } from "@/components/seoData";

const BOOKING_URL = import.meta.env.VITE_BOOKING_URL || "https://cal.com/maxbrooker/20-min-meeting";
const CONTACT_EMAIL = "max@brookersystems.com.au";

const inputStyle = {
  fontFamily: "inherit",
  fontSize: 15,
  padding: "11px 12px",
  border: "1px solid #D7D9D2",
  borderRadius: 8,
  outline: "none",
} as const;

const Index = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = [
      "Source: Homepage enquiry",
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      "",
      formData.message,
    ].join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Website enquiry")}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main style={{ minHeight: "100vh", background: "#F6F6F1", color: "#1A1C20", fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", WebkitFontSmoothing: "antialiased" }}>
      <SEO
        title="Brooker Systems | Apps, Agents & Automations"
        description="Brooker Systems helps Australian businesses build apps, agents and automations for real business workflows."
        path="/"
        jsonLd={businessJsonLd}
      />
      <SiteHeader />

      <section style={{ borderBottom: "1px solid #DEDFD8" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "clamp(52px,7vw,88px) 28px clamp(52px,7vw,80px)", display: "grid", gridTemplateColumns: "minmax(0, 1.15fr) minmax(280px, 0.85fr)", gap: "clamp(32px,6vw,64px)", alignItems: "center" }}>
          <div>
            <h1 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 750, fontSize: "clamp(2.5rem,5.4vw,4.4rem)", lineHeight: 1.04, margin: 0, maxWidth: "20ch" }}>
              I build software for businesses.
            </h1>
            <p style={{ fontSize: "clamp(1.05rem,1.5vw,1.22rem)", lineHeight: 1.6, color: "#4B535C", margin: "22px 0 0", maxWidth: "54ch" }}>
              Sometimes that's an app or a portal a business needs and can't buy off the shelf. More often it's getting the systems you already pay for to work together, so nobody is copying the same job into three of them.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 30 }}>
              <a href={BOOKING_URL} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", background: "#B64A22", color: "#FFFFFF", textDecoration: "none", fontWeight: 650, fontSize: 16, padding: "15px 22px", borderRadius: 8 }}>Book a 20-minute call</a>
              <a href="#contact" style={{ display: "inline-flex", alignItems: "center", background: "#FFFFFF", color: "#1A1C20", textDecoration: "none", fontWeight: 650, fontSize: 16, padding: "15px 22px", borderRadius: 8, border: "1px solid #D7D9D2" }}>Send an enquiry</a>
            </div>
          </div>

          <aside style={{ background: "#FFFFFF", border: "1px solid #DADDD6", borderRadius: 12, padding: 24, boxShadow: "0 24px 55px -42px rgba(26,28,32,0.45)" }}>
            <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
              <img src="/max-brooker-640.webp" alt="Max Brooker" style={{ width: 104, height: 104, borderRadius: 10, objectFit: "cover", flex: "none" }} />
              <div>
                <p style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, fontSize: 21, margin: 0 }}>Max Brooker</p>
                <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 12, color: "#0E6C5D", letterSpacing: "0.06em", textTransform: "uppercase", margin: "6px 0 0" }}>Perth, Western Australia</p>
              </div>
            </div>
            <p style={{ margin: "18px 0 0", color: "#59616A", fontSize: 15.5, lineHeight: 1.55 }}>
              Former cybersecurity consultant, now building software full time. You deal with me directly, start to finish.
            </p>
          </aside>
        </div>
      </section>

      <section id="services" style={{ background: "#FFFFFF", borderBottom: "1px solid #DEDFD8" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "clamp(56px,7vw,88px) 28px" }}>
          <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 12.5, fontWeight: 500, color: "#0E6C5D", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 14px" }}>What I do</p>
          <h2 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 750, fontSize: "clamp(1.8rem,3.4vw,2.7rem)", lineHeight: 1.1, margin: 0, maxWidth: "26ch" }}>Three kinds of jobs.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(258px, 1fr))", gap: 18, marginTop: 38 }}>
            <article style={{ background: "#F6F6F1", border: "1px solid #DADDD6", borderRadius: 8, padding: 24 }}>
              <h3 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, fontSize: "1.4rem", lineHeight: 1.15, margin: "0 0 10px" }}>Getting your systems to talk</h3>
              <p style={{ color: "#555E66", lineHeight: 1.6, fontSize: 15.5, margin: 0 }}>Most of my work. A job entered once shows up everywhere it needs to, so quotes, invoices, timesheets and job records stay in step instead of being retyped.</p>
              <p style={{ margin: "14px 0 0", color: "#4B535C", lineHeight: 1.55, fontSize: 14.5 }}>Some tools I've used: Xero, MYOB, Simpro, ServiceM8, Procore, HubSpot, Salesforce, Monday.com, Zoho — and others.</p>
            </article>
            <article style={{ background: "#F6F6F1", border: "1px solid #DADDD6", borderRadius: 8, padding: 24 }}>
              <h3 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, fontSize: "1.4rem", lineHeight: 1.15, margin: "0 0 10px" }}>Making a process run itself</h3>
              <p style={{ color: "#555E66", lineHeight: 1.6, fontSize: 15.5, margin: 0 }}>The steps somebody does by hand every week. Enquiries routed to the right person, approvals chased, documents filed where they belong, the Monday morning report just arriving.</p>
            </article>
            <article style={{ background: "#F6F6F1", border: "1px solid #DADDD6", borderRadius: 8, padding: 24 }}>
              <h3 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, fontSize: "1.4rem", lineHeight: 1.15, margin: "0 0 10px" }}>Building a tool for your team</h3>
              <p style={{ color: "#555E66", lineHeight: 1.6, fontSize: 15.5, margin: 0 }}>When nothing on the market fits how you work. Something your staff or customers log into: a portal, an internal tool, a dashboard your managers actually look at.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="process" style={{ background: "#FFFFFF", borderBottom: "1px solid #DEDFD8" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 28px clamp(56px,7vw,88px)" }}>
          <div style={{ borderTop: "1px solid #E4E5DE", paddingTop: "clamp(44px,5vw,60px)" }}>
            <div style={{ marginBottom: 34 }}>
              <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 12.5, color: "#0E6C5D", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 14px" }}>How it works</p>
              <h2 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 750, fontSize: "clamp(1.6rem,2.6vw,2.1rem)", lineHeight: 1.12, margin: 0 }}>Small first, then build on it.</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 28 }}>
              <div>
                <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 12.5, color: "#9AA29B", margin: "0 0 10px" }}>01</p>
                <h3 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, fontSize: "1.15rem", margin: "0 0 8px" }}>We talk through the problem</h3>
                <p style={{ color: "#555E66", lineHeight: 1.6, fontSize: 15.5, margin: 0 }}>Twenty minutes on what's manual today and what it costs you. No jargon required.</p>
              </div>
              <div>
                <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 12.5, color: "#9AA29B", margin: "0 0 10px" }}>02</p>
                <h3 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, fontSize: "1.15rem", margin: "0 0 8px" }}>You get a plan in writing</h3>
                <p style={{ color: "#555E66", lineHeight: 1.6, fontSize: 15.5, margin: 0 }}>What I'd build, what it does, the cost and how long it takes, all before anything starts.</p>
              </div>
              <div>
                <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 12.5, color: "#9AA29B", margin: "0 0 10px" }}>03</p>
                <h3 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, fontSize: "1.15rem", margin: "0 0 8px" }}>We start with one piece</h3>
                <p style={{ color: "#555E66", lineHeight: 1.6, fontSize: 15.5, margin: 0 }}>One process, working properly, tested on your real data. If it earns its keep, we do the next one.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" style={{ background: "#FFFFFF", borderBottom: "1px solid #DEDFD8" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "clamp(56px,7vw,88px) 28px" }}>
          <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 12.5, color: "#0E6C5D", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 14px" }}>Work</p>
          <h2 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 750, fontSize: "clamp(1.8rem,3.4vw,2.7rem)", lineHeight: 1.1, margin: 0, maxWidth: "24ch" }}>Products I've made.</h2>
          <p style={{ color: "#59616A", lineHeight: 1.6, margin: "16px 0 0", fontSize: 16, maxWidth: "58ch" }}>Most of what I build sits inside a business and never sees daylight. Here are three that do, so you can click around and judge the work yourself.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(258px, 1fr))", gap: 18, marginTop: 38 }}>
            <a href="https://equilytics.com.au" target="_blank" rel="noreferrer" style={{ display: "flex", flexDirection: "column", minHeight: 210, background: "#F6F6F1", border: "1px solid #DADDD6", borderRadius: 8, padding: 24, textDecoration: "none", color: "#1A1C20" }}>
              <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 11.5, color: "#0E6C5D", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 16px" }}>Built for a client</p>
              <h3 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, fontSize: "1.5rem", lineHeight: 1.1, margin: "0 0 12px" }}>Equilytics</h3>
              <p style={{ color: "#555E66", lineHeight: 1.6, fontSize: 15.5, margin: 0 }}>Training plans, performance data and day-to-day stable operations in one place, for horse trainers.</p>
              <span style={{ marginTop: "auto", paddingTop: 22, color: "#B64A22", fontWeight: 650, fontSize: 14.5 }}>View site →</span>
            </a>
            <a href="https://clientreadysolutions.com.au" target="_blank" rel="noreferrer" style={{ display: "flex", flexDirection: "column", minHeight: 210, background: "#F6F6F1", border: "1px solid #DADDD6", borderRadius: 8, padding: 24, textDecoration: "none", color: "#1A1C20" }}>
              <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 11.5, color: "#0E6C5D", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 16px" }}>Co-founded</p>
              <h3 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, fontSize: "1.5rem", lineHeight: 1.1, margin: "0 0 12px" }}>Client Ready Solutions</h3>
              <p style={{ color: "#555E66", lineHeight: 1.6, fontSize: 15.5, margin: 0 }}>A business I co-founded. Our product, Gather, turns end-of-year data collection into a proper workflow and produces the workpapers at the end of it.</p>
              <span style={{ marginTop: "auto", paddingTop: 22, color: "#B64A22", fontWeight: 650, fontSize: 14.5 }}>View site →</span>
            </a>
            <a href="https://vocabull.app" target="_blank" rel="noreferrer" style={{ display: "flex", flexDirection: "column", minHeight: 210, background: "#F6F6F1", border: "1px solid #DADDD6", borderRadius: 8, padding: 24, textDecoration: "none", color: "#1A1C20" }}>
              <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 11.5, color: "#0E6C5D", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 16px" }}>Built for myself</p>
              <h3 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, fontSize: "1.5rem", lineHeight: 1.1, margin: "0 0 12px" }}>Vocabull</h3>
              <p style={{ color: "#555E66", lineHeight: 1.6, fontSize: 15.5, margin: 0 }}>Turns the words I looked up on my Kindle into quick practice games so they stick. A weekend idea that other people ended up using.</p>
              <span style={{ marginTop: "auto", paddingTop: 22, color: "#B64A22", fontWeight: 650, fontSize: 14.5 }}>View site →</span>
            </a>
          </div>
        </div>
      </section>

      <section id="contact" style={{ background: "#EDF4F0", scrollMarginTop: 88 }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "clamp(56px,7vw,92px) 28px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(28px,4vw,48px)", alignItems: "start" }}>
            <div>
              <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 12.5, color: "#0E6C5D", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 14px" }}>Get in touch</p>
              <h2 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 750, fontSize: "clamp(1.9rem,3.6vw,2.8rem)", lineHeight: 1.08, margin: 0, maxWidth: "16ch" }}>Tell me what's taking too long.</h2>
              <p style={{ margin: "20px 0 0", fontSize: 16 }}><a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "#0E6C5D", fontWeight: 650, textDecoration: "none" }}>{CONTACT_EMAIL}</a></p>
            </div>
            {submitted ? (
              <div style={{ background: "#FFFFFF", border: "1px solid #DADDD6", borderRadius: 10, padding: "30px 24px", boxShadow: "0 18px 40px -34px rgba(26,28,32,0.55)" }}>
                <h3 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, fontSize: "1.3rem", margin: "0 0 8px" }}>Thanks. I have your message.</h3>
                <p style={{ margin: 0, color: "#59616A", lineHeight: 1.55 }}>I'll get back to you with a practical view of whether it's worth automating.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} style={{ background: "#FFFFFF", border: "1px solid #DADDD6", borderRadius: 10, padding: 22, display: "flex", flexDirection: "column", gap: 14, boxShadow: "0 18px 40px -34px rgba(26,28,32,0.55)" }}>
                <label style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 13, fontWeight: 650 }}>
                  Name
                  <input type="text" required value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} style={inputStyle} />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 13, fontWeight: 650 }}>
                  Email
                  <input type="email" required value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} style={inputStyle} />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 13, fontWeight: 650 }}>
                  What's the job?
                  <textarea required rows={4} value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} placeholder="e.g. every invoice gets entered twice, once in Simpro and once in Xero." style={{ ...inputStyle, resize: "vertical", lineHeight: 1.5 }} />
                </label>
                <button type="submit" style={{ background: "#B64A22", color: "#FFFFFF", border: "none", fontFamily: "inherit", fontWeight: 650, fontSize: 16, padding: "14px 22px", borderRadius: 8, cursor: "pointer" }}>Send enquiry</button>
                <a href={BOOKING_URL} target="_blank" rel="noreferrer" style={{ textAlign: "center", color: "#0E6C5D", fontWeight: 650, textDecoration: "none", fontSize: 14.5 }}>Or book a 20-minute call</a>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer style={{ background: "#1A1C20", color: "#ACB7B0" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "34px 28px", display: "flex", flexWrap: "wrap", gap: 18, alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img src="/brooker-mark-160.webp" alt="" style={{ height: 26, width: "auto", display: "block" }} />
            <span style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, fontSize: 16, color: "#FFFFFF" }}>Brooker Systems</span>
          </div>
          <p style={{ fontSize: 13.5, fontFamily: "'Spline Sans Mono', monospace", margin: 0 }}>Perth, Western Australia</p>
          <p style={{ fontSize: 13, color: "#7E8983", margin: 0 }}>© 2026 Brooker Systems</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
