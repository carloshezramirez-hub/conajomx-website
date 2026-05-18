import type { Metadata } from "next"
import { ContactSection } from "@/components/sections/contact-section"
import { AffiliationForm } from "@/components/sections/affiliation-form"

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta a CONAJOMX para colaboraciones, afiliaciones, agenda internacional o alianzas institucionales. Ciudad de México y Madrid, España.",
}

export default function ContactoPage() {
  return (
    <>
      <div className="pt-16 bg-[#061833]">
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-[#1FE9E1] text-sm font-semibold uppercase tracking-widest mb-4">
            Contacto
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
            ¿Listo para conectar?
          </h1>
          <p className="text-[#8EA4BD] text-xl max-w-2xl mx-auto leading-relaxed">
            Escríbenos para conocer más sobre cómo colaborar con CONAJOMX, participar en
            la agenda o afiliar tu empresa u organización.
          </p>
        </div>
      </div>
      <ContactSection />
      <AffiliationForm />
    </>
  )
}
