"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"
import { AnimatedSection } from "@/components/animated-section"
import { translations } from "@/lib/translations"
import { CustomCursor } from "@/components/custom-cursor"

export default function Projects({ params }: { params: { lang: "en" | "fr" } }) {
  const lang = params?.lang || "en"
  const t = translations[lang] || translations.en

  return (
    <div className="min-h-screen bg-[#faf5f0]">
      <CustomCursor />
      <Navbar lang={lang} currentPage="projects" />

      {/* Hero */}
      <section className="px-8 pt-12 pb-16 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6">{t.projects.title}</h1>
            <p className="text-xl text-gray-600 max-w-2xl">{t.projects.description}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-8 pb-24 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.projects.items.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.tags}
                link={project.link}
                github={project.github}
                featured={index === 0}
                viewLive={t.projects.viewLive}
                viewCode={t.projects.viewCode}
                delay={index * 150}
              />
            ))}
          </div>
        </div>
      </section>

      {/* More Coming */}
      <section className="px-8 py-24 md:px-12 lg:px-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="w-20 h-20 mx-auto mb-6 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center">
              <span className="text-3xl text-gray-300">+</span>
            </div>
            <h2 className="text-2xl font-bold text-black mb-4">
              {lang === "en" ? "More Projects Coming Soon" : "Plus de Projets a Venir"}
            </h2>
            <p className="text-gray-600">
              {lang === "en"
                ? "I'm always working on new and exciting projects. Check back soon!"
                : "Je travaille toujours sur de nouveaux projets passionnants. Revenez bientot!"}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  )
}
