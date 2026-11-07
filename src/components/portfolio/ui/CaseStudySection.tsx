'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CaseStudySectionProps {
    title?: string;
    /** Lead paragraph under the title. */
    subtitle?: string;
    /** Mono eyebrow shown above the title — e.g. "Problem", "Solution". */
    eyebrow?: string;
    /** Numeric index for the mono eyebrow (e.g. 2 → "02"). */
    index?: number;
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

/**
 * One chapter of a case study: mono label, display title, then the body.
 * Direct text children keep a reading measure (`.px-case-prose`), while
 * figures and grids span the full container.
 */
export function CaseStudySection({ title, subtitle, eyebrow, index, children, className, delay = 0 }: CaseStudySectionProps) {
    return (
        <section className={cn('px-case-section flex flex-col gap-8 md:gap-10', className)}>
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -10% 0px' }}
                transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-8 md:gap-10"
            >
                {title && (
                    <header className="flex max-w-3xl flex-col gap-4">
                        {(eyebrow || index !== undefined) && (
                            <p className="font-pixel-label flex items-center gap-2 text-[11px] text-[var(--px-dim)]">
                                {index !== undefined && <span className="text-[var(--px-ink)]">{String(index).padStart(2, '0')}</span>}
                                {index !== undefined && eyebrow && <span aria-hidden="true">·</span>}
                                {eyebrow}
                            </p>
                        )}
                        <h2 className="px-case-title">{title}</h2>
                        {subtitle && <p className="text-lg leading-relaxed text-[var(--px-muted)] md:text-xl">{subtitle}</p>}
                    </header>
                )}

                <div className="px-case-prose flex flex-col gap-6 text-[17px] leading-[1.7] text-[var(--px-muted)]">{children}</div>
            </motion.div>
        </section>
    );
}
