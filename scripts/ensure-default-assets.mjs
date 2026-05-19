/**
 * ensure-default-assets.mjs
 * Creates premium SVG fallback assets if they don't already exist.
 * Safe to run multiple times — never overwrites .jpeg/.png/.webp files.
 * Run: node scripts/ensure-default-assets.mjs
 */

import { existsSync, mkdirSync, writeFileSync } from "fs"
import { join, dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, "..")
const base = join(root, "public", "assets", "conajomx")

// --- helpers ----------------------------------------------------------------

function ensure(dir) {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true })
}

function write(filePath, content) {
  if (existsSync(filePath)) return // never overwrite existing files
  ensure(dirname(filePath))
  writeFileSync(filePath, content, "utf8")
  console.log(`  ✅ created: ${filePath.replace(root, "")}`)
}

// --- SVG builders -----------------------------------------------------------

function logoSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 60" width="240" height="60">
  <defs>
    <linearGradient id="lg" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#071D3A"/>
      <stop offset="100%" stop-color="#0A2D52"/>
    </linearGradient>
  </defs>
  <!-- Hexagon icon -->
  <polygon points="22,4 36,12 36,28 22,36 8,28 8,12" fill="none" stroke="#1FE9E1" stroke-width="2"/>
  <polygon points="22,9 31,14 31,24 22,29 13,24 13,14" fill="#1FE9E1" opacity="0.15"/>
  <text x="8" y="24" font-family="'Helvetica Neue',Arial,sans-serif" font-size="8" font-weight="bold" fill="#1FE9E1" text-anchor="middle">C</text>
  <!-- Wordmark -->
  <text x="46" y="26" font-family="'Helvetica Neue',Arial,sans-serif" font-size="20" font-weight="900" fill="#071D3A">CONAJO</text>
  <text x="160" y="26" font-family="'Helvetica Neue',Arial,sans-serif" font-size="20" font-weight="900" fill="#1FE9E1">MX</text>
  <!-- Sub caption -->
  <text x="46" y="40" font-family="'Helvetica Neue',Arial,sans-serif" font-size="7" fill="#526173" letter-spacing="2">CONSEJO DE JÓVENES PRO MÉXICO</text>
</svg>`
}

function heroBg(title, subtitle, icon, darkBg = true) {
  const bg1 = darkBg ? "#071D3A" : "#F5FAFF"
  const bg2 = darkBg ? "#0A2D52" : "#EEF3FB"
  const textColor = darkBg ? "#ffffff" : "#071D3A"
  const textMuted = darkBg ? "rgba(255,255,255,0.5)" : "#526173"
  const accentColor = "#1FE9E1"
  const id = Math.random().toString(36).slice(2, 8)
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="bg${id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bg1}"/>
      <stop offset="100%" stop-color="${bg2}"/>
    </linearGradient>
    <pattern id="hex${id}" x="0" y="0" width="60" height="69" patternUnits="userSpaceOnUse">
      <polygon points="30,2 56,17 56,47 30,62 4,47 4,17" fill="none" stroke="${accentColor}" stroke-width="0.6" opacity="0.18"/>
    </pattern>
    <radialGradient id="glow${id}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="${accentColor}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bg${id})"/>
  <rect width="800" height="600" fill="url(#hex${id})"/>
  <ellipse cx="400" cy="300" rx="280" ry="200" fill="url(#glow${id})"/>
  <!-- Network nodes -->
  <circle cx="200" cy="180" r="4" fill="${accentColor}" opacity="0.5"/>
  <circle cx="400" cy="120" r="6" fill="${accentColor}" opacity="0.6"/>
  <circle cx="600" cy="200" r="4" fill="${accentColor}" opacity="0.4"/>
  <circle cx="300" cy="320" r="5" fill="${accentColor}" opacity="0.5"/>
  <circle cx="500" cy="360" r="4" fill="${accentColor}" opacity="0.4"/>
  <circle cx="650" cy="420" r="3" fill="${accentColor}" opacity="0.35"/>
  <line x1="200" y1="180" x2="400" y2="120" stroke="${accentColor}" stroke-width="1" opacity="0.2"/>
  <line x1="400" y1="120" x2="600" y2="200" stroke="${accentColor}" stroke-width="1" opacity="0.2"/>
  <line x1="200" y1="180" x2="300" y2="320" stroke="${accentColor}" stroke-width="1" opacity="0.15"/>
  <line x1="600" y1="200" x2="500" y2="360" stroke="${accentColor}" stroke-width="1" opacity="0.15"/>
  <line x1="300" y1="320" x2="500" y2="360" stroke="${accentColor}" stroke-width="1" opacity="0.2"/>
  <line x1="500" y1="360" x2="650" y2="420" stroke="${accentColor}" stroke-width="1" opacity="0.15"/>
  <!-- Central icon -->
  <text x="400" y="290" font-family="Arial,sans-serif" font-size="56" text-anchor="middle" opacity="0.35">${icon}</text>
  <!-- Labels -->
  <text x="400" y="360" font-family="'Helvetica Neue',Arial,sans-serif" font-size="22" font-weight="bold" fill="${textColor}" text-anchor="middle" opacity="0.9">${title}</text>
  <text x="400" y="390" font-family="'Helvetica Neue',Arial,sans-serif" font-size="13" fill="${textMuted}" text-anchor="middle">${subtitle}</text>
  <!-- Bottom brand -->
  <text x="20" y="586" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="${textMuted}" letter-spacing="2">CONAJOMX</text>
  <!-- Cyan accent bar -->
  <rect x="0" y="594" width="800" height="6" fill="${accentColor}" opacity="0.6"/>
</svg>`
}

