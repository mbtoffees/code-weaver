import ServicePage from "./ServicePage";

const BusinessAutomation = () => (
  <ServicePage
    content={{
      path: "/business-automation",
      eyebrow: "workflow automation // internal tools // operations",
      title: "Business process automation",
      description:
        "Brooker Systems builds practical automation and internal tools for Australian businesses with repeated computer work, messy handoffs and spreadsheet-heavy processes.",
      intro:
        "When your team repeats the same computer task every week, there is usually a better way. I build small systems, automations, dashboards and AI-assisted review workflows that fit around the tools your business already uses.",
      bullets: [
        "Automate repeated computer work, reporting and admin handoffs",
        "Replace fragile spreadsheets with focused internal tools",
        "Use AI carefully for document review, extraction and triage",
        "Keep humans in the loop where judgement or approval matters",
      ],
      examples: [
        "A weekly report is rebuilt from exports automatically instead of by hand.",
        "Documents are uploaded, classified, checked against rules and sent for review.",
        "A spreadsheet-based workflow becomes a simple app with status, notes and audit history.",
        "Emails, forms and data exports feed into a clean operations dashboard.",
      ],
      process: [
        "Watch the current manual process",
        "Identify the step that wastes the most time or causes mistakes",
        "Build a focused first version",
        "Iterate around real team feedback and examples",
      ],
    }}
  />
);

export default BusinessAutomation;
