import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { Toaster } from "sonner"
import { siteConfig } from "@/config/site"

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "CONAJOMX | Consejo de Políticos y Empresarios Líderes de México",
    template: "%s | CONAJOMX",
  },
  description: siteConfig.description,
  keywords: [
    "CONAJOMX",
    "Consejo Nacional de Jóvenes",
    "Consejo Nacional de Empresarios de México",
    "CNEM",
    "empresarios México",
    "políticos empresarios México España",
    "agenda internacional CONAJOMX",
    "liderazgo político empresarial",
    "Consejo de Jóvenes Pro México",
  ],
  authors: [{ name: "CONAJOMX" }],
  creator: "CONAJOMX",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteConfig.url,
    title: "CONAJOMX | Consejo de Políticos y Empresarios Líderes de México",
    description: siteConfig.description,
    siteName: "CONAJOMX",
  },
  twitter: {
    card: "summary_large_image",
    title: "CONAJOMX | Consejo de Políticos y Empresarios Líderes de México",
    description: siteConfig.description,
    creator: "@CONAJOMX",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${geist.variable} dark`}>
      <body className="antialiased min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Toaster theme="dark" position="bottom-right" />
      </body>
    </html>
  )
}
