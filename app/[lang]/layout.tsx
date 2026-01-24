import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "@/app/globals.css"
import { CustomCursor } from "@/components/custom-cursor"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aymane Elbouanani - Designer & Coder",
  description: "Portfolio of Aymane Elbouanani, Designer and Coder",
}

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fr" }]
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: "en" | "fr" }
}) {
  return (
    <html lang={params.lang}>
      <body className={`${geistSans.className} bg-amber-50 cursor-none`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
