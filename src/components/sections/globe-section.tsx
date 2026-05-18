"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"

const CobeGlobe = dynamic(
  () => import("@/components/ui/cobe-globe").then((m) => m.CobeGlobe),
  {
    ssr: false,
    loading: () => (
      <div className="w-full max-w-[500px] mx-auto aspect-square flex items-center justify-center">
        <div className="w-64 h-64 rounded-full bg-[#061833] border border-[#1FE9E1]/20 animate-pulse" />
      </div>
    ),
  }
)

const locations = [
  { city: "CDMX", country: "México", flag: "🇲🇽" },
  { city: "Cancún", country: "México", flag: "🇲🇽" },
  { city: "Madrid", country: "España", flag: "🇪🇸" },
]

export function GlobeSection() {
  return (
    <section className="py-24 bg-[#061833] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0A2D52]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#1FE9E1] text-sm font-semibold uppercase tracking-widest mb-4">
              Presencia Internacional
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              Una red que conecta{" "}
              <span className="text-[#1FE9E1]">tres continentes</span>
            </h2>
            <p className="text-[#8EA4BD] text-lg leading-relaxed mb-8">
              Una red que conecta liderazgos, empresas e instituciones en México, España y foros
              internacionales — desde Harvard hasta el G20, desde la OCDE hasta la COP31.
            </p>

            {/* Location cards */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {locations.map((loc) => (
                <div
                  key={loc.city}
                  className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-center"
                >
                  <p className="text-2xl mb-1">{loc.flag}</p>
                  <p className="text-white font-semibold text-sm">{loc.city}</p>
                  <p className="text-[#8EA4BD] text-xs">{loc.country}</p>
                </div>
              ))}
            </div>

            {/* Foros row */}
            <div className="flex flex-wrap gap-2">
              {["OCDE", "G7", "G20", "WEF", "COP31", "Harvard"].map((f) => (
                <span
                  key={f}
                  className="px-3 py-1 rounded-full bg-[#1FE9E1]/[0.06] border border-[#1FE9E1]/15 text-[#1FE9E1] text-xs font-medium"
                >
                  {f}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Globe side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <CobeGlobe />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
