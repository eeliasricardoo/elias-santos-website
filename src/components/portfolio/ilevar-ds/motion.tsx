'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Pause, Play } from 'lucide-react';
import { CaseStudySection } from '../ui/CaseStudySection';
import { ZoomImage } from '../ui/ZoomImage';

const IMG = '/portfolios/ilevar';


/* ------------------------------------------------------------------ */
/* Shared: a timer that steps through n items, pausable, off in view   */
/* ------------------------------------------------------------------ */

function useAutoStep(count: number, ms: number) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { margin: '-20% 0px -20% 0px' });
    const reduce = useReducedMotion();
    const [i, setI] = useState(0);
    const [paused, setPaused] = useState(false);
    const [hover, setHover] = useState(false);
    const running = inView && !paused && !hover && !reduce;

    useEffect(() => {
        if (!running) return;
        const t = window.setTimeout(() => setI((n) => (n + 1) % count), ms);
        return () => window.clearTimeout(t);
    }, [running, i, count, ms]);

    const go = (n: number) => {
        setI(n);
        setPaused(true);
    };

    return {
        ref,
        i,
        go,
        running,
        paused,
        reduce,
        toggle: () => setPaused((p) => !p),
        hoverProps: {
            onMouseEnter: () => setHover(true),
            onMouseLeave: () => setHover(false),
            onFocus: () => setHover(true),
            onBlur: () => setHover(false),
        },
    };
}

function Progress({ running, ms, k }: { running: boolean; ms: number; k: string | number }) {
    return (
        <span className="relative block h-0.5 w-full overflow-hidden rounded-full bg-black/10">
            {running && (
                <motion.span
                    key={k}
                    className="absolute inset-y-0 left-0 block bg-[#0563A8]"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: ms / 1000, ease: 'linear' }}
                />
            )}
        </span>
    );
}

