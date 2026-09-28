"use client"

import type { CSSProperties } from "react"
import { motion } from "framer-motion"
import { ShaderAnimation } from "@/components/ui/shader-lines"
import { ButtonLink } from "@/components/ui/button-link"
import { AnchorButton } from "@/components/ui/button-link"
import { EventCountdown } from "@/components/ui/event-countdown"
import { ArrowRight, MapPin, CalendarDays } from "lucide-react"
import { asambleaUi } from "@/data/asamblea-general-content"

const goldGradientTextStyle: CSSProperties = {
  background: "linear-gradient(120deg, #E8CE8A 0%, #C9A227 30%, #F4E4B8 50%, #C9A227 70%, #E8CE8A 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  color: "transparent",
}

export function AsambleaHeroSection() {
  return (
    <section className="relative pt-16 bg-[#050B1A] overflow-hidden">
      {/* Navy base + gold/silver glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 15% 10%, rgba(201,162,39,0.16) 0%, transparent 42%)," +
              "radial-gradient(circle at 85% 15%, rgba(199,205,217,0.10) 0%, transparent 40%)," +
              "radial-gradient(circle at 50% 90%, rgba(201,162,39,0.08) 0%, transparent 45%)," +
              "linear-gradient(180deg, #050B1A 0%, #0A1830 55%, #050B1A 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle, #E8CE8A 1.2px, transparent 1.2px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>
      <ShaderAnimation className="opacity-[0.18]" color={[0.788, 0.635, 0.153]} />

      <div className="container mx-auto px-4 py-14 sm:py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-[#C9A227] text-xs font-bold uppercase tracking-[0.4em] mb-4">
            {asambleaUi.kicker}
          </p>

          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/[0.08] text-[#E8CE8A] text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] mb-6">
            {asambleaUi.eyebrow}
          </span>

          <h1
            className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase mb-3 leading-[1.0] tracking-tight"
            style={goldGradientTextStyle}
          >
            {asambleaUi.title}
          </h1>
          <p className="text-[#C7CDD9] text-base sm:text-xl font-semibold uppercase tracking-[0.14em] mb-6">
            {asambleaUi.titleAccent}
          </p>

          <p className="text-[#9AA5B5] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            {asambleaUi.intro}
          </p>

          {/* Venue / date badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm text-white text-sm">
              <MapPin className="w-4 h-4 text-[#C9A227]" /> {asambleaUi.venue}
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm text-white text-sm">
              <CalendarDays className="w-4 h-4 text-[#C9A227]" /> {asambleaUi.dateLabel}
            </span>
          </div>

          {/* Countdown */}
          <div className="mb-8">
            <p className="text-[#9AA5B5] text-[11px] font-semibold uppercase tracking-[0.3em] mb-3">
              La cuenta regresiva ya comenzó
            </p>
            <EventCountdown
              targetDate={asambleaUi.dateISO}
              accentClassName="text-[#E8CE8A]"
              boxClassName="bg-white/[0.04] border border-[#C9A227]/25 backdrop-blur-sm"
              labelClassName="text-[#9AA5B5]"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <ButtonLink
              href="/asamblea-general/registro"
              className="bg-gradient-to-r from-[#C9A227] to-[#E8CE8A] text-[#050B1A] hover:brightness-110 font-bold shadow-[0_4px_24px_rgba(201,162,39,0.30)] px-9 text-base"
            >
              {asambleaUi.ctaRegister} <ArrowRight className="ml-2 w-4 h-4" />
            </ButtonLink>
            <AnchorButton
              href="#sponsors"
              variant="outline"
              className="bg-white/[0.03] backdrop-blur-sm border-white/15 text-white hover:bg-white/[0.06] hover:border-[#C9A227]/50 font-semibold px-8 text-base"
            >
              {asambleaUi.ctaSponsor}
            </AnchorButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
