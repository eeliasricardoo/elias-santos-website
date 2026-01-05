'use client';

import { CaseStudyHero } from '@/components/portfolio/ui';

export default function RankingHeader() {
  return (
    <CaseStudyHero
      badge="UX Case Study"
      title="Ranking System for Gamification"
      subtitle="Designing a competitive yet inclusive ranking system to boost student engagement through gamification mechanics."
      image={{
        src: '/portfolios/ranking/1_Eqflzr9sr1z_mH6CUvohrQ.gif',
        alt: 'XP Ranking System Interface'
      }}
    />
  );
}
