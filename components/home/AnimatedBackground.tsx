'use client';

import { useEffect, useState } from 'react';

export function AnimatedBackground() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Delay the animation to prioritize LCP
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='fixed inset-0 -z-10 overflow-hidden'>
      {/* Gradiente de fundo estático - carregamento imediato para LCP */}
      <div className='absolute inset-0 bg-gradient-to-br from-background via-background to-muted/40' />

      {/* Gradiente radial sutil - carregamento imediato */}
      <div className='absolute inset-0 bg-gradient-radial from-primary/15 via-transparent to-transparent' />

      {/* Elementos decorativos flutuantes - carregamento lazy */}
      {isLoaded && (
        <>
          <div className='absolute top-1/4 left-1/4 w-64 h-64 bg-primary/15 rounded-full blur-3xl animate-float' />
          <div
            className='absolute top-3/4 right-1/4 w-96 h-96 bg-muted/25 rounded-full blur-3xl animate-float'
            style={{ animationDelay: '2s' }}
          />
          <div
            className='absolute bottom-1/4 left-1/3 w-48 h-48 bg-primary/10 rounded-full blur-2xl animate-float'
            style={{ animationDelay: '4s' }}
          />

          {/* Padrão de pontos sutil */}
          <div className='absolute inset-0 opacity-60'>
            <div className='absolute top-20 left-20 w-3 h-3 bg-primary/40 rounded-full animate-pulse' />
            <div
              className='absolute top-40 right-32 w-2 h-2 bg-muted-foreground/50 rounded-full animate-pulse'
              style={{ animationDelay: '1s' }}
            />
            <div
              className='absolute top-60 left-1/2 w-2.5 h-2.5 bg-primary/35 rounded-full animate-pulse'
              style={{ animationDelay: '2s' }}
            />
            <div
              className='absolute top-80 right-20 w-1.5 h-1.5 bg-muted-foreground/45 rounded-full animate-pulse'
              style={{ animationDelay: '3s' }}
            />
            <div
              className='absolute top-96 left-1/4 w-3 h-3 bg-primary/30 rounded-full animate-pulse'
              style={{ animationDelay: '4s' }}
            />
          </div>

          {/* Linhas decorativas sutis */}
          <div className='absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent' />
          <div className='absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-muted-foreground/25 to-transparent' />
        </>
      )}
    </div>
  );
} 