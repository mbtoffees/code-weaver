import SiteHeader from "@/components/SiteHeader";
import ContactFormSection from "@/components/ContactFormSection";
import SEO, { serviceJsonLd } from "@/components/SEO";

export type ServicePageContent = {
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  bullets: string[];
  examples: string[];
  process: string[];
};

const BOOKING_URL = import.meta.env.VITE_BOOKING_URL || "https://cal.com/maxbrooker/20-min-meeting";

const pageStyle = {
  minHeight: "100vh",
  background: "#F6F6F1",
  color: "#1A1C20",
  fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
} as const;

const sectionStyle = {
  maxWidth: 1180,
  margin: "0 auto",
  padding: "clamp(54px,7vw,92px) 28px",
} as const;

const cardStyle = {
  background: "#FFFFFF",
  border: "1px solid #DADDD6",
  borderRadius: 10,
  padding: 24,
} as const;

const ServicePage = ({ content }: { content: ServicePageContent }) => (
  <main style={pageStyle}>
    <SEO
      title={`${content.title} | Brooker Systems`}
      description={content.description}
      path={content.path}
      jsonLd={serviceJsonLd(content.title, content.description, content.path)}
    />
    <SiteHeader />

    <section style={{ background: "#F6F6F1", borderBottom: "1px solid #DEDFD8" }}>
      <div className="home-hero-inner" style={{ ...sectionStyle, display: "grid", gridTemplateColumns: "minmax(0, 1.08fr) minmax(300px, 0.92fr)", gap: "clamp(32px,6vw,68px)", alignItems: "center" }}>
        <div>
          <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 13, fontWeight: 650, color: "#0E6C5D", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 20px" }}>{content.eyebrow}</p>
          <h1 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 780, color: "#1A1C20", fontSize: "clamp(2.6rem,5.8vw,4.9rem)", lineHeight: 1.02, margin: 0, maxWidth: "13ch" }}>
            {content.title}
          </h1>
          <p style={{ fontSize: "clamp(1.08rem,1.6vw,1.26rem)", lineHeight: 1.58, color: "#4B535C", margin: "24px 0 0", maxWidth: "68ch" }}>{content.intro}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 32 }}>
            <a href={BOOKING_URL} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", background: "#B64A22", color: "#FFFFFF", textDecoration: "none", fontWeight: 750, fontSize: 16, padding: "15px 22px", borderRadius: 8 }}>Book a 20-minute call</a>
            <a href="#contact" style={{ display: "inline-flex", alignItems: "center", background: "#FFFFFF", color: "#1A1C20", textDecoration: "none", fontWeight: 750, fontSize: 16, padding: "15px 22px", borderRadius: 8, border: "1px solid #D7D9D2" }}>Send an enquiry</a>
          </div>
        </div>
        <aside style={{ ...cardStyle, boxShadow: "0 24px 55px -42px rgba(26,28,32,0.45)" }}>
          <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 12, fontWeight: 650, color: "#0E6C5D", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 14px" }}>What this covers</p>
          <div style={{ display: "grid", gap: 12 }}>
            {content.bullets.map((bullet) => (
              <p key={bullet} style={{ margin: 0, color: "#303840", fontSize: 15.5, lineHeight: 1.45 }}><span style={{ color: "#0E6C5D", fontWeight: 900 }}>✓ </span>{bullet}</p>
            ))}
          </div>
        </aside>
      </div>
    </section>

    <section style={{ background: "#FFFFFF", borderBottom: "1px solid #DEDFD8" }}>
      <div style={sectionStyle}>
        <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 13, fontWeight: 650, color: "#0E6C5D", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 16px" }}>Examples</p>
        <h2 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 780, fontSize: "clamp(1.9rem,3.6vw,3rem)", lineHeight: 1.08, margin: 0 }}>The shape depends on the job.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18, marginTop: 40 }}>
          {content.examples.map((example, index) => (
            <article key={example} style={{ ...cardStyle, background: "#F6F6F1" }}>
              <p style={{ fontFamily: "'Spline Sans Mono', monospace", color: "#B64A22", fontSize: 13, margin: "0 0 18px" }}>{String(index + 1).padStart(2, "0")}</p>
              <p style={{ margin: 0, color: "#252B31", fontSize: 16, lineHeight: 1.5 }}>{example}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section style={{ background: "#F6F6F1" }}>
      <div style={sectionStyle}>
        <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 13, fontWeight: 650, color: "#0E6C5D", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 16px" }}>How it usually works</p>
        <h2 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 780, fontSize: "clamp(1.9rem,3.6vw,3rem)", lineHeight: 1.08, margin: 0 }}>Clear scope first. Then useful software.</h2>
        <div style={{ display: "grid", gap: 0, marginTop: 34, borderTop: "1px solid #DADDD6" }}>
          {content.process.map((step, index) => (
            <div key={step} style={{ display: "grid", gridTemplateColumns: "48px minmax(0, 1fr)", gap: 18, padding: "20px 0", borderBottom: "1px solid #DADDD6" }}>
              <p style={{ margin: 0, fontFamily: "'Spline Sans Mono', monospace", color: "#B64A22", fontSize: 13 }}>{String(index + 1).padStart(2, "0")}</p>
              <p style={{ margin: 0, color: "#303840", fontSize: 17, lineHeight: 1.55 }}>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <ContactFormSection source={`${content.title} enquiry`} />
  </main>
);

export default ServicePage;
