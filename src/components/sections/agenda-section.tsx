"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { agenda2026 } from "@/data/agenda"
import { Badge } from "@/components/ui/badge"
import { ButtonLink } from "@/components/ui/button-link"
import { SafeImage } from "@/components/ui/safe-image"
import { mediaAssets } from "@/data/media"
import { Calendar, MapPin } from "lucide-react"

const countryFlags: Record<string, string> = {
  Francia: "🇫🇷",
  "Estados Unidos": "🇺🇸",
  "Países Bajos": "🇳🇱",
  China: "🇨🇳",
  Turquía: "🇹🇷",
}

const typeColors: Record<string, string> = {
  Cumbre: "bg-[#071D3A] text-white",
  Conferencia: "bg-[#0A2D52] text-white",
  Foro: "bg-[#D9FFFC] text-[#0A2D52]",
  "Foro empresarial": "bg-[#D9FFFC] text-[#0A2D52]",
  "Foro económico": "bg-[#EEF3FB] text-[#0A2D52]",
  Tecnología: "bg-[#EEF3FB] text-[#0A2D52]",
  Democracia: "bg-[#F5FAFF] text-[#526173]",
  Clima: "bg-emerald-50 text-emerald-700",
  Competencia: "bg-[#F5FAFF] text-[#526173]",
}

const months = ["Todos", "Marzo", "Mayo", "Junio", "Noviembre", "Diciembre"]

export function AgendaSection() {
  const [activeMonth, setActiveMonth] = useState("Todos")

  const filtered =
    activeMonth === "Todos"
      ? agenda2026
      : agenda2026.filter((e) => e.month === activeMonth)

  return (
    <section className="py-24 bg-[#F5FAFF]">
      <div className="container mx-auto px-4">
        {/* Header + image */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1FE9E1] mb-4">
              Agenda Internacional
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#071D3A] mb-6 leading-tight">
              CONAJOMX 2026
            </h2>
            <p className="text-[#526173] text-lg leading-relaxed mb-8">
              Una ruta global de foros, cumbres y encuentros para fortalecer la
              presencia de México en las conversaciones estratégicas que definen el futuro.
            </p>

            {/* Month filters */}
            <div className="flex flex-wrap gap-2">
              {months.map((m) => (
                <button
                  key={m}
                  onClick={() => setActiveMonth(m)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    activeMonth === m
                      ? "bg-[#071D3A] text-white shadow-sm"
                      : "bg-white border border-[#DCE8F2] text-[#526173] hover:border-[#071D3A]/30 hover:text-[#071D3A]"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-3xl overflow-hidden border border-[#DCE8F2] shadow-[0_12px_40px_rgba(10,45,82,0.10)] aspect-[16/10] relative">
              <SafeImage
                src={mediaAssets.agendaInternacional.src}
                alt={mediaAssets.agendaInternacional.alt}
                fill
                className="object-cover"
                fallbackText="Agenda Internacional CONAJOMX 2026 · Pon aquí tu imagen en public/assets/conajomx/agenda/agenda-internacional-2026.jpeg"
                fallbackIcon="🌍"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[#071D3A] text-xs font-semibold border border-white/50">
                  🗓️ 10 eventos · 6 países
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Events timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {filtered.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.05, 0.35), duration: 0.4 }}
              className="flex gap-4 p-5 rounded-2xl bg-white border border-[#DCE8F2] hover:border-[#1FE9E1]/50 hover:shadow-[0_8px_24px_rgba(10,45,82,0.08)] transition-all group"
            >
              {/* Left timeline line */}
              <div className="flex flex-col items-center gap-1 shrink-0">
                <span className="text-2xl">{countryFlags[event.country] ?? "🌍"}</span>
                <div className="w-px flex-1 bg-[#DCE8F2] mt-1" />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${typeColors[event.type] ?? "bg-[#F5FAFF] text-[#526173]"}`}>
                    {event.type}
                  </span>
                </div>
                <h3 className="text-[#071D3A] font-semibold text-sm leading-snug mb-2 group-hover:text-[#0A2D52] transition-colors">
                  {event.title}
                </h3>
                <div className="flex items-center gap-4 text-[#526173] text-xs">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-[#1FE9E1]" />
                    {event.dateLabel}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#0A2D52]" />
                    {event.country}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <ButtonLink
            href="/agenda"
            className="bg-[#071D3A] text-white hover:bg-[#0A2D52] font-semibold shadow-[0_4px_20px_rgba(7,29,58,0.20)]"
          >
            Ver agenda completa
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
