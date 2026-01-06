'use client';

import { CaseStudyHero } from '@/components/portfolio/ui';

export default function RankingHeader() {
  return (
    <CaseStudyHero
      badge="UX Case Study"
      title="Ranking System for Gamification"
      subtitle="Designing a competitive yet inclusive ranking system to boost student engagement through gamification mechanics."
      video={{
        src: '/portfolios/ranking/ranking-demo'
      }}
      image={{
        src: '/portfolios/ranking/ranking.png', // Fallback/Poster
        alt: 'XP Ranking System Interface'
      }}
    />
  );
}
