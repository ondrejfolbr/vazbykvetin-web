import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center font-body font-medium transition-colors duration-300 ease-in-out cursor-pointer select-none whitespace-nowrap outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-deep-plum [color:white] hover:bg-deep-plum-90 border border-transparent",
        outline:
          "bg-transparent text-deep-plum border border-deep-plum hover:bg-deep-plum-10",
        ghost:
          "bg-transparent text-deep-plum underline underline-offset-4 hover:bg-neutral-50 border border-transparent",
        accent:
          "bg-plum-50 [color:white] hover:bg-deep-plum-70 border border-transparent",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20",
        link: "text-deep-plum underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 text-body",
        sm: "h-9 px-4 text-body-sm",
        md: "h-11 px-6 text-body",
        lg: "h-13 px-8 text-body-lg",
        icon: "size-11",
        "icon-sm": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
