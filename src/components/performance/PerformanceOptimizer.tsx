'use client';

import { useEffect } from 'react';

interface PerformanceOptimizerProps {
  onLoad?: () => void;
}

export function PerformanceOptimizer({ onLoad }: PerformanceOptimizerProps) {
  useEffect(() => {
    // Verificar se estamos no lado do cliente
    if (typeof window === 'undefined') return;
    // Otimizações de performance que devem ser executadas após o carregamento inicial

    // 1. Otimização de fontes (observa finalização)
    const observeFontsReady = () => {
      if ('fonts' in document) {
        void (document as any).fonts?.ready?.then(() => {});
      }
    };

    // 2. Imagens: Next.js Image já gerencia lazy/qualidade; nada extra aqui
    const optimizeImages = () => {};

    // 3. Otimização de animações
    const optimizeAnimations = () => {
      // Reduz animações para usuários que preferem movimento reduzido
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty(
          '--animation-duration',
          '0.01ms'
        );
      }
    };

    // 4. Otimização de scroll
    const optimizeScroll = () => {
      // Suaviza o scroll para melhor performance
      let ticking = false;

      const updateScroll = () => {
        // Lógica de otimização de scroll aqui
        ticking = false;
      };

      const requestTick = () => {
        if (!ticking) {
          requestAnimationFrame(updateScroll);
          ticking = true;
        }
      };

      window.addEventListener('scroll', requestTick, { passive: true });
    };

    // 5. Evitar estilos globais agressivos (não injetar will-change global)
    const preventForcedReflows = () => {};

    // Executa otimizações após um pequeno delay para não bloquear o LCP
    const timer = setTimeout(() => {
      observeFontsReady();
      optimizeImages();
      optimizeAnimations();
      optimizeScroll();
      preventForcedReflows();

      onLoad?.();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [onLoad]);

  return null;
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
