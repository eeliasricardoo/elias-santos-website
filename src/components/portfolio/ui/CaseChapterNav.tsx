'use client';

import { useEffect, useRef, useState } from 'react';

const SELECTOR = '.px-case-main [data-case-nav]';
/** Fewer chapters than this and the bar is more chrome than help. */
const MIN_CHAPTERS = 3;

function chapterElements() {
    return Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
}

/**
 * Sticky chapter bar for long case studies. It reads the chapters from the page
 * (every `CaseStudySection` with an eyebrow), appears once the reader reaches the
 * first one, and marks the chapter in view. It takes no space in the flow, so it
 * never shifts the layout when it mounts.
 */
export function CaseChapterNav({ motionOff = false }: { motionOff?: boolean }) {
    const [labels, setLabels] = useState<string[]>([]);
    const [active, setActive] = useState(0);
    const [shown, setShown] = useState(false);
    const [top, setTop] = useState(0);
    const listRef = useRef<HTMLOListElement>(null);

    useEffect(() => {
        let raf = 0;
        const measure = () => {
            const headerHeight = document.querySelector<HTMLElement>('header')?.offsetHeight ?? 0;
            setTop(headerHeight);

            const els = chapterElements();
            const next = els.map((el) => el.dataset.caseNav ?? '');
            setLabels((prev) => (prev.join('|') === next.join('|') ? prev : next));
            if (els.length === 0) return;

            // A chapter becomes current once its title is near the top of the reading area.
            const line = headerHeight + window.innerHeight * 0.3;
            let current = 0;
            els.forEach((el, i) => {
                if (el.getBoundingClientRect().top <= line) current = i;
            });
            setActive(current);
            setShown(els[0].getBoundingClientRect().top <= line);
        };
        const onScroll = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(measure);
        };
        measure();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, []);

    // Keep the current chapter visible when the list scrolls sideways on small screens.
    useEffect(() => {
        const list = listRef.current;
        const item = list?.children[active] as HTMLElement | undefined;
        if (!list || !item) return;
        const left = item.offsetLeft - (list.clientWidth - item.offsetWidth) / 2;
        list.scrollTo({ left, behavior: motionOff ? 'auto' : 'smooth' });
    }, [active, motionOff]);

    if (labels.length < MIN_CHAPTERS) return null;

    const go = (i: number) => chapterElements()[i]?.scrollIntoView({ behavior: motionOff ? 'auto' : 'smooth', block: 'start' });

    return (
        <div className="sticky z-40 h-0" style={{ top }}>
            <nav
                aria-label="Chapters"
                // `inert` keeps the hidden bar out of the tab order and the accessibility tree.
                inert={!shown}
                className={`absolute inset-x-0 top-0 border-b border-[var(--px-line)] bg-white/90 backdrop-blur transition-opacity duration-200 ${shown ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
            >
                <ol
                    ref={listRef}
                    className="px-chapters relative mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto px-2 sm:px-4 md:px-10 [mask-image:linear-gradient(90deg,transparent,#000_1rem,#000_calc(100%-1rem),transparent)]"
                >
                    {labels.map((label, i) => {
                        const current = i === active;
                        return (
                            <li key={`${label}-${i}`} className="shrink-0">
                                <button
                                    type="button"
                                    onClick={() => go(i)}
                                    aria-current={current ? 'true' : undefined}
                                    className={`font-pixel-label whitespace-nowrap border-b-2 px-2 py-3 text-[11px] transition-colors ${
                                        current ? 'border-[var(--px-ink)] text-[var(--px-ink)]' : 'border-transparent text-[var(--px-dim)] hover:text-[var(--px-ink)]'
                                    }`}
                                >
                                    {label}
                                </button>
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </div>
    );
}
