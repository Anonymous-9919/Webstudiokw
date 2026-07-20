import type { Metadata } from "next"
import { SITE } from "@/lib/constants"
import PortfolioClient from "./PortfolioClient"

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | WebStudioKW — Kuwait Web Projects",
  description:
    "See the websites, ecommerce stores, and web apps WebStudioKW built for businesses in Kuwait — from Al Batel to Al Hilal Clinic and more.",
  keywords: [
    "Kuwait web design portfolio",
    "Kuwait web development case studies",
    "ecommerce website Kuwait",
    "web design company Kuwait projects",
    "Kuwait website examples",
    "best web developer Kuwait portfolio",
    "corporate website Kuwait",
    "healthcare website Kuwait",
    "landing page design Kuwait",
    "WebStudioKW portfolio",
  ],
  authors: [{ name: "Osama Shah", url: SITE.url }],
  creator: "Osama Shah",
  publisher: "WebStudioKW",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE.url}/portfolio`,
    siteName: SITE.brand,
    title: "Portfolio & Case Studies | WebStudioKW",
    description:
      "Websites, ecommerce stores, and web apps WebStudioKW built for businesses in Kuwait.",
    images: [
      {
        url: `${SITE.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "WebStudioKW portfolio — web design and development projects in Kuwait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio & Case Studies | WebStudioKW",
    description:
      "Websites, ecommerce stores, and web apps WebStudioKW built for businesses in Kuwait.",
    images: [`${SITE.url}/og-image.png`],
    creator: "@webstudiokw",
  },
  alternates: {
    canonical: `${SITE.url}/portfolio`,
    languages: {
      "en-US": `${SITE.url}/portfolio`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function PortfolioPage() {
  return <PortfolioClient />
}
