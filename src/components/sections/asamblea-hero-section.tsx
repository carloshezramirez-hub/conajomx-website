"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ButtonLink } from "@/components/ui/button-link"
import { AnchorButton } from "@/components/ui/button-link"
import { EventCountdown } from "@/components/ui/event-countdown"
import { playfair } from "@/lib/fonts"
import { ArrowRight, MapPin, CalendarDays, Ticket } from "lucide-react"
import { asambleaUi } from "@/data/asamblea-general-content"

export function AsambleaHeroSection() {
  return (
    <section className="relative pt-16 bg-[#050B16] overflow-hidden border-b border-[#C9A227]/40">
      <Image
        src="/assets/conajomx/asamblea-general/asamblea-03.webp"
        alt="IX Asamblea General CONAJOMX — encuentro de legisladores, alcaldes y empresarios"
        fill
        priority
        className="object-cover opacity-[0.18]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050B16]/95 via-[#050B16]/92 to-[#050B16]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(201,162,39,0.16),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_78%,rgba(31,233,225,0.08),transparent_50%)]" />
      {/* Fine gold hairline texture */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, #C9A227 0px, #C9A227 1px, transparent 1px, transparent 140px)",
        }}
      />

      <div className="container mx-auto px-4 py-16 sm:py-28 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-[#C9A227] text-xs font-bold uppercase tracking-[0.35em] mb-5">
            {asambleaUi.kicker}
          </p>

          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C9A227]/50 bg-[#C9A227]/[0.08] text-[#E6C766] text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] mb-7">
            {asambleaUi.eyebrow}
          </span>

          <h1
            className={`${playfair.className} text-5xl sm:text-7xl font-black text-white mb-4 leading-[1.02] tracking-tight`}
          >
            {asambleaUi.title}
          </h1>
          <p
            className={`${playfair.className} italic text-[#E6C766] text-lg sm:text-2xl font-semibold mb-7 max-w-2xl mx-auto leading-snug`}
          >
            {asambleaUi.titleAccent}
          </p>

          <div className="flex items-center justify-center gap-3 mb-7">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#C9A227]" />
            <span className="w-1.5 h-1.5 rotate-45 bg-[#C9A227]" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#C9A227]" />
          </div>

          <p className="text-[#C7D2DE] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-9">
            {asambleaUi.intro}
          </p>

          {/* Venue / date / fee badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/[0.03] text-white text-sm">
              <MapPin className="w-4 h-4 text-[#1FE9E1]" /> {asambleaUi.venue}
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/[0.03] text-white text-sm">
              <CalendarDays className="w-4 h-4 text-[#1FE9E1]" /> {asambleaUi.dateLabel}
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9A227]/50 bg-[#C9A227]/[0.08] text-[#E6C766] text-sm font-semibold">
              <Ticket className="w-4 h-4" /> {asambleaUi.fee} · {asambleaUi.feeLabel}
            </span>
          </div>

          {/* Countdown */}
          <div className="mb-10">
            <p className="text-[#8EA4BD] text-[11px] font-semibold uppercase tracking-[0.3em] mb-4">
              La cuenta regresiva ya comenzó
            </p>
            <EventCountdown
              targetDate={asambleaUi.dateISO}
              accentClassName="text-[#E6C766]"
              boxClassName="bg-white/[0.03] border border-[#C9A227]/30"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <ButtonLink
              href="/asamblea-general/registro"
              className="bg-gradient-to-r from-[#E6C766] to-[#C9A227] text-[#050B16] hover:brightness-110 font-bold shadow-[0_0_36px_rgba(201,162,39,0.35)] px-9 text-base"
            >
              {asambleaUi.ctaRegister} <ArrowRight className="ml-2 w-4 h-4" />
            </ButtonLink>
            <AnchorButton
              href="#sponsors"
              variant="outline"
              className="bg-transparent border-white/25 text-white hover:bg-white/5 hover:border-[#C9A227] font-semibold px-8 text-base"
            >
              {asambleaUi.ctaSponsor}
            </AnchorButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
