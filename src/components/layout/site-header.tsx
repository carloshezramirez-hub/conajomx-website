"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect, useRef } from "react"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ButtonLink } from "@/components/ui/button-link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { mainNav } from "@/data/navigation"
import { cn } from "@/lib/utils"

function DesktopNavItem({ item, dark }: { item: (typeof mainNav)[number]; dark: boolean }) {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }
  const scheduleClose = () => {
    cancelClose()
    closeTimer.current = setTimeout(() => setOpen(false), 150)
  }

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className={cn(
          "px-3 py-1.5 text-sm transition-colors rounded-md",
          dark
            ? "text-[#C7CDD9] hover:text-[#E8CE8A] hover:bg-white/5"
            : "text-[#526173] hover:text-[#071D3A] hover:bg-[#F5FAFF]"
        )}
      >
        {item.label}
      </Link>
    )
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => { cancelClose(); setOpen(true) }}
      onMouseLeave={scheduleClose}
    >
      <Link
        href={item.href}
        className={cn(
          "px-3 py-1.5 text-sm transition-colors rounded-md inline-flex items-center gap-1",
          dark
            ? "text-[#C7CDD9] hover:text-[#E8CE8A] hover:bg-white/5"
            : "text-[#526173] hover:text-[#071D3A] hover:bg-[#F5FAFF]"
        )}
      >
        {item.label}
        <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", open && "rotate-180")} />
      </Link>
      {open && (
        <div className="absolute top-full left-0 pt-2 min-w-[220px]">
          <div
            className={cn(
              "rounded-xl p-1.5 border",
              dark
                ? "bg-[#0A1830] border-white/10 shadow-[0_12px_32px_rgba(0,0,0,0.4)]"
                : "bg-white border-[#DCE8F2] shadow-[0_12px_32px_rgba(10,45,82,0.12)]"
            )}
          >
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className={cn(
                  "block px-3 py-2 text-sm rounded-lg transition-colors",
                  dark
                    ? "text-[#C7CDD9] hover:text-[#E8CE8A] hover:bg-white/5"
                    : "text-[#526173] hover:text-[#071D3A] hover:bg-[#F5FAFF]"
                )}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [mobileSubOpen, setMobileSubOpen] = useState(false)
  const pathname = usePathname()
  const dark = pathname?.startsWith("/asamblea-general") ?? false

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        dark
          ? scrolled
            ? "bg-[#050B1A]/95 backdrop-blur-md border-b border-white/10 shadow-[0_2px_24px_rgba(0,0,0,0.35)]"
            : "bg-[#050B1A]/80 backdrop-blur-sm border-b border-white/5"
          : scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#DCE8F2] shadow-[0_2px_20px_rgba(10,45,82,0.08)]"
            : "bg-white/80 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo (also acts as Inicio link) */}
        <Link href="/" className="flex flex-col leading-none group">
          <span className={cn("text-xl font-black tracking-tight", dark ? "text-white" : "text-[#071D3A]")}>
            CONAJO<span className={dark ? "text-[#E8CE8A]" : "text-[#1FE9E1]"}>MX</span>
          </span>
          <span className={cn("text-[10px] tracking-widest uppercase hidden sm:block leading-none mt-0.5", dark ? "text-[#9AA5B5]" : "text-[#526173]")}>
            Consejo de Líderes
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {mainNav.map((item) => (
            <DesktopNavItem key={item.href} item={item} dark={dark} />
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <ButtonLink
            href="/afiliacion"
            size="sm"
            className={cn(
              "font-semibold",
              dark
                ? "bg-gradient-to-r from-[#C9A227] to-[#E8CE8A] text-[#050B1A] hover:brightness-110 shadow-[0_2px_12px_rgba(201,162,39,0.25)]"
                : "bg-[#071D3A] text-white hover:bg-[#0A2D52] shadow-[0_2px_12px_rgba(7,29,58,0.20)]"
            )}
          >
            Afíliate
          </ButtonLink>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className={cn("lg:hidden", dark ? "text-white hover:bg-white/5" : "text-[#071D3A] hover:bg-[#F5FAFF]")}
                aria-label="Abrir menú de navegación"
              >
                <Menu className="h-5 w-5" />
              </Button>
            }
          />
          <SheetContent
            side="left"
            className={cn("w-72 p-0", dark ? "bg-[#050B1A] border-r border-white/10" : "bg-white border-r border-[#DCE8F2]")}
          >
            <div className="flex flex-col h-full p-6">
              <Link
                href="/"
                className="flex flex-col leading-none mb-8"
                onClick={() => setOpen(false)}
              >
                <span className={cn("text-2xl font-black", dark ? "text-white" : "text-[#071D3A]")}>
                  CONAJO<span className={dark ? "text-[#E8CE8A]" : "text-[#1FE9E1]"}>MX</span>
                </span>
                <span className={cn("text-xs tracking-widest uppercase mt-0.5", dark ? "text-[#9AA5B5]" : "text-[#526173]")}>
                  Consejo de Jóvenes Pro México
                </span>
              </Link>

              <nav className="flex flex-col gap-1 flex-1">
                {mainNav.map((item) =>
                  item.children ? (
                    <div key={item.href}>
                      <div className="flex items-center">
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "flex-1 px-3 py-2.5 rounded-lg transition-colors text-sm",
                            dark ? "text-[#C7CDD9] hover:text-[#E8CE8A] hover:bg-white/5" : "text-[#526173] hover:text-[#071D3A] hover:bg-[#F5FAFF]"
                          )}
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setMobileSubOpen((v) => !v)}
                          aria-label={`Mostrar submenú de ${item.label}`}
                          className={cn("p-2.5", dark ? "text-[#C7CDD9] hover:text-[#E8CE8A]" : "text-[#526173] hover:text-[#071D3A]")}
                        >
                          <ChevronDown className={cn("w-4 h-4 transition-transform", mobileSubOpen && "rotate-180")} />
                        </button>
                      </div>
                      {mobileSubOpen && (
                        <div className={cn("ml-3 border-l pl-3 flex flex-col gap-1 mb-1", dark ? "border-white/10" : "border-[#DCE8F2]")}>
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className={cn(
                                "px-3 py-2 rounded-lg transition-colors text-sm",
                                dark ? "text-[#C7CDD9] hover:text-[#E8CE8A] hover:bg-white/5" : "text-[#526173] hover:text-[#071D3A] hover:bg-[#F5FAFF]"
                              )}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "px-3 py-2.5 rounded-lg transition-colors text-sm",
                        dark ? "text-[#C7CDD9] hover:text-[#E8CE8A] hover:bg-white/5" : "text-[#526173] hover:text-[#071D3A] hover:bg-[#F5FAFF]"
                      )}
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </nav>

              <div className={cn("flex flex-col gap-2 pt-6 border-t mt-6", dark ? "border-white/10" : "border-[#DCE8F2]")}>
                <ButtonLink
                  href="/afiliacion"
                  className={cn(
                    "font-semibold w-full justify-center",
                    dark ? "bg-gradient-to-r from-[#C9A227] to-[#E8CE8A] text-[#050B1A] hover:brightness-110" : "bg-[#071D3A] text-white hover:bg-[#0A2D52]"
                  )}
                  onClick={() => setOpen(false)}
                >
                  Afíliate
                </ButtonLink>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
