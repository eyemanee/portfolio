"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Heart } from "lucide-react"
import { translations } from "@/lib/translations"

interface FooterProps {
  lang: "en" | "fr"
}

export function Footer({ lang }: FooterProps) {
  const t = translations[lang]
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { href: "https://github.com/eyemanee", icon: Github, label: "GitHub" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
    { href: "#", icon: Twitter, label: "Twitter" },
  ]

  return (
    <footer className="bg-black text-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href={`/${lang}`}>
              <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-all duration-300 group mb-4">
                <span className="font-bold text-lg group-hover:scale-110 transition-transform">A</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Aymane Elbouanani
              <br />
              Designer & Coder
              <br />
              Co-CEO of MegaVolt
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Navigation</h4>
            <div className="flex flex-col gap-2">
              <Link href={`/${lang}`} className="text-gray-400 hover:text-white transition-colors">
                {t.nav.home}
              </Link>
              <Link href={`/${lang}/about`} className="text-gray-400 hover:text-white transition-colors">
                {t.nav.about}
              </Link>
              <Link href={`/${lang}/projects`} className="text-gray-400 hover:text-white transition-colors">
                {t.nav.projects}
              </Link>
              <Link href={`/${lang}/contact`} className="text-gray-400 hover:text-white transition-colors">
                {t.nav.contact}
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Social</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            {currentYear} Aymane Elbouanani. {t.footer.rights}
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            {t.footer.madeWith} <Heart className="w-4 h-4 text-red-500 fill-red-500" /> {t.footer.by}
          </p>
        </div>
      </div>
    </footer>
  )
}