function PlayToggle({ paused, onClick, dark = false }: { paused: boolean; onClick: () => void; dark?: boolean }) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={paused ? 'Play animation' : 'Pause animation'}
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0d99ff] ${
                dark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-black/5 text-[#1b1d26] hover:bg-black/10'
            }`}
        >
            {paused ? <Play className="h-3.5 w-3.5" aria-hidden="true" /> : <Pause className="h-3.5 w-3.5" aria-hidden="true" />}
        </button>
    );
}

/* ------------------------------------------------------------------ */
/* Part dividers: the case in three acts                               */
/* ------------------------------------------------------------------ */

export function PartDivider({ part, title, text }: { part: string; title: string; text: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -15% 0px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative -mx-4 overflow-hidden rounded-2xl bg-[#0563A8] px-6 py-12 text-white md:-mx-10 md:px-12 md:py-16 lg:-mx-16"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.12]"
                style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '18px 18px' }}
            />
            <p className="relative font-pixel-label text-[11px] text-white/70">{part}</p>
            <p className="relative mt-3 max-w-3xl! text-3xl font-semibold leading-tight text-white md:text-5xl">{title}</p>
            <p className="relative mt-4 max-w-2xl! text-lg leading-relaxed text-white/80">{text}</p>
        </motion.div>
    );
}

/* ------------------------------------------------------------------ */
/* Contents: three parts, every chapter one click away                 */
/* ------------------------------------------------------------------ */

const PARTS = [
    {
        part: 'Part I',
        title: 'The system',
        chapters: ['Problem', 'How I worked', 'In motion', 'The system', 'Figma canvas', 'Principle 1', 'Principle 2', 'Principle 3', 'Components', 'Accessibility', 'The live room'],
    },
    { part: 'Part II', title: 'Design for the AI era', chapters: ['AI features', 'When AI is wrong', 'AI as a user', 'Design × AI'] },
    { part: 'Part III', title: 'Results', chapters: ['Impact', 'What is open', 'References'] },
];

export function ContentsSection() {
    const jump = (eyebrow: string) => {
        const el = document.querySelector<HTMLElement>(`[data-case-nav="${eyebrow}"]`);
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    let n = 0;
    return (
        <nav aria-label="Contents of this case" className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {PARTS.map((p) => (
                <div key={p.part} className="flex flex-col gap-3 rounded-xl border border-[var(--px-line)] bg-[var(--px-panel)] p-5">
                    <p className="font-pixel-label text-[11px] text-[var(--px-dim)]">{p.part}</p>
                    <p className="max-w-none! text-lg font-medium text-[var(--px-ink)]">{p.title}</p>
                    <ol className="flex flex-col gap-0.5">
                        {p.chapters.map((c) => {
                            n += 1;
                            const num = String(n).padStart(2, '0');
                            return (
                                <li key={c} className="max-w-none!">
                                    <button
                                        type="button"
                                        onClick={() => jump(c)}
                                        className="flex w-full items-baseline gap-3 rounded-md px-2 py-1 text-left text-sm text-[var(--px-muted)] transition-colors hover:bg-black/5 hover:text-[var(--px-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0563A8]"
                                    >
                                        <span className="font-mono text-xs text-[var(--px-dim)]">{num}</span>
                                        {c}
                                    </button>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            ))}
        </nav>
    );
}

/* ------------------------------------------------------------------ */
/* Showreel: the system in motion, real recordings                     */
/* ------------------------------------------------------------------ */

const REEL = [
    {
        id: 'landing-new',
        url: 'www.ilevar.com',
        title: 'Landing page · now',
        text: 'Rebuilt in November 2026 on the design system’s tokens, from the approved Figma design: real usage numbers, playable activities, public prices.',
    },
    {
        id: 'hero',
        url: 'ilevar.com · previous version',
        title: 'Landing page · before',
        text: 'The previous landing, with its pixel mascot: the brand blue, the yellow call to action and the type the whole product shares.',
    },
    {
        id: 'ai-builder',
        url: 'ilevar.com · AI lesson builder',
        title: 'AI lesson builder',
        text: 'A lesson assembling itself from one request. Each activity arrives with its type badge and duration, as in the app.',
    },
    {
        id: 'ai-homework',
        url: 'ilevar.com · AI homework',
        title: 'AI homework on the phone',
        text: 'One exercise per screen, instant feedback and a streak, on the phone where students actually practise.',
    },
];

function Reel() {
    const [active, setActive] = useState(0);
    const videos = useRef<(HTMLVideoElement | null)[]>([]);
    const reduce = useReducedMotion();
    const r = REEL[active];

    useEffect(() => {
        videos.current.forEach((v, n) => {
            if (!v) return;
            if (n === active && !reduce) {
                v.currentTime = 0;
                void v.play().catch(() => {});
            } else v.pause();
        });
    }, [active, reduce]);

    return (
        <figure className="-mx-4 flex flex-col gap-4 md:-mx-10 lg:-mx-16">
            <div className="overflow-hidden rounded-2xl border border-[var(--px-line)] bg-[#0f1115] p-2 shadow-[0_30px_80px_-30px_rgba(5,99,168,0.55)] sm:p-3">
                <div className="flex items-center gap-3 px-2 pb-2.5 pt-1">
                    <span className="flex gap-1.5" aria-hidden="true">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    </span>
                    <span className="mx-auto truncate rounded-md bg-white/10 px-3 py-1 text-xs text-white/70">{r.url}</span>
                    <span className="w-12" aria-hidden="true" />
                </div>
                <div className="relative overflow-hidden rounded-lg bg-white" style={{ aspectRatio: '16 / 9' }}>
                    {REEL.map((v, n) => (
                        <video
                            key={v.id}
                            ref={(el) => {
                                videos.current[n] = el;
                            }}
                            src={`${IMG}/${v.id}.mp4`}
                            poster={`${IMG}/${v.id}-poster.webp`}
                            muted
                            playsInline
                            preload={n === 0 ? 'auto' : 'metadata'}
                            onEnded={() => setActive((a) => (a + 1) % REEL.length)}
                            aria-label={`Screen recording: ${v.title}`}
                            className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-500 ${n === active ? 'opacity-100' : 'opacity-0'}`}
                        />
                    ))}
                </div>
            </div>
            <div role="tablist" aria-label="Recordings" className="grid grid-cols-1 gap-2 px-4 sm:grid-cols-2 md:px-10 lg:grid-cols-4 lg:px-16">
                {REEL.map((v, n) => {
                    const on = n === active;
                    return (
                        <button
                            key={v.id}
                            type="button"
                            role="tab"
                            aria-selected={on}
                            onClick={() => setActive(n)}
                            className={`flex flex-col gap-1.5 rounded-xl border p-4 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0563A8] ${
                                on ? 'border-[#0563A8] bg-[#0563A8]/5' : 'border-[var(--px-line)] hover:bg-black/[0.03]'
                            }`}
                        >
                            <span className="flex items-center gap-2 text-sm font-medium text-[var(--px-ink)]">
                                <span className="font-mono text-xs text-[var(--px-dim)]">{String(n + 1).padStart(2, '0')}</span>
                                {v.title}
                            </span>
                            <span className="text-sm leading-relaxed text-[var(--px-muted)]">{v.text}</span>
                        </button>
                    );
                })}
            </div>
        </figure>
    );
}

