import type { Metadata } from "next"
import Image from "next/image"
import { Container } from "@/components/shared/Container"
import { WhatsAppButton } from "@/components/shared/WhatsAppButton"
import { SITE } from "@/lib/constants"
import { generateBreadcrumbSchema } from "@/lib/schema"
import { Badge } from "@/components/ui/badge"
import { FinalCTA } from "@/components/home/FinalCTA"

export const metadata: Metadata = {
  title: "Portfolio | Web Development Projects in Kuwait — WebStudioKW",
  description: "See the websites and ecommerce stores WebStudioKW has built for businesses in Kuwait. Healthcare, restaurant, automotive, and retail web projects.",
  keywords: ["web portfolio Kuwait", "website projects Kuwait", "WebStudioKW portfolio", "web development examples Kuwait", "ecommerce website Kuwait", "business website design Kuwait", "clinic website Kuwait", "restaurant website Kuwait"],
  authors: [{ name: SITE.founder, url: SITE.url }],
  creator: SITE.founder, publisher: SITE.brand,
  metadataBase: new URL(SITE.url),
  alternates: { canonical: `${SITE.url}/portfolio`, languages: { "en": `${SITE.url}/portfolio` } },
  openGraph: {
    type: "website", locale: "en_US", url: `${SITE.url}/portfolio`, siteName: SITE.brand,
    title: "Portfolio | WebStudioKW", description: "See the websites we've built for businesses in Kuwait.",
    images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630, alt: SITE.brand }],
  },
  twitter: { card: "summary_large_image", title: "Portfolio | WebStudioKW", description: "See the websites we've built for businesses in Kuwait.", images: [`${SITE.url}/og-image.png`] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
}

const projects = [
  { id: "kuwait-clinic", title: "Kuwait Clinic Website", category: "Healthcare", description: "A modern appointment booking website for a dental clinic in Kuwait City.", image: "/images/portfolio-clinic.jpg" },
  { id: "kuwait-restaurant", title: "Kuwait Restaurant Website", category: "Restaurant", description: "An elegant restaurant website with menu showcase and online reservation system.", image: "/images/portfolio-restaurant.jpg" },
  { id: "kuwait-ecommerce", title: "Kuwait Ecommerce Store", category: "Ecommerce", description: "A full-featured online fashion store with product catalog and secure checkout.", image: "/images/portfolio-ecommerce.jpg" },
  { id: "car-detailing", title: "Car Detailing Website", category: "Automotive", description: "A premium car detailing service website with booking system.", image: "/images/portfolio-auto.jpg" },
  { id: "kuwait-fitness", title: "Fitness Studio Website", category: "Health & Fitness", description: "A modern gym and fitness studio website with class scheduling and membership plans.", image: "/images/portfolio-fashion.jpg" },
  { id: "kuwait-realestate", title: "Real Estate Platform", category: "Real Estate", description: "A property listing platform with search filters and agent profiles.", image: "/images/portfolio-realestate.jpg" },
]

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Portfolio", url: `${SITE.url}/portfolio` },
          ])),
        }}
      />
      {/* Hero — dark */}
      <section className="bg-background py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">Our Work</span>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl text-foreground">Projects We&apos;ve Delivered</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Take a look at the websites we&apos;ve designed and developed for businesses across Kuwait.</p>
          </div>
        </Container>
      </section>

      {/* Portfolio Grid — dark */}
      <section className="py-20 sm:py-28 section-alt">
        <div className="section-divider" aria-hidden="true" />
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.id} className="group overflow-hidden rounded-2xl border border-black/[0.08] bg-white transition-all hover:shadow-lg hover:border-primary/20">
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} - WebStudioKW web development project in Kuwait`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-0">{project.category}</Badge>
                  </div>
                  <h2 className="mb-2 font-heading text-lg font-semibold text-foreground">{project.title}</h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-black/[0.08] bg-white p-8 sm:p-12 text-center">
            <h2 className="mb-4 font-heading text-2xl font-bold text-foreground">Want a Website Like These?</h2>
            <p className="mb-6 text-muted-foreground">Let&apos;s discuss your project and create something amazing.</p>
            <WhatsAppButton size="lg">Start Your Project</WhatsAppButton>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  )
}
