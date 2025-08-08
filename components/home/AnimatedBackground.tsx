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
    <div className='fixed inset-0 -z-10 overflow-hidden'>
      {/* Gradiente de fundo estático - carregamento imediato para LCP */}
      <div className='absolute inset-0 bg-gradient-to-br from-background via-background to-muted/40' />

      {/* Gradiente radial sutil - carregamento imediato */}
      <div className='absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent' />

      {/* Elementos decorativos flutuantes - versão muito simplificada */}
      {isLoaded && (
        <>
          {/* Apenas 1 elemento principal para reduzir complexidade */}
          <div className='absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float' />

          {/* Apenas 2 pontos decorativos */}
          <div className='absolute inset-0 opacity-20'>
            <div className='absolute top-20 left-20 w-3 h-3 bg-primary/20 rounded-full animate-pulse' />
            <div
              className='absolute top-40 right-32 w-2 h-2 bg-muted-foreground/30 rounded-full animate-pulse'
              style={{ animationDelay: '1s' }}
            />
          </div>

          {/* Linhas decorativas sutis */}
          <div className='absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent' />
          <div className='absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-muted-foreground/10 to-transparent' />
        </>
      )}
    </div>
  );
} 