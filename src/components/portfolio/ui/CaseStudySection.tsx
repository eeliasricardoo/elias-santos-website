'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CaseStudySectionProps {
    title?: string;
    subtitle?: string;
    /** Mono eyebrow shown above the title — e.g. "Problem", "Solution". */
    eyebrow?: string;
    /** Numeric index for the mono eyebrow (e.g. 2 → "/02"). */
    index?: number;
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export function CaseStudySection({
    title,
    eyebrow,
    index,
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
                    <div className="flex flex-col gap-3">
                        {(eyebrow || index !== undefined) && (
                            <span className="px-sign inline-flex w-fit items-center gap-2 px-3 py-1.5 font-pixel-label text-[11px]">
                                {index !== undefined && (
                                    <span className="text-[var(--px-gold)]">{String(index).padStart(2, '0')}</span>
                                )}
                                {eyebrow}
                            </span>
                        )}
                        <h2 className="flex items-center gap-3 text-3xl md:text-4xl text-foreground leading-[1.1]">
                            <span
                                className="inline-block h-4 w-4 flex-shrink-0 shadow-[0_0_0_3px_var(--px-line)]"
                                style={{ backgroundColor: 'var(--brand, var(--px-gold))' }}
                            />
                            {title}
                        </h2>
                    </div>
                )}

                {/* Enforces 24px spacing between paragraphs and direct children */}
                <div className="text-lg text-muted-foreground leading-relaxed flex flex-col gap-6">
                    {children}
                </div>
            </motion.div>
        </section>
    );
}
