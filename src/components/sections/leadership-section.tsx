"use client"

import { motion } from "framer-motion"
import { presidenciaNacional } from "@/data/leaders"
import type { Leader } from "@/data/leaders"
import { ButtonLink } from "@/components/ui/button-link"

const councilBadgeColor: Record<string, string> = {
  "Presidencia Nacional": "border-[#1FE9E1]/30 text-[#1FE9E1] bg-[#1FE9E1]/5",
  CNEM: "border-blue-400/30 text-blue-300 bg-blue-400/5",
  "Legisladores y Alcaldes": "border-purple-400/30 text-purple-300 bg-purple-400/5",
}

function LeaderCard({ leader, index }: { leader: Leader; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#1FE9E1]/20 transition-all group"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0A2D52] to-[#173B6D] border border-[#1FE9E1]/20 flex items-center justify-center shrink-0">
          <span className="text-[#1FE9E1] font-bold text-sm">{leader.initials}</span>
        </div>
        <div className="min-w-0">
          <p className="text-white font-semibold text-sm group-hover:text-[#1FE9E1] transition-colors truncate">
            {leader.name}
          </p>
          <p className="text-[#8EA4BD] text-xs leading-snug mt-0.5">{leader.role}</p>
          <span
            className={`inline-block mt-2 px-2 py-0.5 rounded-full text-xs border font-medium ${
              councilBadgeColor[leader.council] ?? "border-white/10 text-[#8EA4BD]"
            }`}
          >
            {leader.council}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export function LeadershipSection() {
  return (
    <section className="py-24 bg-[#061833]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-[#1FE9E1] text-sm font-semibold uppercase tracking-widest mb-4">
            Presidencia Nacional
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
            Liderazgo al servicio de{" "}
            <span className="text-[#1FE9E1]">México</span>
          </h2>
          <p className="text-[#8EA4BD] text-lg leading-relaxed">
            Una mesa directiva plural que representa los distintos ámbitos de incidencia de CONAJOMX:
            presidencia, empresarios, legisladores, alcaldes, regidores y síndicos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-10">
          {presidenciaNacional.map((leader, i) => (
            <LeaderCard key={leader.name} leader={leader} index={i} />
          ))}
        </div>

        <div className="text-center">
          <ButtonLink
            href="/liderazgo"
            variant="outline"
            className="border-[#1FE9E1]/30 text-[#1FE9E1] hover:bg-[#1FE9E1]/10 hover:border-[#1FE9E1]/50"
          >
            Ver liderazgo completo
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
