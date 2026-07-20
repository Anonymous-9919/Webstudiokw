"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/shared/Container"
import { WhatsAppButton } from "@/components/shared/WhatsAppButton"
import { SITE } from "@/lib/constants"
import { generateBreadcrumbSchema } from "@/lib/schema"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { gsap, ScrollTrigger } from "@/components/shared/SmoothScroll"

const projects = [
  {
    id: "albatel",
    title: "Al Batel",
    category: "Ecommerce Store",
    image: "/images/portfolio-ecommerce.jpg",
    url: "https://albatel.com.kw/",
  },
  {
    id: "malbatel",
    title: "Mal Batel",
    category: "Ecommerce Platform",
    image: "/images/portfolio-fashion.jpg",
    url: "https://malbatel.com/",
  },
  {
    id: "kuwait-art",
    title: "Kuwait Art Company",
    category: "Corporate Website",
    image: "/images/portfolio-realestate.jpg",
    url: "https://kuwait-art-company.vercel.app/",
  },
  {
    id: "alhilal-clinic",
    title: "Al Hilal Clinic",
    category: "Healthcare Website",
    image: "/images/portfolio-clinic.jpg",
    url: "https://alhilalclinickw.vercel.app/",
  },
  {
    id: "epicworks",
    title: "Epic Works",
    category: "Business Website",
    image: "/images/portfolio-auto.jpg",
    url: "https://epicworks.vercel.app/",
  },
  {
    id: "bluehorizon",
    title: "Blue Horizon",
    category: "Landing Page",
    image: "/images/portfolio-restaurant.jpg",
    url: "https://bluehorizon-theta.vercel.app/",
  },
]

// Repeat to fill 3 rows of 2 (6 cards per section, 12 total across both grids)
const fill = [...projects, ...projects]
const grid1Row1 = fill.slice(0, 2)
const grid1Row2 = fill.slice(2, 4)
const grid1Row3 = fill.slice(4, 6)
const grid2Row1 = fill.slice(6, 8)
const grid2Row2 = fill.slice(8, 10)
const grid2Row3 = fill.slice(10, 12)

