"use client"

import { motion } from "framer-motion"
import { SafeImage } from "@/components/ui/safe-image"
import { ButtonLink } from "@/components/ui/button-link"
import { ArrowRight } from "lucide-react"

type Speaker = {
  name: string
  company: string
  initials: string
  bio: string
  image?: string
  imagePosition?: "center" | "top"
  tbd?: boolean
}

const aperturaBanner = {
  src: "/assets/conajomx/people/ronaldo-elias-aguila-forum.webp",
  alt: "Ronaldo Elías Águila en representación de CONAJOMX",
}

const apertura: Speaker = {
  name: "Ronaldo Elías Águila",
  company: "Presidente Fundador de CONAJOMX",
  initials: "REA",
  image: "/assets/conajomx/people/ronaldo-elias-aguila.webp",
  imagePosition: "top",
  bio: "Bienvenida al CONAJOMX Executive Forum y marco de la jornada: diálogo entre el liderazgo mexicano y las instituciones de Cambridge y Boston.",
}

const bookPresentation: Speaker = {
  name: "Dr. Jorge Reyes Negrete",
  company: "Derecho, Derechos Humanos y Cultura",
  initials: "JRN",
  bio: "Doctor en Derecho, investigador SNII y autor especializado en derechos humanos y filosofía del derecho.",
}

const clausura: Speaker = {
  name: "Carlos Hernández Ramírez",
  company: "Asesor Legislativo y Asuntos Internacionales, Senado de México",
  initials: "CHR",
  image: "/assets/conajomx/people/carlos-hernandez-ramirez.webp",
  bio: "Asesor legislativo y enlace internacional en el Senado de México, trabajando en vínculos institucionales y empresariales entre México y sus socios en el extranjero.",
}

type Panel = {
  eyebrow: string
  title: string
  dialogue?: boolean
  speakers: Speaker[]
}

const panels: Panel[] = [
  {
    eyebrow: "Panel I · Diálogo de Dos",
    title: "Migración desde el Sector Público: México y Estados Unidos",
    dialogue: true,
    speakers: [
      {
        name: "Carlos Hernández Ramírez",
        company: "Asesor Legislativo y Asuntos Internacionales, Senado de México",
        initials: "CHR",
        image: "/assets/conajomx/people/carlos-hernandez-ramirez.webp",
        bio: "Asesor legislativo y enlace internacional en el Senado de México, trabajando en vínculos institucionales y empresariales entre México y sus socios en el extranjero.",
      },
      {
        name: "Mateo Rull Garza",
        company: "Oficina de la Congresista Ayanna Pressley",
        initials: "MRG",
        bio: "Asesor y Gerente de Defensoría Ciudadana para el Distrito 7 de Massachusetts, enfocado en migración, acceso a alimentos, agricultura urbana, educación y justicia climática.",
      },
    ],
  },
  {
    eyebrow: "Panel II",
    title: "Economía Circular y Transición Energética",
    speakers: [
      {
        name: "Miguel Alejandro Vargas Cabrera",
        company: "SUNSUN Energy",
        initials: "MVC",
        image: "/assets/conajomx/people/miguel-alejandro-vargas-cabrera.webp",
        bio: "Empresario del sector energético, enfocado en soluciones de energía solar y sostenibilidad para el desarrollo regional.",
      },
      {
        name: "Eduardo Solano González",
        company: "NSM Ecosistemas Circulares",
        initials: "ESG",
        image: "/assets/conajomx/people/eduardo-solano-gonzalez.webp",
        bio: "Secretario de Economía de CNEM 2026, impulsor de la agenda de sostenibilidad y economía circular en foros como Latam Green.",
      },
    ],
  },
  {
    eyebrow: "Panel III",
    title: "Capital, Inversión y Gestión Patrimonial",
    speakers: [
      {
        name: "Daniel Olea Montes",
        company: "Mayorazgo Wealth Management",
        initials: "DOM",
        image: "/assets/conajomx/people/daniel-olea-montes.webp",
        bio: "Vicepresidente de CONAJOMX y especialista en gestión patrimonial y planeación financiera para familias empresarias.",
      },
      {
        name: "Diego García del Río",
        company: "Urbion Capital ETP",
        initials: "DGR",
        image: "/assets/conajomx/people/diego-garcia-del-rio.webp",
        bio: "Especialista en estructuración de capital e inversión, con enfoque en proyectos de alto rendimiento en mercados internacionales.",
      },
      {
        name: "Francisco Javier Porras Velázquez",
        company: "Grupo CYSE",
        initials: "FPV",
        image: "/assets/conajomx/people/javier-porras-velazquez.webp",
        bio: "Presidente del Consejo de Empresarios de CONAJOMX (CNEM), impulsando alianzas estratégicas entre el sector empresarial y las instituciones públicas de México.",
      },
    ],
  },
  {
    eyebrow: "Panel IV · Diálogo de Dos",
    title: "Infraestructura, Bienes Raíces y Desarrollo Urbano",
    dialogue: true,
    speakers: [
      {
        name: "Raúl Vargas Barrera",
        company: "Varcla Constructores",
        initials: "RVB",
        image: "/assets/conajomx/people/raul-vargas-barrera.webp",
        bio: "Empresario del sector de la construcción, impulsando proyectos de infraestructura y desarrollo regional al frente de Varcla Constructores.",
      },
      {
        name: "Jorge Handal Canavati",
        company: "Cien Grupo Inmobiliario",
        initials: "JHC",
        image: "/assets/conajomx/people/jorge-handal-canavati.webp",
        imagePosition: "top",
        bio: "Empresario del sector inmobiliario, con proyectos de desarrollo urbano y vivienda al frente de Cien Grupo Inmobiliario.",
      },
    ],
  },
  {
    eyebrow: "Panel V · Diálogo de Dos",
    title: "Emprendimiento y Empresa Familiar",
    dialogue: true,
    speakers: [
      {
        name: "Fernando Arista Reyes",
        company: "AR Seguridad",
        initials: "FAR",
        image: "/assets/conajomx/people/fernando-arista-reyes.webp",
        bio: "Empresario especializado en soluciones de seguridad corporativa y patrimonial para organizaciones e instituciones en México.",
      },
      {
        name: "Mirian Escalante Rejón",
        company: "Corporativo Escalante",
        initials: "MER",
        image: "/assets/conajomx/people/mirian-escalante-rejon.webp",
        imagePosition: "top",
        bio: "Vicepresidenta del Consejo de Empresarios de CONAJOMX (CNEM), al frente de Corporativo Escalante.",
      },
    ],
  },
]

