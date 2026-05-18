"use client"

import { useEffect, useRef } from "react"

interface BrandAnimatedBackgroundProps {
  variant?: "hero" | "section" | "dark"
  className?: string
}

export function BrandAnimatedBackground({
  variant = "hero",
  className = "",
}: BrandAnimatedBackgroundProps) {
  const isDark = variant === "dark"

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Base gradient */}
      {variant === "hero" && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 12% 18%, rgba(31,233,225,0.18) 0%, transparent 38%)," +
              "radial-gradient(circle at 88% 8%, rgba(10,45,82,0.10) 0%, transparent 35%)," +
              "radial-gradient(circle at 60% 80%, rgba(31,233,225,0.08) 0%, transparent 40%)," +
              "linear-gradient(180deg, #ffffff 0%, #F5FAFF 100%)",
          }}
        />
      )}
      {variant === "section" && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 80% 20%, rgba(31,233,225,0.10) 0%, transparent 40%)," +
              "radial-gradient(circle at 20% 80%, rgba(10,45,82,0.06) 0%, transparent 40%)," +
              "linear-gradient(135deg, #F5FAFF 0%, #ffffff 100%)",
          }}
        />
      )}
      {variant === "dark" && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 15% 50%, rgba(31,233,225,0.12) 0%, transparent 40%)," +
              "radial-gradient(circle at 85% 20%, rgba(31,233,225,0.08) 0%, transparent 35%)," +
              "linear-gradient(135deg, #071D3A 0%, #0A2D52 100%)",
          }}
        />
      )}

      {/* Blobs */}
      <div
        className="animate-blob absolute rounded-full"
        style={{
          width: 520,
          height: 520,
          top: "-120px",
          left: "-80px",
          background: isDark
            ? "rgba(31,233,225,0.07)"
            : "rgba(31,233,225,0.14)",
          filter: "blur(72px)",
        }}
      />
      <div
        className="animate-blob-slow absolute rounded-full"
        style={{
          width: 400,
          height: 400,
          top: "30%",
          right: "-100px",
          background: isDark
            ? "rgba(10,45,82,0.18)"
            : "rgba(10,45,82,0.08)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="animate-blob-delay absolute rounded-full"
        style={{
          width: 300,
          height: 300,
          bottom: "-60px",
          left: "35%",
          background: isDark
            ? "rgba(31,233,225,0.05)"
            : "rgba(31,233,225,0.10)",
          filter: "blur(60px)",
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(circle, ${isDark ? "#1FE9E1" : "#0A2D52"} 1.2px, transparent 1.2px)`,
          backgroundSize: "36px 36px",
        }}
      />

      {/* Hexagon SVG decoration — subtle */}
      <svg
        className="absolute right-8 top-16 opacity-[0.055]"
        width="160"
        height="180"
        viewBox="0 0 160 180"
        fill="none"
      >
        {[0, 1, 2].map((row) =>
          [0, 1, 2].map((col) => {
            const x = col * 50 + (row % 2 === 0 ? 0 : 25)
            const y = row * 45
            return (
              <polygon
                key={`${row}-${col}`}
                points={`${x + 22},${y} ${x + 44},${y + 12} ${x + 44},${y + 36} ${x + 22},${y + 48} ${x},${y + 36} ${x},${y + 12}`}
                stroke={isDark ? "#1FE9E1" : "#0A2D52"}
                strokeWidth="1"
                fill="none"
              />
            )
          })
        )}
      </svg>

      <svg
        className="absolute left-4 bottom-12 opacity-[0.04]"
        width="100"
        height="120"
        viewBox="0 0 100 120"
        fill="none"
      >
        {[0, 1].map((row) =>
          [0, 1].map((col) => {
            const x = col * 50 + (row % 2 === 0 ? 0 : 25)
            const y = row * 45
            return (
              <polygon
                key={`b-${row}-${col}`}
                points={`${x + 22},${y} ${x + 44},${y + 12} ${x + 44},${y + 36} ${x + 22},${y + 48} ${x},${y + 36} ${x},${y + 12}`}
                stroke={isDark ? "#1FE9E1" : "#1FE9E1"}
                strokeWidth="1"
                fill="none"
              />
            )
          })
        )}
      </svg>

      {/* Diagonal line accents */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.025]"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="network-lines"
            x="0"
            y="0"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <line x1="0" y1="80" x2="80" y2="0" stroke={isDark ? "#1FE9E1" : "#0A2D52"} strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#network-lines)" />
      </svg>
    </div>
  )
}
