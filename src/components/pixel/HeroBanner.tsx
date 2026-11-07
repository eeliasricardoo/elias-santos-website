'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useMotionOff } from './motion-prefs';
import { SKY_LABEL, fetchSky, initialSky, type SkyState } from './sky-weather';

/**
 * Pixel sky banner that mirrors the visitor's live weather and time of day
 * (see sky-weather.ts). Back to front:
 *  1. scene: static sky + drifting sky strip (masked to the sky), tinted per state
 *  2. stars and moon (night) / sun (day)
 *  3. drifting clouds-only strip (hero-clouds.webp) in sync with 1, so clouds cover the sun/moon
 *  4. an extra, faster cloud layer for overcast states
 *  5. rain / snow canvas, lightning flash, fog, sunlight wash
 * Strips are [sky | mirrored sky | sky], so looping from 0 to -2/3 is seamless.
 */

const SKY = '/pixel/hero-sky.webp';
const CLOUDS = '/pixel/hero-clouds.webp';
// Each image spans the banner width, so phones get the 800/1280 versions.
// Keep in sync with the preload in pages/index.astro.
const srcSet = (base: string) => `${base}-800w.webp 800w, ${base}-1280w.webp 1280w, ${base}.webp 2000w`;
const SKY_SET = srcSet('/pixel/hero-sky');
const CLOUDS_SET = srcSet('/pixel/hero-clouds');
const SIZES = '100vw';
const imgClass = 'block h-full w-1/3 shrink-0 object-cover object-bottom';
const pixelated = { imageRendering: 'pixelated' } as const;

type Cell = { x: number; y: number; fill: string; o?: number };

function pixelDisc(grid: number, paint: (r: number, x: number, y: number) => Omit<Cell, 'x' | 'y'> | null): Cell[] {
    const c = (grid - 1) / 2;
    const cells: Cell[] = [];
    for (let y = 0; y < grid; y++) {
        for (let x = 0; x < grid; x++) {
            const cell = paint(Math.hypot(x - c, y - c), x, y);
            if (cell) cells.push({ x, y, ...cell });
        }
    }
    return cells;
}

const GRID = 17;
const SUN = pixelDisc(GRID, (r) =>
    r <= 4.2 ? { fill: '#fff6cf' } : r <= 5.4 ? { fill: '#ffd86b' } : r <= 6.9 ? { fill: '#ffe9a3', o: 0.45 } : r <= 8.4 ? { fill: '#fff3c4', o: 0.2 } : null,
);
// Full moon: pale disc, a few crater pixels and a faint halo.
const CRATERS = new Set(['6-6', '7-6', '10-9', '9-11', '6-10']);
const MOON = pixelDisc(GRID, (r, x, y) => {
    if (r <= 4.2) return { fill: CRATERS.has(`${x}-${y}`) ? '#d6d2c0' : '#f5f2e4' };
    if (r <= 5.2) return { fill: '#e0dcc8' };
    if (r <= 6.9) return { fill: '#e8ecff', o: 0.22 };
    if (r <= 8.4) return { fill: '#e8ecff', o: 0.08 };
    return null;
});

// Fixed star field (percent positions) so the night sky is identical on every render.
const STARS = Array.from({ length: 38 }, (_, i) => {
    const a = Math.sin(i * 12.9898 + 1) * 43758.5453;
    const b = Math.sin(i * 78.233 + 1) * 12345.6789;
    return { x: (a - Math.floor(a)) * 100, y: (b - Math.floor(b)) * 52, big: i % 7 === 0, twinkle: i % 3 === 0, delay: (i % 5) * 0.7 };
});

function Strip({ src, set, className = '' }: { src: string; set: string; className?: string }) {
    return (
        <div aria-hidden="true" className={`px-sky-drift absolute inset-0 ${className}`}>
            <div className="px-sky-drift__strip flex h-full w-[300%]">
                <img src={src} srcSet={set} sizes={SIZES} alt="" className={imgClass} style={pixelated} />
                <img src={src} srcSet={set} sizes={SIZES} alt="" className={`${imgClass} -scale-x-100`} style={pixelated} />
                <img src={src} srcSet={set} sizes={SIZES} alt="" className={imgClass} style={pixelated} />
            </div>
        </div>
    );
}

function PixelOrb({ cells, className }: { cells: Cell[]; className: string }) {
    return (
        <svg aria-hidden="true" viewBox={`0 0 ${GRID} ${GRID}`} shapeRendering="crispEdges" className={className}>
            {cells.map(({ x, y, fill, o }) => (
                <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={fill} opacity={o} />
            ))}
        </svg>
    );
}