function SpeakerCard({ speaker, index }: { speaker: Speaker; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="flex flex-col items-center text-center"
    >
      {speaker.image ? (
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#DCE8F2] shadow-[0_4px_20px_rgba(10,45,82,0.10)] mb-4">
          <SafeImage
            src={speaker.image}
            alt={`Foto de ${speaker.name}`}
            width={96}
            height={96}
            className={`object-cover w-full h-full ${speaker.imagePosition === "top" ? "object-top" : "object-center"}`}
          />
        </div>
      ) : (
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#071D3A] to-[#0A2D52] flex items-center justify-center mb-4 shadow-[0_4px_20px_rgba(10,45,82,0.10)]">
          <span className="text-[#1FE9E1] font-bold text-lg">{speaker.initials}</span>
        </div>
      )}
      <p className="text-[#071D3A] font-semibold text-sm leading-snug">{speaker.name}</p>
      <p className="text-[#A51C30] text-xs mt-1">{speaker.company}</p>
    </motion.div>
  )
}

function HostCard({ speaker, index }: { speaker: Speaker; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className={`flex gap-5 p-6 rounded-xl bg-white items-center ${
        speaker.tbd
          ? "border-2 border-dashed border-[#DCE8F2]"
          : "border border-[#DCE8F2] hover:border-[#A51C30]/30 hover:shadow-[0_4px_20px_rgba(10,45,82,0.08)] transition-all"
      }`}
    >
      {speaker.image ? (
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#DCE8F2] shrink-0">
          <SafeImage
            src={speaker.image}
            alt={`Foto de ${speaker.name}`}
            width={80}
            height={80}
            className={`object-cover w-full h-full ${speaker.imagePosition === "top" ? "object-top" : "object-center"}`}
          />
        </div>
      ) : (
        <div
          className={`w-20 h-20 rounded-full flex items-center justify-center shrink-0 ${
            speaker.tbd ? "bg-[#F5F1EA] border-2 border-dashed border-[#DCE8F2]" : "bg-gradient-to-br from-[#071D3A] to-[#0A2D52]"
          }`}
        >
          <span className={`font-bold text-lg ${speaker.tbd ? "text-[#8EA4BD]" : "text-[#1FE9E1]"}`}>
            {speaker.initials}
          </span>
        </div>
      )}
      <div className="min-w-0">
        <p className="text-[#071D3A] font-bold text-base leading-snug">{speaker.name}</p>
        <p className="text-[#A51C30] text-xs font-semibold mt-0.5 mb-2">{speaker.company}</p>
        <p className="text-[#526173] text-xs leading-relaxed">{speaker.bio}</p>
      </div>
    </motion.div>
  )
}

function ProfileCard({ speaker, index }: { speaker: Speaker; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="flex gap-4 p-5 rounded-xl bg-white border border-[#DCE8F2] hover:border-[#A51C30]/30 hover:shadow-[0_4px_20px_rgba(10,45,82,0.08)] transition-all"
    >
      {speaker.image ? (
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#DCE8F2] shrink-0">
          <SafeImage
            src={speaker.image}
            alt={`Foto de ${speaker.name}`}
            width={64}
            height={64}
            className={`object-cover w-full h-full ${speaker.imagePosition === "top" ? "object-top" : "object-center"}`}
          />
        </div>
      ) : (
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#071D3A] to-[#0A2D52] flex items-center justify-center shrink-0">
          <span className="text-[#1FE9E1] font-bold text-xs">{speaker.initials}</span>
        </div>
      )}
      <div className="min-w-0">
        <p className="text-[#071D3A] font-bold text-sm leading-snug">{speaker.name}</p>
        <p className="text-[#A51C30] text-xs font-semibold mt-0.5 mb-2">{speaker.company}</p>
        <p className="text-[#526173] text-xs leading-relaxed">{speaker.bio}</p>
      </div>
    </motion.div>
  )
}

