'use client';

import { Suspense, lazy } from 'react';
import { ProfilePhoto, HeroContent } from '.';

// Carregamento lazy do EmailClient para melhorar LCP
const EmailClient = lazy(() => import('./MiniChat').then(module => ({ default: module.EmailClient })));

export function HeroSection() {
  return (
    <section className='relative min-h-screen flex flex-col justify-start overflow-hidden pt-24'>
      {/* Carregamento prioritário da foto de perfil */}
      <ProfilePhoto />
      
      {/* Conteúdo do hero com loading otimizado */}
      <HeroContent />
      
      {/* Email client carregado de forma lazy */}
      <Suspense fallback={
        <div className='flex justify-center mt-8'>
          <div className='w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin'></div>
        </div>
      }>
        <EmailClient />
      </Suspense>
    </section>
  );
}
