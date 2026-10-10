'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { Moon, Sun, Sunset } from 'lucide-react';
import { mascotReact } from './mascot-bus';
import { OVERLOOK_HOTSPOTS, saoPauloTime } from './pixel-copy';
import { DissolveReveal } from './hero-fx';
import { motionOff } from './motion-prefs';

// Sparkle positions on the waterfalls / lake, in % of the overlook image (1013×893).
const WATER_SPARKLES: [number, number, number][] = [
    [45, 34, 0], [68, 38, 1.1], [64, 63, 2], [60, 70, 0.6], [47, 46, 2.6], [71, 55, 1.7],
];

function useSaoPauloClock() {
    const [time, setTime] = useState<string | null>(null);
    useEffect(() => {
        const update = () => setTime(saoPauloTime());
        update();
        const id = window.setInterval(update, 20000);
        return () => window.clearInterval(id);
    }, []);
    return time;
}

/** Small parallax — the scene drifts a few px against the pointer. */
function useParallax<T extends HTMLElement>(strength = 6) {
    const ref = useRef<T>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el || window.matchMedia('(pointer: coarse), (prefers-reduced-motion: reduce)').matches) return;
        const onMove = (e: PointerEvent) => {
            if (motionOff()) {
                el.style.removeProperty('--px-par-x');
                el.style.removeProperty('--px-par-y');
                return;
            }
            const r = el.getBoundingClientRect();
            const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
            const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
            // Snap to whole pixels so it stays crisp.
            el.style.setProperty('--px-par-x', `${Math.round(-x * strength)}px`);
            el.style.setProperty('--px-par-y', `${Math.round(-y * strength)}px`);
        };
        window.addEventListener('pointermove', onMove, { passive: true });
        return () => window.removeEventListener('pointermove', onMove);
    }, [strength]);
    return ref;
}

function FrameBar({ left, right }: { left: string; right?: string | null }) {
    return (
        <figcaption className="px-bar flex items-center justify-between gap-3 px-3 py-2 font-pixel-label text-[11px]">
            <span className="flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 bg-[var(--px-red)]" />
                <span className="inline-block h-2.5 w-2.5 bg-[var(--px-gold)]" />
                <span className="inline-block h-2.5 w-2.5 bg-[#5be36a]" />
                <span className="ml-2">{left}</span>
            </span>
            {right !== undefined && <span className="tabular-nums">{right}</span>}
        </figcaption>
    );
}

type TimeOfDay = 'day' | 'sunset' | 'night';

// Everything below is in % of the overlook image (1013×893).
const WATERFALLS: [number, number, number, number][] = [
    [44.2, 29.3, 4.1, 9.3],
    [64.7, 33.6, 6.9, 9.9],
    [61.4, 56.6, 6.7, 13.4],
];
const WINDOW_LIGHTS: [number, number][] = [
    [46.4, 6.9], [47.4, 10.6], [52.3, 13.4], [56.8, 16.8], [79.5, 18.5], [80, 13.4], [85.9, 20.2], [91.8, 19],
    [97.7, 16.8], [89.3, 37], [95.3, 37], [97.7, 43.7], [46.4, 40.3], [41.5, 40.9], [81, 33.6], [60.7, 29.7], [55.8, 24.1],
];
const NIGHT_STARS: [number, number, number][] = [
    [14, 3, 0], [22, 6, 1.3], [31, 2.5, 0.6], [39, 5, 2.2], [58, 3, 1.7], [66, 6.5, 0.3], [79, 2, 2.6], [88, 4.5, 1.1],
];
const BUTTERFLIES: { left: string; top: string; color: string; dur: string; delay: string }[] = [
    { left: '8%', top: '78%', color: '#ff6fa3', dur: '7s', delay: '0s' },
    { left: '22%', top: '86%', color: '#ffd23f', dur: '9s', delay: '-3s' },
    { left: '88%', top: '84%', color: '#9b7bff', dur: '8s', delay: '-5s' },
];

