// Utilitários para performance e monitoramento

// Debounce function
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Throttle function
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Memoization utility
export function memoize<T extends (...args: any[]) => any>(
  func: T,
  resolver?: (...args: Parameters<T>) => string
): T {
  const cache = new Map<string, ReturnType<T>>();

  return ((...args: Parameters<T>) => {
    const key = resolver ? resolver(...args) : JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = func(...args);
    cache.set(key, result);
    return result;
  }) as T;
}

// Performance measurement
export class PerformanceMonitor {
  private static marks = new Map<string, number>();
  private static measures = new Map<string, number>();

  static mark(name: string): void {
    if (typeof window !== 'undefined' && window.performance) {
      window.performance.mark(name);
      this.marks.set(name, performance.now());
    }
  }

  static measure(name: string, startMark?: string, endMark?: string): number {
    if (typeof window !== 'undefined' && window.performance) {
      try {
        const measure = window.performance.measure(name, startMark, endMark);
        const duration = measure.duration;
        this.measures.set(name, duration);

        // Log in development
        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line no-console
          console.log(`⏱️ ${name}: ${duration.toFixed(2)}ms`);
        }

        return duration;
      } catch (error) {
        console.warn(`Failed to measure ${name}:`, error);
        return 0;
      }
    }
    return 0;
  }

  static getMeasure(name: string): number | undefined {
    return this.measures.get(name);
  }

  static clearMarks(): void {
    if (typeof window !== 'undefined' && window.performance) {
      window.performance.clearMarks();
      this.marks.clear();
    }
  }

  static clearMeasures(): void {
    if (typeof window !== 'undefined' && window.performance) {
      window.performance.clearMeasures();
      this.measures.clear();
    }
  }
}

// Intersection Observer utility
export function createIntersectionObserver(
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
): IntersectionObserver {
  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    ...options,
  };

  return new IntersectionObserver(callback, defaultOptions);
}

// Resource loading utility
export function preloadResource(
  href: string,
  as: 'script' | 'style' | 'image' | 'font' | 'fetch'
): Promise<void> {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;

    link.onload = () => resolve();
    link.onerror = () => reject(new Error(`Failed to preload ${href}`));

    document.head.appendChild(link);
  });
}

// Bundle size monitoring
export function getBundleSize(): Promise<{
  total: number;
  chunks: Record<string, number>;
}> {
  return new Promise(resolve => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const entries = performance.getEntriesByType('resource');
      const chunks: Record<string, number> = {};
      let total = 0;

      entries.forEach(entry => {
        if (entry.name.includes('chunk') || entry.name.includes('bundle')) {
          const size = (entry as any).transferSize || 0;
          chunks[entry.name] = size;
          total += size;
        }
      });

      resolve({ total, chunks });
    } else {
      resolve({ total: 0, chunks: {} });
    }
  });
}

// Memory usage monitoring
export function getMemoryUsage(): {
  used: number;
  total: number;
  limit: number;
} | null {
  if (typeof window !== 'undefined' && 'memory' in performance) {
    const memory = (performance as any).memory;
    return {
      used: memory.usedJSHeapSize,
      total: memory.totalJSHeapSize,
      limit: memory.jsHeapSizeLimit,
    };
  }
  return null;
}

// Core Web Vitals monitoring
export function monitorCoreWebVitals(): void {
  if (typeof window === 'undefined') return;

  // LCP (Largest Contentful Paint)
  if ('PerformanceObserver' in window) {
    const lcpObserver = new PerformanceObserver(list => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];

      if (lastEntry) {
        const lcp = lastEntry.startTime;
        // eslint-disable-next-line no-console
        console.log(`🎯 LCP: ${lcp.toFixed(2)}ms`);

        // Report to analytics
        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'LCP',
            value: Math.round(lcp),
          });
        }
      }
    });

    try {
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (error) {
      console.warn('LCP monitoring not supported:', error);
    }
  }

  // FID (First Input Delay)
  if ('PerformanceObserver' in window) {
    const fidObserver = new PerformanceObserver(list => {
      const entries = list.getEntries();

      entries.forEach(entry => {
        const fid = (entry as any).processingStart - entry.startTime;
        // eslint-disable-next-line no-console
        console.log(`⚡ FID: ${fid.toFixed(2)}ms`);

        // Report to analytics
        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'FID',
            value: Math.round(fid),
          });
        }
      });
    });

    try {
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (error) {
      console.warn('FID monitoring not supported:', error);
    }
  }
}

// Error tracking utility
export function trackError(error: Error, context?: Record<string, any>): void {
  // eslint-disable-next-line no-console
  console.error('🚨 Error tracked:', error, context);

  // Report to analytics
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'exception', {
      description: error.message,
      fatal: false,
      ...context,
    });
  }
}

// Performance budget checking
export function checkPerformanceBudget(budget: {
  lcp?: number;
  fid?: number;
  bundleSize?: number;
}): Promise<{
  passed: boolean;
  violations: string[];
}> {
  return new Promise(resolve => {
    const violations: string[] = [];

    // Check bundle size
    if (budget.bundleSize) {
      getBundleSize().then(({ total }) => {
        if (total > budget.bundleSize!) {
          violations.push(
            `Bundle size ${total} exceeds budget ${budget.bundleSize}`
          );
        }
      });
    }

    // Check memory usage
    const memory = getMemoryUsage();
    if (memory && memory.used > memory.limit * 0.8) {
      violations.push('Memory usage is high');
    }

    resolve({
      passed: violations.length === 0,
      violations,
    });
  });
}
