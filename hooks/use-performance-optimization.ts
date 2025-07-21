"use client"

import { useEffect, useCallback } from 'react'

interface PerformanceOptimizationOptions {
  enablePreload?: boolean
  enableIntersectionObserver?: boolean
  enableResourceHints?: boolean
}

export function usePerformanceOptimization(options: PerformanceOptimizationOptions = {}) {
  const {
    enablePreload = true,
    enableIntersectionObserver = true,
    enableResourceHints = true,
  } = options

  // ✅ Preload de recursos críticos
  const preloadCriticalResources = useCallback(() => {
    if (!enablePreload) return

    const criticalResources: Array<{ href: string; as: string }> = [
      // Adicione aqui recursos críticos que devem ser preloadados
    ]

    criticalResources.forEach((resource) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = resource.href
      link.as = resource.as
      document.head.appendChild(link)
    })
  }, [enablePreload])

  // ✅ Otimização de Intersection Observer
  const optimizeIntersectionObserver = useCallback(() => {
    if (!enableIntersectionObserver) return

    // Configuração otimizada para Intersection Observer
    const observerOptions = {
      rootMargin: '50px',
      threshold: 0.1,
    }

    return observerOptions
  }, [enableIntersectionObserver])

  // ✅ Resource hints dinâmicos
  const addResourceHints = useCallback(() => {
    if (!enableResourceHints) return

    const hints = [
      { rel: 'dns-prefetch', href: 'https://api.fontshare.com' },
      { rel: 'dns-prefetch', href: 'https://cdn.fontshare.com' },
      { rel: 'preconnect', href: 'https://api.fontshare.com' },
      { rel: 'preconnect', href: 'https://cdn.fontshare.com' },
    ]

    hints.forEach((hint) => {
      if (!document.querySelector(`link[href="${hint.href}"]`)) {
        const link = document.createElement('link')
        link.rel = hint.rel
        link.href = hint.href
        document.head.appendChild(link)
      }
    })
  }, [enableResourceHints])

  // ✅ Otimização de reflow
  const optimizeReflow = useCallback(() => {
    // Agrupa leituras de layout para evitar reflows forçados
    const batchLayoutReads = (reads: (() => void)[]) => {
      requestAnimationFrame(() => {
        reads.forEach(read => read())
      })
    }

    return { batchLayoutReads }
  }, [])

  useEffect(() => {
    // Aplicar otimizações quando o componente montar
    preloadCriticalResources()
    addResourceHints()
  }, [preloadCriticalResources, addResourceHints])

  return {
    optimizeIntersectionObserver,
    optimizeReflow,
  }
} 