export function ShowreelSection() {
    return (
        <CaseStudySection eyebrow="In motion" index={3} title="The system, moving">
            <p>
                Before the details, the result. These are screen recordings of ilevar’s public site: the current landing and the one before it,
                with two of its feature demos. The new landing replaced a generated page in November 2026 and was built with the design
                system’s tokens from an approved Figma design, which is the goal of the system in one example: one identity from the first
                scroll to the live classroom.
            </p>
            <Reel />
        </CaseStudySection>
    );
}

/* ------------------------------------------------------------------ */
/* Figma canvas: an automatic fly-through of one real page             */
/* ------------------------------------------------------------------ */

// Node frames from page "09 · Student dashboard" (section 175:1173, 4797 × 6652).
const PAGE_W = 4797;
const PAGE_H = 6652;
const STOPS = [
    { name: 'The whole page', detail: '09 · Student dashboard: every component of the student home, with all its states', x: 0, y: 0, w: PAGE_W, h: PAGE_H },
    { name: 'Calendar', detail: 'Desktop and mobile, plus CalendarDay in 4 states: default, outside the month, today, selected', x: 100, y: 120, w: 700, h: 1120 },
    { name: 'TodayPanel', detail: 'Empty and with a session, each drawn for desktop and mobile', x: 809, y: 140, w: 736, h: 1624 },
    { name: 'SessionRow', detail: '6 statuses: completed, cancelled, confirmed, pending, reschedule requested, no show', x: 1625, y: 140, w: 608, h: 712 },
    { name: 'Astro, the mascot', detail: 'A component with a Pose property: laptop, celebrating, floating, questioning', x: 100, y: 1880, w: 864, h: 300 },
    { name: 'NextLessonCard', detail: '4 states that follow the clock, × 2 breakpoints', x: 100, y: 2232, w: 1262, h: 986 },
    { name: 'CefrProgressCard', detail: '5 levels × 2 breakpoints, all coloured from the one level map', x: 100, y: 3278, w: 1202, h: 1812 },
    { name: 'Streak and homework', detail: 'DayStreakCard and PendingHomeworkCard: to do, in progress, overdue', x: 100, y: 5150, w: 1202, h: 1362 },
];
const STOP_MS = 3600;
const VIEW_RATIO = 0.6; // height / width of the viewport
const IMG_RATIO = PAGE_H / PAGE_W;

