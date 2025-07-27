import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Desa Wawontulap - Surga Tersembunyi di Sulawesi Utara",
  description:
    "Temukan keindahan Desa Wawontulap, destinasi wisata pantai dengan warisan budaya yang kaya di Kecamatan Tatapaan, Kabupaten Minahasa Selatan.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className="font-sans">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
