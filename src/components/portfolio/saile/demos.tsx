'use client';

/**
 * Coded demos of the Saile screens. They follow the Figma frames (same tokens, same words,
 * same graph logic) but the curves are illustrative, not measured from a real voice.
 */

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

// Tokens from the Saile Figma file ("Saile / Tokens" and "Saile / Accent", option B).
export const C = {
    panel: '#0b0b0c',
    glass: '#050505',
    line: '#262625',
    platinum: '#E4E1D9',
    label: '#D8D5CD',
    target: '#B5B1A8',
    dim: '#7F7C75',
    white: '#FFFFFF',
    ok: '#8FE3B5',
    warn: '#D9C27A',
    bad: '#E8847C',
} as const;

export const MONO = 'font-mono uppercase tracking-[0.14em]';
export const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
export const gauss = (t: number, c: number, w: number) => Math.exp(-(((t - c) / w) ** 2));

function useAnimationFrame(cb: (time: number) => void, active: boolean) {
    const ref = useRef(cb);
    ref.current = cb;
    useEffect(() => {
        if (!active) return;
        let id = requestAnimationFrame(function loop(t) {
            ref.current(t);
            id = requestAnimationFrame(loop);
        });
        return () => cancelAnimationFrame(id);
    }, [active]);
}

/** Dark "glass" panel that holds a demo, like the plugin window does. */
function Panel({ children, label }: { children: React.ReactNode; label: string }) {
    return (
        <div
            role="group"
            aria-label={label}
            className="rounded-2xl p-4 sm:p-6"
            style={{ background: C.panel, border: `1px solid ${C.line}`, color: C.label, boxShadow: '0 24px 60px -30px rgba(0,0,0,0.6)' }}
        >
            {children}
        </div>
    );
}

function DemoNote({ children }: { children: React.ReactNode }) {
    return <p className="mt-3 text-sm leading-relaxed text-[var(--px-dim)]">{children}</p>;
}

/* ───────────────────────────── Match ───────────────────────────── */

export const W = 600;
export const H = 230;
const N = 72;

export const voiceAt = (t: number) => Math.max(0.04, 0.1 + 0.62 * gauss(t, 0.26, 0.17) + 0.2 * gauss(t, 0.55, 0.2) - 0.1 * t);
export const refAt = (t: number) => 0.12 + 0.4 * gauss(t, 0.36, 0.24) + 0.28 * gauss(t, 0.64, 0.22);
export const px = (t: number) => 8 + t * (W - 16);
export const py = (h: number) => H - 22 - h * (H - 60);

export function curvePath(fn: (t: number) => number) {
    let d = '';
    for (let i = 0; i <= N; i++) {
        const t = i / N;
        d += `${i ? 'L' : 'M'}${px(t).toFixed(1)} ${py(fn(t)).toFixed(1)}`;
    }
    return d;
}

const REF_PATH = curvePath(refAt);

export const BARS = [
    { k: 'Tone', from: 0.45, to: 0.97, words: ['Muffled', 'A bit muffled', 'Close'] },
    { k: 'Brightness', from: 0.4, to: 0.95, words: ['Too dark', 'Slightly dark', 'Close'] },
    { k: 'Width', from: 0.55, to: 0.8, words: ['Too narrow', 'Slightly narrow', 'Close'] },
    { k: 'Dynamics', from: 0.4, to: 0.68, words: ['Much too uneven', 'Too uneven', 'Even'] },
    { k: 'Space', from: 0.25, to: 0.52, words: ['Much drier', 'Drier', 'Close'] },
] as const;

// Same thresholds the plugin uses: ok at 0.70 and above, bad below 0.55, warn between.
export function status(c: number) {
    return c >= 0.7 ? { color: C.ok, i: 2 } : c < 0.55 ? { color: C.bad, i: 0 } : { color: C.warn, i: 1 };
}

function sentence(m: number) {
    if (m < 0.3) return 'Your voice is muffled and much drier than the reference.';
    if (m < 0.75) return 'Your voice is a bit muffled and drier than the reference.';
    return 'Tone and brightness are close. Space is what is left.';
}

