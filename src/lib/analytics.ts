// Configuração de Analytics e Monitoramento
export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

export interface PageViewEvent {
  page_title: string;
  page_location: string;
  page_referrer?: string;
}

// Google Analytics 4
export const GA_TRACKING_ID = import.meta.env.PUBLIC_GA_ID;

// Função para inicializar GA4
export const initGA = () => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    // Carregar GA4 script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // Configurar GA4
    // Configurar GA4
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });

    // Expor gtag globalmente
    (window as any).gtag = gtag;
  }
};

// Função para trackear eventos
export const trackEvent = (event: AnalyticsEvent) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
      ...event.custom_parameters,
    });
  }
};

// Função para trackear page views
export const trackPageView = (event: PageViewEvent) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', GA_TRACKING_ID, {
      page_title: event.page_title,
      page_location: event.page_location,
      page_referrer: event.page_referrer,
    });
  }
};

// Eventos pré-definidos
export const AnalyticsEvents = {
  // Navegação
  NAVIGATION_CLICK: (label: string) => ({
    action: 'navigation_click',
    category: 'navigation',
    label,
  }),

  // Portfolio
  PORTFOLIO_VIEW: (project: string) => ({
    action: 'portfolio_view',
    category: 'portfolio',
    label: project,
  }),

  PORTFOLIO_CLICK: (project: string) => ({
    action: 'portfolio_click',
    category: 'portfolio',
    label: project,
  }),

  // Contato
  CONTACT_FORM_SUBMIT: () => ({
    action: 'contact_form_submit',
    category: 'contact',
  }),

  CONTACT_FORM_SUCCESS: () => ({
    action: 'contact_form_success',
    category: 'contact',
  }),

  CONTACT_FORM_ERROR: (error: string) => ({
    action: 'contact_form_error',
    category: 'contact',
    label: error,
  }),

  // Social
  SOCIAL_LINK_CLICK: (platform: string) => ({
    action: 'social_link_click',
    category: 'social',
    label: platform,
  }),

  // Performance
  PERFORMANCE_METRIC: (metric: string, value: number) => ({
    action: 'performance_metric',
    category: 'performance',
    label: metric,
    value,
  }),

  // Erros
  ERROR_OCCURRED: (error: string) => ({
    action: 'error_occurred',
    category: 'error',
    label: error,
  }),
};

// Hook para usar analytics
export const useAnalytics = () => {
  const track = (event: AnalyticsEvent) => {
    trackEvent(event);
  };

  const trackPage = (event: PageViewEvent) => {
    trackPageView(event);
  };

  return { track, trackPage };
};
