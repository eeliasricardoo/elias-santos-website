'use client';

import { CheckCircle2, Wrench } from 'lucide-react';

/**
 * Purpose-built project card cover for Stanley Black & Decker.
 * Matches the landing-style covers:
 * bold typography, deep industrial brand gradient, and a mobile
 * phone window showing the real Morning Setup flow.
 */
export function StanleyCover() {
    return (
        <div
            className="absolute inset-0 flex flex-col text-white select-none overflow-hidden"
            style={{
                background: 'linear-gradient(155deg, #1c1806 0%, #121008 50%, #080703 100%)',
            }}
        >
            {/* Ambient Stanley Yellow industrial glow */}
            <div
                className="pointer-events-none absolute -right-[10%] -top-[20%] h-[70%] w-[50%] rounded-full opacity-25 blur-3xl"
                style={{ background: 'radial-gradient(circle, #FFC106 0%, transparent 70%)' }}
                aria-hidden="true"
            />

            {/* Top Bar */}
            <div className="relative z-10 flex shrink-0 items-center justify-between px-[5%] pt-[3.5%]">
                <div className="flex items-center gap-2">
                    <span className="font-mono text-[9px] font-bold tracking-[0.2em] text-[#FFC106]">
                        STANLEY BLACK &amp; DECKER
                    </span>
                    <span className="hidden sm:inline font-mono text-[8px] text-white/40">
                        // JOBSITE OS
                    </span>
                </div>
                <div className="flex items-center gap-2.5">
                    <span className="inline-flex items-center gap-1 font-mono text-[8px] text-[#FFC106]/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                        CREW ACTIVE
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
                        Jobsite tools,
                        <br />
                        ready before
                        <br />
                        work begins.
                    </p>
                    <p className="text-[clamp(8px,1.6cqw,11.5px)] leading-snug text-white/70">
                        A centralized Morning Setup flow for professional crew leaders.
                    </p>
                    <div className="mt-1 inline-flex items-center gap-1.5 rounded border border-[#FFC106]/30 bg-[#FFC106]/10 px-2 py-1 text-[8px] font-mono text-[#FFC106]">
                        <Wrench className="h-2.5 w-2.5 text-[#FFC106]" aria-hidden="true" />
                        <span>60s tool &amp; battery readiness</span>
                    </div>
                </div>

                {/* Right column: Mobile prototype frame running off edge */}
                <div className="relative h-[84%] min-w-0 flex-1">
                    <div className="relative h-full w-full overflow-hidden rounded-l-lg border border-r-0 border-[#FFC106]/30 bg-[#0d0f12] shadow-2xl">
                        {/* Device Header */}
                        <div className="flex items-center justify-between border-b border-white/10 bg-black/60 px-2.5 py-1 text-[8px] font-mono text-[#FFC106]/90 backdrop-blur-sm">
                            <div className="flex items-center gap-1.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#FFC106]" />
                                <span>6:30 AM · MORNING SETUP</span>
                            </div>
                            <span className="text-[7px] text-white/40">CREW 04 · RESIDENTIAL</span>
                        </div>

                        {/* Mobile Screen Screenshot */}
                        <div className="relative h-[calc(100%-25px)] w-full">
                            <img
                                src="/portfolios/stanley-black-decker/prototype-screen-1.webp"
                                alt="Stanley Black and Decker mobile app interface"
                                loading="lazy"
                                decoding="async"
                                className="block h-full w-full object-cover object-left-top"
                            />

                            {/* Floating Readiness Pill */}
                            <div className="absolute bottom-[10%] left-[8%] flex items-center gap-2 rounded-lg border border-white/20 bg-black/75 px-2.5 py-1.5 shadow-xl backdrop-blur-md">
                                <div className="grid h-5 w-5 place-items-center rounded bg-[#FFC106]/20 text-[#FFC106]">
                                    <CheckCircle2 className="h-3 w-3 text-green-400" aria-hidden="true" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[8px] font-bold text-white">Morning Setup</span>
                                    <span className="font-mono text-[7px] text-green-400">All tools &amp; batteries verified</span>
                                </div>
                                <span className="ml-1 rounded bg-[#FFC106] px-1.5 py-0.5 text-[7px] font-bold text-black">
                                    Ready
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
