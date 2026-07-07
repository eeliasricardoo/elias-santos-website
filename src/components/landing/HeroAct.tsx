'use client';

import { useRef } from 'react';
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    useMotionValue,
    useReducedMotion,
} from 'framer-motion';
import { STORY_IDENTITY } from './story-data';

const lineUp = {
    hidden: { y: 30, opacity: 0, filter: 'blur(8px)' },
    show: { y: 0, opacity: 1, filter: 'blur(0px)', transition: { type: 'spring', damping: 20, stiffness: 100, mass: 0.8 } },
};

/** Circular rotating badge — mono type on an SVG circle path */
function SpinBadge() {
    const text = 'REMOTE — WORLDWIDE — PRODUCT DESIGN — AI — ';
    return (
        <svg viewBox="0 0 200 200" className="er-spin h-full w-full" aria-hidden="true">
            <defs>
                <path
                    id="er-badge-circle"
                    d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
                    fill="none"
                />
            </defs>
            <text
                fill="currentColor"
                style={{ fontSize: 21, letterSpacing: '0.22em', fontWeight: 700 }}
            >
                <textPath href="#er-badge-circle">{text}</textPath>
            </text>
            <circle cx="100" cy="100" r="4" fill="currentColor" />
        </svg>
    );
}

/**
 * Act I — the banner brought to life.
 * A charcoal blob floats on warm-gray paper holding the ER_ identity.
 * As you scroll it swells until it swallows the viewport, handing the
 * story over to the dark acts that follow.
 */
