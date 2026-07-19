"use client"

import { useEffect, useRef, useState } from "react"
import { SITE } from "@/lib/constants"
import { gsap } from "@/components/shared/SmoothScroll"

export function FloatingBall() {
  const ballRef = useRef<HTMLDivElement>(null)
  const fillRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const ctx = gsap.context(() => {
      if (ballRef.current) {
        gsap.fromTo(
          ballRef.current,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(1.7)",
            delay: 0.5,
          }
        )
      }
    })

    const handleScroll = () => {
      if (!fillRef.current) return
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0
      const deg = progress * 360
      fillRef.current.style.background = `conic-gradient(from -90deg, oklch(0.75 0.15 175) ${deg}deg, oklch(0.2 0.02 260) ${deg}deg)`
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      ctx.revert()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [mounted])

  if (!mounted) return null

  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-6 sm:bottom-8 sm:right-8 z-[9998] group"
      aria-label="Chat on WhatsApp"
    >
      <div
        className="absolute inset-0 rounded-full animate-ping opacity-20 hidden sm:block"
        style={{
          background: "radial-gradient(circle, oklch(0.75 0.15 175 / 0.3), transparent 70%)",
          animationDuration: "3s",
        }}
      />

      <div ref={ballRef} className="relative">
        <div
          ref={fillRef}
          className="w-[56px] h-[56px] sm:w-[68px] sm:h-[68px] rounded-full flex items-center justify-center transition-shadow duration-300 group-hover:shadow-[0_0_30px_oklch(0.75_0.15_175/0.5)]"
          style={{
            background: "conic-gradient(from -90deg, oklch(0.75 0.15 175) 0deg, oklch(0.2 0.02 260) 0deg)",
            boxShadow: "0 4px 20px oklch(0.75 0.15 175 / 0.3)",
          }}
        >
          <div className="w-[38px] h-[38px] sm:w-[58px] sm:h-[58px] rounded-full bg-[#0a0a0f] flex items-center justify-center ring-2 ring-[#0a0a0f]">
            <span
              className="font-heading font-bold tracking-wide leading-none text-white/90 text-[7px] sm:text-[11px]"
              style={{ whiteSpace: "nowrap" }}
            >
              Let&apos;s Talk
            </span>
          </div>
        </div>
      </div>
    </a>
  )
}
