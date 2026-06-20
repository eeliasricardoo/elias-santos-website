

import { useEffect, useState } from 'react';

export function AnimatedBackground() {
  const [isClient, setIsClient] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Fundo preto chapado (sem gradientes) + grain sutil */}
      <div
        className='fixed inset-0 -z-10 overflow-hidden pointer-events-none'
        style={{ isolation: 'isolate', contain: 'strict' }}
      >
        <div className='absolute inset-0 bg-background' />
        {isClient && isLoaded && (
          <div className='bg-noise absolute inset-0 opacity-[0.035] pointer-events-none' />
        )}
      </div>
    </>
  );
}
