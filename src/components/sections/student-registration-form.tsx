"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { CheckCircle, Loader2, Send } from "lucide-react"
import { getFormContent, type Locale } from "@/data/executive-forum-content"

type FormData = {
  nombre: string
  email: string
  telefono: string
  universidad: string
  carrera: string
  semestre: string
  ciudad: string
  mensaje: string
  privacidad: boolean
}

const empty: FormData = {
  nombre: "",
  email: "",
  telefono: "",
  universidad: "",
  carrera: "",
  semestre: "",
  ciudad: "",
  mensaje: "",
  privacidad: false,
}

function Field({
  label, value, onChange, placeholder, type = "text", required = false,
}: {
  label: string; value: string; onChange: (v: string) => void
  placeholder: string; type?: string; required?: boolean
}) {
  return (
    <div>
      <Label className="text-[#526173] text-sm mb-1.5 block">
        {label} {required && <span className="text-[#A51C30]">*</span>}
      </Label>
      <Input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="bg-white border-[#DCE8F2] text-[#071D3A] placeholder:text-[#526173]/50 focus:border-[#A51C30]/60 focus-visible:ring-[#A51C30]/20"
      />
    </div>
  )
}

export function StudentRegistrationForm({ locale = "es" }: { locale?: Locale }) {
  const t = getFormContent(locale)
  const [data, setData] = useState<FormData>(empty)
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)

  const update = <K extends keyof FormData>(field: K, value: FormData[K]) =>
    setData((prev) => ({ ...prev, [field]: value }))

  const valid =
    data.nombre.trim() !== "" &&
    data.email.trim() !== "" &&
    data.universidad.trim() !== ""

  const handleSubmit = async () => {
    if (!valid) {
      toast.error(t.errorRequired)
      return
    }
    if (!data.privacidad) {
      toast.error(t.errorPrivacy)
      return
    }
    setSubmitting(true)
    try {
      const res = await fetch("/api/registro-estudiantes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error("request failed")
      setSent(true)
      toast.success(t.successToast)
    } catch {
      toast.error(t.errorSubmit)
    } finally {
      setSubmitting(false)
    }
  }

  if (sent) {
    return (
      <div className="max-w-lg mx-auto text-center py-12">
        <CheckCircle className="w-16 h-16 text-[#A51C30] mx-auto mb-6" />
        <h3 className="text-2xl font-black text-[#071D3A] mb-4">{t.successTitle}</h3>
        <p className="text-[#526173] mb-6">{t.successBody}</p>
        <Button
          onClick={() => { setSent(false); setData(empty) }}
          variant="outline"
          className="border-[#DCE8F2] text-[#071D3A] hover:bg-[#F5F1EA]"
        >
          {t.registerAnother}
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-[#DCE8F2] shadow-[0_8px_32px_rgba(10,45,82,0.08)] p-6 sm:p-8">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field
          label={t.nombre}
          required
          value={data.nombre}
          onChange={(v) => update("nombre", v)}
          placeholder={t.nombrePlaceholder}
        />
        <Field
          label={t.email}
          required
          type="email"
          value={data.email}
          onChange={(v) => update("email", v)}
          placeholder={t.emailPlaceholder}
        />
        <Field
          label={t.telefono}
          value={data.telefono}
          onChange={(v) => update("telefono", v)}
          placeholder={t.telefonoPlaceholder}
        />
        <Field
          label={t.universidad}
          required
          value={data.universidad}
          onChange={(v) => update("universidad", v)}
          placeholder={t.universidadPlaceholder}
        />
        <Field
          label={t.carrera}
          value={data.carrera}
          onChange={(v) => update("carrera", v)}
          placeholder={t.carreraPlaceholder}
        />
        <Field
          label={t.semestre}
          value={data.semestre}
          onChange={(v) => update("semestre", v)}
          placeholder={t.semestrePlaceholder}
        />
        <div className="sm:col-span-2">
          <Field
            label={t.ciudad}
            value={data.ciudad}
            onChange={(v) => update("ciudad", v)}
            placeholder={t.ciudadPlaceholder}
          />
        </div>
        <div className="sm:col-span-2">
          <Label className="text-[#526173] text-sm mb-1.5 block">
            {t.mensaje}
          </Label>
          <Textarea
            value={data.mensaje}
            onChange={(e) => update("mensaje", e.target.value)}
            placeholder={t.mensajePlaceholder}
            className="bg-white border-[#DCE8F2] text-[#071D3A] placeholder:text-[#526173]/50 focus:border-[#A51C30]/60 min-h-[90px]"
          />
        </div>
      </div>

      <div className="flex items-start gap-3 pt-5">
        <input
          type="checkbox"
          id="privacy-estudiantes"
          checked={data.privacidad}
          onChange={(e) => update("privacidad", e.target.checked)}
          className="mt-0.5 accent-[#A51C30]"
        />
        <Label
          htmlFor="privacy-estudiantes"
          className="text-[#526173] text-xs leading-relaxed cursor-pointer"
        >
          {t.privacidad}
        </Label>
      </div>

      <Button
        onClick={handleSubmit}
        disabled={submitting}
        className="w-full mt-6 bg-[#071D3A] text-white hover:bg-[#0A2D52] font-semibold shadow-[0_4px_20px_rgba(7,29,58,0.20)]"
      >
        {submitting ? (
          <>
            <Loader2 className="mr-2 w-4 h-4 animate-spin" /> {t.submitting}
          </>
        ) : (
          <>
            {t.submit} <Send className="ml-2 w-4 h-4" />
          </>
        )}
      </Button>
    </div>
  )
}
