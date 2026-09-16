import type { Metadata } from "next"
import { AsambleaRegistrationForm } from "@/components/sections/asamblea-registration-form"
import { asambleaUi } from "@/data/asamblea-general-content"

export const metadata: Metadata = {
  title: "Registro — IX Asamblea General CONAJOMX",
  description:
    "Regístrate a la IX Asamblea General de CONAJOMX. Ciudad de México, 26 de noviembre de 2026. Cuota de recuperación $2,000 MXN.",
}

export default function AsambleaRegistroPage() {
  return (
    <>
      <div className="pt-16 bg-[#050F20] relative overflow-hidden border-b-4 border-[#C9A227]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(201,162,39,0.10),transparent_60%)]" />
        <div className="container mx-auto px-4 py-10 sm:py-16 text-center relative z-10">
          <p className="text-[#1FE9E1] text-sm font-semibold uppercase tracking-widest mb-4">
            {asambleaUi.eyebrow}
          </p>
          <h1 className="text-3xl sm:text-5xl font-black text-white mb-4 leading-tight">
            Registro — {asambleaUi.title}
          </h1>
          <p className="text-[#8EA4BD] text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Déjanos tus datos para confirmar tu lugar en la IX Asamblea General. Te
            contactaremos con la sede exacta y los detalles de pago de la cuota de recuperación.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="px-4 py-2 rounded-full border border-[#C9A227]/50 text-white/90 text-sm">
              {asambleaUi.venue}
            </span>
            <span className="px-4 py-2 rounded-full border border-[#C9A227]/50 text-white/90 text-sm">
              {asambleaUi.dateLabel}
            </span>
            <span className="px-4 py-2 rounded-full border border-[#C9A227]/50 text-white/90 text-sm">
              {asambleaUi.fee}
            </span>
          </div>
        </div>
      </div>

      <section className="py-10 sm:py-16 bg-[#F5F1EA]">
        <div className="container mx-auto px-4">
          <AsambleaRegistrationForm />
        </div>
      </section>
    </>
  )
}
