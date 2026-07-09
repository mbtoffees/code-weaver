const ThankYou = () => {
  return (
    <main style={{ minHeight: "100vh", background: "#F4EEE3", color: "#211C15", fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", display: "flex", alignItems: "center" }}>
      <section style={{ width: "100%" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "80px 28px" }}>
          <a href="/" style={{ display: "inline-flex", alignItems: "center", gap: 11, textDecoration: "none", color: "#211C15", marginBottom: 42 }}>
            <img src="/brooker-mark-160.webp" alt="" style={{ width: 58, height: 58, borderRadius: 0, objectFit: "contain" }} />
            <span style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, fontSize: 19, letterSpacing: "-0.01em" }}>Brooker Systems</span>
          </a>
          <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 13, fontWeight: 500, color: "#C44E1E", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 18px" }}>Message sent</p>
          <h1 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, color: "#211C15", fontSize: "clamp(2.4rem,5vw,4.4rem)", lineHeight: 1.02, letterSpacing: "-0.035em", margin: 0 }}>
            Thanks. I have your message.
          </h1>
          <p style={{ fontSize: "clamp(1.05rem,1.7vw,1.25rem)", lineHeight: 1.6, color: "#574F42", margin: "22px 0 0", maxWidth: "42ch" }}>
            I will get back to you with a practical view on whether the task is worth automating and what building it would involve.
          </p>
          <a href="/" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#C44E1E", color: "#FBF7EF", textDecoration: "none", fontWeight: 600, fontSize: 16, padding: "15px 24px", borderRadius: 12, marginTop: 34 }}>
            Back to Brooker Systems
          </a>
        </div>
      </section>
    </main>
  );
};

export default ThankYou;
