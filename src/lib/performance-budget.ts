/**
 * Performance Budget Configuration
 * 
 * Define size limits for bundles and assets to ensure performance
 * Use with build tools to get warnings/errors when budgets are exceeded
 */

export const PERFORMANCE_BUDGET = {
    /**
     * JavaScript Bundle Sizes (in KB)
     */
    bundles: {
        // Main app bundle
        main: {
            max: 150, // KB
            warning: 120, // KB
        },
        // Vendor bundles
        'react-vendor': {
            max: 150,
            warning: 130,
        },
        'motion-vendor': {
            max: 120,
            warning: 100,
        },
        'radix-vendor': {
            max: 100,
            warning: 80,
        },
        'icons-vendor': {
            max: 50,
            warning: 40,
        },
        vendor: {
            max: 100,
            warning: 80,
        },
    },

    /**
     * Asset Sizes (in KB)
     */
    assets: {
        image: {
            max: 200, // No single image should exceed 200KB
            warning: 150,
        },
        font: {
            max: 100, // Font files
            warning: 80,
        },
        css: {
            max: 50, // CSS files
            warning: 40,
        },
    },

    /**
     * Total Page Weight (in MB)
     */
    total: {
        max: 3.0, // Total page weight including all assets
        warning: 2.5,
    },

    /**
     * Core Web Vitals Targets
     */
    vitals: {
        LCP: {
            good: 2500, // ms
            needsImprovement: 4000, // ms
        },
        FID: {
            good: 100, // ms
            needsImprovement: 300, // ms
        },
        CLS: {
            good: 0.1,
            needsImprovement: 0.25,
        },
        FCP: {
            good: 1800, // ms
            needsImprovement: 3000, // ms
        },
        TTFB: {
            good: 800, // ms
            needsImprovement: 1800, // ms
        },
        INP: {
            good: 200, // ms
            needsImprovement: 500, // ms
        },
    },

    /**
     * Network Request Limits
     */
    requests: {
        max: 50, // Maximum number of requests
        warning: 40,
    },
} as const;

/**
 * Check if a value is within budget
 */
export function isWithinBudget(
    value: number,
    budget: { max: number; warning: number }
): 'good' | 'warning' | 'exceeded' {
    if (value <= budget.warning) return 'good';
    if (value <= budget.max) return 'warning';
    return 'exceeded';
}

/**
 * Format bytes to human readable
 */
export function formatBytes(bytes: number): string {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Get status emoji for budget check
 */
export function getBudgetEmoji(
    status: 'good' | 'warning' | 'exceeded'
): string {
    switch (status) {
        case 'good':
            return '✅';
        case 'warning':
            return '⚠️';
        case 'exceeded':
            return '❌';
    }
}
