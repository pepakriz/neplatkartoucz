import type { ReactNode } from "react"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

type AccordionProps = {
  items: {
    value: string
    title: string
    content: ReactNode
  }[]
  className?: string
}

export function Accordion({ items, className }: AccordionProps) {
  return (
    <div className={cn("w-full", className)}>
      {items.map((item) => (
        <details
          key={item.value}
          className="group border-b border-border/60"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base font-medium transition-colors hover:text-foreground/70 [&::-webkit-details-marker]:hidden">
            <span>{item.title}</span>
            <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
          </summary>

          <div className="pb-5 pt-1 text-sm">
            {item.content}
          </div>
        </details>
      ))}
    </div>
  )
}
