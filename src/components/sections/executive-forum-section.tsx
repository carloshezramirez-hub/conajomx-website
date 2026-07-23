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
}

const panelI: Speaker[] = [
  {
    name: "Francisco Javier Porras Velázquez",
    company: "Grupo CYSE",
    initials: "FPV",
    image: "/assets/conajomx/people/javier-porras-velazquez.webp",
    bio: "Presidente del Consejo de Empresarios de CONAJOMX (CNEM), impulsando alianzas estratégicas entre el sector empresarial y las instituciones públicas de México.",
  },
  {
    name: "Fernando Arista Reyes",
    company: "AR Seguridad",
    initials: "FAR",
    image: "/assets/conajomx/people/fernando-arista-reyes.webp",
    bio: "Empresario especializado en soluciones de seguridad corporativa y patrimonial para organizaciones e instituciones en México.",
  },
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
]

const panelII: Speaker[] = [
  {
    name: "Mirian Escalante Rejón",
    company: "Corporativo Escalante",
    initials: "MER",
    image: "/assets/conajomx/people/mirian-escalante-rejon.webp",
    imagePosition: "top",
    bio: "Vicepresidenta del Consejo de Empresarios de CONAJOMX (CNEM), al frente de Corporativo Escalante.",
  },
  {
    name: "Raúl Vargas Barrera",
    company: "Varcla Constructores",
    initials: "RVB",
    image: "/assets/conajomx/people/raul-vargas-barrera.webp",
    bio: "Empresario del sector de la construcción, impulsando proyectos de infraestructura y desarrollo regional al frente de Varcla Constructores.",
  },
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
  {
    name: "Jorge Handal Canavati",
    company: "Cien Grupo Inmobiliario",
    initials: "JHC",
    image: "/assets/conajomx/people/jorge-handal-canavati.webp",
    imagePosition: "top",
    bio: "Empresario del sector inmobiliario, con proyectos de desarrollo urbano y vivienda al frente de Cien Grupo Inmobiliario.",
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

export function ExecutiveForumSection() {
  const allSpeakers = [...panelI, ...panelII]

  return (
    <section className="py-24 bg-[#F5F1EA] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Panel I */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-10 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A51C30] mb-3">
              Panel I
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-[#071D3A] leading-tight">
              Inversión, Estrategia e Innovación
            </h2>
            <div className="h-0.5 w-12 bg-[#A51C30] mt-4" />
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {panelI.map((speaker, i) => (
              <SpeakerCard key={speaker.name} speaker={speaker} index={i} />
            ))}
          </div>
        </div>

        {/* Panel II */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-10 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A51C30] mb-3">
              Panel II
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-[#071D3A] leading-tight">
              Liderazgo y Desarrollo Regional
            </h2>
            <div className="h-0.5 w-12 bg-[#A51C30] mt-4" />
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {panelII.map((speaker, i) => (
              <SpeakerCard key={speaker.name} speaker={speaker} index={i} />
            ))}
          </div>
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

        {/* CTA */}
        <div className="text-center mt-20">
          <ButtonLink
            href="/contacto"
            className="bg-[#071D3A] text-white hover:bg-[#0A2D52] font-semibold shadow-[0_4px_20px_rgba(7,29,58,0.20)] px-8"
          >
            Quiero más información{" "}
            <ArrowRight className="ml-2 w-4 h-4" />
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
