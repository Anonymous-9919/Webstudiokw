"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  parallax?: number
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  parallax = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [scrollOffset, setScrollOffset] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile, { passive: true })
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: isMobile ? 0.05 : 0.1, rootMargin: "0px 0px -40px 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [isMobile])

  useEffect(() => {
    if (parallax === 0) return

    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!ref.current) return
          const rect = ref.current.getBoundingClientRect()
          const windowHeight = window.innerHeight
          const elementCenter = rect.top + rect.height / 2
          const distanceFromCenter = elementCenter - windowHeight / 2
          setScrollOffset(distanceFromCenter * parallax * -0.1)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [parallax])

  const directionStyles = {
    up: "translate-y-8",
    down: "-translate-y-8",
    left: "translate-x-8",
    right: "-translate-x-8",
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${directionStyles[direction]}`,
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transform: isVisible && parallax !== 0
          ? `translate(0, 0) translateY(${scrollOffset}px)`
          : undefined,
        willChange: parallax !== 0 ? "transform" : undefined,
      }}
    >
      {children}
    </div>
  )
}
