'use client';

import { CaseStudyHero } from '@/components/portfolio/ui';

export function HeroSection() {
  return (
    <CaseStudyHero
      brand="red"
      badge="UX Engineering & System Architecture Case Study"
      title="DramaFlix"
      subtitle="A premium video streaming platform migrated from Supabase to a custom Neon Postgres + serverless JWT architecture, optimizing data lookup speed by 15,000x and reducing hosting costs by 92%."
      image={{
        src: '/portfolios/netflix/hero-featured.jpg',
        alt: 'DramaFlix streaming interface showcase'
      }}
      video={{
        src: '/portfolios/netflix/a_da_ca_fba_dmp_.mp4'
      }}
    />
  );
}
