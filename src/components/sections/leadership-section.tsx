"use client"

import { motion } from "framer-motion"
import { presidenciaNacional, mesaDirectivaCNEM2026, delegacionONU2024 } from "@/data/leaders"
import type { Leader } from "@/data/leaders"
import { ButtonLink } from "@/components/ui/button-link"
import { SafeImage } from "@/components/ui/safe-image"
import { mediaAssets } from "@/data/media"

const councilColor: Record<string, string> = {
  "Presidencia Nacional": "bg-[#D9FFFC] text-[#0A2D52]",
  CNEM: "bg-[#EEF3FB] text-[#071D3A]",
  "Legisladores y Alcaldes": "bg-[#F5FAFF] text-[#526173]",
  "Delegación ONU": "bg-[#FFF8E1] text-[#7B5900]",
}

function LeaderChip({ leader }: { leader: Leader }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#DCE8F2] hover:border-[#1FE9E1]/40 transition-all group">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#071D3A] to-[#0A2D52] flex items-center justify-center shrink-0">
        <span className="text-[#1FE9E1] font-bold text-xs">{leader.initials}</span>
      </div>
      <div className="min-w-0">
        <p className="text-[#071D3A] font-semibold text-xs truncate group-hover:text-[#0A2D52]">
          {leader.name}
        </p>
        <p className="text-[#526173] text-[11px] leading-snug">{leader.role}</p>
      </div>
    </div>
  )
}

export function LeadershipSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1FE9E1] mb-4">
            Presidencia Nacional
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#071D3A] mb-6 leading-tight">
            Liderazgo al servicio de <span className="text-[#0A2D52]">México</span>
          </h2>
          <p className="text-[#526173] text-lg leading-relaxed">
            Una mesa directiva plural que representa los distintos ámbitos de incidencia
            de CONAJOMX: presidencia, empresarios, legisladores, alcaldes, regidores y síndicos.
          </p>
        </div>

        {/* CNEM image + directiva */}
        <div className="grid lg:grid-cols-5 gap-8 mb-16 max-w-5xl mx-auto">
          {/* Image — spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="rounded-3xl overflow-hidden border border-[#DCE8F2] shadow-[0_12px_40px_rgba(10,45,82,0.10)] aspect-[3/4] relative">
              <SafeImage
                src={mediaAssets.mesaDirectivaCNEM.src}
                alt={mediaAssets.mesaDirectivaCNEM.alt}
                fill
                className="object-cover"
                fallbackText="Mesa Directiva CNEM 2026 · Pon aquí tu imagen en public/assets/conajomx/leaders/mesa-directiva-cnem-2026.jpeg"
                fallbackIcon="👥"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#071D3A]/80 to-transparent">
                <p className="text-white font-bold text-sm">Mesa Directiva CNEM 2026</p>
                <p className="text-white/70 text-xs">Consejo Nacional de Empresarios de México</p>
              </div>
            </div>
          </motion.div>

          {/* CNEM directiva grid — spans 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h3 className="text-[#071D3A] font-bold text-base mb-4">Mesa Directiva CNEM 2026</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {mesaDirectivaCNEM2026.map((leader) => (
                <LeaderChip key={leader.name} leader={leader} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Presidencia Nacional grid */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-[#071D3A] font-bold text-base mb-6 text-center">
            Presidencia Nacional CONAJOMX
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {presidenciaNacional.map((leader, i) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#F5FAFF] border border-[#DCE8F2] hover:border-[#1FE9E1]/40 hover:shadow-[0_4px_20px_rgba(10,45,82,0.08)] transition-all group"
              >
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#071D3A] to-[#0A2D52] flex items-center justify-center shrink-0">
                  <span className="text-[#1FE9E1] font-bold text-xs">{leader.initials}</span>
                </div>
                <div>
                  <p className="text-[#071D3A] font-semibold text-sm group-hover:text-[#0A2D52] transition-colors">
                    {leader.name}
                  </p>
                  <p className="text-[#526173] text-xs leading-snug mt-0.5">{leader.role}</p>
                  <span className={`inline-block mt-1.5 px-2 py-0.5 rounded-full text-xs font-medium ${councilColor[leader.council] ?? "bg-[#F5FAFF] text-[#526173]"}`}>
                    {leader.council}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Delegación ONU */}
        <div className="max-w-5xl mx-auto mt-12">
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-[#071D3A] font-bold text-base">
              Delegación ante la ONU
            </h3>
            <span className="text-xs bg-[#FFF8E1] text-[#7B5900] px-2 py-0.5 rounded-full font-medium">
              11° Foro ONU · Nueva York 2024
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {delegacionONU2024.map((leader, i) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#FFFDF0] border border-[#F0E4B0] hover:border-[#C9A227]/50 hover:shadow-[0_4px_20px_rgba(10,45,82,0.06)] transition-all group"
              >
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#7B5900] to-[#C9A227] flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-xs">{leader.initials}</span>
                </div>
                <div>
                  <p className="text-[#071D3A] font-semibold text-sm group-hover:text-[#0A2D52] transition-colors">
                    {leader.name}
                  </p>
                  <p className="text-[#526173] text-xs leading-snug mt-0.5">{leader.role}</p>
                  <span className="inline-block mt-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-[#FFF8E1] text-[#7B5900]">
                    {leader.council}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <ButtonLink
            href="/liderazgo"
            variant="outline"
            className="border-[#DCE8F2] text-[#071D3A] hover:bg-[#F5FAFF] hover:border-[#071D3A]/30 font-semibold"
          >
            Ver liderazgo completo
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
