export type NavChild = { label: string; href: string }

export type NavItem = {
  label: string
  href: string
  children?: NavChild[]
}

export const mainNav: NavItem[] = [
  { label: "Nosotros", href: "/#nosotros" },
  {
    label: "Liderazgo",
    href: "/liderazgo",
    children: [
      { label: "CNEM Empresarios", href: "/cnem" },
      { label: "España", href: "/espana" },
      { label: "Legisladores y Alcaldes", href: "/legisladores-y-alcaldes" },
    ],
  },
  { label: "Asamblea", href: "/asamblea-general" },
  { label: "Noticias", href: "/noticias" },
  { label: "Contacto", href: "/contacto" },
]
