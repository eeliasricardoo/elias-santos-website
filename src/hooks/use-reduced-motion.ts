import { useEffect, useState } from 'react';

/**
 * Detects if the user prefers reduced motion or is on a low-end device
 * Helps optimize animations and improve INP on mobile
 */
export function useReducedMotion() {
    const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

    useEffect(() => {
        // Check for user preference
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

        // Check for low-end device indicators
        const isLowEndDevice =
            // Limited CPU cores
            (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
            // Low memory (< 4GB)
            ((navigator as any).deviceMemory && (navigator as any).deviceMemory < 4) ||
            // Touch device (mobile)
            ('ontouchstart' in window);

        const shouldReduce = mediaQuery.matches || isLowEndDevice;
        setShouldReduceMotion(shouldReduce);

        const handler = (e: MediaQueryListEvent) => {
            setShouldReduceMotion(e.matches || isLowEndDevice);
        };

        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    return shouldReduceMotion;
}

/**
 * Hook to conditionally disable hover animations on touch devices
 * Improves INP by preventing unnecessary animations on mobile
 */
export function useDisableHoverOnTouch() {
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        setIsTouch(hasTouch);
    }, []);

    return isTouch;
}

/**
 * Returns optimized Fram Motion variants based on device capability
 * Automatically reduces or disables animations on low-end devices
 */
export function useOptimizedMotion() {
    const shouldReduceMotion = useReducedMotion();
    const isTouch = useDisableHoverOnTouch();

    return {
        // Disable expensive animations on low-end devices
        shouldAnimate: !shouldReduceMotion,

        // Disable hover animations on touch devices (they cause INP issues)
        shouldAnimateHover: !isTouch && !shouldReduceMotion,

        // Reduce animation duration on lower-end devices
        duration: shouldReduceMotion ? 0.1 : 0.3,

        // Simpler easing for better performance
        ease: shouldReduceMotion ? 'linear' : [0.4, 0, 0.2, 1],
    };
}