function Knob({ value, onChange, onReset }: { value: number; onChange: (v: number) => void; onReset: () => void }) {
    const drag = useRef<{ y: number; v: number } | null>(null);
    const SIZE = 150;
    const R = 70;
    const arc = 2 * Math.PI * R * 0.75;
    return (
        <div
            role="slider"
            tabIndex={0}
            aria-label="Match"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(value * 100)}
            aria-valuetext={`${Math.round(value * 100)} percent`}
            onPointerDown={(e) => {
                e.currentTarget.setPointerCapture(e.pointerId);
                drag.current = { y: e.clientY, v: value };
            }}
            onPointerMove={(e) => {
                if (!drag.current) return;
                // 200 px of travel for the whole range, the same drag sensitivity as the plugin.
                onChange(clamp(drag.current.v + (drag.current.y - e.clientY) / 200));
            }}
            onPointerUp={() => (drag.current = null)}
            onPointerCancel={() => (drag.current = null)}
            onDoubleClick={onReset}
            onKeyDown={(e) => {
                if (e.key === 'ArrowUp' || e.key === 'ArrowRight') onChange(clamp(value + 0.02));
                if (e.key === 'ArrowDown' || e.key === 'ArrowLeft') onChange(clamp(value - 0.02));
            }}
            className="relative mx-auto cursor-grab touch-none select-none rounded-full outline-none active:cursor-grabbing focus-visible:ring-2 focus-visible:ring-[#E4E1D9]"
            style={{ width: SIZE, height: SIZE }}
        >
            <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="absolute inset-0" aria-hidden="true">
                <circle cx={SIZE / 2} cy={SIZE / 2} r={R} fill="none" stroke={C.line} strokeWidth="3" strokeLinecap="round" strokeDasharray={`${arc} 999`} transform={`rotate(135 ${SIZE / 2} ${SIZE / 2})`} />
                <circle
                    cx={SIZE / 2}
                    cy={SIZE / 2}
                    r={R}
                    fill="none"
                    stroke={C.white}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray={`${arc * value} 999`}
                    transform={`rotate(135 ${SIZE / 2} ${SIZE / 2})`}
                    style={{ filter: 'drop-shadow(0 0 4px rgba(255,255,255,.7))' }}
                />
            </svg>
            <div
                className="absolute rounded-full"
                style={{ inset: 16, background: 'repeating-conic-gradient(#303030 0 2deg, #0e0e0e 2deg 4deg)', boxShadow: '0 6px 14px rgba(0,0,0,.7)' }}
            >
                <div
                    className="absolute rounded-full"
                    style={{
                        inset: 8,
                        background: 'conic-gradient(from 0deg, #f4f2ec, #8d8a84, #e4e1d9, #77746e, #f4f2ec)',
                        transform: `rotate(${-135 + 270 * value}deg)`,
                    }}
                >
                    <span className="absolute left-1/2 top-[6px] h-[26px] w-[5px] -translate-x-1/2 rounded-full bg-black" />
                </div>
            </div>
        </div>
    );
}

