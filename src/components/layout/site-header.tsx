"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ButtonLink } from "@/components/ui/button-link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { mainNav } from "@/data/navigation"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#030B18]/90 backdrop-blur-md border-b border-[#1FE9E1]/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span className="text-xl font-black tracking-tight text-white">
            CONAJO<span className="text-[#1FE9E1]">MX</span>
          </span>
          <span className="text-[10px] text-[#8EA4BD] tracking-widest uppercase hidden sm:block leading-none mt-0.5">
            Consejo de Líderes
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 text-sm text-[#8EA4BD] hover:text-white transition-colors rounded-md hover:bg-white/5"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <ButtonLink
            href="/agenda"
            variant="ghost"
            size="sm"
            className="text-[#8EA4BD] hover:text-white border border-white/10 hover:bg-white/5 hover:border-white/20"
          >
            Ver Agenda
          </ButtonLink>
          <ButtonLink
            href="/afiliacion"
            size="sm"
            className="bg-[#1FE9E1] text-[#030B18] hover:bg-[#33CCDD] font-bold shadow-[0_0_20px_rgba(31,233,225,0.3)]"
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
                className="lg:hidden text-white hover:bg-white/10"
                aria-label="Abrir menú de navegación"
              >
                <Menu className="h-5 w-5" />
              </Button>
            }
          />
          <SheetContent
            side="left"
            className="w-72 bg-[#061833] border-r border-[#1FE9E1]/10 p-0"
          >
            <div className="flex flex-col h-full p-6">
              <Link
                href="/"
                className="flex flex-col leading-none mb-8"
                onClick={() => setOpen(false)}
              >
                <span className="text-2xl font-black text-white">
                  CONAJO<span className="text-[#1FE9E1]">MX</span>
                </span>
                <span className="text-xs text-[#8EA4BD] tracking-widest uppercase mt-0.5">
                  Consejo de Jóvenes Pro México
                </span>
              </Link>

              <nav className="flex flex-col gap-1 flex-1">
                {mainNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="px-3 py-2.5 text-[#8EA4BD] hover:text-white hover:bg-white/5 rounded-lg transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="flex flex-col gap-2 pt-6 border-t border-white/5 mt-6">
                <ButtonLink
                  href="/agenda"
                  variant="outline"
                  className="border-[#1FE9E1]/30 text-[#1FE9E1] hover:bg-[#1FE9E1]/10 hover:border-[#1FE9E1]/50 w-full justify-center"
                  onClick={() => setOpen(false)}
                >
                  Ver Agenda 2026
                </ButtonLink>
                <ButtonLink
                  href="/afiliacion"
                  className="bg-[#1FE9E1] text-[#030B18] hover:bg-[#33CCDD] font-bold w-full justify-center"
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
