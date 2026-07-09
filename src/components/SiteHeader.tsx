import { useState } from "react";

const BOOKING_URL = import.meta.env.VITE_BOOKING_URL || "https://cal.com/maxbrooker/20-min-meeting";

const services = [
  { label: "Apps", href: "/apps", copy: "Web apps, portals, products and internal tools" },
  { label: "Agents", href: "/agents", copy: "AI-assisted workflows and operational agents" },
  { label: "Automations", href: "/automations", copy: "Business processes, integrations and repeated work" },
];

const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(246,246,241,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #DEDFD8" }}>
      <div className="home-header-inner" style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px", height: 82, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 11, textDecoration: "none", color: "#1A1C20" }}>
          <img className="home-header-logo" src="/brooker-mark.png" alt="" style={{ width: 58, height: 58, objectFit: "contain" }} />
          <span className="home-header-name" style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 750, fontSize: 20, letterSpacing: "0" }}>Brooker Systems</span>
        </a>

        <nav className="home-header-nav" style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 14, fontWeight: 700, position: "relative" }}>
          <div style={{ position: "relative" }}>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-haspopup="menu"
              style={{ border: 0, background: "transparent", color: "#4B535C", font: "inherit", fontWeight: 750, cursor: "pointer", padding: "10px 0" }}
            >
              Services
            </button>
            {open ? (
              <div role="menu" style={{ position: "absolute", top: "calc(100% + 12px)", right: 0, width: 310, background: "#FFFFFF", border: "1px solid #DADDD6", borderRadius: 10, boxShadow: "0 24px 55px -42px rgba(26,28,32,0.55)", padding: 8 }}>
                {services.map((service) => (
                  <a
                    key={service.href}
                    href={service.href}
                    role="menuitem"
                    style={{ display: "block", textDecoration: "none", color: "#1A1C20", padding: "12px 13px", borderRadius: 8 }}
                  >
                    <span style={{ display: "block", fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 780, fontSize: 17 }}>{service.label}</span>
                    <span style={{ display: "block", color: "#59616A", fontWeight: 500, fontSize: 13.5, lineHeight: 1.35, marginTop: 3 }}>{service.copy}</span>
                  </a>
                ))}
              </div>
            ) : null}
          </div>
          <a className="home-header-cta" href={BOOKING_URL} target="_blank" rel="noreferrer" style={{ background: "#B64A22", color: "#FFFFFF", textDecoration: "none", padding: "11px 18px", borderRadius: 8 }}>Book a call</a>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
