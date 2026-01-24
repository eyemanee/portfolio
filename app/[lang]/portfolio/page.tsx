"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { translations } from "@/lib/translations"
import { CustomCursor } from "@/components/custom-cursor"

const portfolioItems = {
  en: [
    {
      id: 1,
      title: "MegaVolt Launcher",
      category: "web",
      description: "A sleek, modern game launcher with performance optimization and beautiful UI.",
      image: "M",
      link: "https://launcher-megavolt.vercel.app",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      category: "web",
      description: "Full-featured online store with cart, checkout, and admin dashboard.",
      image: "E",
      link: "#",
      tags: ["React", "Node.js", "PostgreSQL"],
    },
    {
      id: 3,
      title: "Brand Identity Design",
      category: "design",
      description: "Complete brand identity including logo, colors, and guidelines.",
      image: "B",
      link: "#",
      tags: ["Figma", "Illustrator", "Branding"],
    },
    {
      id: 4,
      title: "Mobile App UI",
      category: "mobile",
      description: "Modern mobile app interface design with intuitive navigation.",
      image: "A",
      link: "#",
      tags: ["Figma", "UI/UX", "Prototyping"],
    },
    {
      id: 5,
      title: "Dashboard Analytics",
      category: "web",
      description: "Real-time analytics dashboard with charts and data visualization.",
      image: "D",
      link: "#",
      tags: ["React", "D3.js", "REST API"],
    },
    {
      id: 6,
      title: "Social Media App",
      category: "mobile",
      description: "Social networking app with real-time messaging and content sharing.",
      image: "S",
      link: "#",
      tags: ["React Native", "Firebase", "WebSocket"],
    },
  ],
  fr: [
    {
      id: 1,
      title: "MegaVolt Launcher",
      category: "web",
      description: "Un lanceur de jeux moderne et elegant avec optimisation des performances.",
      image: "M",
      link: "https://launcher-megavolt.vercel.app",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Plateforme E-Commerce",
      category: "web",
      description: "Boutique en ligne complete avec panier, paiement et tableau de bord admin.",
      image: "E",
      link: "#",
      tags: ["React", "Node.js", "PostgreSQL"],
    },
    {
      id: 3,
      title: "Identite de Marque",
      category: "design",
      description: "Identite de marque complete incluant logo, couleurs et directives.",
      image: "B",
      link: "#",
      tags: ["Figma", "Illustrator", "Branding"],
    },
    {
      id: 4,
      title: "UI Application Mobile",
      category: "mobile",
      description: "Design d'interface d'application mobile moderne avec navigation intuitive.",
      image: "A",
      link: "#",
      tags: ["Figma", "UI/UX", "Prototyping"],
    },
    {
      id: 5,
      title: "Dashboard Analytique",
      category: "web",
      description: "Tableau de bord analytique en temps reel avec graphiques et visualisation.",
      image: "D",
      link: "#",
      tags: ["React", "D3.js", "REST API"],
    },
    {
      id: 6,
      title: "App Reseau Social",
      category: "mobile",
      description: "Application de reseau social avec messagerie en temps reel.",
      image: "S",
      link: "#",
      tags: ["React Native", "Firebase", "WebSocket"],
    },
  ],
}

export default function Portfolio({ params }: { params: { lang: "en" | "fr" } }) {
  const lang = params?.lang || "en"
  const t = translations[lang] || translations.en
  const [activeFilter, setActiveFilter] = useState("all")
  const items = portfolioItems[lang] || portfolioItems.en

  const filteredItems = activeFilter === "all" ? items : items.filter((item) => item.category === activeFilter)

  const categories = [
    { key: "all", label: t.portfolio.categories.all },
    { key: "web", label: t.portfolio.categories.web },
    { key: "design", label: t.portfolio.categories.design },
    { key: "mobile", label: t.portfolio.categories.mobile },
  ]

  return (
    <div className="min-h-screen bg-[#faf5f0]">
      <CustomCursor />
      <Navbar lang={lang} currentPage="portfolio" />

      {/* Hero */}
      <section className="px-8 pt-12 pb-8 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6">{t.portfolio.title}</h1>
            <p className="text-xl text-gray-600 max-w-2xl mb-8">{t.portfolio.description}</p>
          </AnimatedSection>

          {/* Filter */}
          <AnimatedSection delay={200}>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveFilter(cat.key)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === cat.key
                      ? "bg-black text-white"
                      : "bg-white text-black border border-gray-200 hover:border-black"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="px-8 py-16 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 100}>
                <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                    <span className="text-7xl font-bold text-gray-300 group-hover:scale-110 transition-transform duration-500">
                      {item.image}
                    </span>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      {item.link !== "#" && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                        >
                          <ExternalLink className="w-5 h-5 text-black" />
                        </a>
                      )}
                      <a
                        href="https://github.com/eyemanee"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                      >
                        <Github className="w-5 h-5 text-black" />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {lang === "en" ? "Have a Project in Mind?" : "Vous avez un Projet?"}
            </h2>
            <p className="text-gray-400 mb-8">
              {lang === "en"
                ? "Let's work together and bring your ideas to life."
                : "Travaillons ensemble et donnons vie a vos idees."}
            </p>
            <a href={`/${lang}/contact`}>
              <button className="px-8 py-4 bg-white text-black font-medium hover:bg-gray-200 transition-all duration-300 hover:scale-105">
                {t.nav.contact}
              </button>
            </a>
          </AnimatedSection>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  )
}
