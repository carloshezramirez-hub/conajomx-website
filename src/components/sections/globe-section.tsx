"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"

const CobeGlobe = dynamic(
  () => import("@/components/ui/cobe-globe").then((m) => m.CobeGlobe),
  {
    ssr: false,
    loading: () => (
      <div className="w-full max-w-[460px] mx-auto aspect-square flex items-center justify-center">
        <div className="w-64 h-64 rounded-full bg-[#F5FAFF] border border-[#DCE8F2] animate-pulse" />
      </div>
    ),
  }
)

const locations = [
  { city: "CDMX", country: "México", flag: "🇲🇽" },
  { city: "Cancún", country: "México", flag: "🇲🇽" },
  { city: "Madrid", country: "España", flag: "🇪🇸" },
]

const forums = ["OCDE", "G7", "G20", "WEF", "COP31", "Harvard"]

export function GlobeSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              {/* Glow halo behind globe */}
              <div className="absolute inset-8 rounded-full bg-gradient-radial from-[#D9FFFC] to-transparent opacity-60 blur-2xl" />
              <CobeGlobe />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1FE9E1] mb-4">
              Presencia Internacional
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#071D3A] mb-6 leading-tight">
              Una red que conecta{" "}
              <span className="text-[#0A2D52]">tres continentes</span>
            </h2>
            <p className="text-[#526173] text-lg leading-relaxed mb-8">
              Conectamos liderazgos, empresas e instituciones en México, España y foros
              internacionales — desde Harvard hasta el G20, desde la OCDE hasta la COP31.
            </p>

            {/* Location pills */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {locations.map((loc) => (
                <div
                  key={loc.city}
                  className="p-3 rounded-xl bg-[#F5FAFF] border border-[#DCE8F2] text-center"
                >
                  <p className="text-2xl mb-1">{loc.flag}</p>
                  <p className="text-[#071D3A] font-semibold text-sm">{loc.city}</p>
                  <p className="text-[#526173] text-xs">{loc.country}</p>
                </div>
              ))}
            </div>

            {/* Forum tags */}
            <div className="flex flex-wrap gap-2">
              {forums.map((f) => (
                <span
                  key={f}
                  className="px-3 py-1 rounded-full bg-[#D9FFFC] border border-[#1FE9E1]/30 text-[#0A2D52] text-xs font-semibold"
                >
                  {f}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
