import type { Metadata } from "next"
import { Container } from "@/components/shared/Container"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { WhatsAppButton } from "@/components/shared/WhatsAppButton"
import { PACKAGES, SITE } from "@/lib/constants"
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema"
import { Check, Star } from "lucide-react"
import { FinalCTA } from "@/components/home/FinalCTA"

export const metadata: Metadata = {
  title: "Website Development Pricing Kuwait | Affordable Web Design Packages",
  description:
    "Affordable website development packages in Kuwait. Business websites from 150 KWD, ecommerce stores from 450 KWD, custom web apps from 750 KWD.",
  keywords: ["website pricing Kuwait", "web design packages Kuwait", "affordable website Kuwait", "ecommerce pricing Kuwait"],
  authors: [{ name: SITE.founder, url: SITE.url }],
  creator: SITE.founder, publisher: SITE.brand,
  metadataBase: new URL(SITE.url),
  alternates: { canonical: `${SITE.url}/pricing`, languages: { "en": `${SITE.url}/pricing` } },
  openGraph: {
    type: "website", locale: "en_US", url: `${SITE.url}/pricing`, siteName: SITE.brand,
    title: "Website Development Pricing Kuwait | WebStudioKW",
    description: "Affordable website development packages in Kuwait.",
    images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630, alt: SITE.brand }],
  },
  twitter: { card: "summary_large_image", title: "Website Development Pricing Kuwait | WebStudioKW", description: "Affordable website development packages in Kuwait.", images: [`${SITE.url}/og-image.png`] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
}

const PRICING_FAQS = [
  { question: "Are there any hidden costs?", answer: "No. The price you see is the price you pay." },
  { question: "How do I make payment?", answer: "KWD bank transfers and Kuwaiti debit/credit cards." },
  { question: "What if I need changes after?", answer: "All packages include a revision period after launch." },
  { question: "Do you offer custom packages?", answer: "Yes! Contact us on WhatsApp for a custom quote." },
] as const

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateFAQSchema(PRICING_FAQS),
            generateBreadcrumbSchema([
              { name: "Home", url: SITE.url },
              { name: "Pricing", url: `${SITE.url}/pricing` },
            ]),
          ]),
        }}
      />
      {/* Hero — dark */}
      <section className="bg-background py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">Pricing</span>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl text-foreground">Simple, Transparent Pricing</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Professional websites at affordable prices. No hidden fees, no surprises.</p>
          </div>
        </Container>
      </section>

      {/* Pricing Cards — lighter section */}
      <section className="py-20 sm:py-28 section-alt" id="packages">
        <div className="section-divider" aria-hidden="true" />
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {PACKAGES.map((pkg) => (
              <div key={pkg.name} className={`relative rounded-xl border p-8 transition-all hover:shadow-lg ${pkg.popular ? "border-primary shadow-md ring-1 ring-primary/10 scale-[1.02] bg-white" : "border-black/[0.08] bg-white hover:border-primary/20"}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary px-4 py-1 text-xs font-medium text-primary-foreground"><Star className="h-3 w-3" /> Most Popular</span>
                  </div>
                )}
                <div className="mb-6">
                  <h2 className="font-heading text-xl font-semibold text-foreground">{pkg.name}</h2>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary">{pkg.offerPrice} KWD</span>
                    <span className="text-sm text-muted-foreground line-through">{pkg.originalPrice} KWD</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{pkg.description}</p>
                </div>
                <ul className="mb-8 space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{feature}
                    </li>
                  ))}
                </ul>
                <WhatsAppButton message={pkg.whatsappMessage} variant={pkg.popular ? "default" : "outline"} className="w-full" showIcon={false}>{pkg.cta}</WhatsAppButton>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              { title: "Free Consultation", description: "Not sure which package? Contact us for a free consultation." },
              { title: "Flexible Payment", description: "KWD bank transfers, Kuwaiti cards, and payment plans." },
              { title: "Satisfaction Guaranteed", description: "We work until you're 100% satisfied." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="mb-2 font-heading font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ — dark */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="section-divider" aria-hidden="true" />
        <Container>
          <SectionHeading badge="Questions?" title="Pricing FAQ" description="Common questions about our pricing." />
          <div className="mx-auto max-w-3xl space-y-6">
            {PRICING_FAQS.map((item) => (
              <div key={item.question} className="rounded-xl border border-white/12 bg-white/[0.05] p-6">
                <h3 className="mb-2 font-heading font-semibold text-foreground">{item.question}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  )
}
