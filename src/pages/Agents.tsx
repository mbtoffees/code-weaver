import ServicePage from "./ServicePage";

const Agents = () => (
  <ServicePage
    content={{
      path: "/agents",
      eyebrow: "agents // AI workflows // supervised systems",
      title: "Agents for useful business work",
      description:
        "Brooker Systems builds supervised AI agents and agentic workflows for document review, research, operations, reporting and internal business processes.",
      intro:
        "I build agents for clear business jobs where the inputs, tools and expected output can be defined. That might be document review, research, triage, data extraction, reporting, monitoring or workflow supervision. I like Hermes for this kind of work because it can connect prompts, files, schedules, tools and human approval instead of just producing a chat response.",
      bullets: [
        "Document review, research, triage and operations agents",
        "Tool-using workflows that can read files, call APIs and prepare records",
        "Human review gates for decisions that matter",
        "Logs, runbooks and audit trails so the work can be checked",
      ],
      examples: [
        "An agent reviews documents, extracts key details and flags issues for a person to approve.",
        "A research agent monitors a market, topic or competitor set and sends a concise brief with sources.",
        "An operations agent checks incoming work, classifies it and prepares the next action for a human.",
        "A reporting agent collects information from files, exports or APIs and turns it into a repeatable summary.",
        "A quality-check agent reviews records against rules and sends exceptions to the right person.",
        "A personal or team workflow agent keeps track of recurring checks, notes, reminders and follow-up work.",
      ],
      process: [
        "Define the job the agent should do and where human judgement still belongs.",
        "Choose the tools, files, APIs and data access the agent actually needs.",
        "Build the workflow with bounded prompts, logs, checks and approval points.",
        "Test it against real cases before trusting it with live business work.",
      ],
    }}
  />
);

export default Agents;
