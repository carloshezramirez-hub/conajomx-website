import type { Metadata } from "next"
import { StudentRegistrationForm } from "@/components/sections/student-registration-form"
import { LanguageSwitcher } from "@/components/ui/language-switcher"
import { getRegistroContent, type Locale } from "@/data/executive-forum-content"

export const metadata: Metadata = {
  title: "Registro de Estudiantes — CONAJOMX Executive Forum",
  description:
    "Regístrate como estudiante interesado en participar en el CONAJOMX Executive Forum: Cambridge & Boston Leadership Experience, Septiembre 2026.",
}

export function RegistroPageContent({ locale }: { locale: Locale }) {
  const t = getRegistroContent(locale)

  return (
    <>
      <div className="pt-16 bg-[#071630] relative overflow-hidden border-b-4 border-[#A51C30]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(165,28,48,0.10),transparent_60%)]" />
        <div className="container mx-auto px-4 py-16 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <LanguageSwitcher
              locale={locale}
              esHref="/executive-forum/registro"
              enHref="/en/executive-forum/registro"
            />
          </div>

          <p className="text-[#1FE9E1] text-sm font-semibold uppercase tracking-widest mb-4">
            {t.kicker}
          </p>
          <h1 className="text-3xl sm:text-5xl font-black text-white mb-4 leading-tight">
            {t.title}
          </h1>
          <p className="text-[#8EA4BD] text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            {t.description}
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="px-4 py-2 rounded-full border border-[#A51C30]/50 text-white/90 text-sm">
              {t.venueBadge}
            </span>
            <span className="px-4 py-2 rounded-full border border-[#A51C30]/50 text-white/90 text-sm">
              {t.dateBadge}
            </span>
          </div>
        </div>
      </div>

      <section className="py-16 bg-[#F5F1EA]">
        <div className="container mx-auto px-4">
          <StudentRegistrationForm locale={locale} />
        </div>
      </section>
    </>
  )
}

export default function RegistroEstudiantesPage() {
  return <RegistroPageContent locale="es" />
}
