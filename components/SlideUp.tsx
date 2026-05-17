"use client"

import React, { useEffect, useRef, useState, ReactNode } from "react"

interface Props {
  offset?: string
  threshold?: number
  once?: boolean
  children?: ReactNode
}

export default function SlideUp({
  children,
  offset = "0px 0px -8% 0px",
  threshold = 0.18,
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            setIsVisible(false)
          }
        })
      },
      { rootMargin: offset, threshold }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [offset, threshold, once])

  return (
    <div
      ref={ref}
      className={`relative will-change-transform transition-[opacity,transform] duration-[420ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {children}
    </div>
  )
}
