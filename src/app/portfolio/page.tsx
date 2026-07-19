"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/shared/Container"
import { WhatsAppButton } from "@/components/shared/WhatsAppButton"
import { SITE } from "@/lib/constants"
import { generateBreadcrumbSchema } from "@/lib/schema"
import { ArrowUpRight, ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: "albatel",
    title: "Al Batel",
    category: "Ecommerce Store",
    description: "Full-featured electronics ecommerce store with product catalog, secure checkout, and payment integration for the Kuwait market.",
    gradient: "from-blue-500 to-indigo-600",
    image: "/images/portfolio-ecommerce.jpg",
    url: "https://albatel.com.kw/",
  },
  {
    id: "malbatel",
    title: "Mal Batel",
    category: "Ecommerce Platform",
    description: "Modern online retail platform with product management, inventory tracking, and seamless payment integration.",
    gradient: "from-purple-500 to-pink-600",
    image: "/images/portfolio-fashion.jpg",
    url: "https://malbatel.com/",
  },
  {
    id: "kuwait-art",
    title: "Kuwait Art Company",
    category: "Corporate Website",
    description: "Professional art company website showcasing creative services, portfolio gallery, and client engagement tools.",
    gradient: "from-amber-500 to-orange-600",
    image: "/images/portfolio-realestate.jpg",
    url: "https://kuwait-art-company.vercel.app/",
  },
  {
    id: "alhilal-clinic",
    title: "Al Hilal Clinic",
    category: "Healthcare Website",
    description: "Modern clinic website with appointment booking system, service showcase, and patient information portal.",
    gradient: "from-teal-500 to-emerald-600",
    image: "/images/portfolio-clinic.jpg",
    url: "https://alhilalclinickw.vercel.app/",
  },
  {
    id: "epicworks",
    title: "Epic Works",
    category: "Business Website",
    description: "Corporate business website with professional design, service pages, and lead generation forms.",
    gradient: "from-zinc-600 to-slate-700",
    image: "/images/portfolio-auto.jpg",
    url: "https://epicworks.vercel.app/",
  },
  {
    id: "bluehorizon",
    title: "Blue Horizon",
    category: "Landing Page",
    description: "High-conversion landing page with modern design, clear value proposition, and strong call-to-action sections.",
    gradient: "from-cyan-500 to-blue-600",
    image: "/images/portfolio-restaurant.jpg",
    url: "https://bluehorizon-theta.vercel.app/",
  },
]

export default function PortfolioPage() {
  const [activePanel, setActivePanel] = useState(0)

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

      {/* Hero */}
      <section className="bg-background py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>
            <span className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">Our Work</span>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl text-foreground">Projects We&apos;ve Delivered</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Take a look at the websites we&apos;ve designed and developed for businesses across Kuwait.</p>
          </div>
        </Container>
      </section>

      {/* Portfolio Accordion — Zelta-style */}
      <section className="pb-20 sm:pb-28 bg-background">
        <Container>
          {/* Mobile: stacked tap-to-expand, second tap opens site */}
          <div className="lg:hidden flex flex-col gap-3">
            {projects.map((project, index) => {
              const isActive = activePanel === index
              return (
                <div
                  key={project.id}
                  className="relative rounded-xl overflow-hidden cursor-pointer"
                  style={{ height: isActive ? "280px" : "64px", transition: "height 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)" }}
                  onClick={() => {
                    if (isActive) {
                      window.open(project.url, "_blank", "noopener,noreferrer")
                    } else {
                      setActivePanel(index)
                    }
                  }}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.category} by WebStudioKW in Kuwait`}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-black/50" style={{ opacity: isActive ? 0.3 : 0.6, transition: "opacity 0.5s ease" }} />
                  <div className={cn("absolute bottom-0 left-0 right-0 bg-gradient-to-r h-1", project.gradient)} />

                  <div className="absolute bottom-4 left-4 z-10">
                    <h3 className="font-heading font-medium text-white text-sm truncate">{project.title}</h3>
                  </div>

                  <div
                    className="absolute inset-0 flex items-center p-5 z-10"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? "translateY(0)" : "translateY(20px)",
                      transition: "all 0.4s ease",
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                  >
                    <div className="max-w-md">
                      <span className={cn("inline-block text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-full mb-3 bg-gradient-to-r shadow-lg text-white", project.gradient)}>
                        {project.category}
                      </span>
                      <h3 className="font-heading text-xl font-medium text-white mb-2">{project.title}</h3>
                      <p className="text-sm text-white/70 mb-3">{project.description}</p>
                      <div className="w-10 h-0.5 bg-white mb-3" />
                      <span className="inline-flex items-center gap-2 text-xs text-white/90 hover:text-white transition-colors">
                        Visit site <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Desktop: hover to expand, click opens site */}
          <div className="relative w-full hidden lg:flex flex-row gap-2 h-[80vh]">
            {projects.map((project, index) => {
              const isActive = activePanel === index
              return (
                <a
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setActivePanel(index)}
                  className={cn(
                    "relative rounded-xl overflow-hidden cursor-pointer block lg:h-full outline-none focus-visible:ring-2 focus-visible:ring-primary no-underline",
                    isActive ? "lg:flex-[5]" : "lg:flex-[1]"
                  )}
                  style={{ transition: "all 0.7s cubic-bezier(0.25, 0.1, 0.25, 1)" }}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.category} by WebStudioKW in Kuwait`}
                    fill
                    className="object-cover"
                    style={{
                      transform: isActive ? "scale(1)" : "scale(1.1)",
                      transition: "transform 0.7s cubic-bezier(0.25, 0.1, 0.25, 1)",
                    }}
                    sizes="20vw"
                  />
                  <div className="absolute inset-0 bg-black/50" style={{ opacity: isActive ? 0.3 : 0.6, transition: "opacity 0.5s ease" }} />
                  <div className={cn("absolute bottom-0 left-0 right-0 bg-gradient-to-r h-1", project.gradient)} style={{ transition: "all 0.5s ease" }} />

                  <div className="absolute bottom-8 left-8 z-10">
                    <h3 className={cn("font-heading font-medium text-white truncate", isActive ? "text-2xl xl:text-3xl whitespace-nowrap" : "text-sm xl:text-base")}>
                      {project.title}
                    </h3>
                  </div>

                  <div
                    className="absolute inset-0 flex items-center p-12 xl:p-16"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? "translateY(0)" : "translateY(30px)",
                      transition: "all 0.5s ease",
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                  >
                    <div className="max-w-md">
                      <span className={cn("inline-block text-sm font-medium uppercase tracking-wider px-4 py-1.5 rounded-full mb-4 bg-gradient-to-r shadow-lg text-white", project.gradient)}>
                        {project.category}
                      </span>
                      <h3 className="font-heading text-3xl xl:text-4xl font-medium text-white mb-4">{project.title}</h3>
                      <p className="text-base text-white/70 mb-4">{project.description}</p>
                      <div className="w-12 h-0.5 bg-white mb-4" />
                      <span className="inline-flex items-center gap-2 text-base text-white/90 hover:text-white transition-colors">
                        Visit site <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-2xl border border-border/30 bg-card p-8 sm:p-12 text-center">
            <h2 className="mb-4 font-heading text-2xl font-bold text-foreground">Want a Website Like These?</h2>
            <p className="mb-6 text-muted-foreground">Let&apos;s discuss your project and create something amazing.</p>
            <WhatsAppButton size="lg">Start Your Project</WhatsAppButton>
          </div>
        </Container>
      </section>
    </>
  )
}
