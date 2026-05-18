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
  fallbackText?: string
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
  fallbackText,
  fallbackIcon = "📷",
  objectFit = "cover",
}: SafeImageProps) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#F5FAFF] to-[#D9FFFC] border border-[#DCE8F2] ${className}`}
        style={!fill && width && height ? { width, height } : undefined}
        aria-label={alt}
      >
        <span className="text-3xl mb-2 opacity-50">{fallbackIcon}</span>
        {fallbackText && (
          <p className="text-[#526173] text-xs text-center px-3 leading-tight">
            {fallbackText}
          </p>
        )}
        {!fallbackText && (
          <p className="text-[#526173] text-xs text-center px-3 leading-tight opacity-60">
            {alt}
          </p>
        )}
      </div>
    )
  }

  const imgProps = fill
    ? {
        fill: true as const,
        style: { objectFit },
      }
    : {
        width: width ?? 800,
        height: height ?? 600,
        style: { objectFit },
      }

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