export function MatchDemo() {
    const wrap = useRef<HTMLDivElement>(null);
    const inView = useInView(wrap, { margin: '-10% 0px' });
    const reduced = useReducedMotion();
    const [target, setTarget] = useState(0.72);
    const [shown, setShown] = useState(0.72);
    const [auto, setAuto] = useState(true);
    const targetRef = useRef(target);
    targetRef.current = target;
    const autoRef = useRef(auto);
    autoRef.current = auto;
    const shownRef = useRef(0.72);

    useAnimationFrame((t) => {
        const goal = autoRef.current ? 0.55 + 0.4 * Math.sin(t / 1600) : targetRef.current;
        // The curve glides behind the knob (about 50 ms time constant in the plugin).
        shownRef.current += (goal - shownRef.current) * 0.14;
        setShown(shownRef.current);
    }, inView && !reduced);

    const m = reduced ? target : shown;
    const take = (v: number) => {
        setAuto(false);
        setTarget(v);
        shownRef.current = v;
        setShown(v);
    };
    const pct = Math.round(m * 100);
    const shownPath = curvePath((t) => lerp(voiceAt(t), refAt(t), m));
    const sentenceText = sentence(m);

    return (
        <div ref={wrap}>
            <Panel label="Interactive Match demo">
                <div className="grid items-center gap-6 md:grid-cols-[170px_minmax(0,1fr)_210px]">
                    <div className="flex flex-col items-center gap-3">
                        <p className={`text-center text-[10px] ${MONO}`} style={{ color: C.dim }}>
                            How close to your reference
                        </p>
                        <Knob value={m} onChange={take} onReset={() => take(0.5)} />
                        <p className="font-mono text-4xl font-medium" style={{ color: C.warn, textShadow: '0 0 14px rgba(217,194,125,.45)' }} aria-hidden="true">
                            {pct}%
                        </p>
                        <p className="text-center text-xs leading-snug" style={{ color: C.dim }}>
                            Turn it up to sound more like the reference.
                        </p>
                    </div>

                    <div className="rounded-xl p-4" style={{ background: C.glass, border: `1px solid ${C.line}`, boxShadow: 'inset 0 2px 12px rgba(0,0,0,.8)' }}>
                        <p className="min-h-[2.5rem] text-[15px] font-medium leading-snug" style={{ color: C.white }} aria-live="polite">
                            {sentenceText}
                        </p>
                        <svg viewBox={`0 0 ${W} ${H}`} className="mt-2 block h-auto w-full" aria-hidden="true">
                            <defs>
                                <linearGradient id="sl-fill" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0" stopColor="#fff" stopOpacity=".16" />
                                    <stop offset="1" stopColor="#fff" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            {[0.33, 0.66].map((t) => (
                                <line key={t} x1={px(t)} x2={px(t)} y1="6" y2={H - 22} stroke={C.warn} strokeOpacity=".35" strokeDasharray="2 4" />
                            ))}
                            <path d={`${shownPath}L${px(1)} ${H - 22}L${px(0)} ${H - 22}Z`} fill="url(#sl-fill)" />
                            <path d={REF_PATH} fill="none" stroke={C.warn} strokeWidth="2" strokeDasharray="5 5" strokeLinecap="round" />
                            <path d={shownPath} fill="none" stroke={C.white} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 5px rgba(255,255,255,.7))' }} />
                            {(['Deep', 'Body', 'Air'] as const).map((z, i) => (
                                <text key={z} x={px(0.16 + i * 0.34)} y={H - 4} textAnchor="middle" fontSize="10" letterSpacing="1.5" fill={C.dim} className="font-mono uppercase">
                                    {z}
                                </text>
                            ))}
                        </svg>
                        <div className="mt-1 flex gap-5 text-[10px]" style={{ color: C.label }}>
                            <span className={`flex items-center gap-2 ${MONO}`}>
                                <i className="inline-block h-[3px] w-5 rounded" style={{ background: C.white }} /> Your voice
                            </span>
                            <span className={`flex items-center gap-2 ${MONO}`}>
                                <i className="inline-block w-5 border-t-2 border-dashed" style={{ borderColor: C.warn }} /> Reference
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <p className={`text-[10px] ${MONO}`} style={{ color: C.dim }}>
                            What is different
                        </p>
                        {BARS.map((b) => {
                            const c = lerp(b.from, b.to, m);
                            const s = status(c);
                            return (
                                <div key={b.k} className="rounded-lg px-3 py-2" style={{ background: C.glass, border: `1px solid ${C.line}` }}>
                                    <div className="flex items-baseline justify-between gap-2">
                                        <span className={`text-[9px] ${MONO}`} style={{ color: C.dim }}>
                                            {b.k}
                                        </span>
                                        <span className="text-xs" style={{ color: s.color }}>
                                            {b.words[s.i]}
                                        </span>
                                    </div>
                                    <div className="mt-1.5 h-1 overflow-hidden rounded-full" style={{ background: C.line }}>
                                        <div className="h-full rounded-full" style={{ width: `${c * 100}%`, background: s.color, boxShadow: `0 0 6px ${s.color}88` }} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Panel>
            <DemoNote>
                {auto ? 'It plays by itself until you grab the knob. ' : ''}Drag the knob up and down, use the arrow keys, or double-click to reset. The curves are
                illustrative, not measured from a real voice; the words and the colour thresholds are the ones in the Figma frame.
            </DemoNote>
        </div>
    );
}

/* ─────────────────────── Resonance suppressor ─────────────────────── */

const SW = 600;
const SH = 220;
const SN = 170;
const PEAKS = [
    { c: 0.3, a: 11 },
    { c: 0.6, a: 14 },
    { c: 0.78, a: 9 },
] as const;
const dbY = (db: number) => 14 + ((-8 - db) / 62) * (SH - 44);
const sx = (t: number) => 6 + t * (SW - 12);

function spectrum(time: number, depth: number) {
    const input: number[] = [];
    const output: number[] = [];
    const peakAmounts = PEAKS.map((p, i) => p.a * (0.75 + 0.25 * Math.sin(time / 700 + i * 2)));
    for (let i = 0; i <= SN; i++) {
        const t = i / SN;
        const base = -20 - 38 * Math.pow(t, 0.6) + 1.3 * Math.sin(i * 1.7 + time / 260) * 0.6 + 1.3 * Math.sin(i * 3.1 - time / 170) * 0.4;
        let peak = 0;
        PEAKS.forEach((p, k) => (peak += peakAmounts[k] * gauss(t, p.c, 0.011)));
        input.push(base + peak);
        output.push(base + peak * (1 - depth * 0.9));
    }
    return { input, output, peakAmounts };
}

const line = (vals: number[]) => vals.map((v, i) => `${i ? 'L' : 'M'}${sx(i / SN).toFixed(1)} ${dbY(v).toFixed(1)}`).join('');

export function ResonanceDemo() {
    const wrap = useRef<HTMLDivElement>(null);
    const inView = useInView(wrap, { margin: '-10% 0px' });
    const reduced = useReducedMotion();
    const [time, setTime] = useState(0);
    const [depth, setDepth] = useState(0.6);
    useAnimationFrame((t) => setTime(t), inView && !reduced);

    const { input, output, peakAmounts } = spectrum(time, depth);
    const reduction = `${line(input)}${output
        .map((v, i) => `L${sx((SN - i) / SN).toFixed(1)} ${dbY(output[SN - i]).toFixed(1)}`)
        .join('')}Z`;
    const bands = depth > 0.02 ? 3 : 0;

    return (
        <div ref={wrap}>
            <Panel label="Interactive resonance suppressor demo">
                <div className="rounded-xl p-4" style={{ background: C.glass, border: `1px solid ${C.line}`, boxShadow: 'inset 0 2px 12px rgba(0,0,0,.8)' }}>
                    <div className={`flex items-baseline justify-between text-[11px] ${MONO}`}>
                        <span style={{ color: C.white }}>Dynamics · Resonance suppressor</span>
                        <span style={{ color: C.white }}>{bands ? `Reducing ${bands} bands` : 'Not reducing'}</span>
                    </div>
                    <svg viewBox={`0 0 ${SW} ${SH}`} className="mt-3 block h-auto w-full" aria-hidden="true">
                        {[-20, -40, -60].map((db) => (
                            <g key={db}>
                                <line x1="0" x2={SW} y1={dbY(db)} y2={dbY(db)} stroke={C.line} />
                                <text x="2" y={dbY(db) - 3} fontSize="9" fill={C.dim} className="font-mono">
                                    {db}
                                </text>
                            </g>
                        ))}
                        <path d={reduction} fill="#fff" fillOpacity=".22" />
                        <path d={line(output)} fill="none" stroke={C.white} strokeWidth="2.2" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 4px rgba(255,255,255,.6))' }} />
                        {PEAKS.map((p, k) => (
                            <text key={p.c} x={sx(p.c)} y={dbY(-20 - 38 * Math.pow(p.c, 0.6) + peakAmounts[k]) - 8} textAnchor="middle" fontSize="10" fill={C.dim} className="font-mono" opacity={depth > 0.02 ? 1 : 0}>
                                {(-(peakAmounts[k] * depth * 0.9)).toFixed(1)} dB
                            </text>
                        ))}
                        {(['200', '500', '1k', '3k', '8k'] as const).map((f, i) => (
                            <text key={f} x={sx([0.1, 0.27, 0.42, 0.7, 0.88][i])} y={SH - 4} textAnchor="middle" fontSize="10" fill={C.dim} className="font-mono">
                                {f}
                            </text>
                        ))}
                    </svg>
                    <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
                        <div className={`flex gap-5 text-[10px] ${MONO}`} style={{ color: C.label }}>
                            <span className="flex items-center gap-2">
                                <i className="inline-block h-[3px] w-5 rounded" style={{ background: C.white }} /> Suppressed
                            </span>
                            <span className="flex items-center gap-2">
                                <i className="inline-block h-3 w-5 rounded-sm" style={{ background: 'rgba(255,255,255,.22)' }} /> Reduced resonances
                            </span>
                        </div>
                        <label className={`flex items-center gap-3 text-[10px] ${MONO}`} style={{ color: C.dim }}>
                            Depth
                            <input
                                type="range"
                                min={0}
                                max={100}
                                value={Math.round(depth * 100)}
                                onChange={(e) => setDepth(Number(e.target.value) / 100)}
                                className="w-40"
                                style={{ accentColor: C.platinum }}
                            />
                            <span className="w-10 font-medium" style={{ color: C.white }}>
                                {Math.round(depth * 100)}%
                            </span>
                        </label>
                    </div>
                </div>
            </Panel>
            <DemoNote>The spectrum moves like a live input. Raise Depth and the three peaks that stick out get pressed down; the grey area is what was taken out.</DemoNote>
        </div>
    );
}

/* ───────────────────────────── Pitch ───────────────────────────── */

const PW = 600;
const PH = 230;
const B0 = 13;
const B1 = 19.5;
const STEPS = [
    { at: 13, n: 62 },
    { at: 13.9, n: 64 },
    { at: 14.55, n: 65 },
    { at: 15.3, n: 64 },
    { at: 16.8, n: 67 },
    { at: 18.1, n: 65 },
] as const;
const smooth = (x: number) => x * x * (3 - 2 * x);

function corrected(b: number) {
    let n: number = STEPS[0].n;
    for (let i = 1; i < STEPS.length; i++) {
        const s = STEPS[i];
        n = lerp(n, s.n, smooth(clamp((b - (s.at - 0.1)) / 0.2)));
    }
    return n;
}
const detected = (b: number) => corrected(b) + 0.55 * Math.sin(b * 9) + 0.35 * Math.sin(b * 23 + 1) + 0.4 * Math.sin(b * 3.3);
const bx = (b: number) => 36 + ((b - B0) / (B1 - B0)) * (PW - 48);
const ny = (n: number) => PH - 36 - ((n - 60) / 9) * (PH - 70);

function notePath(fn: (b: number) => number) {
    let d = '';
    for (let i = 0; i <= 130; i++) {
        const b = B0 + (i / 130) * (B1 - B0);
        d += `${i ? 'L' : 'M'}${bx(b).toFixed(1)} ${ny(fn(b)).toFixed(1)}`;
    }
    return d;
}
const DETECTED_PATH = notePath(detected);

export function PitchDemo() {
    const wrap = useRef<HTMLDivElement>(null);
    const inView = useInView(wrap, { margin: '-10% 0px' });
    const reduced = useReducedMotion();
    const [head, setHead] = useState(1);
    const [amount, setAmount] = useState(0.4);
    const start = useRef<number | null>(null);

    useAnimationFrame((t) => {
        if (start.current === null) start.current = t;
        // 7 s to sweep the phrase, then a short hold before it starts over.
        const p = ((t - start.current) % 8000) / 7000;
        setHead(clamp(p));
    }, inView && !reduced);

    const shown = notePath((b) => lerp(detected(b), corrected(b), amount));
    const clipW = (reduced ? 1 : head) * PW;

    return (
        <div ref={wrap}>
            <Panel label="Interactive pitch correction demo">
                <div className="rounded-xl p-4" style={{ background: C.glass, border: `1px solid ${C.line}`, boxShadow: 'inset 0 2px 12px rgba(0,0,0,.8)' }}>
                    <div className={`flex items-baseline justify-between text-[11px] ${MONO}`}>
                        <span style={{ color: C.white }}>Pitch · A minor → C major</span>
                        <span style={{ color: C.white }}>Correction {Math.round(amount * 100)}%</span>
                    </div>
                    <svg viewBox={`0 0 ${PW} ${PH}`} className="mt-3 block h-auto w-full" aria-hidden="true">
                        <defs>
                            <clipPath id="pd-clip">
                                <rect x="0" y="0" width={clipW} height={PH} />
                            </clipPath>
                        </defs>
                        {[
                            ['G4', 67],
                            ['F4', 65],
                            ['E4', 64],
                            ['D4', 62],
                        ].map(([label, n]) => (
                            <g key={label}>
                                <line x1="30" x2={PW} y1={ny(n as number)} y2={ny(n as number)} stroke={C.line} />
                                <text x="2" y={ny(n as number) + 3} fontSize="9" fill={C.dim} className="font-mono">
                                    {label}
                                </text>
                            </g>
                        ))}
                        <line x1={bx(17)} x2={bx(17)} y1="8" y2={PH - 24} stroke={C.target} strokeDasharray="4 4" />
                        <text x={bx(17) + 6} y="20" fontSize="9" letterSpacing="1" fill={C.target} className="font-mono uppercase">
                            Bar 17 · C major
                        </text>
                        {[13, 14, 15, 16, 17, 18, 19].map((b) => (
                            <text key={b} x={bx(b)} y={PH - 6} textAnchor="middle" fontSize="10" fill={C.dim} className="font-mono">
                                {b}
                            </text>
                        ))}
                        <path d={DETECTED_PATH} fill="none" stroke={C.dim} strokeWidth="1.4" strokeDasharray="2 3" />
                        <g clipPath="url(#pd-clip)">
                            <path d={shown} fill="none" stroke={C.white} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 5px rgba(255,255,255,.7))' }} />
                        </g>
                        {!reduced && <line x1={clipW} x2={clipW} y1="8" y2={PH - 24} stroke={C.white} strokeOpacity=".5" />}
                    </svg>
                    <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
                        <div className={`flex gap-5 text-[10px] ${MONO}`} style={{ color: C.label }}>
                            <span className="flex items-center gap-2">
                                <i className="inline-block w-5 border-t-2 border-dotted" style={{ borderColor: C.dim }} /> Detected
                            </span>
                            <span className="flex items-center gap-2">
                                <i className="inline-block h-[3px] w-5 rounded" style={{ background: C.white }} /> Corrected
                            </span>
                        </div>
                        <label className={`flex items-center gap-3 text-[10px] ${MONO}`} style={{ color: C.dim }}>
                            Amount
                            <input
                                type="range"
                                min={0}
                                max={100}
                                value={Math.round(amount * 100)}
                                onChange={(e) => setAmount(Number(e.target.value) / 100)}
                                className="w-40"
                                style={{ accentColor: C.platinum }}
                            />
                        </label>
                    </div>
                </div>
            </Panel>
            <DemoNote>The dotted line is what the singer did; the white line is what comes out. At 0% they match, at 100% the notes snap to the scale. The shape is illustrative.</DemoNote>
        </div>
    );
}

/* ───────────────────────── Module gallery ───────────────────────── */

const MODULES = [
    { id: 'cleanup', n: '01', label: 'Cleanup', cap: 'Cleanup. Noise, room, breath and clicks on one screen, with the same macros and Copilot panel as every module.' },
    { id: 'pitch', n: '02', label: 'Pitch', cap: 'Pitch. Detected and corrected notes over bars, with a key change marked and a keyboard of allowed notes.' },
    { id: 'tone', n: '03', label: 'Tone', cap: 'Tone. A parametric EQ with draggable points, drawn against the dashed target.' },
    { id: 'dynamics', n: '04', label: 'Dynamics', cap: 'Dynamics. The compressor curve, with models (Opto, FET, VCA, Vari-mu) and a gain-reduction history.' },
    { id: 'resonance', n: '04', label: 'Resonance', cap: 'Resonance. The suppressor tab of Dynamics: what was taken out of the spectrum, in grey.' },
    { id: 'fx', n: '05', label: 'FX', cap: 'FX. Telephone, distortion, chorus and doubler, in series.' },
    { id: 'space', n: '06', label: 'Space', cap: 'Space. Reverb tail and delay taps in dB, against the reference tail, with the decay difference in words.' },
    { id: 'fit', n: '07', label: 'Fit', cap: 'Fit. Where the vocal and the beat overlap (22% masking here), and how much the beat ducks to make room.' },
    { id: 'output', n: '08', label: 'Output', cap: 'Output. Input and output meters, the ceiling and the stereo width.' },
    { id: 'beat', n: 'Role', label: 'Beat', cap: 'Beat role. Low end, tone, punch, drive and width. Designed; not built yet.' },
    { id: 'master', n: 'Role', label: 'Master', cap: 'Master role. Balance, tone, glue, width and loudness. Designed; not built yet.' },
] as const;

export function ModuleGallery() {
    const wrap = useRef<HTMLDivElement>(null);
    const inView = useInView(wrap, { margin: '-10% 0px' });
    const reduced = useReducedMotion();
    const [i, setI] = useState(2);
    const [held, setHeld] = useState(false);

    useEffect(() => {
        if (!inView || held || reduced) return;
        const id = setInterval(() => setI((v) => (v + 1) % MODULES.length), 3800);
        return () => clearInterval(id);
    }, [inView, held, reduced]);

    const current = MODULES[i];

    return (
        <div ref={wrap} onMouseEnter={() => setHeld(true)} onMouseLeave={() => setHeld(false)} onFocus={() => setHeld(true)}>
            <div role="tablist" aria-label="Saile modules" className="-mx-1 mb-4 flex gap-1.5 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {MODULES.map((m, k) => (
                    <button
                        key={m.id}
                        role="tab"
                        type="button"
                        aria-selected={k === i}
                        onClick={() => {
                            setHeld(true);
                            setI(k);
                        }}
                        className={`shrink-0 rounded-md border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors ${
                            k === i ? 'border-[var(--px-ink)] bg-[var(--px-ink)] text-white' : 'border-[var(--px-line)] text-[var(--px-muted)] hover:text-[var(--px-ink)]'
                        }`}
                    >
                        <span className="opacity-60">{m.n}</span> {m.label}
                    </button>
                ))}
            </div>
            <div role="tabpanel" className="relative overflow-hidden rounded-xl border border-[var(--px-line)] bg-white" style={{ aspectRatio: '1280 / 842' }}>
                {MODULES.map((m, k) => (
                    <img
                        key={m.id}
                        src={`/portfolios/saile/${m.id}.webp`}
                        alt={k === i ? `Saile ${m.label}: ${m.cap}` : ''}
                        aria-hidden={k !== i}
                        loading="lazy"
                        decoding="async"
                        // A class, not an inline style: the case CSS forces inline `opacity:0` to visible.
                        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${k === i ? 'opacity-100' : 'opacity-0'}`}
                    />
                ))}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[var(--px-dim)]" aria-live="off">
                {current.cap}{' '}
                <a href={`/portfolios/saile/${current.id}.webp`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                    Open full size<span className="sr-only"> (opens in a new tab)</span>
                </a>
            </p>
        </div>
    );
}
