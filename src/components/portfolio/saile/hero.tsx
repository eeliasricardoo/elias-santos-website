'use client';

/**
 * The hero: the three Simple-view steps of the Figma file (Reference, Match, Refine) played as one
 * looping animation, drawn in code. Every value is a pure function of the loop clock, so the frame
 * you see is always consistent. Curves are illustrative, as in the demos.
 */

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { BARS, C, H, W, clamp, curvePath, lerp, px, py, refAt, status, voiceAt } from './demos';

const LOOP = 16000;
const ease = (x: number) => 1 - Math.pow(1 - clamp(x), 3);
const seg = (t: number, a: number, b: number) => clamp((t - a) / (b - a));
const MONO = 'font-mono uppercase tracking-[0.14em]';

// Timeline, in ms.
const T = { drop: [1000, 1800], analyze: [3000, 5600], match: [6200, 9400], refine: [10800, 14200], end: 15200 } as const;

const REF_PATH = curvePath(refAt);

function Dial({ size, value, ring = true }: { size: number; value: number; ring?: boolean }) {
    const R = size / 2 - 4;
    const arc = 2 * Math.PI * R * 0.75;
    return (
        <div className="relative shrink-0" style={{ width: size, height: size }}>
            {ring && (
                <svg viewBox={`0 0 ${size} ${size}`} className="absolute inset-0" aria-hidden="true">
                    <circle cx={size / 2} cy={size / 2} r={R} fill="none" stroke={C.line} strokeWidth="3" strokeLinecap="round" strokeDasharray={`${arc} 999`} transform={`rotate(135 ${size / 2} ${size / 2})`} />
                    <circle cx={size / 2} cy={size / 2} r={R} fill="none" stroke={C.white} strokeWidth="3" strokeLinecap="round" strokeDasharray={`${arc * value} 999`} transform={`rotate(135 ${size / 2} ${size / 2})`} style={{ filter: 'drop-shadow(0 0 4px rgba(255,255,255,.7))' }} />
                </svg>
            )}
            <div className="absolute rounded-full" style={{ inset: size * 0.11, background: 'repeating-conic-gradient(#303030 0 2deg, #0e0e0e 2deg 4deg)', boxShadow: '0 6px 14px rgba(0,0,0,.7)' }}>
                <div className="absolute rounded-full" style={{ inset: size * 0.055, background: 'conic-gradient(from 0deg, #f4f2ec, #8d8a84, #e4e1d9, #77746e, #f4f2ec)', transform: `rotate(${-135 + 270 * value}deg)` }}>
                    <span className="absolute left-1/2 -translate-x-1/2 rounded-full bg-black" style={{ top: size * 0.04, width: size * 0.034, height: size * 0.17 }} />
                </div>
            </div>
        </div>
    );
}

