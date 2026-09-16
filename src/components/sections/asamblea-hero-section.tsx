"use client"

import { motion } from "framer-motion"
import { SafeImage } from "@/components/ui/safe-image"
import { BrandAnimatedBackground } from "@/components/ui/brand-animated-background"
import { ButtonLink } from "@/components/ui/button-link"
import { AnchorButton } from "@/components/ui/button-link"
import { EventCountdown } from "@/components/ui/event-countdown"
import { brandGradientTextStyle } from "@/lib/brand-text"
import { ArrowRight, MapPin, CalendarDays } from "lucide-react"
import { asambleaUi } from "@/data/asamblea-general-content"

export function AsambleaHeroSection() {
  return (
    <section className="relative pt-16 bg-white overflow-hidden">
      <BrandAnimatedBackground variant="hero" />

      <div className="container mx-auto px-4 py-12 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <p className="text-[#0A2D52] text-xs font-bold uppercase tracking-[0.4em] mb-4">
              {asambleaUi.kicker}
            </p>

            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1FE9E1]/40 bg-[#D9FFFC] text-[#0A2D52] text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] mb-6">
              {asambleaUi.eyebrow}
            </span>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase mb-3 leading-[1.0] tracking-tight"
              style={brandGradientTextStyle}
            >
              {asambleaUi.title}
            </h1>
            <p className="text-[#0A2D52] text-base sm:text-lg font-semibold uppercase tracking-[0.14em] mb-6">
              {asambleaUi.titleAccent}
            </p>

            <p className="text-[#526173] text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-7">
              {asambleaUi.intro}
            </p>

            {/* Venue / date badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#DCE8F2] bg-[#F5FAFF] text-[#071D3A] text-sm">
                <MapPin className="w-4 h-4 text-[#1FE9E1]" /> {asambleaUi.venue}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#DCE8F2] bg-[#F5FAFF] text-[#071D3A] text-sm">
                <CalendarDays className="w-4 h-4 text-[#1FE9E1]" /> {asambleaUi.dateLabel}
              </span>
            </div>

            {/* Countdown */}
            <div className="mb-8">
              <p className="text-[#526173] text-[11px] font-semibold uppercase tracking-[0.3em] mb-3">
                La cuenta regresiva ya comenzó
              </p>
              <EventCountdown
                targetDate={asambleaUi.dateISO}
                accentClassName="text-[#071D3A]"
                boxClassName="bg-[#F5FAFF] border border-[#DCE8F2]"
                labelClassName="text-[#526173]"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <ButtonLink
                href="/asamblea-general/registro"
                className="bg-[#071D3A] text-white hover:bg-[#0A2D52] font-bold shadow-[0_4px_20px_rgba(7,29,58,0.25)] px-9 text-base"
              >
                {asambleaUi.ctaRegister} <ArrowRight className="ml-2 w-4 h-4" />
              </ButtonLink>
              <AnchorButton
                href="#sponsors"
                variant="outline"
                className="bg-transparent border-[#DCE8F2] text-[#071D3A] hover:bg-[#F5FAFF] hover:border-[#1FE9E1]/50 font-semibold px-8 text-base"
              >
                {asambleaUi.ctaSponsor}
              </AnchorButton>
            </div>
          </motion.div>

          {/* Right: Angel de la Independencia photo, fully visible */}
          <motion.div
            initial={{ opacity: 0, x: 24, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="rounded-3xl overflow-hidden border border-[#DCE8F2] shadow-[0_24px_64px_rgba(10,45,82,0.14)] aspect-[4/5] sm:aspect-[4/3] lg:aspect-[3/4] relative">
              <SafeImage
                src="/assets/conajomx/asamblea-general/angel-independencia.webp"
                alt="Ángel de la Independencia, Ciudad de México — sede de la IX Asamblea General CONAJOMX"
                fill
                priority
                className="object-cover object-[center_30%]"
              />
            </div>
            <p className="text-[#8EA4BD] text-[10px] tracking-wide mt-2 text-right">
              Foto del Ángel de la Independencia: Matthiasmullie / Wikimedia Commons (CC BY-SA 4.0)
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
