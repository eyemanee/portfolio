"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function LanguageSwitcher({ currentLang }: { currentLang: "en" | "fr" }) {
  const pathname = usePathname()
  
  const getNewPath = (newLang: "en" | "fr") => {
    const pathWithoutLang = pathname.replace(/^\/(en|fr)/, "") || ""
    return `/${newLang}${pathWithoutLang}`
  }

  return (
    <div className="flex items-center gap-3 text-lg">
      <Link
        href={getNewPath("en")}
        className={`px-4 py-2 rounded-lg transition-all duration-300 ${
          currentLang === "en" ? "bg-black text-white font-bold" : "text-black hover:bg-black/10"
        }`}
      >
        EN
      </Link>
      <Link
        href={getNewPath("fr")}
        className={`px-4 py-2 rounded-lg transition-all duration-300 ${
          currentLang === "fr" ? "bg-black text-white font-bold" : "text-black hover:bg-black/10"
        }`}
      >
        FR
      </Link>
    </div>
  )
}
