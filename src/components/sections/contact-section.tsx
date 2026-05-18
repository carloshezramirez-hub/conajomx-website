import Link from "next/link"
import { siteConfig } from "@/config/site"
import { AnchorButton } from "@/components/ui/button-link"

export function ContactSection() {
  return (
    <section className="py-24 bg-[#061833]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-[#1FE9E1] text-sm font-semibold uppercase tracking-widest mb-4">
            Contacto
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
            ¿Listo para conectar?
          </h2>
          <p className="text-[#8EA4BD] text-lg leading-relaxed">
            Escríbenos para conocer más sobre cómo colaborar con CONAJOMX, participar en la agenda
            o afiliar tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
          {/* Email */}
          <div className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#1FE9E1]/20 transition-all text-center group">
            <div className="text-3xl mb-3">✉️</div>
            <p className="text-white font-semibold text-sm mb-2">Email</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-[#8EA4BD] hover:text-[#1FE9E1] text-xs transition-colors break-all"
            >
              {siteConfig.email}
            </a>
          </div>

          {/* CDMX */}
          <div className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#1FE9E1]/20 transition-all text-center">
            <div className="text-3xl mb-3">🇲🇽</div>
            <p className="text-white font-semibold text-sm mb-2">Ciudad de México</p>
            <p className="text-[#8EA4BD] text-xs leading-relaxed">
              Presidente Masaryk, Polanco, Miguel Hidalgo, CDMX
            </p>
          </div>

          {/* Madrid */}
          <div className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#1FE9E1]/20 transition-all text-center">
            <div className="text-3xl mb-3">🇪🇸</div>
            <p className="text-white font-semibold text-sm mb-2">Madrid, España</p>
            <p className="text-[#8EA4BD] text-xs leading-relaxed">
              Plaza de las Cortes 5, Madrid, España
            </p>
          </div>
        </div>

        {/* Social links */}
        <div className="max-w-md mx-auto text-center mb-10">
          <p className="text-[#8EA4BD] text-sm mb-4">Síguenos en redes sociales</p>
          <div className="flex justify-center gap-4 flex-wrap">
            {[
              { label: "Facebook", href: siteConfig.socials.facebook },
              { label: "Instagram", href: siteConfig.socials.instagram },
              { label: "X / Twitter", href: siteConfig.socials.twitter },
              { label: "LinkedIn", href: siteConfig.socials.linkedin },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-white/10 text-[#8EA4BD] hover:text-[#1FE9E1] hover:border-[#1FE9E1]/30 text-sm transition-all"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center">
          <AnchorButton
            href={`mailto:${siteConfig.email}`}
            className="bg-[#1FE9E1] text-[#030B18] hover:bg-[#33CCDD] font-bold shadow-[0_0_20px_rgba(31,233,225,0.3)] px-8"
          >
            Enviar mensaje
          </AnchorButton>
        </div>
      </div>
    </section>
  )
}
