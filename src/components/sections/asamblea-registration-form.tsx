"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { CheckCircle, Loader2, Send } from "lucide-react"

type FormData = {
  nombre: string
  cargo: string
  institucion: string
  email: string
  telefono: string
  estado: string
  mensaje: string
  privacidad: boolean
}

const empty: FormData = {
  nombre: "",
  cargo: "",
  institucion: "",
  email: "",
  telefono: "",
  estado: "",
  mensaje: "",
  privacidad: false,
}

const cargoOptions = [
  "Legislador/a",
  "Alcalde / Presidente Municipal",
  "Síndico/a",
  "Regidor/a",
  "Empresario/a",
  "Otro",
]

function Field({
  label, value, onChange, placeholder, type = "text", required = false,
}: {
  label: string; value: string; onChange: (v: string) => void
  placeholder: string; type?: string; required?: boolean
}) {
  return (
    <div>
      <Label className="text-[#526173] text-sm mb-1.5 block">
        {label} {required && <span className="text-[#C9A227]">*</span>}
      </Label>
      <Input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="bg-white border-[#DCE8F2] text-[#071D3A] placeholder:text-[#526173]/50 focus:border-[#C9A227]/60 focus-visible:ring-[#C9A227]/20"
      />
    </div>
  )
}

export function AsambleaRegistrationForm() {
  const [data, setData] = useState<FormData>(empty)
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)

  const update = <K extends keyof FormData>(field: K, value: FormData[K]) =>
    setData((prev) => ({ ...prev, [field]: value }))

  const valid =
    data.nombre.trim() !== "" &&
    data.email.trim() !== "" &&
    data.cargo.trim() !== ""

  const handleSubmit = async () => {
    if (!valid) {
      toast.error("Completa nombre, correo y cargo para continuar.")
      return
    }
    if (!data.privacidad) {
      toast.error("Debes aceptar el aviso de privacidad para continuar.")
      return
    }
    setSubmitting(true)
    try {
      const res = await fetch("/api/registro-asamblea", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error("request failed")
      setSent(true)
      toast.success("¡Registro recibido! Nos pondremos en contacto contigo.")
    } catch {
      toast.error("No pudimos enviar tu registro. Intenta de nuevo en unos minutos.")
    } finally {
      setSubmitting(false)
    }
  }

  if (sent) {
    return (
      <div className="max-w-lg mx-auto text-center py-12">
        <CheckCircle className="w-16 h-16 text-[#C9A227] mx-auto mb-6" />
        <h3 className="text-2xl font-black text-[#071D3A] mb-4">¡Registro recibido!</h3>
        <p className="text-[#526173] mb-6">
          Gracias por registrarte a la IX Asamblea General de CONAJOMX. Nuestro equipo te
          contactará con los detalles de la sede y el pago de la cuota de recuperación.
        </p>
        <Button
          onClick={() => { setSent(false); setData(empty) }}
          variant="outline"
          className="border-[#DCE8F2] text-[#071D3A] hover:bg-[#F5F1EA]"
        >
          Registrar a alguien más
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-[#DCE8F2] shadow-[0_8px_32px_rgba(10,45,82,0.08)] p-6 sm:p-8">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field
          label="Nombre completo"
          required
          value={data.nombre}
          onChange={(v) => update("nombre", v)}
          placeholder="Tu nombre completo"
        />
        <div>
          <Label className="text-[#526173] text-sm mb-1.5 block">
            Cargo <span className="text-[#C9A227]">*</span>
          </Label>
          <select
            value={data.cargo}
            onChange={(e) => update("cargo", e.target.value)}
            className="flex h-9 w-full rounded-md border border-[#DCE8F2] bg-white px-3 py-1 text-sm text-[#071D3A] shadow-xs outline-none focus:border-[#C9A227]/60 focus-visible:ring-2 focus-visible:ring-[#C9A227]/20"
          >
            <option value="">Selecciona tu cargo</option>
            {cargoOptions.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <Field
          label="Correo electrónico"
          required
          type="email"
          value={data.email}
          onChange={(v) => update("email", v)}
          placeholder="tucorreo@ejemplo.com"
        />
        <Field
          label="Teléfono / WhatsApp"
          value={data.telefono}
          onChange={(v) => update("telefono", v)}
          placeholder="+52 55 0000 0000"
        />
        <Field
          label="Municipio / Empresa / Institución"
          value={data.institucion}
          onChange={(v) => update("institucion", v)}
          placeholder="Ej. H. Ayuntamiento de..., Grupo..."
        />
        <Field
          label="Estado"
          value={data.estado}
          onChange={(v) => update("estado", v)}
          placeholder="Estado donde resides"
        />
        <div className="sm:col-span-2">
          <Label className="text-[#526173] text-sm mb-1.5 block">
            Comentarios (opcional)
          </Label>
          <Textarea
            value={data.mensaje}
            onChange={(e) => update("mensaje", e.target.value)}
            placeholder="¿Algo que quieras contarnos antes de la Asamblea?"
            className="bg-white border-[#DCE8F2] text-[#071D3A] placeholder:text-[#526173]/50 focus:border-[#C9A227]/60 min-h-[90px]"
          />
        </div>
      </div>

      <div className="flex items-start gap-3 pt-5">
        <input
          type="checkbox"
          id="privacy-asamblea"
          checked={data.privacidad}
          onChange={(e) => update("privacidad", e.target.checked)}
          className="mt-0.5 accent-[#C9A227]"
        />
        <Label
          htmlFor="privacy-asamblea"
          className="text-[#526173] text-xs leading-relaxed cursor-pointer"
        >
          Acepto el aviso de privacidad y autorizo a CONAJOMX a utilizar mis datos para dar
          seguimiento a este registro.
        </Label>
      </div>

      <Button
        onClick={handleSubmit}
        disabled={submitting}
        className="w-full mt-6 bg-gradient-to-r from-[#E6C766] to-[#C9A227] text-[#050B16] hover:brightness-110 font-semibold shadow-[0_4px_20px_rgba(7,29,58,0.20)]"
      >
        {submitting ? (
          <>
            <Loader2 className="mr-2 w-4 h-4 animate-spin" /> Enviando...
          </>
        ) : (
          <>
            Enviar registro <Send className="ml-2 w-4 h-4" />
          </>
        )}
      </Button>
    </div>
  )
}
