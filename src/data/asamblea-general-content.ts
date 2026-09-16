export type AsambleaSpeaker = {
  name: string
  role: string
  initials: string
  image?: string
}

export const asambleaUi = {
  eyebrow: "Convocatoria Oficial · Acceso Exclusivo de Consejo",
  kicker: "CONAJOMX presenta",
  title: "IX Asamblea General",
  titleAccent: "La noche que define el próximo capítulo de CONAJOMX",
  intro:
    "El máximo órgano de encuentro entre el sector político y empresarial de CONAJOMX. Legisladores, Alcaldes, Síndicos, Regidores y Empresarios se reúnen para fortalecer la vinculación y consolidar proyectos.",
  ctaRegister: "Quiero mi lugar",
  ctaSponsor: "Quiero ser sponsor",
  venue: "Ciudad de México",
  dateLabel: "26 de noviembre, 2026",
  dateISO: "2026-11-26T09:00:00-06:00",
  fee: "$2,000 MXN",
  feeLabel: "Cuota de recuperación por participante",
  bannerTitle: "Vinculación · Renovación · Visión Nacional",
  bannerSubtitle: "El encuentro anual que consolida al Consejo Político y Empresarial de México",
}

export const asambleaHighlights = [
  {
    emoji: "🗳️",
    title: "Renovación de Mesas Directivas",
    desc: "Renovación de la Mesa Directiva Nacional y cambio de Comisiones y Directiva de CONAJOMX.",
  },
  {
    emoji: "📜",
    title: "Entrega de Nombramientos Oficiales",
    desc: "Reconocimiento formal a los nuevos representantes políticos y empresariales de la organización.",
  },
  {
    emoji: "🏆",
    title: "Entrega de Reconocimientos",
    desc: "Distinciones a los liderazgos que impulsaron proyectos de impacto durante el ciclo anterior.",
  },
  {
    emoji: "🤝",
    title: "Networking Estratégico",
    desc: "Espacio de vinculación directa entre el Consejo Político y el Consejo Empresarial de CONAJOMX.",
  },
]

export const asambleaPrograma = [
  {
    time: "Apertura",
    title: "Registro y Bienvenida",
    desc: "Recepción de Legisladores, Alcaldes, Síndicos, Regidores y Empresarios miembros de CONAJOMX.",
  },
  {
    time: "Fase I",
    title: "Renovación de la Mesa Directiva",
    desc: "Presentación y toma de protesta de la nueva Mesa Directiva Nacional de CONAJOMX.",
  },
  {
    time: "Fase II",
    title: "Renovación de Comisiones",
    desc: "Actualización de comisiones de trabajo de CONAJOMX para el nuevo periodo.",
  },
  {
    time: "Fase III",
    title: "Entrega de Nombramientos Oficiales",
    desc: "Nombramiento protocolario a los nuevos representantes políticos y empresariales.",
  },
  {
    time: "Fase IV",
    title: "Entrega de Reconocimientos",
    desc: "Reconocimiento a trayectorias y proyectos destacados del Consejo Político y Empresarial.",
  },
  {
    time: "Clausura",
    title: "Networking Estratégico",
    desc: "Vinculación directa entre el Consejo Político y el Consejo Empresarial de CONAJOMX.",
  },
]

export const asambleaSpeakers: AsambleaSpeaker[] = [
  {
    name: "Ronaldo Elías Águila",
    role: "Presidente Fundador de CONAJOMX",
    initials: "REA",
    image: "/assets/conajomx/people/ronaldo-elias-aguila.webp",
  },
  {
    name: "Francisco Javier Porras Velázquez",
    role: "Presidente del Consejo de Empresarios de CONAJOMX (CNEM) · Grupo CYSE",
    initials: "FPV",
    image: "/assets/conajomx/people/javier-porras-velazquez.webp",
  },
  {
    name: "Daniel Olea Montes",
    role: "Vicepresidente de CONAJOMX · Mayorazgo Wealth Management",
    initials: "DOM",
    image: "/assets/conajomx/people/daniel-olea-montes.webp",
  },
  {
    name: "Eduardo Solano González",
    role: "Secretario de Economía CNEM 2026 · NSM Ecosistemas Circulares",
    initials: "ESG",
    image: "/assets/conajomx/people/eduardo-solano-gonzalez.webp",
  },
]

export const asambleaGallery = [
  "/assets/conajomx/asamblea-general/asamblea-01.webp",
  "/assets/conajomx/asamblea-general/asamblea-02.webp",
  "/assets/conajomx/asamblea-general/asamblea-03.webp",
  "/assets/conajomx/asamblea-general/asamblea-04.webp",
  "/assets/conajomx/asamblea-general/asamblea-05.webp",
  "/assets/conajomx/asamblea-general/asamblea-06.webp",
  "/assets/conajomx/asamblea-general/asamblea-07.webp",
  "/assets/conajomx/asamblea-general/asamblea-08.webp",
  "/assets/conajomx/asamblea-general/asamblea-09.webp",
  "/assets/conajomx/asamblea-general/asamblea-10.webp",
]

export const asambleaSponsor = {
  eyebrow: "Alianzas Estratégicas",
  title: "Sé sponsor de la IX Asamblea General",
  desc:
    "Posiciona tu marca ante el Consejo Político y Empresarial de CONAJOMX: Legisladores, Alcaldes, Síndicos, Regidores y Empresarios de todo México reunidos en un mismo espacio.",
  benefits: [
    "Visibilidad de marca ante el máximo órgano de encuentro de CONAJOMX",
    "Networking directo con tomadores de decisión políticos y empresariales",
    "Presencia en materiales oficiales del evento nacional",
  ],
  cta: "Quiero ser sponsor",
}
