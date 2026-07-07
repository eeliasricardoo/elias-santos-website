'use client';

import { TICKER_ITEMS } from './story-data';

/**
 * Inverted paper band with an infinite marquee — a jolt of energy
 * between the dark acts. `tilt` rotates it slightly off-axis.
 */
export function TickerBand({ tilt = false, reverse = false }: { tilt?: boolean; reverse?: boolean }) {
    // Content twice so the -50% translate loops seamlessly
    const strip = [...TICKER_ITEMS, ...TICKER_ITEMS];

    return (
        <div className="overflow-hidden py-10" style={{ background: 'var(--er-ink)' }} aria-hidden="true">
            <div
                className={`${tilt ? '-rotate-2 scale-105' : ''} py-3`}
                style={{ background: 'var(--er-paper)', color: 'var(--er-ink)' }}
            >
                <div className={`er-marquee ${reverse ? 'er-marquee--reverse' : ''}`}>
                    {strip.map((item, i) => (
                        <span
                            key={i}
                            className="flex shrink-0 items-center gap-6 pr-6 text-xl font-bold tracking-tight md:text-2xl"
                        >
                            {item}
                            <span className="text-base opacity-50">✦</span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
