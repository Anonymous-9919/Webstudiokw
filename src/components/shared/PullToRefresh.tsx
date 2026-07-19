"use client"

import { useEffect, useRef, useState } from "react"

export function PullToRefresh() {
  const [pullDistance, setPullDistance] = useState(0)
  const [refreshing, setRefreshing] = useState(false)
  const startY = useRef<number | null>(null)
  const isAtTop = useRef(true)

  useEffect(() => {
    const handleScroll = () => {
      isAtTop.current = window.scrollY <= 0
    }

    const handleTouchStart = (e: TouchEvent) => {
      if (isAtTop.current) {
        startY.current = e.touches[0].clientY
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (startY.current === null || !isAtTop.current) return
      const diff = e.touches[0].clientY - startY.current
      if (diff > 0) {
        setPullDistance(Math.min(diff * 0.4, 100))
      }
    }

    const handleTouchEnd = () => {
      if (pullDistance > 80 && !refreshing) {
        setRefreshing(true)
        setPullDistance(60)
        window.location.reload()
      } else {
        setPullDistance(0)
      }
      startY.current = null
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("touchstart", handleTouchStart, { passive: true })
    window.addEventListener("touchmove", handleTouchMove, { passive: true })
    window.addEventListener("touchend", handleTouchEnd, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleTouchEnd)
    }
  }, [pullDistance, refreshing])

  if (pullDistance <= 0 && !refreshing) return null

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[10000] flex justify-center pointer-events-none"
      style={{
        transform: `translateY(${pullDistance - 50}px)`,
        transition: refreshing ? "transform 0.3s ease" : "none",
      }}
    >
      <div
        className="flex items-center gap-2 rounded-full border border-border px-4 py-2 shadow-lg backdrop-blur-md"
        style={{
          background: "color-mix(in oklch, var(--background) 85%, transparent)",
          opacity: Math.min(pullDistance / 60, 1),
        }}
      >
        <svg
          className={`h-4 w-4 text-primary ${refreshing ? "animate-spin" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transform: refreshing ? undefined : `rotate(${pullDistance * 3}deg)`,
            transition: refreshing ? "transform 0.3s ease" : "none",
          }}
        >
          <path d="M21 12a9 9 0 11-6.219-8.56" />
          <polyline points="21 3 21 9 15 9" />
        </svg>
        <span className="text-xs font-medium text-foreground whitespace-nowrap">
          {refreshing ? "Refreshing..." : pullDistance > 80 ? "Release to refresh" : "Pull to refresh"}
        </span>
      </div>
    </div>
  )
}
