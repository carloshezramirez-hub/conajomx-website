import type { Metadata } from "next"
import { AffiliationForm } from "@/components/sections/affiliation-form"
import { ContactSection } from "@/components/sections/contact-section"

export const metadata: Metadata = {
  title: "Afíliate a CONAJOMX",
  description:
    "Únete a la red de líderes políticos y empresariales más importante de México. Afiliate al CNEM, participa en la agenda internacional o colabora con legisladores y alcaldes.",
}

export default function AfiliacionPage() {
  return (
    <>
      <div className="pt-16 bg-[#030B18]">
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-[#1FE9E1] text-sm font-semibold uppercase tracking-widest mb-4">
            Únete
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
            Forma parte de una red de líderes en acción
          </h1>
          <p className="text-[#8EA4BD] text-xl max-w-2xl mx-auto leading-relaxed">
            Cuéntanos tu perfil y el tipo de colaboración que buscas. Nuestro equipo dará
            seguimiento a tu solicitud para conectarte con las iniciativas que más impacto
            puedan tener para ti.
          </p>
        </div>
      </div>
      <AffiliationForm />
      <ContactSection />
    </>
  )
}
