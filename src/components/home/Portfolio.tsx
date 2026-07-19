"use client"

import { useState } from "react"
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
        {/* Mobile: stacked tap-to-expand */}
        <div className="lg:hidden flex flex-col gap-3">
          {projects.map((project, index) => {
            const isActive = activePanel === index
            return (
              <div
                key={project.id}
                className="relative rounded-xl overflow-hidden cursor-pointer"
                style={{ height: isActive ? "240px" : "64px", transition: "height 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)" }}
                onClick={() => setActivePanel(isActive ? -1 : index)}
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

        {/* Desktop: click to expand horizontal accordion */}
        <div className="relative w-full hidden lg:flex flex-row gap-2 h-[80vh]">
          {projects.map((project, index) => {
            const isActive = activePanel === index
            return (
              <div
                key={project.id}
                role="button"
                tabIndex={0}
                onClick={() => setActivePanel(index)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setActivePanel(index) }}
                className={cn(
                  "relative rounded-xl overflow-hidden cursor-pointer block lg:h-full outline-none focus-visible:ring-2 focus-visible:ring-primary",
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
                    <div className="w-12 h-0.5 bg-white mb-4" />
                    <span className="inline-flex items-center gap-2 text-base text-white/90 hover:text-white transition-colors">
                      Visit site <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
