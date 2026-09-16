"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ButtonLink } from "@/components/ui/button-link"
import { EventCountdown } from "@/components/ui/event-countdown"
import { ArrowRight, MapPin, CalendarDays } from "lucide-react"
import { asambleaUi } from "@/data/asamblea-general-content"

export function AsambleaBannerSection() {
  return (
    <section className="relative bg-[#050F20] overflow-hidden border-y-4 border-[#C9A227]">
      <Image
        src="/assets/conajomx/asamblea-general/asamblea-07.webp"
        alt="IX Asamblea General CONAJOMX"
        fill
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050F20]/95 via-[#050F20]/85 to-[#050F20]/95" />

      <div className="container mx-auto px-4 py-14 sm:py-16 relative z-10">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C9A227]/50 bg-[#C9A227]/10 text-[#E6C766] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Próximo evento
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-3">
              {asambleaUi.title}
            </h2>
            <p className="text-[#C7D2DE] text-base leading-relaxed mb-5 max-w-xl">
              {asambleaUi.intro}
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/[0.04] text-white text-xs">
                <MapPin className="w-3.5 h-3.5 text-[#1FE9E1]" /> {asambleaUi.venue}
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/[0.04] text-white text-xs">
                <CalendarDays className="w-3.5 h-3.5 text-[#1FE9E1]" /> {asambleaUi.dateLabel}
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink
                href="/asamblea-general/registro"
                className="bg-[#1FE9E1] text-[#071D3A] hover:bg-[#33CCDD] font-bold shadow-[0_0_24px_rgba(31,233,225,0.3)] px-7"
              >
                Registrarme <ArrowRight className="ml-2 w-4 h-4" />
              </ButtonLink>
              <ButtonLink
                href="/asamblea-general"
                variant="outline"
                className="bg-transparent border-[#C9A227]/50 text-white hover:bg-white/5 hover:border-[#C9A227] font-semibold px-7"
              >
                Ver convocatoria
              </ButtonLink>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <EventCountdown targetDate={asambleaUi.dateISO} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
