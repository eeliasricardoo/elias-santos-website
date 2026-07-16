'use client';

import {
    Play,
    Plus,
    Sparkles,
    Send,
    Type,
    Image as ImageIcon,
    MousePointer,
    Video,
    Star,
    Terminal,
    ArrowRight,
    ArrowUp,
    Search,
} from 'lucide-react';

interface ProjectWireframeProps {
    title: string;
    accent?: string;
    className?: string;
}

function getProjectKey(title: string): string {
    const t = title.toLowerCase();
    if (t.includes('drama') || t.includes('netflix')) return 'dramafix';
    if (t.includes('emailflow') || t.includes('magic-builder') || t.includes('sfmc') || t.includes('flow')) return 'emailflow';
    if (t.includes('english')) return 'englishroom';
    if (t.includes('ranking')) return 'ranking';
    if (t.includes('support') || t.includes('queue') || t.includes('fila')) return 'support';
    if (t.includes('chat') || t.includes('ventus')) return 'chatai';
    if (t.includes('portfolio') || t.includes('site') || t.includes('meu-site') || t.includes('ux engineer')) return 'portfolio';
    return 'generic';
}

// Dark app-window shell shared by every mock. Matches the black/zinc site
// theme so covers read as product screenshots, not pasted-in wireframes.
const SHELL =
    'relative flex h-full min-h-[220px] w-full select-none flex-col overflow-hidden bg-[#0a0a0b] font-sans text-zinc-400 antialiased';

/** Faint blueprint grid, dark edition. */
function GridOverlay() {
    return (
        <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
                backgroundImage:
                    'linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
            }}
        />
    );
}

/** Soft radial accent glow anchored behind each mock's focal point. */
function Glow({ accent, className = '' }: { accent: string; className?: string }) {
    return (
        <div
            aria-hidden
            className={`pointer-events-none absolute rounded-full blur-2xl ${className}`}
            style={{ background: `radial-gradient(closest-side, ${accent}2e, transparent)` }}
        />
    );
}

/** macOS-style title bar that frames every mock as a real app window. */
function WindowChrome({ label }: { label: string }) {
    return (
        <div className="relative z-10 flex h-7 shrink-0 items-center border-b border-white/[0.06] bg-white/[0.02] px-2.5">
            <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-zinc-800" />
                <span className="h-2 w-2 rounded-full bg-zinc-800" />
                <span className="h-2 w-2 rounded-full bg-zinc-800" />
            </div>
            <span className="absolute left-1/2 -translate-x-1/2 rounded border border-white/[0.06] bg-black/40 px-2 py-px font-mono text-[8px] tracking-wider text-zinc-500">
                {label}
            </span>
        </div>
    );
}

/** Skeleton text line. Tone via className (defaults to a quiet fill). */
function Bar({ className = '' }: { className?: string }) {
    return <div className={`rounded-full bg-white/10 ${className}`} />;
}

