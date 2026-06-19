

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
    <div className='fixed inset-0 -z-10 overflow-hidden'>
      {/* Gradiente de fundo estático - sempre presente para LCP */}
      <div className='absolute inset-0 bg-gradient-to-br from-background via-background to-muted/40' />

      {/* Elementos animados apenas se cliente e movimento não reduzido */}
      {isClient && isLoaded && !reducedMotion && performanceTier !== 'low' && (
        <>
          {/* Gradiente radial sutil (Premium Red) */}
          <div className='absolute inset-0 bg-gradient-radial from-red-500/3 via-transparent to-transparent animate-[pulse_8s_ease-in-out_infinite]' />

          {/* Noise Texture Overlay */}
          <div className="bg-noise absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" />

          {/* Elementos decorativos minimalistas - blur reduzido em medium */}
          <div
            className={`absolute top-1/4 left-1/4 w-48 h-48 bg-red-500/3 rounded-full ${performanceTier === 'high' ? 'blur-3xl' : 'blur-xl'
              } animate-[float_15s_ease-in-out_infinite] will-change-transform`}
          />
          <div
            className={`absolute bottom-1/3 right-1/4 w-64 h-64 bg-red-950/2 rounded-full ${performanceTier === 'high' ? 'blur-3xl' : 'blur-xl'
              } animate-[float_18s_ease-in-out_infinite_reverse] will-change-transform`}
          />

          {/* Pontos decorativos sutis - apenas em high performance */}
          {performanceTier === 'high' && (
            <div className='absolute inset-0 opacity-20'>
              <div className='absolute top-20 left-20 w-1 h-1 bg-red-400 rounded-full animate-[pulse_4s_ease-in-out_infinite]' />
              <div
                className='absolute top-40 right-32 w-1 h-1 bg-red-500 rounded-full animate-[pulse_6s_ease-in-out_infinite]'
                style={{ animationDelay: '2s' }}
              />
              <div
                className='absolute bottom-40 left-32 w-2 h-2 bg-red-500/5 rounded-full animate-bounce'
                style={{ animationDelay: '4s', animationDuration: '8s' }}
              />
            </div>
          )}
        </>
      )}

      {/* Gradiente sutil quando movimento reduzido ou low performance */}
      {isClient && isLoaded && (reducedMotion || performanceTier === 'low') && (
        <div className='absolute inset-0 bg-gradient-radial from-primary/2 via-transparent to-transparent' />
      )}
    </div>
  );
}
