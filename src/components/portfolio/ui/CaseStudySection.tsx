'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CaseStudySectionProps {
    title?: string;
    subtitle?: string;
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export function CaseStudySection({
    title,
    children,
    className,
    delay = 0
}: CaseStudySectionProps) {
    return (
        <section className={cn("flex flex-col gap-8", className)}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay }}
                className="flex flex-col gap-8"
            >
                {title && (
                    <h2 className="text-3xl font-bold text-foreground">
                        {title}
                    </h2>
                )}

                {/* Enforces 24px spacing between paragraphs and direct children */}
                <div className="text-lg text-muted-foreground leading-relaxed flex flex-col gap-6">
                    {children}
                </div>
            </motion.div>
        </section>
    );
}
