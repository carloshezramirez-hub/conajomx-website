import Link from "next/link"
import { siteConfig } from "@/config/site"
import { AnchorButton } from "@/components/ui/button-link"

export function ContactSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1FE9E1] mb-4">
            Contacto
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#071D3A] mb-6 leading-tight">
            ¿Listo para conectar?
          </h2>
          <p className="text-[#526173] text-lg leading-relaxed">
            Escríbenos para conocer más sobre cómo colaborar con CONAJOMX, participar en la agenda
            o afiliar tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
          {/* Email */}
          <div className="p-6 rounded-xl bg-[#F5FAFF] border border-[#DCE8F2] hover:border-[#1FE9E1]/40 transition-all text-center group">
            <div className="text-3xl mb-3">✉️</div>
            <p className="text-[#071D3A] font-semibold text-sm mb-2">Email</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-[#526173] hover:text-[#0A2D52] text-xs transition-colors break-all"
            >
              {siteConfig.email}
            </a>
          </div>

          {/* CDMX */}
          <div className="p-6 rounded-xl bg-[#F5FAFF] border border-[#DCE8F2] hover:border-[#1FE9E1]/40 transition-all text-center">
            <div className="text-3xl mb-3">🇲🇽</div>
            <p className="text-[#071D3A] font-semibold text-sm mb-2">Ciudad de México</p>
            <p className="text-[#526173] text-xs leading-relaxed">
              Presidente Masaryk, Polanco, Miguel Hidalgo, CDMX
            </p>
          </div>

          {/* Madrid */}
          <div className="p-6 rounded-xl bg-[#F5FAFF] border border-[#DCE8F2] hover:border-[#1FE9E1]/40 transition-all text-center">
            <div className="text-3xl mb-3">🇪🇸</div>
            <p className="text-[#071D3A] font-semibold text-sm mb-2">Madrid, España</p>
            <p className="text-[#526173] text-xs leading-relaxed">
              Plaza de las Cortes 5, Madrid, España
            </p>
          </div>
        </div>

        {/* Social links */}
        <div className="max-w-md mx-auto text-center mb-10">
          <p className="text-[#526173] text-sm mb-4">Síguenos en redes sociales</p>
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
                className="px-4 py-2 rounded-lg border border-[#DCE8F2] text-[#526173] hover:text-[#071D3A] hover:border-[#071D3A]/20 text-sm transition-all"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center">
          <AnchorButton
            href={`mailto:${siteConfig.email}`}
            className="bg-[#071D3A] text-white hover:bg-[#0A2D52] font-semibold shadow-[0_4px_20px_rgba(7,29,58,0.20)] px-8"
          >
            Enviar mensaje
          </AnchorButton>
        </div>
      </div>
    </section>
  )
}
