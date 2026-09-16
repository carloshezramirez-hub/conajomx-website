"use client"

import { useState, useEffect } from "react"

function getTimeLeft(target: Date) {
  const diff = target.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  }
}

function pad(n: number) {
  return String(n).padStart(2, "0")
}

export function EventCountdown({
  targetDate,
  accentClassName = "text-[#1FE9E1]",
  boxClassName = "bg-white/[0.04] border border-[#1FE9E1]/20",
  labelClassName = "text-[#8EA4BD]",
  size = "md",
}: {
  targetDate: string
  accentClassName?: string
  boxClassName?: string
  labelClassName?: string
  size?: "sm" | "md"
}) {
  const target = new Date(targetDate)
  const [time, setTime] = useState(getTimeLeft(target))
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const units = [
    { label: "Días", value: time.days },
    { label: "Horas", value: time.hours },
    { label: "Min", value: time.minutes },
    { label: "Seg", value: time.seconds },
  ]

  const boxSize = size === "sm" ? "w-[56px] sm:w-[72px] h-[56px] sm:h-[72px]" : "w-[72px] sm:w-[100px] h-[72px] sm:h-[100px]"
  const textSize = size === "sm" ? "text-lg sm:text-2xl" : "text-2xl sm:text-4xl"

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4">
      {units.map(({ label, value }) => (
        <div key={label} className="text-center">
          <div className={`${boxSize} rounded-2xl ${boxClassName} flex items-center justify-center mb-1.5 sm:mb-2`}>
            <span className={`${textSize} font-black ${accentClassName} tabular-nums`}>
              {mounted ? pad(value) : "00"}
            </span>
          </div>
          <p className={`${labelClassName} text-[9px] sm:text-xs uppercase tracking-wider`}>
            {label}
          </p>
        </div>
      ))}
    </div>
  )
}
