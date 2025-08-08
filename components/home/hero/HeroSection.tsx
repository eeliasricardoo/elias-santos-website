'use client';

import { Suspense, lazy } from 'react';
import { ProfilePhoto, HeroContent } from '.';

// Lazy-load EmailClient to improve LCP
const EmailClient = lazy(() => import('./MiniChat').then(module => ({ default: module.EmailClient })));

export function HeroSection() {
  return (
    <section className='relative min-h-screen flex flex-col justify-start overflow-hidden pt-24'>
      {/* Profile photo with priority */}
      <ProfilePhoto />
      
      {/* Hero content with optimized loading */}
      <HeroContent />
      
      {/* Email client loaded lazily */}
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
