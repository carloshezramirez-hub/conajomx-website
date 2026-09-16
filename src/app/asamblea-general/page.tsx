import type { Metadata } from "next"
import { AsambleaHeroSection } from "@/components/sections/asamblea-hero-section"
import { AsambleaGeneralSection } from "@/components/sections/asamblea-general-section"
import { ContactSection } from "@/components/sections/contact-section"
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
      <div className="bg-[#071D3A] py-8 sm:py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white font-bold text-lg sm:text-xl tracking-[0.2em] uppercase">
            {asambleaUi.bannerTitle}
          </p>
          <p className="text-[#1FE9E1] italic text-sm sm:text-base mt-3">
            {asambleaUi.bannerSubtitle}
          </p>
        </div>
      </div>
      <ContactSection />
    </>
  )
}
