/**
 * Lazy Loading Helper
 * 
 * Este arquivo ajuda a reduzir o bundle inicial e prevenir congelamentos
 * carregando componentes pesados apenas quando necessário.
 */

import React from 'react';
import dynamic from 'next/dynamic';

/**
 * Wrapper para lazy loading com loading state
 */
export const createLazyComponent = <T extends React.ComponentType<any>>(
    importFunc: () => Promise<{ default: T }>,
    options?: {
        loading?: () => React.ReactNode;
        ssr?: boolean;
    }
) => {
    return dynamic(importFunc, {
        loading: options?.loading || (() => React.createElement('div', { className: 'animate-pulse' }, 'Carregando...')),
        ssr: options?.ssr ?? true,
    });
};

/**
 * Lazy loading para componentes de gráficos (recharts)
 * Estes são especialmente pesados e devem ser carregados sob demanda
 */
export const LazyCharts = {
    BarChart: createLazyComponent(
        () => import('recharts').then(mod => ({ default: mod.BarChart })),
        { ssr: false }
    ),
    LineChart: createLazyComponent(
        () => import('recharts').then(mod => ({ default: mod.LineChart })),
        { ssr: false }
    ),
    PieChart: createLazyComponent(
        () => import('recharts').then(mod => ({ default: mod.PieChart })),
        { ssr: false }
    ),
};

/**
 * Lazy loading para animações (framer-motion)
 * Evita carregar motion quando não é necessário
 */
export const LazyMotion = createLazyComponent(
    () => import('framer-motion').then(mod => ({ default: mod.motion.div })),
    { ssr: false }
);

/**
 * Preload de recursos críticos
 * Use isso para precarregar componentes que serão usados em breve
 */
export const preloadComponent = (importFunc: () => Promise<any>) => {
    if (typeof window !== 'undefined') {
        // Preload apenas no cliente
        importFunc();
    }
};
