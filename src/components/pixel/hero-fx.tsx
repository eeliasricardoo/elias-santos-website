'use client';

import { useEffect, useState, type CSSProperties } from 'react';

/** Deterministic PRNG — SSR and hydration must agree on every "random" value. */
export function seeded(seed: number) {
    let s = seed >>> 0;
    return () => {
        s = (s * 1664525 + 1013904223) >>> 0;
        return s / 4294967296;
    };
}

/**
 * Outlined display title that drops in letter by letter. Words stay unbroken;
 * each letter is its own outlined glyph so it can bounce independently.
 * `gold` letters also get a light sweep that rolls across the word on a loop.
 */
export function PixelTitle({
    lines,
    startDelay = 300,
    stagger = 38,
}: {
    lines: { text: string; gold?: boolean }[];
    startDelay?: number;
    stagger?: number;
}) {
    let i = 0;
    return (
        <span className="flex flex-col items-start gap-1">
            {lines.map((line) => (
                <span key={line.text} className="block" aria-hidden="true">
                    {line.text.split(' ').map((word, w, words) => (
                        <span key={w}>
                        <span className="inline-block whitespace-nowrap">
                            {[...word].map((ch) => {
                                const idx = i++;
                                return (
                                    <span
                                        key={idx}
                                        className={`px-stroke px-letter ${line.gold ? 'px-stroke--gold px-stroke--shine' : ''}`}
                                        data-text={ch}
                                        style={{ '--i': idx, '--d0': `${startDelay}ms`, '--stagger': `${stagger}ms` } as CSSProperties}
                                    >
                                        {ch}
                                    </span>
                                );
                            })}
                        </span>
                        {w < words.length - 1 && ' '}
                        </span>
                    ))}
                </span>
            ))}
        </span>
    );
}

const PETAL_COLORS = ['#ff8fb8', '#ffffff', '#7fd36b', '#ffd23f', '#ff6fa3', '#a8e48a'];

/** Petals and leaves drifting down through the hero sky. */
export function Petals({ count = 14, seed = 7 }: { count?: number; seed?: number }) {
    const rand = seeded(seed);
    const petals = Array.from({ length: count }, () => ({
        left: `${Math.round(rand() * 100)}%`,
        dur: `${(9 + rand() * 9).toFixed(1)}s`,
        delay: `${(-rand() * 18).toFixed(1)}s`,
        dx: `${Math.round(60 + rand() * 160)}px`,
        size: rand() < 0.35 ? 6 : 4,
        color: PETAL_COLORS[Math.floor(rand() * PETAL_COLORS.length)],
    }));
    return (
        <div className="px-petals pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            {petals.map((p, k) => (
                <span
                    key={k}
                    className="px-petal"
                    style={
                        {
                            left: p.left,
                            '--dur': p.dur,
                            '--delay': p.delay,
                            '--dx': p.dx,
                            '--c': p.color,
                            '--s': `${p.size}px`,
                        } as CSSProperties
                    }
                />
            ))}
        </div>
    );
}

/** Pixel sun with stepped, rotating rays. Pure decoration. */
export function PixelSun({ className = '', style }: { className?: string; style?: CSSProperties }) {
    return (
        <div className={`px-sun ${className}`} style={style} aria-hidden="true">
            <span className="px-sun__rays" />
            <span className="px-sun__disc" />
        </div>
    );
}

/**
 * Grid of signboard-coloured cells that blink out from the centre — the scene
 * "boots" like a cartridge loading. Removes itself once done.
 */
export function DissolveReveal({ cols = 14, rows = 12, start = 450, spread = 1100, seed = 3 }) {
    const [done, setDone] = useState(false);
    useEffect(() => {
        const t = window.setTimeout(() => setDone(true), start + spread + 300);
        return () => window.clearTimeout(t);
    }, [start, spread]);
    if (done) return null;

    const rand = seeded(seed);
    const cx = (cols - 1) / 2;
    const cy = (rows - 1) / 2;
    const maxDist = Math.hypot(cx, cy);
    const cells = Array.from({ length: cols * rows }, (_, k) => {
        const x = k % cols;
        const y = Math.floor(k / cols);
        const t = Math.hypot(x - cx, y - cy) / maxDist; // centre first
        return Math.round(start + (t * 0.75 + rand() * 0.25) * spread);
    });

    return (
        <div className="px-dissolve" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr)` }} aria-hidden="true">
            {cells.map((d, k) => (
                <span key={k} style={{ animationDelay: `${d}ms`, background: (k + Math.floor(k / cols)) % 2 ? '#1d4f4a' : '#24605a' }} />
            ))}
        </div>
    );
}

/** Display title with the navy outline. `gold` gives it the "BONITO?" fill. */
export function Stroke({ text, gold = false, className = '' }: { text: string; gold?: boolean; className?: string }) {
    return (
        <span className={`px-stroke ${gold ? 'px-stroke--gold' : ''} ${className}`} data-text={text}>
            {text}
        </span>
    );
}

export function Clouds({ count = 4 }: { count?: number }) {
    const clouds = [
        { top: '6%', dur: '95s', delay: '-20s', scale: 1 },
        { top: '18%', dur: '130s', delay: '-80s', scale: 0.7 },
        { top: '34%', dur: '110s', delay: '-50s', scale: 0.85 },
        { top: '12%', dur: '150s', delay: '-120s', scale: 0.55 },
    ].slice(0, count);
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            {clouds.map((c, i) => (
                <span
                    key={i}
                    className="px-cloud"
                    style={{ top: c.top, left: 0, scale: String(c.scale), '--dur': c.dur, '--delay': c.delay } as CSSProperties}
                />
            ))}
            <span className="px-bird" style={{ top: '14%', left: 0, '--dur': '28s', '--delay': '-6s' } as CSSProperties} />
            <span className="px-bird" style={{ top: '17%', left: 0, '--dur': '31s', '--delay': '-8s', scale: '0.7' } as CSSProperties} />
        </div>
    );
}