function stopTransform(s: (typeof STOPS)[number]) {
    const fx = s.x / PAGE_W;
    const fy = s.y / PAGE_H;
    const fw = s.w / PAGE_W;
    const fh = s.h / PAGE_H;
    const k = Math.min(1 / fw, VIEW_RATIO / (fh * IMG_RATIO)) * 0.92;
    const tx = 50 - k * 100 * (fx + fw / 2);
    const ty = (VIEW_RATIO * 100) / 2 - k * 100 * IMG_RATIO * (fy + fh / 2);
    return `translate(${tx}cqw, ${ty}cqw) scale(${k})`;
}

function CanvasFlight() {
    const a = useAutoStep(STOPS.length, STOP_MS);
    const s = STOPS[a.i];
    return (
        <figure className="-mx-4 flex flex-col gap-3 md:-mx-10 lg:-mx-16" ref={a.ref}>
            <div className="overflow-hidden rounded-xl border border-[#2c2c2c] bg-[#1e1e1e] shadow-[0_24px_60px_-24px_rgba(16,18,22,0.45)]" {...a.hoverProps}>
                <div className="flex items-center gap-3 border-b border-white/10 px-4 py-2.5">
                    <span className="truncate text-xs text-white/70">
                        Ilevar — Design system <span className="text-white/35">/</span> <span className="text-white">09 · Student dashboard</span>
                    </span>
                    <span className="ml-auto font-mono text-[11px] text-white/40">
                        {String(a.i + 1).padStart(2, '0')}/{String(STOPS.length).padStart(2, '0')}
                    </span>
                    <PlayToggle dark paused={a.paused || !!a.reduce} onClick={a.toggle} />
                </div>
                <div className="relative w-full overflow-hidden bg-[#e9ecf0]" style={{ aspectRatio: `1 / ${VIEW_RATIO}`, containerType: 'inline-size' }}>
                    <img
                        src={`${IMG}/fx-canvas-student.webp`}
                        alt="A whole page of the Figma file, 09 · Student dashboard: calendar, today panel, session rows, the mascot, next lesson cards, level progress cards, streak and homework cards, each with all its states and breakpoints."
                        className="absolute left-0 top-0 block w-full max-w-none origin-top-left will-change-transform"
                        style={{ transform: stopTransform(s), transition: a.reduce ? 'none' : 'transform 1.4s cubic-bezier(0.65, 0, 0.35, 1)' }}
                    />
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={s.name}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.35, delay: 0.5 }}
                            className="absolute bottom-2 left-2 right-2 max-w-md rounded-lg bg-[#1e1e1e]/90 px-3 py-2 sm:right-auto sm:px-4 sm:py-3 text-white shadow-lg backdrop-blur sm:bottom-5 sm:left-5"
                        >
                            <p className="max-w-none! text-sm font-medium text-white">{s.name}</p>
                            <p className="mt-0.5 hidden sm:block max-w-none! text-xs leading-relaxed text-white/70">{s.detail}</p>
                        </motion.div>
                    </AnimatePresence>
                </div>
                <div className="flex gap-1 overflow-x-auto border-t border-white/10 p-2">
                    {STOPS.map((st, n) => (
                        <button
                            key={st.name}
                            type="button"
                            onClick={() => a.go(n)}
                            aria-pressed={n === a.i}
                            className={`flex shrink-0 flex-col gap-1.5 rounded-md px-2.5 py-1.5 text-left text-xs transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0d99ff] ${
                                n === a.i ? 'bg-[#0d99ff]/20 text-white' : 'text-white/55 hover:bg-white/5 hover:text-white'
                            }`}
                        >
                            {st.name}
                            <span className="block h-0.5 w-full overflow-hidden rounded-full bg-white/10">
                                {n === a.i && a.running && (
                                    <motion.span
                                        key={a.i}
                                        className="block h-full bg-[#0d99ff]"
                                        initial={{ width: '0%' }}
                                        animate={{ width: '100%' }}
                                        transition={{ duration: STOP_MS / 1000, ease: 'linear' }}
                                    />
                                )}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
            <figcaption className="px-4 text-sm leading-relaxed text-[var(--px-dim)] md:px-10 lg:px-16">
                A fly-through of one real page of the file, exported from Figma. It pauses when you hover it; pick a stop to jump there.
            </figcaption>
        </figure>
    );
}

function RoomMarquee() {
    const reduce = useReducedMotion();
    return (
        <figure className="-mx-4 flex flex-col gap-3 md:-mx-10 lg:-mx-16">
            <div className="group relative overflow-hidden rounded-xl border border-[var(--px-line)] bg-[#eef0f3]">
                <div className="flex w-max" style={{ animation: reduce ? 'none' : 'ilevar-marquee 70s linear infinite' }}>
                    {[0, 1].map((k) => (
                        <img
                            key={k}
                            src={`${IMG}/fx-canvas-room.webp`}
                            alt={
                                k === 0
                                    ? 'The Room activities page of the Figma file: quiz, fill in the blank, writing, flashcards, drilling, matching, listening and interactive video, each in a teacher and a student version, plus video, image, PDF and end screen.'
                                    : ''
                            }
                            aria-hidden={k === 1 ? true : undefined}
                            className="block h-64 w-auto max-w-none sm:h-80 md:h-96"
                        />
                    ))}
                </div>
                <style>{`@keyframes ilevar-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } } .group:hover > div { animation-play-state: paused }`}</style>
            </div>
            <figcaption className="px-4 text-sm leading-relaxed text-[var(--px-dim)] md:px-10 lg:px-16">
                Page 20 · Room activities, scrolling past: 12 activity types, the interactive ones drawn once for the teacher and once for the
                student. Hover to stop it.
            </figcaption>
        </figure>
    );
}

const FILE_GROUPS = [
    { name: 'Library', pages: ['00 Index', '01 Foundations', '02 Icons', '03 Atoms', '04 Molecules', '05 Organisms'] },
    { name: 'Shared', pages: ['06 Auth and account', '07 Public site', '08 Shared patterns'] },
    { name: 'Student', pages: ['09 Dashboard', '10 Homework', '11 Bookings and teachers', '12 Messages and notebook'] },
    { name: 'Teacher', pages: ['13 Dashboard', '14 Classes', '15 Students', '16 Lessons and availability', '17 Dialogs and flows'] },
    { name: 'School owner', pages: ['18 Settings and setup', '19 Manage'] },
    { name: 'Live room', pages: ['20 Activities', '21 Lesson plan', '22 Video and shell', '23 Chat, students and lobby'] },
    { name: 'Admin', pages: ['24 Overview', '25 Tenants and users', '26 System', '27 Data parts and navigation'] },
    { name: 'Quarantine', pages: ['90 Deprecated · no code in src'] },
];

function FileMap() {
    return (
        <figure className="flex flex-col gap-3">
            <ol className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {FILE_GROUPS.map((g, gi) => (
                    <motion.li
                        key={g.name}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: gi * 0.06 }}
                        className={`flex max-w-none! flex-col gap-2 rounded-xl border p-4 ${
                            g.name === 'Quarantine' ? 'border-dashed border-[var(--px-line)] bg-transparent' : 'border-[var(--px-line)] bg-[var(--px-panel)]'
                        }`}
                    >
                        <p className="max-w-none! text-sm font-medium text-[var(--px-ink)]">
                            {g.name} <span className="font-mono text-xs text-[var(--px-dim)]">· {g.pages.length}</span>
                        </p>
                        <ul className="flex flex-col gap-0.5">
                            {g.pages.map((p) => (
                                <li key={p} className="max-w-none! text-xs leading-relaxed text-[var(--px-muted)]">
                                    {p}
                                </li>
                            ))}
                        </ul>
                    </motion.li>
                ))}
            </ol>
            <figcaption className="text-sm leading-relaxed text-[var(--px-dim)]">
                All 30 pages of the file, grouped the way people look for them: the library first, then screens by who uses them.
            </figcaption>
        </figure>
    );
}

