'use client';

import { motion } from 'framer-motion';

export interface MetricItem {
    value: string;
    label: string;
    className?: string;
}

interface MetricsGridProps {
    metrics: MetricItem[];
}

export function MetricsGrid({ metrics }: MetricsGridProps) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/20 border border-border/20 rounded-xl overflow-hidden mt-12">
            {metrics.map((metric, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="bg-card p-6 flex flex-col gap-2"
                >
                    <div
                        className={`text-3xl md:text-4xl font-bold leading-none ${metric.className || ''}`}
                        style={{ color: 'var(--brand, hsl(var(--foreground)))' }}
                    >
                        {metric.value}
                    </div>
                    <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        {metric.label}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
