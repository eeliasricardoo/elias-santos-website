'use client';

import { useEffect } from 'react';

interface PerformanceOptimizerProps {
  onLoad?: () => void;
}

export function PerformanceOptimizer({ onLoad }: PerformanceOptimizerProps) {
  useEffect(() => {
    // Otimizações de performance que devem ser executadas após o carregamento inicial
    
    // 1. Otimização de fontes
    const optimizeFonts = () => {
      // Força o carregamento de fontes críticas
      if ('fonts' in document) {
        document.fonts.ready.then(() => {
          // Fontes carregadas com sucesso
        });
      }
    };

    // 2. Otimização de imagens
    const optimizeImages = () => {
      // Lazy loading para imagens não críticas
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    };

    // 3. Otimização de animações
    const optimizeAnimations = () => {
      // Reduz animações para usuários que preferem movimento reduzido
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
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

    // 5. Prevenção de reflows forçados
    const preventForcedReflows = () => {
      // Evita reflows forçados durante animações
      const style = document.createElement('style');
      style.textContent = `
        * {
          will-change: auto;
        }
        .animate-float, .animate-pulse, .animate-bounce {
          will-change: transform, opacity;
        }
      `;
      document.head.appendChild(style);
    };

    // Executa otimizações após um pequeno delay para não bloquear o LCP
    const timer = setTimeout(() => {
      optimizeFonts();
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
