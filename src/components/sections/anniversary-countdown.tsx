"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { siteConfig } from "@/config/site"
import { ButtonLink } from "@/components/ui/button-link"

function getTimeLeft(target: Date) {
  const diff = target.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  }
}

function pad(n: number) {
  return String(n).padStart(2, "0")
}

export function AnniversaryCountdown() {
  const target = new Date(siteConfig.anniversaryDate)
  const [time, setTime] = useState(getTimeLeft(target))
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000)
    return () => clearInterval(id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const units = [
    { label: "Días", value: time.days },
    { label: "Horas", value: time.hours },
    { label: "Minutos", value: time.minutes },
    { label: "Segundos", value: time.seconds },
  ]

  return (
    <section className="py-24 bg-[#030B18] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#1FE9E1]/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle, #1FE9E1 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#1FE9E1] text-sm font-semibold uppercase tracking-widest mb-4">
            Celebración
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Rumbo a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1FE9E1] to-[#33CCDD]">
              10 años
            </span>{" "}
            de liderazgo y vinculación
          </h2>
          <p className="text-[#8EA4BD] text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Una década construyendo puentes entre liderazgos, empresas e instituciones para
            transformar el futuro de México.
          </p>

          {/* Countdown */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 mb-12">
            {units.map(({ label, value }) => (
              <div key={label} className="text-center">
                <div className="w-[72px] sm:w-[100px] h-[72px] sm:h-[100px] rounded-2xl bg-white/[0.04] border border-[#1FE9E1]/20 flex items-center justify-center mb-2 shadow-[0_0_20px_rgba(31,233,225,0.06)]">
                  <span className="text-2xl sm:text-4xl font-black text-[#1FE9E1] tabular-nums">
                    {mounted ? pad(value) : "00"}
                  </span>
                </div>
                <p className="text-[#8EA4BD] text-[10px] sm:text-xs uppercase tracking-wider">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <ButtonLink
            href="/afiliacion"
            className="bg-[#1FE9E1] text-[#030B18] hover:bg-[#33CCDD] font-bold shadow-[0_0_30px_rgba(31,233,225,0.35)] px-8 text-base hover:shadow-[0_0_40px_rgba(31,233,225,0.5)] transition-all"
          >
            Sé parte de la historia
          </ButtonLink>
        </motion.div>
      </div>
    </section>
  )
}
