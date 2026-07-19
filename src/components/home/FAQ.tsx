"use client"

import { useState } from "react"
import { Container } from "@/components/shared/Container"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { FAQS } from "@/lib/constants"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-background py-16 sm:py-20 md:py-28 lg:py-36 relative overflow-hidden">
      <div className="section-divider" aria-hidden="true" />

      <Container>
        <ScrollReveal>
          <div className="mb-12 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
              FAQ
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Got Questions?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Frequently Asked Questions
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-3xl">
          {FAQS.map((faq, index) => (
            <ScrollReveal key={faq.question} delay={index * 80}>
              <div className="border-b border-white/10">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-4 py-5 sm:py-6 text-left hover:bg-white/[0.02] px-2 -mx-2 rounded-lg transition-colors duration-200"
                >
                  <span
                    className={cn(
                      "text-base sm:text-lg font-medium transition-colors duration-300",
                      openIndex === index
                        ? "text-primary"
                        : "text-foreground"
                    )}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-300",
                      openIndex === index && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    openIndex === index ? "max-h-96" : "max-h-0"
                  )}
                >
                  <p className="pb-6 px-2 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
