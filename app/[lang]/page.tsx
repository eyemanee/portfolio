"use client"

import Link from "next/link"
import { Github, ChevronDown, Code, Palette, Server, Wrench } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SkillCard } from "@/components/skill-card"
import { AnimatedSection } from "@/components/animated-section"
import { translations, skills } from "@/lib/translations"
import { CustomCursor } from "@/components/custom-cursor"

export default function Home({ params }: { params: { lang: "en" | "fr" } }) {
  const lang = params?.lang || "en"
  const t = translations[lang] || translations.en

  const skillCategories = [
    { key: "frontend", icon: <Code className="w-6 h-6" />, skills: skills.frontend },
    { key: "backend", icon: <Server className="w-6 h-6" />, skills: skills.backend },
    { key: "design", icon: <Palette className="w-6 h-6" />, skills: skills.design },
    { key: "tools", icon: <Wrench className="w-6 h-6" />, skills: skills.tools },
  ]

  return (
    <div className="min-h-screen bg-[#faf5f0]">
      <CustomCursor />
      <Navbar lang={lang} currentPage="home" />

      {/* Hero Section */}
      <section className="relative px-8 pt-12 pb-24 md:px-12 lg:px-20 min-h-[90vh] flex items-center">
        {/* Decorative circles */}
        <div className="absolute right-0 top-1/4 w-96 h-96 border border-gray-300/30 rounded-full -mr-48 animate-pulse" />
        <div className="absolute right-32 top-1/3 w-72 h-72 border border-gray-300/20 rounded-full -mr-32" />
        <div className="absolute right-64 bottom-0 w-80 h-80 border border-gray-300/25 rounded-full -mr-40" />

        <div className="relative z-10 max-w-3xl">
          <AnimatedSection>
            <p className="text-lg md:text-xl text-black mb-2">{t.home.greeting}</p>
            <p className="text-base md:text-lg text-gray-600 mb-6">
              {t.home.ceo}{" "}
              <a
                href="https://launcher-megavolt.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-black hover:underline transition-colors inline-flex items-center gap-1"
              >
                MegaVolt
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              </a>
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-8 leading-tight">
              {t.home.headline}
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <p className="text-base md:text-lg text-gray-700 mb-10 leading-relaxed max-w-2xl">
              {t.home.description}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={600}>
            <div className="flex items-center gap-4 flex-wrap">
              <Link href={`/${lang}/about`}>
                <button className="px-8 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                  {t.home.aboutBtn}
                </button>
              </Link>
              <a href="https://github.com/eyemanee" target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-3 border-2 border-black text-black font-medium hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  {t.home.githubBtn}
                </button>
              </a>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-gray-500 uppercase tracking-wider">{t.home.scrollDown}</span>
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-8 py-24 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">{t.skills.title}</h2>
            <p className="text-gray-600 mb-12">{t.skills.subtitle}</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCard
                key={category.key}
                title={t.skills.categories[category.key as keyof typeof t.skills.categories]}
                skills={category.skills}
                icon={category.icon}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-8 py-24 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">{t.experience.title}</h2>
            <p className="text-gray-600 mb-12">{t.experience.subtitle}</p>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-300 -translate-x-1/2" />

            {t.experience.timeline.map((item, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <div
                  className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-black rounded-full -translate-x-1/2 z-10" />

                  {/* Content */}
                  <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <span className="text-sm text-gray-500 font-medium">{item.year}</span>
                    <h3 className="text-xl font-bold text-black mt-1">{item.role}</h3>
                    <p className="text-gray-600 font-medium">{item.company}</p>
                    <p className="text-gray-500 mt-2">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-24 md:px-12 lg:px-20 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {lang === "en" ? "Let's Work Together" : "Travaillons Ensemble"}
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              {lang === "en"
                ? "Have a project in mind? I'd love to hear about it. Let's create something amazing together."
                : "Vous avez un projet en tete? J'aimerais en entendre parler. Creons quelque chose d'incroyable ensemble."}
            </p>
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
