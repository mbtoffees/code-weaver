import ServicePage from "./ServicePage";

const TechnicalOperationsRetainer = () => (
  <ServicePage
    content={{
      path: "/technical-operations-retainer",
      eyebrow: "retainer // automation // technical operations",
      title: "Technical operations retainer",
      description:
        "Brooker Systems provides ongoing technical operations retainers for businesses that need API integrations, automation, reporting and internal software support without hiring full-time.",
      intro:
        "For businesses that need a technical operator but not a full-time hire, I can work on a weekly retainer to improve systems, automate workflows, fix reporting gaps and build small internal tools as priorities emerge.",
      bullets: [
        "Ongoing support for business systems, automations and internal tools",
        "Good fit for around 8 hours per week of technical/product work",
        "Useful for teams hiring for systems, CRM, automation or AI workflow roles",
        "Lower commitment than a full-time hire, with practical delivery each week",
      ],
      examples: [
        "Investigate why reports, spreadsheets or business systems do not line up.",
        "Build small automations between CRM, practice management, accounting and internal tools.",
        "Create dashboards, data checks and exception queues for operations teams.",
        "Turn recurring technical problems into documented workflows and maintainable tools.",
      ],
      process: [
        "Agree the weekly capacity and commercial arrangement",
        "Build a shared backlog of systems/workflow problems",
        "Ship useful improvements each week",
        "Keep notes, documentation and handover clear",
      ],
    }}
  />
);

export default TechnicalOperationsRetainer;