function Step({ n, label, state }: { n: number; label: string; state: 'done' | 'on' | 'off' }) {
    return (
        <div
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-[13px] ${MONO}`}
            style={{ background: state === 'on' ? '#1b1b1c' : 'transparent', color: state === 'off' ? C.dim : C.white, boxShadow: state === 'on' ? '0 2px 8px rgba(0,0,0,.6), inset 0 1px 0 rgba(255,255,255,.08)' : 'none' }}
        >
            <span className="flex h-5 w-5 items-center justify-center rounded-full text-[11px]" style={{ background: state === 'off' ? '#1a1a1a' : C.white, color: state === 'off' ? C.dim : '#000' }}>
                {state === 'done' ? '✓' : n}
            </span>
            {label}
        </div>
    );
}

function Window({ t }: { t: number }) {
    const dropP = ease(seg(t, T.drop[0], T.drop[1]));
    const analyzeP = seg(t, T.analyze[0], T.analyze[1]);
    const analyzing = t >= T.analyze[0] && t < T.analyze[1] + 300;
    const matchP = ease(seg(t, T.match[0], T.match[1]));
    const m = 0.72 * matchP;
    const inMatch = t >= T.match[0] - 500;
    const inRefine = t >= T.refine[0];
    const typed = 'it sounds muffled…';
    const typeP = seg(t, T.refine[0] + 200, T.refine[0] + 1500);
    const applied = t >= T.refine[0] + 2300;
    const appliedP = ease(seg(t, T.refine[0] + 2300, T.refine[0] + 3000));

    const hasRef = t >= T.drop[1];
    const step = inRefine ? 3 : inMatch ? 2 : 1;
    const mShown = inRefine ? 0.72 : m;
    // Refine: Tone and Brightness jump to "close now" and the curve lands nearer the reference.
    const mCurve = applied ? lerp(0.72, 0.9, appliedP) : mShown;
    const showCurves = inMatch;
    const curve = curvePath((x) => lerp(voiceAt(x), refAt(x), mCurve));
    const before = curvePath((x) => lerp(voiceAt(x), refAt(x), 0.72));
    const fade = t > T.end ? seg(t, T.end, LOOP) : 0;
    const sentence = !inMatch
        ? 'Start by choosing the sound you are going for.'
        : inRefine
          ? applied
              ? 'Applied. Your tone is closer to the reference now.'
              : 'Your voice is a bit muffled and drier than the reference.'
          : m < 0.3
            ? 'Your voice is muffled and much drier than the reference.'
            : 'Your voice is a bit muffled and drier than the reference.';

    return (
        <div className="relative h-[800px] w-[1280px] overflow-hidden rounded-[22px]" style={{ background: 'linear-gradient(180deg,#151516,#0b0b0c)', border: `1px solid ${C.line}`, color: C.label }}>
            {/* header */}
            <div className="absolute left-10 top-8">
                <p className="text-[22px] font-medium tracking-[0.3em]" style={{ color: C.white, fontFamily: 'var(--font-display, inherit)' }}>SAILE</p>
                <p className={`text-[9px] ${MONO}`} style={{ color: C.dim }}>Lead vocal</p>
            </div>
            <div className="absolute left-1/2 top-6 flex -translate-x-1/2 items-center gap-2 rounded-xl p-1.5" style={{ background: C.glass, border: `1px solid ${C.line}` }}>
                <Step n={1} label="Reference" state={step > 1 ? 'done' : 'on'} />
                <span className="h-px w-6" style={{ background: step > 1 ? C.white : C.line }} />
                <Step n={2} label="Match" state={step > 2 ? 'done' : step === 2 ? 'on' : 'off'} />
                <span className="h-px w-6" style={{ background: step > 2 ? C.white : C.line }} />
                <Step n={3} label="Refine" state={step === 3 ? 'on' : 'off'} />
            </div>
            <div className="absolute right-10 top-7 flex gap-3">
                <div className={`flex items-center gap-4 rounded-lg px-4 py-2.5 text-[12px] ${MONO}`} style={{ background: C.glass, border: `1px solid ${C.line}` }}>
                    <span style={{ color: C.dim }}>Before</span>
                    <span className="rounded px-2 py-1" style={{ background: '#1d1d1e', color: C.white }}>● After</span>
                </div>
                <div className={`rounded-lg px-4 py-2.5 text-[12px] ${MONO}`} style={{ background: '#161617', border: `1px solid ${C.line}`, color: C.white }}>Advanced</div>
            </div>

            {/* knob column */}
            <div className="absolute left-10 top-[118px] flex w-[260px] flex-col items-center">
                <p className={`mb-4 text-[11px] ${MONO}`} style={{ color: C.dim }}>How close to your reference</p>
                <Dial size={170} value={inMatch ? mCurve : 0} />
                {inMatch ? (
                    <p className="mt-4 font-mono text-[40px] font-medium" style={{ color: inRefine ? C.white : C.warn, textShadow: inRefine ? 'none' : '0 0 14px rgba(217,194,125,.45)' }}>
                        {Math.round(m * 100)}%
                    </p>
                ) : (
                    <p className="mt-6 font-mono text-[28px]" style={{ color: C.dim }}>– –</p>
                )}
                <p className="mt-2 w-[240px] text-center text-[12px] leading-snug" style={{ color: C.dim }}>
                    {inMatch ? 'Turn it up to sound more like the reference. Turn it down to keep more of your own sound.' : 'Match unlocks once you add a reference song.'}
                </p>
                <div className="mt-4 flex w-[250px] items-center justify-between rounded-lg px-3 py-2.5" style={{ background: C.glass, border: `1px solid ${C.line}` }}>
                    <div>
                        <p className={`text-[8px] ${MONO}`} style={{ color: C.dim }}>Reference</p>
                        <p className="font-mono text-[12px]" style={{ color: hasRef ? C.white : C.dim }}>{hasRef ? 'reference_01.wav' : 'no reference yet'}</p>
                    </div>
                    <span className={`text-[10px] ${MONO}`}>{hasRef ? 'Change' : 'Browse'}</span>
                </div>
            </div>

            {/* display */}
            <div className="absolute left-[340px] top-[104px] h-[336px] w-[600px] rounded-2xl p-5" style={{ background: C.glass, border: `1px solid ${C.line}`, boxShadow: 'inset 0 2px 16px rgba(0,0,0,.9)' }}>
                <p className="text-[16px] font-medium" style={{ color: C.white }}>{sentence}</p>

                {!inMatch && (
                    <div className="absolute left-[70px] top-[68px] flex h-[170px] w-[460px] flex-col items-center justify-center gap-2 rounded-xl" style={{ border: `2px dashed ${analyzing ? C.warn : C.dim}`, background: 'rgba(255,255,255,.015)' }}>
                        {!analyzing ? (
                            <>
                                <span className="text-[34px] leading-none" style={{ color: C.white, transform: `translateY(${(1 - dropP) * -14}px)` }}>⤓</span>
                                <p className="text-[15px]" style={{ color: C.white }}>Drop a song you want to sound like</p>
                                <p className={`text-[9px] ${MONO}`} style={{ color: C.dim }}>WAV · MP3 · AIFF</p>
                                <p className="text-[12px]" style={{ color: C.dim }}>Analyzed on your machine. Never uploaded.</p>
                            </>
                        ) : (
                            <>
                                <p className={`text-[11px] ${MONO}`} style={{ color: C.warn }}>Separating vocal, bass and drums</p>
                                <div className="mt-2 h-1.5 w-[300px] overflow-hidden rounded-full" style={{ background: C.line }}>
                                    <div className="h-full rounded-full" style={{ width: `${analyzeP * 100}%`, background: C.warn, boxShadow: `0 0 8px ${C.warn}` }} />
                                </div>
                                <p className="font-mono text-[12px]" style={{ color: C.dim }}>{Math.round(analyzeP * 100)}%</p>
                            </>
                        )}
                    </div>
                )}
                {!inMatch && t >= T.drop[0] && t < T.analyze[0] && (
                    <div className="absolute left-[250px] rounded-md px-3 py-1.5 font-mono text-[12px]" style={{ top: 20 + dropP * 150, background: '#1d1d1e', border: `1px solid ${C.target}`, color: C.white }}>
                        reference_01.wav
                    </div>
                )}

                {showCurves && (
                    <svg viewBox={`0 0 ${W} ${H}`} className="absolute left-5 top-[52px] block" style={{ width: 560, height: 215 }} aria-hidden="true">
                        {[0.33, 0.66].map((x) => (
                            <line key={x} x1={px(x)} x2={px(x)} y1="6" y2={H - 22} stroke={C.warn} strokeOpacity=".35" strokeDasharray="2 4" />
                        ))}
                        {inRefine && <path d={before} fill="none" stroke={C.dim} strokeWidth="2" />}
                        <path d={REF_PATH} fill="none" stroke={C.warn} strokeWidth="2" strokeDasharray="5 5" strokeLinecap="round" />
                        <path d={curve} fill="none" stroke={C.white} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 5px rgba(255,255,255,.7))' }} />
                    </svg>
                )}
                <div className={`absolute bottom-4 left-5 right-5 flex justify-around border-t pt-3 text-[10px] ${MONO}`} style={{ borderColor: C.line, color: C.dim }}>
                    <span>Deep</span>
                    <span>Body</span>
                    <span>Air</span>
                </div>
            </div>

            {/* right panel */}
            <div className="absolute right-10 top-[118px] w-[300px]">
                <p className={`mb-3 text-[11px] ${MONO}`} style={{ color: C.dim }}>{inMatch ? 'What is different' : 'How it works'}</p>
                {inMatch ? (
                    <div className="flex flex-col gap-3">
                        {BARS.map((b, k) => {
                            const mm = inRefine ? (applied && k < 2 ? lerp(0.72, 1, appliedP) : 0.72) : m;
                            const c = lerp(b.from, b.to, mm);
                            const s = status(c);
                            return (
                                <div key={b.k} className="rounded-lg px-3.5 py-2.5" style={{ background: C.glass, border: `1px solid ${C.line}` }}>
                                    <div className="flex items-baseline justify-between">
                                        <span className={`text-[9px] ${MONO}`} style={{ color: C.dim }}>{b.k}</span>
                                        <span className="text-[13px]" style={{ color: s.color }}>{b.words[s.i]}</span>
                                    </div>
                                    <div className="mt-2 h-1 overflow-hidden rounded-full" style={{ background: C.line }}>
                                        <div className="h-full rounded-full" style={{ width: `${c * 100}%`, background: s.color, boxShadow: `0 0 6px ${s.color}88` }} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="flex flex-col gap-3">
                        {[
                            ['Drop a reference', 'A song that sounds the way you want yours to sound.'],
                            ['Turn Match', 'One knob moves your vocal toward that sound.'],
                            ['Refine', 'Use the four knobs, or tell Copilot what you hear.'],
                        ].map(([a, b], k) => (
                            <div key={a} className="flex gap-3 rounded-lg px-3.5 py-3" style={{ background: C.glass, border: `1px solid ${k === 0 ? C.target : C.line}` }}>
                                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px]" style={{ background: k === 0 ? C.white : '#1a1a1a', color: k === 0 ? '#000' : C.dim }}>{k + 1}</span>
                                <div>
                                    <p className="text-[14px]" style={{ color: C.white }}>{a}</p>
                                    <p className="text-[12px] leading-snug" style={{ color: C.dim }}>{b}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* module keys */}
            <div className="absolute left-10 right-10 top-[524px] grid grid-cols-8 gap-3">
                {['Cleanup', 'Pitch', 'Tone', 'Dynamics', 'FX', 'Space', 'Fit', 'Output'].map((k) => (
                    <div key={k} className={`flex items-center justify-center gap-2 rounded-lg py-2.5 text-[11px] ${MONO}`} style={{ background: 'linear-gradient(180deg,#1c1c1d,#111)', border: `1px solid ${C.line}`, color: k === 'FX' ? C.dim : C.white }}>
                        <i className="h-1.5 w-1.5 rounded-full" style={{ background: k === 'FX' ? C.line : C.white, boxShadow: k === 'FX' ? 'none' : '0 0 5px #fff' }} />
                        {k}
                    </div>
                ))}
            </div>

            {/* macros + copilot */}
            <div className="absolute inset-x-8 bottom-6 top-[582px] rounded-2xl" style={{ background: 'rgba(255,255,255,.015)', border: `1px solid ${C.line}` }}>
                <div className="absolute left-6 top-4 flex gap-8">
                    {[
                        ['Brightness', 'More air and clarity', 0.35, 0.3],
                        ['Presence', 'Closer, more upfront', 0.55, 0.2],
                        ['Space', 'More room and echo', 0.5, 0.1],
                        ['Punch', 'More impact', 0.5, 0],
                    ].map(([name, hint, base, gain]) => (
                        <div key={name as string} className="flex w-[116px] flex-col items-center gap-2">
                            <Dial size={80} value={clamp((base as number) + (gain as number) * (inMatch ? mCurve : 0))} />
                            <p className={`text-[12px] ${MONO}`} style={{ color: C.white }}>{name}</p>
                            <p className="text-center text-[11px] leading-tight" style={{ color: C.dim }}>{hint}</p>
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-4 right-6 top-4 w-[560px] border-l pl-8" style={{ borderColor: C.line }}>
                    {applied ? (
                        <div>
                            <div className="flex items-baseline justify-between">
                                <p className={`text-[12px] ${MONO}`} style={{ color: C.white }}>Applied · 2 changes</p>
                                <p className={`text-[10px] ${MONO}`} style={{ color: C.dim }}>Undo is one click away</p>
                            </div>
                            <p className="mt-3 text-[14px] leading-snug" style={{ color: C.white }}>
                                Tone went from 82% to 93%. The biggest difference left is Space: your vocal is much drier than the reference.
                            </p>
                            <div className="mt-4 flex gap-3">
                                <div className={`flex-1 rounded-lg px-4 py-3 text-center text-[12px] ${MONO}`} style={{ background: 'linear-gradient(180deg,#232324,#141415)', border: `1px solid ${C.line}`, color: C.white }}>● Fix space next</div>
                                <div className={`rounded-lg px-4 py-3 text-[12px] ${MONO}`} style={{ border: `1px solid ${C.line}` }}>Undo</div>
                                <div className={`rounded-lg px-4 py-3 text-[12px] ${MONO}`} style={{ border: `1px solid ${C.line}` }}>I am done</div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <p className={`text-[12px] ${MONO}`} style={{ color: C.white }}>Or just tell Copilot what you hear</p>
                            <div className="mt-3 rounded-lg px-4 py-3 font-mono text-[13px]" style={{ background: C.glass, border: `1px solid ${C.line}`, color: inRefine ? C.white : C.dim }}>
                                › {inRefine ? typed.slice(0, Math.floor(typed.length * ease(typeP))) : 'it sounds muffled…'}
                                {inRefine && typeP < 1 && <span style={{ color: C.white }}>|</span>}
                            </div>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {['Too muffled', 'Too harsh', 'Too dry', 'Buried in the beat', 'Not loud enough'].map((c) => (
                                    <span key={c} className={`rounded-md px-3 py-1.5 text-[10px] ${MONO}`} style={{ background: 'linear-gradient(180deg,#232324,#141415)', border: `1px solid ${inRefine && c === 'Too muffled' && typeP > 0.9 ? C.white : C.line}`, color: C.label }}>{c}</span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="pointer-events-none absolute inset-0" style={{ background: `rgba(11,11,12,${fade * 0.98})` }} />
        </div>
    );
}

export function HeroPlugin({ fallback }: { fallback: React.ReactNode }) {
    const wrap = useRef<HTMLDivElement>(null);
    const inView = useInView(wrap, { margin: '0px' });
    const reduced = useReducedMotion();
    const [scale, setScale] = useState(0.8);
    const [t, setT] = useState(8800);

    useEffect(() => {
        const el = wrap.current;
        if (!el) return;
        const ro = new ResizeObserver(() => setScale(el.clientWidth / 1280));
        ro.observe(el);
        setScale(el.clientWidth / 1280);
        return () => ro.disconnect();
    }, []);

    useEffect(() => {
        if (!inView || reduced) return;
        let id = 0;
        let start: number | null = null;
        const loop = (now: number) => {
            if (start === null) start = now;
            setT((now - start) % LOOP);
            id = requestAnimationFrame(loop);
        };
        id = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(id);
    }, [inView, reduced]);

    if (reduced) return <>{fallback}</>;

    return (
        <figure className="flex flex-col gap-3">
            <div ref={wrap} className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: '1280 / 800', background: '#0b0b0c' }} role="img" aria-label="Animation of the Saile plugin: a song is dropped as the reference, analysed, matched with one knob, then refined with the Copilot.">
                <div style={{ width: 1280, height: 800, transform: `scale(${scale})`, transformOrigin: 'top left' }}>
                    <Window t={t} />
                </div>
            </div>
            <figcaption className="text-sm leading-relaxed text-[var(--px-dim)]">
                The three steps, looping: drop a song, turn Match, refine with the Copilot. Drawn in code from the Figma frames; the curves are illustrative.
            </figcaption>
        </figure>
    );
}
