import type { Metadata } from "next"
import { AsambleaRegistrationForm } from "@/components/sections/asamblea-registration-form"
import { BrandAnimatedBackground } from "@/components/ui/brand-animated-background"
import { asambleaUi } from "@/data/asamblea-general-content"

export const metadata: Metadata = {
  title: "Registro — IX Asamblea General CONAJOMX",
  description:
    "Regístrate a la IX Asamblea General de CONAJOMX. Ciudad de México, 26 de noviembre de 2026. Cuota de recuperación $2,000 MXN.",
}

export default function AsambleaRegistroPage() {
  return (
    <>
      <div className="pt-16 bg-white relative overflow-hidden">
        <BrandAnimatedBackground variant="hero" />
        <div className="container mx-auto px-4 py-10 sm:py-16 text-center relative z-10">
          <p className="text-[#0A2D52] text-xs font-bold uppercase tracking-[0.3em] mb-4">
            {asambleaUi.eyebrow}
          </p>
          <h1 className="text-3xl sm:text-5xl font-black text-[#071D3A] mb-4 leading-tight">
            Reserva tu lugar — {asambleaUi.title}
          </h1>
          <p className="text-[#526173] text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Déjanos tus datos para confirmar tu lugar en la IX Asamblea General. Te
            contactaremos con la sede exacta y los detalles de pago de la cuota de recuperación.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="px-4 py-2 rounded-full border border-[#DCE8F2] bg-[#F5FAFF] text-[#071D3A] text-sm">
              {asambleaUi.venue}
            </span>
            <span className="px-4 py-2 rounded-full border border-[#DCE8F2] bg-[#F5FAFF] text-[#071D3A] text-sm">
              {asambleaUi.dateLabel}
            </span>
            <span className="px-4 py-2 rounded-full border border-[#1FE9E1]/40 bg-[#D9FFFC] text-[#0A2D52] text-sm font-semibold">
              {asambleaUi.fee}
            </span>
          </div>
        </div>
      </div>

      <section className="py-10 sm:py-20 bg-[#F5F1EA]">
        <div className="container mx-auto px-4">
          <AsambleaRegistrationForm />
        </div>
      </section>
    </>
  )
}
