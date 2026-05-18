import type { Metadata } from "next"
import { LegislatorsSection } from "@/components/sections/legislators-section"
import { AffiliationForm } from "@/components/sections/affiliation-form"
import { ContactSection } from "@/components/sections/contact-section"

export const metadata: Metadata = {
  title: "Consejo de Legisladores y Alcaldes",
  description:
    "El Consejo Nacional de Legisladores y Alcaldes de CONAJOMX promueve gobernanza local, Estado Abierto, profesionalización y políticas públicas para juventudes.",
}

export default function LegisladoresPage() {
  return (
    <>
      <div className="pt-16 bg-[#030B18]">
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-[#1FE9E1] text-sm font-semibold uppercase tracking-widest mb-4">
            Consejo Nacional
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
            Legisladores y Alcaldes
          </h1>
          <p className="text-[#8EA4BD] text-xl max-w-2xl mx-auto leading-relaxed">
            Gobernanza local, Estado Abierto y liderazgo público. Promovemos la profesionalización,
            el intercambio de experiencias y las políticas públicas que fortalecen gobiernos locales
            y el desarrollo integral de las juventudes en México.
          </p>
        </div>
      </div>
      <LegislatorsSection />
      <AffiliationForm />
      <ContactSection />
    </>
  )
}
