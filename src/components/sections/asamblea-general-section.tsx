"use client"

import { motion } from "framer-motion"
import { SafeImage } from "@/components/ui/safe-image"
import { ButtonLink } from "@/components/ui/button-link"
import { AnchorButton } from "@/components/ui/button-link"
import { ArrowRight, Mail } from "lucide-react"
import { playfair } from "@/lib/fonts"
import { siteConfig } from "@/config/site"
import {
  asambleaHighlights,
  asambleaPrograma,
  asambleaSpeakers,
  asambleaGallery,
  asambleaSponsor,
} from "@/data/asamblea-general-content"

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#C9A227] text-xs font-bold uppercase tracking-[0.3em] mb-4">
      {children}
    </p>
  )
}

export function AsambleaGeneralSection() {
  return (
    <div className="bg-[#050B16] relative">
      {/* subtle shared background texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,162,39,0.06),transparent_45%)]" />

      {/* Highlights */}
      <section className="py-16 sm:py-28 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <SectionKicker>En el marco de esta Asamblea</SectionKicker>
            <h2 className={`${playfair.className} text-3xl sm:text-5xl font-black text-white leading-tight`}>
              Cuatro decisiones que marcan el rumbo
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {asambleaHighlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="p-6 rounded-2xl bg-white/[0.03] border border-[#C9A227]/20 hover:border-[#C9A227]/50 hover:bg-white/[0.05] transition-all"
              >
                <div className="text-3xl mb-4">{item.emoji}</div>
                <h3 className="text-white font-bold text-base mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[#8EA4BD] text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programa */}
      <section className="py-16 sm:py-28 relative border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <SectionKicker>Programa</SectionKicker>
            <h2 className={`${playfair.className} text-3xl sm:text-5xl font-black text-white leading-tight`}>
              Orden del día
            </h2>
          </div>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-[92px] sm:left-[108px] top-2 bottom-2 w-px bg-gradient-to-b from-[#C9A227]/50 via-[#C9A227]/20 to-transparent hidden sm:block" />
            <div className="space-y-4">
              {asambleaPrograma.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="flex gap-5 p-5 sm:p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#C9A227]/40 transition-all relative"
                >
                  <div className="shrink-0 w-20 sm:w-24 text-right">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#E6C766]">
                      {step.time}
                    </span>
                  </div>
                  <div className="w-px bg-[#C9A227]/20 shrink-0" />
                  <div className="min-w-0">
                    <h3 className={`${playfair.className} text-white font-bold text-lg sm:text-xl leading-snug mb-1`}>
                      {step.title}
                    </h3>
                    <p className="text-[#8EA4BD] text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="py-16 sm:py-28 relative border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <SectionKicker>Liderazgo CONAJOMX</SectionKicker>
            <h2 className={`${playfair.className} text-3xl sm:text-5xl font-black text-white leading-tight`}>
              Ponentes confirmados
            </h2>
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
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[#C9A227]/60 shadow-[0_4px_28px_rgba(201,162,39,0.15)] mb-4">
                    <SafeImage
                      src={speaker.image}
                      alt={`Foto de ${speaker.name}`}
                      width={112}
                      height={112}
                      className="object-cover w-full h-full object-top"
                    />
                  </div>
                ) : (
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#0A2D52] to-[#050B16] border-2 border-[#C9A227]/60 flex items-center justify-center mb-4">
                    <span className="text-[#E6C766] font-bold text-lg">{speaker.initials}</span>
                  </div>
                )}
                <p className="text-white font-semibold text-sm leading-snug">{speaker.name}</p>
                <p className="text-[#E6C766] text-xs mt-1 leading-snug">{speaker.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="py-16 sm:py-28 relative border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <SectionKicker>Antecedentes</SectionKicker>
            <h2 className={`${playfair.className} text-3xl sm:text-5xl font-black text-white leading-tight`}>
              Encuentros anteriores de CONAJOMX
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-6xl mx-auto">
            {asambleaGallery.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
                className="aspect-[4/3] rounded-xl overflow-hidden border border-white/10 hover:border-[#C9A227]/50 transition-all relative"
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
      <section id="sponsors" className="py-16 sm:py-28 relative border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <SectionKicker>{asambleaSponsor.eyebrow}</SectionKicker>
            <h2 className={`${playfair.className} text-3xl sm:text-5xl font-black text-white leading-tight mb-6`}>
              {asambleaSponsor.title}
            </h2>
            <p className="text-[#8EA4BD] text-lg leading-relaxed mb-8">
              {asambleaSponsor.desc}
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-10 text-left">
              {asambleaSponsor.benefits.map((b) => (
                <div
                  key={b}
                  className="p-5 rounded-xl bg-white/[0.03] border border-[#C9A227]/20 text-[#C7D2DE] text-sm leading-relaxed"
                >
                  {b}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <AnchorButton
                href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Quiero ser sponsor — IX Asamblea General CONAJOMX")}`}
                className="bg-gradient-to-r from-[#E6C766] to-[#C9A227] text-[#050B16] hover:brightness-110 font-bold shadow-[0_0_28px_rgba(201,162,39,0.3)] px-8"
              >
                <Mail className="mr-2 w-4 h-4" /> {asambleaSponsor.cta}
              </AnchorButton>
              <ButtonLink
                href="/asamblea-general/registro"
                variant="outline"
                className="bg-transparent border-white/20 text-white hover:bg-white/5 hover:border-[#C9A227] font-semibold px-8"
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
