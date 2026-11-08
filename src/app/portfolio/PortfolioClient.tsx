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
    description: "Full-featured electronics ecommerce store with product catalog, secure checkout, and payment integration for the Kuwait market.",
    gradient: "from-blue-500 to-indigo-600",
    image: "/images/portfolio-ecommerce.jpg",
    url: "https://albatel.com.kw/",
  },
  {
    id: "malbatel",
    title: "Mal Batel",
    category: "Ecommerce Platform",
    description: "Modern online retail platform with product management, inventory tracking, and seamless payment integration.",
    gradient: "from-purple-500 to-pink-600",
    image: "/images/portfolio-fashion.jpg",
    url: "https://malbatel.com/",
  },
  {
    id: "kuwait-art",
    title: "Kuwait Art Company",
    category: "Corporate Website",
    description: "Professional art company website showcasing creative services, portfolio gallery, and client engagement tools.",
    gradient: "from-amber-500 to-orange-600",
    image: "/images/portfolio-realestate.jpg",
    url: "https://kuwait-art-company.vercel.app/",
  },
  {
    id: "alhilal-clinic",
    title: "Al Hilal Clinic",
    category: "Healthcare Website",
    description: "Modern clinic website with appointment booking system, service showcase, and patient information portal.",
    gradient: "from-teal-500 to-emerald-600",
    image: "/images/portfolio-clinic.jpg",
    url: "https://alhilalclinickw.vercel.app/",
  },
  {
    id: "epicworks",
    title: "Epic Works",
    category: "Business Website",
    description: "Corporate business website with professional design, service pages, and lead generation forms.",
    gradient: "from-zinc-600 to-slate-700",
    image: "/images/portfolio-auto.jpg",
    url: "https://epicworks.vercel.app/",
  },
  {
    id: "bluehorizon",
    title: "Blue Horizon",
    category: "Landing Page",
    description: "High-conversion landing page with modern design, clear value proposition, and strong call-to-action sections.",
    gradient: "from-cyan-500 to-blue-600",
    image: "/images/portfolio-restaurant.jpg",
    url: "https://bluehorizon-theta.vercel.app/",
  },
  {
    id: "pet-store-kwt",
    title: "Pet Store KWT",
    category: "Ecommerce Store",
    description: "Online pet store with product categories, popular brand collections, and cart checkout.",
    gradient: "from-lime-500 to-emerald-600",
    image: "/images/portfolio-pet-store-kwt.jpg",
    url: "https://petstorekwt-concept.vercel.app/",
  },
  {
    id: "pet-store-kuwait",
    title: "Pet Store Kuwait",
    category: "Ecommerce Store",
    description: "Bilingual online pet store with delivery or pickup, product browsing, and WhatsApp customer support.",
    gradient: "from-orange-400 to-amber-500",
    image: "/images/portfolio-pet-store-kuwait.jpg",
    url: "https://petstorekuwait.vercel.app/",
  },
  {
    id: "kabab-khas",
    title: "Kabab Khas",
    category: "Restaurant Ordering",
    description: "Restaurant ordering website with delivery, pickup, menu categories, and WhatsApp customer support.",
    gradient: "from-red-500 to-orange-600",
    image: "/images/portfolio-kabab-khas.jpg",
    url: "https://kababkhas.vercel.app/",
  },
  {
    id: "las-management",
    title: "LAS Management",
    category: "Management Web App",
    description: "Admin and employee management web application with secure sign-in access.",
    gradient: "from-violet-500 to-indigo-600",
    image: "/images/portfolio-las-management.jpg",
    url: "https://laskwt-webapp.vercel.app/",
  },
  {
    id: "las-store",
    title: "LAS Store",
    category: "Shopify Store",
    description: "Shopify ecommerce storefront created for the LAS brand.",
    gradient: "from-fuchsia-500 to-rose-600",
    image: "/images/portfolio-las-store.jpg",
    url: "https://las-8522.myshopify.com/",
  },
]

// A repeated final tile keeps the desktop collage visually continuous.
const desktopRows = [
  projects.slice(0, 4),
  projects.slice(4, 8),
  [...projects.slice(8), projects[0]],
]

