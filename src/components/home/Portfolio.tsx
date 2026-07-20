"use client"

import { useState } from "react"
import { Container } from "@/components/shared/Container"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: "albatel",
    title: "Al Batel",
    category: "Ecommerce Store",
    description: "Full-featured electronics ecommerce store with product catalog and secure checkout.",
    gradient: "from-blue-500 to-indigo-600",
    image: "/images/portfolio-ecommerce.jpg",
    url: "https://albatel.com.kw/",
  },
  {
    id: "malbatel",
    title: "Mal Batel",
    category: "Ecommerce Platform",
    description: "Modern online retail platform with product management and payment integration.",
    gradient: "from-purple-500 to-pink-600",
    image: "/images/portfolio-fashion.jpg",
    url: "https://malbatel.com/",
  },
  {
    id: "kuwait-art",
    title: "Kuwait Art Company",
    category: "Corporate Website",
    description: "Professional art company website showcasing services and portfolio.",
    gradient: "from-amber-500 to-orange-600",
    image: "/images/portfolio-realestate.jpg",
    url: "https://kuwait-art-company.vercel.app/",
  },
  {
    id: "alhilal-clinic",
    title: "Al Hilal Clinic",
    category: "Healthcare Website",
    description: "Modern clinic website with appointment booking and service showcase.",
    gradient: "from-teal-500 to-emerald-600",
    image: "/images/portfolio-clinic.jpg",
    url: "https://alhilalclinickw.vercel.app/",
  },
  {
    id: "epicworks",
    title: "Epic Works",
    category: "Business Website",
    description: "Corporate business website with professional design and lead generation.",
    gradient: "from-zinc-600 to-slate-700",
    image: "/images/portfolio-auto.jpg",
    url: "https://epicworks.vercel.app/",
  },
  {
    id: "bluehorizon",
    title: "Blue Horizon",
    category: "Landing Page",
    description: "High-conversion landing page with modern design and clear CTAs.",
    gradient: "from-cyan-500 to-blue-600",
    image: "/images/portfolio-restaurant.jpg",
    url: "https://bluehorizon-theta.vercel.app/",
  },
]

export function Portfolio() {
  const [activePanel, setActivePanel] = useState(0)

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-28 lg:py-36 bg-background">
      <div className="section-divider" aria-hidden="true" />

      <Container>
        <ScrollReveal>
          <div className="mb-10 sm:mb-14 lg:mb-20">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
              Our Work
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">Selected </span>
              <span className="text-primary">Work</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-sm sm:text-base max-w-2xl leading-relaxed">
              A snapshot of the brands and businesses we&apos;ve designed, built, and helped grow.
            </p>
          </div>
        </ScrollReveal>
      </Container>

      <Container>
        {/* Mobile: stacked tap-to-expand, second tap opens site */}
        <div className="lg:hidden flex flex-col gap-3">
          {projects.map((project, index) => {
            const isActive = activePanel === index
            return (
              <button
                key={project.id}
                type="button"
                className="relative rounded-xl overflow-hidden cursor-pointer w-full text-left bg-transparent p-0 border-0"
                style={{ height: isActive ? "240px" : "64px", transition: "height 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)" }}
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
              </button>
            )
          })}
        </div>

        {/* Desktop: hover to expand, click to open site */}
        <div className="relative w-full hidden lg:flex flex-row gap-2 h-[70vh]">
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

        {/* View All Projects button */}
        <ScrollReveal>
          <div className="mt-10 sm:mt-14 flex justify-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground/30 pb-1 hover:border-primary hover:text-primary transition-all duration-300 group"
            >
              View all projects
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
