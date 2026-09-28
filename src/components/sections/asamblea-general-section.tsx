"use client"

import { motion } from "framer-motion"
import { SafeImage } from "@/components/ui/safe-image"
import { Badge } from "@/components/ui/badge"
import { ButtonLink } from "@/components/ui/button-link"
import { AnchorButton } from "@/components/ui/button-link"
import { ArrowRight, Mail, BadgeCheck } from "lucide-react"
import { fraunces } from "@/lib/fonts"
import { siteConfig } from "@/config/site"

const badgeColors = [
  "border-[#C9A227]/40 text-[#E8CE8A] bg-[#C9A227]/[0.08]",
  "border-[#C7CDD9]/30 text-[#C7CDD9] bg-white/[0.04]",
  "border-[#C9A227]/40 text-[#E8CE8A] bg-[#C9A227]/[0.08]",
  "border-[#C7CDD9]/30 text-[#C7CDD9] bg-white/[0.04]",
]
import {
  asambleaHighlights,
  asambleaPrograma,
  asambleaConfirmedGuests,
  asambleaSpeakers,
  asambleaGallery,
  asambleaSponsor,
  asambleaSponsorLogos,
} from "@/data/asamblea-general-content"

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#C9A227] text-xs font-bold uppercase tracking-[0.3em] mb-3">
      {children}
    </p>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className={`${fraunces.className} text-3xl sm:text-5xl font-semibold text-white leading-tight`}>
      {children}
    </h2>
  )
}

