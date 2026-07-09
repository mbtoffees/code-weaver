import { FormEvent, useState } from "react";

const BOOKING_URL = import.meta.env.VITE_BOOKING_URL || "https://cal.com/maxbrooker/20-min-meeting";
const API_URL = import.meta.env.VITE_API_URL || "https://code-weaver-nine.vercel.app";

type ContactFormSectionProps = {
  source?: string;
  heading?: string;
  messagePlaceholder?: string;
};

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

const ContactFormSection = ({
  source = "Website enquiry",
  heading = "Book a call or send the idea through.",
  messagePlaceholder = "Tell me about the app, workflow, tools involved, or business process you want to improve.",
}: ContactFormSectionProps) => {
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
          message: `[${source}]\n\n${formData.message}`,
        }),
      });

      if (!res.ok) throw new Error("Failed to send");

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" style={{ background: "#EDF4F0", scrollMarginTop: 92 }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(58px,7vw,98px) 28px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 30 }}>
            <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 13, fontWeight: 650, color: "#0E6C5D", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 16px" }}>Contact</p>
            <h2 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 780, color: "#1A1C20", fontSize: "clamp(2rem,4.6vw,4rem)", lineHeight: 1.08, letterSpacing: "0", margin: "0 auto", maxWidth: "14ch" }}>
              {heading}
            </h2>
          </div>

          {submitted ? (
            <div style={{ background: "#FFFFFF", border: "1px solid #DADDD6", borderRadius: 8, padding: "38px 28px", textAlign: "center" }}>
              <h3 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 780, color: "#1A1C20", fontSize: "1.45rem", margin: "0 0 8px" }}>Thanks. I have your message.</h3>
              <p style={{ margin: 0, color: "#59616A", lineHeight: 1.55 }}>I will come back with a practical view of what could be automated or built.</p>
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
                <span style={{ fontSize: 13, fontWeight: 700, color: "#1A1C20" }}>What do you want built or improved?</span>
                <textarea required rows={5} value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} placeholder={messagePlaceholder} style={{ ...inputStyle, resize: "vertical", lineHeight: 1.5 }} />
              </label>
              {error && <p style={{ margin: 0, color: "#B42318", fontSize: 14 }}>Something went wrong. Please try again or book a call instead.</p>}
              <button type="submit" disabled={sending} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#B64A22", color: "#FFFFFF", border: "none", fontFamily: "inherit", fontWeight: 750, fontSize: 16, padding: "15px 22px", borderRadius: 8, cursor: sending ? "wait" : "pointer" }}>{sending ? "Sending..." : "Send enquiry"}</button>
              <a href={BOOKING_URL} target="_blank" rel="noreferrer" style={{ textAlign: "center", color: "#0E6C5D", fontWeight: 750, textDecoration: "none", fontSize: 15 }}>Or book a 20-minute call</a>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
