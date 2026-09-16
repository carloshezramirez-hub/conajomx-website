import { Playfair_Display, Cormorant_Garamond, Fraunces } from "next/font/google"

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
})

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["italic"],
  variable: "--font-cormorant",
})

export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal"],
  variable: "--font-fraunces",
})