export function CanvasSection() {
    return (
        <CaseStudySection eyebrow="Figma canvas" index={5} title="Inside the file: organised by who uses it">
            <p>
                After the library, every page of the file belongs to a person: the student, the teacher, the school owner, the live room or the
                admin. A designer, a developer or an agent looking for “the student’s homework card” knows which page to open before searching.
            </p>
            <FileMap />
            <CanvasFlight />
            <RoomMarquee />
        </CaseStudySection>
    );
}

/* ------------------------------------------------------------------ */
/* Components that follow the clock                                    */
/* ------------------------------------------------------------------ */

const LIFECYCLE = [
    { time: '09:45', label: 'Scheduled', why: 'The button is there but disabled, and it says when it opens: “Opens 10 min before the lesson”. Nobody wonders why it does not work.' },
    { time: '09:52', label: 'Starts soon', why: 'Amber badge with a countdown, and the button turns on. The one primary action on the screen is now “Join now”.' },
    { time: '10:03', label: 'Live now', why: 'Green badge with a dot and a green border: the class has started. Same button, more urgency, no new pattern.' },
    { time: '11:00', label: 'Nothing next', why: 'No empty box. The card says there is no lesson and offers the next step: “Book a lesson”.' },
];
const LIFE_MS = 2800;

function Lifecycle() {
    const a = useAutoStep(LIFECYCLE.length, LIFE_MS);
    const s = LIFECYCLE[a.i];
    return (
        <figure className="-mx-4 flex flex-col gap-3 md:-mx-10 lg:-mx-16" ref={a.ref}>
            <div className="grid grid-cols-1 overflow-hidden rounded-xl border border-[var(--px-line)] bg-[#eef0f3] md:grid-cols-[1fr_17rem]" {...a.hoverProps}>
                <div className="flex flex-col justify-center gap-6 p-5 sm:p-10">
                    <div className="flex items-center gap-4">
                        <span className="font-mono text-4xl font-semibold tabular-nums text-[#1b1d26] sm:text-5xl" aria-live="polite">
                            {s.time}
                        </span>
                        <span className="text-sm text-[#545866]">the student opens the dashboard</span>
                    </div>
                    <div className="relative">
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.img
                                key={a.i}
                                src={`${IMG}/fx-nl${a.i}.webp`}
                                alt={`NextLessonCard, state ${s.label}`}
                                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                                transition={{ duration: 0.35 }}
                                className="block h-auto w-full max-w-2xl"
                            />
                        </AnimatePresence>
                    </div>
                </div>
                <div className="flex flex-col border-t border-black/5 bg-white md:border-l md:border-t-0">
                    <div className="flex items-center justify-between px-5 pb-2 pt-4">
                        <p className="text-[11px] font-medium uppercase tracking-wider text-[#8a8e99]">NextLessonCard · 4 states</p>
                        <PlayToggle paused={a.paused || !!a.reduce} onClick={a.toggle} />
                    </div>
                    <ol className="flex flex-col gap-1 px-3">
                        {LIFECYCLE.map((st, n) => (
                            <li key={st.label} className="max-w-none!">
                                <button
                                    type="button"
                                    onClick={() => a.go(n)}
                                    aria-pressed={n === a.i}
                                    className={`flex w-full flex-col gap-1.5 rounded-lg px-3 py-2 text-left text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0563A8] ${
                                        n === a.i ? 'bg-[#0563A8]/10 text-[#1b1d26]' : 'text-[#545866] hover:bg-black/5'
                                    }`}
                                >
                                    <span className="flex items-center gap-2">
                                        <span className="font-mono text-xs text-[#8a8e99]">{st.time}</span>
                                        {st.label}
                                    </span>
                                    {n === a.i && <Progress running={a.running} ms={LIFE_MS} k={a.i} />}
                                </button>
                            </li>
                        ))}
                    </ol>
                    <p className="mt-auto max-w-none! border-t border-black/5 p-5 text-sm leading-relaxed text-[#545866]">{s.why}</p>
                </div>
            </div>
            <figcaption className="px-4 text-sm leading-relaxed text-[var(--px-dim)] md:px-10 lg:px-16">
                One card, four moments of the same morning. Each state is a variant in Figma, for desktop and for mobile.
            </figcaption>
        </figure>
    );
}

