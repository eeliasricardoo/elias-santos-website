/**
 * Performance-optimized scroll utilities for better INP scores
 * Implements requestAnimationFrame throttling and passive event listeners
 */

/**
 * Throttles scroll events using requestAnimationFrame
 * This ensures scroll handlers run at most once per frame (~16ms)
 */
export function throttleRAF(callback: () => void) {
    let rafId: number | null = null;
    let lastArgs: any[] | null = null;

    const throttledFunction = (...args: any[]) => {
        lastArgs = args;

        if (rafId === null) {
            rafId = requestAnimationFrame(() => {
                callback.apply(null, lastArgs as any);
                rafId = null;
                lastArgs = null;
            });
        }
    };

    throttledFunction.cancel = () => {
        if (rafId !== null) {
            cancelAnimationFrame(rafId);
            rafId = null;
        }
    };

    return throttledFunction;
}

/**
 * Debounce function for expensive operations
 */
export function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
): T & { cancel: () => void } {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const debounced = function (this: any, ...args: Parameters<T>) {
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            func.apply(this, args);
            timeoutId = null;
        }, wait);
    } as T & { cancel: () => void };

    debounced.cancel = () => {
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }
    };

    return debounced;
}

/**
 * Creates a passive scroll listener with RAF throttling
 */
export function addOptimizedScrollListener(
    callback: () => void,
    options: { throttle?: boolean; passive?: boolean } = {}
) {
    const { throttle = true, passive = true } = options;

    const handler = throttle ? throttleRAF(callback) : callback;

    window.addEventListener('scroll', handler as any, { passive });

    return () => {
        if (throttle && typeof handler === 'function' && 'cancel' in handler) {
            (handler as any).cancel();
        }
        window.removeEventListener('scroll', handler as any);
    };
}
