"use client"

import { Container } from "@/components/shared/Container"
import { ScrollReveal } from "@/components/shared/ScrollReveal"

const workflowSteps = [
  {
    step: "step 01",
    number: "01",
    title: "Know Your\nBusiness",
    description: "Research Market, Define Your Goals",
  },
  {
    step: "step 02",
    number: "02",
    title: "Craft Strategic\nApproach",
    description: "Plan Architecture, Choose Tech Stack",
  },
  {
    step: "step 03",
    number: "03",
    title: "Build &\nDevelop",
    description: "Clean Code, Responsive Design, Fast Performance",
  },
  {
    step: "step 04",
    number: "04",
    title: "Launch &\nSupport",
    description: "Deploy, Monitor, Iterate for Growth",
  },
]

export function Workflow() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-28 lg:py-36 section-alt">
      <div className="section-divider" aria-hidden="true" />

      <Container>
        <ScrollReveal>
          <div className="mb-10 sm:mb-16">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
              Workflow
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              How we work
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed text-sm sm:text-base max-w-xl">
              Our streamlined process turns your vision into a high-performing digital product —
              from initial research to launch and beyond.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {workflowSteps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 120}>
              <div className="group relative flex flex-col p-6 sm:p-8 transition-all duration-500 border border-black/[0.08] hover:border-black/[0.12] bg-white hover:shadow-md rounded-xl h-full">
                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4 block">
                  {step.step}
                </span>

                <span className="font-heading text-[60px] sm:text-[80px] lg:text-[100px] font-medium leading-none mb-4 sm:mb-6 transition-colors duration-500 text-primary/15 group-hover:text-primary/30">
                  {step.number}
                </span>

                <h3 className="font-heading text-xl sm:text-2xl lg:text-[24px] font-medium text-foreground mb-3 leading-[1.3] whitespace-pre-line">
                  {step.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
