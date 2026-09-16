import Link from "next/link"
import { siteConfig } from "@/config/site"
import { AnchorButton } from "@/components/ui/button-link"
import { cn } from "@/lib/utils"

export function ContactSection({ variant = "light" }: { variant?: "light" | "dark" }) {
  const dark = variant === "dark"

  return (
    <section className={cn("py-24", dark ? "bg-black" : "bg-white")}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p
            className={cn(
              "text-xs font-bold uppercase tracking-[0.2em] mb-4",
              dark ? "text-[#C9A227]" : "text-[#1FE9E1]"
            )}
          >
            Contacto
          </p>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-black mb-6 leading-tight",
              dark ? "text-white" : "text-[#071D3A]"
            )}
          >
            ¿Listo para conectar?
          </h2>
          <p className={cn("text-lg leading-relaxed", dark ? "text-[#8EA4BD]" : "text-[#526173]")}>
            Escríbenos para conocer más sobre cómo colaborar con CONAJOMX, participar en la agenda
            o afiliar tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
          {/* Email */}
          <div
            className={cn(
              "p-6 rounded-xl border transition-all text-center group",
              dark
                ? "bg-white/[0.03] border-[#C9A227]/20 hover:border-[#C9A227]/50"
                : "bg-[#F5FAFF] border-[#DCE8F2] hover:border-[#1FE9E1]/40"
            )}
          >
            <div className="text-3xl mb-3">✉️</div>
            <p className={cn("font-semibold text-sm mb-2", dark ? "text-white" : "text-[#071D3A]")}>
              Email
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className={cn(
                "text-xs transition-colors break-all",
                dark ? "text-[#8EA4BD] hover:text-[#E6C766]" : "text-[#526173] hover:text-[#0A2D52]"
              )}
            >
              {siteConfig.email}
            </a>
          </div>

          {/* CDMX */}
          <div
            className={cn(
              "p-6 rounded-xl border transition-all text-center",
              dark
                ? "bg-white/[0.03] border-[#C9A227]/20 hover:border-[#C9A227]/50"
                : "bg-[#F5FAFF] border-[#DCE8F2] hover:border-[#1FE9E1]/40"
            )}
          >
            <div className="text-3xl mb-3">🇲🇽</div>
            <p className={cn("font-semibold text-sm mb-2", dark ? "text-white" : "text-[#071D3A]")}>
              Ciudad de México
            </p>
            <p className={cn("text-xs leading-relaxed", dark ? "text-[#8EA4BD]" : "text-[#526173]")}>
              Presidente Masaryk, Polanco, Miguel Hidalgo, CDMX
            </p>
          </div>

          {/* Madrid */}
          <div
            className={cn(
              "p-6 rounded-xl border transition-all text-center",
              dark
                ? "bg-white/[0.03] border-[#C9A227]/20 hover:border-[#C9A227]/50"
                : "bg-[#F5FAFF] border-[#DCE8F2] hover:border-[#1FE9E1]/40"
            )}
          >
            <div className="text-3xl mb-3">🇪🇸</div>
            <p className={cn("font-semibold text-sm mb-2", dark ? "text-white" : "text-[#071D3A]")}>
              Madrid, España
            </p>
            <p className={cn("text-xs leading-relaxed", dark ? "text-[#8EA4BD]" : "text-[#526173]")}>
              Plaza de las Cortes 5, Madrid, España
            </p>
          </div>
        </div>

        {/* Social links */}
        <div className="max-w-md mx-auto text-center mb-10">
          <p className={cn("text-sm mb-4", dark ? "text-[#8EA4BD]" : "text-[#526173]")}>
            Síguenos en redes sociales
          </p>
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
                className={cn(
                  "px-4 py-2 rounded-lg border text-sm transition-all",
                  dark
                    ? "border-white/15 text-[#8EA4BD] hover:text-white hover:border-white/30"
                    : "border-[#DCE8F2] text-[#526173] hover:text-[#071D3A] hover:border-[#071D3A]/20"
                )}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center">
          <AnchorButton
            href={`mailto:${siteConfig.email}`}
            className={cn(
              "font-semibold px-8",
              dark
                ? "bg-gradient-to-r from-[#E6C766] to-[#C9A227] text-black hover:brightness-110 shadow-[0_0_24px_rgba(201,162,39,0.3)]"
                : "bg-[#071D3A] text-white hover:bg-[#0A2D52] shadow-[0_4px_20px_rgba(7,29,58,0.20)]"
            )}
          >
            Enviar mensaje
          </AnchorButton>
        </div>
      </div>
    </section>
  )
}
