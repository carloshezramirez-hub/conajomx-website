export const siteConfig = {
  name: "CONAJOMX",
  fullName: "Consejo de Jóvenes Pro México, A.C.",
  tagline: "Liderazgo político y empresarial para México y el mundo",
  description:
    "CONAJOMX conecta líderes políticos, empresarios e instituciones para impulsar alianzas, políticas públicas, inversión, competitividad y proyectos de impacto entre México, España y el mundo.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://conajomx.org",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "conajomex@gmail.com",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
  // TODO: Confirmar fecha oficial de celebración de 10 años con el cliente
  anniversaryDate:
    process.env.NEXT_PUBLIC_ANNIVERSARY_DATE || "2028-04-12T00:00:00-06:00",
  socials: {
    facebook: "https://www.facebook.com/conajomx",
    instagram: "https://www.instagram.com/conajomx",
    twitter: "https://x.com/CONAJOMX",
    linkedin: "https://mx.linkedin.com/company/conajomx",
  },
  addresses: [
    {
      label: "Ciudad de México",
      address: "Presidente Masaryk, Polanco, Miguel Hidalgo, CDMX",
    },
    {
      label: "Madrid, España",
      address: "Plaza de las Cortes 5, Madrid, España",
    },
    {
      label: "Tlaxcala (Oficina Central)",
      address: "Prol. Porfirio Díaz 41 8 B, Calle 1, Vicente Guerrero, Tlaxcala",
    },
  ],
}
