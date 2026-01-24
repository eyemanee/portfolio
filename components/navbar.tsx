"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { translations } from "@/lib/translations"

interface NavbarProps {
  lang: "en" | "fr"
  currentPage?: string
}

export function Navbar({ lang, currentPage }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = translations[lang]

  const navLinks = [
    { href: `/${lang}`, label: t.nav.home, key: "home" },
    { href: `/${lang}/about`, label: t.nav.about, key: "about" },
    { href: `/${lang}/projects`, label: t.nav.projects, key: "projects" },
    { href: `/${lang}/portfolio`, label: t.nav.portfolio, key: "portfolio" },
    { href: `/${lang}/contact`, label: t.nav.contact, key: "contact" },
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-[#faf5f0]/80 backdrop-blur-md">
        <Link href={`/${lang}`}>
          <div className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center cursor-pointer hover:bg-black hover:text-white transition-all duration-300 group">
            <span className="font-bold text-lg group-hover:scale-110 transition-transform">A</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={`text-sm uppercase tracking-wider hover:text-gray-500 transition-colors ${
                currentPage === link.key ? "font-bold border-b-2 border-black" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <LanguageSwitcher currentLang={lang} />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-black/5 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-black" strokeWidth={1.5} />
            ) : (
              <Menu className="w-6 h-6 text-black" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#faf5f0] transition-transform duration-500 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.key}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-3xl font-light hover:text-gray-500 transition-all duration-300 ${
                currentPage === link.key ? "font-bold" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-24" />
    </>
  )
}
