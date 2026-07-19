"use client"

import { useEffect, useRef, useState, useCallback } from "react"

export function useScrollReveal(options?: { threshold?: number; rootMargin?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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
      { threshold: options?.threshold ?? 0.1, rootMargin: options?.rootMargin ?? "0px 0px -50px 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [options?.threshold, options?.rootMargin])

  return { ref, isVisible }
}

export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  const handleScroll = useCallback(() => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const windowHeight = window.innerHeight
    const elementCenter = rect.top + rect.height / 2
    const distanceFromCenter = elementCenter - windowHeight / 2
    setOffset(distanceFromCenter * speed * -1)
  }, [speed])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return { ref, offset }
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return progress
}
