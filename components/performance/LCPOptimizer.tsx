'use client';

import { useEffect } from 'react';

interface LCPOptimizerProps {
  onLCP?: (lcp: number) => void;
  onError?: (error: string) => void;
}

export function LCPOptimizer({ onLCP, onError }: LCPOptimizerProps) {
  useEffect(() => {
    // Verificar se a API de Performance está disponível
    if (!('PerformanceObserver' in window)) {
      onError?.('PerformanceObserver not supported');
      return;
    }

    try {
      // Observar LCP (Largest Contentful Paint)
      const lcpObserver = new PerformanceObserver(list => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry;

        if (lastEntry) {
          const lcp = lastEntry.startTime;
          onLCP?.(lcp);

          // Log para desenvolvimento
          if (process.env.NODE_ENV === 'development') {
            // eslint-disable-next-line no-console
            console.log('🚀 LCP:', lcp, 'ms');

            if (lcp < 1500) {
              // eslint-disable-next-line no-console
              console.log('✅ LCP excelente (< 1.5s)');
            } else if (lcp < 2500) {
              // eslint-disable-next-line no-console
              console.log('⚠️ LCP bom (< 2.5s)');
            } else {
              // eslint-disable-next-line no-console
              console.log('❌ LCP precisa de melhoria (> 2.5s)');
            }
          }
        }
      });

      // Observar FID (First Input Delay)
      const fidObserver = new PerformanceObserver(list => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry;

        if (lastEntry) {
          const fid = (lastEntry as any).processingStart - lastEntry.startTime;

          if (process.env.NODE_ENV === 'development') {
            // eslint-disable-next-line no-console
            console.log('⚡ FID:', fid, 'ms');
          }
        }
      });

      // Observar CLS (Cumulative Layout Shift) - versão muito otimizada
      let clsValue = 0;
      let lastClsLog = 0;

      const clsObserver = new PerformanceObserver(list => {
        const entries = list.getEntries() as PerformanceEntry[];

        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });

        // Log apenas quando CLS for significativo E diferente do último log
        if (
          clsValue > 0.05 &&
          clsValue !== lastClsLog &&
          process.env.NODE_ENV === 'development'
        ) {
          // eslint-disable-next-line no-console
          console.log('📐 CLS:', clsValue);
          lastClsLog = clsValue;
        }
      });

      // Iniciar observação
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      fidObserver.observe({ entryTypes: ['first-input'] });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Cleanup
      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    } catch (error) {
      onError?.(`Error setting up performance observers: ${error}`);
      return;
    }
  }, [onLCP, onError]);

  return null; // Componente não renderiza nada
}
