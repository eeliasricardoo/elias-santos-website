"use client"

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { initGA, trackPageView, useAnalytics } from '@/lib/analytics'

export function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { trackPage } = useAnalytics()

  useEffect(() => {
    // Inicializar GA4
    initGA()
  }, [])

  useEffect(() => {
    // Trackear mudanças de página
    if (pathname) {
      trackPage({
        page_title: document.title,
        page_location: window.location.href,
        page_referrer: document.referrer,
      })
    }
  }, [pathname, searchParams, trackPage])

  return null
} 