function galleryImg(label, icon, darkLeft = true) {
  const bg1 = darkLeft ? "#071D3A" : "#F5FAFF"
  const bg2 = darkLeft ? "#0A2D52" : "#EEF3FB"
  const textColor = darkLeft ? "#ffffff" : "#071D3A"
  const id = Math.random().toString(36).slice(2, 8)
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="600" height="400">
  <defs>
    <linearGradient id="gbg${id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bg1}"/>
      <stop offset="100%" stop-color="${bg2}"/>
    </linearGradient>
    <pattern id="ghex${id}" x="0" y="0" width="50" height="57" patternUnits="userSpaceOnUse">
      <polygon points="25,2 47,14 47,38 25,50 3,38 3,14" fill="none" stroke="#1FE9E1" stroke-width="0.5" opacity="0.15"/>
    </pattern>
  </defs>
  <rect width="600" height="400" fill="url(#gbg${id})"/>
  <rect width="600" height="400" fill="url(#ghex${id})"/>
  <!-- Icon -->
  <text x="300" y="195" font-family="Arial,sans-serif" font-size="64" text-anchor="middle" opacity="0.3">${icon}</text>
  <!-- Gradient overlay bottom -->
  <defs>
    <linearGradient id="gover${id}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="transparent"/>
      <stop offset="100%" stop-color="${darkLeft ? "rgba(7,29,58,0.8)" : "rgba(7,29,58,0.6)"}"/>
    </linearGradient>
  </defs>
  <rect width="600" height="400" fill="url(#gover${id})"/>
  <!-- Label -->
  <text x="24" y="370" font-family="'Helvetica Neue',Arial,sans-serif" font-size="18" font-weight="bold" fill="white">${label}</text>
  <rect x="0" y="393" width="600" height="7" fill="#1FE9E1" opacity="0.7"/>
</svg>`
}

function newsImg(title, subtitle, icon, scheme = "dark") {
  const bg1 = scheme === "dark" ? "#071D3A" : (scheme === "green" ? "#0d3325" : "#F5FAFF")
  const bg2 = scheme === "dark" ? "#0A2D52" : (scheme === "green" ? "#163d2a" : "#EEF3FB")
  const textColor = scheme === "light" ? "#071D3A" : "#ffffff"
  const textMuted = scheme === "light" ? "#526173" : "rgba(255,255,255,0.6)"
  const accent = scheme === "green" ? "#22c55e" : "#1FE9E1"
  const id = Math.random().toString(36).slice(2, 8)
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" width="400" height="280">
  <defs>
    <linearGradient id="nbg${id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bg1}"/>
      <stop offset="100%" stop-color="${bg2}"/>
    </linearGradient>
  </defs>
  <rect width="400" height="280" fill="url(#nbg${id})"/>
  <!-- Dot pattern -->
  <pattern id="ndot${id}" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
    <circle cx="15" cy="15" r="1" fill="${accent}" opacity="0.2"/>
  </pattern>
  <rect width="400" height="280" fill="url(#ndot${id})"/>
  <!-- Icon -->
  <text x="200" y="135" font-family="Arial,sans-serif" font-size="52" text-anchor="middle" opacity="0.4">${icon}</text>
  <!-- Gradient overlay -->
  <defs>
    <linearGradient id="nov${id}" x1="0%" y1="40%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="transparent"/>
      <stop offset="100%" stop-color="${bg1}" stop-opacity="0.9"/>
    </linearGradient>
  </defs>
  <rect width="400" height="280" fill="url(#nov${id})"/>
  <!-- Text -->
  <text x="20" y="238" font-family="'Helvetica Neue',Arial,sans-serif" font-size="15" font-weight="bold" fill="${textColor}">${title}</text>
  <text x="20" y="260" font-family="'Helvetica Neue',Arial,sans-serif" font-size="11" fill="${textMuted}">${subtitle}</text>
  <rect x="0" y="273" width="400" height="7" fill="${accent}" opacity="0.7"/>
</svg>`
}

