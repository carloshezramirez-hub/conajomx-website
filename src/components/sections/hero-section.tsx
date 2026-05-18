"use client"

import { motion } from "framer-motion"
import { ButtonLink } from "@/components/ui/button-link"
import { BrandAnimatedBackground } from "@/components/ui/brand-animated-background"
import { SafeImage } from "@/components/ui/safe-image"
import { ArrowRight, Calendar } from "lucide-react"
import { mediaAssets } from "@/data/media"

const floatingBadges = [
  { label: "México", emoji: "🇲🇽", delay: 0 },
  { label: "España", emoji: "🇪🇸", delay: 0.8 },
  { label: "Agenda Internacional", emoji: "🌐", delay: 1.6 },
  { label: "CNEM Empresarios", emoji: "💼", delay: 2.4 },
]

const stats = [
  { value: "10+", label: "Años de trayectoria" },
  { value: "8ª", label: "Asamblea General" },
  { value: "3", label: "Presencias activas" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <BrandAnimatedBackground variant="hero" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Text content */}
          <div>
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D9FFFC] border border-[#1FE9E1]/40 text-[#0A2D52] text-sm font-semibold mb-7"
            >
              <span className="w-2 h-2 rounded-full bg-[#1FE9E1] animate-pulse" />
              Consejo de Políticos y Empresarios Líderes
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-black text-[#071D3A] leading-[1.07] tracking-tight mb-6"
            >
              Liderazgo político y{" "}
              <span
                className="relative inline-block"
                style={{
                  background: "linear-gradient(135deg, #071D3A 0%, #0A2D52 50%, #1FE9E1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                empresarial
              </span>{" "}
              para México y el mundo
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="text-[#526173] text-lg leading-relaxed mb-9 max-w-lg"
            >
              CONAJOMX conecta líderes, empresarios e instituciones para impulsar
              inversión, políticas públicas, competitividad y proyectos de impacto
              entre México, España y foros internacionales.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <ButtonLink
                href="/afiliacion"
                className="bg-[#071D3A] text-white hover:bg-[#0A2D52] font-semibold px-7 py-2.5 shadow-[0_4px_20px_rgba(7,29,58,0.25)] hover:shadow-[0_6px_28px_rgba(7,29,58,0.35)] transition-all text-sm h-auto"
              >
                Afiliar mi empresa
                <ArrowRight className="ml-2 w-4 h-4" />
              </ButtonLink>
              <ButtonLink
                href="/agenda"
                variant="outline"
                className="border-[#DCE8F2] text-[#071D3A] hover:bg-[#F5FAFF] hover:border-[#1FE9E1]/50 font-semibold px-7 py-2.5 text-sm h-auto"
              >
                <Calendar className="mr-2 w-4 h-4 text-[#1FE9E1]" />
                Ver agenda 2026
              </ButtonLink>
            </motion.div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              {floatingBadges.map((badge) => (
                <motion.span
                  key={badge.label}
                  className="animate-float-badge inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#DCE8F2] text-[#526173] text-xs font-medium shadow-sm"
                  style={{ animationDelay: `${badge.delay}s` }}
                >
                  {badge.emoji} {badge.label}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual collage */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              {/* Main image card */}
              <div className="rounded-3xl overflow-hidden border border-[#DCE8F2] shadow-[0_24px_64px_rgba(10,45,82,0.12)] aspect-[4/3] relative">
                <SafeImage
                  src={mediaAssets.agendaInternacional.src}
                  alt={mediaAssets.agendaInternacional.alt}
                  fill
                  className="object-cover"
                  priority
                  fallbackText="Agenda Internacional CONAJOMX 2026"
                  fallbackIcon="🌍"
                />
                {/* Overlay label */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#071D3A]/80 to-transparent">
                  <p className="text-white font-semibold text-sm">Agenda Internacional 2026</p>
                  <p className="text-white/70 text-xs">10 eventos globales · 6 países</p>
                </div>
              </div>

              {/* Floating stat card — top right */}
              <div className="absolute -top-5 -right-5 bg-white rounded-2xl border border-[#DCE8F2] shadow-[0_8px_32px_rgba(10,45,82,0.10)] p-4 min-w-[140px]">
                <p className="text-3xl font-black text-[#071D3A]">8ª</p>
                <p className="text-[#526173] text-xs leading-snug mt-0.5">Asamblea General<br />de Líderes 2026</p>
              </div>

              {/* Floating stat card — bottom left */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl border border-[#DCE8F2] shadow-[0_8px_32px_rgba(10,45,82,0.10)] p-4 min-w-[140px]">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-lg">🇲🇽</span>
                  <span className="text-lg">🇪🇸</span>
                </div>
                <p className="text-[#071D3A] font-bold text-sm">México + España</p>
                <p className="text-[#526173] text-xs">Presencia bilateral activa</p>
              </div>

              {/* Small secondary image */}
              <div className="absolute top-1/2 -right-16 -translate-y-1/2 w-28 h-28 rounded-2xl overflow-hidden border border-[#DCE8F2] shadow-[0_8px_24px_rgba(10,45,82,0.10)]">
                <SafeImage
                  src={mediaAssets.mesaDirectivaCNEM.src}
                  alt={mediaAssets.mesaDirectivaCNEM.alt}
                  fill
                  className="object-cover"
                  fallbackText="Mesa Directiva CNEM"
                  fallbackIcon="👥"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar — full width below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 pt-8 border-t border-[#DCE8F2] grid grid-cols-3 gap-4 sm:gap-8 max-w-lg"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl sm:text-3xl font-black text-[#071D3A]">{stat.value}</p>
              <p className="text-[#526173] text-xs sm:text-sm mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
