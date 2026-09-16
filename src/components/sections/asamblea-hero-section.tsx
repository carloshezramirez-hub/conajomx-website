"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ButtonLink } from "@/components/ui/button-link"
import { AnchorButton } from "@/components/ui/button-link"
import { EventCountdown } from "@/components/ui/event-countdown"
import { ShaderAnimation } from "@/components/ui/shader-lines"
import { playfair } from "@/lib/fonts"
import { ArrowRight, MapPin, CalendarDays, Ticket } from "lucide-react"
import { asambleaUi } from "@/data/asamblea-general-content"

export function AsambleaHeroSection() {
  return (
    <section className="relative pt-16 bg-black overflow-hidden border-b border-[#C9A227]/40">
      {/* Angel de la Independencia photo */}
      <Image
        src="/assets/conajomx/asamblea-general/angel-independencia.webp"
        alt="Ángel de la Independencia, Ciudad de México — sede de la IX Asamblea General CONAJOMX"
        fill
        priority
        className="object-cover object-[center_30%] opacity-45"
      />

      {/* Golden shader light-trails, screen-blended over the photo */}
      <div className="absolute inset-0 mix-blend-screen opacity-70">
        <ShaderAnimation />
      </div>

      {/* Depth + mood grading */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.1),rgba(0,0,0,0.75)_75%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_85%,rgba(165,28,48,0.20),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(201,162,39,0.14),transparent_50%)]" />

      <div className="container mx-auto px-4 py-16 sm:py-28 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-[#C9A227] text-xs font-bold uppercase tracking-[0.4em] mb-5">
            {asambleaUi.kicker}
          </p>

          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C9A227]/50 bg-[#C9A227]/[0.08] text-[#E6C766] text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] mb-7">
            {asambleaUi.eyebrow}
          </span>

          <h1
            className={`${playfair.className} text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-4 leading-[1.0] tracking-tight [text-shadow:0_2px_40px_rgba(201,162,39,0.25)]`}
          >
            {asambleaUi.title}
          </h1>
          <p
            className={`${playfair.className} italic text-[#E6C766] text-lg sm:text-2xl font-semibold mb-7 max-w-2xl mx-auto leading-snug`}
          >
            {asambleaUi.titleAccent}
          </p>

          <div className="flex items-center justify-center gap-2 mb-7">
            <span className="h-px w-14 bg-gradient-to-r from-transparent via-[#C9A227] to-[#A51C30]" />
            <span className="w-1.5 h-1.5 rotate-45 bg-[#E6C766]" />
            <span className="h-px w-14 bg-gradient-to-l from-transparent via-[#C9A227] to-[#A51C30]" />
          </div>

          <p className="text-[#C7D2DE] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-9">
            {asambleaUi.intro}
          </p>

          {/* Venue / date / fee badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/[0.03] backdrop-blur-sm text-white text-sm">
              <MapPin className="w-4 h-4 text-[#A51C30]" /> {asambleaUi.venue}
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/[0.03] backdrop-blur-sm text-white text-sm">
              <CalendarDays className="w-4 h-4 text-[#A51C30]" /> {asambleaUi.dateLabel}
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
              boxClassName="bg-white/[0.03] border border-[#C9A227]/30 backdrop-blur-sm"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <ButtonLink
              href="/asamblea-general/registro"
              className="bg-gradient-to-r from-[#E6C766] to-[#C9A227] text-black hover:brightness-110 font-bold shadow-[0_0_40px_rgba(201,162,39,0.4)] px-9 text-base"
            >
              {asambleaUi.ctaRegister} <ArrowRight className="ml-2 w-4 h-4" />
            </ButtonLink>
            <AnchorButton
              href="#sponsors"
              variant="outline"
              className="bg-transparent border-[#A51C30]/50 text-white hover:bg-[#A51C30]/10 hover:border-[#A51C30] font-semibold px-8 text-base"
            >
              {asambleaUi.ctaSponsor}
            </AnchorButton>
          </div>
        </motion.div>
      </div>

      {/* Photo credit — required by CC BY-SA 4.0 */}
      <p className="absolute bottom-2 right-3 z-10 text-white/25 text-[9px] tracking-wide">
        Foto: Matthiasmullie / Wikimedia Commons (CC BY-SA 4.0)
      </p>
    </section>
  )
}
