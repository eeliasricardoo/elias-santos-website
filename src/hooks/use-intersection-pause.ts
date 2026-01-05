import { useEffect, useRef, useState } from 'react';

/**
 * Hook to pause animations when element is not visible
 * Improves performance by stopping unnecessary animations
 */
export function useIntersectionPause(threshold = 0.1) {
    const ref = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold, rootMargin: '50px' }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [threshold]);

    return { ref, isVisible };
}
