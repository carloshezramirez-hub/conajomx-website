"use client"

import { motion } from "framer-motion"
import { ButtonLink } from "@/components/ui/button-link"
import { ArrowRight, Calendar, ChevronDown } from "lucide-react"

const stats = [
  { value: "10+", label: "Años de trayectoria" },
  { value: "8ª", label: "Asamblea General 2026" },
  { value: "3", label: "Países con presencia activa" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#030B18]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#061833] via-[#030B18] to-[#030B18]" />
        {/* Radial glow top-left */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#1FE9E1]/[0.04] rounded-full blur-[120px] pointer-events-none" />
        {/* Radial glow bottom-right */}
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#0A2D52]/40 rounded-full blur-[100px] pointer-events-none" />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(circle, #1FE9E1 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex-1 flex items-center">
        <div className="max-w-4xl mx-auto text-center w-full">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1FE9E1]/20 bg-[#1FE9E1]/[0.06] text-[#1FE9E1] text-sm mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#1FE9E1] animate-pulse" />
            México · España · Foros Internacionales
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[4.5rem] font-black text-white leading-[1.05] tracking-tight mb-6"
          >
            Liderazgo político y{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1FE9E1] to-[#33CCDD]">
              empresarial
            </span>{" "}
            para México y el mundo
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-[#8EA4BD] text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            CONAJOMX articula alianzas entre líderes, empresarios e instituciones para impulsar
            inversión, competitividad, políticas públicas y proyectos de impacto entre México,
            España y foros internacionales.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <ButtonLink
              href="/afiliacion"
              size="lg"
              className="bg-[#1FE9E1] text-[#030B18] hover:bg-[#33CCDD] font-bold text-base shadow-[0_0_30px_rgba(31,233,225,0.35)] px-8 hover:shadow-[0_0_40px_rgba(31,233,225,0.5)] transition-all w-full sm:w-auto"
            >
              Afiliar mi empresa
              <ArrowRight className="ml-2 w-4 h-4" />
            </ButtonLink>
            <ButtonLink
              href="/agenda"
              variant="outline"
              size="lg"
              className="border-[#1FE9E1]/30 text-[#1FE9E1] hover:bg-[#1FE9E1]/10 hover:border-[#1FE9E1]/50 text-base px-8 w-full sm:w-auto"
            >
              <Calendar className="mr-2 w-4 h-4" />
              Ver agenda 2026
            </ButtonLink>
            <ButtonLink
              href="/liderazgo"
              variant="ghost"
              size="lg"
              className="text-[#8EA4BD] hover:text-white text-base w-full sm:w-auto"
            >
              Conocer liderazgo
            </ButtonLink>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 mt-16 pt-12 border-t border-white/5"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1FE9E1]">
                  {stat.value}
                </p>
                <p className="text-[#8EA4BD] text-xs sm:text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="relative z-10 pb-8"
      >
        <ChevronDown className="w-5 h-5 text-[#8EA4BD]/50 animate-bounce mx-auto" />
      </motion.div>
    </section>
  )
}
