import type { Metadata } from "next"
import { AgendaSection } from "@/components/sections/agenda-section"
import { GlobeSection } from "@/components/sections/globe-section"
import { ContactSection } from "@/components/sections/contact-section"

export const metadata: Metadata = {
  title: "Agenda Internacional 2026",
  description:
    "Agenda internacional CONAJOMX 2026: OCDE, G7, G20, Harvard, VivaTech, COP31 y más. Una ruta global de foros, cumbres y encuentros para México.",
}

export default function AgendaPage() {
  return (
    <>
      <div className="pt-16 bg-[#030B18]">
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-[#1FE9E1] text-sm font-semibold uppercase tracking-widest mb-4">
            Agenda Internacional
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
            CONAJOMX 2026
          </h1>
          <p className="text-[#8EA4BD] text-xl max-w-2xl mx-auto leading-relaxed">
            Una ruta global de foros, cumbres y encuentros para fortalecer la presencia de México
            en las conversaciones estratégicas que definen el futuro.
          </p>
        </div>
      </div>
      <AgendaSection />
      <GlobeSection />
      <ContactSection />
    </>
  )
}
