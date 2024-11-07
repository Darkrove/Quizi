import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva("rounded-md no-underline group-hover:no-underline flex justify-center items-center gap-1", {
  variants: {
    variant: {
      default: "bg-teal-100 text-teal-800 dark:bg-teal-800 dark:text-teal-100",
      destructive: "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100",
      outline: "bg-transparent border border-stone-800",
      info: "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100",
    },
    size: {
      sm: "text-xs px-1.5 py-0.5",
      md: "text-sm px-2 py-0.5",
      lg: "text-base px-3 py-0.5",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
