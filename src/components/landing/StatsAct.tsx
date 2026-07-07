'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { STORY_STATS } from './story-data';

/**
 * Act IV — proof.
 * Three figures thread down a vertical spine, each pinned to it with a
 * dot and an index — the drift is punctuation now, not the whole point,
 * so the numbers read as one connected argument instead of floating apart.
 */
export function StatsAct() {
    const sectionRef = useRef<HTMLElement>(null);
    const reduce = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const drifts = [
        useTransform(scrollYProgress, [0, 1], [24, -24]),
        useTransform(scrollYProgress, [0, 1], [-30, 30]),
        useTransform(scrollYProgress, [0, 1], [18, -18]),
    ];

    return (
        <section
            ref={sectionRef}
            className="overflow-hidden py-28 md:py-40"
            style={{ background: 'var(--er-ink)', color: 'var(--er-paper)' }}
        >
            <p className="mb-14 px-6 text-xs tracking-[0.35em] opacity-50 md:px-12">//SHIPPED, MEASURED</p>

            <div className="relative px-6 md:px-12">
                {/* Spine threading the stats together */}
                <div
                    className="absolute bottom-8 left-6 top-3 w-px md:left-12"
                    style={{ background: 'var(--er-ink-line)' }}
                    aria-hidden="true"
                />

                <div className="flex flex-col gap-14 md:gap-20">
                    {STORY_STATS.map((stat, i) => (
                        <div key={stat.value} className="relative flex gap-5 pl-7 md:gap-8 md:pl-10">
                            {/* Node on the spine */}
                            <span
                                className="absolute left-0 top-3 h-2.5 w-2.5 -translate-x-1/2 rounded-full"
                                style={{ background: 'var(--er-paper)' }}
                                aria-hidden="true"
                            />



                            <motion.div
                                className="flex flex-col gap-3 will-change-transform"
                                style={{ x: reduce ? 0 : drifts[i] }}
                            >
                                <span
                                    className={`font-bold leading-none tracking-tight ${i % 2 === 1 ? 'er-outline-text' : ''}`}
                                    style={{ fontSize: 'clamp(56px, 11vw, 160px)' }}
                                >
                                    {stat.value}
                                </span>
                                <span
                                    className="max-w-xs border-t pt-3 text-xs tracking-[0.25em] opacity-70 md:text-sm"
                                    style={{ borderColor: 'var(--er-ink-line)' }}
                                >
                                    {stat.label.toUpperCase()}
                                </span>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
