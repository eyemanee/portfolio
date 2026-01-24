"use client"

import React from "react"

import { useState } from "react"
import { Github, Linkedin, Twitter, Mail, Send, CheckCircle } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { translations } from "@/lib/translations"
import { CustomCursor } from "@/components/custom-cursor"

export default function Contact({ params }: { params: { lang: "en" | "fr" } }) {
  const lang = params?.lang || "en"
  const t = translations[lang] || translations.en
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", email: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const socialLinks = [
    { href: "https://github.com/eyemanee", icon: Github, label: "GitHub" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
    { href: "#", icon: Twitter, label: "Twitter" },
  ]

  return (
    <div className="min-h-screen bg-[#faf5f0]">
      <CustomCursor />
      <Navbar lang={lang} currentPage="contact" />

      {/* Hero */}
      <section className="px-8 pt-12 pb-8 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6">{t.contact.title}</h1>
            <p className="text-xl text-gray-600 max-w-2xl">{t.contact.description}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Content */}
      <section className="px-8 py-16 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <AnimatedSection delay={200}>
              <div className="bg-white p-8 rounded-3xl shadow-sm">
                <h2 className="text-2xl font-bold text-black mb-6">
                  {lang === "en" ? "Send a Message" : "Envoyer un Message"}
                </h2>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                    <p className="text-xl font-semibold text-black mb-2">{t.contact.form.success}</p>
                    <p className="text-gray-500">
                      {lang === "en" ? "I'll get back to you soon!" : "Je vous repondrai bientot!"}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {t.contact.form.name}
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                        placeholder={lang === "en" ? "John Doe" : "Jean Dupont"}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {t.contact.form.email}
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                        placeholder="email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        {t.contact.form.message}
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
                        placeholder={
                          lang === "en"
                            ? "Tell me about your project..."
                            : "Parlez-moi de votre projet..."
                        }
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-black text-white font-medium hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          {t.contact.form.sending}
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          {t.contact.form.send}
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <div className="space-y-8">
              <AnimatedSection delay={400}>
                <div className="bg-white p-8 rounded-3xl shadow-sm">
                  <h2 className="text-2xl font-bold text-black mb-6">{t.contact.info.title}</h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">{t.contact.info.emailLabel}</p>
                        <a href="mailto:mail.eyemane@gmail.com" className="text-black font-medium hover:underline">
                          mail.eyemane@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={600}>
                <div className="bg-white p-8 rounded-3xl shadow-sm">
                  <h2 className="text-2xl font-bold text-black mb-6">{t.contact.info.socialLabel}</h2>
                  <div className="flex gap-4">
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
                </div>
              </AnimatedSection>

              {/* MegaVolt Card */}
              <AnimatedSection delay={800}>
                <a
                  href="https://launcher-megavolt.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-black text-white p-8 rounded-3xl shadow-sm hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm text-gray-400">Co-CEO</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">MegaVolt</h3>
                  <p className="text-gray-400">
                    {lang === "en"
                      ? "Check out my main project"
                      : "Decouvrez mon projet principal"}
                  </p>
                </a>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  )
}
