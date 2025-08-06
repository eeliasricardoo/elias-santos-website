'use client';

import React from 'react';
import { PageAnalytics } from '@/components/analytics/page-analytics';
import { PageSEO } from '@/components/seo/PageSEO';
import { ProjectStructuredData } from '@/components/seo/ProjectStructuredData';
import { BackButton } from '@/components/portfolio/ui/BackButton';
import {
  HeroSection,
  IntroductionSection,
  Phase1Section,
  DoubleDiamondSection,
  Phase2Section,
  Phase3Section,
  ResultsSection,
  KeyFeaturesSection,
  Phase4Section,
  CallToActionSection,
} from '@/components/portfolio/ventus';

export default function VentusChatPage() {
  return (
    <>
      {/* SEO */}
      <PageSEO
        title='ChatAI - From Need to Innovation in One Week'
        description='Case study completo do ChatAI, uma ferramenta de IA personalizada desenvolvida em uma semana. Solução inovadora para chat com IA mais barata, customizável e superior aos workflows existentes.'
        keywords={[
          'ChatAI',
          'IA Personalizada',
          'Chat com IA',
          'OpenAI API',
          'Next.js',
          'React',
          'TypeScript',
          'Case Study',
          'Desenvolvimento Rápido',
          'Ferramenta de IA',
          'Chatbot',
          'Automação',
        ]}
        url='/portfolio/ventuschat'
        type='article'
        publishedTime='2024-01-20T00:00:00Z'
        modifiedTime='2024-12-19T00:00:00Z'
        author='Elias Santos'
        section='Portfolio'
        tags={[
          'IA',
          'Chat',
          'Next.js',
          'React',
          'TypeScript',
          'OpenAI',
          'Case Study',
        ]}
      />

      {/* Structured Data */}
      <ProjectStructuredData
        name='ChatAI'
        description='Ferramenta de IA personalizada desenvolvida em uma semana para resolver problemas reais de chat com IA. Solução mais barata, customizável e superior aos workflows existentes.'
        image='/portfolios/ventuschat/demo.mp4'
        url='/portfolio/ventuschat'
        technologies={[
          'Next.js',
          'React',
          'TypeScript',
          'OpenAI API',
          'Tailwind CSS',
          'Vercel',
        ]}
        category='Desenvolvimento Web'
        datePublished='2024-01-20T00:00:00Z'
        dateModified='2024-12-19T00:00:00Z'
        author='Elias Santos'
      />

      <main className='max-w-4xl mx-auto py-12 px-4 space-y-20 pt-24'>
        {/* Analytics */}
        <PageAnalytics
          pageName='Portfolio VentuChat'
          pagePath='/portfolio/ventuschat'
          customProperties={{
            section: 'portfolio',
            project: 'ventuchat',
            type: 'detailed_case',
          }}
        />
        
        {/* Header */}
        <header className='mb-10 text-left'>
          <BackButton />
        </header>

        {/* Hero Section */}
        <HeroSection />

        {/* Introduction */}
        <IntroductionSection />

        {/* Phase 1: Discovery & Initial Design */}
        <Phase1Section />

        {/* Double Diamond Process */}
        <DoubleDiamondSection />

        {/* Phase 2: Development & Technical Evolution */}
        <Phase2Section />

        {/* Phase 3: Redesign - The Minimalist Evolution */}
        <Phase3Section />

        {/* Results and Success Metrics */}
        <ResultsSection />

        {/* Key Features */}
        <KeyFeaturesSection />

        {/* Phase 4: Final Interface & User Experience */}
        <Phase4Section />

        {/* Call to Action */}
        <CallToActionSection />
      </main>
    </>
  );
}
