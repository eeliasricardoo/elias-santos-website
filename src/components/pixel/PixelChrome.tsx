'use client';

import { useEffect, useState, type MouseEvent, type ReactNode } from 'react';
import { Pause, Play } from 'lucide-react';
import { STORY_IDENTITY } from '@/components/landing/story-data';
import { ContactModal } from '@/components/home/get-in-touch/ContactModal';
import { mascotReact } from './mascot-bus';
import { useMotionPaused } from './motion-prefs';

/** Screen-reader hint for links that open a new tab. */
export function NewTab() {
    return <span className="sr-only"> (opens in a new tab)</span>;
}

/** Pause / resume every animation on the site (WCAG 2.2.2). */
export function MotionToggle() {
    const [paused, setPaused] = useMotionPaused();
    return (
        <button
            type="button"
            onClick={() => {
                setPaused(!paused);
                mascotReact({ mood: paused ? 'wink' : 'idle2', say: paused ? 'Animations back on.' : 'Animations paused.', announce: true });
            }}
            aria-pressed={paused}
            aria-label="Pause animations"
            title={paused ? 'Resume animations' : 'Pause animations'}
            className="grid h-9 w-9 place-items-center text-[var(--px-muted)] hover:text-[var(--px-ink)]"
        >
            {paused ? <Play className="h-4 w-4" aria-hidden="true" /> : <Pause className="h-4 w-4" aria-hidden="true" />}
        </button>
    );
}

function useScrollProgress() {
    const [p, setP] = useState(0);
    useEffect(() => {
        let raf = 0;
        const on = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                const max = document.documentElement.scrollHeight - window.innerHeight;
                setP(max > 0 ? Math.min(1, window.scrollY / max) : 0);
            });
        };
        on();
        window.addEventListener('scroll', on, { passive: true });
        return () => window.removeEventListener('scroll', on);
    }, []);
    return p;
}

/** Sticky header with the scroll progress bar. Nav items come in as children. */
export function PixelHeader({
    children,
    logoHref = '/',
    onLogoClick,
}: {
    children: ReactNode;
    logoHref?: string;
    onLogoClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}) {
    const progress = useScrollProgress();
    return (
        <header className="sticky top-0 z-50 border-b border-[var(--px-line)] bg-white/90 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 md:px-12">
                <a href={logoHref} onClick={onLogoClick} className="font-pixel text-lg font-semibold text-[var(--px-ink)]" aria-label="Elias Ricardo — home">
                    Elias Ricardo
                </a>
                <nav className="flex items-center gap-1 text-sm sm:gap-2" aria-label="Main">
                    {children}
                    <MotionToggle />
                </nav>
            </div>
            <div className="px-progress" aria-hidden="true">
                <span style={{ width: `${progress * 100}%` }} />
            </div>
        </header>
    );
}

export const navLinkClass = 'px-2 py-2 text-[var(--px-muted)] hover:text-[var(--px-ink)]';

/** Header for every page other than home: links back into the home sections. */
export function SubpageHeader({ current }: { current?: 'archive' | 'case' }) {
    const [contactOpen, setContactOpen] = useState(false);
    return (
        <>
            <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
            <PixelHeader>
                <a href="/" className={`${navLinkClass} hidden sm:inline`}>
                    Home
                </a>
                <a href="/#work" className={navLinkClass}>
                    Work
                </a>
                <a href="/portfolio" className={`${navLinkClass} ${current === 'archive' ? '!text-[var(--px-ink)]' : ''}`} aria-current={current === 'archive' ? 'page' : undefined}>
                    All work
                </a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={`${navLinkClass} hidden md:inline`}>
                    Resume
                    <NewTab />
                </a>
                <button type="button" onClick={() => setContactOpen(true)} className="px-btn px-btn--primary px-btn--sm ml-2">
                    Contact
                </button>
            </PixelHeader>
        </>
    );
}

export function PixelFooter() {
    return (
        <footer className="border-t border-[var(--px-line)] bg-[var(--px-bg)] py-8 text-sm text-[var(--px-muted)]">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 md:px-12">
                <span>© {new Date().getFullYear()} Elias Ricardo · Built with Astro + React</span>
                <span className="flex gap-5">
                    <a href={STORY_IDENTITY.github} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--px-ink)]">
                        GitHub
                        <NewTab />
                    </a>
                    <a href={STORY_IDENTITY.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--px-ink)]">
                        LinkedIn
                        <NewTab />
                    </a>
                </span>
            </div>
        </footer>
    );
}
