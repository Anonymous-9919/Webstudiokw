import type { Metadata } from "next"
import { Container } from "@/components/shared/Container"
import { WhatsAppButton } from "@/components/shared/WhatsAppButton"
import { SITE } from "@/lib/constants"
import { generateBreadcrumbSchema } from "@/lib/schema"
import { ContactForm } from "@/components/shared/ContactForm"
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react"
import { FinalCTA } from "@/components/home/FinalCTA"

export const metadata: Metadata = {
  title: "Contact Us | WebStudioKW — Web Development Kuwait",
  description: "Contact WebStudioKW for web development in Kuwait. Get a free quote for your business website, ecommerce store, or custom web app. WhatsApp, phone, or email.",
  keywords: ["contact web developer Kuwait", "WebStudioKW contact", "website consultation Kuwait", "WhatsApp web developer Kuwait", "web design contact Kuwait", "free website quote Kuwait", "hire web developer Kuwait"],
  authors: [{ name: SITE.founder, url: SITE.url }],
  creator: SITE.founder, publisher: SITE.brand,
  metadataBase: new URL(SITE.url),
  alternates: { canonical: `${SITE.url}/contact`, languages: { "en": `${SITE.url}/contact` } },
  openGraph: {
    type: "website", locale: "en_US", url: `${SITE.url}/contact`, siteName: SITE.brand,
    title: "Contact Us | WebStudioKW", description: "Contact WebStudioKW for professional website development in Kuwait.",
    images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630, alt: SITE.brand }],
  },
  twitter: { card: "summary_large_image", title: "Contact Us | WebStudioKW", description: "Contact WebStudioKW for professional website development in Kuwait.", images: [`${SITE.url}/og-image.png`] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Contact", url: `${SITE.url}/contact` },
          ])),
        }}
      />
      {/* Hero — dark */}
      <section className="bg-background py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">Contact Us</span>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl text-foreground">Let&apos;s Talk About Your Project</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Ready to build your website? Get in touch.</p>
          </div>
        </Container>
      </section>

      {/* Contact Content — alt dark */}
      <section className="py-20 sm:py-28 section-alt">
        <div className="section-divider" aria-hidden="true" />
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="mb-6 font-heading text-2xl font-bold text-foreground">Get In Touch</h2>
                <p className="text-muted-foreground leading-relaxed">We typically respond within a few hours during business days.</p>
              </div>
              <div className="space-y-6">
                <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 rounded-xl border border-black/[0.08] bg-white p-4 transition-all hover:shadow-md hover:border-primary/30">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"><MessageCircle className="h-6 w-6" /></div>
                  <div>
                    <h3 className="font-semibold text-foreground">WhatsApp</h3>
                    <p className="text-sm text-muted-foreground">{SITE.phone}</p>
                    <p className="mt-1 text-xs font-medium text-primary">Recommended — Fastest response</p>
                  </div>
                </a>
                <a href={`tel:${SITE.phoneRaw}`} className="flex items-start gap-4 rounded-xl border border-black/[0.08] bg-white p-4 transition-all hover:shadow-md hover:border-black/[0.12]">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"><Phone className="h-6 w-6" /></div>
                  <div><h3 className="font-semibold text-foreground">Phone</h3><p className="text-sm text-muted-foreground">{SITE.phone}</p></div>
                </a>
                <a href={`mailto:${SITE.email}`} className="flex items-start gap-4 rounded-xl border border-black/[0.08] bg-white p-4 transition-all hover:shadow-md hover:border-black/[0.12]">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"><Mail className="h-6 w-6" /></div>
                  <div><h3 className="font-semibold text-foreground">Email</h3><p className="text-sm text-muted-foreground">{SITE.email}</p></div>
                </a>
                <div className="flex items-start gap-4 rounded-xl border border-black/[0.08] bg-white p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"><MapPin className="h-6 w-6" /></div>
                  <div><h3 className="font-semibold text-foreground">Location</h3><p className="text-sm text-muted-foreground">{SITE.location}</p></div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-black/[0.08] bg-white p-6 sm:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WhatsApp Banner — dark */}
      <section className="py-12 bg-background">
        <div className="section-divider" aria-hidden="true" />
        <Container>
          <div className="rounded-2xl p-8 sm:p-12 text-center bg-primary/10 border border-primary/20">
            <h2 className="mb-4 font-heading text-2xl font-bold text-foreground">Prefer to Chat Directly?</h2>
            <p className="mb-6 text-muted-foreground">The fastest way to reach us is through WhatsApp.</p>
            <WhatsAppButton size="lg">Chat on WhatsApp</WhatsAppButton>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  )
}
