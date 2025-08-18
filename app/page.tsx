import { Suspense, lazy } from 'react';
import { PageAnalytics } from '@/components/analytics/page-analytics';

// Importando componentes críticos para LCP
import { HeroSection } from '@/components/home';

// Componentes não críticos - carregamento lazy

const PortfolioSection = lazy(() =>
  import('@/components/home').then(module => ({
    default: module.PortfolioSection,
  }))
);
const DepoimentsSection = lazy(() =>
  import('@/components/home').then(module => ({
    default: module.DepoimentsSection,
  }))
);
const AboutMeSection = lazy(() =>
  import('@/components/home/about-me').then(module => ({
    default: module.AboutMeSection,
  }))
);
const Footer = lazy(() =>
  import('@/components/Footer').then(module => ({ default: module.Footer }))
);
const GetInTouch = lazy(() =>
  import('@/components/home/get-in-touch').then(module => ({
    default: module.GetInTouch,
  }))
);

// Componentes de background e UI - carregamento lazy
const AnimatedBackground = lazy(() =>
  import('@/components/home/AnimatedBackground').then(module => ({
    default: module.AnimatedBackground,
  }))
);
const ProgressIndicator = lazy(() =>
  import('@/components/home/ProgressIndicator').then(module => ({
    default: module.ProgressIndicator,
  }))
);
const ScrollIndicator = lazy(() =>
  import('@/components/home/ScrollIndicator').then(module => ({
    default: module.ScrollIndicator,
  }))
);

export default function Home() {
  return (
    <div className='relative min-h-screen'>
      {/* Analytics */}
      <PageAnalytics
        pageName='Home'
        pagePath='/'
        customProperties={{
          section: 'main',
          language: 'en-US',
        }}
      />

      {/* Hero Section - elemento crítico para LCP carregado imediatamente */}
      <HeroSection />

      {/* Background Animado - carregamento otimizado após hero */}
      <Suspense fallback={null}>
        <AnimatedBackground />
      </Suspense>



      {/* Portfolio Section - lazy com skeleton */}
      <Suspense
        fallback={
          <div className='min-h-[40rem] bg-background/5 animate-pulse' />
        }
      >
        <PortfolioSection />
      </Suspense>

      {/* About Me Section - lazy loading */}
      <Suspense fallback={<div className='h-32' />}>
        <AboutMeSection />
      </Suspense>

      {/* Depoiments Section - lazy loading */}
      <Suspense fallback={<div className='h-40' />}>
        <DepoimentsSection />
      </Suspense>

      {/* Get in Touch Section - lazy loading */}
      <Suspense fallback={<div className='h-48' />}>
        <GetInTouch />
      </Suspense>

      {/* Footer - lazy loading */}
      <Suspense fallback={<div className='h-16' />}>
        <Footer />
      </Suspense>

      {/* Progress e Scroll Indicators - carregamento lazy sem fallback */}
      <Suspense fallback={null}>
        <ProgressIndicator />
      </Suspense>

      <Suspense fallback={null}>
        <ScrollIndicator />
      </Suspense>
    </div>
  );
}
