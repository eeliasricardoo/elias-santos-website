'use client';

import { useEffect } from 'react';

interface WebVitalsMetric {
    name: string;
    value: number;
    rating: 'good' | 'needs-improvement' | 'poor';
    delta: number;
}

/**
 * Web Vitals Monitor
 * Tracks and reports Core Web Vitals metrics
 * Uses the official web-vitals library approach
 */
export function WebVitalsMonitor() {
    useEffect(() => {
        // Only run on client
        if (typeof window === 'undefined') return;

        /**
         * Report metric to analytics
         * You can replace this with your analytics service (Google Analytics, Vercel Analytics, etc.)
         */
        const reportMetric = (metric: WebVitalsMetric) => {
            if (process.env.NODE_ENV === 'development') {
                console.log(`📊 ${metric.name}:`, {
                    value: metric.value,
                    rating: metric.rating,
                    delta: metric.delta
                });
            }

            // In production, send to your analytics service
            // Example: gtag('event', metric.name, { value: metric.value });
            // Example: window.analytics?.track(metric.name, { value: metric.value });
        };

        /**
         * Get rating based on thresholds
         */
        const getRating = (name: string, value: number): 'good' | 'needs-improvement' | 'poor' => {
            const thresholds = {
                CLS: { good: 0.1, poor: 0.25 },
                FID: { good: 100, poor: 300 },
                LCP: { good: 2500, poor: 4000 },
                FCP: { good: 1800, poor: 3000 },
                TTFB: { good: 800, poor: 1800 },
                INP: { good: 200, poor: 500 }
            };

            const threshold = thresholds[name as keyof typeof thresholds];
            if (!threshold) return 'good';

            if (value <= threshold.good) return 'good';
            if (value <= threshold.poor) return 'needs-improvement';
            return 'poor';
        };

        /**
         * Track LCP (Largest Contentful Paint)
         */
        const observeLCP = () => {
            if (!('PerformanceObserver' in window)) return;

            try {
                const observer = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    const lastEntry = entries[entries.length - 1];

                    if (lastEntry) {
                        const value = lastEntry.startTime;
                        reportMetric({
                            name: 'LCP',
                            value,
                            rating: getRating('LCP', value),
                            delta: value
                        });
                    }
                });

                observer.observe({ entryTypes: ['largest-contentful-paint'] });

                return () => observer.disconnect();
            } catch (e) {
                // Observer not supported
            }
        };

        /**
         * Track FID (First Input Delay)
         */
        const observeFID = () => {
            if (!('PerformanceObserver' in window)) return;

            try {
                const observer = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    const firstInput = entries[0];

                    if (firstInput) {
                        const value = (firstInput as any).processingStart - firstInput.startTime;
                        reportMetric({
                            name: 'FID',
                            value,
                            rating: getRating('FID', value),
                            delta: value
                        });
                    }
                });

                observer.observe({ entryTypes: ['first-input'] });

                return () => observer.disconnect();
            } catch (e) {
                // Observer not supported
            }
        };

        /**
         * Track CLS (Cumulative Layout Shift)
         */
        const observeCLS = () => {
            if (!('PerformanceObserver' in window)) return;

            let clsValue = 0;
            let sessionValue = 0;
            let sessionEntries: PerformanceEntry[] = [];

            try {
                const observer = new PerformanceObserver((list) => {
                    const entries = list.getEntries() as any[];

                    entries.forEach((entry) => {
                        // Only count layout shifts without recent user input
                        if (!entry.hadRecentInput) {
                            const firstSessionEntry = sessionEntries[0];
                            const lastSessionEntry = sessionEntries[sessionEntries.length - 1];

                            // If the entry occurred less than 1 second after the previous entry and
                            // less than 5 seconds after the first entry in the session, include the
                            // entry in the current session. Otherwise, start a new session.
                            if (
                                sessionValue &&
                                entry.startTime - lastSessionEntry.startTime < 1000 &&
                                entry.startTime - firstSessionEntry.startTime < 5000
                            ) {
                                sessionValue += entry.value;
                                sessionEntries.push(entry);
                            } else {
                                sessionValue = entry.value;
                                sessionEntries = [entry];
                            }

                            // If the current session value is larger than the current CLS value,
                            // update CLS and the entries contributing to it.
                            if (sessionValue > clsValue) {
                                clsValue = sessionValue;

                                reportMetric({
                                    name: 'CLS',
                                    value: clsValue,
                                    rating: getRating('CLS', clsValue),
                                    delta: entry.value
                                });
                            }
                        }
                    });
                });

                observer.observe({ entryTypes: ['layout-shift'] });

                return () => observer.disconnect();
            } catch (e) {
                // Observer not supported
            }
        };

        /**
         * Track FCP (First Contentful Paint)
         */
        const observeFCP = () => {
            if (!('PerformanceObserver' in window)) return;

            try {
                const observer = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    const firstPaint = entries[0];

                    if (firstPaint) {
                        const value = firstPaint.startTime;
                        reportMetric({
                            name: 'FCP',
                            value,
                            rating: getRating('FCP', value),
                            delta: value
                        });
                    }
                });

                observer.observe({ entryTypes: ['paint'] });

                return () => observer.disconnect();
            } catch (e) {
                // Observer not supported
            }
        };

        /**
         * Track INP (Interaction to Next Paint)
         */
        const observeINP = () => {
            if (!('PerformanceObserver' in window)) return;

            let maxDuration = 0;

            try {
                const observer = new PerformanceObserver((list) => {
                    const entries = list.getEntries() as any[];

                    entries.forEach((entry) => {
                        const duration = entry.duration;

                        if (duration > maxDuration) {
                            maxDuration = duration;

                            reportMetric({
                                name: 'INP',
                                value: duration,
                                rating: getRating('INP', duration),
                                delta: duration
                            });
                        }
                    });
                });

                // Track event timing for INP
                observer.observe({ entryTypes: ['event'] });

                return () => observer.disconnect();
            } catch (e) {
                // Observer not supported
            }
        };

        // Initialize all observers
        const cleanupFns = [
            observeLCP(),
            observeFID(),
            observeCLS(),
            observeFCP(),
            observeINP()
        ].filter(Boolean);

        // Cleanup on unmount
        return () => {
            cleanupFns.forEach(cleanup => {
                if (typeof cleanup === 'function') cleanup();
            });
        };
    }, []);

    // This component doesn't render anything
    return null;
}
