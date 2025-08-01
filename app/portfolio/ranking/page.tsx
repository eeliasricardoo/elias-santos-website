'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { PortfolioLayout } from '@/components/portfolio';
import { PageAnalytics } from '@/components/analytics/page-analytics';

// Lazy loading dos componentes
const RankingHeader = dynamic(() => import('@/components/portfolio/ranking/header').then(mod => ({ default: mod.RankingHeader })), {
  loading: () => <div className="h-32 bg-muted/20 rounded-lg animate-pulse" />
});

const RankingIntroduction = dynamic(() => import('@/components/portfolio/ranking/content').then(mod => ({ default: mod.RankingIntroduction })), {
  loading: () => <div className="h-48 bg-muted/20 rounded-lg animate-pulse" />
});

const RankingProblem = dynamic(() => import('@/components/portfolio/ranking/content').then(mod => ({ default: mod.RankingProblem })), {
  loading: () => <div className="h-48 bg-muted/20 rounded-lg animate-pulse" />
});

const RankingObjectives = dynamic(() => import('@/components/portfolio/ranking/content').then(mod => ({ default: mod.RankingObjectives })), {
  loading: () => <div className="h-48 bg-muted/20 rounded-lg animate-pulse" />
});

const RankingResearch = dynamic(() => import('@/components/portfolio/ranking/research').then(mod => ({ default: mod.RankingResearch })), {
  loading: () => <div className="h-48 bg-muted/20 rounded-lg animate-pulse" />
});

const RankingInsights = dynamic(() => import('@/components/portfolio/ranking/research').then(mod => ({ default: mod.RankingInsights })), {
  loading: () => <div className="h-48 bg-muted/20 rounded-lg animate-pulse" />
});

const RankingPersonas = dynamic(() => import('@/components/portfolio/ranking/user-experience').then(mod => ({ default: mod.RankingPersonas })), {
  loading: () => <div className="h-96 bg-muted/20 rounded-lg animate-pulse" />
});

const RankingUserJourney = dynamic(() => import('@/components/portfolio/ranking/user-experience').then(mod => ({ default: mod.RankingUserJourney })), {
  loading: () => <div className="h-48 bg-muted/20 rounded-lg animate-pulse" />
});

const RankingSolution = dynamic(() => import('@/components/portfolio/ranking/solution').then(mod => ({ default: mod.RankingSolution })), {
  loading: () => <div className="h-48 bg-muted/20 rounded-lg animate-pulse" />
});

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
        <Suspense fallback={<div className="h-32 bg-muted/20 rounded-lg animate-pulse" />}>
          <RankingHeader />
        </Suspense>
        
        <Suspense fallback={<div className="h-48 bg-muted/20 rounded-lg animate-pulse" />}>
          <RankingIntroduction />
        </Suspense>
        
        <Suspense fallback={<div className="h-48 bg-muted/20 rounded-lg animate-pulse" />}>
          <RankingProblem />
        </Suspense>
        
        <Suspense fallback={<div className="h-48 bg-muted/20 rounded-lg animate-pulse" />}>
          <RankingObjectives />
        </Suspense>
        
        <Suspense fallback={<div className="h-48 bg-muted/20 rounded-lg animate-pulse" />}>
          <RankingResearch />
        </Suspense>
        
        <Suspense fallback={<div className="h-48 bg-muted/20 rounded-lg animate-pulse" />}>
          <RankingInsights />
        </Suspense>
        
        <Suspense fallback={<div className="h-96 bg-muted/20 rounded-lg animate-pulse" />}>
          <RankingPersonas />
        </Suspense>
        
        <Suspense fallback={<div className="h-48 bg-muted/20 rounded-lg animate-pulse" />}>
          <RankingUserJourney />
        </Suspense>
        
        <Suspense fallback={<div className="h-48 bg-muted/20 rounded-lg animate-pulse" />}>
          <RankingSolution />
        </Suspense>
      </main>
    </PortfolioLayout>
  );
}
