import { useCallback } from 'react';

/**
 * Optimized click handler hook with passive event listeners
 * Improves INP by reducing main thread blocking
 */
export function useOptimizedClick(
    handler: () => void,
    options?: { passive?: boolean; capture?: boolean }
) {
    return useCallback(
        (e: React.MouseEvent) => {
            // Use requestIdleCallback if available, otherwise requestAnimationFrame
            if ('requestIdleCallback' in window) {
                (window as any).requestIdleCallback(() => handler(), { timeout: 50 });
            } else {
                requestAnimationFrame(() => handler());
            }
        },
        [handler]
    );
}

/**
 * Debounce function for expensive operations
 * Prevents INP degradation from rapid interactions
 */
export function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number = 100
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;

    return function executedFunction(...args: Parameters<T>) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
