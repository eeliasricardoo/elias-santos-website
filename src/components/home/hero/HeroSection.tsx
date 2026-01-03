

import { Suspense, lazy } from 'react';
import { ProfilePhoto } from './ProfilePhoto';
import { HeroContent } from './HeroContent';


// Lazy-load background effects to prevent blocking LCP

const FloatingElements = lazy(() =>
  import('./FloatingElements').then(module => ({ default: module.FloatingElements }))
);

export function HeroSection() {
  return (
    <section className='relative min-h-screen flex flex-col justify-start overflow-hidden pt-24'>
      {/* ✅ Efeitos de fundo espacial - lazy loaded */}

      <Suspense fallback={null}>
        <FloatingElements />
      </Suspense>

      {/* ✅ Static Hero Glow Aura */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] -z-[5] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 30%, hsl(var(--primary) / 0.15), transparent 70%)"
        }}
      />

      {/* Profile photo with priority */}
      <ProfilePhoto />

      {/* Hero content with optimized loading */}
      <HeroContent />

      {/* Scroll cue bottom-center */}

    </section>
  );
}
