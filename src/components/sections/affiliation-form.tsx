"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { CheckCircle, ChevronRight, ChevronLeft, Send } from "lucide-react"
import { siteConfig } from "@/config/site"

type FormData = {
  nombre: string
  email: string
  telefono: string
  ciudad: string
  pais: string
  empresa: string
  cargo: string
  sector: string
  web: string
  interes: string[]
  mensaje: string
  agenda: string
  privacidad: boolean
}

const INTERESTS = [
  "Afiliar empresa al CNEM",
  "Participar en agenda internacional",
  "Colaborar con Legisladores y Alcaldes",
  "Aliado institucional",
  "Prensa / medios",
  "Otro",
]

const STEPS = ["Contacto", "Perfil", "Interés", "Mensaje"]

const empty: FormData = {
  nombre: "", email: "", telefono: "", ciudad: "", pais: "México",
  empresa: "", cargo: "", sector: "", web: "",
  interes: [], mensaje: "", agenda: "", privacidad: false,
}

function Field({
  label, value, onChange, placeholder, type = "text",
}: {
  label: string; value: string; onChange: (v: string) => void
  placeholder: string; type?: string
}) {
  return (
    <div>
      <Label className="text-[#8EA4BD] text-sm mb-1.5 block">{label}</Label>
      <Input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="bg-white/[0.04] border-white/10 text-white placeholder:text-[#8EA4BD]/40 focus:border-[#1FE9E1]/40 focus-visible:ring-[#1FE9E1]/20"
      />
    </div>
  )
}

