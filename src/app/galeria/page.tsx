import type { Metadata } from "next"
import { GallerySection } from "@/components/sections/gallery-section"
import { ContactSection } from "@/components/sections/contact-section"

export const metadata: Metadata = {
  title: "Galería Institucional",
  description:
    "Galería de fotos de CONAJOMX: FITUR 2026 en Madrid, Encuentro Nacional de Legisladores y Alcaldes en el Senado, Medalla al Mérito Empresarial, Secretaría de Turismo y eventos institucionales.",
  openGraph: {
    title: "Galería Institucional | CONAJOMX",
    description:
      "Fotos oficiales de CONAJOMX: FITUR 2026, Encuentro Nacional en el Senado, Medalla al Mérito Empresarial y más.",
  },
}

const imageGallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Galería Institucional CONAJOMX",
  description:
    "Fotos institucionales del Consejo Nacional de Jóvenes Pro México (CONAJOMX): FITUR 2026 en Madrid, Encuentro Nacional de Legisladores y Alcaldes en el Senado de la República, Medalla al Mérito Empresarial CNEM y eventos de colaboración con la Secretaría de Turismo de México.",
  url: "https://conajomx.org/galeria",
  author: {
    "@type": "Organization",
    name: "CONAJOMX",
    url: "https://conajomx.org",
  },
}

export default function GaleriaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }}
      />

      <div className="pt-16 bg-[#030B18]">
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-[#1FE9E1] text-sm font-semibold uppercase tracking-widest mb-4">
            Galería Institucional
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
            CONAJOMX en imágenes
          </h1>
          <p className="text-[#8EA4BD] text-xl max-w-2xl mx-auto leading-relaxed">
            Registro fotográfico de nuestra presencia en foros internacionales, encuentros
            institucionales, eventos empresariales y actividades en México y España.
          </p>
        </div>
      </div>

      <GallerySection />
      <ContactSection />
    </>
  )
}
