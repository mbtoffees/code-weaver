import ServicePage from "./ServicePage";

const Automations = () => (
  <ServicePage
    content={{
      path: "/automations",
      eyebrow: "automations // APIs // repeated work",
      title: "Automations for repeated work",
      description:
        "Brooker Systems automates repeated admin, reporting, data movement and system integration work for Australian businesses.",
      intro:
        "If someone is copying data between systems, rebuilding the same report, chasing the same update or checking the same documents, there is probably a better way. I build automations that connect tools, reduce mistakes and leave a clear record of what happened.",
      bullets: [
        "System-to-system data movement and API integrations",
        "Scheduled reports, checks, notifications and data syncs",
        "Document handling, extraction, filing and review workflows",
        "Practical automation that stays understandable and maintainable",
      ],
      examples: [
        "A form, email or uploaded file triggers the right follow-up steps without someone manually copying the data.",
        "A recurring report is rebuilt from exports or APIs and sent to the right people on schedule.",
        "Documents are checked, renamed, filed and routed for review when something needs attention.",
        "Records are kept aligned between the tools your business already uses.",
        "A manual checklist becomes a repeatable workflow with status, notes and exception handling.",
        "A team gets notified when a job, record, payment, file or deadline needs action.",
      ],
      process: [
        "Find the repeated work, the source of truth and the failure points.",
        "Confirm the available APIs, exports, permissions, formats and edge cases.",
        "Build the smallest reliable workflow first so it can be tested quickly.",
        "Add monitoring, notes and handover so the automation is not a mystery later.",
      ],
    }}
  />
);

export default Automations;
