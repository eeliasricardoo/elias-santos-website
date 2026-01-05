import { useEffect, useState, useRef } from 'react';

/**
 * Optimized Intersection Observer hook with better INP performance
 * Uses IntersectionObserver API instead of scroll events
 */
export function useOptimizedInView(options: IntersectionObserverInit = {}) {
    const [isInView, setIsInView] = useState(false);
    const [hasBeenInView, setHasBeenInView] = useState(false);
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const inView = entry.isIntersecting;
                setIsInView(inView);

                if (inView && !hasBeenInView) {
                    setHasBeenInView(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '-50px',
                ...options,
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [hasBeenInView, options]);

    return { ref, isInView, hasBeenInView };
}

/**
 * Simplified hook for one-time visibility detection
 * Even better performance - disconnects after first intersection
 */
export function useInViewOnce(options: IntersectionObserverInit = {}) {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element || isInView) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
                rootMargin: '-50px',
                ...options,
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [isInView, options]);

    return { ref, isInView };
}
