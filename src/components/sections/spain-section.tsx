"use client"

import { motion } from "framer-motion"
import { conajomxEspana } from "@/data/leaders"
import { ButtonLink } from "@/components/ui/button-link"
import { SafeImage } from "@/components/ui/safe-image"
import { mediaAssets } from "@/data/media"
import { ArrowRight } from "lucide-react"

const highlights = [
  "Encuentro con CaixaBank en FITUR 2026",
  "Gala comercial México-España en Hotel Ritz Madrid",
  "Reunión en el Senado de España",
  "Exhibición «El Oso y el Madroño» — México Brilla en Madrid",
]

export function SpainSection() {
  return (
    <section className="py-24 bg-[#F5FAFF] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1FE9E1]/[0.06] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Flag bridge */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🇲🇽</span>
              <div className="h-px flex-1 bg-gradient-to-r from-[#1FE9E1]/50 to-transparent" />
              <span className="text-4xl">🇪🇸</span>
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1FE9E1] mb-4">
              CONAJOMX España
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#071D3A] mb-6 leading-tight">
              México y España conectados por{" "}
              <span className="text-[#0A2D52]">
                liderazgo, inversión y colaboración
              </span>
            </h2>
            <p className="text-[#526173] text-base leading-relaxed mb-5">
              Somos la plataforma de vinculación política-empresarial más grande de México,
              estimulando la inversión nacional y extranjera, impulsando la productividad y
              competitividad de los sectores industriales que permitan su integración a cadenas
              regionales y globales de impacto.
            </p>
            <p className="text-[#526173] text-base leading-relaxed mb-8">
              Impulsamos puentes estratégicos para abrir oportunidades entre empresarios,
              instituciones y proyectos de ambos países, con presencia activa en Madrid, FITUR,
              el Senado de España y la Feria de Asturias.
            </p>
            <ButtonLink
              href="/espana"
              variant="outline"
              className="border-[#DCE8F2] text-[#071D3A] hover:bg-white hover:border-[#071D3A]/30 font-semibold"
            >
              Conocer más sobre España{" "}
              <ArrowRight className="ml-2 w-4 h-4" />
            </ButtonLink>
          </motion.div>

          {/* Right: Photo + Leaders + Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* FITUR 2026 photo */}
            <div className="rounded-2xl overflow-hidden border border-[#DCE8F2] shadow-[0_8px_32px_rgba(10,45,82,0.10)] aspect-[16/9] relative">
              <SafeImage
                src={mediaAssets.fiturEspana.src}
                alt={mediaAssets.fiturEspana.alt}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#071D3A]/80 to-transparent">
                <p className="text-white font-semibold text-sm">FITUR 2026 — Madrid</p>
                <p className="text-white/70 text-xs">Encuentro con CaixaBank · Feria Internacional de Turismo</p>
              </div>
            </div>

            {/* Representation */}
            <div>
              <h3 className="text-[#071D3A] font-bold text-base mb-4">
                Representación en España
              </h3>
              <div className="space-y-3">
                {conajomxEspana.map((leader) => (
                  <div
                    key={leader.name}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#DCE8F2] hover:border-[#1FE9E1]/40 transition-all"
                  >
                    {leader.image ? (
                      <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 border-2 border-[#DCE8F2]">
                        <SafeImage
                          src={leader.image}
                          alt={`Foto de ${leader.name}`}
                          width={44}
                          height={44}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ) : (
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#071D3A] to-[#0A2D52] flex items-center justify-center shrink-0">
                        <span className="text-[#1FE9E1] font-bold text-xs">
                          {leader.initials}
                        </span>
                      </div>
                    )}
                    <div>
                      <p className="text-[#071D3A] font-semibold text-sm">{leader.name}</p>
                      <p className="text-[#526173] text-xs">{leader.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="p-5 rounded-xl border border-[#DCE8F2] bg-white">
              <p className="text-[#0A2D52] font-semibold text-sm mb-3">
                Actividades recientes en España
              </p>
              <ul className="space-y-2">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-[#526173] text-xs">
                    <span className="text-[#1FE9E1] mt-0.5">•</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
