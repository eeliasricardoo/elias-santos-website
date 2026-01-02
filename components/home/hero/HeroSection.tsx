'use client';

import { Suspense, lazy } from 'react';
import { ProfilePhoto } from './ProfilePhoto';
import { HeroContent } from './HeroContent';
import { ChevronDown } from 'lucide-react';

// Lazy-load background effects to prevent blocking LCP
const ParallaxStars = lazy(() =>
  import('./ParallaxStars').then(module => ({ default: module.ParallaxStars }))
);
const FloatingElements = lazy(() =>
  import('./FloatingElements').then(module => ({ default: module.FloatingElements }))
);

export function HeroSection() {
  return (
    <section className='relative min-h-screen flex flex-col justify-start overflow-hidden pt-24'>
      {/* ✅ Efeitos de fundo espacial - lazy loaded */}
      <Suspense fallback={null}>
        <ParallaxStars />
      </Suspense>
      <Suspense fallback={null}>
        <FloatingElements />
      </Suspense>

      {/* Profile photo with priority */}
      <ProfilePhoto />

      {/* Hero content with optimized loading */}
      <HeroContent />

      {/* Scroll cue bottom-center */}
      <div className='pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground'>
        <ChevronDown className='w-5 h-5 animate-bounce' aria-hidden='true' />
        <span className='text-xs'>Scroll</span>
      </div>
    </section>
  );
}
