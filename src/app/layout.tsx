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
  "@type": ["Organization", "NGO"],
  name: "Consejo Nacional de Jóvenes Pro México, A.C.",
  alternateName: ["CONAJOMX", "CNEM", "Consejo Nacional de Empresarios de México"],
  url: "https://conajomx.org",
  logo: {
    "@type": "ImageObject",
    url: "https://conajomx.org/assets/conajomx/logo.png",
    width: 200,
    height: 200,
  },
  image: "https://conajomx.org/assets/conajomx/logo.png",
  description:
    "CONAJOMX conecta líderes políticos, empresarios e instituciones para impulsar alianzas, políticas públicas, inversión, competitividad y proyectos de impacto entre México, España y el mundo.",
  foundingDate: "2018",
  foundingLocation: {
    "@type": "Place",
    name: "Ciudad de México, México",
  },
  areaServed: ["MX", "ES", "US", "LatAm"],
  knowsAbout: [
    "política pública",
    "vinculación político-empresarial",
    "inversión México-España",
    "economía circular",
    "jóvenes líderes",
    "agenda legislativa",
    "FITUR",
    "Parlatino",
    "Parlamento Europeo",
  ],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Presidente Masaryk 11560, Oficina 902",
      addressLocality: "Polanco, Miguel Hidalgo",
      addressRegion: "Ciudad de México",
      postalCode: "11560",
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

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "CONAJOMX",
  url: "https://conajomx.org",
  inLanguage: "es-MX",
  description: "Consejo Nacional de Jóvenes Pro México — liderazgo político y empresarial para México y el mundo.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://conajomx.org/?q={search_term_string}",
    "query-input": "required name=search_term_string",
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
    "liderazgo político empresarial México",
    "vinculación político empresarial",
    "FITUR 2026 México España",
    "red de líderes jóvenes México",
    "inversión México España",
    "asamblea CONAJOMX",
    "consejo empresarios México",
    "Néstor Camarillo Senador Puebla",
    "Leslie González",
    "Rodrigo Abdala",
    "Parlatino México",
    "Parlamento Europeo México",
    "jóvenes líderes política México",
    "vinculación México España empresarial",
    "alianzas empresariales México",
    "red política empresarial México",
  ],
  authors: [{ name: "CONAJOMX" }],
  creator: "CONAJOMX",
  publisher: "CONAJOMX",
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, telephone: false },
  alternates: { canonical: "https://conajomx.org" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteConfig.url,
    title: "CONAJOMX | Consejo de Políticos y Empresarios Líderes de México",
    description: siteConfig.description,
    siteName: "CONAJOMX",
    images: [{ url: "https://conajomx.org/assets/conajomx/logo.png", width: 1200, height: 630, alt: "CONAJOMX — Consejo Nacional de Jóvenes Pro México" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CONAJOMX | Consejo de Políticos y Empresarios Líderes de México",
    description: siteConfig.description,
    creator: "@CONAJOMX",
    images: ["https://conajomx.org/assets/conajomx/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
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
