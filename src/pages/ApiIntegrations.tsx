import ServicePage from "./ServicePage";

const ApiIntegrations = () => (
  <ServicePage
    content={{
      path: "/api-integrations",
      eyebrow: "API integrations // CRM // business systems",
      title: "API integrations for Australian businesses",
      description:
        "Brooker Systems connects CRMs, practice management systems, accounting tools, spreadsheets and internal software using APIs and practical workflow automation.",
      intro:
        "If your systems have APIs, exports, webhooks or structured data, I can usually connect them and remove the manual handoffs. This is product-agnostic work: the important part is understanding the workflow, the data and the permissions available.",
      bullets: [
        "Connect CRMs, accounting tools, practice systems and internal apps",
        "Move data between systems without repeated copying and pasting",
        "Build small dashboards, scripts, sync jobs and review queues",
        "Create clear logs and handover notes so the workflow is maintainable",
      ],
      examples: [
        "Create a new matter, project or job from a CRM deal or form submission.",
        "Keep contact/company records aligned between two business systems.",
        "Turn CSV exports into cleaned reports, dashboards or exception lists.",
        "Trigger follow-up tasks, notifications or review steps when data changes.",
      ],
      process: [
        "Map the workflow and source systems",
        "Confirm API access, permissions and data fields",
        "Build the smallest reliable integration first",
        "Test against real examples and document the handover",
      ],
    }}
  />
);

export default ApiIntegrations;