const POSES = [{ name: 'Laptop' }, { name: 'Celebrating' }, { name: 'Floating' }, { name: 'Questioning' }];

function Mascot() {
    const reduce = useReducedMotion();
    return (
        <figure className="flex flex-col gap-3">
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {POSES.map((p, n) => (
                    <li key={p.name} className="flex max-w-none! flex-col items-center gap-3 rounded-xl border border-[var(--px-line)] bg-[#edf0f4] p-4">
                        <motion.img
                            src={`${IMG}/fx-pose${n}.webp`}
                            alt={`Astro the mascot, pose ${p.name}`}
                            className="h-28 w-28 sm:h-32 sm:w-32"
                            animate={reduce ? undefined : { y: [0, -8, 0] }}
                            transition={{ duration: 3 + n * 0.4, repeat: Infinity, ease: 'easeInOut', delay: n * 0.3 }}
                        />
                        <span className="text-center">
                            <span className="block font-mono text-[11px] text-[#545866]">Pose={p.name}</span>
                        </span>
                    </li>
                ))}
            </ul>
            <figcaption className="text-sm leading-relaxed text-[var(--px-dim)]">
                Even the mascot is a component. Its pose is a property, so a screen picks a mood instead of asking for a new drawing.
            </figcaption>
        </figure>
    );
}

