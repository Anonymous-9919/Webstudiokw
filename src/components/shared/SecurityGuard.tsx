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

    return () => {
      window.removeEventListener("contextmenu", handleContextMenu)
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("dragstart", handleDragStart)
      window.removeEventListener("selectstart", handleSelectStart)
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
