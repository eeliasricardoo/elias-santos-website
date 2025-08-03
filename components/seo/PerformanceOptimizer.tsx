'use client';

import { useEffect } from 'react';

interface PerformanceOptimizerProps {
  preloadImages?: string[];
  preloadFonts?: string[];
  dnsPrefetch?: string[];
  preconnect?: string[];
}

export function PerformanceOptimizer({
  preloadImages = [],
  preloadFonts = [],
  dnsPrefetch = [],
  preconnect = [],
}: PerformanceOptimizerProps) {
  useEffect(() => {
    // Preload critical images
    preloadImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });

    // Preload critical fonts
    preloadFonts.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.href = src;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // DNS prefetch for external domains
    dnsPrefetch.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });

    // Preconnect to external domains
    preconnect.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      document.head.appendChild(link);
    });

    // Cleanup function
    return () => {
      // Remove dynamically added links on unmount
      const links = document.querySelectorAll(
        'link[rel="preload"], link[rel="dns-prefetch"], link[rel="preconnect"]'
      );
      links.forEach(link => {
        if (link.getAttribute('data-dynamic') === 'true') {
          link.remove();
        }
      });
    };
  }, [preloadImages, preloadFonts, dnsPrefetch, preconnect]);

  return null;
}
