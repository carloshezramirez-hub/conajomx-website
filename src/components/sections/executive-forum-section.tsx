"use client"

import { motion } from "framer-motion"
import { SafeImage } from "@/components/ui/safe-image"
import { ButtonLink } from "@/components/ui/button-link"
import { ArrowRight } from "lucide-react"
import {
  getApertura,
  getBookPresentation,
  getClausura,
  getExecutiveForumUi,
  getPanels,
  localePath,
  type Locale,
  type Panel,
  type Speaker,
} from "@/data/executive-forum-content"

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
      className="flex gap-5 p-6 rounded-xl bg-white items-center border border-[#DCE8F2] hover:border-[#A51C30]/30 hover:shadow-[0_4px_20px_rgba(10,45,82,0.08)] transition-all"
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
        <div className="w-20 h-20 rounded-full flex items-center justify-center shrink-0 bg-gradient-to-br from-[#071D3A] to-[#0A2D52]">
          <span className="font-bold text-lg text-[#1FE9E1]">{speaker.initials}</span>
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

function PanelBlock({ panel }: { panel: Panel }) {
  const gridCols =
    panel.speakers.length === 2
      ? "grid-cols-2"
      : panel.speakers.length === 3
        ? "grid-cols-2 sm:grid-cols-3"
        : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"

  return (
    <div className="grid lg:grid-cols-[280px_1fr] gap-6 sm:gap-10 items-start mb-12 sm:mb-20">
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
      <div className={`grid ${gridCols} gap-6 sm:gap-8`}>
        {panel.speakers.map((speaker, i) => (
          <SpeakerCard key={speaker.name} speaker={speaker} index={i} />
        ))}
      </div>
    </div>
  )
}

export function ExecutiveForumSection({ locale }: { locale: Locale }) {
  const t = getExecutiveForumUi(locale)
  const apertura = getApertura(locale)
  const bookPresentation = getBookPresentation(locale)
  const clausura = getClausura(locale)
  const panels = getPanels(locale)

  return (
    <section className="py-14 sm:py-24 bg-[#F5F1EA] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Venue */}
        <div className="max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="flex items-center justify-center gap-5 p-6 sm:p-8 rounded-2xl bg-white border border-[#DCE8F2] shadow-[0_8px_32px_rgba(10,45,82,0.08)]">
            <div className="w-14 h-16 sm:w-16 sm:h-20 shrink-0">
              <SafeImage
                src="/assets/conajomx/logos/harvard-hgse-shield.webp"
                alt="Escudo de Harvard Graduate School of Education"
                width={64}
                height={80}
                objectFit="contain"
                className="w-full h-full"
              />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A51C30] mb-2">
                {t.sedeEyebrow}
              </p>
              <h2 className="text-xl sm:text-2xl font-black text-[#071D3A] leading-tight mb-1">
                {t.sedeTitle}
              </h2>
              <p className="text-[#A51C30] text-sm font-semibold mb-1">{t.sedeSubtitle}</p>
              <p className="text-[#526173] text-sm">{t.sedeDate}</p>
            </div>
          </div>
        </div>

        {/* Fase Inaugural */}
        <div className="max-w-5xl mx-auto mb-12 sm:mb-20">
          <div className="text-center mb-6 sm:mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A51C30] mb-3">
              {t.aperturaEyebrow}
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-[#071D3A] leading-tight">
              {t.aperturaTitle}
            </h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-6">
            {apertura.map((speaker, i) => (
              <HostCard key={speaker.name} speaker={speaker} index={i} />
            ))}
          </div>
        </div>

        {panels.map((panel) => (
          <PanelBlock key={panel.title} panel={panel} />
        ))}

        {/* Presentación de Libro */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-20">
          <div className="text-center mb-6 sm:mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A51C30] mb-3">
              {t.bookEyebrow}
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-[#071D3A] leading-tight">
              {t.bookTitle}
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-row items-center gap-5 p-5 sm:p-6 rounded-xl bg-white border border-[#DCE8F2] shadow-[0_4px_20px_rgba(10,45,82,0.08)]"
          >
            {bookPresentation.image ? (
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-[#DCE8F2] shrink-0">
                <SafeImage
                  src={bookPresentation.image}
                  alt={`Foto de ${bookPresentation.name}`}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full object-center"
                />
              </div>
            ) : (
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#071D3A] to-[#0A2D52] flex items-center justify-center shrink-0">
                <span className="text-[#1FE9E1] font-bold text-sm sm:text-base">{bookPresentation.initials}</span>
              </div>
            )}
            <div className="min-w-0 text-left">
              <p className="text-[#071D3A] font-bold text-sm sm:text-base leading-snug">
                {bookPresentation.name}
                <span className="text-[#A51C30] font-semibold"> — {bookPresentation.company}</span>
              </p>
              <p className="text-[#526173] text-xs leading-relaxed mt-1">{bookPresentation.bio}</p>
            </div>
          </motion.div>
        </div>

        {/* Clausura Oficial */}
        <div className="max-w-5xl mx-auto pt-8 sm:pt-16 border-t border-[#DCE8F2]">
          <div className="text-center mb-6 sm:mb-10 pt-8 sm:pt-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A51C30] mb-3">
              {t.clausuraEyebrow}
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-[#071D3A] leading-tight">
              {t.clausuraTitle}
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <HostCard speaker={clausura} index={0} />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-20 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink
            href={localePath(locale, "/executive-forum/registro")}
            className="bg-[#A51C30] text-white hover:bg-[#8a1728] font-semibold shadow-[0_4px_20px_rgba(165,28,48,0.25)] px-8"
          >
            {t.ctaRegister} <ArrowRight className="ml-2 w-4 h-4" />
          </ButtonLink>
          <ButtonLink
            href="/contacto"
            variant="outline"
            className="border-[#DCE8F2] text-[#071D3A] hover:bg-white hover:border-[#071D3A]/30 font-semibold px-8"
          >
            {t.ctaMoreInfo}
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
