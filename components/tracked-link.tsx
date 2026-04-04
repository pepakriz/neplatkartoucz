"use client"

import * as React from "react"
import Link from "next/link"
import { track } from "@vercel/analytics"

type EventValue = string | number | boolean | null

type TrackedLinkProps = React.ComponentProps<typeof Link> & {
  eventName: string
  eventProperties?: Record<string, EventValue>
}

export function TrackedLink({
  eventName,
  eventProperties,
  href,
  onClick,
  ...props
}: TrackedLinkProps) {
  const hrefValue = typeof href === "string" ? href : href.toString()

  return (
    <Link
      href={href}
      onClick={(event) => {
        onClick?.(event)

        if (!event.defaultPrevented) {
          track(eventName, {
            href: hrefValue,
            ...eventProperties,
          })
        }
      }}
      {...props}
    />
  )
}
