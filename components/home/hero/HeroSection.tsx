
'use client';

import { Suspense, lazy } from 'react';
import { ProfilePhoto, HeroContent } from '.';
import { ChevronDown } from 'lucide-react';

// Lazy-load EmailClient to improve LCP
const EmailClient = lazy(() => import('./MiniChat').then(module => ({ default: module.EmailClient })));

export function HeroSection() {
  return (
    <section className='relative min-h-screen flex flex-col justify-start overflow-hidden pt-24'>
      {/* Profile photo with priority */}
      <ProfilePhoto />

      {/* Hero content with optimized loading */}
      <HeroContent />

      {/* Email client loaded lazily inline as before */}
      <Suspense
        fallback={
          <div className='flex justify-center mt-8'>
            <div className='w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin' />
          </div>
        }
      >
        <EmailClient />
      </Suspense>

      {/* Scroll cue bottom-center */}
      <div className='pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground'>
        <ChevronDown className='w-5 h-5 animate-bounce' aria-hidden='true' />
        <span className='text-xs'>Scroll</span>
      </div>
    </section>
  );
}
