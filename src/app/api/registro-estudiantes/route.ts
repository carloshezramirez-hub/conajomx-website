import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL

  if (!scriptUrl) {
    console.error("GOOGLE_SCRIPT_URL no está configurada")
    return NextResponse.json(
      { error: "El registro no está disponible en este momento." },
      { status: 503 }
    )
  }

  const data = await request.json()

  const nombre = String(data.nombre ?? "").trim()
  const email = String(data.email ?? "").trim()
  const universidad = String(data.universidad ?? "").trim()

  if (!nombre || !email || !universidad) {
    return NextResponse.json(
      { error: "Faltan campos requeridos." },
      { status: 400 }
    )
  }

  const payload = {
    fecha: new Date().toISOString(),
    nombre,
    email,
    telefono: String(data.telefono ?? "").trim(),
    universidad,
    carrera: String(data.carrera ?? "").trim(),
    semestre: String(data.semestre ?? "").trim(),
    ciudad: String(data.ciudad ?? "").trim(),
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
