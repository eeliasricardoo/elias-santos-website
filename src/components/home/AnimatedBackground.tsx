import { useEffect, useState } from 'react';
import { usePerformance } from '@/hooks/use-performance-tier';

export function AnimatedBackground() {
  const [isClient, setIsClient] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const performanceTier = usePerformance();

  useEffect(() => {
    setIsClient(true);

    // Verificar preferência de movimento reduzido
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    // Delay otimizado baseado na preferência do usuário
    const timer = setTimeout(
      () => {
        setIsLoaded(true);
      },
      mediaQuery.matches ? 0 : 200
    );

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Camada 1 — glow blobs em movimento (Dark Premium Portfolio).
          Sem filter:blur — os gradientes radiais já são suaves, o que evita
          repintura cara enquanto os cards sticky rolam por cima. */}
      <div
        className='fixed inset-0 -z-10 overflow-hidden pointer-events-none'
        style={{ isolation: 'isolate', contain: 'strict' }}
      >
        {/* Base preta — sempre presente para o LCP */}
        <div className='absolute inset-0 bg-background' />

        {isClient && isLoaded && !reducedMotion && performanceTier !== 'low' && (
          <>
            <div
              className='absolute rounded-full animate-blob will-change-transform'
              style={{
                width: '70vw',
                height: '70vw',
                top: '-15%',
                left: '15%',
                opacity: 0.14,
                background: 'radial-gradient(circle, rgba(255,255,255,0.28), transparent 65%)',
                animationDuration: '14s',
              }}
            />
            <div
              className='absolute rounded-full animate-blob will-change-transform'
              style={{
                width: '70vw',
                height: '70vw',
                top: '25%',
                right: '-15%',
                opacity: 0.14,
                background: 'radial-gradient(circle, rgba(180,180,180,0.2), transparent 65%)',
                animationDuration: '18s',
                animationDelay: '-4s',
              }}
            />
            <div
              className='absolute rounded-full animate-blob will-change-transform'
              style={{
                width: '70vw',
                height: '70vw',
                bottom: '-15%',
                left: '-10%',
                opacity: 0.14,
                background: 'radial-gradient(circle, rgba(120,120,120,0.15), transparent 65%)',
                animationDuration: '20s',
                animationDelay: '-8s',
              }}
            />
          </>
        )}

        {/* Glow estático quando movimento reduzido ou low performance */}
        {isClient && isLoaded && (reducedMotion || performanceTier === 'low') && (
          <div className='absolute inset-0 bg-gradient-radial from-foreground/5 via-transparent to-transparent' />
        )}

        {/* Camada 2 — noise / grain */}
        <div className='bg-noise absolute inset-0 opacity-[0.035] pointer-events-none' />
      </div>

      {/* Camada 3 — vignette (escurece as bordas) */}
      <div className='vignette' aria-hidden='true' />
    </>
  );
}
