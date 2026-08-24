import type { Metadata } from "next"
import { RegistroPageContent } from "@/app/executive-forum/registro/page"

export const metadata: Metadata = {
  title: "Student Registration — CONAJOMX Executive Forum",
  description:
    "Register as a student interested in taking part in the CONAJOMX Executive Forum: Cambridge & Boston Leadership Experience, September 2026.",
}

export default function RegistroEstudiantesEnPage() {
  return <RegistroPageContent locale="en" />
}