function generatedVisual(title, subtitle, icon, accentTop = "#1FE9E1", bgLeft = "#071D3A", bgRight = "#0A2D52") {
  const id = Math.random().toString(36).slice(2, 8)
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="600" height="400">
  <defs>
    <linearGradient id="vbg${id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bgLeft}"/>
      <stop offset="100%" stop-color="${bgRight}"/>
    </linearGradient>
    <pattern id="vhex${id}" x="0" y="0" width="56" height="64" patternUnits="userSpaceOnUse">
      <polygon points="28,2 52,16 52,44 28,58 4,44 4,16" fill="none" stroke="${accentTop}" stroke-width="0.8" opacity="0.2"/>
    </pattern>
    <radialGradient id="vglow${id}" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="${accentTop}" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="${accentTop}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="600" height="400" fill="url(#vbg${id})"/>
  <rect width="600" height="400" fill="url(#vhex${id})"/>
  <ellipse cx="300" cy="180" rx="200" ry="140" fill="url(#vglow${id})"/>
  <!-- Decorative circles -->
  <circle cx="120" cy="80" r="60" fill="none" stroke="${accentTop}" stroke-width="1" opacity="0.1"/>
  <circle cx="480" cy="320" r="80" fill="none" stroke="${accentTop}" stroke-width="1" opacity="0.08"/>
  <!-- Icon -->
  <text x="300" y="195" font-family="Arial,sans-serif" font-size="72" text-anchor="middle" opacity="0.25">${icon}</text>
  <!-- Top accent bar -->
  <rect x="0" y="0" width="600" height="6" fill="${accentTop}" opacity="0.8"/>
  <!-- Overlay gradient -->
  <defs>
    <linearGradient id="vov${id}" x1="0%" y1="50%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="transparent"/>
      <stop offset="100%" stop-color="${bgLeft}" stop-opacity="0.75"/>
    </linearGradient>
  </defs>
  <rect width="600" height="400" fill="url(#vov${id})"/>
  <!-- Labels -->
  <text x="300" y="342" font-family="'Helvetica Neue',Arial,sans-serif" font-size="22" font-weight="bold" fill="white" text-anchor="middle">${title}</text>
  <text x="300" y="368" font-family="'Helvetica Neue',Arial,sans-serif" font-size="12" fill="rgba(255,255,255,0.6)" text-anchor="middle" letter-spacing="1">${subtitle}</text>
</svg>`
}

function affiliateLogo(name, scheme = "dark") {
  const bg = scheme === "dark" ? "#071D3A" : (scheme === "gradient" ? "#0A2D52" : "#F5FAFF")
  const bg2 = scheme === "dark" ? "#0A2D52" : (scheme === "gradient" ? "#071D3A" : "#EEF3FB")
  const textColor = scheme === "light" ? "#071D3A" : "#ffffff"
  const accent = "#1FE9E1"
  const id = Math.random().toString(36).slice(2, 8)
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 80" width="160" height="80">
  <defs>
    <linearGradient id="abg${id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bg}"/>
      <stop offset="100%" stop-color="${bg2}"/>
    </linearGradient>
  </defs>
  <rect width="160" height="80" rx="8" fill="url(#abg${id})"/>
  <rect x="0" y="0" width="4" height="80" rx="2" fill="${accent}" opacity="0.8"/>
  <!-- Mini hexagon -->
  <polygon points="20,16 30,22 30,34 20,40 10,34 10,22" fill="none" stroke="${accent}" stroke-width="1.2" opacity="0.7"/>
  <text x="80" y="37" font-family="'Helvetica Neue',Arial,sans-serif" font-size="13" font-weight="bold" fill="${textColor}" text-anchor="middle">${name}</text>
  <text x="80" y="56" font-family="'Helvetica Neue',Arial,sans-serif" font-size="8" fill="${scheme === "light" ? "#526173" : "rgba(255,255,255,0.5)"}" text-anchor="middle" letter-spacing="1">CONAJOMX RED</text>
</svg>`
}

function mexicoSpainVisual() {
  const id = Math.random().toString(36).slice(2, 8)
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="600" height="400">
  <defs>
    <linearGradient id="ms${id}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#071D3A"/>
      <stop offset="50%" stop-color="#0e2d44"/>
      <stop offset="100%" stop-color="#EEF3FB"/>
    </linearGradient>
  </defs>
  <rect width="600" height="400" fill="url(#ms${id})"/>
  <!-- Left dark section patterns -->
  <pattern id="mshex${id}" x="0" y="0" width="50" height="57" patternUnits="userSpaceOnUse">
    <polygon points="25,2 47,14 47,38 25,50 3,38 3,14" fill="none" stroke="#1FE9E1" stroke-width="0.5" opacity="0.15"/>
  </pattern>
  <rect width="300" height="400" fill="url(#mshex${id})"/>
  <!-- MX flag stripes (simplified) -->
  <rect x="30" y="60" width="8" height="50" rx="1" fill="#006847"/>
  <rect x="38" y="60" width="8" height="50" rx="1" fill="#FFFFFF"/>
  <rect x="46" y="60" width="8" height="50" rx="1" fill="#CE1126"/>
  <text x="70" y="94" font-family="'Helvetica Neue',Arial,sans-serif" font-size="14" font-weight="bold" fill="white">México</text>
  <!-- ES flag stripes -->
  <rect x="450" y="60" width="8" height="50" rx="1" fill="#c60b1e"/>
  <rect x="458" y="60" width="8" height="50" rx="1" fill="#ffc400"/>
  <rect x="466" y="60" width="8" height="50" rx="1" fill="#c60b1e"/>
  <text x="490" y="94" font-family="'Helvetica Neue',Arial,sans-serif" font-size="14" font-weight="bold" fill="#071D3A">España</text>
  <!-- Connection arc -->
  <path d="M 120 200 Q 300 80 480 200" fill="none" stroke="#1FE9E1" stroke-width="2" stroke-dasharray="8,4" opacity="0.7"/>
  <!-- Connection dots -->
  <circle cx="120" cy="200" r="6" fill="#1FE9E1" opacity="0.8"/>
  <circle cx="300" cy="128" r="4" fill="#1FE9E1" opacity="0.6"/>
  <circle cx="480" cy="200" r="6" fill="#1FE9E1" opacity="0.8"/>
  <!-- Center label -->
  <text x="300" y="300" font-family="'Helvetica Neue',Arial,sans-serif" font-size="18" font-weight="bold" fill="#071D3A" text-anchor="middle">México · España</text>
  <text x="300" y="324" font-family="'Helvetica Neue',Arial,sans-serif" font-size="11" fill="#526173" text-anchor="middle" letter-spacing="1">ALIANZA ESTRATÉGICA</text>
  <!-- Top bar -->
  <rect x="0" y="0" width="600" height="5" fill="#1FE9E1" opacity="0.8"/>
</svg>`
}

// --- Asset definitions -------------------------------------------------------

const assets = [
  [join(base, "logo", "logo-conajomx.svg"), logoSvg()],

  [join(base, "hero", "hero-01.svg"),
    heroBg("Agenda Internacional 2026", "G7 · G20 · OCDE · VivaTech · Harvard", "🌍", true)],
  [join(base, "hero", "hero-02.svg"),
    heroBg("México • España", "Alianza estratégica bilateral", "🌉", false)],
  [join(base, "hero", "hero-03.svg"),
    heroBg("Liderazgo Empresarial", "CNEM · Consejo Nacional de Empresarios", "💼", false)],

  [join(base, "gallery", "gallery-01.svg"), galleryImg("Líderes en acción", "🏛️", true)],
  [join(base, "gallery", "gallery-02.svg"), galleryImg("Agenda internacional", "🌍", true)],
  [join(base, "gallery", "gallery-03.svg"), galleryImg("Vinculación empresarial", "🤝", false)],
  [join(base, "gallery", "gallery-04.svg"), galleryImg("México • España", "🇪🇸", true)],
  [join(base, "gallery", "gallery-05.svg"), galleryImg("CNEM", "💼", true)],
  [join(base, "gallery", "gallery-06.svg"), galleryImg("Foros globales", "🌐", true)],

  [join(base, "news", "news-01.svg"),
    newsImg("Agenda Verde", "COP31 · Sustentabilidad · Clima", "🌿", "green")],
  [join(base, "news", "news-02.svg"),
    newsImg("México · España", "Cooperación bilateral activa", "🇪🇸", "light")],
  [join(base, "news", "news-03.svg"),
    newsImg("Liderazgo", "CONAJOMX · Reconocimientos 2026", "🏆", "dark")],

  [join(base, "generated", "cnem-visual.svg"),
    generatedVisual("Consejo Nacional de Empresarios", "CNEM · Empresas · Impacto", "💼")],
  [join(base, "generated", "mexico-spain-visual.svg"), mexicoSpainVisual()],
  [join(base, "generated", "legisladores-visual.svg"),
    generatedVisual("Legisladores y Alcaldes", "Estado Abierto · Gobernanza · Democracia", "⚖️", "#1FE9E1", "#071D3A", "#103a6b")],

  [join(base, "affiliates", "affiliate-01.svg"), affiliateLogo("Grupo MX", "dark")],
  [join(base, "affiliates", "affiliate-02.svg"), affiliateLogo("ImpulsaMX", "gradient")],
  [join(base, "affiliates", "affiliate-03.svg"), affiliateLogo("ConnectMex", "dark")],
  [join(base, "affiliates", "affiliate-04.svg"), affiliateLogo("Alianza CNEM", "light")],
  [join(base, "affiliates", "affiliate-05.svg"), affiliateLogo("VínculoMX", "dark")],
  [join(base, "affiliates", "affiliate-06.svg"), affiliateLogo("ProEmpresa", "gradient")],
]

// --- Main -------------------------------------------------------------------

console.log("\n📦 CONAJOMX — Ensuring default assets…\n")
let created = 0
for (const [path, content] of assets) {
  const existed = existsSync(path)
  write(path, content)
  if (!existed) created++
}

if (created === 0) {
  console.log("  ✔  All assets already present — nothing to create.\n")
} else {
  console.log(`\n✨ Done! Created ${created} new asset(s).\n`)
}
