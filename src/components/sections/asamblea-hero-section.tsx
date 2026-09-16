"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ButtonLink } from "@/components/ui/button-link"
import { AnchorButton } from "@/components/ui/button-link"
import { EventCountdown } from "@/components/ui/event-countdown"
import { ArrowRight, MapPin, CalendarDays, Ticket } from "lucide-react"
import { asambleaUi } from "@/data/asamblea-general-content"

export function AsambleaHeroSection() {
  return (
    <section className="relative pt-16 bg-[#050F20] overflow-hidden border-b-4 border-[#C9A227]">
      <Image
        src="/assets/conajomx/asamblea-general/asamblea-03.webp"
        alt="IX Asamblea General CONAJOMX — encuentro de legisladores, alcaldes y empresarios"
        fill
        priority
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050F20]/90 via-[#050F20]/88 to-[#050F20]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(201,162,39,0.14),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_80%,rgba(31,233,225,0.10),transparent_50%)]" />

      <div className="container mx-auto px-4 py-14 sm:py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C9A227]/50 bg-[#C9A227]/10 text-[#E6C766] text-xs font-bold uppercase tracking-[0.2em] mb-6">
            {asambleaUi.eyebrow}
          </span>

          <h1 className="text-4xl sm:text-6xl font-black text-white mb-3 leading-[1.05] tracking-tight">
            {asambleaUi.title}
          </h1>
          <p className="text-[#1FE9E1] text-lg sm:text-xl font-bold uppercase tracking-[0.15em] mb-6">
            {asambleaUi.titleAccent}
          </p>

          <div className="h-px w-24 bg-[#C9A227] mx-auto mb-6" />

          <p className="text-[#C7D2DE] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            {asambleaUi.intro}
          </p>

          {/* Venue / date / fee badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/[0.04] text-white text-sm">
              <MapPin className="w-4 h-4 text-[#1FE9E1]" /> {asambleaUi.venue}
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/[0.04] text-white text-sm">
              <CalendarDays className="w-4 h-4 text-[#1FE9E1]" /> {asambleaUi.dateLabel}
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 text-[#E6C766] text-sm font-semibold">
              <Ticket className="w-4 h-4" /> {asambleaUi.fee} · {asambleaUi.feeLabel}
            </span>
          </div>

          {/* Countdown */}
          <div className="mb-10">
            <p className="text-[#8EA4BD] text-xs font-semibold uppercase tracking-widest mb-4">
              Faltan
            </p>
            <EventCountdown targetDate={asambleaUi.dateISO} />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <ButtonLink
              href="/asamblea-general/registro"
              className="bg-[#1FE9E1] text-[#071D3A] hover:bg-[#33CCDD] font-bold shadow-[0_0_30px_rgba(31,233,225,0.35)] px-8 text-base"
            >
              {asambleaUi.ctaRegister} <ArrowRight className="ml-2 w-4 h-4" />
            </ButtonLink>
            <AnchorButton
              href="#sponsors"
              variant="outline"
              className="bg-transparent border-[#C9A227]/50 text-white hover:bg-white/5 hover:border-[#C9A227] font-semibold px-8 text-base"
            >
              {asambleaUi.ctaSponsor}
            </AnchorButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
