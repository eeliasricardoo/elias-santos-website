'use client';

import { useRef } from 'react';
import {
    motion,
    useScroll,
    useTransform,
    useMotionValue,
    useSpring,
    useReducedMotion,
} from 'framer-motion';
import { STORY_IDENTITY } from './story-data';

/** CTA that leans toward the cursor — a magnetic button */
function MagneticCta() {
    const reduce = useReducedMotion();
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const x = useSpring(mx, { stiffness: 180, damping: 16 });
    const y = useSpring(my, { stiffness: 180, damping: 16 });

    const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (reduce) return;
        const rect = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - rect.left - rect.width / 2) * 0.3);
        my.set((e.clientY - rect.top - rect.height / 2) * 0.4);
    };
    const onLeave = () => {
        mx.set(0);
        my.set(0);
    };

    return (
        <motion.a
            href={`mailto:${STORY_IDENTITY.email}`}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            className="group inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-bold tracking-[0.1em] transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(38,38,38,0.35)] active:scale-[0.98]"
            style={{ background: 'var(--er-ink)', color: 'var(--er-paper)', x, y }}
        >
            {STORY_IDENTITY.email.toUpperCase()}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </motion.a>
    );
}

/**
 * Act V — the reveal in reverse.
 * A paper blob grows out of the dark until the page is light again,
 * closing the loop with the contact call-to-action and a mono footer.
 */
export function OutroAct() {
    const containerRef = useRef<HTMLDivElement>(null);
    const reduce = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    const blobScale = useTransform(scrollYProgress, [0, 0.55], [0.12, 9]);
    const contentOpacity = useTransform(scrollYProgress, [0.5, 0.72], [0, 1]);
    const contentY = useTransform(scrollYProgress, [0.5, 0.72], [40, 0]);

    return (
        <div ref={containerRef} className={reduce ? '' : 'h-[240vh]'}>
            <div
                className={`${reduce ? 'relative py-32' : 'sticky top-0 h-screen'} overflow-hidden`}
                style={{ background: 'var(--er-ink)' }}
            >
                {/* Paper blob swallowing the dark */}
                <motion.div
                    aria-hidden="true"
                    className="er-blob absolute left-1/2 top-1/2 will-change-transform"
                    style={{
                        width: '130vmin',
                        height: '110vmin',
                        background: 'var(--er-paper)',
                        x: '-50%',
                        y: '-50%',
                        scale: reduce ? 9 : blobScale,
                    }}
                />

                <motion.div
                    className="relative z-10 flex h-full flex-col items-center justify-center gap-10 px-6 text-center"
                    style={{
                        color: 'var(--er-ink)',
                        opacity: reduce ? 1 : contentOpacity,
                        y: reduce ? 0 : contentY,
                    }}
                >
                    <p className="text-xs tracking-[0.35em] opacity-60">//NEXT PROJECT COULD BE YOURS</p>

                    <h2
                        className="font-bold leading-[0.95] tracking-tight"
                        style={{ fontSize: 'clamp(44px, 9vw, 130px)' }}
                    >
                        LET&apos;S WORK
                        <br />
                        TOGETHER<span className="er-cursor">_</span>
                    </h2>

                    <MagneticCta />

                    <div className="flex items-center gap-8 text-xs tracking-[0.2em]">
                        <a href={STORY_IDENTITY.github} target="_blank" rel="noopener noreferrer" className="er-link">
                            GITHUB
                        </a>
                        <a href={STORY_IDENTITY.linkedin} target="_blank" rel="noopener noreferrer" className="er-link">
                            LINKEDIN
                        </a>
                        <a href="/portfolio" className="er-link">
                            ALL WORK
                        </a>
                    </div>
                </motion.div>

                {/* Footer line */}
                <motion.footer
                    className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-6 text-[10px] tracking-[0.25em] md:px-12"
                    style={{ color: 'var(--er-ink)', opacity: reduce ? 1 : contentOpacity }}
                >
                    <span>
                        {STORY_IDENTITY.logo}_ © {new Date().getFullYear()}
                    </span>
                    <span className="hidden sm:inline">{STORY_IDENTITY.remote}</span>
                    <span>{STORY_IDENTITY.roles.toUpperCase()}</span>
                </motion.footer>
            </div>
        </div>
    );
}