export default function PortfolioPage() {
  const planeRef = useRef<HTMLDivElement>(null)
  const rowRefs = useRef<Array<HTMLDivElement | null>>([])
  const ctaTitleRef = useRef<HTMLHeadingElement>(null)
  const ctaBtnRef = useRef<HTMLDivElement>(null)
  const ctaSectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 3D plane entrance animation
      if (planeRef.current) {
        gsap.fromTo(
          planeRef.current,
          {
            y: -550,
            rotateX: 15,
            rotateZ: 20,
            opacity: 0.2,
          },
          {
            y: 380,
            rotateX: 0,
            rotateZ: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: planeRef.current,
              start: "top 90%",
              end: "bottom 20%",
              scrub: 0.5,
            },
          }
        )
      }

      // Row parallax alternating directions
      const animateRow = (row: HTMLDivElement | null, movingLeft: boolean) => {
        if (!row) return

        const getBounds = () => {
          const firstCard = row.firstElementChild as HTMLElement | null
          const lastCard = row.lastElementChild as HTMLElement | null

          if (!firstCard || !lastCard) return { min: 0, max: 0 }

          const start = -firstCard.offsetLeft
          const end = row.clientWidth - lastCard.offsetLeft - lastCard.offsetWidth

          return {
            min: Math.min(start, end),
            max: Math.max(start, end),
          }
        }

        gsap.fromTo(
          row,
          { x: () => movingLeft ? getBounds().max + 200 : getBounds().min - 200 },
          {
            x: () => movingLeft ? getBounds().min - 200 : getBounds().max + 200,
            ease: "none",
            scrollTrigger: {
              trigger: row,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5,
              invalidateOnRefresh: true,
            },
          }
        )
      }

      rowRefs.current.forEach((row, index) => animateRow(row, index % 2 === 0))

      // CTA text 3D reveal
      if (ctaTitleRef.current) {
        const words = ctaTitleRef.current.querySelectorAll(".cta-word")
        gsap.fromTo(
          words,
          {
            y: 50,
            rotateX: -80,
            opacity: 0,
            transformOrigin: "50% 0%",
          },
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

      if (ctaSectionRef.current) {
        gsap.fromTo(
          ctaSectionRef.current,
          { y: 80 },
          {
            y: -80,
            ease: "none",
            scrollTrigger: {
              trigger: ctaSectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5,
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
          __html: JSON.stringify(generateBreadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Portfolio", url: `${SITE.url}/portfolio` },
          ])),
        }}
      />

      {/* Hero + Grid same section so cards animate over the text like Zelta */}
      <section className="hidden lg:block relative overflow-hidden pt-20 sm:pt-28 pb-12 sm:pb-16" style={{ perspective: "1200px", paddingBottom: "580px" }}>
        <Container>
          <div className="max-w-3xl text-left relative z-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
              {SITE.brand} &middot; Portfolio
            </p>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[0.95]">
              Case <span className="text-primary">Studies</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              The problem each brand brought us, what we built, and what happened next. Projects across Kuwait.
            </p>
          </div>
        </Container>
        <div ref={planeRef} className="origin-center" style={{ transformStyle: "preserve-3d" }}>
          {desktopRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              ref={(node) => {
                rowRefs.current[rowIndex] = node
              }}
              className={`flex gap-5 sm:gap-[70px] ${rowIndex < desktopRows.length - 1 ? "mb-5 sm:mb-[70px]" : ""} ${rowIndex % 2 === 0 ? "justify-end pr-0 sm:pr-20" : "pl-0 sm:pl-20"}`}
            >
              {row.map((project, projectIndex) => (
                <CaseCard key={`${project.id}-${rowIndex}-${projectIndex}`} project={project} />
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Mobile hero */}
      <section className="lg:hidden pt-20 sm:pt-28 pb-12 sm:pb-16">
        <Container>
          <div className="max-w-3xl text-left">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
              {SITE.brand} &middot; Portfolio
            </p>
            <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[0.95]">
              Case <span className="text-primary">Studies</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              The problem each brand brought us, what we built, and what happened next. Projects across Kuwait.
            </p>
          </div>
        </Container>
      </section>

      {/* Mobile: stacked cards for the rest */}
      <section className="lg:hidden pb-16 sm:pb-20 bg-background">
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
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.category} by ${SITE.brand} in Kuwait`}
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

      {/* CTA Section separate from grid */}
      <section ref={ctaSectionRef} className="section-alt relative py-16 sm:py-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">Work with us</p>
            <h2
              ref={ctaTitleRef}
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-foreground"
              style={{ perspective: "400px" }}
            >
              <span className="cta-word inline-block mr-[0.3em]">We</span>
              <span className="cta-word inline-block mr-[0.3em]">would</span>
              <span className="cta-word inline-block mr-[0.3em]">love</span>
              <span className="cta-word inline-block mr-[0.3em]">to</span>
              <span className="cta-word inline-block mr-[0.3em]">hear</span>
              <span className="cta-word inline-block mr-[0.3em]">more</span>
              <br className="hidden sm:block" />
              <span className="cta-word inline-block mr-[0.3em]">about</span>
              <span className="cta-word inline-block mr-[0.3em]">your</span>
              <span className="cta-word inline-block">project</span>
            </h2>
            <div ref={ctaBtnRef} className="mt-8">
              <WhatsAppButton size="lg">
                Let&apos;s talk to us <ArrowUpRight className="ml-1.5 h-4 w-4" />
              </WhatsAppButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

function CaseCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block shrink-0 w-[300px] sm:w-[480px] h-[240px] sm:h-[384px] rounded-[18px] overflow-hidden no-underline"
      style={{ background: "rgb(19, 17, 20)" }}
    >
      {/* Image */}
      <Image
        src={project.image}
        alt={`${project.title} - ${project.category} by ${SITE.brand} in Kuwait`}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 640px) 300px, 480px"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-350"
        style={{
          background: "linear-gradient(rgba(8,8,11,0) 45%, rgba(8,8,11,0.88) 100%)",
          opacity: 0.8,
        }}
      />

      {/* Meta */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-[22px] flex flex-col gap-1 z-10">
        <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-wider text-primary">
          {project.category}
        </span>
        <h3 className="font-heading text-sm sm:text-xl font-semibold text-white leading-tight">
          {project.title}
        </h3>
        <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-[#e0b89e] mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Read the case study
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
            <path d="M7 17 17 7M8 7h9v9" />
          </svg>
        </span>
      </div>
    </a>
  )
}
