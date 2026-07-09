import { useEffect } from "react";

const SITE_URL = "https://brookersystems.com.au";
const DEFAULT_IMAGE = `${SITE_URL}/brooker-logo.png`;

type JsonLd = Record<string, unknown> | Record<string, unknown>[];

type SEOProps = {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
  jsonLd?: JsonLd;
};

const setMeta = (selector: string, attr: "content" | "href", value: string) => {
  let element = document.head.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;

  if (!element) {
    if (selector.startsWith("meta")) {
      element = document.createElement("meta");
      const nameMatch = selector.match(/name="([^"]+)"/);
      const propertyMatch = selector.match(/property="([^"]+)"/);
      if (nameMatch) element.setAttribute("name", nameMatch[1]);
      if (propertyMatch) element.setAttribute("property", propertyMatch[1]);
    } else if (selector.startsWith("link")) {
      element = document.createElement("link");
      const relMatch = selector.match(/rel="([^"]+)"/);
      if (relMatch) element.setAttribute("rel", relMatch[1]);
    }
    document.head.appendChild(element);
  }

  element.setAttribute(attr, value);
};

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
  description:
    "Brooker Systems helps Australian businesses build apps, agents and automations.",
  serviceType: [
    "Apps",
    "Agents",
    "Automations",
  ],
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

const SEO = ({ title, description, path = "/", type = "website", jsonLd }: SEOProps) => {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${path}`;
    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[name="author"]', "content", "Max Brooker");
    setMeta('link[rel="canonical"]', "href", canonicalUrl);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:type"]', "content", type);
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
    setMeta('meta[property="og:image"]', "content", DEFAULT_IMAGE);
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);

    const scriptId = "page-json-ld";
    document.getElementById(scriptId)?.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [description, jsonLd, path, title, type]);

  return null;
};

export default SEO;
