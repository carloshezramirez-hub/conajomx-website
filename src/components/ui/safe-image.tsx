"use client"

import Image from "next/image"
import { useState } from "react"

interface SafeImageProps {
  src: string
  alt: string
  className?: string
  fill?: boolean
  width?: number
  height?: number
  priority?: boolean
  /** Short headline shown in the fallback card */
  fallbackTitle?: string
  /** Secondary line shown below the title */
  fallbackSubtitle?: string
  /** Legacy: same as fallbackTitle */
  fallbackText?: string
  /** Emoji shown in the fallback (default 📷) */
  fallbackIcon?: string
  objectFit?: "cover" | "contain"
}

export function SafeImage({
  src,
  alt,
  className = "",
  fill = false,
  width,
  height,
  priority = false,
  fallbackTitle,
  fallbackSubtitle,
  fallbackText,
  fallbackIcon = "📷",
  objectFit = "cover",
}: SafeImageProps) {
  const [error, setError] = useState(false)

  const title = fallbackTitle ?? fallbackText ?? alt
  const subtitle = fallbackSubtitle

  if (error) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center overflow-hidden ${className}`}
        style={!fill && width && height ? { width, height } : undefined}
        aria-label={alt}
      >
        {/* Premium gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #071D3A 0%, #0A2D52 40%, #1a4a7a 70%, #0e3d5c 100%)",
          }}
        />
        {/* Hexagon pattern overlay */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id={`hex-${src.slice(-8)}`} x="0" y="0" width="40" height="46" patternUnits="userSpaceOnUse">
              <polygon
                points="20,2 38,11 38,35 20,44 2,35 2,11"
                fill="none"
                stroke="#1FE9E1"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#hex-${src.slice(-8)})`} />
        </svg>
        {/* Glow dot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#1FE9E1]/10 blur-2xl" />
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-2 px-4 text-center">
          <span className="text-3xl opacity-80">{fallbackIcon}</span>
          <p className="text-white font-bold text-sm leading-snug">{title}</p>
          {subtitle && (
            <p className="text-white/60 text-xs leading-snug">{subtitle}</p>
          )}
          <div className="mt-1 h-0.5 w-12 rounded-full bg-[#1FE9E1]/60" />
        </div>
      </div>
    )
  }

  const imgProps = fill
    ? { fill: true as const, style: { objectFit } }
    : { width: width ?? 800, height: height ?? 600, style: { objectFit } }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      priority={priority}
      onError={() => setError(true)}
      {...imgProps}
    />
  )
}
