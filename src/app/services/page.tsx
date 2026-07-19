import type { Metadata } from "next"
import Image from "next/image"
import { Container } from "@/components/shared/Container"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { WhatsAppButton } from "@/components/shared/WhatsAppButton"
import { SERVICES, SITE } from "@/lib/constants"
import { generateBreadcrumbSchema } from "@/lib/schema"
import { Globe, ShoppingCart, Code, Check } from "lucide-react"
import { FinalCTA } from "@/components/home/FinalCTA"

export const metadata: Metadata = {
  title: "Web Development Services Kuwait | Website Design & Ecommerce Development",
  description:
    "Professional web development services in Kuwait. Business websites from 150 KWD, ecommerce stores from 450 KWD, and custom web applications. Get a free quote from WebStudioKW.",
  keywords: [
    "web development services Kuwait",
    "website design Kuwait",
    "ecommerce development Kuwait",
    "custom web applications Kuwait",
    "business website Kuwait",
    "professional website Kuwait",
  ],
  authors: [{ name: SITE.founder, url: SITE.url }],
  creator: SITE.founder,
  publisher: SITE.brand,
  metadataBase: new URL(SITE.url),
  alternates: { canonical: `${SITE.url}/services`, languages: { "en": `${SITE.url}/services` } },
  openGraph: {
    type: "website", locale: "en_US", url: `${SITE.url}/services`, siteName: SITE.brand,
    title: "Web Development Services Kuwait | WebStudioKW",
    description: "Professional web development services in Kuwait.",
    images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630, alt: SITE.brand }],
  },
  twitter: {
    card: "summary_large_image", title: "Web Development Services Kuwait | WebStudioKW",
    description: "Professional web development services in Kuwait.",
    images: [`${SITE.url}/og-image.png`],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
}

const iconMap = { Globe, ShoppingCart, Code }

const serviceImages = [
  "/images/service-web.jpg",
  "/images/service-ecommerce.jpg",
  "/images/service-custom.jpg",
]

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Services", url: `${SITE.url}/services` },
          ])),
        }}
      />
      {/* Hero — dark */}
      <section className="bg-background py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Our Services
            </span>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl text-foreground">
              Web Development Services In Kuwait
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We help Kuwait businesses build professional online platforms. From simple business websites
              to complex ecommerce systems, we deliver modern solutions that drive results.
            </p>
          </div>
        </Container>
      </section>

      {/* Service Sections — alternating dark shades */}
      {SERVICES.map((service, index) => {
        const Icon = iconMap[service.icon as keyof typeof iconMap]
        const isAlt = index % 2 === 0
        const imgSrc = serviceImages[index] || "/images/about-us.jpg"
        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-20 sm:py-28 ${isAlt ? "section-alt" : "bg-background"}`}
          >
            <div className="section-divider" aria-hidden="true" />
            <Container>
              <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                    {service.title}
                  </h2>
                  <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="mb-8 grid gap-4 sm:grid-cols-2">
                    {service.subServices.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <WhatsAppButton message={`Hi WebStudioKW! I'm interested in your ${service.title} services.`}>
                    Get Free Quote
                  </WhatsAppButton>
                </div>
                <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src={imgSrc}
                      alt={`${service.title} - WebStudioKW ${service.title.toLowerCase()} services in Kuwait`}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </Container>
          </section>
        )
      })}

      {/* Trust Section — dark */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="section-divider" aria-hidden="true" />
        <Container>
          <SectionHeading
            badge="Why Choose Us"
            title="Why Kuwait Businesses Choose WebStudioKW"
            description="We combine modern technology with local market understanding to deliver websites that actually work."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Kuwait-Focused", description: "We understand the local market, design preferences, and what Kuwait customers expect." },
              { title: "Modern Technology", description: "Latest web technologies for fast, secure, and scalable websites." },
              { title: "Fast Delivery", description: "Most projects completed within 5-14 working days." },
              { title: "Transparent Pricing", description: "No hidden costs. Clear quote upfront." },
              { title: "Ongoing Support", description: "We don't disappear after launch." },
              { title: "Results Driven", description: "Every website designed to convert visitors into customers." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-white/12 bg-white/[0.05] p-6 hover:border-white/15 transition-colors">
                <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  )
}
