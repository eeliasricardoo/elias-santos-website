'use client';

import React from 'react';
import { PortfolioLayout } from '@/components/portfolio';
import { PageAnalytics } from '@/components/analytics/page-analytics';
import { PageSEO } from '@/components/seo/PageSEO';
import { ProjectStructuredData } from '@/components/seo/ProjectStructuredData';
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
    <>
      {/* SEO */}
      <PageSEO
        title='Ranking App - UX Research Case Study'
        description='Complete case study of the ranking application developed by Elias Santos. UX research, personas, user journey and innovative solutions for gamification.'
        keywords={[
          'Ranking App',
          'UX Research',
          'UX Design',
          'Mobile App',
          'Gamification',
          'Case Study',
          'Personas',
          'User Journey',
          'Interface Design',
          'User Research',
        ]}
        url='/portfolio/ranking'
        type='article'
        publishedTime='2024-01-10T00:00:00Z'
        modifiedTime='2024-12-19T00:00:00Z'
        author='Elias Santos'
        section='Portfolio'
        tags={[
          'UX Research',
          'Mobile App',
          'Gamification',
          'Interface Design',
          'Case Study',
        ]}
      />

      {/* Structured Data */}
      <ProjectStructuredData
        name='Ranking App'
        description='Ranking application focused on gamification and user experience. Developed with complete UX research, including personas, user journey and usability testing.'
        image='/portfolios/ranking/ranking.png'
        url='/portfolio/ranking'
        technologies={[
          'React Native',
          'TypeScript',
          'UX Research',
          'Figma',
          'User Testing',
        ]}
        category='UX/UI Design'
        datePublished='2024-01-10T00:00:00Z'
        dateModified='2024-12-19T00:00:00Z'
        author='Elias Santos'
      />

      <PortfolioLayout>
        {/* Analytics */}
        <PageAnalytics
          pageName='Ranking Case Study'
          pagePath='/portfolio/ranking'
          customProperties={{
            section: 'portfolio',
            project: 'ranking',
            type: 'ux_research_case',
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
    </>
  );
}
