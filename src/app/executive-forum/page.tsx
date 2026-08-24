import type { Metadata } from "next"
import Image from "next/image"
import { ExecutiveForumSection } from "@/components/sections/executive-forum-section"
import { ContactSection } from "@/components/sections/contact-section"
import { ButtonLink } from "@/components/ui/button-link"
import { LanguageSwitcher } from "@/components/ui/language-switcher"
import { ArrowRight } from "lucide-react"
import { getExecutiveForumUi, localePath, type Locale } from "@/data/executive-forum-content"

export const metadata: Metadata = {
  title: "CONAJOMX Executive Forum — Cambridge & Boston Leadership Experience",
  description:
    "CONAJOMX Executive Forum: Cambridge & Boston Leadership Experience. Diálogo ejecutivo para un futuro sostenible y competitivo con líderes empresariales de México.",
}

export function ExecutiveForumPageContent({ locale }: { locale: Locale }) {
  const t = getExecutiveForumUi(locale)

  return (
    <>
      <div className="pt-16 bg-[#071630] relative overflow-hidden border-b-4 border-[#A51C30]">
        <Image
          src="/assets/conajomx/campus/harvard-longfellow-campus.webp"
          alt="Campus de Harvard, sede del CONAJOMX Executive Forum"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071630]/85 via-[#071630]/80 to-[#071630]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(165,28,48,0.18),transparent_60%)]" />
        <div className="container mx-auto px-4 py-12 sm:py-20 text-center relative z-10">
          <div className="flex justify-center mb-4 sm:mb-6">
            <LanguageSwitcher
              locale={locale}
              esHref="/executive-forum"
              enHref="/en/executive-forum"
            />
          </div>

          <p className="text-[#1FE9E1] text-sm font-semibold uppercase tracking-widest mb-3 sm:mb-4">
            {t.heroEyebrow}
          </p>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight">
            {t.heroTitle}
          </h1>

          <div className="h-px w-24 bg-[#A51C30] mx-auto mb-6 sm:mb-8" />

          <p className="text-white text-xl sm:text-2xl font-semibold max-w-2xl mx-auto leading-snug mb-6 sm:mb-10">
            {t.heroIntro}
          </p>

          <ButtonLink
            href={localePath(locale, "/executive-forum/registro")}
            className="bg-[#A51C30] text-white hover:bg-[#8a1728] font-semibold shadow-[0_4px_20px_rgba(165,28,48,0.25)] px-8"
          >
            {t.ctaRegister} <ArrowRight className="ml-2 w-4 h-4" />
          </ButtonLink>
        </div>
      </div>

      <ExecutiveForumSection locale={locale} />

      <div className="bg-[#071630] py-8 sm:py-14 border-t-4 border-[#A51C30]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white font-bold text-lg sm:text-xl tracking-[0.2em] uppercase">
            {t.bannerTitle}
          </p>
          <p className="text-[#1FE9E1] italic text-sm sm:text-base mt-3">
            {t.bannerSubtitle}
          </p>
        </div>
      </div>

      <ContactSection />
    </>
  )
}

export default function ExecutiveForumPage() {
  return <ExecutiveForumPageContent locale="es" />
}
