'use client';

import { trackEvent, trackPageView as libTrackPageView } from '@/lib/analytics';
import { useEffect } from 'react';

interface PageAnalyticsProps {
  pageName: string;
  pagePath: string;
  customProperties?: Record<string, string | number | boolean>;
}

export function PageAnalytics({
  pageName,
  pagePath,
  customProperties = {},
}: PageAnalyticsProps) {
  useEffect(() => {
    // Rastrear visualização da página
    libTrackPageView({
      page_title: pageName,
      page_location: pagePath,
      ...customProperties,
    });
  }, [pageName, pagePath, customProperties]);

  return null; // Componente não renderiza nada
}

// Hook para rastrear eventos customizados
export function useAnalytics() {
  const trackCustomEvent = (
    eventName: string,
    properties?: Record<string, any>
  ) => {
    trackEvent({
      action: eventName,
      category: 'custom',
      custom_parameters: properties,
    });
  };

  const trackPageView = (
    pageName: string,
    pagePath: string,
    properties?: Record<string, string | number | boolean>
  ) => {
    libTrackPageView({
      page_title: pageName,
      page_location: pagePath,
      ...properties,
    });
  };

  const trackButtonClick = (
    buttonName: string,
    pagePath: string,
    properties?: Record<string, string | number | boolean>
  ) => {
    trackEvent({
      action: 'button_click',
      category: 'interaction',
      label: buttonName,
      custom_parameters: { page_path: pagePath, ...properties },
    });
  };

  const trackFormSubmission = (
    formName: string,
    pagePath: string,
    properties?: Record<string, string | number | boolean>
  ) => {
    trackEvent({
      action: 'form_submission',
      category: 'interaction',
      label: formName,
      custom_parameters: { page_path: pagePath, ...properties },
    });
  };

  return {
    trackEvent: trackCustomEvent,
    trackPageView,
    trackButtonClick,
    trackFormSubmission,
  };
}
