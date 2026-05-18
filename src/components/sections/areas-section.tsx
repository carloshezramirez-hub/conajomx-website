"use client"

import { motion } from "framer-motion"
import { ButtonLink } from "@/components/ui/button-link"

const areas = [
  {
    emoji: "💼",
    title: "CNEM Empresarios",
    desc: "Consejo Nacional de Empresarios de México — networking, inversión y proyectos de impacto.",
    href: "/cnem",
    color: "from-[#D9FFFC] to-[#F5FAFF]",
    border: "border-[#1FE9E1]/30",
  },
  {
    emoji: "🇪🇸",
    title: "CONAJOMX España",
    desc: "Vinculación político-empresarial binacional México-España con agenda activa.",
    href: "/espana",
    color: "from-[#EEF3FB] to-[#F5FAFF]",
    border: "border-[#0A2D52]/15",
  },
  {
    emoji: "⚖️",
    title: "Legisladores y Alcaldes",
    desc: "Profesionalización, Estado Abierto y gobernanza local para las juventudes.",
    href: "/legisladores-y-alcaldes",
    color: "from-[#F5FAFF] to-[#EEF3FB]",
    border: "border-[#DCE8F2]",
  },
  {
    emoji: "🌐",
    title: "Agenda Internacional",
    desc: "G7, G20, OCDE, Harvard, VivaTech, COP31 y más. Presencia global en 2026.",
    href: "/agenda",
    color: "from-[#D9FFFC] to-[#EEF3FB]",
    border: "border-[#1FE9E1]/25",
  },
]

export function AreasSection() {
  return (
    <section className="py-16 bg-white border-y border-[#DCE8F2]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {areas.map((area, i) => (
            <motion.a
              key={area.title}
              href={area.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`group p-6 rounded-2xl bg-gradient-to-br ${area.color} border ${area.border} hover:shadow-[0_8px_32px_rgba(10,45,82,0.10)] transition-all duration-300 hover:-translate-y-0.5`}
            >
              <div className="text-3xl mb-3">{area.emoji}</div>
              <h3 className="text-[#071D3A] font-bold text-sm mb-2 group-hover:text-[#0A2D52] transition-colors">
                {area.title}
              </h3>
              <p className="text-[#526173] text-xs leading-relaxed">{area.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
