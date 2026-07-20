"use client"

import { Container } from "@/components/shared/Container"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { TESTIMONIALS } from "@/lib/constants"
import { Star } from "lucide-react"

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  )
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            aria-hidden="true"
            className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-black/15"}`}
          />
      ))}
    </div>
  )
}

export function Testimonials() {
  const reviewCount = TESTIMONIALS.length

  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-36 relative overflow-hidden section-alt">
      <div className="section-divider" aria-hidden="true" />

      <Container className="relative z-10">
        {/* Header row: heading left, rating right */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <ScrollReveal>
            <div className="max-w-xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                Verified Reviews
              </p>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
                What Our Clients Say{" "}
                <span className="text-primary">on Google</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="flex items-center gap-4">
              <span className="font-heading text-5xl font-bold text-foreground sm:text-6xl">
                4.9
              </span>
              <div className="flex flex-col gap-1">
                <div className="flex gap-0.5" role="img" aria-label="4.9 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} aria-hidden="true" className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <GoogleIcon className="h-4 w-4" />
                  {reviewCount} reviews on Google
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Review cards grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <ScrollReveal key={testimonial.name} delay={i * 100}>
              <div className="group relative rounded-xl border border-black/[0.08] bg-white p-6 transition-all duration-500 hover:border-primary/30 hover:bg-white hover:shadow-lg hover:shadow-primary/5 h-full flex flex-col">
                {/* Quote icon */}
                <svg
                  className="h-10 w-10 text-black/10 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.182 11 15c0 1.933-1.567 3.5-3.5 3.5-1.193 0-2.31-.6-2.917-1.179zM14.583 17.321C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C19.591 11.69 21 13.182 21 15c0 1.933-1.567 3.5-3.5 3.5-1.193 0-2.31-.6-2.917-1.179z" />
                </svg>

                <StarRating rating={testimonial.rating} />

                <p className="mt-3 text-muted-foreground leading-relaxed flex-1 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="mt-6 pt-4 border-t border-black/[0.08]" />

                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-heading text-sm font-bold text-primary">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-foreground truncate">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground truncate">
                      {testimonial.business}
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <GoogleIcon className="h-3.5 w-3.5" />
                  <span className="truncate">{testimonial.date} &middot; Verified Google Review</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
