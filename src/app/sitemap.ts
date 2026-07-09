import type { MetadataRoute } from "next"
import { siteConfig } from "@/config/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url
  const routes = [
    { path: "/", priority: 1.0 },
    { path: "/agenda", priority: 0.9 },
    { path: "/liderazgo", priority: 0.8 },
    { path: "/cnem", priority: 0.8 },
    { path: "/espana", priority: 0.8 },
    { path: "/legisladores-y-alcaldes", priority: 0.8 },
    { path: "/afiliacion", priority: 0.9 },
    { path: "/galeria", priority: 0.8 },
    { path: "/noticias", priority: 0.7 },
    { path: "/contacto", priority: 0.7 },
  ]

  return routes.map(({ path, priority }) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority,
  }))
}
