import type { Metadata } from "next"
import { StudentRegistrationForm } from "@/components/sections/student-registration-form"

export const metadata: Metadata = {
  title: "Registro de Estudiantes — CONAJOMX Executive Forum",
  description:
    "Regístrate como estudiante interesado en participar en el CONAJOMX Executive Forum: Cambridge & Boston Leadership Experience, Septiembre 2026.",
}

export default function RegistroEstudiantesPage() {
  return (
    <>
      <div className="pt-16 bg-[#071630] relative overflow-hidden border-b-4 border-[#A51C30]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(165,28,48,0.10),transparent_60%)]" />
        <div className="container mx-auto px-4 py-16 text-center relative z-10">
          <p className="text-[#1FE9E1] text-sm font-semibold uppercase tracking-widest mb-4">
            CONAJOMX Executive Forum
          </p>
          <h1 className="text-3xl sm:text-5xl font-black text-white mb-4 leading-tight">
            Registro de Estudiantes
          </h1>
          <p className="text-[#8EA4BD] text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            ¿Eres estudiante y te interesa participar en el Executive Forum? Cambridge &amp;
            Boston Leadership Experience, Septiembre 2026. Déjanos tus datos y te contactaremos
            con los siguientes pasos.
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

      <section className="py-16 bg-[#F5F1EA]">
        <div className="container mx-auto px-4">
          <StudentRegistrationForm />
        </div>
      </section>
    </>
  )
}