export default function PortfolioPage() {
  const plane1Ref = useRef<HTMLDivElement>(null)
  const plane2Ref = useRef<HTMLDivElement>(null)
  const row1Ref = useRef<HTMLDivElement>(null)
  const row2Ref = useRef<HTMLDivElement>(null)
  const row3Ref = useRef<HTMLDivElement>(null)
  const row4Ref = useRef<HTMLDivElement>(null)
  const row5Ref = useRef<HTMLDivElement>(null)
  const row6Ref = useRef<HTMLDivElement>(null)
  const ctaTitleRef = useRef<HTMLHeadingElement>(null)
  const ctaBtnRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const animatePlane = (el: HTMLDivElement) => {
        gsap.fromTo(
          el,
          { y: -400, rotateX: 12, rotateZ: 14, opacity: 0.15 },
          {
            y: 400,
            rotateX: 0,
            rotateZ: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 95%",
              end: "bottom 10%",
              scrub: 0.4,
            },
          }
        )
      }

      const animateRow = (
        el: HTMLDivElement,
        fromX: number,
        toX: number
      ) => {
        gsap.fromTo(
          el,
          { x: fromX },
          {
            x: toX,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5,
            },
          }
        )
      }

      if (plane1Ref.current) animatePlane(plane1Ref.current)
      if (plane2Ref.current) animatePlane(plane2Ref.current)

      if (row1Ref.current) animateRow(row1Ref.current, 120, -120)
      if (row2Ref.current) animateRow(row2Ref.current, -120, 120)
      if (row3Ref.current) animateRow(row3Ref.current, 120, -120)
      if (row4Ref.current) animateRow(row4Ref.current, 120, -120)
      if (row5Ref.current) animateRow(row5Ref.current, -120, 120)
      if (row6Ref.current) animateRow(row6Ref.current, 120, -120)

      // CTA text 3D reveal
      if (ctaTitleRef.current) {
        const words = ctaTitleRef.current.querySelectorAll(".cta-word")
        gsap.fromTo(
          words,
          { y: 50, rotateX: -80, opacity: 0, transformOrigin: "50% 0%" },
          {
            y: 0,
            rotateX: 0,
            opacity: 1,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: ctaTitleRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }

      if (ctaBtnRef.current) {
        gsap.fromTo(
          ctaBtnRef.current,
          { y: -70, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ctaBtnRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: SITE.url },
              { name: "Portfolio", url: `${SITE.url}/portfolio` },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-background pt-20 sm:pt-28 pb-8 sm:pb-12">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[0.95]">
              Case <span className="text-primary">Studies</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              The problem each brand brought us, what we built, and what
              happened next &mdash; projects across Kuwait.
            </p>
          </div>
        </Container>
      </section>

      {/* 3D Perspective Grid — left aligned, transparent bg */}
      <section
        className="relative pb-6 sm:pb-10"
        style={{ perspective: "1200px" }}
      >
        <div
          ref={plane1Ref}
          className="origin-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            ref={row1Ref}
            className="flex gap-4 sm:gap-[60px] mb-4 sm:mb-[60px] pl-0 sm:pl-8"
          >
            {grid1Row1.map((p) => (
              <CaseCard key={`r1-${p.id}`} project={p} />
            ))}
          </div>
          <div
            ref={row2Ref}
            className="flex gap-4 sm:gap-[60px] mb-4 sm:mb-[60px] pl-0 sm:pl-8"
          >
            {grid1Row2.map((p) => (
              <CaseCard key={`r2-${p.id}`} project={p} />
            ))}
          </div>
          <div
            ref={row3Ref}
            className="flex gap-4 sm:gap-[60px] pl-0 sm:pl-8"
          >
            {grid1Row3.map((p) => (
              <CaseCard key={`r3-${p.id}`} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Second grid — simple cards with "Visit live site" */}
      <section className="relative pb-10 sm:pb-16">
        <div
          ref={plane2Ref}
          className="origin-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            ref={row4Ref}
            className="flex gap-4 sm:gap-[60px] mb-4 sm:mb-[60px] pl-0 sm:pl-8"
          >
            {grid2Row1.map((p) => (
              <SimpleCard key={`r4-${p.id}`} project={p} />
            ))}
          </div>
          <div
            ref={row5Ref}
            className="flex gap-4 sm:gap-[60px] mb-4 sm:mb-[60px] pl-0 sm:pl-8"
          >
            {grid2Row2.map((p) => (
              <SimpleCard key={`r5-${p.id}`} project={p} />
            ))}
          </div>
          <div
            ref={row6Ref}
            className="flex gap-4 sm:gap-[60px] pl-0 sm:pl-8"
          >
            {grid2Row3.map((p) => (
              <SimpleCard key={`r6-${p.id}`} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Mobile stacked */}
      <section className="lg:hidden pb-16 sm:pb-20">
        <Container>
          <div className="flex flex-col gap-4">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-[18px] no-underline"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[18px]">
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.category} by ${SITE.brand}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,11,0.88)] via-[rgba(8,8,11,0.2)] to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-1">
                    <span className="text-[11px] font-medium uppercase tracking-wider text-primary">
                      {project.category}
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-xs text-[#e0b89e] mt-1">
                      Visit site <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
              Work with us
            </p>
            <h2
              ref={ctaTitleRef}
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-foreground"
              style={{ perspective: "400px" }}
            >
              <span className="cta-word inline-block mr-[0.3em]">We</span>
              <span className="cta-word inline-block mr-[0.3em]">
                would
              </span>
              <span className="cta-word inline-block mr-[0.3em]">
                love
              </span>
              <span className="cta-word inline-block mr-[0.3em]">to</span>
              <span className="cta-word inline-block mr-[0.3em]">
                hear
              </span>
              <span className="cta-word inline-block mr-[0.3em]">
                more
              </span>
              <br className="hidden sm:block" />
              <span className="cta-word inline-block mr-[0.3em]">
                about
              </span>
              <span className="cta-word inline-block mr-[0.3em]">
                your
              </span>
              <span className="cta-word inline-block">project</span>
            </h2>
            <div ref={ctaBtnRef} className="mt-8">
              <WhatsAppButton size="lg">
                Let&apos;s talk to us{" "}
                <ArrowUpRight className="ml-1.5 h-4 w-4" />
              </WhatsAppButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

function CaseCard({
  project,
}: {
  project: (typeof projects)[number]
}) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block shrink-0 w-[300px] sm:w-[480px] h-[240px] sm:h-[384px] rounded-[18px] overflow-hidden no-underline"
      style={{ background: "rgb(19, 17, 20)" }}
    >
      <Image
        src={project.image}
        alt={`${project.title} - ${project.category} by ${SITE.brand}`}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 640px) 300px, 480px"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(rgba(8,8,11,0) 45%, rgba(8,8,11,0.88) 100%)",
          opacity: 0.8,
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-[22px] flex flex-col gap-1 z-10">
        <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-wider text-primary">
          {project.category}
        </span>
        <h3 className="font-heading text-sm sm:text-xl font-semibold text-white leading-tight">
          {project.title}
        </h3>
        <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-[#e0b89e] mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Read the case study
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-3.5 w-3.5"
          >
            <path d="M7 17 17 7M8 7h9v9" />
          </svg>
        </span>
      </div>
    </a>
  )
}

function SimpleCard({
  project,
}: {
  project: (typeof projects)[number]
}) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block shrink-0 w-[300px] sm:w-[480px] h-[240px] sm:h-[384px] rounded-[18px] overflow-hidden no-underline"
      style={{ background: "rgb(19, 17, 20)" }}
    >
      <Image
        src={project.image}
        alt={`${project.title} - ${project.category} by ${SITE.brand}`}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 640px) 300px, 480px"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(rgba(8,8,11,0) 45%, rgba(8,8,11,0.88) 100%)",
          opacity: 0.8,
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-[22px] flex flex-col gap-1 z-10">
        <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-wider text-primary">
          {project.category}
        </span>
        <h3 className="font-heading text-sm sm:text-xl font-semibold text-white leading-tight">
          {project.title}
        </h3>
        <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-[#e0b89e] mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Visit live site
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-3.5 w-3.5"
          >
            <path d="M7 17 17 7M8 7h9v9" />
          </svg>
        </span>
      </div>
    </a>
  )
}
