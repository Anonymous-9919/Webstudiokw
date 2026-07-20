"use client"

import { Container } from "@/components/shared/Container"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { PROCESS_STEPS } from "@/lib/constants"
import { useParallax } from "@/hooks/useScroll"
import Image from "next/image"

const stepImages: Record<string, string> = {
  Discovery: "/images/process-discovery.jpg",
  Design: "/images/process-design.jpg",
  Development: "/images/process-dev.jpg",
  Launch: "/images/process-launch.jpg",
}

export function Process() {
  const { ref: bgRef, offset: bgOffset } = useParallax(0.1)

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-36">
      {/* Parallax background image */}
      <div ref={bgRef} className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/about-us.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.07]"
          style={{ transform: `translateY(${bgOffset}px) scale(1.1)` }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <Container className="relative z-10">
        <ScrollReveal>
          <SectionHeading
            title="Our Process"
            description="A proven 4-step workflow that delivers results on time, every time."
            align="center"
          />
        </ScrollReveal>

        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border lg:left-1/2 lg:-translate-x-px" aria-hidden="true" />

          <div className="space-y-12 lg:space-y-16">
            {PROCESS_STEPS.map((step, i) => {
              const isEven = i % 2 === 0
              return (
                <ScrollReveal
                  key={step.title}
                  delay={i * 150}
                  direction={isEven ? "left" : "right"}
                >
                  <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Step number */}
                    <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground font-heading font-bold flex items-center justify-center text-sm z-10 shadow-lg shadow-primary/20">
                      {step.step}
                    </div>

                    {/* Image side */}
                    <div className={`pl-20 lg:pl-0 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <div className="relative aspect-video overflow-hidden rounded-xl border border-border/50 bg-card/50">
                        <Image
                          src={stepImages[step.title] || "/images/process-discovery.jpg"}
                          alt={`${step.title} phase — ${step.description}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      </div>
                    </div>

                    {/* Content side */}
                    <div className={`pl-20 lg:pl-0 ${isEven ? "lg:order-2 lg:pl-12" : "lg:order-1 lg:pr-12 lg:text-right"}`}>
                      <span className="text-sm font-medium text-primary">Step {step.step}</span>
                      <h3 className="mt-2 font-heading text-2xl font-bold text-foreground">{step.title}</h3>
                      <p className="mt-3 text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
