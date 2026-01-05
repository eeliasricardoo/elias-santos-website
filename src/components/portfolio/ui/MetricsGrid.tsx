'use client';

import { motion } from 'framer-motion';

export interface MetricItem {
    value: string;
    label: string;
    color?: string; // e.g., 'text-green-500', 'text-blue-500'
    className?: string; // for custom text colors if needed
}

interface MetricsGridProps {
    metrics: MetricItem[];
}

export function MetricsGrid({ metrics }: MetricsGridProps) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {metrics.map((metric, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="bg-card/80 border border-border/20 rounded-xl p-6 text-center"
                >
                    <div className={`text-3xl font-bold ${metric.color || 'text-foreground'} ${metric.className || ''}`}>
                        {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                        {metric.label}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
