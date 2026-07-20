import type { Metadata } from "next"
import Image from "next/image"
import { Container } from "@/components/shared/Container"
import { WhatsAppButton } from "@/components/shared/WhatsAppButton"
import { SITE } from "@/lib/constants"
import { generateBreadcrumbSchema } from "@/lib/schema"
import { FinalCTA } from "@/components/home/FinalCTA"
import { Target, Eye, Zap, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | WebStudioKW — Kuwait Web Development Agency",
  description: "WebStudioKW is a web development agency in Kuwait. We design and build professional websites, ecommerce stores, and custom web applications for businesses across Kuwait.",
  keywords: ["about WebStudioKW", "web development agency Kuwait", "web design company Kuwait", "Kuwait web developer", "digital agency Kuwait", "website company Kuwait", "Osama Shah Kuwait"],
  authors: [{ name: SITE.founder, url: SITE.url }],
  creator: SITE.founder, publisher: SITE.brand,
  metadataBase: new URL(SITE.url),
  alternates: { canonical: `${SITE.url}/about`, languages: { "en": `${SITE.url}/about` } },
  openGraph: {
    type: "website", locale: "en_US", url: `${SITE.url}/about`, siteName: SITE.brand,
    title: "About Us | WebStudioKW", description: "Learn about WebStudioKW — a Kuwait-based web development agency founded by Osama Shah, building modern websites, ecommerce stores, and custom web apps for businesses across Kuwait.",
    images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630, alt: "WebStudioKW team — web design and development agency in Kuwait" }],
  },
  twitter: { card: "summary_large_image", title: "About Us | WebStudioKW", description: "Learn about WebStudioKW — a Kuwait-based web development agency building modern websites and ecommerce stores.", images: [`${SITE.url}/og-image.png`], creator: "@webstudiokw" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateBreadcrumbSchema([
              { name: "Home", url: SITE.url },
              { name: "About", url: `${SITE.url}/about` },
            ]),
            {
              "@context": "https://schema.org",
              "@type": "AboutPage",
              name: "About WebStudioKW",
              description: "Learn about WebStudioKW — a Kuwait-based web development agency founded by Osama Shah, building modern websites, ecommerce stores, and custom web apps for businesses across Kuwait.",
              url: `${SITE.url}/about`,
              mainEntity: {
                "@context": "https://schema.org",
                "@type": "Person",
                name: SITE.founder,
                url: SITE.url,
                jobTitle: "Founder & Web Developer",
                worksFor: {
                  "@type": "Organization",
                  name: SITE.brand,
                  url: SITE.url,
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Kuwait City",
                  addressCountry: "KW",
                },
              },
            },
          ]),
        }}
      />
      {/* Hero — dark */}
      <section className="bg-background py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">About Us</span>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl text-foreground">A Kuwait-Based Digital Studio</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">We help businesses in Kuwait establish a strong online presence.</p>
          </div>
        </Container>
      </section>

      {/* Story — alt dark */}
      <section className="py-20 sm:py-28 section-alt">
        <div className="section-divider" aria-hidden="true" />
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight text-foreground">Our Mission</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>WebStudioKW was founded with a simple goal: help businesses in Kuwait build professional online platforms that actually work.</p>
                <p>In today&apos;s digital world, your website is often the first impression customers have. We make sure that impression is a great one.</p>
                <p>We&apos;re a focused digital studio that takes on projects we can deliver excellently. Every client gets our full attention.</p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <Image src="/images/about-team.jpg" alt="WebStudioKW team in Kuwait" width={600} height={750} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values — dark */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="section-divider" aria-hidden="true" />
        <Container>
          <h2 className="mb-12 text-center font-heading text-3xl font-bold tracking-tight text-foreground">What We Stand For</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Target, title: "Quality First", description: "Every pixel, every line of code is crafted with care." },
              { icon: Eye, title: "Transparency", description: "Clear communication, honest pricing, no surprises." },
              { icon: Zap, title: "Fast Delivery", description: "Streamlined process ensures on-schedule delivery." },
              { icon: Users, title: "Client Focus", description: "Your success is our success." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-white/12 bg-white/[0.05] p-6 text-center hover:border-white/15 transition-colors">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"><item.icon className="h-6 w-6" /></div>
                <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Founder — alt dark */}
      <section className="py-20 sm:py-28 section-alt">
        <div className="section-divider" aria-hidden="true" />
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-foreground">Meet the Founder</h2>
            <p className="mb-12 text-muted-foreground">The person behind WebStudioKW</p>
            <div className="rounded-2xl border border-black/[0.08] bg-white p-8 sm:p-12">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">OS</div>
              <h3 className="text-xl font-semibold text-foreground">{SITE.founder}</h3>
              <p className="mb-4 text-sm text-muted-foreground">Founder & Lead Developer</p>
              <p className="text-sm leading-relaxed text-muted-foreground">Osama founded WebStudioKW with the vision of helping Kuwait businesses establish a powerful online presence.</p>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  )
}
