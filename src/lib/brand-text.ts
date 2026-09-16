import type { CSSProperties } from "react"

/** Same navy-to-cyan brand gradient text treatment used on the main homepage hero. */
export const brandGradientTextStyle: CSSProperties = {
  background: "linear-gradient(135deg, #071D3A 0%, #0A2D52 55%, #1FE9E1 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  color: "transparent",
}