export function AffiliationForm() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState<FormData>(empty)
  const [sent, setSent] = useState(false)

  const update = <K extends keyof FormData>(field: K, value: FormData[K]) =>
    setData((prev) => ({ ...prev, [field]: value }))

  const toggleInterest = (i: string) => {
    setData((prev) => ({
      ...prev,
      interes: prev.interes.includes(i)
        ? prev.interes.filter((x) => x !== i)
        : [...prev.interes, i],
    }))
  }

  const step0Valid = data.nombre.trim() !== "" && data.email.trim() !== ""

  const handleSubmit = () => {
    if (!data.privacidad) {
      toast.error("Debes aceptar el aviso de privacidad para continuar.")
      return
    }
    const subject = encodeURIComponent(
      `Solicitud de afiliación CONAJOMX — ${data.nombre}`
    )
    const body = encodeURIComponent(
      [
        `Nombre: ${data.nombre}`,
        `Email: ${data.email}`,
        `Teléfono: ${data.telefono}`,
        `Ciudad: ${data.ciudad}, ${data.pais}`,
        "",
        `Empresa / Institución: ${data.empresa}`,
        `Cargo: ${data.cargo}`,
        `Sector: ${data.sector}`,
        `Web / Red social: ${data.web}`,
        "",
        `Tipo de interés: ${data.interes.join(", ")}`,
        "",
        "Colaboración buscada:",
        data.mensaje,
        "",
        "Evento / Iniciativa de interés:",
        data.agenda,
      ].join("\n")
    )
    window.open(
      `mailto:${siteConfig.email}?subject=${subject}&body=${body}`,
      "_blank"
    )
    setSent(true)
    toast.success("¡Gracias! Tu solicitud ha sido preparada para envío.")
  }

  if (sent) {
    return (
      <section id="afiliacion" className="py-24 bg-[#030B18]">
        <div className="container mx-auto px-4 max-w-lg text-center">
          <CheckCircle className="w-16 h-16 text-[#1FE9E1] mx-auto mb-6" />
          <h3 className="text-2xl font-black text-white mb-4">¡Solicitud preparada!</h3>
          <p className="text-[#8EA4BD] mb-6">
            Se abrió tu cliente de correo con los datos prellenados. Nuestro equipo dará
            seguimiento a tu solicitud en breve.
          </p>
          <Button
            onClick={() => { setSent(false); setStep(0); setData(empty) }}
            className="bg-[#1FE9E1] text-[#030B18] hover:bg-[#33CCDD] font-bold"
          >
            Nueva solicitud
          </Button>
        </div>
      </section>
    )
  }

  return (
    <section id="afiliacion" className="py-24 bg-[#030B18]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-[#1FE9E1] text-sm font-semibold uppercase tracking-widest mb-4">
            Afiliación
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
            Forma parte de una red de líderes en acción
          </h2>
          <p className="text-[#8EA4BD] text-lg leading-relaxed">
            Cuéntanos tu perfil y el tipo de colaboración que buscas. Nuestro equipo dará
            seguimiento a tu solicitud.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {/* Step indicators */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {STEPS.map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    i < step
                      ? "bg-[#1FE9E1] text-[#030B18]"
                      : i === step
                      ? "bg-[#1FE9E1]/15 border border-[#1FE9E1] text-[#1FE9E1]"
                      : "bg-white/5 border border-white/10 text-[#8EA4BD]"
                  }`}
                >
                  {i < step ? <CheckCircle className="w-4 h-4" /> : i + 1}
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    className={`h-px w-6 sm:w-10 transition-all ${
                      i < step ? "bg-[#1FE9E1]" : "bg-white/10"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Form card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
            <h3 className="text-white font-bold text-lg mb-6">{STEPS[step]}</h3>
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                {step === 0 && (
                  <>
                    <Field label="Nombre completo *" value={data.nombre} onChange={(v) => update("nombre", v)} placeholder="Tu nombre completo" />
                    <Field label="Email *" type="email" value={data.email} onChange={(v) => update("email", v)} placeholder="correo@ejemplo.com" />
                    <Field label="Teléfono / WhatsApp" type="tel" value={data.telefono} onChange={(v) => update("telefono", v)} placeholder="+52 55 0000 0000" />
                    <div className="grid grid-cols-2 gap-4">
                      <Field label="Ciudad" value={data.ciudad} onChange={(v) => update("ciudad", v)} placeholder="Ciudad de México" />
                      <Field label="País" value={data.pais} onChange={(v) => update("pais", v)} placeholder="México" />
                    </div>
                  </>
                )}

                {step === 1 && (
                  <>
                    <Field label="Empresa / Institución" value={data.empresa} onChange={(v) => update("empresa", v)} placeholder="Nombre de tu empresa u organización" />
                    <Field label="Cargo" value={data.cargo} onChange={(v) => update("cargo", v)} placeholder="Tu cargo o posición" />
                    <Field label="Sector" value={data.sector} onChange={(v) => update("sector", v)} placeholder="Sector o industria" />
                    <Field label="Sitio web o red social" value={data.web} onChange={(v) => update("web", v)} placeholder="https://..." />
                  </>
                )}

                {step === 2 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {INTERESTS.map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => toggleInterest(interest)}
                        className={`p-3 rounded-lg text-left text-sm transition-all border ${
                          data.interes.includes(interest)
                            ? "border-[#1FE9E1]/50 bg-[#1FE9E1]/10 text-[#1FE9E1]"
                            : "border-white/10 text-[#8EA4BD] hover:border-white/20 hover:text-white"
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                )}

                {step === 3 && (
                  <>
                    <div>
                      <Label className="text-[#8EA4BD] text-sm mb-1.5 block">
                        ¿Qué tipo de colaboración buscas?
                      </Label>
                      <Textarea
                        value={data.mensaje}
                        onChange={(e) => update("mensaje", e.target.value)}
                        placeholder="Describe brevemente qué tipo de colaboración o afiliación buscas..."
                        className="bg-white/[0.04] border-white/10 text-white placeholder:text-[#8EA4BD]/40 focus:border-[#1FE9E1]/40 min-h-[90px]"
                      />
                    </div>
                    <div>
                      <Label className="text-[#8EA4BD] text-sm mb-1.5 block">
                        ¿Qué evento o iniciativa te interesa?
                      </Label>
                      <Textarea
                        value={data.agenda}
                        onChange={(e) => update("agenda", e.target.value)}
                        placeholder="Menciona algún evento, foro o iniciativa de la agenda CONAJOMX..."
                        className="bg-white/[0.04] border-white/10 text-white placeholder:text-[#8EA4BD]/40 focus:border-[#1FE9E1]/40 min-h-[80px]"
                      />
                    </div>
                    <div className="flex items-start gap-3 pt-2">
                      <input
                        type="checkbox"
                        id="privacy"
                        checked={data.privacidad}
                        onChange={(e) => update("privacidad", e.target.checked)}
                        className="mt-0.5 accent-[#1FE9E1]"
                      />
                      <Label
                        htmlFor="privacy"
                        className="text-[#8EA4BD] text-xs leading-relaxed cursor-pointer"
                      >
                        Acepto el aviso de privacidad y autorizo a CONAJOMX a utilizar mis datos
                        para dar seguimiento a esta solicitud de afiliación.
                      </Label>
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-5">
            <Button
              variant="ghost"
              onClick={() => setStep((s) => s - 1)}
              disabled={step === 0}
              className="text-[#8EA4BD] hover:text-white disabled:opacity-30"
            >
              <ChevronLeft className="w-4 h-4 mr-1" /> Anterior
            </Button>
            {step < STEPS.length - 1 ? (
              <Button
                onClick={() => setStep((s) => s + 1)}
                disabled={step === 0 && !step0Valid}
                className="bg-[#1FE9E1] text-[#030B18] hover:bg-[#33CCDD] font-bold disabled:opacity-40"
              >
                Siguiente <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                className="bg-[#1FE9E1] text-[#030B18] hover:bg-[#33CCDD] font-bold shadow-[0_0_20px_rgba(31,233,225,0.3)]"
              >
                <Send className="w-4 h-4 mr-2" /> Enviar solicitud
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
