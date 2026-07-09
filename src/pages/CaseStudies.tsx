import SiteHeader from "@/components/SiteHeader";
import ContactFormSection from "@/components/ContactFormSection";
import SEO, { businessJsonLd } from "@/components/SEO";

const caseStudies = [
  {
    title: "Quote/spec compliance workflow for a construction business",
    type: "Construction operations",
    problem: "Reviewing quote documents against specifications was slow, manual and hard to keep consistent.",
    solution: "A structured review workflow with document parsing, rule checks, evidence-linked findings and human review points.",
    result: "A clearer internal process for checking documents, recording findings and reducing repeated review effort.",
  },
  {
    title: "Crypto tax fact-finding portal",
    type: "Client intake app",
    problem: "Crypto tax clients needed a cleaner way to provide information, wallets, transaction context and supporting evidence.",
    solution: "A web portal for structured client intake, evidence capture and guided fact-finding before professional review.",
    result: "A more organised intake process and a product foundation that can be tested with real accounting/tax workflows.",
  },
  {
    title: "Specialist software product prototypes",
    type: "App prototypes",
    problem: "Product ideas needed to become working software quickly enough to test with users and stakeholders.",
    solution: "Fast full-stack builds with forms, data flows, dashboards, accounts, testing and deployment.",
    result: "Live products and prototypes that can be shown, tested and improved instead of remaining as mockups or documents.",
  },
];

const CaseStudies = () => (
  <main style={{ minHeight: "100vh", background: "#F6F6F1", color: "#1A1C20", fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
    <SEO
      title="Case Studies | Brooker Systems"
      description="Anonymised examples of Brooker Systems work across construction workflow automation, client intake apps and fast app prototypes."
      path="/case-studies"
      jsonLd={businessJsonLd}
    />
    <SiteHeader />

    <section style={{ borderBottom: "1px solid #DEDFD8" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(58px,8vw,108px) 28px" }}>
        <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 13, fontWeight: 650, color: "#0E6C5D", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 20px" }}>Proof // examples // systems built</p>
        <h1 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 780, color: "#1A1C20", fontSize: "clamp(2.7rem,6vw,5rem)", lineHeight: 1.02, margin: 0, maxWidth: "12ch" }}>Case studies and project examples.</h1>
        <p style={{ fontSize: "clamp(1.08rem,1.6vw,1.26rem)", lineHeight: 1.58, color: "#4B535C", margin: "24px 0 0", maxWidth: "70ch" }}>
          A few practical examples of the kind of software, automation and workflow systems Brooker Systems builds. Some client details are anonymised where the work is internal or commercially sensitive.
        </p>
      </div>
    </section>

    <section style={{ background: "#FFFFFF" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(54px,7vw,92px) 28px", display: "grid", gap: 18 }}>
        {caseStudies.map((item) => (
          <article key={item.title} style={{ background: "#F6F6F1", border: "1px solid #DADDD6", borderRadius: 10, padding: 26 }}>
            <p style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 12, fontWeight: 650, color: "#0E6C5D", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 12px" }}>{item.type}</p>
            <h2 style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontWeight: 780, fontSize: "clamp(1.55rem,2.6vw,2.25rem)", lineHeight: 1.08, margin: "0 0 18px" }}>{item.title}</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
              <p style={{ margin: 0, color: "#555E66", lineHeight: 1.58 }}><strong style={{ color: "#1A1C20" }}>Problem:</strong> {item.problem}</p>
              <p style={{ margin: 0, color: "#555E66", lineHeight: 1.58 }}><strong style={{ color: "#1A1C20" }}>Solution:</strong> {item.solution}</p>
              <p style={{ margin: 0, color: "#555E66", lineHeight: 1.58 }}><strong style={{ color: "#1A1C20" }}>Result:</strong> {item.result}</p>
            </div>
          </article>
        ))}
      </div>
    </section>

    <ContactFormSection source="Case studies enquiry" />
  </main>
);

export default CaseStudies;
