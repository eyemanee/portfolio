"use client"

import Link from "next/link"
import { Quote } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { translations } from "@/lib/translations"
import { CustomCursor } from "@/components/custom-cursor"

export default function Testimonials({ params }: { params: { lang: "en" | "fr" } }) {
  const lang = params?.lang || "en"
  const t = translations[lang] || translations.en

  return (
    <div className="min-h-screen bg-[#faf5f0]">
      <CustomCursor />
      <Navbar lang={lang} currentPage="testimonials" />

      {/* Hero */}
      <section className="px-8 pt-12 pb-8 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6">{t.testimonials.title}</h1>
            <p className="text-xl text-gray-600 max-w-2xl">{t.testimonials.subtitle}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-8 py-16 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.testimonials.items.map((testimonial, index) => (
              <AnimatedSection key={testimonial.name} delay={index * 150}>
                <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-black hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <Quote className="w-10 h-10 text-gray-300 mb-4" />
                  <p className="text-gray-700 leading-relaxed mb-6 flex-grow">{testimonial.content}</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-black">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
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
              {lang === "en" ? "Want to work together?" : "Envie de collaborer?"}
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              {lang === "en"
                ? "Let's create something amazing and add your testimonial to this page!"
                : "Creons quelque chose d'incroyable et ajoutons votre temoignage a cette page!"}
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
