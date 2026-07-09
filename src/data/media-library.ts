export type MediaCategory = "fitur" | "encuentro" | "medalla" | "turismo" | "liderazgo" | "evento"

export type MediaItem = {
  id: string
  src: string
  alt: string
  caption: string
  category: MediaCategory
  categoryLabel: string
  year: number
  featured: boolean
  relatedPage?: string
  eventName?: string
}

export const mediaLibrary: MediaItem[] = [
  // FITUR 2026 Madrid — 4 fotos
  {
    id: "fitur-2026-01",
    src: "/assets/conajomx/gallery/fitur-2026-01.webp",
    alt: "CONAJOMX inaugura oficinas en España durante FITUR 2026 — Feria Internacional de Turismo, Madrid",
    caption: "Inauguración de oficinas CONAJOMX España en FITUR 2026, Madrid",
    category: "fitur",
    categoryLabel: "FITUR 2026 · Madrid",
    year: 2026,
    featured: true,
    relatedPage: "/espana",
    eventName: "FITUR 2026",
  },
  {
    id: "fitur-2026-02",
    src: "/assets/conajomx/gallery/fitur-2026-02.webp",
    alt: "CONAJOMX representa a México como País Invitado en FITUR 2026 — Madrid, España",
    caption: "México como País Invitado en FITUR 2026 — presencia de CONAJOMX",
    category: "fitur",
    categoryLabel: "FITUR 2026 · Madrid",
    year: 2026,
    featured: true,
    relatedPage: "/espana",
    eventName: "FITUR 2026",
  },
  {
    id: "fitur-2026-03",
    src: "/assets/conajomx/gallery/fitur-2026-03.webp",
    alt: "Delegación CONAJOMX en el pabellón de México en FITUR 2026, Madrid, España",
    caption: "Delegación CONAJOMX en el pabellón más grande de México en FITUR",
    category: "fitur",
    categoryLabel: "FITUR 2026 · Madrid",
    year: 2026,
    featured: false,
    relatedPage: "/espana",
    eventName: "FITUR 2026",
  },
  {
    id: "fitur-2026-04",
    src: "/assets/conajomx/gallery/fitur-2026-04.webp",
    alt: "Encuentro bilateral México-España — CONAJOMX en FITUR 2026",
    caption: "Encuentro con empresarios y representantes institucionales en FITUR 2026",
    category: "fitur",
    categoryLabel: "FITUR 2026 · Madrid",
    year: 2026,
    featured: false,
    relatedPage: "/espana",
    eventName: "FITUR 2026",
  },
  // Encuentro Nacional — Senado de la República
  {
    id: "encuentro-legisladores-01",
    src: "/assets/conajomx/gallery/encuentro-nacional-legisladores-01.webp",
    alt: "Encuentro Nacional de Legisladores, Alcaldes, Síndicos y Empresarios en el Senado de la República — CONAJOMX",
    caption: "Encuentro Nacional de Legisladores y Alcaldes en el Senado de la República",
    category: "encuentro",
    categoryLabel: "Encuentro Nacional",
    year: 2024,
    featured: true,
    relatedPage: "/legisladores-y-alcaldes",
    eventName: "Encuentro Nacional de Legisladores y Alcaldes",
  },
  {
    id: "encuentro-legisladores-02",
    src: "/assets/conajomx/gallery/encuentro-nacional-legisladores-02.webp",
    alt: "Mesa de trabajo CONAJOMX — Consejo Nacional de Legisladores, Alcaldes y Empresarios de México",
    caption: "Mesa de trabajo del Consejo Nacional de Legisladores, Alcaldes y Empresarios",
    category: "encuentro",
    categoryLabel: "Encuentro Nacional",
    year: 2024,
    featured: false,
    relatedPage: "/legisladores-y-alcaldes",
    eventName: "Encuentro Nacional de Legisladores y Alcaldes",
  },
  // Medalla al Mérito Empresarial CNEM
  {
    id: "medalla-merito-01",
    src: "/assets/conajomx/gallery/medalla-merito-empresarial-01.webp",
    alt: "Ceremonia de entrega de la Medalla al Mérito Empresarial CONAJOMX — Consejo Nacional de Empresarios de México",
    caption: "Ceremonia de la Medalla al Mérito Empresarial del CNEM",
    category: "medalla",
    categoryLabel: "Medalla al Mérito CNEM",
    year: 2024,
    featured: true,
    relatedPage: "/cnem",
    eventName: "Medalla al Mérito Empresarial",
  },
  {
    id: "medalla-merito-02",
    src: "/assets/conajomx/gallery/medalla-merito-empresarial-02.webp",
    alt: "Reconocimiento al Mérito Empresarial — CONAJOMX CNEM, líderes empresariales de México",
    caption: "Reconocimiento a empresarios destacados en la Medalla al Mérito CNEM",
    category: "medalla",
    categoryLabel: "Medalla al Mérito CNEM",
    year: 2024,
    featured: false,
    relatedPage: "/cnem",
    eventName: "Medalla al Mérito Empresarial",
  },
  // Secretaría de Turismo
  {
    id: "secretaria-turismo-01",
    src: "/assets/conajomx/gallery/secretaria-turismo-01.webp",
    alt: "CONAJOMX en reunión institucional con la Secretaría de Turismo de México",
    caption: "CONAJOMX fortalece alianza con la Secretaría de Turismo de México",
    category: "turismo",
    categoryLabel: "Turismo México",
    year: 2024,
    featured: true,
    relatedPage: "/noticias",
    eventName: "Reunión con Secretaría de Turismo",
  },
  {
    id: "secretaria-turismo-02",
    src: "/assets/conajomx/gallery/secretaria-turismo-02.webp",
    alt: "Agenda de colaboración CONAJOMX y Secretaría de Turismo de México",
    caption: "Agenda de colaboración CONAJOMX — Secretaría de Turismo",
    category: "turismo",
    categoryLabel: "Turismo México",
    year: 2024,
    featured: false,
    relatedPage: "/noticias",
    eventName: "Reunión con Secretaría de Turismo",
  },
  {
    id: "secretaria-turismo-03",
    src: "/assets/conajomx/gallery/secretaria-turismo-03.webp",
    alt: "CONAJOMX impulsa el sector turístico mexicano en reunión con Secretaría de Turismo",
    caption: "Diálogo institucional para impulsar el turismo mexicano",
    category: "turismo",
    categoryLabel: "Turismo México",
    year: 2024,
    featured: false,
    relatedPage: "/noticias",
    eventName: "Reunión con Secretaría de Turismo",
  },
  {
    id: "turismo-puebla-01",
    src: "/assets/conajomx/gallery/secretaria-turismo-puebla.webp",
    alt: "CONAJOMX en evento de promoción turística de Puebla — Pueblos Mágicos de México",
    caption: "CONAJOMX presente en la promoción de Puebla y los Pueblos Mágicos de México",
    category: "turismo",
    categoryLabel: "Turismo México",
    year: 2024,
    featured: false,
    relatedPage: "/noticias",
    eventName: "Turismo Puebla",
  },
  // Liderazgo institucional
  {
    id: "foto-grupal-01",
    src: "/assets/conajomx/people/foto-grupal-conajomx.webp",
    alt: "Foto grupal CONAJOMX — Mesa Directiva, líderes políticos y empresarios de México",
    caption: "Mesa Directiva y líderes de CONAJOMX",
    category: "liderazgo",
    categoryLabel: "Liderazgo",
    year: 2025,
    featured: true,
    relatedPage: "/liderazgo",
    eventName: "Foto institucional CONAJOMX",
  },
  // Histórico
  {
    id: "evento-agosto-2021-01",
    src: "/assets/conajomx/gallery/evento-agosto-2021.webp",
    alt: "CONAJOMX — evento institucional agosto 2021, liderazgo político y empresarial de México",
    caption: "Evento institucional CONAJOMX — agosto 2021",
    category: "evento",
    categoryLabel: "Histórico",
    year: 2021,
    featured: false,
    relatedPage: "/noticias",
    eventName: "Evento Agosto 2021",
  },
]

export const featuredMedia = mediaLibrary.filter((item) => item.featured)

export const galleryCategories: { id: MediaCategory | "todos"; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "fitur", label: "FITUR 2026" },
  { id: "encuentro", label: "Encuentro Nacional" },
  { id: "medalla", label: "Medalla CNEM" },
  { id: "turismo", label: "Turismo México" },
  { id: "liderazgo", label: "Liderazgo" },
  { id: "evento", label: "Histórico" },
]
