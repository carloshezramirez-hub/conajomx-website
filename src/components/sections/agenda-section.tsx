"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { agenda2026 } from "@/data/agenda"
import { Badge } from "@/components/ui/badge"
import { ButtonLink } from "@/components/ui/button-link"
import { Calendar, MapPin } from "lucide-react"

const countryFlags: Record<string, string> = {
  Francia: "🇫🇷",
  "Estados Unidos": "🇺🇸",
  "Países Bajos": "🇳🇱",
  China: "🇨🇳",
  Turquía: "🇹🇷",
}

const months = ["Todos", "Marzo", "Mayo", "Junio", "Noviembre", "Diciembre"]

export function AgendaSection() {
  const [activeMonth, setActiveMonth] = useState("Todos")

  const filtered =
    activeMonth === "Todos"
      ? agenda2026
      : agenda2026.filter((e) => e.month === activeMonth)

  return (
    <section className="py-24 bg-[#030B18]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-[#1FE9E1] text-sm font-semibold uppercase tracking-widest mb-4">
            Agenda Internacional
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            CONAJOMX 2026
          </h2>
          <p className="text-[#8EA4BD] text-lg leading-relaxed">
            Una ruta global de foros, cumbres y encuentros para fortalecer la presencia de México
            en conversaciones estratégicas.
          </p>
        </div>

        {/* Month filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {months.map((m) => (
            <button
              key={m}
              onClick={() => setActiveMonth(m)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeMonth === m
                  ? "bg-[#1FE9E1] text-[#030B18]"
                  : "border border-white/10 text-[#8EA4BD] hover:border-[#1FE9E1]/30 hover:text-[#1FE9E1]"
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {filtered.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.05, 0.4), duration: 0.4 }}
              className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#1FE9E1]/20 hover:bg-[#1FE9E1]/[0.02] transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <Badge
                  variant="outline"
                  className="border-[#1FE9E1]/20 text-[#1FE9E1] bg-[#1FE9E1]/5 text-xs"
                >
                  {event.type}
                </Badge>
                <span className="text-2xl">{countryFlags[event.country] ?? "🌍"}</span>
              </div>
              <h3 className="text-white font-semibold mb-3 leading-snug group-hover:text-[#1FE9E1] transition-colors">
                {event.title}
              </h3>
              <div className="flex items-center gap-4 text-[#8EA4BD] text-xs">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" />
                  {event.dateLabel}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3" />
                  {event.country}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <ButtonLink
            href="/agenda"
            variant="outline"
            className="border-[#1FE9E1]/30 text-[#1FE9E1] hover:bg-[#1FE9E1]/10 hover:border-[#1FE9E1]/50"
          >
            Ver agenda completa
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
