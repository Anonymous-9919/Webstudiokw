"use client"

import { useEffect, useRef } from "react"
import Lenis from "lenis"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 8.0,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.15,
      touchMultiplier: 1.5,
      lerp: 0.005,
    })

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }

    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf as unknown as gsap.TickerCallback)
    }
  }, [])

  return (
    <div ref={wrapperRef} id="smooth-wrapper">
      <div id="smooth-content">
        {children}
      </div>
    </div>
  )
}

export { gsap, ScrollTrigger }
