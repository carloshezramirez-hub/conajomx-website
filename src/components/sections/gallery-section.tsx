"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SafeImage } from "@/components/ui/safe-image"
import { mediaLibrary, galleryCategories } from "@/data/media-library"
import type { MediaCategory } from "@/data/media-library"

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<MediaCategory | "todos">("todos")

  const filtered =
    activeCategory === "todos"
      ? mediaLibrary
      : mediaLibrary.filter((item) => item.category === activeCategory)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-[#071D3A] text-white shadow-sm"
                  : "bg-[#F5FAFF] border border-[#DCE8F2] text-[#526173] hover:border-[#071D3A]/30 hover:text-[#071D3A]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, delay: Math.min(i * 0.04, 0.3) }}
                className="group relative rounded-2xl overflow-hidden border border-[#DCE8F2] shadow-sm hover:shadow-[0_8px_32px_rgba(10,45,82,0.12)] transition-all aspect-[4/3]"
              >
                <SafeImage
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071D3A]/80 via-[#071D3A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Category badge */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#071D3A] text-xs font-semibold border border-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.categoryLabel}
                </span>
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-xs font-medium leading-snug">
                    {item.caption}
                  </p>
                  <p className="text-white/60 text-[11px] mt-1">{item.year}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-[#526173] py-16">No hay fotos en esta categoría.</p>
        )}
      </div>
    </section>
  )
}
