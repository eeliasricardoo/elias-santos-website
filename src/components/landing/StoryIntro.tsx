'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { STORY_IDENTITY } from './story-data';

const SESSION_KEY = 'elias-portfolio-loaded';

type Phase = 'pop' | 'swallow' | 'lift' | 'done';

/**
 * Opening sequence, once per session:
 * a charcoal blob is born from a dot on paper, ER_ types itself inside,
 * the blob swallows the screen, and the ink curtain lifts to reveal the
 * hero already in place underneath.
 */
export function StoryIntro() {
    const reduce = useReducedMotion();
    const [phase, setPhase] = useState<Phase | null>(null);

    useEffect(() => {
        // The inline script in index.astro paints a paper overlay before
        // hydration; from here the animated curtain takes over.
        const temp = document.getElementById('temp-preloader-overlay');
        temp?.remove();

        if (reduce || sessionStorage.getItem(SESSION_KEY)) {
            document.body.style.overflow = '';
            return;
        }

        setPhase('pop');
        document.body.style.overflow = 'hidden';

        const timers = [
            setTimeout(() => setPhase('swallow'), 1650),
            setTimeout(() => setPhase('lift'), 2250),
            setTimeout(() => {
                setPhase('done');
                sessionStorage.setItem(SESSION_KEY, '1');
                document.body.style.overflow = '';
            }, 3000),
        ];
        return () => {
            timers.forEach(clearTimeout);
            document.body.style.overflow = '';
        };
    }, [reduce]);

    const swallowed = phase === 'swallow' || phase === 'lift';

    return (
        <AnimatePresence>
            {phase && phase !== 'done' && (
                <motion.div
                    className="fixed inset-0 z-[80] overflow-hidden"
                    style={{ background: 'var(--er-paper)' }}
                    animate={{ y: phase === 'lift' ? '-100%' : '0%' }}
                    transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                    aria-hidden="true"
                >
                    {/* The blob is born and later swallows the viewport */}
                    <motion.div
                        className="er-blob absolute left-1/2 top-1/2"
                        style={{
                            width: 'clamp(220px, 36vmin, 380px)',
                            height: 'clamp(200px, 33vmin, 350px)',
                            background: 'var(--er-ink)',
                            x: '-50%',
                            y: '-50%',
                        }}
                        initial={{ scale: 0 }}
                        animate={{ scale: swallowed ? 18 : 1 }}
                        transition={
                            swallowed
                                ? { duration: 0.6, ease: [0.64, 0, 0.78, 0] }
                                : { type: 'spring', stiffness: 180, damping: 20, mass: 0.9 }
                        }
                    />

                    {/* Typed identity — layered above the blob so it never scales */}
                    <motion.div
                        className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                        style={{ color: 'var(--er-paper)' }}
                        animate={{ opacity: swallowed ? 0 : 1 }}
                        transition={{ duration: 0.25 }}
                    >
                        <div className="flex text-5xl font-bold tracking-tight md:text-6xl">
                            {[...STORY_IDENTITY.logo].map((letter, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, y: 14 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.55 + i * 0.18, duration: 0.05 }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                            <motion.span
                                className="er-cursor"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.55 + STORY_IDENTITY.logo.length * 0.18 }}
                            >
                                _
                            </motion.span>
                        </div>

                        <motion.p
                            className="text-[10px] tracking-[0.45em] opacity-60"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            transition={{ delay: 1.1, duration: 0.4 }}
                        >
                            //PORTFOLIO — {new Date().getFullYear()}
                        </motion.p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
