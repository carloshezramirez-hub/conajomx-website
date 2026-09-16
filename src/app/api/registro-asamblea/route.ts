import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL_ASAMBLEA || process.env.GOOGLE_SCRIPT_URL

  if (!scriptUrl) {
    console.error("GOOGLE_SCRIPT_URL_ASAMBLEA / GOOGLE_SCRIPT_URL no está configurada")
    return NextResponse.json(
      { error: "El registro no está disponible en este momento." },
      { status: 503 }
    )
  }

  const data = await request.json()

  const nombre = String(data.nombre ?? "").trim()
  const email = String(data.email ?? "").trim()
  const cargo = String(data.cargo ?? "").trim()

  if (!nombre || !email || !cargo) {
    return NextResponse.json(
      { error: "Faltan campos requeridos." },
      { status: 400 }
    )
  }

  const payload = {
    fecha: new Date().toISOString(),
    evento: "IX Asamblea General CONAJOMX",
    nombre,
    email,
    cargo,
    telefono: String(data.telefono ?? "").trim(),
    institucion: String(data.institucion ?? "").trim(),
    estado: String(data.estado ?? "").trim(),
    mensaje: String(data.mensaje ?? "").trim(),
  }

  const res = await fetch(scriptUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    console.error("Error al escribir en Google Sheets", await res.text())
    return NextResponse.json(
      { error: "No se pudo guardar el registro." },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}
