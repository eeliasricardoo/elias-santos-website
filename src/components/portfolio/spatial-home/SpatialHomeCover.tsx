'use client';

import { Tv, Sparkles, Hand } from 'lucide-react';

/**
 * Purpose-built project card cover for Spatial Home.
 * Styled to match the landing-style covers of the portfolio:
 * bold typography, deep brand gradient, and an AR visor window
 * with contextual controls floating in 3D space.
 */
export function SpatialHomeCover() {
    return (
        <div
            className="absolute inset-0 flex flex-col text-white select-none overflow-hidden"
            style={{
                background: 'linear-gradient(155deg, #072534 0%, #081724 50%, #030a10 100%)',
            }}
        >
            {/* Ambient AR glow */}
            <div
                className="pointer-events-none absolute -right-[10%] -top-[20%] h-[70%] w-[50%] rounded-full opacity-30 blur-3xl"
                style={{ background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)' }}
                aria-hidden="true"
            />

            {/* Top Bar */}
            <div className="relative z-10 flex shrink-0 items-center justify-between px-[5%] pt-[3.5%]">
                <div className="flex items-center gap-2">
                    <span className="font-mono text-[9px] font-bold tracking-[0.2em] text-cyan-300">
                        SPATIAL HOME
                    </span>
                    <span className="hidden sm:inline font-mono text-[8px] text-white/40">
                        // AR-OS CONCEPT
                    </span>
                </div>
                <div className="flex items-center gap-2.5">
                    <span className="inline-flex items-center gap-1 font-mono text-[8px] text-cyan-200/70">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        AR GLASSES
                    </span>
                    <span className="rounded-full bg-white px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-black">
                        Open
                    </span>
                </div>
            </div>

            {/* Content Body */}
            <div className="relative z-10 flex min-h-0 flex-1 items-center gap-[4%] pb-[4%] pl-[5%]">
                {/* Left column: Typography pitch */}
                <div className="flex w-[38%] shrink-0 flex-col items-start gap-2">
                    <p className="font-pixel text-[clamp(14px,4.2cqw,30px)] font-bold leading-[1.08] text-white">
                        Your home
                        <br />
                        becomes the
                        <br />
                        interface.
                    </p>
                    <p className="text-[clamp(8px,1.6cqw,11.5px)] leading-snug text-white/70">
                        Gesture-controlled AR for the connected home. No remotes, no screens in hand.
                    </p>
                    <div className="mt-1 inline-flex items-center gap-1.5 rounded border border-cyan-400/30 bg-cyan-950/50 px-2 py-1 text-[8px] font-mono text-cyan-200">
                        <Hand className="h-2.5 w-2.5 text-cyan-300" aria-hidden="true" />
                        <span>Two-step gesture confirmation</span>
                    </div>
                </div>

                {/* Right column: Spatial AR Visor window */}
                <div className="relative h-[84%] min-w-0 flex-1">
                    <div className="relative h-full w-full overflow-hidden rounded-l-lg border border-r-0 border-cyan-500/30 bg-[#060b11] shadow-2xl">
                        {/* AR Visor Status Bar */}
                        <div className="flex items-center justify-between border-b border-white/10 bg-black/40 px-2.5 py-1.5 text-[8px] font-mono text-cyan-300/80 backdrop-blur-sm">
                            <div className="flex items-center gap-1.5">
                                <span className="h-1 w-1 rounded-full bg-cyan-400" />
                                <span>FOV 72° · ROOM SCAN ACTIVE</span>
                            </div>
                            <span className="text-[7px] text-white/40">LIVING ROOM</span>
                        </div>

                        {/* Room Screenshot */}
                        <div className="relative h-[calc(100%-25px)] w-full">
                            <img
                                src="/portfolios/spatial-home/spatial-home-menu.webp"
                                alt="Spatial Home AR interface"
                                loading="lazy"
                                decoding="async"
                                className="block h-full w-full object-cover object-left-top"
                            />

                            {/* Floating Glassmorphism Spatial Pill over the room */}
                            <div className="absolute bottom-[10%] left-[8%] flex items-center gap-2 rounded-lg border border-white/25 bg-black/60 px-2.5 py-1.5 shadow-xl backdrop-blur-md">
                                <div className="grid h-5 w-5 place-items-center rounded bg-cyan-500/20 text-cyan-300">
                                    <Tv className="h-3 w-3" aria-hidden="true" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[8px] font-bold text-white">Living Room TV</span>
                                    <span className="font-mono text-[7px] text-cyan-300">Target identified · Ready</span>
                                </div>
                                <span className="ml-1 rounded bg-white px-1.5 py-0.5 text-[7px] font-bold text-black">
                                    Tap
                                </span>
                            </div>

                            {/* Interactive Spatial Reticle Dot */}
                            <div
                                className="absolute left-[54%] top-[42%] pointer-events-none -translate-x-1/2 -translate-y-1/2"
                                aria-hidden="true"
                            >
                                <div className="relative flex h-5 w-5 items-center justify-center">
                                    <span className="absolute h-full w-full animate-ping rounded-full bg-cyan-400/40" />
                                    <span className="h-2 w-2 rounded-full border border-white bg-cyan-400 shadow-sm" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