export function ComponentsSection() {
    return (
        <CaseStudySection eyebrow="Components" index={9} title="Components that know what time it is">
            <p>
                A school product runs on a timetable, so many components change with the clock. I drew them as states of one component instead
                of separate cards, which keeps the same place on the screen meaning the same thing all day.
            </p>
            <Lifecycle />
            <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[0.8fr_1.2fr]">
                <figure className="flex flex-col gap-3">
                    <div className="overflow-hidden rounded-xl border border-[var(--px-line)] bg-[#eef0f3] p-3">
                        <ZoomImage
                            src={`${IMG}/fx-sessionrow.webp`}
                            alt="SessionRow in six statuses: completed, cancelled, confirmed with no badge, pending, reschedule requested and no show, each exception with its own badge colour."
                        />
                    </div>
                    <figcaption className="text-sm leading-relaxed text-[var(--px-dim)]">
                        SessionRow: six statuses. Confirmed, the normal case, carries no badge; only the exceptions ask for attention.
                    </figcaption>
                </figure>
                <figure className="flex flex-col gap-3">
                    <div className="overflow-hidden rounded-xl border border-[var(--px-line)] bg-[#eef0f3] p-3">
                        <ZoomImage
                            src={`${IMG}/fx-homework.webp`}
                            alt="PendingHomeworkCard in three statuses, to do, in progress and overdue, for desktop and mobile. Overdue adds a red badge; the button changes from Start to Continue."
                        />
                    </div>
                    <figcaption className="text-sm leading-relaxed text-[var(--px-dim)]">
                        PendingHomeworkCard: to do, in progress, overdue. The button changes from “Start” to “Continue”; overdue only adds a
                        badge, it does not shout.
                    </figcaption>
                </figure>
            </div>
            <Mascot />
        </CaseStudySection>
    );
}

/* ------------------------------------------------------------------ */
/* Animated numbers                                                    */
/* ------------------------------------------------------------------ */

