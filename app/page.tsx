import { Suspense } from 'react';
import { PageAnalytics } from '@/components/analytics/page-analytics';

// Importando componentes de seções
import {
  HeroSection,
  CompaniesSection,
  PortfolioSection,
  DepoimentsSection,
} from '@/components/home';
import { AboutMeSection } from '@/components/home/about-me';
import { Footer } from '@/components/Footer';
import { GetInTouch } from '@/components/home/get-in-touch';

// Componente de Background Animado - movido para client component
import { AnimatedBackground } from '@/components/home/AnimatedBackground';
import { ProgressIndicator } from '@/components/home/ProgressIndicator';
import { ScrollIndicator } from '@/components/home/ScrollIndicator';

export default function Home() {
  return (
    <div className='relative min-h-screen'>
      {/* Analytics */}
      <PageAnalytics
        pageName='Home'
        pagePath='/'
        customProperties={{
          section: 'main',
          language: 'pt-BR',
        }}
      />

      {/* Background Animado */}
      <Suspense fallback={null}>
      <AnimatedBackground />
      </Suspense>

      {/* Progress Indicator */}
      <Suspense fallback={null}>
      <ProgressIndicator />
      </Suspense>

      {/* Scroll Indicator */}
      <Suspense fallback={null}>
      <ScrollIndicator />
      </Suspense>

      {/* Hero Section */}
      <HeroSection />

      {/* Companies Section - Movido para logo após o Hero */}
      <CompaniesSection />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* About Me Section */}
      <AboutMeSection />

      {/* Depoiments Section */}
      <DepoimentsSection />

      {/* Get in Touch Section */}
      <GetInTouch />

      {/* Footer */}
      <Footer />
    </div>
  );
}
