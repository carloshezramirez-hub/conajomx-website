import type { Metadata } from "next"
import { SpainSection } from "@/components/sections/spain-section"
import { NewsSection } from "@/components/sections/news-section"
import { ContactSection } from "@/components/sections/contact-section"

export const metadata: Metadata = {
  title: "CONAJOMX España",
  description:
    "CONAJOMX España conecta a líderes políticos y empresariales de México y España para impulsar inversión, cooperación y proyectos de impacto bilateral.",
}

export default function EspanaPage() {
  return (
    <>
      <div className="pt-16 bg-[#061833]">
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-5xl">🇲🇽</span>
            <div className="h-0.5 w-16 bg-gradient-to-r from-[#1FE9E1]/50 to-transparent" />
            <span className="text-5xl">🇪🇸</span>
          </div>
          <p className="text-[#1FE9E1] text-sm font-semibold uppercase tracking-widest mb-4">
            Presencia Bilateral
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
            CONAJOMX España
          </h1>
          <p className="text-[#8EA4BD] text-xl max-w-2xl mx-auto leading-relaxed">
            Impulsamos puentes estratégicos entre empresarios, instituciones y proyectos de
            México y España para crear oportunidades de inversión y colaboración de alto impacto.
          </p>
        </div>
      </div>
      <SpainSection />
      <NewsSection />
      <ContactSection />
    </>
  )
}
