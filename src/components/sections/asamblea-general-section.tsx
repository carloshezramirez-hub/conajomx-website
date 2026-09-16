"use client"

import { motion } from "framer-motion"
import { SafeImage } from "@/components/ui/safe-image"
import { ButtonLink } from "@/components/ui/button-link"
import { AnchorButton } from "@/components/ui/button-link"
import { ArrowRight, Mail } from "lucide-react"
import { siteConfig } from "@/config/site"
import {
  asambleaHighlights,
  asambleaPrograma,
  asambleaSpeakers,
  asambleaGallery,
  asambleaSponsor,
} from "@/data/asamblea-general-content"

export function AsambleaGeneralSection() {
  return (
    <>
      {/* Highlights */}
      <section className="py-14 sm:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227] mb-4">
              En el marco de esta Asamblea
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#071D3A] leading-tight">
              Lo que se define en la Asamblea
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
                className="p-6 rounded-2xl bg-[#F5FAFF] border border-[#DCE8F2] hover:border-[#C9A227]/40 hover:shadow-[0_8px_32px_rgba(10,45,82,0.08)] transition-all"
              >
                <div className="text-3xl mb-4">{item.emoji}</div>
                <h3 className="text-[#071D3A] font-bold text-base mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[#526173] text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programa */}
      <section className="py-14 sm:py-24 bg-[#F5F1EA] relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227] mb-4">
              Programa
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#071D3A] leading-tight">
              Orden del día
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {asambleaPrograma.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="flex gap-5 p-5 sm:p-6 rounded-xl bg-white border border-[#DCE8F2] hover:border-[#C9A227]/40 transition-all"
              >
                <div className="shrink-0 w-20 sm:w-24 text-right">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#A51C30]">
                    {step.time}
                  </span>
                </div>
                <div className="w-px bg-[#DCE8F2] shrink-0" />
                <div className="min-w-0">
                  <h3 className="text-[#071D3A] font-bold text-base sm:text-lg leading-snug mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[#526173] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="py-14 sm:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227] mb-4">
              Liderazgo CONAJOMX
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#071D3A] leading-tight">
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
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[#DCE8F2] shadow-[0_4px_20px_rgba(10,45,82,0.10)] mb-4">
                    <SafeImage
                      src={speaker.image}
                      alt={`Foto de ${speaker.name}`}
                      width={112}
                      height={112}
                      className="object-cover w-full h-full object-top"
                    />
                  </div>
                ) : (
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#071D3A] to-[#0A2D52] flex items-center justify-center mb-4 shadow-[0_4px_20px_rgba(10,45,82,0.10)]">
                    <span className="text-[#1FE9E1] font-bold text-lg">{speaker.initials}</span>
                  </div>
                )}
                <p className="text-[#071D3A] font-semibold text-sm leading-snug">{speaker.name}</p>
                <p className="text-[#A51C30] text-xs mt-1 leading-snug">{speaker.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="py-14 sm:py-24 bg-[#050F20] relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227] mb-4">
              Antecedentes
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
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
                className="aspect-[4/3] rounded-xl overflow-hidden border border-white/10 relative"
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
      <section id="sponsors" className="py-14 sm:py-24 bg-[#F5FAFF] relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227] mb-4">
              {asambleaSponsor.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#071D3A] leading-tight mb-6">
              {asambleaSponsor.title}
            </h2>
            <p className="text-[#526173] text-lg leading-relaxed mb-8">
              {asambleaSponsor.desc}
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-10 text-left">
              {asambleaSponsor.benefits.map((b) => (
                <div
                  key={b}
                  className="p-5 rounded-xl bg-white border border-[#DCE8F2] text-[#526173] text-sm leading-relaxed"
                >
                  {b}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <AnchorButton
                href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Quiero ser sponsor — IX Asamblea General CONAJOMX")}`}
                className="bg-[#071D3A] text-white hover:bg-[#0A2D52] font-semibold shadow-[0_4px_20px_rgba(7,29,58,0.20)] px-8"
              >
                <Mail className="mr-2 w-4 h-4" /> {asambleaSponsor.cta}
              </AnchorButton>
              <ButtonLink
                href="/asamblea-general/registro"
                variant="outline"
                className="border-[#DCE8F2] text-[#071D3A] hover:bg-white hover:border-[#071D3A]/30 font-semibold px-8"
              >
                Registrarme como asistente <ArrowRight className="ml-2 w-4 h-4" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
