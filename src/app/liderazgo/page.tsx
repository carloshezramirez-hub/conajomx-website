import type { Metadata } from "next"
import { LeadershipSection } from "@/components/sections/leadership-section"
import { CNEMSection } from "@/components/sections/cnem-section"
import { ContactSection } from "@/components/sections/contact-section"

export const metadata: Metadata = {
  title: "Presidencia y Liderazgo",
  description:
    "Conoce la presidencia nacional y la mesa directiva de CONAJOMX: los líderes que articulan políticas, empresas e instituciones para México.",
}

export default function LiderazgoPage() {
  return (
    <>
      <div className="pt-16 bg-[#030B18]">
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-[#1FE9E1] text-sm font-semibold uppercase tracking-widest mb-4">
            Organización
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
            Presidencia y Liderazgo
          </h1>
          <p className="text-[#8EA4BD] text-xl max-w-2xl mx-auto leading-relaxed">
            Una mesa directiva plural comprometida con el desarrollo de México, la vinculación
            empresarial y la representación institucional a nivel nacional e internacional.
          </p>
        </div>
      </div>
      <LeadershipSection />
      <CNEMSection />
      <ContactSection />
    </>
  )
}