export function AsambleaGeneralSection() {
  return (
    <div className="bg-[#050B1A] relative">
      {/* Highlights */}
      <section className="py-10 sm:py-16 relative bg-[#0A1830]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
            <SectionKicker>En el marco de esta Asamblea</SectionKicker>
            <SectionTitle>De cara al 2027</SectionTitle>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {asambleaHighlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#C9A227]/40 hover:shadow-[0_4px_24px_rgba(201,162,39,0.10)] transition-all group flex flex-col"
              >
                <Badge variant="outline" className={`text-xs mb-3 w-fit ${badgeColors[i % badgeColors.length]}`}>
                  {item.emoji} {item.badge}
                </Badge>
                <h3 className="text-white font-semibold text-sm mb-2 leading-snug group-hover:text-[#E8CE8A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#9AA5B5] text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programa — floating rows, stacked */}
      <section className="py-10 sm:py-16 relative bg-[#050B1A]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
            <SectionKicker>Programa</SectionKicker>
            <SectionTitle>Orden del día</SectionTitle>
          </div>
          <div className="flex flex-col gap-4 max-w-4xl mx-auto">
            {asambleaPrograma.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3.2 + (i % 3) * 0.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                  className="flex items-center gap-5 sm:gap-6 p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#C9A227]/40 hover:shadow-[0_8px_28px_rgba(201,162,39,0.10)] transition-all"
                >
                  <span className="shrink-0 min-w-[76px] sm:min-w-[96px] text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#050B1A] bg-gradient-to-r from-[#C9A227] to-[#E8CE8A] rounded-full px-3 sm:px-4 py-1.5 text-center">
                    {step.time}
                  </span>
                  <div className="min-w-0">
                    <h3 className={`${fraunces.className} text-white font-semibold text-lg sm:text-xl leading-snug mb-1`}>
                      {step.title}
                    </h3>
                    <p className="text-[#9AA5B5] text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Invitados confirmados */}
      <section className="py-10 sm:py-16 relative bg-[#0A1830]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
            <SectionKicker>Sector Público · CONAJOMX</SectionKicker>
            <SectionTitle>Invitados confirmados</SectionTitle>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {asambleaConfirmedGuests.map((guest, i) => (
              <motion.div
                key={guest.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#C9A227]/40 transition-all text-center flex flex-col items-center"
              >
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-[#C9A227]/50 shadow-[0_4px_24px_rgba(201,162,39,0.15)] mb-4">
                  <SafeImage
                    src={guest.image}
                    alt={`Foto de ${guest.name}`}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full object-top"
                  />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/[0.08] text-[#E8CE8A] text-[10px] font-bold uppercase tracking-[0.14em] mb-3">
                  {guest.tag}
                </span>
                <p className="text-white font-semibold text-base leading-snug mb-1">{guest.name}</p>
                <p className="text-[#9AA5B5] text-sm leading-snug mb-3">{guest.role}</p>
                <span className="inline-flex items-center gap-1.5 text-[#4ADE80] text-xs font-bold uppercase tracking-wider">
                  <BadgeCheck className="w-4 h-4" /> Confirmada
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="py-10 sm:py-16 relative bg-[#050B1A]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
            <SectionKicker>Liderazgo CONAJOMX</SectionKicker>
            <SectionTitle>Liderazgos presentes</SectionTitle>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {asambleaSpeakers.map((speaker, i) => (
              <motion.div
                key={speaker.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex flex-col items-center text-center"
              >
                {speaker.image ? (
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-white/15 shadow-[0_4px_20px_rgba(0,0,0,0.3)] mb-4">
                    <SafeImage
                      src={speaker.image}
                      alt={`Foto de ${speaker.name}`}
                      width={112}
                      height={112}
                      className="object-cover w-full h-full object-top"
                    />
                  </div>
                ) : (
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#0A1830] to-[#050B1A] border border-[#C9A227]/30 flex items-center justify-center mb-4 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                    <span className="text-[#E8CE8A] font-bold text-lg">{speaker.initials}</span>
                  </div>
                )}
                <p className="text-white font-semibold text-sm leading-snug">{speaker.name}</p>
                <p className="text-[#9AA5B5] text-xs mt-1 leading-snug">{speaker.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="py-10 sm:py-16 relative bg-[#0A1830]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
            <SectionKicker>Antecedentes</SectionKicker>
            <SectionTitle>Encuentros anteriores de CONAJOMX</SectionTitle>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-6xl mx-auto">
            {asambleaGallery.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
                className="aspect-[4/3] rounded-xl overflow-hidden border border-white/10 hover:border-[#C9A227]/40 transition-all relative"
              >
                <SafeImage
                  src={src}
                  alt="Encuentro CONAJOMX de legisladores, alcaldes, síndicos, regidores y empresarios"
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section id="sponsors" className="py-10 sm:py-16 relative bg-[#050B1A]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <SectionKicker>{asambleaSponsor.eyebrow}</SectionKicker>
            <div className="mb-5">
              <SectionTitle>{asambleaSponsor.title}</SectionTitle>
            </div>
            <p className="text-[#9AA5B5] text-lg leading-relaxed mb-10">
              {asambleaSponsor.desc}
            </p>
          </div>

          {/* Sponsor logos */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 max-w-4xl mx-auto mb-12">
            {asambleaSponsorLogos.map((sponsor, i) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className={`flex items-center justify-center p-5 sm:p-6 rounded-xl bg-white border border-white/10 hover:border-[#C9A227]/50 hover:shadow-[0_8px_28px_rgba(201,162,39,0.15)] transition-all ${
                  sponsor.wide ? "w-full sm:w-auto sm:min-w-[280px]" : "w-[200px]"
                }`}
              >
                <SafeImage
                  src={sponsor.image}
                  alt={sponsor.name}
                  width={sponsor.wide ? 260 : 160}
                  height={60}
                  className="object-contain w-full h-10 sm:h-12"
                />
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
              {asambleaSponsor.benefits.map((b, i) => (
                <div
                  key={b.badge}
                  className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#C9A227]/40 hover:shadow-[0_4px_20px_rgba(201,162,39,0.10)] transition-all"
                >
                  <Badge variant="outline" className={`text-xs mb-3 w-fit ${badgeColors[i % badgeColors.length]}`}>
                    {b.badge}
                  </Badge>
                  <p className="text-[#9AA5B5] text-sm leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <AnchorButton
                href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Quiero ser sponsor — IX Asamblea General CONAJOMX")}`}
                className="bg-gradient-to-r from-[#C9A227] to-[#E8CE8A] text-[#050B1A] hover:brightness-110 font-semibold shadow-[0_4px_20px_rgba(201,162,39,0.25)] px-8"
              >
                <Mail className="mr-2 w-4 h-4" /> {asambleaSponsor.cta}
              </AnchorButton>
              <ButtonLink
                href="/asamblea-general/registro"
                variant="outline"
                className="bg-transparent border-white/15 text-white hover:bg-white/[0.05] hover:border-[#C9A227]/50 font-semibold px-8"
              >
                Registrarme como asistente <ArrowRight className="ml-2 w-4 h-4" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
