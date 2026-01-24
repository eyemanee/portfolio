"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github, Star } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  link: string
  github?: string
  featured?: boolean
  viewLive: string
  viewCode: string
  delay?: number
}

export function ProjectCard({
  title,
  description,
  tags,
  link,
  github,
  featured,
  viewLive,
  viewCode,
  delay = 0,
}: ProjectCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={cardRef}
      className={`group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-black hover:shadow-2xl transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {featured && (
        <div className="absolute top-4 right-4 z-10 flex items-center gap-1 bg-black text-white px-3 py-1 rounded-full text-xs">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          Featured
        </div>
      )}

      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative p-6">
        <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-6 flex items-center justify-center group-hover:scale-[0.98] transition-transform duration-500">
          <span className="text-4xl font-bold text-gray-300 group-hover:text-gray-400 transition-colors">
            {title.charAt(0)}
          </span>
        </div>

        <h3 className="font-semibold text-xl mb-2 group-hover:text-black transition-colors">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {link && link !== "#" && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-800 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              {viewLive}
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-black text-black text-sm rounded-lg hover:bg-black hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              {viewCode}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
