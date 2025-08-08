'use client';

import { useEffect, useState } from 'react';

export function AnimatedBackground() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Delay reduzido para melhorar LCP
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='fixed inset-0 -z-10 overflow-hidden will-change-transform'>
      {/* Gradiente de fundo estático - carregamento imediato para LCP */}
      <div className='absolute inset-0 bg-gradient-to-br from-background via-background to-muted/40' />

      {/* Gradiente radial sutil - carregamento imediato */}
      <div className='absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent animate-[pulse_6s_ease-in-out_infinite]' />

      {/* Elementos decorativos flutuantes - versão muito simplificada */}
      {isLoaded && (
        <>
          {/* Apenas 1 elemento principal para reduzir complexidade */}
          <div className='absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float' />
          <div className='absolute bottom-1/4 right-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-[float_12s_ease-in-out_infinite_reverse]' />

          {/* Apenas 2 pontos decorativos */}
          <div className='absolute inset-0 opacity-20'>
            <div className='absolute top-20 left-20 w-3 h-3 bg-primary/20 rounded-full animate-[pulse_4s_ease-in-out_infinite]' />
            <div
              className='absolute top-40 right-32 w-2 h-2 bg-muted-foreground/30 rounded-full animate-[pulse_5s_ease-in-out_infinite]'
              style={{ animationDelay: '1s' }}
            />
          </div>

          {/* Linhas decorativas sutis */}
          <div className='absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent motion-safe:animate-[shimmer_12s_linear_infinite]' />
          <div className='absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-muted-foreground/10 to-transparent motion-safe:animate-[shimmer_14s_linear_infinite_reverse]' />
        </>
      )}
    </div>
  );
} 