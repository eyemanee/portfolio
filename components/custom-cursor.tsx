"use client"

import { useEffect, useRef, useState } from "react"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [color, setColor] = useState("#000000")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)

      const element = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement
      if (element) {
        const computedStyle = window.getComputedStyle(element)
        const textColor = computedStyle.color
        setColor(textColor)
      }
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className={`fixed pointer-events-none z-50 transition-opacity duration-150 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className="w-8 h-8 rounded-full border-2 pointer-events-none"
        style={{
          borderColor: color,
          boxShadow: `0 0 8px ${color}40`,
        }}
      />
    </div>
  )
}
