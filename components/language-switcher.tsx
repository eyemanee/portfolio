"use client"

import { useRouter, usePathname } from "next/navigation"
import { useState, useEffect } from "react"

export function LanguageSwitcher({ currentLang }: { currentLang: "en" | "fr" }) {
  const router = useRouter()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const switchLanguage = (newLang: "en" | "fr") => {
    const pathWithoutLang = pathname.replace(/^\/(en|fr)/, "") || ""
    router.push(`/${newLang}${pathWithoutLang}`)
  }

  if (!mounted) return null

  return (
    <div className="flex items-center gap-2 text-sm">
      <button
        onClick={() => switchLanguage("en")}
        className={`px-3 py-1 rounded transition-colors ${
          currentLang === "en" ? "bg-black text-white" : "text-black hover:bg-black/5"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLanguage("fr")}
        className={`px-3 py-1 rounded transition-colors ${
          currentLang === "fr" ? "bg-black text-white" : "text-black hover:bg-black/5"
        }`}
      >
        FR
      </button>
    </div>
  )
}
