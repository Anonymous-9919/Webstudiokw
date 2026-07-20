"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { NAV_LINKS, SITE } from "@/lib/constants"
import { X, Phone } from "lucide-react"
import { WhatsAppButton } from "@/components/shared/WhatsAppButton"

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
  { label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
  { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedInIcon },
  { label: "Twitter", href: "https://twitter.com", icon: TwitterIcon },
]

const OFFCANVAS_LINKS = [
  { label: "Our Story", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      {/* ===== MOBILE + TABLET: Top horizontal header ===== */}
      <header
        className={`fixed top-0 left-0 right-0 z-[9991] lg:hidden mix-blend-exclusion border-b border-white/[0.07] ${
          open ? "opacity-0 invisible pointer-events-none" : "opacity-100 visible"
        }`}
        style={{ background: "rgba(0,0,0,0)" }}
      >
        <nav aria-label="Main navigation" className="flex items-center justify-between px-4 sm:px-6 h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="" width={160} height={32} className="h-6 w-auto" priority aria-hidden="true" />
            <span className="font-heading font-bold text-lg tracking-tight text-white leading-none">WebStudioKW</span>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="flex items-center justify-center w-11 h-11 text-white hover:opacity-70 transition-opacity"
              aria-label="Call us"
            >
              <Phone className="h-4 w-4" />
            </a>

            <button
              onClick={() => setOpen(true)}
              className="flex items-center justify-center w-10 h-10 text-white hover:opacity-70 transition-opacity"
              aria-label="Open menu"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="3" cy="3" r="1.5" fill="currentColor" />
                <circle cx="10" cy="3" r="1.5" fill="currentColor" />
                <circle cx="17" cy="3" r="1.5" fill="currentColor" />
                <circle cx="3" cy="10" r="1.5" fill="currentColor" />
                <circle cx="10" cy="10" r="1.5" fill="currentColor" />
                <circle cx="17" cy="10" r="1.5" fill="currentColor" />
                <circle cx="3" cy="17" r="1.5" fill="currentColor" />
                <circle cx="10" cy="17" r="1.5" fill="currentColor" />
                <circle cx="17" cy="17" r="1.5" fill="currentColor" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* ===== DESKTOP: Left-side vertical sidebar ===== */}
      {/* Zelta-style: mix-blend-exclusion with transparent bg, white content → auto-inverts */}
      <nav
        aria-label="Main navigation"
        className={`fixed top-0 left-0 z-[9991] h-screen w-[75px] hidden lg:flex flex-col items-center justify-between py-[50px] pb-5 mix-blend-exclusion border-r border-white/[0.07] ${
          open ? "opacity-0 invisible pointer-events-none" : "opacity-100 visible"
        }`}
        style={{ background: "rgba(0,0,0,0)" }}
      >
        {/* Top: Logo vertical */}
        <Link
          href="/"
          className="flex flex-col items-center gap-2"
        >
          <span
            className="font-heading font-bold text-sm tracking-tight text-white"
            style={{ writingMode: "vertical-lr", textOrientation: "mixed", transform: "rotate(180deg)" }}
          >
            WebStudioKW
          </span>
          <Image src="/logo.png" alt="" width={40} height={80} className="w-8 h-auto" priority aria-hidden="true" />
        </Link>

        {/* Middle: Menu icon */}
        <button
          onClick={() => setOpen(true)}
          className="flex items-center justify-center w-[22px] h-[25px] hover:opacity-70 transition-opacity"
          aria-label="Open menu"
        >
          <svg width="22" height="25" viewBox="0 0 22 25" fill="none">
            <circle cx="3.5" cy="3.5" r="2.5" fill="white" />
            <circle cx="11" cy="3.5" r="2.5" fill="white" />
            <circle cx="18.5" cy="3.5" r="2.5" fill="white" />
            <circle cx="3.5" cy="12.5" r="2.5" fill="white" />
            <circle cx="11" cy="12.5" r="2.5" fill="white" />
            <circle cx="18.5" cy="12.5" r="2.5" fill="white" />
            <circle cx="3.5" cy="21.5" r="2.5" fill="white" />
            <circle cx="11" cy="21.5" r="2.5" fill="white" />
            <circle cx="18.5" cy="21.5" r="2.5" fill="white" />
          </svg>
        </button>

        {/* Bottom: Call Us Now + Phone vertical */}
        <div className="flex flex-col items-center">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="transition-colors block hover:opacity-80"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              transform: "rotate(180deg)",
              color: "white",
            }}
          >
            <p className="text-[13px] font-light leading-[1.3] mb-2">
              Call Us Now
            </p>
            <p className="text-[15px] font-medium leading-[1.3] tracking-wide">
              {SITE.phone}
            </p>
          </a>
        </div>
      </nav>

      {/* ===== FULLSCREEN OFFCANVAS MENU ===== */}
      <div
        className={`fixed inset-0 z-[9999] bg-[#050508] transition-all duration-700 ease-out ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Close button — top right, like Zelta */}
        <button
          onClick={() => setOpen(false)}
          className="fixed top-5 right-5 sm:top-8 sm:right-8 z-[10000] flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 text-white hover:opacity-70 transition-opacity"
          aria-label="Close menu"
        >
          <X className="h-7 w-7 sm:h-8 sm:w-8" />
        </button>

        <div className="h-full overflow-y-auto flex flex-col lg:grid lg:grid-cols-[0.9fr_3fr_1.3fr]">
          {/* Left column — Logo, Social, Quick Links (order 2 on mobile, normal on desktop) */}
          <div className="flex flex-col justify-center gap-8 sm:gap-10 px-6 sm:px-10 lg:px-12 pt-20 pb-8 lg:py-0 order-2 lg:order-none">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3"
            >
              <Image src="/logo.png" alt="" width={200} height={40} className="h-8 w-auto" aria-hidden="true" />
              <span className="font-heading font-bold text-2xl text-white text-left leading-none">WebStudioKW</span>
            </Link>

            <div>
              <h3 className="text-sm font-medium uppercase tracking-widest text-white/50 mb-4 text-left">
                Follow Us
              </h3>
              <ul className="flex flex-col gap-3 items-start">
                {SOCIAL_LINKS.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-base text-white/80 hover:text-white transition-colors"
                    >
                      <social.icon className="h-4 w-4" />
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium uppercase tracking-widest text-white/50 mb-4 text-left">
                Quick Links
              </h3>
              <ul className="flex flex-col gap-3 items-start">
                {OFFCANVAS_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-base text-white/80 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Center — Main nav (order 1 on mobile, normal on desktop) */}
          <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-12 py-8 lg:py-0 order-1 lg:order-none">
            <nav aria-label="Main menu" className="flex flex-col items-start gap-3 sm:gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={`font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight transition-colors ${
                    pathname === link.href
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right — Contact info (order 3 on mobile, normal on desktop) */}
          <div className="flex flex-col justify-center gap-8 px-6 sm:px-10 lg:px-12 py-8 lg:py-0 pb-16 lg:pb-0 order-3 lg:order-none">
            <div>
              <h3 className="text-sm font-medium uppercase tracking-widest text-white/50 mb-4 text-left">
                Get in touch
              </h3>
              <ul className="flex flex-col gap-3 text-base text-white/80 items-start">
                <li className="font-medium text-white">Kuwait</li>
                <li>
                  <a
                    href={`tel:${SITE.phoneRaw}`}
                    className="hover:text-white transition-colors"
                  >
                    {SITE.phone}
                  </a>
                </li>
                <li>{SITE.location}</li>
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="hover:text-white transition-colors"
                  >
                    {SITE.email}
                  </a>
                </li>
              </ul>
            </div>

            <div onClick={() => setOpen(false)}>
              <WhatsAppButton size="lg" className="w-full justify-center">
                Get a Quote
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