const TOD_LINES: Record<TimeOfDay, string> = {
    day: 'Daylight. Peak design-review hours.',
    sunset: 'Golden hour. Best light for screenshots.',
    night: 'Night mode. The city keeps its lights on — so do I, sometimes.',
};

const TOD_OPTIONS: { id: TimeOfDay; label: string; icon: typeof Sun }[] = [
    { id: 'day', label: 'Day', icon: Sun },
    { id: 'sunset', label: 'Sunset', icon: Sunset },
    { id: 'night', label: 'Night', icon: Moon },
];

/**
 * Hero diorama: Elias and the dog overlooking the city that breathes.
 * Waterfalls run, the train crosses the bridge, boats bob, the robot blinks,
 * and the whole hero re-lights for day / sunset / night. Hotspots talk.
 */
export function OverlookScene() {
    const time = useSaoPauloClock();
    const ref = useParallax<HTMLDivElement>(5);
    const figureRef = useRef<HTMLElement>(null);
    const [tod, setTod] = useState<TimeOfDay>('day');

    // The hero sky (outside this component) follows the scene's time of day.
    useEffect(() => {
        figureRef.current?.closest('.px-root')?.setAttribute('data-tod', tod);
    }, [tod]);

    const pick = (next: TimeOfDay) => {
        if (next === tod) return;
        setTod(next);
        mascotReact({ mood: next === 'night' ? 'squint' : next === 'sunset' ? 'smirk' : 'wink', say: TOD_LINES[next], hold: 1600, announce: true });
    };

    return (
        <figure ref={figureRef} className="px-frame px-frame-drop" data-tod={tod}>
            <figcaption className="px-bar flex items-center justify-between gap-3 px-3 py-1.5 font-pixel-label text-[11px]">
                <span className="flex items-center gap-2">
                    <span className="inline-block h-2.5 w-2.5 bg-[var(--px-red)]" />
                    <span className="inline-block h-2.5 w-2.5 bg-[var(--px-gold)]" />
                    <span className="inline-block h-2.5 w-2.5 bg-[#5be36a]" />
                    <span className="ml-2 hidden sm:inline">FUTURE_01.PNG</span>
                </span>
                <span className="flex items-center gap-3">
                    <span className="tabular-nums">SP {time ?? '--:--'}</span>
                    <span className="flex gap-[3px] bg-[#0f2d2a] p-[3px]" role="group" aria-label="Time of day">
                        {TOD_OPTIONS.map(({ id, label, icon: Icon }) => (
                            <button
                                key={id}
                                type="button"
                                onClick={() => pick(id)}
                                aria-pressed={tod === id}
                                aria-label={label}
                                title={label}
                                className={`grid h-6 w-6 place-items-center transition-colors ${
                                    tod === id ? 'bg-[var(--px-gold)] text-[var(--px-ink)]' : 'text-[var(--px-on-sign)] hover:bg-[#24605a]'
                                }`}
                            >
                                <Icon className="h-3.5 w-3.5" />
                            </button>
                        ))}
                    </span>
                </span>
            </figcaption>

            <div ref={ref} className="px-scene" role="group" aria-label="Scene with buttons — each one makes Elias comment">
                <div
                    className="relative"
                    style={{
                        transform: 'translate(var(--px-par-x, 0), var(--px-par-y, 0)) scale(1.03)',
                        transition: 'transform 200ms steps(3)',
                    }}
                >
                    {/* Everything that gets re-lit by the time-of-day grade */}
                    <div className="px-grade relative">
                        <img
                            src="/pixel/utopia-overlook.webp"
                            alt="Pixel-art Elias with a backpack, a small robot and a golden dog at his side, overlooking a green city of waterfalls, trains and solar gardens."
                            width={1013}
                            height={893}
                            fetchPriority="high"
                            decoding="async"
                        />

                        {WATERFALLS.map(([l, t, w, h], i) => (
                            <span
                                key={`w${i}`}
                                className="px-waterfall"
                                style={{ left: `${l}%`, top: `${t}%`, width: `${w}%`, height: `${h}%`, animationDelay: `${i * -0.4}s` }}
                            />
                        ))}
                        <span className="px-mist" style={{ left: '59%', top: '67%', width: '11%', height: '5%' }} />

                        {/* Train runs along the bridge, clipped between the buildings */}
                        <span className="px-train-track" style={{ left: '44.92%', top: '40.31%', width: '35.54%', height: '7.84%' }}>
                            <img src="/pixel/fx-train.webp" alt="" className="px-train" width={127} height={37} />
                        </span>

                        <img src="/pixel/fx-boat1.webp" alt="" className="px-boat" width={54} height={66} style={{ left: '54.3%', top: '63.4%', width: '5.33%' }} />
                        <img
                            src="/pixel/fx-boat2.webp"
                            alt=""
                            className="px-boat"
                            width={50}
                            height={68}
                            style={{ left: '61.8%', top: '71%', width: '4.94%', animationDelay: '-1.1s' }}
                        />

                        {/* Robot blink: cover the eyes, draw closed-eye lines */}
                        <span className="px-robot-blink" style={{ left: '7.3%', top: '50.4%', width: '7.7%', height: '3.4%' }}>
                            <i style={{ left: '8%', width: '30%' }} />
                            <i style={{ left: '62%', width: '30%' }} />
                        </span>
                    </div>

                    {/* Light that isn't graded: sun glow, window lights, stars */}
                    <span className="px-sunray px-tod-day" style={{ left: '62.6%', top: '-4%', width: '20%', aspectRatio: '1' }} />
                    {WINDOW_LIGHTS.map(([x, y], i) => (
                        <span key={`l${i}`} className="px-window-light px-tod-night" style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${(i % 5) * 0.7}s` }} />
                    ))}
                    {NIGHT_STARS.map(([x, y, d], i) => (
                        <span key={`n${i}`} className="px-twinkle px-tod-night" style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${d}s` }} />
                    ))}
                    {WATER_SPARKLES.map(([x, y, d], i) => (
                        <span key={i} className="px-twinkle px-tod-day" style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${d}s` }} />
                    ))}
                    {BUTTERFLIES.map((b, i) => (
                        <span
                            key={`b${i}`}
                            className="px-butterfly px-tod-light"
                            style={{ left: b.left, top: b.top, '--c': b.color, '--dur': b.dur, animationDelay: `${b.delay}, 0s` } as CSSProperties}
                        />
                    ))}
                    <span className="px-bird" style={{ top: '9%', left: 0, '--dur': '18s', '--delay': '-4s' } as CSSProperties} />
                    <span className="px-bird" style={{ top: '12%', left: 0, '--dur': '20s', '--delay': '-5s', scale: '0.7' } as CSSProperties} />

                    {OVERLOOK_HOTSPOTS.map((h) => (
                        <button
                            key={h.id}
                            type="button"
                            className="px-hotspot"
                            aria-label={h.label}
                            title={h.label}
                            style={{ left: `${h.box[0]}%`, top: `${h.box[1]}%`, width: `${h.box[2]}%`, height: `${h.box[3]}%` }}
                            onClick={() => mascotReact({ mood: h.mood, say: h.say.replace('{time}', saoPauloTime()), hold: 2000, announce: true })}
                        >
                            <span className="px-hotspot__hint" />
                        </button>
                    ))}
                </div>
                <DissolveReveal />
            </div>

            <div className="px-bar flex items-center gap-2 px-3 py-2 font-pixel-label text-[11px]">
                <span className="inline-block h-2 w-2 bg-[var(--px-gold)]" />
                CLICK THE GOLDEN SQUARES · CHANGE THE TIME OF DAY
            </div>
        </figure>
    );
}

/** A plain framed scene with a caption bar — used for the street and community art. */
export function PixelScene({
    src,
    alt,
    width,
    height,
    label,
    caption,
}: {
    src: string;
    alt: string;
    width: number;
    height: number;
    label: string;
    caption: string;
}) {
    return (
        <figure className="px-frame px-frame-drop">
            <FrameBar left={label} right={caption} />
            <div className="px-scene">
                <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" />
            </div>
        </figure>
    );
}

/**
 * Portrait that toggles between the pixel version and the real photo with a
 * "resolution boot-up" — the photo is drawn at growing block sizes.
 */
export function DepixelPortrait() {
    const [mode, setMode] = useState<'pixel' | 'photo'>('pixel');
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const photo = useRef<HTMLImageElement | null>(null);
    const raf = useRef(0);

    const draw = (block: number) => {
        const canvas = canvasRef.current;
        const img = photo.current;
        if (!canvas || !img) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const size = canvas.width;
        const small = Math.max(1, Math.round(size / block));
        ctx.imageSmoothingEnabled = false;
        ctx.clearRect(0, 0, size, size);
        // Downscale into a corner, then blow it back up with nearest-neighbour.
        ctx.drawImage(img, 0, 0, small, small);
        ctx.drawImage(canvas, 0, 0, small, small, 0, 0, size, size);
    };

    const showPhoto = () => {
        const run = () => {
            setMode('photo');
            mascotReact({ mood: 'surprised', say: 'Showing the photo. Yes, I exist in high resolution too.', hold: 1600, announce: true });
            const reduce = motionOff();
            const blocks = reduce ? [1] : [48, 32, 20, 12, 7, 4, 2, 1];
            let i = 0;
            const step = () => {
                draw(blocks[i]);
                i += 1;
                if (i < blocks.length) raf.current = window.setTimeout(step, 70);
            };
            step();
        };
        if (photo.current) return run();
        const img = new Image();
        img.src = '/pixel/portrait-photo.webp';
        img.onload = () => {
            photo.current = img;
            run();
        };
    };

    useEffect(() => () => window.clearTimeout(raf.current), []);

    return (
        <div className="px-frame px-frame-drop overflow-hidden">
            <div className="relative aspect-square bg-[linear-gradient(180deg,#5bb8ec,#c9ecfb_70%,#dcf0c8)]">
                <img
                    src="/pixel/portrait-pixel.webp"
                    alt="Pixel-art portrait of Elias: messy dark hair, mustache, eyebrow piercing, black turtleneck."
                    width={720}
                    height={731}
                    loading="lazy"
                    className="absolute inset-x-0 bottom-0 mx-auto h-[94%] w-auto"
                    style={{ opacity: mode === 'pixel' ? 1 : 0, transition: 'opacity 200ms steps(2)' }}
                />
                <canvas
                    ref={canvasRef}
                    width={720}
                    height={720}
                    className="absolute inset-0 h-full w-full"
                    style={{ opacity: mode === 'photo' ? 1 : 0, imageRendering: 'pixelated' }}
                    role="img"
                    aria-label="Photo of Elias Ricardo in a black turtleneck."
                    aria-hidden={mode !== 'photo'}
                />
            </div>
            <div className="grid grid-cols-2 gap-[4px] bg-[var(--px-line)] p-[4px]" role="group" aria-label="Portrait resolution">
                {(['pixel', 'photo'] as const).map((m) => (
                    <button
                        key={m}
                        type="button"
                        aria-pressed={mode === m}
                        onClick={() => (m === 'photo' ? showPhoto() : setMode('pixel'))}
                        className={`py-2 font-pixel-label text-[11px] transition-colors ${
                            mode === m ? 'bg-[var(--px-gold)] text-[var(--px-ink)]' : 'bg-[var(--px-panel)] text-[var(--px-muted)] hover:text-[var(--px-ink)]'
                        }`}
                    >
                        {m === 'pixel' ? '8-BIT' : 'HI-RES'}
                    </button>
                ))}
            </div>
        </div>
    );
}
