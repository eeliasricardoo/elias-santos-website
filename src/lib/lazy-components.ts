/**
 * Lazy Loading Helper for Astro + React
 * 
 * This file helps reduce the initial bundle and prevent freezes
 * by loading heavy components only when needed.
 */

import { lazy } from 'react';
import type { ComponentType } from 'react';

/**
 * Wrapper for lazy loading with proper typing for Astro
 */
export const createLazyComponent = <T extends ComponentType<any>>(
    importFunc: () => Promise<{ default: T }>
) => {
    return lazy(importFunc);
};

/**
 * Lazy loading for Framer Motion components
 * Reduces initial bundle size significantly (~100KB saved)
 */
export const LazyMotion = createLazyComponent(
    () => import('framer-motion').then(mod => ({ default: mod.motion.div as any }))
);

/**
 * Preload critical resources
 * Use this to preload components that will be used soon
 */
export const preloadComponent = (importFunc: () => Promise<any>) => {
    if (typeof window !== 'undefined') {
        // Preload only on client
        void importFunc();
    }
};

/**
 * Dynamic import for heavy components with loading state
 */
export async function loadComponentWhenIdle<T>(
    importFunc: () => Promise<{ default: T }>
): Promise<{ default: T }> {
    // Wait for browser idle time before loading
    if ('requestIdleCallback' in window) {
        return new Promise((resolve) => {
            requestIdleCallback(() => {
                importFunc().then(resolve);
            });
        });
    }

    // Fallback for browsers without requestIdleCallback
    return importFunc();
}
