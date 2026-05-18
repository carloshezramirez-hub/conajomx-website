"use client"

import { motion } from "framer-motion"
import { updates } from "@/data/updates"
import { Badge } from "@/components/ui/badge"
import { ButtonLink } from "@/components/ui/button-link"

const categoryStyle: Record<string, string> = {
  "Agenda verde": "border-emerald-400/30 text-emerald-400 bg-emerald-400/5",
  Reconocimiento: "border-yellow-400/30 text-yellow-400 bg-yellow-400/5",
  Internacional: "border-blue-400/30 text-blue-300 bg-blue-400/5",
  "México-España": "border-[#1FE9E1]/30 text-[#1FE9E1] bg-[#1FE9E1]/5",
  Empresarial: "border-violet-400/30 text-violet-300 bg-violet-400/5",
  Institucional: "border-orange-400/30 text-orange-300 bg-orange-400/5",
  Asamblea: "border-pink-400/30 text-pink-300 bg-pink-400/5",
  Sustentabilidad: "border-green-400/30 text-green-400 bg-green-400/5",
}

export function NewsSection() {
  const featured = updates.slice(0, 6)

  return (
    <section className="py-24 bg-[#061833]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-[#1FE9E1] text-sm font-semibold uppercase tracking-widest mb-4">
            Novedades
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
            Actividad y reconocimientos
          </h2>
          <p className="text-[#8EA4BD] text-lg leading-relaxed">
            CONAJOMX en foros, cumbres, encuentros institucionales y eventos empresariales
            nacionales e internacionales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {featured.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#1FE9E1]/20 hover:bg-white/[0.04] transition-all group flex flex-col"
            >
              <Badge
                variant="outline"
                className={`text-xs mb-3 w-fit ${
                  categoryStyle[item.category] ?? "border-white/20 text-white/60"
                }`}
              >
                {item.category}
              </Badge>
              <h3 className="text-white font-semibold text-sm mb-2 leading-snug group-hover:text-[#1FE9E1] transition-colors flex-1">
                {item.title}
              </h3>
              <p className="text-[#8EA4BD] text-xs leading-relaxed mb-3">
                {item.summary}
              </p>
              <p className="text-[#8EA4BD]/40 text-xs">Fuente: {item.source}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <ButtonLink
            href="/noticias"
            variant="outline"
            className="border-[#1FE9E1]/30 text-[#1FE9E1] hover:bg-[#1FE9E1]/10 hover:border-[#1FE9E1]/50"
          >
            Ver todas las novedades
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
