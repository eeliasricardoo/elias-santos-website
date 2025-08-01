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
        title="Ranking App - UX Research Case Study"
        description="Case study completo do aplicativo de ranking desenvolvido por Elias Santos. Pesquisa de UX, personas, jornada do usuário e soluções inovadoras para gamificação."
        keywords={[
          'Ranking App',
          'UX Research',
          'UX Design',
          'Mobile App',
          'Gamificação',
          'Case Study',
          'Personas',
          'User Journey',
          'Design de Interfaces',
          'Pesquisa de Usuário'
        ]}
        url="/portfolio/ranking"
        type="article"
        publishedTime="2024-01-10T00:00:00Z"
        modifiedTime="2024-12-19T00:00:00Z"
        author="Elias Santos"
        section="Portfolio"
        tags={[
          'UX Research',
          'Mobile App',
          'Gamificação',
          'Design de Interfaces',
          'Case Study'
        ]}
      />
      
      {/* Structured Data */}
      <ProjectStructuredData
        name="Ranking App"
        description="Aplicativo de ranking com foco em gamificação e experiência do usuário. Desenvolvido com pesquisa de UX completa, incluindo personas, jornada do usuário e testes de usabilidade."
        image="/portfolios/ranking/ranking.png"
        url="/portfolio/ranking"
        technologies={['React Native', 'TypeScript', 'UX Research', 'Figma', 'User Testing']}
        category="UX/UI Design"
        datePublished="2024-01-10T00:00:00Z"
        dateModified="2024-12-19T00:00:00Z"
        author="Elias Santos"
      />

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
    </>
  );
}
