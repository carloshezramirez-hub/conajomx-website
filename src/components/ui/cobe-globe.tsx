"use client"

import { useEffect, useRef } from "react"
import createGlobe, { type COBEOptions } from "cobe"

const MARKERS: COBEOptions["markers"] = [
  { location: [19.4326, -99.1332], size: 0.08 }, // CDMX
  { location: [21.1619, -86.8515], size: 0.06 }, // Cancún
  { location: [40.4168, -3.7038], size: 0.07 },  // Madrid
]

export function CobeGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let phi = 0.6
    const dpr = Math.min(window.devicePixelRatio, 2)

    const globe = createGlobe(canvas, {
      devicePixelRatio: dpr,
      width: 600 * dpr,
      height: 600 * dpr,
      phi,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.02, 0.08, 0.16],
      markerColor: [0.12, 0.9, 0.88],
      glowColor: [0.02, 0.12, 0.22],
      markers: MARKERS,
    })

    function animate() {
      phi += 0.003
      globe.update({ phi })
      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
      globe.destroy()
    }
  }, [])

  return (
    <div className="relative flex items-center justify-center w-full aspect-square max-w-[500px] mx-auto">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-90"
        style={{ aspectRatio: "1 / 1" }}
      />
    </div>
  )
}
