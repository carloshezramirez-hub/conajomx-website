"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ButtonLink } from "@/components/ui/button-link"
import { EventCountdown } from "@/components/ui/event-countdown"
import { ArrowRight, MapPin, CalendarDays } from "lucide-react"
import { gold3dStyle } from "@/lib/gold-text"
import { asambleaUi } from "@/data/asamblea-general-content"

export function AsambleaBannerSection() {
  return (
    <section className="relative bg-black overflow-hidden border-y border-[#C9A227]/40">
      <Image
        src="/assets/conajomx/asamblea-general/angel-independencia.webp"
        alt="Ángel de la Independencia, Ciudad de México — sede de la IX Asamblea General CONAJOMX"
        fill
        className="object-cover object-[center_30%] opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(201,162,39,0.12),transparent_45%)]" />

      <div className="container mx-auto px-4 py-12 sm:py-14 relative z-10">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C9A227]/50 bg-[#C9A227]/10 text-[#E6C766] text-xs font-bold uppercase tracking-[0.2em] mb-3">
              Próximo evento · Acceso exclusivo de Consejo
            </span>
            <h2
              className="text-3xl sm:text-4xl font-black uppercase leading-tight mb-2"
              style={gold3dStyle}
            >
              {asambleaUi.title}
            </h2>
            <p className="text-[#9C7A24] text-sm sm:text-base font-semibold uppercase tracking-[0.14em] mb-3">
              {asambleaUi.titleAccent}
            </p>
            <p className="text-[#C7D2DE] text-base leading-relaxed mb-4 max-w-xl">
              {asambleaUi.intro}
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/[0.04] text-white text-xs">
                <MapPin className="w-3.5 h-3.5 text-[#C9A227]" /> {asambleaUi.venue}
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/[0.04] text-white text-xs">
                <CalendarDays className="w-3.5 h-3.5 text-[#C9A227]" /> {asambleaUi.dateLabel}
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink
                href="/asamblea-general/registro"
                className="bg-gradient-to-r from-[#E6C766] to-[#C9A227] text-black hover:brightness-110 font-bold shadow-[0_0_24px_rgba(201,162,39,0.3)] px-7"
              >
                {asambleaUi.ctaRegister} <ArrowRight className="ml-2 w-4 h-4" />
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
            <EventCountdown
              targetDate={asambleaUi.dateISO}
              accentClassName="text-[#E6C766]"
              boxClassName="bg-white/[0.03] border border-[#C9A227]/30"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
