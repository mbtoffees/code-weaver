import ServicePage from "./ServicePage";

const Apps = () => (
  <ServicePage
    content={{
      path: "/apps",
      eyebrow: "apps // portals // internal tools",
      title: "Apps your business needs",
      description:
        "Brooker Systems builds web apps, portals, product builds and internal tools for Australian businesses that need practical software.",
      intro:
        "I build apps around the work your business needs done. That might be a web app, customer portal, internal tool, dashboard, mobile-friendly workflow or a product you want to test with real users. The aim is useful software that looks credible, handles real data and can keep improving.",
      bullets: [
        "Web apps, portals, dashboards and internal tools",
        "Mobile-friendly software that works well on phones, tablets and desktops",
        "Product builds, business systems and custom workflows",
        "Security-minded design from someone with a cybersecurity background",
      ],
      examples: [
        "A custom app for customers, staff, suppliers or contractors to submit information, track work and complete tasks.",
        "A private business system that replaces spreadsheets, shared inboxes or scattered manual processes.",
        "A dashboard or admin tool that gives your team one place to manage records, approvals, notes and exceptions.",
        "A product build that turns an idea into working software people can use, test and improve.",
        "A mobile-friendly workflow for people who need to use the system on-site or away from a desk.",
        "A secure portal for collecting files, forms, comments, evidence or client information in a structured way.",
      ],
      process: [
        "Work out what the app needs to do and who needs to use it.",
        "Map the screens, data and workflow before overbuilding anything.",
        "Build the first useful version with clean structure, secure defaults and practical deployment.",
        "Test it with real examples, then improve the parts that create the most value.",
      ],
    }}
  />
);

export default Apps;
