"use client"

import { Container } from "@/components/shared/Container"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { WHY_CHOOSE_US } from "@/lib/constants"
import { Shield, Clock, Smartphone, Headphones } from "lucide-react"

const iconMap = { Shield, Clock, Smartphone, Headphones }

export function WhyChooseUs() {
  return (
    <section className="section-alt py-20 sm:py-28 lg:py-36 relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" aria-hidden="true" />

      <Container className="relative z-10">
        <ScrollReveal>
          <SectionHeading
            title="Why Kuwait Businesses Choose Us"
            description="We're not just developers — we're your growth partners."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || Shield
            return (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="group relative rounded-xl border border-black/[0.08] bg-white backdrop-blur-sm p-6 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
