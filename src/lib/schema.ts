import { SITE } from "@/lib/constants"

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.brand,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kuwait City",
      addressRegion: "Al Asimah",
      addressCountry: "KW",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 29.3759,
      longitude: 47.9774,
    },
    areaServed: {
      "@type": "Country",
      name: "Kuwait",
    },
    priceRange: "$$",
    openingHours: "Mo-Fr 09:00-18:00",
    sameAs: [
      "https://instagram.com/webstudiokw",
      "https://linkedin.com/company/webstudiokw",
      "https://x.com/webstudiokw",
    ],
  }
}

export function generateProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.brand,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kuwait City",
      addressRegion: "Al Asimah",
      addressCountry: "KW",
    },
    areaServed: {
      "@type": "Country",
      name: "Kuwait",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development Services in Kuwait",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business Website Development in Kuwait",
            description: "Professional business websites for companies in Kuwait — corporate sites, landing pages, and booking websites",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ecommerce Website Development in Kuwait",
            description: "Complete online stores with product management, secure checkout, and payment integration for the Kuwait market",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Web Applications in Kuwait",
            description: "Tailored web applications, admin dashboards, SaaS platforms, and custom software solutions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Redesign in Kuwait",
            description: "Modern redesign of existing websites to improve performance, design, and conversion rates",
          },
        },
      ],
    },
  }
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.brand,
    url: SITE.url,
    description: SITE.description,
    publisher: {
      "@type": "Organization",
      name: SITE.brand,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }
}

export function generateFAQSchema(
  faqs: readonly { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
