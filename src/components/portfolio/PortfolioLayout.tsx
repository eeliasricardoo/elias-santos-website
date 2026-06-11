'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { addOptimizedScrollListener } from '@/utils/scroll-performance';

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

// Componente de Progress Indicator
function ProgressIndicator() {
  const [mounted, setMounted] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !progressRef.current) return;

    const progressBar = progressRef.current;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = Math.min(Math.max(scrollTop / docHeight, 0), 1);

      // Escrita direta no DOM (GPU) — evita re-render por frame de scroll
      progressBar.style.transform = `scaleX(${scrollPercent})`;
    };

    handleScroll();

    return addOptimizedScrollListener(handleScroll, {
      throttle: true,
      passive: true,
    });
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div
      ref={progressRef}
      className='fixed top-0 left-0 right-0 h-1 bg-foreground origin-left z-50 will-change-transform'
      style={{ transform: 'scaleX(0)' }}
    />
  );
}

// Componente de Scroll Indicator
function ScrollIndicator() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !containerRef.current || !progressRef.current) return;

    const container = containerRef.current;
    const progressBar = progressRef.current;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min((scrollY / scrollHeight) * 100, 100);

      container.style.opacity = scrollY > 100 ? '1' : '0';
      progressBar.style.height = `${progress}%`;
    };

    handleScroll();

    return addOptimizedScrollListener(handleScroll, {
      throttle: true,
      passive: true,
    });
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className='fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block transition-opacity duration-300'
      style={{ opacity: 0 }}
    >
      <div className='flex flex-col items-center space-y-4'>
        <div className='w-1 h-32 bg-muted/30 rounded-full relative'>
          <div
            ref={progressRef}
            className='absolute top-0 left-0 w-full bg-foreground rounded-full transition-[height] duration-100'
            style={{ height: '0%' }}
          />
        </div>
        <div className='w-6 h-6 border-2 border-muted-foreground/30 rounded-full flex items-center justify-center animate-spin-slow'>
          <ChevronDown className='w-3 h-3 text-muted-foreground' />
        </div>
      </div>
    </div>
  );
}

export function PortfolioLayout({ children }: PortfolioLayoutProps) {
  return (
    <div className='relative min-h-screen'>
      {/* Progress Indicator */}
      <ProgressIndicator />

      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Conteúdo da página */}
      {children}
    </div>
  );
}
