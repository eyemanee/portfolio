"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <nav className="flex items-center px-8 py-6">
        <Link href="/">
          <button className="p-2 hover:bg-black/5 rounded-lg transition-colors flex items-center gap-2">
            <ArrowLeft className="w-5 h-5 text-black" />
            <span className="text-black font-medium">Back</span>
          </button>
        </Link>
      </nav>

      {/* Content */}
      <div className="px-8 py-20 md:px-12 lg:px-20 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-8">About Me</h1>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>
            I'm Aymane Elbouanani, a Designer and Coder passionate about building beautiful and functional web
            applications. With a focus on clean code and intuitive design, I create digital experiences that users love.
          </p>

          <p>
            As Co-CEO of MegaVolt, I lead a team of creative professionals dedicated to pushing the boundaries of web
            development and design. We believe that great products come from the intersection of design thinking and
            technical excellence.
          </p>

          <p>
            My expertise spans across frontend development, UI/UX design, and full-stack web applications. I'm committed
            to staying at the forefront of web technologies and best practices.
          </p>
        </div>

        <div className="mt-12">
          <a href="https://github.com/eyemanee" target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-3 border-2 border-black text-black font-medium hover:bg-black/5 transition-colors">
              Visit GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}
