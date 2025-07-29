'use client';

import { useEffect } from 'react';
import { monitorCoreWebVitals, PerformanceMonitor } from '@/lib/performance';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

export function PerformanceOptimizer({ children }: PerformanceOptimizerProps) {
  useEffect(() => {
    // ✅ Monitoramento de Web Vitals
    monitorCoreWebVitals();

    // ✅ Marca de início de carregamento
    PerformanceMonitor.mark('app-start');

    // ✅ Preload de recursos críticos
    const preloadCriticalResources = async () => {
      try {
        // Preload de imagens críticas
        const criticalImages = ['/logo.png', '/profile-photo.png'];

        for (const image of criticalImages) {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'image';
          link.href = image;
          document.head.appendChild(link);
        }
      } catch (error) {
        console.warn('Failed to preload resources:', error);
      }
    };

    preloadCriticalResources();

    // ✅ Cleanup de performance
    return () => {
      PerformanceMonitor.clearMarks();
      PerformanceMonitor.clearMeasures();
    };
  }, []);

  return <>{children}</>;
}

// ✅ Componente de Lazy Loading
export function LazyComponent({ children }: { children: React.ReactNode }) {
  return <div className='lazy-component'>{children}</div>;
}

// ✅ Componente de Intersection Observer
export function IntersectionWrapper({
  children,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
}: {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
}) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    const elements = document.querySelectorAll('.lazy-component');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return <>{children}</>;
}
