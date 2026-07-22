const SITE_URL = "https://brookersystems.com.au";
const DEFAULT_IMAGE = `${SITE_URL}/brooker-logo.png`;

export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Brooker Systems",
  url: SITE_URL,
  logo: DEFAULT_IMAGE,
  founder: {
    "@type": "Person",
    name: "Max Brooker",
    jobTitle: "Software automation consultant",
  },
  areaServed: ["Australia", "Western Australia", "Perth"],
  description: "Brooker Systems helps Australian businesses build apps, agents and automations.",
  serviceType: ["Apps", "Agents", "Automations"],
};

export const serviceJsonLd = (name: string, description: string, path: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  provider: {
    "@type": "ProfessionalService",
    name: "Brooker Systems",
    url: SITE_URL,
  },
  areaServed: ["Australia", "Western Australia", "Perth"],
  url: `${SITE_URL}${path}`,
});

export { DEFAULT_IMAGE, SITE_URL };
