'use client';

import { PageAnalytics } from '@/components/analytics/page-analytics';
import { PageSEO } from '@/components/seo/PageSEO';
import { ProjectStructuredData } from '@/components/seo/ProjectStructuredData';
import { BackButton } from '@/components/portfolio/ui/BackButton';
import {
  HeroSection,
  IntroductionSection,
  ProblemSection,
  SolutionSection,
  DevelopmentJourneySection,
  DetailedPhasesSection,
  FeaturesSection,
  ResultsSection,
  CallToActionSection,
} from '@/components/portfolio/carousel-builder';

export default function CarouselBuilderPage() {
  return (
    <>
      {/* SEO */}
      <PageSEO
        title='Post & Carousel Generator - Case Study'
        description='Complete case study of Post & Carousel Generator, an AI tool that revolutionizes carousel creation for social media. 90% reduction in creation time.'
        keywords={[
          'Post & Carousel Generator',
          'AI for content creation',
          'LinkedIn Carousels',
          'UX Design Case Study',
          'AI Tool',
          'Content Creation',
          'Interface Design',
          'Next.js',
          'React',
          'OpenRouter API',
        ]}
        url='/portfolio/carousel-builder'
        type='article'
        publishedTime='2024-01-15T00:00:00Z'
        modifiedTime='2024-12-19T00:00:00Z'
        author='Elias Ricardo'
        section='Portfolio'
        tags={[
          'UX Design',
          'IA',
          'Content Creation',
          'Carrosséis',
          'LinkedIn',
          'Next.js',
          'React',
        ]}
      />

      {/* Structured Data */}
      <ProjectStructuredData
        name='Post & Carousel Generator'
        description='AI tool that revolutionizes carousel creation for social media, reducing creation time by 90% with professional templates and intelligent content generation.'
        image='/portfolios/carousel-builder/demo.mp4'
        url='/portfolio/carousel-builder'
        technologies={[
          'Next.js',
          'React',
          'TypeScript',
          'OpenRouter API',
          'TipTap',
          'Tailwind CSS',
        ]}
        category='UX/UI Design'
        datePublished='2024-01-15T00:00:00Z'
        dateModified='2024-12-19T00:00:00Z'
        author='Elias Ricardo'
      />

      <main className='max-w-4xl mx-auto py-12 px-4 space-y-20 pt-24'>
        {/* Analytics */}
        <PageAnalytics
          pageName='Carousel Builder'
          pagePath='/portfolio/carousel-builder'
          customProperties={{
            section: 'portfolio',
            project: 'carousel_builder',
            type: 'ux_case',
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

        {/* The Problem */}
        <ProblemSection />

        {/* The Solution */}
        <SolutionSection />

        {/* Development Journey */}
        <DevelopmentJourneySection />

        {/* Detailed Phases */}
        <DetailedPhasesSection />

        {/* Key Features */}
        <FeaturesSection />

        {/* Results & Impact */}
        <ResultsSection />

        {/* Call to Action */}
        <CallToActionSection />
      </main>
    </>
  );
}
