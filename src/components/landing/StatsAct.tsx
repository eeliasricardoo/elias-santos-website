'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { STORY_STATS } from './story-data';

/**
 * Act IV — proof.
 * Three oversized figures slide in opposite directions as the section
 * crosses the viewport: parallax as punctuation, numbers as the argument.
 */
export function StatsAct() {
    const sectionRef = useRef<HTMLElement>(null);
    const reduce = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const drifts = [
        useTransform(scrollYProgress, [0, 1], [80, -80]),
        useTransform(scrollYProgress, [0, 1], [-100, 100]),
        useTransform(scrollYProgress, [0, 1], [60, -60]),
    ];

    return (
        <section
            ref={sectionRef}
            className="overflow-hidden py-28 md:py-40"
            style={{ background: 'var(--er-ink)', color: 'var(--er-paper)' }}
        >
            <p className="mb-14 px-6 text-xs tracking-[0.35em] opacity-50 md:px-12">//SHIPPED, MEASURED</p>

            <div className="flex flex-col gap-14 md:gap-20">
                {STORY_STATS.map((stat, i) => (
                    <motion.div
                        key={stat.value}
                        className="flex flex-col gap-2 px-6 will-change-transform md:px-12"
                        style={{ x: reduce ? 0 : drifts[i] }}
                    >
                        <span
                            className={`font-bold leading-none tracking-tight ${i % 2 === 1 ? 'er-outline-text' : ''}`}
                            style={{ fontSize: 'clamp(56px, 11vw, 160px)' }}
                        >
                            {stat.value}
                        </span>
                        <span className="text-xs tracking-[0.25em] opacity-60 md:text-sm">
                            {stat.label.toUpperCase()}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