function PanelBlock({ panel }: { panel: Panel }) {
  const gridCols =
    panel.speakers.length === 2
      ? "grid-cols-2"
      : panel.speakers.length === 3
        ? "grid-cols-2 sm:grid-cols-3"
        : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"

  return (
    <div className="grid lg:grid-cols-[280px_1fr] gap-10 items-start mb-20">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A51C30] mb-3">
          {panel.eyebrow}
        </p>
        <h2 className="text-2xl sm:text-3xl font-black text-[#071D3A] leading-tight">
          {panel.title}
        </h2>
        <div className="h-0.5 w-12 bg-[#A51C30] mt-4" />
      </motion.div>
      <div className={`grid ${gridCols} gap-8`}>
        {panel.speakers.map((speaker, i) => (
          <SpeakerCard key={speaker.name} speaker={speaker} index={i} />
        ))}
      </div>
    </div>
  )
}

export function ExecutiveForumSection() {
  const allSpeakers = panels.flatMap((panel) => panel.speakers)

  return (
    <section className="py-24 bg-[#F5F1EA] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Venue */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A51C30] mb-3">
            Sede
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-[#071D3A] leading-tight mb-2">
            Longfellow Hall, Harvard University
          </h2>
          <p className="text-[#526173] text-sm">
            4 de septiembre, 2026 · 8:00 AM · Cambridge, MA
          </p>
        </div>

        {/* Fase Inaugural */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A51C30] mb-3">
              Fase Inaugural
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-[#071D3A] leading-tight">
              Palabras de Bienvenida
            </h2>
          </div>
          <div className="rounded-2xl overflow-hidden border border-[#DCE8F2] shadow-[0_8px_32px_rgba(10,45,82,0.10)] aspect-[16/9] relative mb-6">
            <SafeImage
              src={aperturaBanner.src}
              alt={aperturaBanner.alt}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#071D3A]/85 to-transparent">
              <p className="text-white font-semibold text-sm">Ronaldo Elías Águila</p>
              <p className="text-white/70 text-xs">Presidente Fundador de CONAJOMX</p>
            </div>
          </div>
          <div className="max-w-2xl mx-auto">
            <HostCard speaker={apertura} index={0} />
          </div>
        </div>

        {panels.map((panel) => (
          <PanelBlock key={panel.title} panel={panel} />
        ))}

        {/* Presentación de Libro */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A51C30] mb-3">
              Presentación de Libro
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-[#071D3A] leading-tight">
              Derecho, Derechos Humanos y Cultura
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-row items-center gap-5 p-5 sm:p-6 rounded-xl bg-white border border-[#DCE8F2] shadow-[0_4px_20px_rgba(10,45,82,0.08)]"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#071D3A] to-[#0A2D52] flex items-center justify-center shrink-0">
              <span className="text-[#1FE9E1] font-bold text-sm sm:text-base">{bookPresentation.initials}</span>
            </div>
            <div className="min-w-0 text-left">
              <p className="text-[#071D3A] font-bold text-sm sm:text-base leading-snug">
                {bookPresentation.name}
                <span className="text-[#A51C30] font-semibold"> — {bookPresentation.company}</span>
              </p>
              <p className="text-[#526173] text-xs leading-relaxed mt-1">{bookPresentation.bio}</p>
            </div>
          </motion.div>
        </div>

        {/* Perfiles / Anuario */}
        <div className="max-w-5xl mx-auto pt-4 border-t border-[#DCE8F2]">
          <div className="text-center mb-10 pt-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A51C30] mb-3">
              Anuario Executive Forum
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-[#071D3A] leading-tight">
              Perfil de los ponentes
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {allSpeakers.map((speaker, i) => (
              <ProfileCard key={speaker.name} speaker={speaker} index={i} />
            ))}
          </div>
        </div>

        {/* Clausura Oficial */}
        <div className="max-w-5xl mx-auto pt-16">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A51C30] mb-3">
              Clausura Oficial
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-[#071D3A] leading-tight">
              Clausura del Foro
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <HostCard speaker={clausura} index={0} />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink
            href="/executive-forum/registro"
            className="bg-[#A51C30] text-white hover:bg-[#8a1728] font-semibold shadow-[0_4px_20px_rgba(165,28,48,0.25)] px-8"
          >
            Registrarme <ArrowRight className="ml-2 w-4 h-4" />
          </ButtonLink>
          <ButtonLink
            href="/contacto"
            variant="outline"
            className="border-[#DCE8F2] text-[#071D3A] hover:bg-white hover:border-[#071D3A]/30 font-semibold px-8"
          >
            Quiero más información
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
