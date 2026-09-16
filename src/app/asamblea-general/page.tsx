import type { Metadata } from "next"
import { AsambleaHeroSection } from "@/components/sections/asamblea-hero-section"
import { AsambleaGeneralSection } from "@/components/sections/asamblea-general-section"
import { ContactSection } from "@/components/sections/contact-section"
import { playfair } from "@/lib/fonts"
import { asambleaUi } from "@/data/asamblea-general-content"

export const metadata: Metadata = {
  title: "IX Asamblea General — CONAJOMX",
  description:
    "Convocatoria oficial a la IX Asamblea General de CONAJOMX: renovación de Mesas Directivas, entrega de nombramientos y reconocimientos, y networking estratégico. Ciudad de México, 26 de noviembre de 2026.",
}

export default function AsambleaGeneralPage() {
  return (
    <>
      <AsambleaHeroSection />
      <AsambleaGeneralSection />
      <div className="bg-[#000000] py-10 sm:py-16 border-t border-b border-[#C9A227]/40">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white font-bold text-lg sm:text-xl tracking-[0.2em] uppercase">
            {asambleaUi.bannerTitle}
          </p>
          <p className={`${playfair.className} italic text-[#E6C766] text-base sm:text-lg mt-3`}>
            {asambleaUi.bannerSubtitle}
          </p>
        </div>
      </div>
      <ContactSection />
    </>
  )
}
