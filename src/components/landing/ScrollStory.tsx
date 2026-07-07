'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { STORY_PALETTE, STORY_IDENTITY } from './story-data';
import { HeroAct } from './HeroAct';
import { ManifestoAct } from './ManifestoAct';
import { ProjectsAct } from './ProjectsAct';
import { StatsAct } from './StatsAct';
import { OutroAct } from './OutroAct';
import { TickerBand } from './TickerBand';
import { CursorDot } from './CursorDot';
import { StoryIntro } from './StoryIntro';
import './story.css';

/**
 * ER_ scroll-story landing.
 * Five acts driven by scroll: banner blob → manifesto → work filmstrip
 * → proof → inverted reveal. Palette and identity live in story-data.ts.
 */
export function ScrollStory() {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduce) return;

        const lenis = new Lenis({
            duration: 1.15,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            touchMultiplier: 2,
        });
        lenisRef.current = lenis;

        let rafId: number;
        const raf = (time: number) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    const scrollTo = (target: string | number) => {
        if (lenisRef.current) {
            lenisRef.current.scrollTo(target, { duration: 1.4 });
        } else {
            const el = typeof target === 'string' ? document.querySelector(target) : null;
            if (el) el.scrollIntoView({ behavior: 'smooth' });
            else window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div
            className="er-story relative"
            style={
                {
                    '--er-paper': STORY_PALETTE.paper,
                    '--er-paper-dim': STORY_PALETTE.paperDim,
                    '--er-ink': STORY_PALETTE.ink,
                    '--er-ink-soft': STORY_PALETTE.inkSoft,
                    '--er-ink-line': STORY_PALETTE.inkLine,
                } as React.CSSProperties
            }
        >
            {/* Opening sequence — once per session */}
            <StoryIntro />

            {/* Fixed nav */}
            <nav className="pointer-events-none fixed inset-x-0 top-0 z-50">
                <div className="flex items-center justify-between px-6 py-5 md:px-12">
                    <button
                        type="button"
                        onClick={() => scrollTo(0)}
                        className="pointer-events-auto text-lg font-bold tracking-tight text-white mix-blend-difference"
                        aria-label="Back to top"
                    >
                        {STORY_IDENTITY.logo}
                        <span className="er-cursor">_</span>
                    </button>

                    <div className="pointer-events-auto flex items-center gap-6 text-[11px] tracking-[0.25em] text-white mix-blend-difference md:gap-10">
                        <span className="hidden opacity-70 md:inline">{STORY_IDENTITY.remote}</span>
                        <button type="button" onClick={() => scrollTo('#er-work')} className="er-link">
                            WORK
                        </button>
                        <button type="button" onClick={() => scrollTo('#er-contact')} className="er-link">
                            CONTACT
                        </button>
                    </div>
                </div>
            </nav>

            <HeroAct />
            <ManifestoAct />
            <TickerBand tilt />
            <div id="er-work">
                <ProjectsAct />
            </div>
            <StatsAct />
            <TickerBand reverse />
            <div id="er-contact">
                <OutroAct />
            </div>

            {/* Custom cursor over everything */}
            <CursorDot />
        </div>
    );
}
