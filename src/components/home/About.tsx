"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/shared/Container"
import { WhatsAppButton } from "@/components/shared/WhatsAppButton"
import { gsap } from "@/components/shared/SmoothScroll"
import { ScrollTrigger } from "@/components/shared/SmoothScroll"

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const imgLeftRef = useRef<HTMLDivElement>(null)
  const imgRightRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { y: 80 },
          {
            y: -30,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          }
        )
      }

      if (imgLeftRef.current) {
        gsap.fromTo(
          imgLeftRef.current,
          { y: 60 },
          {
            y: -40,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        )
      }

      if (imgRightRef.current) {
        gsap.fromTo(
          imgRightRef.current,
          { y: -20 },
          {
            y: 50,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 2,
            },
          }
        )
      }

      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { y: 40 },
          {
            y: -15,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 2,
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-28 lg:py-36 relative section-alt"
    >
      <div className="section-divider" aria-hidden="true" />

      <Container className="relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-center max-w-4xl mx-auto leading-tight mb-16"
        >
          Choose The Best{" "}
          <span className="text-primary">Web Development</span>{" "}
          Agency in Kuwait
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Zelta-style overlapping images */}
          <div className="relative">
            <div ref={imgLeftRef} className="relative w-[75%] aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/about-us.jpg"
                alt="WebStudioKW team working on web development projects in Kuwait"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 75vw, 37vw"
                priority
              />
            </div>

            <div
              ref={imgRightRef}
              className="absolute bottom-0 right-0 w-[45%] aspect-square overflow-hidden rounded-xl border-4 border-white shadow-2xl"
            >
              <Image
                src="/images/hero-team.jpg"
                alt="WebStudioKW developers collaborating on website design"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 45vw, 22vw"
              />
            </div>

            <div
              className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-20 pointer-events-none"
              style={{
                background: "radial-gradient(circle, oklch(0.75 0.15 175 / 0.6), transparent 70%)",
              }}
              aria-hidden="true"
            />
          </div>

          {/* Right — Text content */}
          <div ref={textRef} className="flex flex-col gap-6">
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              As the leading web development agency in Kuwait, we at
              WebStudioKW are dedicated to helping businesses grow through
              modern, conversion-focused websites. Whether you need a business
              website, ecommerce store, or custom web application, we&apos;ve got
              you covered.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              With us by your side, be pioneers when it comes to your digital
              presence. Our team of experienced developers and designers can be
              your guiding light towards excellence. Reach out to WebStudioKW
              and make sure you are best represented online.
            </p>
            <div className="pt-4">
              <WhatsAppButton
                message="Hi WebStudioKW! I'd like to get a quote for a web development project."
                size="lg"
              >
                Get a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
