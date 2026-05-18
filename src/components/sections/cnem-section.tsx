"use client"

import { motion } from "framer-motion"
import { mesaDirectivaCNEM2026 } from "@/data/leaders"
import { ButtonLink } from "@/components/ui/button-link"

const benefits = [
  { emoji: "🌐", title: "Networking empresarial", desc: "Acceso a una red de empresarios y líderes de alto impacto nacional e internacional." },
  { emoji: "🏛️", title: "Vinculación institucional", desc: "Conexión directa con instituciones públicas y privadas para proyectos de impacto." },
  { emoji: "📈", title: "Agenda económica", desc: "Participación en foros económicos nacionales e internacionales de alto nivel." },
  { emoji: "🌱", title: "Impacto social", desc: "Modelos de negocio con propósito, fortalecimiento comunitario y responsabilidad social." },
  { emoji: "🇲🇽", title: "Puentes México-España", desc: "Oportunidades de inversión, colaboración y expansión binacional." },
  { emoji: "👁️", title: "Visibilidad", desc: "Presencia en la agenda pública y reconocimiento en el sector empresarial." },
]

export function CNEMSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1FE9E1] mb-4">
            CNEM
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#071D3A] mb-6 leading-tight">
            Consejo Nacional de Empresarios de México
          </h2>
          <p className="text-[#526173] text-lg leading-relaxed">
            Empresas responsables, redes de alto valor e impacto social. El CNEM impulsa modelos
            de negocio con visión social, colaboración institucional y competitividad para un México
            más fuerte.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-16">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="p-5 rounded-xl bg-[#F5FAFF] border border-[#DCE8F2] hover:border-[#1FE9E1]/50 hover:shadow-[0_4px_20px_rgba(10,45,82,0.07)] transition-all group"
            >
              <div className="text-2xl mb-3">{b.emoji}</div>
              <h3 className="text-[#071D3A] font-semibold text-sm mb-1.5 group-hover:text-[#0A2D52] transition-colors">
                {b.title}
              </h3>
              <p className="text-[#526173] text-xs leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mesa Directiva */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-[#071D3A] font-bold text-xl">Mesa Directiva CNEM 2026</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {mesaDirectivaCNEM2026.map((leader, i) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white border border-[#DCE8F2] hover:border-[#1FE9E1]/40 transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#071D3A] to-[#0A2D52] flex items-center justify-center shrink-0">
                  <span className="text-[#1FE9E1] font-bold text-xs">{leader.initials}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-[#071D3A] text-xs font-semibold truncate">{leader.name}</p>
                  <p className="text-[#526173] text-xs leading-snug mt-0.5">{leader.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <ButtonLink
            href="/afiliacion"
            className="bg-[#071D3A] text-white hover:bg-[#0A2D52] font-semibold shadow-[0_4px_20px_rgba(7,29,58,0.20)]"
          >
            Afiliar mi empresa al CNEM
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
