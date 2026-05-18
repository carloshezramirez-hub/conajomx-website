import Link from "next/link"
import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import type { VariantProps } from "class-variance-authority"

type ButtonLinkProps = ComponentProps<typeof Link> &
  VariantProps<typeof buttonVariants>

export function ButtonLink({
  href,
  variant,
  size,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </Link>
  )
}

type AnchorButtonProps = ComponentProps<"a"> &
  VariantProps<typeof buttonVariants>

export function AnchorButton({
  variant,
  size,
  className,
  children,
  ...props
}: AnchorButtonProps) {
  return (
    <a
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </a>
  )
}
