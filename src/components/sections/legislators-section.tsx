"use client"

import { motion } from "framer-motion"
import { ButtonLink } from "@/components/ui/button-link"

const pillars = [
  { emoji: "⚖️", title: "Estado Abierto", desc: "Promovemos transparencia, rendición de cuentas y participación ciudadana en los tres órdenes de gobierno." },
  { emoji: "👥", title: "Gobiernos locales humanistas", desc: "Fortalecemos capacidades institucionales con enfoque en derechos humanos y desarrollo integral." },
  { emoji: "🎓", title: "Profesionalización", desc: "Proyectos de formación continua para legisladores, alcaldes, regidores y síndicos." },
  { emoji: "📝", title: "Políticas para juventudes", desc: "Incidencia legislativa para el desarrollo integral y la participación de las juventudes en México." },
  { emoji: "🔄", title: "Intercambio de experiencias", desc: "Plataforma de colaboración entre gobiernos locales para compartir buenas prácticas de gestión." },
  { emoji: "🗳️", title: "Democracia y gobernabilidad", desc: "Fortalecimiento del sistema institucional de equilibrios y modernización de la gestión del Estado." },
]

export function LegislatorsSection() {
  return (
    <section className="py-24 bg-[#030B18]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-[#1FE9E1] text-sm font-semibold uppercase tracking-widest mb-4">
            Consejo Nacional
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
            Legisladores y Alcaldes
          </h2>
          <p className="text-[#8EA4BD] text-lg leading-relaxed mb-6">
            El país requiere redefinir competencias de los poderes constituidos, fortalecer el
            sistema institucional de equilibrios, modernizar la gestión del Estado y promover
            democracia, gobernabilidad y Estado Abierto en gobiernos locales.
          </p>
          {/* President highlight */}
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-[#1FE9E1]/[0.06] border border-[#1FE9E1]/20">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0A2D52] to-[#173B6D] border border-[#1FE9E1]/30 flex items-center justify-center shrink-0">
              <span className="text-[#1FE9E1] font-bold text-xs">JMT</span>
            </div>
            <div className="text-left">
              <p className="text-[#8EA4BD] text-xs">Presidente del Consejo</p>
              <p className="text-white font-bold text-sm">Ing. Juan Manuel Téllez Salazar</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#1FE9E1]/20 transition-all group"
            >
              <div className="text-2xl mb-3">{p.emoji}</div>
              <h3 className="text-white font-semibold text-sm mb-1.5 group-hover:text-[#1FE9E1] transition-colors">
                {p.title}
              </h3>
              <p className="text-[#8EA4BD] text-xs leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <ButtonLink
            href="/legisladores-y-alcaldes"
            variant="outline"
            className="border-[#1FE9E1]/30 text-[#1FE9E1] hover:bg-[#1FE9E1]/10 hover:border-[#1FE9E1]/50"
          >
            Conocer más
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
