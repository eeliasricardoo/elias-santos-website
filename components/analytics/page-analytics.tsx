'use client';

import { track } from '@vercel/analytics';
import { useEffect } from 'react';

interface PageAnalyticsProps {
  pageName: string;
  pagePath: string;
  customProperties?: Record<string, string | number | boolean>;
}

export function PageAnalytics({ 
  pageName, 
  pagePath, 
  customProperties = {} 
}: PageAnalyticsProps) {
  useEffect(() => {
    // Rastrear visualização da página
    track('page_view', {
      page_name: pageName,
      page_path: pagePath,
      ...customProperties
    });
  }, [pageName, pagePath, customProperties]);

  return null; // Componente não renderiza nada
}

// Hook para rastrear eventos customizados
export function useAnalytics() {
  const trackEvent = (
    eventName: string, 
    properties?: Record<string, string | number | boolean>
  ) => {
    track(eventName, properties);
  };

  const trackPageView = (
    pageName: string, 
    pagePath: string,
    properties?: Record<string, string | number | boolean>
  ) => {
    track('page_view', {
      page_name: pageName,
      page_path: pagePath,
      ...properties
    });
  };

  const trackButtonClick = (
    buttonName: string, 
    pagePath: string,
    properties?: Record<string, string | number | boolean>
  ) => {
    track('button_click', {
      button_name: buttonName,
      page_path: pagePath,
      ...properties
    });
  };

  const trackFormSubmission = (
    formName: string, 
    pagePath: string,
    properties?: Record<string, string | number | boolean>
  ) => {
    track('form_submission', {
      form_name: formName,
      page_path: pagePath,
      ...properties
    });
  };

  return {
    trackEvent,
    trackPageView,
    trackButtonClick,
    trackFormSubmission
  };
} 