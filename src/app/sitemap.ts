import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://conajomx.org"
  const now = new Date()

  return [
    { url: base, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${base}/agenda`, lastModified: now, changeFrequency: "daily", priority: 0.95 },
    { url: `${base}/noticias`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/afiliacion`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/cnem`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/liderazgo`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/espana`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/legisladores-y-alcaldes`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/galeria`, lastModified: now, changeFrequency: "weekly", priority: 0.75 },
    { url: `${base}/contacto`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ]
}
