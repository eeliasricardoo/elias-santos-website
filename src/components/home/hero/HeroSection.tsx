

import { Suspense, lazy } from 'react';
import { ProfilePhoto } from './ProfilePhoto';
import { HeroContent } from './HeroContent';
import { HeroScrollPrompt } from './HeroScrollPrompt';

const StarTunnel = lazy(() => import('./StarTunnel').then(module => ({ default: module.StarTunnel })));


// Lazy-load background effects to prevent blocking LCP

export function HeroSection() {
  return (
    <section className='relative min-h-screen flex flex-col justify-start overflow-hidden pt-24'>
      {/* Hero Section Container */}
      {/* ✅ Efeitos de fundo espacial - Star Tunnel - Lazy Loaded */}
      <Suspense fallback={<div className="absolute inset-0 z-0 bg-transparent" />}>
        <StarTunnel />
      </Suspense>

      {/* ✅ Static Hero Glow Aura */}
      <div
        className="hero-glow absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] -z-[5] pointer-events-none"
      />

      {/* Profile photo with priority */}
      <ProfilePhoto />

      {/* Hero content with optimized loading */}
      <HeroContent />

      {/* Scroll cue bottom-center */}
      <HeroScrollPrompt />
    </section>
  );
}
