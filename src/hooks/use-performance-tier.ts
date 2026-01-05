import { useEffect, useState } from 'react';

export type PerformanceTier = 'high' | 'medium' | 'low';

interface PerformanceMetrics {
    tier: PerformanceTier;
    deviceMemory: number | undefined;
    hardwareConcurrency: number;
    connectionType: string | undefined;
}

/**
 * Hook to detect device performance tier
 * Returns 'high', 'medium', or 'low' based on device capabilities
 */
export function usePerformanceTier(): PerformanceMetrics {
    const [metrics, setMetrics] = useState<PerformanceMetrics>({
        tier: 'high', // Default to high for SSR
        deviceMemory: undefined,
        hardwareConcurrency: typeof navigator !== 'undefined' ? (navigator.hardwareConcurrency || 4) : 4,
        connectionType: undefined,
    });

    useEffect(() => {
        // Only run on client
        if (typeof window === 'undefined') return;

        const nav = navigator as any;

        // Get device metrics
        const deviceMemory = nav.deviceMemory; // GB of RAM (Chrome only)
        const hardwareConcurrency = nav.hardwareConcurrency || 4; // CPU cores
        const connection = nav.connection || nav.mozConnection || nav.webkitConnection;
        const connectionType = connection?.effectiveType; // '4g', '3g', '2g', 'slow-2g'

        // Calculate performance tier
        let tier: PerformanceTier = 'high';

        // Low-end detection
        if (
            (deviceMemory && deviceMemory <= 2) || // <= 2GB RAM
            hardwareConcurrency <= 2 || // <= 2 CPU cores
            connectionType === '2g' ||
            connectionType === 'slow-2g'
        ) {
            tier = 'low';
        }
        // Medium-end detection
        else if (
            (deviceMemory && deviceMemory <= 4) || // <= 4GB RAM
            hardwareConcurrency <= 4 || // <= 4 CPU cores
            connectionType === '3g'
        ) {
            tier = 'medium';
        }

        // Check for reduced motion preference (accessibility)
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            tier = 'low'; // Respect user preference
        }

        setMetrics({
            tier,
            deviceMemory,
            hardwareConcurrency,
            connectionType,
        });

        // Log for debugging (remove in production)
        if (process.env.NODE_ENV === 'development') {
            console.log('🎯 Performance Tier:', {
                tier,
                deviceMemory: deviceMemory ? `${deviceMemory}GB` : 'unknown',
                cores: hardwareConcurrency,
                connection: connectionType || 'unknown',
            });
        }
    }, []);

    return metrics;
}

/**
 * Simple hook that returns only the tier
 */
export function usePerformance(): PerformanceTier {
    const { tier } = usePerformanceTier();
    return tier;
}
