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
  FeaturesSection,
  UXProcessSection,
  ResultsSection,
  CallToActionSection,
} from '@/components/portfolio/support-queue';

export default function SupportQueuePage() {
  return (
    <>
      {/* SEO */}
      <PageSEO
        title='Feat UX/UI — Support Queue — Omnichannel Chat | Case Study'
        description='How we reduced time-to-first-response by 22% using waiting-time queue ordering and a persistent, actionable assignment pop-up. First-contact CSAT increased from 4.1 to 4.3 and reopens dropped by 9%.'
        keywords={[
          'Support Queue',
          'Omnichannel Chat',
          'UX/UI Design',
          'Time-to-first-response',
          'CSAT',
          'Pop-up Design',
          'Customer Support',
          'User Experience',
          'Interface Design',
          'Case Study',
          'UX Research',
          'Zendesk',
          'Intercom',
          'Operational Efficiency',
          'Customer Satisfaction',
        ]}
        url='/portfolio/support-queue'
        type='article'
        publishedTime='2024-07-05T00:00:00Z'
        modifiedTime='2024-12-19T00:00:00Z'
        author='Elias Ricardo'
        section='Portfolio'
        tags={['UX/UI', 'Design', 'Chat', 'Atendimento', 'Figma', 'Case Study']}
      />

      {/* Structured Data */}
      <ProjectStructuredData
        name='Feat UX/UI — Support Queue — Omnichannel Chat'
        description='Case study showing how we reduced time-to-first-response by 22% with a persistent, actionable assignment pop-up and queue ordering by waiting time. CSAT rose from 4.1 to 4.3 and reopens decreased by 9%.'
        image='/portfolios/omnichanel.webp'
        url='/portfolio/support-queue'
        technologies={[
          'Figma',
          'UX Research',
          'UI Design',
          'React',
          'TypeScript',
          'Design System',
        ]}
        category='UX/UI Design'
        datePublished='2024-07-05T00:00:00Z'
        dateModified='2024-12-19T00:00:00Z'
        author='Elias Ricardo'
      />

      <main className='max-w-4xl mx-auto py-12 px-4 space-y-20 pt-24'>
        {/* Analytics */}
        <PageAnalytics
          pageName='Portfolio Support Queue'
          pagePath='/portfolio/support-queue'
          customProperties={{
            section: 'portfolio',
            project: 'support-queue',
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

        {/* Problem */}
        <ProblemSection />

        {/* Solution */}
        <SolutionSection />

        {/* Features */}
        <FeaturesSection />

        {/* UX Process */}
        <UXProcessSection />

        {/* Results */}
        <ResultsSection />

        {/* Call to Action */}
        <CallToActionSection />
      </main>
    </>
  );
}
