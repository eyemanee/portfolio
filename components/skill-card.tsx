"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"

interface SkillCardProps {
  title: string
  skills: string[]
  icon: React.ReactNode
  delay?: number
}

export function SkillCard({ title, skills, icon, delay = 0 }: SkillCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.2 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={cardRef}
      className={`group bg-white p-6 rounded-2xl border border-gray-200 hover:border-black hover:shadow-xl transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-black hover:text-white transition-colors duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
