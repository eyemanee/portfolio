"use client"

import { Download, GraduationCap, Briefcase, Globe } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { translations, skills } from "@/lib/translations"
import { CustomCursor } from "@/components/custom-cursor"

export default function Resume({ params }: { params: { lang: "en" | "fr" } }) {
  const lang = params?.lang || "en"
  const t = translations[lang] || translations.en

  return (
    <div className="min-h-screen bg-[#faf5f0]">
      <CustomCursor />
      <Navbar lang={lang} currentPage="resume" />

      {/* Hero */}
      <section className="px-8 pt-12 pb-8 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-4">{t.resume.title}</h1>
                <p className="text-xl text-gray-600">{t.resume.subtitle}</p>
              </div>
              <button className="px-6 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 self-start">
                <Download className="w-5 h-5" />
                {t.resume.download}
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="px-8 py-16 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Experience */}
              <AnimatedSection>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-black">{t.experience.title}</h2>
                </div>
                <div className="space-y-6">
                  {t.experience.timeline.map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-lg font-bold text-black">{item.role}</h3>
                        <span className="text-sm text-gray-500">{item.year}</span>
                      </div>
                      <p className="text-gray-600 font-medium mb-2">{item.company}</p>
                      <p className="text-gray-500">{item.description}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Education */}
              <AnimatedSection delay={200}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-black">{t.resume.education.title}</h2>
                </div>
                <div className="space-y-6">
                  {t.resume.education.items.map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-lg font-bold text-black">{item.degree}</h3>
                        <span className="text-sm text-gray-500">{item.year}</span>
                      </div>
                      <p className="text-gray-600 font-medium mb-2">{item.school}</p>
                      <p className="text-gray-500">{item.description}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Skills */}
              <AnimatedSection delay={100}>
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-bold text-black mb-4">{t.resume.skills.title}</h3>
                  <div className="space-y-4">
                    {Object.entries(skills).map(([category, items]) => (
                      <div key={category}>
                        <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">{category}</p>
                        <div className="flex flex-wrap gap-2">
                          {items.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Languages */}
              <AnimatedSection delay={200}>
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <div className="flex items-center gap-2 mb-4">
                    <Globe className="w-5 h-5 text-gray-600" />
                    <h3 className="text-lg font-bold text-black">{t.resume.languages.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {t.resume.languages.items.map((item) => (
                      <div key={item.name} className="flex items-center justify-between">
                        <span className="text-gray-700">{item.name}</span>
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{item.level}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  )
}
