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
      addressCountry: "KW",
    },
    areaServed: {
      "@type": "Country",
      name: "Kuwait",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business Website Development",
            description: "Professional business websites for companies in Kuwait",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ecommerce Website Development",
            description: "Complete online stores with product management and payment integration",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Web Applications",
            description: "Tailored web applications, dashboards, and SaaS platforms",
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

export function generateAggregateRatingSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.brand,
    url: SITE.url,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "3",
      bestRating: "5",
      worstRating: "1",
    },
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