/** Low-res pixelated rain or snow. */
function Precipitation({ kind, heavy, still }: { kind: 'rain' | 'snow'; heavy: boolean; still: boolean }) {
    const ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = ref.current;
        const ctx = canvas?.getContext('2d');
        const box = canvas?.parentElement;
        if (!canvas || !ctx || !box) return;

        const PX = 3;
        const w = Math.max(1, Math.round(box.clientWidth / PX));
        const h = Math.max(1, Math.round(box.clientHeight / PX));
        canvas.width = w;
        canvas.height = h;

        const density = kind === 'rain' ? (heavy ? 0.35 : 0.2) : 0.12;
        const drops = Array.from({ length: Math.round(w * density) }, () => ({
            x: Math.random() * (w + 20),
            y: Math.random() * h,
            v: kind === 'rain' ? 70 + Math.random() * 50 : 6 + Math.random() * 8,
            len: 2 + Math.round(Math.random() * 2),
            size: Math.random() < 0.25 ? 2 : 1,
            phase: Math.random() * Math.PI * 2,
        }));

        const draw = (t: number) => {
            ctx.clearRect(0, 0, w, h);
            if (kind === 'rain') {
                ctx.fillStyle = 'rgba(226, 238, 255, 0.75)';
                for (const d of drops) {
                    const x = Math.round(d.x);
                    const y = Math.round(d.y);
                    // Slanted streak: one pixel sideways every two down (wind matches the cloud drift).
                    for (let i = 0; i < d.len; i++) ctx.fillRect(x + Math.floor(i / 2), y - i, 1, 1);
                }
            } else {
                ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
                for (const d of drops) {
                    const x = Math.round(d.x + Math.sin(t / 900 + d.phase) * 1.5);
                    ctx.fillRect(x, Math.round(d.y), d.size, d.size);
                }
            }
        };

        if (still) {
            draw(0);
            return;
        }

        let raf = 0;
        let last = performance.now();
        const tick = (now: number) => {
            const dt = Math.min(0.05, (now - last) / 1000);
            last = now;
            for (const d of drops) {
                d.y += d.v * dt;
                d.x -= (kind === 'rain' ? d.v * 0.5 : 2) * dt;
                if (d.y > h + 4 || d.x < -4) {
                    d.y = -Math.random() * 10;
                    d.x = Math.random() * (w + 20);
                }
            }
            draw(now);
            raf = requestAnimationFrame(tick);
        };
        const start = () => {
            if (!raf && !document.hidden) {
                last = performance.now();
                raf = requestAnimationFrame(tick);
            }
        };
        const stop = () => {
            cancelAnimationFrame(raf);
            raf = 0;
        };
        const io = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()));
        io.observe(box);
        const onVis = () => (document.hidden ? stop() : start());
        document.addEventListener('visibilitychange', onVis);

        return () => {
            stop();
            io.disconnect();
            document.removeEventListener('visibilitychange', onVis);
        };
    }, [kind, heavy, still]);

    return <canvas ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" style={pixelated} />;
}

export function HeroBanner() {
    const [sky, setSky] = useState<SkyState>({ weather: 'clear', time: 'day', temp: null, live: false });
    const [flash, setFlash] = useState(false);
    const motionOff = useMotionOff();

    // Local clock / cached state before paint, then the live reading.
    useLayoutEffect(() => setSky(initialSky()), []);
    useEffect(() => {
        let cancelled = false;
        fetchSky().then((s) => {
            if (s && !cancelled) setSky(s);
        });
        return () => {
            cancelled = true;
        };
    }, []);

    // Occasional lightning during storms.
    useEffect(() => {
        if (sky.weather !== 'storm' || motionOff) return;
        let timer = 0;
        const schedule = () => {
            timer = window.setTimeout(() => {
                setFlash(true);
                window.setTimeout(() => setFlash(false), 700);
                schedule();
            }, 5000 + Math.random() * 9000);
        };
        schedule();
        return () => window.clearTimeout(timer);
    }, [sky.weather, motionOff]);

    const { weather, time } = sky;
    const night = time === 'night';
    const clearish = weather === 'clear' || weather === 'partly';
    const label = `${SKY_LABEL[weather]}${night ? ', night' : ''}`;

    return (
        <div
            data-sky={weather}
            data-time={time}
            className="px-sky relative h-[160px] sm:h-[168px] md:h-[212px] lg:h-[240px] w-full overflow-hidden bg-[#93c7f8]"
        >
            <div className="px-sky-scene absolute inset-0">
                <img
                    src={SKY}
                    srcSet={SKY_SET}
                    sizes={SIZES}
                    alt={`Pixel art sky mirroring the visitor's current weather: ${label.toLowerCase()}`}
                    width={2000}
                    height={1090}
                    fetchPriority="high"
                    className="h-full w-full object-cover object-bottom"
                    style={pixelated}
                />
                <Strip src={SKY} set={SKY_SET} />
            </div>

            {night && clearish && (
                <div aria-hidden="true" className="px-sky-stars absolute inset-0">
                    {STARS.map((s, i) => (
                        <span
                            key={i}
                            className={`absolute bg-white ${s.big ? 'h-[3px] w-[3px]' : 'h-[2px] w-[2px]'} ${s.twinkle ? 'px-sky-twinkle' : ''}`}
                            style={{ left: `${s.x}%`, top: `${s.y}%`, animationDelay: `${s.delay}s` }}
                        />
                    ))}
                </div>
            )}

            {clearish && (
                <PixelOrb cells={night ? MOON : SUN} className="absolute left-[70%] top-[6%] h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24" />
            )}

            <Strip src={CLOUDS} set={CLOUDS_SET} className="px-sky-clouds" />
            <Strip src={CLOUDS} set={CLOUDS_SET} className="px-sky-clouds px-sky-clouds--extra" />

            {(weather === 'rain' || weather === 'storm') && <Precipitation kind="rain" heavy={weather === 'storm'} still={motionOff} />}
            {weather === 'snow' && <Precipitation kind="snow" heavy={false} still={motionOff} />}

            <div aria-hidden="true" className="px-sky-sunlight pointer-events-none absolute inset-0" />
            <div aria-hidden="true" className="px-sky-fog pointer-events-none absolute inset-0" />
            <div aria-hidden="true" className={`px-sky-flash pointer-events-none absolute inset-0 ${flash ? 'is-on' : ''}`} />

            {sky.live && (
                <p className="px-sky-chip font-pixel-label absolute bottom-2 right-3 sm:bottom-3 sm:right-4 text-[10px] sm:text-[11px]">
                    <span className="px-sky-chip__dot" aria-hidden="true" />
                    Your sky now · {SKY_LABEL[weather]}
                    {sky.temp !== null && ` · ${Math.round(sky.temp)}°`}
                </p>
            )}
        </div>
    );
}
