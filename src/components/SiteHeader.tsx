const BOOKING_URL = import.meta.env.VITE_BOOKING_URL || "https://cal.com/maxbrooker/20-min-meeting";

const SiteHeader = () => {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(246,246,241,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #DEDFD8" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 28px", height: 78, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "#1A1C20" }}>
          <img src="/brooker-mark-160.webp" alt="Brooker Systems" style={{ height: 30, width: "auto", display: "block" }} />
          <span style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 700, fontSize: 19 }}>Brooker Systems</span>
        </a>
        <nav style={{ display: "flex", alignItems: "center", gap: 22, fontSize: 14.5, fontWeight: 600 }}>
          <a href={BOOKING_URL} target="_blank" rel="noreferrer" style={{ background: "#B64A22", color: "#FFFFFF", textDecoration: "none", padding: "11px 18px", borderRadius: 8, fontWeight: 650 }}>Book a call</a>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
