'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from 'framer-motion';
import { MANIFESTO_TEXT, MANIFESTO_HIGHLIGHTS } from './story-data';

const WORDS = MANIFESTO_TEXT.split(' ');

function Word({
    word,
    range,
    progress,
}: {
    word: string;
    range: [number, number];
    progress: MotionValue<number>;
}) {
    const opacity = useTransform(progress, range, [0.14, 1]);
    const highlighted = MANIFESTO_HIGHLIGHTS.has(word.toLowerCase().replace(/[^a-z]/g, ''));

    if (highlighted) {
        return (
            <motion.span
                style={{ opacity, background: 'var(--er-paper)', color: 'var(--er-ink)' }}
                className="mr-[0.35em] inline-block rounded px-[0.18em]"
            >
                {word}
            </motion.span>
        );
    }

    return (
        <motion.span style={{ opacity }} className="inline-block">
            {word}&nbsp;
        </motion.span>
    );
}

/**
 * Act II — the manifesto.
 * The screen is now fully charcoal. One paragraph surfaces word by word,
 * paced by the reader's own scroll — the "video scrubbing" moment.
 */
export function ManifestoAct() {
    const containerRef = useRef<HTMLDivElement>(null);
    const reduce = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    // Each word owns a small slice of the scroll range
    const revealStart = 0.08;
    const revealEnd = 0.85;
    const step = (revealEnd - revealStart) / WORDS.length;

    return (
        <div ref={containerRef} className={reduce ? '' : 'h-[260vh]'}>
            <div
                className={`${reduce ? 'relative py-32' : 'sticky top-0 h-screen'} flex items-center overflow-hidden`}
                style={{ background: 'var(--er-ink)', color: 'var(--er-paper)' }}
            >
                <div className="mx-auto w-full max-w-4xl px-6 md:px-10">
                    <p className="mb-8 text-xs tracking-[0.35em] opacity-50">//MANIFESTO</p>

                    {reduce ? (
                        <p className="text-2xl font-medium leading-snug md:text-4xl md:leading-snug">
                            {MANIFESTO_TEXT}
                        </p>
                    ) : (
                        <p className="text-2xl font-medium leading-snug md:text-4xl md:leading-snug">
                            {WORDS.map((word, i) => (
                                <Word
                                    key={i}
                                    word={word}
                                    progress={scrollYProgress}
                                    range={[revealStart + i * step, revealStart + (i + 1) * step]}
                                />
                            ))}
                        </p>
                    )}

                    <p className="mt-10 text-xs tracking-[0.35em] opacity-50">
                        RESEARCH → DESIGN → SHIP
                    </p>
                </div>
            </div>
        </div>
    );
}
