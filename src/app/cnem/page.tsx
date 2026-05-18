import type { Metadata } from "next"
import { CNEMSection } from "@/components/sections/cnem-section"
import { AffiliationForm } from "@/components/sections/affiliation-form"
import { ContactSection } from "@/components/sections/contact-section"

export const metadata: Metadata = {
  title: "CNEM — Consejo Nacional de Empresarios de México",
  description:
    "El CNEM impulsa empresas responsables con redes de alto valor, impacto social y vinculación institucional en México y España.",
}

export default function CNEMPage() {
  return (
    <>
      <div className="pt-16 bg-[#030B18]">
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-[#1FE9E1] text-sm font-semibold uppercase tracking-widest mb-4">
            CNEM
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
            Consejo Nacional de Empresarios de México
          </h1>
          <p className="text-[#8EA4BD] text-xl max-w-2xl mx-auto leading-relaxed">
            México requiere empresas responsables con la sociedad. El CNEM articula empresarios
            de alto impacto para crear modelos de negocio con propósito, visión social y
            competitividad.
          </p>
        </div>
      </div>
      <CNEMSection />
      <AffiliationForm />
      <ContactSection />
    </>
  )
}
