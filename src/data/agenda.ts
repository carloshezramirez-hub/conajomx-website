export type AgendaEvent = {
  country: string
  countryCode: string
  dateLabel: string
  month: string
  monthNum: number
  title: string
  type: string
}

export const agenda2026: AgendaEvent[] = [
  {
    country: "Francia",
    countryCode: "FR",
    dateLabel: "4 de marzo",
    month: "Marzo",
    monthNum: 3,
    title: "OECD Competition Open Day 2026",
    type: "Competencia",
  },
  {
    country: "Estados Unidos",
    countryCode: "US",
    dateLabel: "6 al 8 de marzo",
    month: "Marzo",
    monthNum: 3,
    title: "Mexico Conference 2026 (Harvard)",
    type: "Conferencia",
  },
  {
    country: "Países Bajos",
    countryCode: "NL",
    dateLabel: "27 y 28 de mayo",
    month: "Mayo",
    monthNum: 5,
    title: "OECD Global Forum on Local Development",
    type: "Foro",
  },
  {
    country: "Francia",
    countryCode: "FR",
    dateLabel: "5 de junio",
    month: "Junio",
    monthNum: 6,
    title: "10mo Forum des Affaires Mexique-France",
    type: "Foro empresarial",
  },
  {
    country: "Francia",
    countryCode: "FR",
    dateLabel: "15 al 17 de junio",
    month: "Junio",
    monthNum: 6,
    title: "Cumbre G7",
    type: "Cumbre",
  },
  {
    country: "Francia",
    countryCode: "FR",
    dateLabel: "17 al 20 de junio",
    month: "Junio",
    monthNum: 6,
    title: "VivaTech 2026",
    type: "Tecnología",
  },
  {
    country: "China",
    countryCode: "CN",
    dateLabel: "TBD (junio)",
    month: "Junio",
    monthNum: 6,
    title: "World Economic Forum, Annual Meeting of the New Champions",
    type: "Foro económico",
  },
  {
    country: "Francia",
    countryCode: "FR",
    dateLabel: "4 al 6 de noviembre",
    month: "Noviembre",
    monthNum: 11,
    title: "World Forum for Democracy",
    type: "Democracia",
  },
  {
    country: "Turquía",
    countryCode: "TR",
    dateLabel: "9 al 20 de noviembre",
    month: "Noviembre",
    monthNum: 11,
    title: "31ª United Nations Framework Convention on Climate Change (COP31)",
    type: "Clima",
  },
  {
    country: "Estados Unidos",
    countryCode: "US",
    dateLabel: "14 y 15 de diciembre",
    month: "Diciembre",
    monthNum: 12,
    title: "Cumbre G20",
    type: "Cumbre",
  },
]
