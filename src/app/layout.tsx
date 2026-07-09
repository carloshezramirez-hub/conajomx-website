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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Consejo Nacional de Jóvenes Pro México, A.C.",
  alternateName: "CONAJOMX",
  url: "https://conajomx.org",
  logo: "https://conajomx.org/assets/conajomx/logo.png",
  description:
    "CONAJOMX conecta líderes políticos, empresarios e instituciones para impulsar alianzas, políticas públicas, inversión, competitividad y proyectos de impacto entre México, España y el mundo.",
  foundingLocation: {
    "@type": "Place",
    name: "Ciudad de México, México",
  },
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Presidente Masaryk 11560, Oficina 902",
      addressLocality: "Polanco, Miguel Hidalgo",
      addressRegion: "Ciudad de México",
      addressCountry: "MX",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Plaza de las Cortes 5",
      addressLocality: "Madrid",
      addressCountry: "ES",
    },
  ],
  sameAs: [
    "https://www.facebook.com/conajomx",
    "https://www.instagram.com/conajomx",
    "https://x.com/CONAJOMX",
    "https://mx.linkedin.com/company/conajomx",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "conajomex@gmail.com",
    contactType: "customer service",
    availableLanguage: ["Spanish", "English"],
  },
}

export const metadata: Metadata = {
  metadataBase: new URL("https://conajomx.org"),
  title: {
    default: "CONAJOMX | Consejo de Políticos y Empresarios Líderes de México",
    template: "%s | CONAJOMX",
  },
  description: siteConfig.description,
  keywords: [
    "CONAJOMX",
    "Consejo Nacional de Jóvenes Pro México",
    "Consejo Nacional de Empresarios de México",
    "CNEM",
    "empresarios México",
    "políticos empresarios México España",
    "agenda internacional CONAJOMX",
    "liderazgo político empresarial",
    "Consejo de Jóvenes Pro México",
    "ONU ciencia tecnología innovación",
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
    <html lang="es" className={geist.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-white text-[#071D3A]">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Toaster position="bottom-right" />
      </body>
    </html>
  )
}
