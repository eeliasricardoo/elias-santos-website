

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
          {/* Gradiente radial sutil */}
          <div className='absolute inset-0 bg-gradient-radial from-amber-500/5 via-transparent to-transparent animate-[pulse_8s_ease-in-out_infinite]' />

          {/* Noise Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Elementos decorativos minimalistas - blur reduzido em medium */}
          <div
            className={`absolute top-1/4 left-1/4 w-48 h-48 bg-amber-500/10 rounded-full ${performanceTier === 'high' ? 'blur-3xl' : 'blur-xl'
              } animate-[float_15s_ease-in-out_infinite]`}
            style={{ willChange: 'transform' }}
          />
          <div
            className={`absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500/5 rounded-full ${performanceTier === 'high' ? 'blur-3xl' : 'blur-xl'
              } animate-[float_18s_ease-in-out_infinite_reverse]`}
            style={{ willChange: 'transform' }}
          />

          {/* Pontos decorativos sutis - apenas em high performance */}
          {performanceTier === 'high' && (
            <div className='absolute inset-0 opacity-20'>
              <div className='absolute top-20 left-20 w-1 h-1 bg-yellow-400 rounded-full animate-[pulse_4s_ease-in-out_infinite]' />
              <div
                className='absolute top-40 right-32 w-1 h-1 bg-amber-300 rounded-full animate-[pulse_6s_ease-in-out_infinite]'
                style={{ animationDelay: '2s' }}
              />
              <div
                className='absolute bottom-40 left-32 w-2 h-2 bg-yellow-500/20 rounded-full animate-bounce'
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
