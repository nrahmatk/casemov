"use client"

import { useState, useEffect } from "react"

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if window exists (client-side)
    if (typeof window !== "undefined") {
      // Initial check
      setIsMobile(window.innerWidth < 768)

      // Add event listener for resize
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768)
      }

      // Throttle the resize event to improve performance
      let resizeTimer: string | number | NodeJS.Timeout | undefined
      const throttledResize = () => {
        if (resizeTimer) clearTimeout(resizeTimer)
        resizeTimer = setTimeout(handleResize, 100)
      }

      window.addEventListener("resize", throttledResize)

      // Clean up
      return () => {
        window.removeEventListener("resize", throttledResize)
      }
    }
  }, [])

  return isMobile
}

