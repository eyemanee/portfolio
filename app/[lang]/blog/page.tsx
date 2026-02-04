"use client"

import { Clock, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { translations } from "@/lib/translations"
import { CustomCursor } from "@/components/custom-cursor"

export default function Blog({ params }: { params: { lang: "en" | "fr" } }) {
  const lang = params?.lang || "en"
  const t = translations[lang] || translations.en

  return (
    <div className="min-h-screen bg-[#faf5f0]">
      <CustomCursor />
      <Navbar lang={lang} currentPage="blog" />

      {/* Hero */}
      <section className="px-8 pt-12 pb-8 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6">{t.blog.title}</h1>
            <p className="text-xl text-gray-600 max-w-2xl">{t.blog.subtitle}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="px-8 py-16 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.blog.posts.map((post, index) => (
              <AnimatedSection key={post.title} delay={index * 100}>
                <article className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-black hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-6xl font-bold text-gray-400">{post.title.charAt(0)}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs uppercase tracking-wider text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        {post.readTime} {t.blog.minRead}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2 group-hover:underline">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <span className="flex items-center gap-1 text-black font-medium group-hover:gap-2 transition-all">
                        {t.blog.readMore} <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  )
}
