import type { Metadata } from "next"
import { SITE } from "@/lib/constants"
import { FAQS } from "@/lib/constants"
import { generateFAQSchema } from "@/lib/schema"
import { Hero } from "@/components/home/Hero"
import { About } from "@/components/home/About"
import { Services } from "@/components/home/Services"
import { Workflow } from "@/components/home/Workflow"
import { Portfolio } from "@/components/home/Portfolio"
import { Testimonials } from "@/components/home/Testimonials"
import { FAQ } from "@/components/home/FAQ"
import { FinalCTA } from "@/components/home/FinalCTA"

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  keywords: [
    "web development Kuwait",
    "website design Kuwait",
    "web developer Kuwait",
    "website developer Kuwait",
    "ecommerce website Kuwait",
    "web design Kuwait",
    "website company Kuwait",
    "professional website Kuwait",
    "business website Kuwait",
    "web development agency Kuwait",
    "custom website Kuwait",
    "online store Kuwait",
    "Shopify Kuwait",
    "web design Salmiya",
    "web design Kuwait City",
    "affordable website Kuwait",
    "website cost Kuwait",
    "create website Kuwait",
    "hire web developer Kuwait",
    "landing page Kuwait",
    "small business website Kuwait",
    "restaurant website Kuwait",
    "clinic website Kuwait",
  ],
  authors: [{ name: SITE.founder, url: SITE.url }],
  creator: SITE.founder,
  publisher: SITE.brand,
  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: SITE.url,
    languages: { "en": SITE.url },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.brand,
    title: SITE.title,
    description: SITE.description,
    images: [
      {
        url: `${SITE.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: SITE.brand,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [`${SITE.url}/og-image.png`],
    creator: "@webstudiokw",
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

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Workflow />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(FAQS)),
        }}
      />
    </>
  )
}
