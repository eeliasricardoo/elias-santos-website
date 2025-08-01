'use client';

import React from 'react';
import { PortfolioLayout } from '@/components/portfolio';
import { PageAnalytics } from '@/components/analytics/page-analytics';
import {
  RankingHeader,
  RankingIntroduction,
  RankingProblem,
  RankingObjectives,
  RankingResearch,
  RankingInsights,
  RankingPersonas,
  RankingUserJourney,
  RankingSolution,
  RankingTesting,
  RankingAuthor,
} from '@/components/portfolio';

export default function RankingCasePage() {
  return (
    <PortfolioLayout>
      {/* Analytics */}
      <PageAnalytics 
        pageName="Ranking Case Study" 
        pagePath="/portfolio/ranking" 
        customProperties={{
          section: "portfolio",
          project: "ranking",
          type: "ux_research_case"
        }}
      />
      <main className='max-w-4xl mx-auto py-12 px-4 space-y-20 pt-24'>
        <RankingHeader />
        <RankingIntroduction />
        <RankingProblem />
        <RankingObjectives />
        <RankingResearch />
        <RankingInsights />
        <RankingPersonas />
        <RankingUserJourney />
        <RankingSolution />
        <RankingTesting />
        <RankingAuthor />
      </main>
    </PortfolioLayout>
  );
}
