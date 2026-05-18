"use client"

import { motion } from "framer-motion"

const cards = [
  {
    emoji: "🤝",
    title: "Vinculación político-empresarial",
    desc: "Puentes entre líderes públicos y privados para crear oportunidades reales de impacto.",
  },
  {
    emoji: "⚡",
    title: "Liderazgo joven",
    desc: "Impulsamos la siguiente generación de dirigentes con formación, visibilidad y red de alto nivel.",
  },
  {
    emoji: "🌍",
    title: "Agenda internacional",
    desc: "Presencia activa en G7, G20, OCDE, Foro Económico Mundial y cumbres estratégicas globales.",
  },
  {
    emoji: "🏛️",
    title: "Impacto público y privado",
    desc: "Proyectos que fortalecen la gobernanza local y la competitividad del sector empresarial.",
  },
  {
    emoji: "🇲🇽",
    title: "México + España",
    desc: "Alianza binacional activa para inversión, cultura, intercambio institucional y cooperación estratégica.",
  },
  {
    emoji: "📋",
    title: "Empresarios y legisladores",
    desc: "Una red plural de actores comprometidos con el desarrollo integral y sostenible del país.",
  },
]

export function AboutSection() {
  return (
    <section id="nosotros" className="py-24 bg-[#030B18]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-[#1FE9E1] text-sm font-semibold uppercase tracking-widest mb-4">
            Quiénes somos
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Una plataforma de vinculación para transformar{" "}
            <span className="text-[#1FE9E1]">liderazgo en acción</span>
          </h2>
          <p className="text-[#8EA4BD] text-lg leading-relaxed">
            Conectamos visión pública, estrategia empresarial y colaboración internacional para crear
            oportunidades reales. Somos la plataforma de vinculación político-empresarial más grande
            de México con presencia activa en España y foros internacionales.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group p-6 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#1FE9E1]/20 hover:bg-[#1FE9E1]/[0.03] transition-all duration-300"
            >
              <div className="text-2xl mb-4">{card.emoji}</div>
              <h3 className="text-white font-semibold mb-2 group-hover:text-[#1FE9E1] transition-colors">
                {card.title}
              </h3>
              <p className="text-[#8EA4BD] text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Legal institutional note */}
        <div className="max-w-3xl mx-auto p-5 rounded-xl border border-white/[0.05] bg-white/[0.02]">
          <p className="text-[#8EA4BD] text-xs text-center leading-relaxed">
            CONAJOMX opera como asociación civil con estructura de asamblea, consejo directivo y objetivos
            sociales enfocados en vinculación, participación ciudadana, proyectos sociales, cultura,
            desarrollo económico, derechos humanos, equidad, medio ambiente y colaboración con
            instituciones públicas y privadas.
          </p>
        </div>
      </div>
    </section>
  )
}
