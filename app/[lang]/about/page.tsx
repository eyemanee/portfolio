"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Download } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { translations } from "@/lib/translations"
import { CustomCursor } from "@/components/custom-cursor"

export default function About({ params }: { params: { lang: "en" | "fr" } }) {
  const lang = params?.lang || "en"
  const t = translations[lang] || translations.en

  const socialLinks = [
    { href: "https://github.com/eyemanee", icon: Github, label: "GitHub" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
    { href: "#", icon: Twitter, label: "Twitter" },
  ]

  return (
    <div className="min-h-screen bg-[#faf5f0]">
      <CustomCursor />
      <Navbar lang={lang} currentPage="about" />

      {/* Hero */}
      <section className="px-8 pt-12 pb-16 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <AnimatedSection>
              <div className="relative">
                <div className="w-full aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl flex items-center justify-center overflow-hidden">
                  <span className="text-9xl font-bold text-gray-400">A</span>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-black rounded-full -z-10" />
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-black rounded-full -z-10" />
              </div>
            </AnimatedSection>

            {/* Content */}
            <div>
              <AnimatedSection delay={200}>
                <span className="text-sm uppercase tracking-wider text-gray-500 mb-2 block">{t.about.subtitle}</span>
                <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">{t.about.title}</h1>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <div className="space-y-4 mb-8">
                  {t.about.bio.map((paragraph, index) => (
                    <p key={index} className="text-gray-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={600}>
                <div className="flex items-center gap-4 flex-wrap">
                  <a href="https://github.com/eyemanee" target="_blank" rel="noopener noreferrer">
                    <button className="px-6 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-all duration-300 flex items-center gap-2">
                      <Github className="w-5 h-5" />
                      GitHub
                    </button>
                  </a>
                  <button className="px-6 py-3 border-2 border-black text-black font-medium hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    {lang === "en" ? "Download CV" : "Telecharger CV"}
                  </button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-8 py-24 md:px-12 lg:px-20 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.about.stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 100}>
                <div className="text-center">
                  <span className="text-5xl md:text-6xl font-bold block mb-2">{stat.number}</span>
                  <span className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className="px-8 py-24 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              {lang === "en" ? "Let's Connect" : "Connectons-nous"}
            </h2>
            <p className="text-gray-600 mb-8">
              {lang === "en"
                ? "Follow me on social media to stay updated with my latest work and projects."
                : "Suivez-moi sur les reseaux sociaux pour rester informe de mes derniers travaux et projets."}
            </p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  )
}
