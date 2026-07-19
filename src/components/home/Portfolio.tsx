"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { Container } from "@/components/shared/Container"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: "al-rashid-clinic",
    title: "Al Rashid Clinic",
    category: "Healthcare Website",
    gradient: "from-teal-500 to-emerald-600",
    image: "/images/portfolio-clinic.jpg",
  },
  {
    id: "kuwait-bites",
    title: "Kuwait Bites",
    category: "Restaurant Website",
    gradient: "from-orange-500 to-red-600",
    image: "/images/portfolio-restaurant.jpg",
  },
  {
    id: "gulf-electronics",
    title: "Gulf Electronics",
    category: "Ecommerce Store",
    gradient: "from-blue-500 to-indigo-600",
    image: "/images/portfolio-ecommerce.jpg",
  },
  {
    id: "autocare-pro",
    title: "AutoCare Pro",
    category: "Automotive Website",
    gradient: "from-zinc-600 to-slate-700",
    image: "/images/portfolio-auto.jpg",
  },
  {
    id: "khaleeji-retail",
    title: "Khaleeji Retail",
    category: "Ecommerce Platform",
    gradient: "from-purple-500 to-pink-600",
    image: "/images/portfolio-ecommerce.jpg",
  },
]

export function Portfolio() {
  const [activePanel, setActivePanel] = useState<number>(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const updatePanelFromScroll = useCallback(() => {
    const container = containerRef.current
    if (!container) return

    const rect = container.getBoundingClientRect()
    const viewportH = window.innerHeight

    if (rect.top > viewportH || rect.bottom < 0) return

    const sectionProgress = 1 - (rect.bottom - viewportH) / rect.height
    const panelCount = projects.length
    const rawIndex = sectionProgress * (panelCount + 0.5)
    const index = Math.min(Math.max(0, Math.floor(rawIndex)), panelCount - 1)

    setActivePanel(index)
  }, [])

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updatePanelFromScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    updatePanelFromScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [updatePanelFromScroll])

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

      {/* Accordion — vertical on mobile, horizontal on desktop */}
      <Container>
        <div
          ref={containerRef}
          className="relative w-full flex flex-col gap-2 h-[80vh] sm:h-[90vh] lg:h-[80vh] lg:flex-row"
        >
          {projects.map((project, index) => {
            const isActive = activePanel === index
            return (
              <a
                key={project.id}
                href="#"
                onClick={(e) => e.preventDefault()}
                onMouseEnter={() => setActivePanel(index)}
                onTouchStart={() => setActivePanel(index)}
                role="button"
                tabIndex={0}
                className={cn(
                  "relative rounded-xl overflow-hidden cursor-pointer block",
                  "lg:h-full",
                  "h-28 sm:h-32",
                  isActive ? "lg:flex-[5]" : "lg:flex-[1]",
                  isActive ? "flex-[3]" : "flex-[1]"
                )}
                style={{
                  transition: "all 0.7s cubic-bezier(0.25, 0.1, 0.25, 1)",
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  style={{
                    transform: isActive ? "scale(1)" : "scale(1.1)",
                    transition: "transform 0.7s cubic-bezier(0.25, 0.1, 0.25, 1)",
                  }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />

                <div
                  className="absolute inset-0 bg-black/50"
                  style={{
                    opacity: isActive ? 0.3 : 0.6,
                    transition: "opacity 0.5s ease",
                  }}
                />

                <div
                  className={cn(
                    "absolute bottom-0 left-0 right-0 bg-gradient-to-r",
                    project.gradient,
                    isActive ? "h-1.5" : "h-1"
                  )}
                  style={{ transition: "all 0.5s ease" }}
                />

                {/* Label — horizontal on mobile, vertical on desktop when not active */}
                <div
                  className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8 z-10"
                >
                  <h3
                    className={cn(
                      "font-heading font-medium text-white truncate",
                      "text-sm sm:text-base",
                      isActive
                        ? "lg:text-2xl xl:text-3xl whitespace-nowrap"
                        : "lg:text-sm xl:text-base"
                    )}
                  >
                    {project.title}
                  </h3>
                </div>

                {/* Expanded info — only visible when active */}
                <div
                  className="absolute inset-0 flex items-center p-5 sm:p-8 lg:p-12 xl:p-16"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "translateY(0)" : "translateY(30px)",
                    transition: "all 0.5s ease",
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  <div className="max-w-md">
                    <span
                      className={cn(
                        "inline-block text-xs sm:text-sm font-medium uppercase tracking-wider",
                        "px-3 py-1 sm:px-4 sm:py-1.5 rounded-full mb-3 sm:mb-4",
                        "bg-gradient-to-r shadow-lg",
                        project.gradient,
                        "text-white"
                      )}
                    >
                      {project.category}
                    </span>
                    <h3 className="font-heading text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-medium text-white mb-3 sm:mb-4">
                      {project.title}
                    </h3>
                    <div className="w-12 h-0.5 bg-white mb-3 sm:mb-4" />
                    <span className="inline-flex items-center gap-2 text-xs sm:text-sm lg:text-base text-white/90 hover:text-white transition-colors">
                      Visit site <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </span>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
