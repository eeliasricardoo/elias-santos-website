'use client';

import { useEffect } from 'react';
import { mascotReact } from './mascot-bus';

/** 404 screen. */
export function NotFound() {
    useEffect(() => {
        const t = window.setTimeout(
            () => mascotReact({ mood: 'cry', say: "This page doesn't exist. Not even in the future.", hold: 2600 }),
            900,
        );
        return () => window.clearTimeout(t);
    }, []);

    return (
        <main id="main-content" className="relative flex min-h-[calc(100vh-148px)] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">
            <div className="relative flex flex-col items-center gap-7">
                <p className="font-pixel-label text-[11px] text-[var(--px-dim)]">Error · 404</p>
                <h1 className="text-[7rem] leading-none sm:text-[10rem]">
                    404
                </h1>
                <h2 className="text-3xl sm:text-4xl">
                    Page not found.
                </h2>
                <p className="max-w-md text-lg text-[var(--px-muted)]">
                    This page wandered off the map. The good stuff is back at the start.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                    <a href="/" className="px-btn px-btn--primary">
                        Back to home
                    </a>
                    <a href="/portfolio" className="px-btn">
                        Browse all work
                    </a>
                </div>
            </div>
        </main>
    );
}
