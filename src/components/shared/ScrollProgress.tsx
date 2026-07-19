"use client"

import { useScrollProgress } from "@/hooks/useScroll"

export function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div
      className="scroll-progress"
      style={{ width: `${progress * 100}%` }}
      aria-hidden="true"
    />
  )
}
