import type { Metadata } from "next"
import { ExecutiveForumSection } from "@/components/sections/executive-forum-section"
import { ContactSection } from "@/components/sections/contact-section"

export const metadata: Metadata = {
  title: "CONAJOMX Executive Forum — Cambridge & Boston Leadership Experience",
  description:
    "CONAJOMX Executive Forum: Cambridge & Boston Leadership Experience. Diálogo ejecutivo para un futuro sostenible y competitivo con líderes empresariales de México.",
}

export default function ExecutiveForumPage() {
  return (
    <>
      <div className="pt-16 bg-[#071630] relative overflow-hidden border-b-4 border-[#A51C30]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(165,28,48,0.10),transparent_60%)]" />
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <p className="text-[#1FE9E1] text-sm font-semibold uppercase tracking-widest mb-4">
            CONAJOMX
          </p>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-4 leading-tight">
            Executive Forum
          </h1>
          <p className="text-[#8EA4BD] text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Cambridge &amp; Boston Leadership Experience
          </p>

          <div className="h-px w-24 bg-[#A51C30] mx-auto mb-10" />

          <p className="text-[#8EA4BD] text-base max-w-xl mx-auto leading-relaxed mb-8">
            Un encuentro ejecutivo en el corazón académico de Cambridge, Massachusetts,
            donde líderes empresariales de México dialogan sobre inversión, estrategia
            y liderazgo con visión global.
          </p>

          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="px-4 py-2 rounded-full border border-[#A51C30]/50 text-white/90 text-sm">
              Cambridge, Massachusetts
            </span>
            <span className="px-4 py-2 rounded-full border border-[#A51C30]/50 text-white/90 text-sm">
              Septiembre 2026
            </span>
          </div>
        </div>
      </div>

      <ExecutiveForumSection />

      <div className="bg-[#071630] py-14 border-t-4 border-[#A51C30]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white font-bold text-lg sm:text-xl tracking-[0.2em] uppercase">
            Liderazgo · Visión · Impacto
          </p>
          <p className="text-[#1FE9E1] italic text-sm sm:text-base mt-3">
            Diálogo ejecutivo para un futuro sostenible y competitivo
          </p>
        </div>
      </div>

      <ContactSection />
    </>
  )
}
