"use client"

import { motion } from "framer-motion"
import { SafeImage } from "@/components/ui/safe-image"
import { ButtonLink } from "@/components/ui/button-link"
import { EventCountdown } from "@/components/ui/event-countdown"
import { ArrowRight, MapPin, CalendarDays } from "lucide-react"
import { brandGradientTextStyle } from "@/lib/brand-text"
import { asambleaUi } from "@/data/asamblea-general-content"

export function AsambleaBannerSection() {
  return (
    <section className="relative bg-[#F5FAFF] overflow-hidden border-y border-[#DCE8F2]">
      <div className="container mx-auto px-4 py-14 sm:py-16 relative z-10">
        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1FE9E1]/40 bg-[#D9FFFC] text-[#0A2D52] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Próximo evento · Acceso exclusivo de Consejo
            </span>
            <h2
              className="text-3xl sm:text-4xl font-black uppercase leading-tight mb-2"
              style={brandGradientTextStyle}
            >
              {asambleaUi.title}
            </h2>
            <p className="text-[#0A2D52] text-sm sm:text-base font-semibold uppercase tracking-[0.14em] mb-4">
              {asambleaUi.titleAccent}
            </p>
            <p className="text-[#526173] text-base leading-relaxed mb-5 max-w-xl">
              {asambleaUi.intro}
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#DCE8F2] bg-white text-[#071D3A] text-xs">
                <MapPin className="w-3.5 h-3.5 text-[#1FE9E1]" /> {asambleaUi.venue}
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#DCE8F2] bg-white text-[#071D3A] text-xs">
                <CalendarDays className="w-3.5 h-3.5 text-[#1FE9E1]" /> {asambleaUi.dateLabel}
              </span>
            </div>
            <div className="flex flex-wrap gap-3 mb-6">
              <ButtonLink
                href="/asamblea-general/registro"
                className="bg-[#071D3A] text-white hover:bg-[#0A2D52] font-bold shadow-[0_4px_20px_rgba(7,29,58,0.20)] px-7"
              >
                {asambleaUi.ctaRegister} <ArrowRight className="ml-2 w-4 h-4" />
              </ButtonLink>
              <ButtonLink
                href="/asamblea-general"
                variant="outline"
                className="bg-transparent border-[#DCE8F2] text-[#071D3A] hover:bg-white hover:border-[#1FE9E1]/50 font-semibold px-7"
              >
                Ver convocatoria
              </ButtonLink>
            </div>
            <EventCountdown
              targetDate={asambleaUi.dateISO}
              accentClassName="text-[#071D3A]"
              boxClassName="bg-white border border-[#DCE8F2]"
              labelClassName="text-[#526173]"
              size="sm"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="rounded-2xl overflow-hidden border border-[#DCE8F2] shadow-[0_16px_40px_rgba(10,45,82,0.10)] aspect-[4/5] sm:aspect-[3/4] relative">
              <SafeImage
                src="/assets/conajomx/asamblea-general/angel-independencia.webp"
                alt="Ángel de la Independencia, Ciudad de México — sede de la IX Asamblea General CONAJOMX"
                fill
                className="object-cover object-[center_30%]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
