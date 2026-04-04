"use client"

import { useEffect, useRef } from "react"
import { track } from "@vercel/analytics"

const milestones = [25, 50, 75, 100] as const

type PageEngagementTrackerProps = {
  page: string
}

export function PageEngagementTracker({ page }: PageEngagementTrackerProps) {
  const trackedMilestones = useRef(new Set<number>())

  useEffect(() => {
    function handleScroll() {
      const { scrollHeight, clientHeight } = document.documentElement
      const scrollableHeight = scrollHeight - clientHeight

      if (scrollableHeight <= 0) {
        if (!trackedMilestones.current.has(100)) {
          track("scroll_depth", { page, percent: 100 })
          trackedMilestones.current.add(100)
        }

        return
      }

      const currentPercent = Math.round((window.scrollY / scrollableHeight) * 100)

      for (const milestone of milestones) {
        if (currentPercent >= milestone && !trackedMilestones.current.has(milestone)) {
          track("scroll_depth", { page, percent: milestone })
          trackedMilestones.current.add(milestone)
        }
      }
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [page])

  return null
}
