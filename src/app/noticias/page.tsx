import type { Metadata } from "next"
import { updates } from "@/data/updates"
import { Badge } from "@/components/ui/badge"
import { ContactSection } from "@/components/sections/contact-section"

export const metadata: Metadata = {
  title: "Noticias y Novedades",
  description:
    "Actividad, reconocimientos y novedades de CONAJOMX: foros internacionales, encuentros institucionales, México-España y más.",
}

const categoryStyle: Record<string, string> = {
  "Agenda verde": "border-emerald-400/30 text-emerald-400 bg-emerald-400/5",
  Reconocimiento: "border-yellow-400/30 text-yellow-400 bg-yellow-400/5",
  Internacional: "border-blue-400/30 text-blue-300 bg-blue-400/5",
  "México-España": "border-[#1FE9E1]/30 text-[#1FE9E1] bg-[#1FE9E1]/5",
  Empresarial: "border-violet-400/30 text-violet-300 bg-violet-400/5",
  Institucional: "border-orange-400/30 text-orange-300 bg-orange-400/5",
  Asamblea: "border-pink-400/30 text-pink-300 bg-pink-400/5",
  Sustentabilidad: "border-green-400/30 text-green-400 bg-green-400/5",
}

export default function NoticiasPage() {
  return (
    <>
      <div className="pt-16 bg-[#030B18]">
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-[#1FE9E1] text-sm font-semibold uppercase tracking-widest mb-4">
            Novedades
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
            Actividad y Reconocimientos
          </h1>
          <p className="text-[#8EA4BD] text-xl max-w-2xl mx-auto leading-relaxed">
            CONAJOMX en foros, cumbres, encuentros institucionales y eventos empresariales
            nacionales e internacionales durante 2026.
          </p>
        </div>
      </div>

      <section className="py-16 bg-[#030B18]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {updates.map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#1FE9E1]/20 hover:bg-white/[0.04] transition-all group flex flex-col"
              >
                <Badge
                  variant="outline"
                  className={`text-xs mb-3 w-fit ${
                    categoryStyle[item.category] ?? "border-white/20 text-white/60"
                  }`}
                >
                  {item.category}
                </Badge>
                <h2 className="text-white font-semibold text-sm mb-2 leading-snug group-hover:text-[#1FE9E1] transition-colors flex-1">
                  {item.title}
                </h2>
                <p className="text-[#8EA4BD] text-xs leading-relaxed mb-3">
                  {item.summary}
                </p>
                <p className="text-[#8EA4BD]/40 text-xs mt-auto">
                  Fuente: {item.source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