export function ProjectWireframe({ title, accent = '#7FB0C4', className = '' }: ProjectWireframeProps) {
    const key = getProjectKey(title);
    const shell = `${SHELL} ${className}`;

    // 1. DramaFlix — streaming for older adults: oversized targets, visible focus.
    if (key === 'dramafix') {
        return (
            <div className={shell}>
                <GridOverlay />
                <WindowChrome label="dramaflix.app" />
                <div className="relative z-10 flex flex-1 flex-col gap-2.5 p-3">
                    {/* App nav */}
                    <div className="flex shrink-0 items-center justify-between">
                        <span className="text-[10px] font-black tracking-[0.22em]" style={{ color: accent }}>
                            DRAMAFLIX
                        </span>
                        <div className="flex items-center gap-2.5">
                            <Bar className="h-1 w-7" />
                            <Bar className="h-1 w-7" />
                            <span
                                className="rounded-sm border px-1.5 py-0.5 font-mono text-[7px] font-semibold tracking-widest"
                                style={{ borderColor: `${accent}66`, color: accent }}
                            >
                                A11Y ON
                            </span>
                        </div>
                    </div>

                    {/* Billboard */}
                    <div className="relative flex-1 overflow-hidden rounded-md border border-white/[0.07] bg-gradient-to-tr from-white/[0.06] via-white/[0.02] to-transparent p-3">
                        <Glow accent={accent} className="-right-12 -top-16 h-48 w-48" />
                        <div className="flex h-full flex-col justify-end gap-1.5">
                            <span className="font-mono text-[7px] tracking-[0.3em] text-zinc-500">SEASON 1 · EPISODE 4</span>
                            <div className="h-2.5 w-28 rounded-sm bg-white/25" />
                            <div className="h-1.5 w-36 rounded-sm bg-white/10" />
                            <div className="mt-1.5 flex items-center gap-2">
                                <span
                                    className="flex items-center gap-1.5 rounded px-3 py-1.5 text-[9px] font-bold tracking-wide text-white shadow-lg transition-transform duration-500 group-hover:-translate-y-0.5"
                                    style={{ backgroundColor: accent }}
                                >
                                    <Play className="h-2.5 w-2.5 fill-current" />
                                    WATCH NOW
                                </span>
                                <span className="rounded border border-white/15 px-2 py-1.5 font-mono text-[8px] text-zinc-300">
                                    + MY LIST
                                </span>
                                <span className="ml-auto hidden items-center gap-1 font-mono text-[8px] text-zinc-600 sm:flex">
                                    TEXT SIZE
                                    <span className="text-zinc-500">A</span>
                                    <span className="text-zinc-400">A</span>
                                    <span className="text-[10px] text-zinc-200">A</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Poster row — first card carries the TV focus ring */}
                    <div className="flex h-14 shrink-0 gap-2">
                        {[0, 1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className="relative flex-1 overflow-hidden rounded-md border border-white/[0.07] bg-white/[0.04]"
                                style={i === 0 ? { boxShadow: `0 0 0 1.5px ${accent}, 0 0 18px ${accent}40` } : undefined}
                            >
                                {i === 0 && (
                                    <Play className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 text-zinc-300" />
                                )}
                                <div className="absolute inset-x-1.5 bottom-1.5 h-1 rounded-full bg-white/10" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // 2. EmailFlow Pro — drag-and-drop SFMC builder with an AI copy panel.
    if (key === 'emailflow') {
        return (
            <div className={shell}>
                <GridOverlay />
                <WindowChrome label="emailflow — sfmc" />
                <div className="relative z-10 flex flex-1 overflow-hidden">
                    {/* Blocks palette */}
                    <div className="flex w-16 shrink-0 flex-col gap-1.5 border-r border-white/[0.06] bg-white/[0.02] p-2">
                        <span className="font-mono text-[7px] tracking-[0.2em] text-zinc-600">BLOCKS</span>
                        <div className="flex h-7 flex-col items-center justify-center gap-0.5 rounded border border-white/[0.08] bg-white/[0.03] text-zinc-500">
                            <Type className="h-2.5 w-2.5" />
                            <span className="text-[6px] font-medium tracking-wider">TEXT</span>
                        </div>
                        <div className="flex h-7 flex-col items-center justify-center gap-0.5 rounded border border-white/[0.08] bg-white/[0.03] text-zinc-500">
                            <ImageIcon className="h-2.5 w-2.5" />
                            <span className="text-[6px] font-medium tracking-wider">IMAGE</span>
                        </div>
                        <div
                            className="flex h-7 flex-col items-center justify-center gap-0.5 rounded border bg-white/[0.03] font-semibold transition-transform duration-500 group-hover:-translate-y-0.5"
                            style={{ borderColor: accent, color: accent, boxShadow: `0 0 14px ${accent}33` }}
                        >
                            <MousePointer className="h-2.5 w-2.5" />
                            <span className="text-[6px] tracking-wider">BUTTON</span>
                        </div>
                    </div>

                    {/* Canvas — the email itself stays light, like a real client */}
                    <div className="relative flex flex-1 items-center justify-center p-3">
                        <Glow accent={accent} className="-bottom-16 left-1/2 h-44 w-44 -translate-x-1/2" />
                        <div className="relative w-36 overflow-hidden rounded-md bg-zinc-100 shadow-2xl">
                            <div className="flex h-4 items-center justify-center border-b border-zinc-200 bg-white">
                                <div className="h-1 w-12 rounded-full bg-zinc-300" />
                            </div>
                            <div className="flex h-11 items-center justify-center border-b border-zinc-200 bg-zinc-200/60">
                                <ImageIcon className="h-3.5 w-3.5 text-zinc-400" />
                            </div>
                            <div className="flex flex-col gap-1 p-2">
                                <div className="h-1.5 w-full rounded-full bg-zinc-300" />
                                <div className="h-1.5 w-5/6 rounded-full bg-zinc-200" />
                            </div>
                            <div className="relative flex justify-center px-2 pb-2.5">
                                <span
                                    className="rounded px-3.5 py-1 text-[7px] font-bold tracking-wide text-white"
                                    style={{ backgroundColor: accent }}
                                >
                                    CLAIM OFFER
                                </span>
                                <span
                                    className="absolute -top-1 right-1 rounded-sm px-1 py-px font-mono text-[6px] font-semibold text-black"
                                    style={{ backgroundColor: accent }}
                                >
                                    BUTTON
                                </span>
                                <span
                                    className="pointer-events-none absolute inset-x-4 -inset-y-0.5 rounded border border-dashed"
                                    style={{ borderColor: `${accent}88` }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* AI copy panel */}
                    <div className="flex w-[88px] shrink-0 flex-col gap-1.5 border-l border-white/[0.06] bg-white/[0.02] p-2">
                        <span className="flex items-center gap-1 font-mono text-[7px] tracking-[0.2em] text-zinc-500">
                            <Sparkles className="h-2 w-2" style={{ color: accent }} />
                            AI COPY
                        </span>
                        <div
                            className="rounded border bg-black/40 p-1.5 text-[7px] leading-snug text-zinc-300"
                            style={{ borderColor: `${accent}55` }}
                        >
                            &ldquo;Claim your offer today&rdquo;
                        </div>
                        <div className="rounded border border-white/[0.08] bg-black/20 p-1.5 text-[7px] leading-snug text-zinc-600">
                            &ldquo;Get my discount&rdquo;
                        </div>
                        <span
                            className="mt-auto rounded py-1 text-center text-[7px] font-bold tracking-widest text-white transition-transform duration-500 group-hover:-translate-y-0.5"
                            style={{ backgroundColor: accent }}
                        >
                            APPLY
                        </span>
                    </div>
                </div>
            </div>
        );
    }

    // 3. EnglishRoom — WebRTC classroom: video feeds + shared whiteboard.
    if (key === 'englishroom') {
        return (
            <div className={shell}>
                <GridOverlay />
                <WindowChrome label="englishroom.live" />
                <div className="relative z-10 flex flex-1 gap-2 p-2.5">
                    {/* Video column */}
                    <div className="flex w-[34%] shrink-0 flex-col gap-2">
                        <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden rounded-md border border-white/[0.08] bg-white/[0.03]">
                            <Video className="h-4 w-4 text-zinc-700" />
                            <span className="absolute left-1.5 top-1.5 flex items-center gap-1 font-mono text-[6px] font-semibold tracking-wider text-zinc-400">
                                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
                                TEACHER
                            </span>
                            <span className="absolute bottom-1.5 right-1.5 flex h-2.5 items-end gap-px">
                                <span className="w-0.5 rounded-full bg-zinc-500" style={{ height: '40%' }} />
                                <span className="w-0.5 rounded-full" style={{ height: '100%', backgroundColor: accent }} />
                                <span className="w-0.5 rounded-full bg-zinc-500" style={{ height: '60%' }} />
                            </span>
                        </div>
                        <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden rounded-md border border-white/[0.06] bg-white/[0.02]">
                            <Video className="h-4 w-4 text-zinc-800" />
                            <span className="absolute left-1.5 top-1.5 font-mono text-[6px] tracking-wider text-zinc-600">STUDENT</span>
                        </div>
                        <span className="text-center font-mono text-[6px] tracking-wider text-zinc-600">RTT 38MS · P2P</span>
                    </div>

                    {/* Whiteboard — stays light, like a real board */}
                    <div className="relative flex flex-1 flex-col overflow-hidden rounded-md bg-zinc-100 shadow-2xl">
                        <Glow accent={accent} className="-right-14 -top-14 h-40 w-40" />
                        <div className="flex items-center justify-between border-b border-zinc-200 bg-white px-2 py-1">
                            <div className="h-1 w-14 rounded-full bg-zinc-300" />
                            <div className="flex gap-1">
                                <span className="flex h-3 w-3 items-center justify-center rounded-sm border border-zinc-200 bg-white text-[6px] font-bold text-zinc-500">
                                    A
                                </span>
                                <span
                                    className="flex h-3 w-3 items-center justify-center rounded-sm border text-[6px]"
                                    style={{ borderColor: accent, color: accent }}
                                >
                                    <MousePointer className="h-1.5 w-1.5" />
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-center gap-1.5 p-2 text-center">
                            <span className="text-[9px] font-black tracking-[0.2em] text-zinc-700">VERB TO BE</span>
                            <div className="flex items-center gap-2">
                                <span className="rounded border border-zinc-300 bg-white px-1.5 py-0.5 font-mono text-[7px] text-zinc-600 shadow-sm">
                                    I
                                </span>
                                <ArrowRight className="h-2 w-2 text-zinc-400" />
                                <span
                                    className="rounded px-2 py-0.5 font-mono text-[7px] font-bold text-white shadow-sm transition-transform duration-500 group-hover:-translate-y-0.5"
                                    style={{ backgroundColor: accent }}
                                >
                                    AM
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="rounded border border-zinc-300 bg-white px-1.5 py-0.5 font-mono text-[7px] text-zinc-500 shadow-sm">
                                    YOU
                                </span>
                                <ArrowRight className="h-2 w-2 text-zinc-300" />
                                <span className="rounded border border-zinc-300 bg-white px-1.5 py-0.5 font-mono text-[7px] font-semibold text-zinc-600 shadow-sm">
                                    ARE
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // 4. Ranking Engine — live gamification leaderboard.
    if (key === 'ranking') {
        return (
            <div className={shell}>
                <GridOverlay />
                <WindowChrome label="ranking.engine" />
                <div className="relative z-10 flex flex-1 flex-col gap-2 p-3">
                    <Glow accent={accent} className="-top-10 left-1/2 h-40 w-56 -translate-x-1/2" />

                    {/* Header */}
                    <div className="flex shrink-0 items-center justify-between">
                        <span className="font-mono text-[8px] font-semibold tracking-[0.25em] text-zinc-300">LEADERBOARD</span>
                        <span className="flex items-center gap-1.5 font-mono text-[7px] tracking-wider text-zinc-500">
                            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
                            LIVE · 1,204 ONLINE
                        </span>
                    </div>

                    {/* Podium */}
                    <div className="flex flex-1 items-end justify-center gap-3 border-b border-white/[0.06] pb-2">
                        {/* 2nd */}
                        <div className="flex w-14 flex-col items-center gap-1">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-[6px] font-bold text-zinc-400">
                                JD
                            </span>
                            <span className="font-mono text-[6px] text-zinc-500">1,920 XP</span>
                            <div className="flex h-9 w-full items-start justify-center rounded-t border border-b-0 border-white/[0.08] bg-white/[0.04] pt-1">
                                <span className="font-mono text-[7px] font-bold text-zinc-500">2</span>
                            </div>
                        </div>
                        {/* 1st */}
                        <div className="flex w-16 flex-col items-center gap-1">
                            <span
                                className="flex h-6 w-6 items-center justify-center rounded-full border bg-black/40 text-[7px] font-bold transition-transform duration-500 group-hover:-translate-y-0.5"
                                style={{ borderColor: accent, color: accent, boxShadow: `0 0 16px ${accent}44` }}
                            >
                                ER
                            </span>
                            <span className="font-mono text-[6.5px] font-bold" style={{ color: accent }}>
                                2,480 XP
                            </span>
                            <div
                                className="flex h-14 w-full items-start justify-center rounded-t border border-b-0 pt-1"
                                style={{ borderColor: `${accent}88`, backgroundColor: `${accent}14` }}
                            >
                                <span className="font-mono text-[8px] font-black" style={{ color: accent }}>
                                    1
                                </span>
                            </div>
                        </div>
                        {/* 3rd */}
                        <div className="flex w-14 flex-col items-center gap-1">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-[6px] font-bold text-zinc-400">
                                MT
                            </span>
                            <span className="font-mono text-[6px] text-zinc-500">1,550 XP</span>
                            <div className="flex h-6 w-full items-start justify-center rounded-t border border-b-0 border-white/[0.08] bg-white/[0.04] pt-1">
                                <span className="font-mono text-[7px] font-bold text-zinc-500">3</span>
                            </div>
                        </div>
                    </div>

                    {/* Trailing ranks */}
                    <div className="flex shrink-0 flex-col gap-1">
                        {[
                            { rank: '4', initials: 'AM', name: 'Alex M.', xp: '1,240', delta: '2' },
                            { rank: '5', initials: 'ST', name: 'Sarah T.', xp: '1,150', delta: '1' },
                        ].map((row) => (
                            <div
                                key={row.rank}
                                className="flex items-center justify-between rounded border border-white/[0.06] bg-white/[0.02] px-2 py-1"
                            >
                                <span className="flex items-center gap-1.5">
                                    <span className="w-2 font-mono text-[7px] text-zinc-600">{row.rank}</span>
                                    <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[5px] font-bold text-zinc-500">
                                        {row.initials}
                                    </span>
                                    <span className="text-[7px] font-semibold text-zinc-400">{row.name}</span>
                                </span>
                                <span className="flex items-center gap-1.5 font-mono text-[6.5px] text-zinc-500">
                                    {row.xp} XP
                                    <span className="flex items-center gap-0.5" style={{ color: accent }}>
                                        <ArrowUp className="h-1.5 w-1.5" />
                                        {row.delta}
                                    </span>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // 5. Support Queue — triage desk with priorities and SLA.
    if (key === 'support') {
        return (
            <div className={shell}>
                <GridOverlay />
                <WindowChrome label="support — triage" />
                <div className="relative z-10 flex flex-1 overflow-hidden">
                    {/* Queue */}
                    <div className="flex w-24 shrink-0 flex-col gap-1.5 border-r border-white/[0.06] bg-white/[0.02] p-2">
                        <span className="flex items-center justify-between font-mono text-[7px] tracking-[0.2em] text-zinc-600">
                            QUEUE
                            <span className="text-zinc-500">7</span>
                        </span>
                        <div
                            className="flex flex-col gap-1 rounded border bg-black/40 p-1.5 transition-transform duration-500 group-hover:-translate-y-0.5"
                            style={{ borderColor: `${accent}77`, boxShadow: `0 0 14px ${accent}22` }}
                        >
                            <span className="flex items-center justify-between">
                                <span
                                    className="rounded-sm px-1 py-px font-mono text-[6px] font-bold text-black"
                                    style={{ backgroundColor: accent }}
                                >
                                    P1
                                </span>
                                <span className="font-mono text-[6px]" style={{ color: accent }}>
                                    0:42
                                </span>
                            </span>
                            <span className="text-[7px] font-semibold leading-tight text-zinc-300">Payment failed</span>
                        </div>
                        {[
                            { p: 'P2', t: 'Login issue' },
                            { p: 'P3', t: 'Billing doubt' },
                        ].map((item) => (
                            <div key={item.p} className="flex flex-col gap-1 rounded border border-white/[0.07] bg-white/[0.02] p-1.5">
                                <span className="flex items-center justify-between">
                                    <span className="rounded-sm border border-white/10 px-1 py-px font-mono text-[6px] text-zinc-500">
                                        {item.p}
                                    </span>
                                    <span className="font-mono text-[6px] text-zinc-600">12m</span>
                                </span>
                                <span className="text-[7px] leading-tight text-zinc-600">{item.t}</span>
                            </div>
                        ))}
                    </div>

                    {/* Thread */}
                    <div className="relative flex flex-1 flex-col">
                        <Glow accent={accent} className="-right-12 -top-12 h-40 w-40" />
                        <div className="flex h-6 shrink-0 items-center justify-between border-b border-white/[0.06] px-2.5">
                            <span className="flex items-center gap-1.5">
                                <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[5px] font-bold text-zinc-400">
                                    MC
                                </span>
                                <span className="text-[7.5px] font-semibold text-zinc-300">Maria C.</span>
                            </span>
                            <span
                                className="rounded-sm px-1.5 py-px font-mono text-[6px] font-bold tracking-widest text-black"
                                style={{ backgroundColor: accent }}
                            >
                                SLA 2:41
                            </span>
                        </div>
                        <div className="flex flex-1 flex-col justify-end gap-1.5 p-2.5">
                            <div className="max-w-[75%] self-start rounded-md rounded-tl-none border border-white/[0.07] bg-white/[0.03] p-1.5">
                                <Bar className="mb-1 h-1 w-20 bg-white/20" />
                                <Bar className="h-1 w-12" />
                            </div>
                            <div
                                className="max-w-[75%] self-end rounded-md rounded-tr-none border bg-black/40 p-1.5"
                                style={{ borderColor: `${accent}44` }}
                            >
                                <Bar className="mb-1 h-1 w-24 bg-white/20" />
                                <Bar className="h-1 w-14" />
                            </div>
                        </div>
                        <div className="mx-2.5 mb-2.5 flex h-6 shrink-0 items-center justify-between rounded border border-white/[0.08] bg-white/[0.02] px-2">
                            <Bar className="h-1 w-20" />
                            <Send className="h-2.5 w-2.5" style={{ color: accent }} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // 6. ChatAI Ecosystem — multimodal AI workspace with streaming output.
    if (key === 'chatai') {
        return (
            <div className={shell}>
                <GridOverlay />
                <WindowChrome label="ventus — workspace" />
                <div className="relative z-10 flex flex-1 overflow-hidden">
                    {/* Sessions */}
                    <div className="flex w-16 shrink-0 flex-col gap-1.5 border-r border-white/[0.06] bg-white/[0.02] p-2">
                        <span className="flex items-center justify-between font-mono text-[7px] tracking-[0.2em] text-zinc-600">
                            CHATS
                            <Plus className="h-2 w-2 text-zinc-500" />
                        </span>
                        <div className="flex h-4 items-center gap-1 rounded border border-white/[0.07] bg-white/[0.02] px-1">
                            <Bar className="h-0.5 w-8" />
                        </div>
                        <div
                            className="flex h-4 items-center gap-1 rounded border bg-black/40 px-1"
                            style={{ borderColor: `${accent}77` }}
                        >
                            <Sparkles className="h-1.5 w-1.5 shrink-0" style={{ color: accent }} />
                            <div className="h-0.5 flex-1 rounded-full" style={{ backgroundColor: `${accent}66` }} />
                        </div>
                        <div className="flex h-4 items-center gap-1 rounded border border-white/[0.05] bg-white/[0.01] px-1 opacity-60">
                            <Bar className="h-0.5 w-6" />
                        </div>
                    </div>

                    {/* Conversation */}
                    <div className="relative flex flex-1 flex-col p-2.5">
                        <Glow accent={accent} className="-left-12 bottom-0 h-44 w-44" />
                        <div className="flex shrink-0 items-center justify-between border-b border-white/[0.06] pb-1.5">
                            <span className="flex items-center gap-1 rounded border border-white/[0.08] bg-white/[0.02] px-1.5 py-0.5 font-mono text-[7px] text-zinc-300">
                                <Sparkles className="h-2 w-2" style={{ color: accent }} />
                                claude-sonnet-4.5
                            </span>
                            <Search className="h-2.5 w-2.5 text-zinc-600" />
                        </div>

                        <div className="flex flex-1 flex-col justify-end gap-1.5 py-2">
                            <div className="max-w-[70%] self-end rounded-md rounded-tr-none border border-white/[0.08] bg-white/[0.04] p-1.5">
                                <Bar className="h-1 w-24 bg-white/20" />
                            </div>
                            <div className="max-w-[85%] self-start rounded-md rounded-tl-none border border-white/[0.07] bg-white/[0.02] p-1.5">
                                <span className="mb-1 flex items-center gap-1 font-mono text-[6px] tracking-widest" style={{ color: accent }}>
                                    <Sparkles className="h-1.5 w-1.5" />
                                    VENTUS
                                </span>
                                <Bar className="mb-1.5 h-1 w-28 bg-white/15" />
                                {/* Streaming code block */}
                                <div className="flex flex-col gap-1 rounded border border-white/[0.07] bg-black/60 p-1.5 font-mono">
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-[6px] text-zinc-700">01</span>
                                        <div className="h-1 w-16 rounded-full" style={{ backgroundColor: `${accent}99` }} />
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-[6px] text-zinc-700">02</span>
                                        <Bar className="h-1 w-24 bg-white/20" />
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-[6px] text-zinc-700">03</span>
                                        <Bar className="h-1 w-10" />
                                        <span className="h-2 w-1" style={{ backgroundColor: accent }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex h-6 shrink-0 items-center justify-between rounded border border-white/[0.08] bg-white/[0.02] px-2">
                            <Bar className="h-1 w-24" />
                            <span
                                className="flex h-4 w-4 items-center justify-center rounded-full transition-transform duration-500 group-hover:-translate-y-0.5"
                                style={{ backgroundColor: accent }}
                            >
                                <Send className="h-2 w-2 text-black" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // 7. Portfolio — this site, in miniature.
    if (key === 'portfolio') {
        return (
            <div className={shell}>
                <GridOverlay />
                <WindowChrome label="eeliasricardoo.com" />
                <div className="relative z-10 flex flex-1 flex-col">
                    <Glow accent={accent} className="-top-10 left-1/2 h-44 w-64 -translate-x-1/2" />
                    <div className="flex h-7 shrink-0 items-center justify-between border-b border-white/[0.06] px-3">
                        <span className="flex items-center gap-1 font-mono text-[9px] font-bold text-zinc-200">
                            <Terminal className="h-2.5 w-2.5" style={{ color: accent }} />
                            ER_
                        </span>
                        <div className="flex gap-2">
                            <Bar className="h-1 w-6" />
                            <Bar className="h-1 w-6" />
                            <Bar className="h-1 w-6" />
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-center gap-2 p-3">
                        <span className="font-mono text-[7px] tracking-[0.3em] text-zinc-500">// SENIOR UX ENGINEER</span>
                        <h3 className="text-center text-xs font-extrabold leading-tight text-zinc-100">
                            Human intention,
                            <br />
                            <span style={{ color: accent }}>amplified by AI.</span>
                        </h3>
                        <div className="mt-1 flex gap-1.5">
                            <span
                                className="flex items-center gap-1 rounded px-2 py-1 text-[7px] font-bold text-black transition-transform duration-500 group-hover:-translate-y-0.5"
                                style={{ backgroundColor: accent }}
                            >
                                VIEW WORK
                                <ArrowRight className="h-1.5 w-1.5" />
                            </span>
                            <span className="rounded border border-white/15 px-2 py-1 font-mono text-[7px] text-zinc-400">CONTACT</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Fallback — generic product frame.
    return (
        <div className={shell}>
            <GridOverlay />
            <WindowChrome label="preview" />
            <div className="relative z-10 flex flex-1 flex-col justify-between p-3">
                <Glow accent={accent} className="-right-12 -top-12 h-40 w-40" />
                <div className="flex items-center justify-between">
                    <div className="h-2 w-16 rounded-full" style={{ backgroundColor: `${accent}99` }} />
                    <Bar className="h-1.5 w-10" />
                </div>
                <div className="flex flex-col gap-1.5">
                    <Bar className="h-2.5 w-3/4 bg-white/20" />
                    <Bar className="h-1.5 w-full" />
                    <Bar className="h-1.5 w-5/6" />
                </div>
                <div className="flex items-center justify-between border-t border-white/[0.06] pt-2">
                    <Bar className="h-1 w-12" />
                    <Star className="h-3 w-3" style={{ color: accent }} />
                </div>
            </div>
        </div>
    );
}
