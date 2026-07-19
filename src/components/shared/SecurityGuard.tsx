"use client"

import { useEffect } from "react"

export function SecurityGuard() {
  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    // Disable keyboard shortcuts for dev tools and source viewing
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === "F12") {
        e.preventDefault()
        return false
      }
      // Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+Shift+C (DevTools)
      if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "i" || e.key === "J" || e.key === "j" || e.key === "C" || e.key === "c")) {
        e.preventDefault()
        return false
      }
      // Ctrl+U (View Source)
      if (e.ctrlKey && (e.key === "U" || e.key === "u")) {
        e.preventDefault()
        return false
      }
      // Ctrl+S (Save)
      if (e.ctrlKey && (e.key === "S" || e.key === "s")) {
        e.preventDefault()
        return false
      }
      // Ctrl+P (Print)
      if (e.ctrlKey && (e.key === "P" || e.key === "p")) {
        e.preventDefault()
        return false
      }
      // Cmd+Option+I (Mac DevTools)
      if (e.metaKey && e.altKey && (e.key === "I" || e.key === "i")) {
        e.preventDefault()
        return false
      }
      // Cmd+Option+U (Mac View Source)
      if (e.metaKey && e.altKey && (e.key === "U" || e.key === "u")) {
        e.preventDefault()
        return false
      }
    }

    // Disable drag on images and links
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "IMG" || target.tagName === "A") {
        e.preventDefault()
        return false
      }
    }

    // Disable text selection on key elements (optional, prevents easy copying)
    const handleSelectStart = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.tagName === "IMG") {
        e.preventDefault()
        return false
      }
    }

    // Disable console output in production
    if (process.env.NODE_ENV === "production") {
      const noop = () => {}
      const originalConsole = { ...console }
      Object.keys(originalConsole).forEach((key) => {
          ;(console as unknown as Record<string, unknown>)[key] = noop
      })

      // Anti-debugging: slow down DevTools
      const devtoolsDetector = () => {
        const threshold = 160
        const start = performance.now()
        debugger
        const end = performance.now()
        if (end - start > threshold) {
          document.body.innerHTML = ""
          window.location.href = "about:blank"
        }
      }

      // Run devtools detection periodically
      const interval = setInterval(() => {
        try {
          devtoolsDetector()
        } catch {
          // debugger statement was caught
        }
      }, 5000)

      // Also detect on window resize (DevTools open causes resize)
      let resizeTimeout: ReturnType<typeof setTimeout>
      const handleResize = () => {
        clearTimeout(resizeTimeout)
        resizeTimeout = setTimeout(() => {
          const widthThreshold = window.outerWidth - window.innerWidth > 160
          const heightThreshold = window.outerHeight - window.innerHeight > 160
          if (widthThreshold || heightThreshold) {
            document.body.innerHTML = ""
            window.location.href = "about:blank"
          }
        }, 500)
      }

      window.addEventListener("resize", handleResize)

      return () => {
        clearInterval(interval)
        window.removeEventListener("resize", handleResize)
        window.removeEventListener("contextmenu", handleContextMenu)
        window.removeEventListener("keydown", handleKeyDown)
        window.removeEventListener("dragstart", handleDragStart)
        window.removeEventListener("selectstart", handleSelectStart)
        clearTimeout(resizeTimeout)
        Object.keys(originalConsole).forEach((key) => {
          ;(console as unknown as Record<string, unknown>)[key] = originalConsole[key as keyof Console]
        })
      }
    }

    window.addEventListener("contextmenu", handleContextMenu)
    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("dragstart", handleDragStart)
    window.addEventListener("selectstart", handleSelectStart)

    return () => {
      window.removeEventListener("contextmenu", handleContextMenu)
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("dragstart", handleDragStart)
      window.removeEventListener("selectstart", handleSelectStart)
    }
  }, [])

  return null
}
