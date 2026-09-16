import type { Metadata } from "next"
import Image from "next/image"
import { AsambleaRegistrationForm } from "@/components/sections/asamblea-registration-form"
import { playfair } from "@/lib/fonts"
import { asambleaUi } from "@/data/asamblea-general-content"

export const metadata: Metadata = {
  title: "Registro — IX Asamblea General CONAJOMX",
  description:
    "Regístrate a la IX Asamblea General de CONAJOMX. Ciudad de México, 26 de noviembre de 2026. Cuota de recuperación $2,000 MXN.",
}

export default function AsambleaRegistroPage() {
  return (
    <>
      <div className="pt-16 bg-black relative overflow-hidden border-b border-[#C9A227]/40">
        <Image
          src="/assets/conajomx/asamblea-general/angel-independencia.webp"
          alt="Ángel de la Independencia, Ciudad de México"
          fill
          className="object-cover object-[center_30%] opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/85 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(201,162,39,0.14),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,rgba(201,162,39,0.08),transparent_50%)]" />
        <div className="container mx-auto px-4 py-10 sm:py-16 text-center relative z-10">
          <p className="text-[#C9A227] text-xs font-bold uppercase tracking-[0.3em] mb-4">
            {asambleaUi.eyebrow}
          </p>
          <h1 className={`${playfair.className} text-3xl sm:text-5xl font-black text-white mb-4 leading-tight`}>
            Reserva tu lugar — {asambleaUi.title}
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
            <span className="px-4 py-2 rounded-full border border-[#C9A227]/50 text-[#E6C766] text-sm font-semibold">
              {asambleaUi.fee}
            </span>
          </div>
        </div>
      </div>

      <section className="py-10 sm:py-20 bg-[#000000] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(201,162,39,0.06),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <AsambleaRegistrationForm />
        </div>
      </section>
    </>
  )
}
