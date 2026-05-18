"use client"

import { motion } from "framer-motion"
import { updates } from "@/data/updates"
import { Badge } from "@/components/ui/badge"
import { ButtonLink } from "@/components/ui/button-link"

const categoryStyle: Record<string, string> = {
  "Agenda verde": "border-emerald-200 text-emerald-700 bg-emerald-50",
  Reconocimiento: "border-yellow-200 text-yellow-700 bg-yellow-50",
  Internacional: "border-blue-200 text-blue-700 bg-blue-50",
  "México-España": "border-[#1FE9E1]/40 text-[#0A2D52] bg-[#D9FFFC]",
  Empresarial: "border-violet-200 text-violet-700 bg-violet-50",
  Institucional: "border-orange-200 text-orange-700 bg-orange-50",
  Asamblea: "border-pink-200 text-pink-700 bg-pink-50",
  Sustentabilidad: "border-green-200 text-green-700 bg-green-50",
}

export function NewsSection() {
  const featured = updates.slice(0, 6)

  return (
    <section className="py-24 bg-[#F5FAFF]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1FE9E1] mb-4">
            Novedades
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#071D3A] mb-6 leading-tight">
            Actividad y reconocimientos
          </h2>
          <p className="text-[#526173] text-lg leading-relaxed">
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
              className="p-5 rounded-xl bg-white border border-[#DCE8F2] hover:border-[#1FE9E1]/40 hover:shadow-[0_4px_20px_rgba(10,45,82,0.07)] transition-all group flex flex-col"
            >
              <Badge
                variant="outline"
                className={`text-xs mb-3 w-fit ${
                  categoryStyle[item.category] ?? "border-[#DCE8F2] text-[#526173]"
                }`}
              >
                {item.category}
              </Badge>
              <h3 className="text-[#071D3A] font-semibold text-sm mb-2 leading-snug group-hover:text-[#0A2D52] transition-colors flex-1">
                {item.title}
              </h3>
              <p className="text-[#526173] text-xs leading-relaxed mb-3">
                {item.summary}
              </p>
              <p className="text-[#526173]/50 text-xs">Fuente: {item.source}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <ButtonLink
            href="/noticias"
            variant="outline"
            className="border-[#DCE8F2] text-[#071D3A] hover:bg-white hover:border-[#071D3A]/30 font-semibold"
          >
            Ver todas las novedades
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
