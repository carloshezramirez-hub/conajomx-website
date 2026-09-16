import type { CSSProperties } from "react"

const grainSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

/**
 * Brushed-metal gold text fill: grain texture + diagonal sheen + a vertical
 * metal gradient, with a thin stroke and a single grounded shadow instead of
 * the stepped "extruded block letter" look (reads as cartoonish at scale).
 */
export const gold3dStyle: CSSProperties = {
  backgroundImage: `${grainSvg}, linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.5) 45%, transparent 60%), linear-gradient(180deg, #F1DE9E 0%, #E1B75C 22%, #C9A227 48%, #96751F 74%, #6B4F16 100%)`,
  backgroundBlendMode: "overlay, overlay, normal",
  backgroundSize: "6px 6px, auto, auto",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
  WebkitTextStroke: "0.6px rgba(70,52,12,0.55)",
  textShadow: "0 2px 2px rgba(80,60,16,0.4), 0 6px 16px rgba(0,0,0,0.5)",
}
