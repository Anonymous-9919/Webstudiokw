"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight } from "lucide-react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative w-full h-[100dvh] sm:h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        controlsList="nodownload noplaybackrate nofullscreen"
        disablePictureInPicture
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        poster="/images/hero-team.jpg"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content — centered heading */}
      <div className="absolute inset-0 z-[1] flex items-center justify-center text-center px-5 sm:px-8 lg:pl-[120px] xl:pl-[140px]">
        <h1
          className={`font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-[0.95] tracking-tight transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="block">Websites That</span>
          <span className="block">
            <span className="text-gradient">Convert.</span>
          </span>
          <span className="block">Built For Growth.</span>
        </h1>
      </div>

      {/* Bottom-left corner — Strategy link */}
      <a
        href="#services"
        className={`group absolute bottom-6 left-4 sm:bottom-10 sm:left-8 lg:left-[120px] xl:left-[140px] z-[2] inline-flex items-center gap-1 text-white border-b border-white/60 pb-1 text-[9px] sm:text-sm lg:text-lg font-normal leading-[1.4] transition-all duration-1000 delay-500 hover:border-white max-w-[45%] ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <span className="block sm:whitespace-nowrap">Strategy, Design &amp; Solutions</span>
        <ArrowUpRight className="w-2.5 h-2.5 sm:w-4 sm:h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </a>

      {/* Bottom-right corner — 250+ Projects */}
      <div
        className={`absolute bottom-6 right-4 sm:bottom-10 sm:right-8 z-[2] flex items-center gap-1.5 sm:gap-4 transition-all duration-1000 delay-500 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <span className="text-xl sm:text-4xl md:text-5xl font-heading font-normal text-white leading-[1.3]">
          250+
        </span>
        <span className="text-white/80 text-[9px] sm:text-sm lg:text-base font-normal leading-[1.3]">
          Projects completed
          <br />
          successfully
        </span>
      </div>
    </section>
  )
}
