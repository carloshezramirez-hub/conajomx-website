/**
 * CONAJOMX media assets
 * Place real images in public/assets/conajomx/ and update paths here.
 * Images with placeholder: true will show an elegant fallback until replaced.
 */

export const mediaAssets = {
  logo: {
    src: "/assets/conajomx/logos/logo-conajomx.svg",
    alt: "CONAJOMX — Consejo de Jóvenes Pro México",
    placeholder: true,
  },
  agendaInternacional: {
    src: "/assets/conajomx/agenda/agenda-internacional-2026.jpeg",
    alt: "Agenda Internacional CONAJOMX 2026",
    placeholder: false, // Will be provided by client
  },
  mesaDirectivaCNEM: {
    src: "/assets/conajomx/leaders/mesa-directiva-cnem-2026.jpeg",
    alt: "Mesa Directiva CNEM 2026",
    placeholder: false, // Will be provided by client
  },
  gallery: [
    {
      src: "/assets/conajomx/gallery/evento-01.jpg",
      alt: "CONAJOMX — Encuentro institucional",
      placeholder: true,
    },
    {
      src: "/assets/conajomx/gallery/evento-02.jpg",
      alt: "CONAJOMX España — Actividades Madrid",
      placeholder: true,
    },
    {
      src: "/assets/conajomx/gallery/evento-03.jpg",
      alt: "Asamblea General CONAJOMX",
      placeholder: true,
    },
    {
      src: "/assets/conajomx/gallery/evento-04.jpg",
      alt: "CNEM — Sesión empresarial",
      placeholder: true,
    },
  ],
}

export type MediaAsset = {
  src: string
  alt: string
  placeholder: boolean
}
