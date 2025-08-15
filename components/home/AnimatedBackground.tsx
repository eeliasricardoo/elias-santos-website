'use client';

import { useEffect, useState } from 'react';

export function AnimatedBackground() {
  const [isClient, setIsClient] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

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
      {isClient && isLoaded && !reducedMotion && (
        <>
          {/* Gradiente radial sutil */}
          <div className='absolute inset-0 bg-gradient-radial from-primary/3 via-transparent to-transparent animate-[pulse_8s_ease-in-out_infinite]' />

          {/* Elementos decorativos minimalistas */}
          <div className='absolute top-1/4 left-1/4 w-48 h-48 bg-primary/3 rounded-full blur-3xl animate-[float_15s_ease-in-out_infinite]' />
          <div className='absolute bottom-1/3 right-1/4 w-64 h-64 bg-primary/2 rounded-full blur-3xl animate-[float_18s_ease-in-out_infinite_reverse]' />

          {/* Pontos decorativos sutis */}
          <div className='absolute inset-0 opacity-10'>
            <div className='absolute top-20 left-20 w-2 h-2 bg-primary/30 rounded-full animate-[pulse_6s_ease-in-out_infinite]' />
            <div
              className='absolute top-40 right-32 w-1 h-1 bg-muted-foreground/40 rounded-full animate-[pulse_8s_ease-in-out_infinite]'
              style={{ animationDelay: '2s' }}
            />
          </div>
        </>
      )}

      {/* Gradiente sutil quando movimento reduzido */}
      {isClient && isLoaded && reducedMotion && (
        <div className='absolute inset-0 bg-gradient-radial from-primary/2 via-transparent to-transparent' />
      )}
    </div>
  );
}
