'use client';

import { useEffect } from 'react';

import { initGA, useAnalytics } from '@/lib/analytics';

export function GoogleAnalytics() {

  const { trackPage } = useAnalytics();

  useEffect(() => {
    // Inicializar GA4
    initGA();
  }, []);

  useEffect(() => {
    // Track changes
    const handleRouteChange = () => {
      trackPage({
        page_title: document.title,
        page_location: window.location.href,
        page_referrer: document.referrer,
      });
    };

    // Initial track
    handleRouteChange();

    // In a standard Astro app, components unmount/remount on navigation, so this is sufficient.
    // If using ViewTransitions, we might need to listen to specific events, but this covers the basic case.
  }, [trackPage]);

  return null;
}
