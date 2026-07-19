"use client"

import { Container } from "@/components/shared/Container"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { ArrowRight } from "lucide-react"
import { SITE } from "@/lib/constants"

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-28 lg:py-36 section-alt">
      <div className="section-divider" aria-hidden="true" />

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
              Work with us
            </p>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
              We would love to hear more about your project
            </h2>

            <div className="mt-10">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium text-base rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_oklch(0.75_0.15_175/0.3)]"
              >
                Let&apos;s talk to us
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