export function HeroAct() {
    const containerRef = useRef<HTMLDivElement>(null);
    const reduce = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    // Blob swallows the screen across the whole act, finishing right as
    // the manifesto arrives — no dead charcoal stretch in between.
    // x/y percentages are relative to the blob itself: -54%/-50% centers it
    // slightly left of the viewport middle, like the banner composition.
    const blobScale = useTransform(scrollYProgress, [0, 0.85], [1, 9]);
    const blobX = useTransform(scrollYProgress, [0, 0.85], ['-54%', '-50%']);

    // Identity drifts away at different speeds — the parallax layers
    const logoY = useTransform(scrollYProgress, [0, 0.7], ['0%', '-60%']);
    const logoScale = useTransform(scrollYProgress, [0, 0.7], [1, 1.18]);
    const logoOpacity = useTransform(scrollYProgress, [0.45, 0.72], [1, 0]);
    const taglineY = useTransform(scrollYProgress, [0, 0.7], ['0%', '-130%']);
    const taglineOpacity = useTransform(scrollYProgress, [0.38, 0.62], [1, 0]);
    const hintOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

    // Mouse parallax — the blob leans toward the cursor, the type leans away
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const blobMX = useSpring(useTransform(mouseX, [-1, 1], [-14, 14]), { stiffness: 60, damping: 18 });
    const blobMY = useSpring(useTransform(mouseY, [-1, 1], [-10, 10]), { stiffness: 60, damping: 18 });
    const typeMX = useSpring(useTransform(mouseX, [-1, 1], [10, -10]), { stiffness: 60, damping: 18 });
    const typeMY = useSpring(useTransform(mouseY, [-1, 1], [7, -7]), { stiffness: 60, damping: 18 });

    const handleMouse = (e: React.MouseEvent) => {
        if (reduce) return;
        const { innerWidth, innerHeight } = window;
        mouseX.set((e.clientX / innerWidth) * 2 - 1);
        mouseY.set((e.clientY / innerHeight) * 2 - 1);
    };

    return (
        <div ref={containerRef} className={reduce ? '' : 'h-[220vh]'} onMouseMove={handleMouse}>
            <div
                className={`${reduce ? 'relative' : 'sticky top-0'} h-screen overflow-hidden`}
                style={{ background: 'var(--er-paper)' }}
            >
                {/* Satellite blobs floating on the paper margins */}
                <motion.div aria-hidden="true" className="absolute inset-0" style={{ opacity: hintOpacity }}>
                    <div
                        className="er-blob er-float absolute right-[8%] top-[14%] h-10 w-12"
                        style={{ background: 'var(--er-ink)' }}
                    />
                    <div
                        className="er-blob er-float er-float--slow absolute bottom-[18%] left-[6%] h-6 w-7"
                        style={{ background: 'var(--er-ink)' }}
                    />
                </motion.div>

                {/* The blob — outer layer follows the mouse, inner layer swells with scroll */}
                <motion.div
                    aria-hidden="true"
                    className="absolute inset-0 will-change-transform"
                    style={{ x: reduce ? 0 : blobMX, y: reduce ? 0 : blobMY }}
                    initial={reduce ? false : { scale: 0.3, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 120, mass: 1 }}
                >
                    <motion.div
                        className="er-blob absolute left-1/2 top-1/2 will-change-transform"
                        style={{
                            width: '150vmin',
                            height: '118vmin',
                            background: 'var(--er-ink)',
                            x: reduce ? '-54%' : blobX,
                            y: '-50%',
                            scale: reduce ? 1 : blobScale,
                        }}
                    />
                </motion.div>

                {/* Identity lockup — sits inside the blob, paper-colored */}
                <div className="relative z-10 flex h-full items-center justify-center px-6">
                    <motion.div
                        className="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-16 will-change-transform"
                        style={{ x: reduce ? 0 : typeMX, y: reduce ? 0 : typeMY }}
                    >
                        {/* Portrait in an organic blob mask, signed with an ER_ badge */}
                        <motion.div
                            className="relative"
                            style={{
                                y: reduce ? 0 : logoY,
                                scale: reduce ? 1 : logoScale,
                                opacity: reduce ? 1 : logoOpacity,
                            }}
                        >
                            <motion.div
                                className="relative"
                                initial={reduce ? false : { scale: 0.5, opacity: 0, rotate: -15, filter: 'blur(10px)' }}
                                animate={{ scale: 1, opacity: 1, rotate: 0, filter: 'blur(0px)' }}
                                transition={{ type: 'spring', damping: 18, stiffness: 100, delay: 0.15 }}
                            >
                                <div
                                    className="er-blob overflow-hidden border-[3px]"
                                    style={{
                                        width: 'clamp(200px, 30vw, 360px)',
                                        height: 'clamp(200px, 30vw, 360px)',
                                        borderColor: 'var(--er-paper)',
                                    }}
                                >
                                    <img
                                        src="/profile-photo.webp"
                                        alt="Elias Ricardo"
                                        width={400}
                                        height={400}
                                        fetchPriority="high"
                                        className="h-full w-full scale-[1.06] object-cover grayscale contrast-[1.05]"
                                    />
                                </div>

                                <span
                                    className="absolute -bottom-2 -right-2 rounded-full px-4 py-1.5 text-lg font-bold tracking-tight md:-bottom-3 md:-right-4 md:px-5 md:py-2 md:text-2xl"
                                    style={{ background: 'var(--er-paper)', color: 'var(--er-ink)' }}
                                >
                                    {STORY_IDENTITY.logo}
                                    <span className="er-cursor">_</span>
                                </span>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="flex flex-col items-center gap-3 text-center md:items-start md:text-left"
                            style={{
                                color: 'var(--er-paper)',
                                y: reduce ? 0 : taglineY,
                                opacity: reduce ? 1 : taglineOpacity,
                            }}
                            initial={reduce ? false : 'hidden'}
                            animate="show"
                            variants={{
                                hidden: {},
                                show: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
                            }}
                        >
                            <motion.h1
                                variants={lineUp}
                                className="text-3xl font-bold leading-none tracking-tight md:text-5xl"
                            >
                                {STORY_IDENTITY.name}
                            </motion.h1>
                            <motion.p
                                variants={lineUp}
                                className="text-sm tracking-[0.08em] opacity-80 md:text-base"
                            >
                                {STORY_IDENTITY.roles}
                            </motion.p>
                            <motion.p
                                variants={lineUp}
                                className="text-xl font-bold tracking-[0.06em] md:text-3xl"
                            >
                                {STORY_IDENTITY.remote}
                            </motion.p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Rotating badge — bottom right corner of the paper */}
                <motion.div
                    className="absolute bottom-8 right-6 z-10 hidden h-28 w-28 md:block lg:h-32 lg:w-32"
                    style={{ color: 'var(--er-ink)', opacity: reduce ? 1 : hintOpacity }}
                >
                    <motion.div
                        className="h-full w-full"
                        initial={reduce ? false : { opacity: 0, scale: 0.5, rotate: -45 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.8 }}
                    >
                        <SpinBadge />
                    </motion.div>
                </motion.div>

                {/* Scroll hint */}
                {!reduce && (
                    <motion.div
                        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
                        style={{ opacity: hintOpacity, color: 'var(--er-ink)' }}
                    >
                        <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
                        <div className="er-scroll-line h-10 w-px bg-current" />
                    </motion.div>
                )}
            </div>
        </div>
    );
}
