"use client"

import React from "react"

import Link from "next/link"
import { Code, Palette, Smartphone, Star, Lightbulb, Settings } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { translations } from "@/lib/translations"
import { CustomCursor } from "@/components/custom-cursor"

const iconMap: Record<string, React.ReactNode> = {
  code: <Code className="w-6 h-6" />,
  palette: <Palette className="w-6 h-6" />,
  smartphone: <Smartphone className="w-6 h-6" />,
  star: <Star className="w-6 h-6" />,
  lightbulb: <Lightbulb className="w-6 h-6" />,
  settings: <Settings className="w-6 h-6" />,
}

export default function Services({ params }: { params: { lang: "en" | "fr" } }) {
  const lang = params?.lang || "en"
  const t = translations[lang] || translations.en

  return (
    <div className="min-h-screen bg-[#faf5f0]">
      <CustomCursor />
      <Navbar lang={lang} currentPage="services" />

      {/* Hero */}
      <section className="px-8 pt-12 pb-8 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6">{t.services.title}</h1>
            <p className="text-xl text-gray-600 max-w-2xl">{t.services.subtitle}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-8 py-16 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.items.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 100}>
                <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-black hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-14 h-14 bg-black text-white rounded-xl flex items-center justify-center mb-6">
                    {iconMap[service.icon]}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-24 md:px-12 lg:px-20 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.services.cta}</h2>
            <Link href={`/${lang}/contact`}>
              <button className="px-8 py-4 bg-white text-black font-medium hover:bg-gray-200 transition-all duration-300 hover:scale-105">
                {t.nav.contact}
              </button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  )
}
