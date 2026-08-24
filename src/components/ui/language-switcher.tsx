import Link from "next/link"
import type { Locale } from "@/data/executive-forum-content"

export function LanguageSwitcher({
  locale,
  esHref,
  enHref,
}: {
  locale: Locale
  esHref: string
  enHref: string
}) {
  return (
    <div className="inline-flex items-center rounded-full border border-[#A51C30]/40 bg-white/5 p-1 text-sm">
      <Link
        href={esHref}
        className={`px-3 py-1 rounded-full transition-colors ${
          locale === "es" ? "bg-[#A51C30] text-white" : "text-white/70 hover:text-white"
        }`}
      >
        ES
      </Link>
      <Link
        href={enHref}
        className={`px-3 py-1 rounded-full transition-colors ${
          locale === "en" ? "bg-[#A51C30] text-white" : "text-white/70 hover:text-white"
        }`}
      >
        EN
      </Link>
    </div>
  )
}