export function CountUp({ value, className }: { value: string; className?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
    const reduce = useReducedMotion();
    const target = Number(value.replace(/,/g, ''));
    const [shown, setShown] = useState(Number.isFinite(target) ? 0 : target);

    useEffect(() => {
        if (!inView || !Number.isFinite(target)) return;
        if (reduce) {
            setShown(target);
            return;
        }
        let raf = 0;
        const start = performance.now();
        const dur = 1200;
        const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            setShown(Math.round(target * (1 - Math.pow(1 - p, 3))));
            if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [inView, target, reduce]);

    if (!Number.isFinite(target)) return <span className={className}>{value}</span>;
    return (
        <span ref={ref} className={className}>
            <span aria-hidden="true">{shown.toLocaleString('en-US')}</span>
            <span className="sr-only">{value}</span>
        </span>
    );
}

/* ------------------------------------------------------------------ */
/* References                                                          */
/* ------------------------------------------------------------------ */

const SOURCES = [
    { title: 'docs/design/DESIGN_SYSTEM.md', text: 'The system document in the ilevar repository. Every count in this case comes from it, dated 12 November 2026.' },
    { title: 'Figma · Ilevar — Design system', text: '30 pages, 607 components, 1,426 variants. The screens in this case are exports from it.' },
    { title: 'Commits 8aea5bea and 44d1ff77', text: 'The blind answer-key check, the removal of the silent fallback, and the teacher warnings.' },
    { title: 'Commits 7025424a and 4ba36c09', text: 'The consent screen for Claude connecting through MCP.' },
    { title: 'messages/en.json', text: 'The production copy quoted in the warnings and the consent screen.' },
];

const READING = [
    { title: 'WCAG 2.2 · 1.4.3 Contrast (Minimum)', href: 'https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html', text: 'The 4.5:1 bar every text ink is tested against.' },
    { title: 'WCAG 2.2 · 1.4.11 Non-text Contrast', href: 'https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html', text: 'Why a 1.23:1 outline did not count as a border.' },
    { title: 'WCAG 2.2 · 2.4.7 Focus Visible', href: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html', text: 'The solid focus ring, at 5.99:1.' },
    { title: 'WCAG 2.2 · 2.3.3 Animation from Interactions', href: 'https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html', text: 'Reduced motion, in the product and on this page.' },
    { title: 'Atomic Design, Brad Frost', href: 'https://atomicdesign.bradfrost.com/', text: 'The atoms, molecules and organisms order of the Figma library.' },
    { title: 'CEFR, Council of Europe', href: 'https://www.coe.int/en/web/common-european-framework-reference-languages', text: 'The A1 to C2 scale behind the level colour map.' },
    { title: 'Model Context Protocol', href: 'https://modelcontextprotocol.io/', text: 'How an AI assistant connects to ilevar, and why it needs a consent screen.' },
];

export function ReferencesSection() {
    return (
        <CaseStudySection eyebrow="References" index={18} title="Sources and references">
            <p>Where every number and screen in this case comes from, and the standards the system is measured against.</p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="flex flex-col gap-3">
                    <p className="font-pixel-label text-[11px] text-[var(--px-dim)]">In the product</p>
                    <ul className="flex flex-col divide-y divide-[var(--px-line)] border-y border-[var(--px-line)]">
                        {SOURCES.map((s) => (
                            <li key={s.title} className="flex max-w-none! flex-col gap-1 py-3">
                                <span className="font-mono text-sm text-[var(--px-ink)]">{s.title}</span>
                                <span className="text-sm leading-relaxed text-[var(--px-muted)]">{s.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="font-pixel-label text-[11px] text-[var(--px-dim)]">Standards and reading</p>
                    <ul className="flex flex-col divide-y divide-[var(--px-line)] border-y border-[var(--px-line)]">
                        {READING.map((r) => (
                            <li key={r.title} className="max-w-none!">
                                <a
                                    href={r.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex flex-col gap-1 py-3 no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0563A8]"
                                >
                                    <span className="flex items-center gap-1.5 text-sm font-medium text-[var(--px-ink)] group-hover:text-[#0563A8]">
                                        {r.title}
                                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                                        <span className="sr-only"> (opens in a new tab)</span>
                                    </span>
                                    <span className="text-sm leading-relaxed text-[var(--px-muted)]">{r.text}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </CaseStudySection>
    );
}


