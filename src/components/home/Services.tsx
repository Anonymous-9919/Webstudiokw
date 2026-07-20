"use client"

import { useState, useRef } from "react"
import { Container } from "@/components/shared/Container"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { WhatsAppButton } from "@/components/shared/WhatsAppButton"
import Image from "next/image"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    number: "01",
    title: "Business Websites",
    description:
      "We build modern, fast-loading websites that establish trust and convert visitors into customers for Kuwait businesses.",
    image: "/images/service-web.jpg",
    subServices: ["Custom Design", "SEO Optimized", "Mobile-First", "Fast Loading"],
  },
  {
    number: "02",
    title: "Ecommerce Stores",
    description:
      "Full-featured online stores with product catalogs, secure checkout, and payment integration tailored for the Kuwait market.",
    image: "/images/service-ecommerce.jpg",
    subServices: ["Product Management", "Secure Checkout", "KWD Currency", "Payment Gateway"],
  },
  {
    number: "03",
    title: "Custom Web Apps",
    description:
      "Tailored web applications that automate your business processes and improve operational efficiency.",
    image: "/images/service-custom.jpg",
    subServices: ["Business Automation", "API Integration", "Dashboard & Analytics", "Cloud Hosting"],
  },
  {
    number: "04",
    title: "Brand & Identity",
    description:
      "Complete brand identity packages including logo design, brand guidelines, and digital asset creation.",
    image: "/images/about-us.jpg",
    subServices: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Social Media Kit"],
  },
]

export function Services() {
  const [activeService, setActiveService] = useState(0)
  const [hoverProgress, setHoverProgress] = useState(0)
  const ballRef = useRef<HTMLDivElement>(null)

  const handlePointerMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!ballRef.current) return
    const rect = ballRef.current.getBoundingClientRect()
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY
    const x = (clientX - rect.left) / rect.width
    const y = (clientY - rect.top) / rect.height
    const dist = Math.sqrt(Math.pow(x - 0.5, 2) + Math.pow(y - 0.5, 2))
    setHoverProgress(Math.max(0, 1 - dist * 2))
  }

  return (
    <section id="services" className="py-16 sm:py-20 md:py-28 lg:py-36 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Left column */}
          <div className="lg:col-span-4">
            <ScrollReveal>
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
                service
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Services That Actually Deliver
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                At <strong className="text-foreground">WebStudioKW</strong>, we make it our utmost priority to deliver the best possible results to our clients. Our team here can help you connect with your customers and be well-represented online.
              </p>
              <div className="mt-6">
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground/30 pb-1 hover:border-primary hover:text-primary transition-all duration-300 group"
                >
                  View all services
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </ScrollReveal>

            {/* Service image with Zelta ball overlay */}
            <ScrollReveal delay={200} className="mt-10">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden hidden lg:block">
                {services.map((service, index) => (
                  <Image
                    key={service.number}
                    src={service.image}
                    alt={`Professional ${service.title.toLowerCase()} design showcase by WebStudioKW`}
                    fill
                    className={cn(
                      "object-cover transition-all duration-700",
                      index === activeService
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105"
                    )}
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

                {/* Zelta-style ball that fills with color */}
                <div
                  ref={ballRef}
                  className="absolute inset-0 flex items-center justify-center pointer-events-auto cursor-pointer"
                  onMouseMove={handlePointerMove}
                  onTouchMove={handlePointerMove}
                >
                  <div
                    className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-full border-2 border-white/30 transition-all duration-300"
                    style={{
                      background: `conic-gradient(from 0deg, oklch(0.75 0.15 175) ${hoverProgress * 360}deg, transparent ${hoverProgress * 360}deg)`,
                    }}
                  >
                    <div className="absolute inset-1 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
                      <span className="font-heading text-lg font-bold text-primary">
                        {services[activeService].number}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right column - Service List — Zelta style accordion, clearly clickable */}
          <div className="lg:col-span-8">
            <div>
              {services.map((service, index) => (
                <button
                  key={service.number}
                  type="button"
                  aria-expanded={activeService === index}
                  onClick={() => setActiveService(index)}
                  onMouseEnter={() => setActiveService(index)}
                  className={cn(
                    "group border-t border-border/30 transition-all duration-500 cursor-pointer w-full text-left bg-transparent p-0",
                    index === services.length - 1 && "border-b",
                    "py-6 sm:py-8"
                  )}
                >
                  {/* Mobile image */}
                  <div className="lg:hidden relative h-40 sm:h-48 overflow-hidden rounded-lg mb-4">
                    <Image
                      src={service.image}
                      alt={`Professional ${service.title.toLowerCase()} design showcase by WebStudioKW`}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  </div>

                  <div className="flex items-start gap-4 sm:gap-6">
                    {/* Number */}
                    <span
                      className={cn(
                        "font-heading text-2xl sm:text-3xl font-medium transition-colors duration-500 shrink-0",
                        index === activeService
                          ? "text-primary"
                          : "text-muted-foreground/50 group-hover:text-muted-foreground/80"
                      )}
                    >
                      {service.number}
                    </span>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3">
                        <h3
                          className={cn(
                            "font-heading text-xl sm:text-2xl lg:text-[28px] font-normal leading-[1.3] transition-colors duration-500",
                            index === activeService
                              ? "text-foreground"
                              : "text-muted-foreground group-hover:text-white"
                          )}
                        >
                          {service.title}
                        </h3>
                        {/* Arrow indicator — always visible to show clickability */}
                        <ArrowRight
                          className={cn(
                            "w-5 h-5 shrink-0 transition-all duration-500",
                            index === activeService
                              ? "text-primary rotate-0 opacity-100"
                              : "text-muted-foreground/50 -rotate-45 opacity-80 group-hover:opacity-100 group-hover:rotate-0 group-hover:text-primary"
                          )}
                        />
                      </div>
                      <p
                        className={cn(
                          "mt-2 text-sm sm:text-base leading-relaxed transition-all duration-500 max-w-md",
                          index === activeService
                            ? "text-muted-foreground max-h-40 opacity-100"
                            : "max-h-0 opacity-0 overflow-hidden"
                        )}
                      >
                        {service.description}
                      </p>

                      {/* Sub-services */}
                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-500",
                          index === activeService
                            ? "max-h-60 opacity-100 mt-4"
                            : "max-h-0 opacity-0"
                        )}
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.subServices.map((sub) => (
                            <div
                              key={sub}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                            >
                              <span className="text-primary font-medium">+</span>
                              {sub}
                            </div>
                          ))}
                        </div>
                        <div className="mt-4">
                          <WhatsAppButton variant="outline" size="sm">
                            Get a Quote <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                          </WhatsAppButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
