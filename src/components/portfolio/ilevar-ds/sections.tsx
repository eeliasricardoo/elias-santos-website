'use client';

import { useState } from 'react';
import {
    ArrowRight,
    ArrowUpRight,
    Ban,
    BookOpen,
    Bot,
    Check,
    Code2,
    Figma,
    LifeBuoy,
    ShieldCheck,
    TriangleAlert,
    Users,
    X,
} from 'lucide-react';
import { CaseStudySection } from '../ui/CaseStudySection';
import { ZoomImage } from '../ui/ZoomImage';
import { CountUp } from './motion';

const FIGMA_URL = 'https://www.figma.com/design/7Jp9KZAPYgKUxvl5a5yVWQ/Ilevar-%E2%80%94-Design-system';
const IMG = '/portfolios/ilevar';

/** Figma export on a canvas-grey card (no browser chrome — it is not a web page). */
function Board({ src, alt, caption, bleed = false }: { src: string; alt: string; caption: string; bleed?: boolean }) {
    return (
        <figure className={`flex flex-col gap-3 ${bleed ? '-mx-4 md:-mx-10 lg:-mx-16' : ''}`}>
            <div className="overflow-hidden rounded-xl border border-[var(--px-line)] bg-[#eef0f3]">
                <ZoomImage src={src} alt={alt} />
            </div>
            <figcaption className={`text-sm leading-relaxed text-[var(--px-dim)] ${bleed ? 'px-4 md:px-10 lg:px-16' : ''}`}>{caption}</figcaption>
        </figure>
    );
}

function Facts({ items }: { items: { value: string; label: string }[] }) {
    return (
        <dl className="grid grid-cols-2 gap-x-8 gap-y-6 border-y border-[var(--px-line)] py-6 md:grid-cols-4">
            {items.map((f) => (
                <div key={f.label}>
                    <dd className="font-pixel text-3xl font-semibold text-[var(--px-ink)]">{f.value}</dd>
                    <dt className="mt-1 text-sm leading-snug text-[var(--px-muted)]">{f.label}</dt>
                </div>
            ))}
        </dl>
    );
}

/** A diagram drawn in code, on the same card as a Figma board. */
function Diagram({ caption, children }: { caption: string; children: React.ReactNode }) {
    return (
        <figure className="flex flex-col gap-3">
            <div className="rounded-xl border border-[var(--px-line)] bg-[var(--px-panel)] p-4 sm:p-6">{children}</div>
            <figcaption className="text-sm leading-relaxed text-[var(--px-dim)]">{caption}</figcaption>
        </figure>
    );
}

function Label({ children }: { children: React.ReactNode }) {
    return <p className="font-pixel-label text-[11px] text-[var(--px-dim)]">{children}</p>;
}

/* ------------------------------------------------------------------ */
/* Annotated screen: numbered pins on a Figma export + a legend        */
/* ------------------------------------------------------------------ */

type Pin = { x: number; y: number; title: string; text: string };

function PinDot({ n, active }: { n: number; active: boolean }) {
    return (
        <span
            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold sm:h-7 sm:w-7 sm:text-xs text-white ring-4 transition-all duration-150 ${
                active ? 'scale-110 bg-[#6d4aff] ring-[#6d4aff]/30' : 'bg-[#101216] ring-white/70'
            }`}
        >
            {n}
        </span>
    );
}

function Annotated({ src, alt, pins, caption, label }: { src: string; alt: string; pins: Pin[]; caption: string; label?: string }) {
    const [active, setActive] = useState<number | null>(null);
    return (
        <figure className="-mx-4 flex flex-col gap-3 md:-mx-10 lg:-mx-16">
            <div className="grid grid-cols-1 overflow-hidden rounded-xl border border-[var(--px-line)] bg-[#eef0f3] lg:grid-cols-[1fr_20rem]">
                <div className="p-3 sm:p-6">
                    <div className="relative">
                        <img src={src} alt={alt} loading="lazy" decoding="async" className="block h-auto w-full rounded-lg shadow-[0_20px_50px_-24px_rgba(16,18,22,0.35)]" />
                        {pins.map((p, i) => (
                            <button
                                key={p.title}
                                type="button"
                                aria-label={`${i + 1}. ${p.title}`}
                                onMouseEnter={() => setActive(i)}
                                onMouseLeave={() => setActive(null)}
                                onFocus={() => setActive(i)}
                                onBlur={() => setActive(null)}
                                className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6d4aff]"
                                style={{ left: `${p.x}%`, top: `${p.y}%` }}
                            >
                                <PinDot n={i + 1} active={active === i} />
                            </button>
                        ))}
                    </div>
                </div>
                <ol className="flex flex-col gap-1 border-t border-black/5 bg-white p-3 lg:border-l lg:border-t-0 lg:p-4">
                    {label && <li className="max-w-none! px-2 pb-1 pt-1 text-[11px] font-medium uppercase tracking-wider text-[#8a8e99]">{label}</li>}
                    {pins.map((p, i) => (
                        <li
                            key={p.title}
                            onMouseEnter={() => setActive(i)}
                            onMouseLeave={() => setActive(null)}
                            className={`flex max-w-none! gap-3 rounded-lg p-2 transition-colors ${active === i ? 'bg-[#6d4aff]/8' : ''}`}
                        >
                            <PinDot n={i + 1} active={active === i} />
                            <div className="flex flex-col gap-0.5">
                                <p className="max-w-none! text-sm font-medium text-[#1b1d26]">{p.title}</p>
                                <p className="max-w-none! text-[13px] leading-relaxed text-[#545866]">{p.text}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
            <figcaption className="px-4 text-sm leading-relaxed text-[var(--px-dim)] md:px-10 lg:px-16">{caption}</figcaption>
        </figure>
    );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export function HeroSection() {
    return (
        <section className="flex flex-col gap-10">
            <div className="flex flex-col items-start gap-6">
                <Label>Design system case study · 2026, ongoing</Label>
                <h1 className="text-5xl md:text-7xl">ilevar design system</h1>
                <p className="max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
                    ilevar is built at AI speed: I design in Figma and ship with coding agents. Speed made every screen a little different, and
                    the product started to look generated. This is the system that gave it one voice, written so that people and AI agents
                    follow the same rules.
                </p>
                <div className="flex flex-wrap gap-3">
                    <a href={FIGMA_URL} target="_blank" rel="noopener noreferrer" className="px-btn px-btn--primary">
                        Open the Figma file <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                    <a href="/portfolio/ilevar" className="px-btn">
                        The product case <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                </div>
            </div>

            <figure className="-mx-4 flex flex-col gap-3 md:-mx-10 lg:-mx-16">
                <div className="relative overflow-hidden rounded-2xl bg-[#0563A8] p-4 sm:p-8 lg:p-12">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 opacity-[0.12]"
                        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '22px 22px' }}
                    />
                    <div className="relative grid grid-cols-1 items-start gap-4 sm:gap-6 md:grid-cols-12">
                        <div className="md:col-span-7">
                            <img
                                src={`${IMG}/ai-homework.webp`}
                                alt="The Generate personalised homework dialog from the Figma file: recent lessons with their mistakes and vocabulary, languages, folded advanced options and the Generate & assign button."
                                className="block h-auto w-full rounded-xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)]"
                            />
                        </div>
                        <div className="flex flex-col gap-4 sm:gap-6 md:col-span-5">
                            <img
                                src={`${IMG}/state-created.webp`}
                                alt="The Add New Student dialog after saving: Student registered, with the temporary access password ready to copy and an OK button."
                                className="block h-auto w-full rounded-xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)]"
                            />
                            <img
                                src={`${IMG}/ds2-quiz.webp`}
                                alt="A quiz drawn twice: the teacher's version with the correct answer and the student's choice, and the student's version waiting for the teacher."
                                className="hidden h-auto w-full rounded-xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)] sm:block"
                            />
                        </div>
                    </div>
                </div>
                <figcaption className="px-4 text-sm leading-relaxed text-[var(--px-dim)] md:px-10 lg:px-16">
                    Straight from the Figma file: the AI homework generator, a student just created, and a quiz drawn for the teacher and the
                    student.
                </figcaption>
            </figure>

            <Facts
                items={[
                    { value: '607', label: 'components in Figma' },
                    { value: '1,426', label: 'variants, states included' },
                    { value: '271', label: 'design variables' },
                    { value: '30', label: 'pages, from tokens to every screen' },
                ]}
            />
        </section>
    );
}

/* ------------------------------------------------------------------ */
/* 01 · Problem                                                        */
/* ------------------------------------------------------------------ */

const SYMPTOMS = [
    {
        title: 'A second loud button',
        text: 'The brand orange had become “the other button”. Screens had two filled actions and no hierarchy.',
        visual: (
            <div className="flex gap-2" aria-hidden="true">
                <span className="rounded-md px-3 py-1.5 text-xs font-medium text-white" style={{ background: '#0563A8' }}>
                    Save
                </span>
                <span className="rounded-md px-3 py-1.5 text-xs font-medium text-black" style={{ background: '#FF9600' }}>
                    Preview
                </span>
            </div>
        ),
    },
    {
        title: '10 hand-made copies',
        text: 'The landing page had ten copies of a label the product already had as a component. Six used the fill colour as text, down to 1.71:1.',
        visual: (
            <div className="flex flex-wrap gap-1.5" aria-hidden="true">
                {['#05acd1', '#fbbc03', '#20a04e'].map((c) => (
                    <span key={c} className="rounded-full border border-[var(--px-line)] bg-white px-2 py-0.5 text-[10px] font-semibold uppercase" style={{ color: c }}>
                        New
                    </span>
                ))}
            </div>
        ),
    },
    {
        title: '3 colour maps, 1 meaning',
        text: 'Levels were coloured in three places that disagreed. One of them painted A1 blue and B1 amber, so a level changed colour between screens.',
        visual: (
            <div className="flex items-center gap-1.5 text-[10px] font-semibold" aria-hidden="true">
                <span className="rounded px-1.5 py-0.5 text-white" style={{ background: '#0a8f62' }}>A1</span>
                <span className="rounded px-1.5 py-0.5 text-white" style={{ background: '#0563A8' }}>A1</span>
                <span className="rounded px-1.5 py-0.5 text-black" style={{ background: '#f2b200' }}>B1</span>
                <span className="rounded px-1.5 py-0.5 text-white" style={{ background: '#0563A8' }}>B1</span>
            </div>
        ),
    },
    {
        title: '2 identities',
        text: 'An older “chunky” style survived in 18 of 228 files. Its signature outline measured 1.23:1 against the card: invisible, held up by 37 !important rules.',
        visual: (
            <div className="flex gap-2" aria-hidden="true">
                <span className="rounded-md border-2 border-b-[5px] border-[#eef2f6] bg-white px-3 py-1.5 text-xs font-bold text-[var(--px-ink)]">Chunky</span>
                <span className="rounded-md border border-[var(--px-line)] bg-white px-3 py-1.5 text-xs text-[var(--px-ink)] shadow-sm">Editorial</span>
            </div>
        ),
    },
];

export function ProblemSection() {
    return (
        <CaseStudySection eyebrow="Problem" index={1} title="Fast, and starting to look generated">
            <p>
                When agents write most of the code, every new screen arrives quickly and slightly different: its own button, its own badge, its
                own shade of blue. Nothing is broken, but the product loses its voice. By July 2026 ilevar had what the system document now calls
                the “AI slop” look: competing visual languages inside one product. Before deciding anything, I audited it.
            </p>
            <Diagram caption="Four findings from the audit. Every number comes from counting the code, screen by screen and file by file.">
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {SYMPTOMS.map((s) => (
                        <li key={s.title} className="flex max-w-none! flex-col gap-3 rounded-lg border border-[var(--px-line)] bg-[var(--px-bg)] p-4">
                            <div className="flex h-10 items-center">{s.visual}</div>
                            <p className="max-w-none! font-medium text-[var(--px-ink)]">{s.title}</p>
                            <p className="max-w-none! text-sm leading-relaxed text-[var(--px-muted)]">{s.text}</p>
                        </li>
                    ))}
                </ul>
            </Diagram>
            <p>
                The fix was not a new coat of paint. It was a small set of decisions, made once, drawn in Figma, built as components and written
                down where both a teammate and an agent would find them. The rest of this case is those decisions.
            </p>
        </CaseStudySection>
    );
}

/* ------------------------------------------------------------------ */
/* 02 · How I worked                                                   */
/* ------------------------------------------------------------------ */

const TIMELINE = [
    { date: 'Jul 16', title: 'Audit and structure', text: 'Components reorganised into atoms, molecules and organisms. 361 coloured texts moved to readable colour pairs.' },
    { date: 'Jul 17', title: 'One identity', text: 'The chunky style retired, orange taken out of the interface, selection always blue. Every rule that can be checked got a test.' },
    { date: 'Sep 12', title: 'Sweep of hand-made values', text: '676 hand-typed font sizes replaced by four named steps. Layers and brand colours named once.' },
    { date: 'Sep 27', title: 'A button for AI', text: 'The ai and ai-soft variants, so actions that call a model look different from actions that save.' },
    { date: 'Oct 10', title: 'Figma meets the code', text: 'Figma inventories generated from the code and reconciled, so the file draws what users actually get.' },
    { date: 'Nov', title: 'AI you can trust', text: 'Every screen recounted, the page shell drawn, answer checks for AI homework, and the Claude connector.' },
];

const ROLE = [
    { title: 'Decide', text: 'Audit the product, write the rule, and say no to what breaks it.' },
    { title: 'Draw', text: 'Every component and state in Figma, with a description a person or an agent can follow.' },
    { title: 'Ship', text: 'Build it with coding agents, against tests that fail when the rule is broken.' },
];

export function ProcessSection() {
    return (
        <CaseStudySection eyebrow="How I worked" index={2} title="Five months, one designer, many agents">
            <p>
                I design ilevar and own its system end to end. I made the decisions, drew them in Figma and shipped them
                with coding agents doing most of the typing. Teachers and school owners reach us through support, so what goes wrong in a
                real class comes back to me quickly.
            </p>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {ROLE.map((r) => (
                    <li key={r.title} className="flex max-w-none! flex-col gap-1.5 rounded-xl border border-[var(--px-line)] bg-[var(--px-panel)] p-5">
                        <p className="max-w-none! font-medium text-[var(--px-ink)]">{r.title}</p>
                        <p className="max-w-none! text-sm leading-relaxed text-[var(--px-muted)]">{r.text}</p>
                    </li>
                ))}
            </ul>
            <Diagram caption="The main milestones of 2026, taken from the history of the system document.">
                <ol className="relative grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-6 lg:gap-3">
                    <span aria-hidden="true" className="absolute left-0 right-0 top-[7px] hidden h-px bg-[var(--px-line)] lg:block" />
                    {TIMELINE.map((t) => (
                        <li key={t.title} className="relative flex max-w-none! flex-col gap-2">
                            <span aria-hidden="true" className="h-[15px] w-[15px] rounded-full border-4 border-[var(--px-panel)] bg-[#0563A8]" />
                            <span className="font-pixel-label text-[11px] text-[var(--px-dim)]">{t.date}</span>
                            <p className="max-w-none! text-sm font-medium text-[var(--px-ink)]">{t.title}</p>
                            <p className="max-w-none! text-[13px] leading-relaxed text-[var(--px-muted)]">{t.text}</p>
                        </li>
                    ))}
                </ol>
            </Diagram>
        </CaseStudySection>
    );
}

/* ------------------------------------------------------------------ */
/* 02 · The system at a glance (Figma tour)                            */
/* ------------------------------------------------------------------ */

type TourPage = { id: string; num: string; name: string; src: string; alt: string; title: string; notes: string[] };

const TOUR: TourPage[] = [
    {
        id: 'index',
        num: '00',
        name: 'Index',
        src: `${IMG}/ds-index.webp`,
        alt: 'Index page of the ilevar design system: counts of variables, components and variants, the system principles, the page architecture, the definition of done and a dated changelog.',
        title: 'The file explains itself',
        notes: ['Principles, the page map and the definition of done, on one page.', 'A dated changelog, so anyone can see what changed and when.'],
    },
    {
        id: 'foundations',
        num: '01',
        name: 'Foundations',
        src: `${IMG}/ds2-foundations.webp`,
        alt: 'Colour foundations in Figma: the primary ramp from 50 to 950, the status colours with their foreground, ink and muted versions, and the CEFR level colours, each with its hex value and CSS variable.',
        title: 'Every swatch names its variable in code',
        notes: [
            'The brand ramp runs from 50 to 950; 700 is the brand blue.',
            'Each status colour comes as a background, a text colour on that background, a text colour on white and a muted tint.',
        ],
    },
    {
        id: 'icons',
        num: '02',
        name: 'Icons',
        src: `${IMG}/ds-icons.webp`,
        alt: 'The icon page in Figma: a grid of line icons at 24 pixels, each with its name, and aliases such as alert-circle equals circle-alert.',
        title: 'One icon set, with its aliases',
        notes: [
            'Around 190 line icons, 24 px with a 2 px stroke, all from one open-source family.',
            'Where the family renamed an icon, both names are listed, so an old name in the code still finds its drawing.',
        ],
    },
    {
        id: 'atoms',
        num: '03',
        name: 'Atoms',
        src: `${IMG}/ds-buttons.webp`,
        alt: 'The Button component set in Figma: eleven variants in three sizes and three states each.',
        title: 'One button, every combination drawn',
        notes: ['11 variants, 3 sizes, 3 states: 99 buttons in one component set.', 'Two of the variants exist only for actions that call AI.'],
    },
    {
        id: 'molecules',
        num: '04',
        name: 'Molecules',
        src: `${IMG}/ds2-molecules.webp`,
        alt: 'Molecules in Figma: an empty state with a call to action, a coming-soon state, and a form field shown as default, with a hint and with an error.',
        title: 'The states nobody asks for, decided in advance',
        notes: ['Empty and coming-soon states share one layout.', 'A field is drawn plain, with a hint and with an error, so nobody invents the error style on a deadline.'],
    },
    {
        id: 'organisms',
        num: '05',
        name: 'Organisms',
        src: `${IMG}/ds2-organisms.webp`,
        alt: 'The DashboardHero organism in Figma in five of its themes: three level colours, the teacher theme and the empty, dark theme.',
        title: 'One banner, themed by the student’s level',
        notes: [
            'The dashboard greets each student in the colour of their level, taken from the same map as every level badge.',
            'Teachers and empty accounts get their own theme, and each one is drawn for mobile too.',
        ],
    },
    {
        id: 'navigation',
        num: '08',
        name: 'Shared patterns',
        src: `${IMG}/ds-nav-flyout.webp`,
        alt: 'Navigation flyouts in Figma for the groups Teach, Students, Schedule and More, each drawn without and with an active item in the brand blue.',
        title: 'Navigation, drawn for every destination',
        notes: [
            'Grouped sidebar, icon-only flyouts, mobile bottom bar and sheets, for teachers, owners and admins.',
            'Each group is drawn with and without an active item, so the selected state is checked everywhere.',
        ],
    },
    {
        id: 'room',
        num: '20',
        name: 'Room activities',
        src: `${IMG}/ds2-room.webp`,
        alt: 'The Room activities page in Figma: every activity of the live classroom drawn in pairs, the teacher version next to the student version.',
        title: 'The live classroom, activity by activity',
        notes: ['Every activity of the live room, from reading to interactive video, on one page.', 'Each interactive activity is drawn for the teacher and for the student.'],
    },
];

/** A Figma-like window: the file's page list on the left, the selected page on the canvas. */
function FileTour() {
    const [active, setActive] = useState(TOUR[1].id);
    const page = TOUR.find((p) => p.id === active) ?? TOUR[0];

    const onKey = (e: React.KeyboardEvent<HTMLButtonElement>, i: number) => {
        if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp' && e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
        e.preventDefault();
        const step = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : -1;
        const next = TOUR[(i + step + TOUR.length) % TOUR.length];
        setActive(next.id);
        document.getElementById(`tour-tab-${next.id}`)?.focus();
    };

    return (
        <figure className="flex flex-col gap-3">
            <div className="overflow-hidden rounded-xl border border-[#2c2c2c] bg-[#1e1e1e] shadow-[0_24px_60px_-24px_rgba(16,18,22,0.45)]">
                <div className="flex items-center gap-3 border-b border-white/10 px-4 py-2.5">
                    <span className="flex gap-1.5" aria-hidden="true">
                        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    </span>
                    <span className="truncate text-xs text-white/70">
                        Ilevar — Design system <span className="text-white/35">/</span>{' '}
                        <span className="text-white">
                            {page.num} · {page.name}
                        </span>
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[13rem_1fr]">
                    <div
                        role="tablist"
                        aria-label="Pages of the Figma file"
                        aria-orientation="vertical"
                        className="flex gap-1 overflow-x-auto border-b border-white/10 p-2 md:flex-col md:overflow-visible md:border-b-0 md:border-r"
                    >
                        <p className="hidden px-2 pb-1 pt-1 text-[11px] font-medium text-white/40 md:block">Pages</p>
                        {TOUR.map((p, i) => {
                            const selected = p.id === active;
                            return (
                                <button
                                    key={p.id}
                                    id={`tour-tab-${p.id}`}
                                    type="button"
                                    role="tab"
                                    aria-selected={selected}
                                    aria-controls="tour-panel"
                                    tabIndex={selected ? 0 : -1}
                                    onClick={() => setActive(p.id)}
                                    onKeyDown={(e) => onKey(e, i)}
                                    className={`shrink-0 whitespace-nowrap rounded-md px-2.5 py-1.5 text-left text-xs transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0d99ff] ${
                                        selected ? 'bg-[#0d99ff]/20 text-white' : 'text-white/60 hover:bg-white/5 hover:text-white'
                                    }`}
                                >
                                    <span className="mr-1.5 font-mono text-white/40">{p.num}</span>
                                    {p.name}
                                </button>
                            );
                        })}
                        <p className="hidden px-2.5 pt-2 text-[11px] leading-snug text-white/35 md:block">+ 22 more pages of screens by role and flow</p>
                    </div>

                    <div id="tour-panel" role="tabpanel" aria-labelledby={`tour-tab-${page.id}`} className="flex min-w-0 flex-col bg-[#eef0f3]">
                        <div className="p-3 sm:p-5">
                            <div key={page.id} className="overflow-hidden rounded-lg bg-white shadow-sm">
                                <ZoomImage src={page.src} alt={page.alt} />
                            </div>
                        </div>
                        <div className="mt-auto border-t border-black/5 bg-white px-4 py-4 sm:px-5">
                            <p className="max-w-none! font-medium text-[#1b1d26]">{page.title}</p>
                            <ul className="mt-2 flex flex-col gap-1.5">
                                {page.notes.map((n) => (
                                    <li key={n} className="flex max-w-none! gap-2 text-sm leading-relaxed text-[#545866]">
                                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#0563A8]" aria-hidden="true" />
                                        {n}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <figcaption className="text-sm leading-relaxed text-[var(--px-dim)]">
                A tour of the Figma file. Pick a page; click the image to see it at full size.
            </figcaption>
        </figure>
    );
}

export function GlanceSection() {
    return (
        <CaseStudySection eyebrow="The system" index={4} title="The whole product, in one Figma file">
            <p>
                The file follows the order people learn a system: foundations, icons, atoms, molecules, organisms, shared patterns. Then come 22
                pages of real screens organised by role and flow (student homework, teacher classes, school settings, the live room, the
                admin), all built from the library. A last page keeps components that no longer exist in the code, so nothing obsolete gets
                reused by accident.
            </p>
            <div className="-mx-4 md:-mx-10 lg:-mx-16">
                <FileTour />
            </div>
        </CaseStudySection>
    );
}

/* ------------------------------------------------------------------ */
/* 03 · Principle: one primary action                                  */
/* ------------------------------------------------------------------ */

export function ButtonSection() {
    return (
        <CaseStudySection eyebrow="Principle 1" index={6} title="One primary action per screen">
            <p>
                The second loud button had a funny origin. In the component library ilevar started from, the button called “secondary” is
                neutral by convention. ilevar had stored its brand orange under that name, so every secondary button inherited the brand
                accent. Nobody chose to have two primary actions. A name chose it.
            </p>
            <Diagram caption="The same pair of actions, before and after. One leads; the other steps back.">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="flex flex-col gap-3">
                        <Label>Before</Label>
                        <div className="flex flex-wrap gap-3" aria-hidden="true">
                            <span className="rounded-lg px-4 py-2 text-sm font-medium text-white" style={{ background: '#0563A8' }}>
                                Save lesson
                            </span>
                            <span className="rounded-lg px-4 py-2 text-sm font-medium text-black" style={{ background: '#FF9600' }}>
                                Preview
                            </span>
                        </div>
                        <p className="text-sm text-[var(--px-muted)]">Two filled colours side by side: which one is the main action?</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Label>After</Label>
                        <div className="flex flex-wrap gap-3" aria-hidden="true">
                            <span className="rounded-lg px-4 py-2 text-sm font-medium text-white" style={{ background: '#0563A8' }}>
                                Save lesson
                            </span>
                            <span
                                className="rounded-lg border px-4 py-2 text-sm font-medium"
                                style={{ background: '#f8f7f3', borderColor: '#e7e5de', color: '#1b1d26' }}
                            >
                                Preview
                            </span>
                        </div>
                        <p className="text-sm text-[var(--px-muted)]">Every action is blue. Orange lives only in the mascot and the logo.</p>
                    </div>
                </div>
            </Diagram>
            <p>
                Today there is one button component with 11 variants, and each variant has one job. Two of them, with a blue-to-violet
                gradient, are reserved for actions that call AI, so a teacher can always tell “this will generate something” from “this will
                save”. The gradient starts from the school’s own brand colour, so it still feels like their product.
            </p>
            <Board
                src={`${IMG}/ds-buttons.webp`}
                alt="The Button component set in Figma: eleven variants (default, secondary, soft, outline, ghost, destructive, destructive-soft, success-soft, link, ai and ai-soft) in three sizes and three states each."
                caption="The button component set: 11 variants × 3 sizes × 3 states. The ai and ai-soft variants appear only on AI actions."
            />
        </CaseStudySection>
    );
}

/* ------------------------------------------------------------------ */
/* 04 · Principle: colour has one job                                  */
/* ------------------------------------------------------------------ */

const COLOUR_JOBS = [
    { job: 'Selection', says: '“This one.”', swatches: ['#0563A8'], text: 'A selected tab, chip or menu item is always the brand blue, whatever it contains.' },
    { job: 'Status', says: '“This worked / needs you / failed.”', swatches: ['#007132', '#8a5a00', '#b42318', '#0b5c8a'], text: 'Four tones, and one component that maps every status in the product to one of them.' },
    { job: 'Category', says: '“This is a different kind of thing.”', swatches: ['#05acd1', '#f4c20d', '#ff7a59', '#20a04e', '#a259ff', '#e84393'], text: 'A separate palette whose only job is telling things apart, like the 16 activity types. It never means status.' },
];

export function ColourSection() {
    return (
        <CaseStudySection eyebrow="Principle 2" index={7} title="Colour has one job at a time">
            <p>
                The lesson playground gave every activity tab its own colour: quiz blue, flashcards orange, matching coral. It looked lively, but
                it disagreed with the colours used everywhere else, and two activities shared a colour, so it did not identify anything. It was
                decoration dressed up as meaning. I split the three jobs colour had been doing at once.
            </p>
            <Diagram caption="Three jobs, three sets of colours. Each map is defined in one place only, so a level or an activity cannot change colour between screens.">
                <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {COLOUR_JOBS.map((c) => (
                        <li key={c.job} className="flex max-w-none! flex-col gap-3 rounded-lg border border-[var(--px-line)] bg-[var(--px-bg)] p-4">
                            <div className="flex gap-1.5" aria-hidden="true">
                                {c.swatches.map((s) => (
                                    <span key={s} className="h-6 w-6 rounded-md" style={{ background: s }} />
                                ))}
                            </div>
                            <p className="max-w-none! font-medium text-[var(--px-ink)]">
                                {c.job} <span className="font-normal text-[var(--px-muted)]">says {c.says}</span>
                            </p>
                            <p className="max-w-none! text-sm leading-relaxed text-[var(--px-muted)]">{c.text}</p>
                        </li>
                    ))}
                </ul>
            </Diagram>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Board
                    src={`${IMG}/ds-nav-flyout.webp`}
                    alt="Navigation flyouts in Figma, each drawn twice: without a selection, and with the active item filled in the brand blue."
                    caption="Selection: navigation drawn with and without an active item. Blue means “you are here”."
                />
                <Board
                    src={`${IMG}/ds2-activity.webp`}
                    alt="Activity type badges in Figma: intro, reading, drilling, flashcards, quiz, fill in the blank, writing, grammar, vocabulary table, listening, matching, image, video, interactive video, PDF and end screen, each with an icon and a categorical colour."
                    caption="Category: the 16 activity types share one badge. The colour tells them apart and never signals status."
                />
            </div>
            <Board
                bleed
                src={`${IMG}/fx-cefr.webp`}
                alt="CefrProgressCompact in five variants, A1 to C1: each card has a progress ring and a row of level chips, coloured from one level map that runs from teal through blue to violet."
                caption="Level: the one CEFR map, A1 to C1, in a real component. The ring, the chip and the dashboard banner all read the same colour for the same level, which is what the third map used to break."
            />
            <p>
                Every colour also comes as a pair: one version to fill a background and one to use as text on white, because a light green
                that works as a badge is unreadable as a word. Contrast stopped being something to remember and became part of the token.
            </p>
        </CaseStudySection>
    );
}

/* ------------------------------------------------------------------ */
/* 05 · Principle: every state designed                                */
/* ------------------------------------------------------------------ */

type StateSet = { id: string; name: string; count: string; src: string; alt: string; text: string; a11y: { title: string; text: string }[] };

type StudentState = { id: string; name: string; src: string; alt: string; why: string };

const STUDENT_STATES: StudentState[] = [
    {
        id: 'form',
        name: 'Empty',
        src: `${IMG}/state-form.webp`,
        alt: 'Add New Student dialog, empty: name, email, optional password with a hint, timezone with a Use this device link, an under-18 consent checkbox and the Add student button.',
        why: 'The password is optional: left blank, the student gets a temporary one by email. The timezone is asked up front, with “Use this device”, because every lesson time depends on it.',
    },
    {
        id: 'weak',
        name: 'Weak password',
        src: `${IMG}/state-weak.webp`,
        alt: 'Add New Student dialog with a short password: a red strength bar labelled Weak and the message Password must be at least 8 characters.',
        why: 'The rule appears while the teacher types, next to the field, not after a failed submit.',
    },
    {
        id: 'strong',
        name: 'Strong password',
        src: `${IMG}/state-strong.webp`,
        alt: 'Add New Student dialog with a long password: a full green strength bar labelled Strong and Minimum length reached.',
        why: 'Green only when the rule is met. Status colour is earned, never decoration, and the strength is also written in words, so it never depends on colour.',
    },
    {
        id: 'minor',
        name: 'Under 18',
        src: `${IMG}/state-minor.webp`,
        alt: 'Add New Student dialog with the under-18 consent box ticked: a Parent/guardian email field appears, with a note on what is recorded.',
        why: 'Ticking consent reveals the guardian’s email, and the dialog says what is recorded and why: the student’s access depends on that record.',
    },
    {
        id: 'submit',
        name: 'Submitting',
        src: `${IMG}/state-submit.webp`,
        alt: 'Add New Student dialog while saving: the fields are greyed out and the button shows a spinner.',
        why: 'Fields lock and the button turns into progress while the student is created.',
    },
    {
        id: 'created',
        name: 'Created',
        src: `${IMG}/state-created.webp`,
        alt: 'Add New Student dialog after saving: Student registered, with the temporary access password in a box with a copy button, and an OK button.',
        why: 'The temporary password is shown once, ready to copy, so the teacher can pass it on before closing.',
    },
];

function StateStepper() {
    const [i, setI] = useState(0);
    const s = STUDENT_STATES[i];
    return (
        <figure className="-mx-4 flex flex-col gap-3 md:-mx-10 lg:-mx-16">
            <div className="grid grid-cols-1 overflow-hidden rounded-xl border border-[var(--px-line)] bg-[#eef0f3] md:grid-cols-[18rem_1fr]">
                <div className="flex flex-col border-b border-black/5 bg-white md:border-b-0 md:border-r">
                    <p className="px-5 pb-2 pt-4 text-[11px] font-medium uppercase tracking-wider text-[#8a8e99]">Add a student · 1 dialog, 8 states</p>
                    <div role="tablist" aria-label="States of the Add a student dialog" className="flex gap-1 overflow-x-auto px-3 pb-3 md:flex-col md:overflow-visible">
                        {STUDENT_STATES.map((st, n) => {
                            const selected = n === i;
                            return (
                                <button
                                    key={st.id}
                                    type="button"
                                    role="tab"
                                    aria-selected={selected}
                                    aria-controls="student-state-panel"
                                    onClick={() => setI(n)}
                                    className={`flex shrink-0 items-center gap-3 whitespace-nowrap rounded-lg px-3 py-2 text-left text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0563A8] ${
                                        selected ? 'bg-[#0563A8] text-white' : 'text-[#545866] hover:bg-black/5'
                                    }`}
                                >
                                    <span className={`font-mono text-xs ${selected ? 'text-white/70' : 'text-[#8a8e99]'}`}>{String(n + 1).padStart(2, '0')}</span>
                                    {st.name}
                                </button>
                            );
                        })}
                    </div>
                    <div className="mt-auto hidden border-t border-black/5 p-5 md:block">
                        <p className="max-w-none! text-sm font-medium text-[#1b1d26]">Why this state exists</p>
                        <p className="mt-1.5 max-w-none! text-sm leading-relaxed text-[#545866]">{s.why}</p>
                    </div>
                </div>
                <div id="student-state-panel" role="tabpanel" className="flex flex-col items-center justify-center gap-4 p-4 sm:p-8">
                    <img key={s.id} src={s.src} alt={s.alt} className="block h-auto max-h-[38rem] w-auto max-w-full" />
                    <p className="max-w-none! text-sm leading-relaxed text-[#545866] md:hidden">{s.why}</p>
                </div>
            </div>
            <figcaption className="px-4 text-sm leading-relaxed text-[var(--px-dim)] md:px-10 lg:px-16">
                Six of the eight states of one dialog, each a variant of the same Figma component. The other two are the school owner’s version
                (with “assign to”) and a medium-strength password.
            </figcaption>
        </figure>
    );
}

const STATE_SETS: StateSet[] = [
    {
        id: 'notebook',
        name: 'Start a class notebook',
        count: '6 states',
        src: `${IMG}/st-notebook.webp`,
        alt: 'The Start Class Notebook dialog in six states: a class selected, nothing selected, loading, no classes scheduled, no classes for the selected student, and opening.',
        text: 'A class selected, nothing selected yet, loading, no classes at all, no classes for this student, and opening. The empty states say why they are empty and what to do next.',
        a11y: [
            {
                title: 'Faded on purpose',
                text: '“Open Notebook” stays off until a class is picked, drawn at 50% opacity. WCAG 1.4.3 exempts inactive controls from contrast, and the button still names the action it will take.',
            },
            {
                title: 'Loading in words',
                text: 'While the notebook opens the button reads “Opening…” next to the spinner, and Cancel locks too, so the request cannot be cut in half. The list spinner has a translated label for screen readers.',
            },
            {
                title: 'Named for assistive tech',
                text: 'The title and the sentence under it are the dialog’s accessible name and description, and every field has a visible label.',
            },
            {
                title: 'Focus you can see',
                text: 'Every button has a focus ring at 5.99:1 against the page, above the 3:1 that WCAG asks for, drawn without transparency so it never fades.',
            },
            {
                title: 'Still open',
                text: 'A disabled button cannot take focus, so a screen-reader user may never learn why it is off. The fix is a focusable button with aria-disabled and a “Pick a class first” hint.',
            },
        ],
    },
    {
        id: 'plan',
        name: 'Lesson plan, before class',
        count: '6 states',
        src: `${IMG}/st-lesson-plan.webp`,
        alt: 'The teacher’s lesson plan screen before class in six states: no templates, templates available, applying a template, plan ready, plan ready with a cover image, and resume from activity 5 with the first four activities marked done.',
        text: 'No templates, templates available, applying one, plan ready, ready with a cover, and resuming a class halfway: the first four activities are done and the button says “Resume from activity 5”.',
        a11y: [
            {
                title: 'Never colour alone',
                text: 'A finished activity turns green and also gets a check, and the header says “4 done” in words.',
            },
            {
                title: 'Badges carry an icon and a word',
                text: 'Each activity badge pairs its colour with an icon and a name, so Quiz and Reading are told apart without seeing colour.',
            },
            {
                title: 'The action says where it goes',
                text: '“Resume from activity 5” names the step, instead of a generic “Continue”.',
            },
        ],
    },
];

function StatesGallery() {
    const [active, setActive] = useState(STATE_SETS[0].id);
    const set = STATE_SETS.find((s) => s.id === active) ?? STATE_SETS[0];

    return (
        <figure className="-mx-4 flex flex-col gap-3 md:-mx-10 lg:-mx-16">
            <div className="overflow-hidden rounded-xl border border-[var(--px-line)] bg-[#eef0f3]">
                <div role="tablist" aria-label="Components and their states" className="flex gap-1 overflow-x-auto border-b border-black/5 bg-white p-2">
                    {STATE_SETS.map((s) => {
                        const selected = s.id === active;
                        return (
                            <button
                                key={s.id}
                                type="button"
                                role="tab"
                                id={`states-tab-${s.id}`}
                                aria-selected={selected}
                                aria-controls="states-panel"
                                onClick={() => setActive(s.id)}
                                className={`shrink-0 whitespace-nowrap rounded-md px-3 py-1.5 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0563A8] ${
                                    selected ? 'bg-[#0563A8] text-white' : 'text-[#545866] hover:bg-black/5'
                                }`}
                            >
                                {s.name} <span className={selected ? 'text-white/70' : 'text-[#8a8e99]'}>· {s.count}</span>
                            </button>
                        );
                    })}
                </div>
                <div id="states-panel" role="tabpanel" aria-labelledby={`states-tab-${set.id}`} className="p-3 sm:p-6">
                    <div key={set.id} className="mx-auto max-w-4xl">
                        <ZoomImage src={set.src} alt={set.alt} />
                    </div>
                </div>
            </div>
            <figcaption className="flex flex-col gap-4 px-4 md:px-10 lg:px-16">
                <span className="text-sm leading-relaxed text-[var(--px-dim)]">{set.text}</span>
                <span className="flex flex-col gap-3 rounded-xl border border-[var(--px-line)] p-4 sm:p-5">
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#0563A8]">Accessibility in these states</span>
                    <span className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                        {set.a11y.map((a) => (
                            <span key={a.title} className="flex flex-col gap-0.5 text-sm leading-relaxed">
                                <span className="font-semibold text-[var(--px-ink)]">{a.title}</span>
                                <span className="text-[var(--px-muted)]">{a.text}</span>
                            </span>
                        ))}
                    </span>
                </span>
            </figcaption>
        </figure>
    );
}

export function StatesSection() {
    return (
        <CaseStudySection eyebrow="Principle 3" index={8} title="Every state is designed before anyone asks">
            <p>
                An agent will happily build the happy path. What it invents on its own are the other states: the loading spinner, the empty list,
                the error, the case nobody mentioned. Those are exactly the moments a teacher remembers. So in ilevar a component is not finished
                until its states are drawn, as variants of the same component, next to each other.
            </p>
            <StateStepper />
            <p>
                Some of these states are product decisions, not just visuals. The under-18 state exists because a school has to record a
                guardian’s consent. The same rule runs through the whole file: the class notebook has its empty and loading states, and the
                lesson plan has a state for resuming a class halfway, because real classes get interrupted and a teacher should not have to
                remember where they stopped.
            </p>
            <StatesGallery />
        </CaseStudySection>
    );
}

/* ------------------------------------------------------------------ */
/* 07 · Designing the AI features                                      */
/* ------------------------------------------------------------------ */

const HOMEWORK_PINS: Pin[] = [
    { x: 91.5, y: 9.5, title: 'Names its sources', text: 'The description says exactly what the AI will read: this student’s class notes, mistakes and vocabulary.' },
    { x: 67, y: 30.8, title: 'Shows the input before it is used', text: 'Each recent lesson lists its mistakes and new words, so the teacher picks the lesson with the most to practise.' },
    { x: 43.5, y: 83.8, title: 'Folded, but honest', text: 'Advanced options stay closed, and the closed row says what the defaults are: mixed focus, no specific topics, no due date.' },
    { x: 87, y: 94.3, title: 'The button names both consequences', text: '“Generate & assign”: the homework goes to the student right away, and the label says so. The gradient is the AI button variant, used only on actions that call a model.' },
];

export function AiSection() {
    return (
        <CaseStudySection eyebrow="AI features" index={12} title="Designing the moments the AI does the work">
            <p>
                ilevar generates lessons and homework with AI. Those screens carry the most risk, because a teacher has to trust something they
                did not write. They are built from the same components as everything else. What makes them different is a handful of
                decisions about what the teacher sees before, during and after the model works.
            </p>
            <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_1.15fr]">
                <div className="flex flex-col gap-3">
                    <Label>During</Label>
                    <p className="max-w-none! text-lg leading-relaxed text-[var(--px-ink)]">Progress in words, not a spinner.</p>
                    <p className="max-w-none! leading-relaxed text-[var(--px-muted)]">
                        While the lesson is generated the options fold away and the panel says what is happening: “Understanding topic and
                        level…”, then “Assembling the lesson timeline…”. When it is done, the lesson lands in the builder as ordinary activities,
                        drawn with the same components, that the teacher can edit, reorder or delete.
                    </p>
                </div>
                <figure className="flex flex-col gap-2 overflow-hidden rounded-xl border border-[var(--px-line)] bg-[#eef0f3] p-3 sm:p-5">
                    <img
                        src={`${IMG}/ai-generating-progress.webp`}
                        alt="The lesson generator while it works: a progress ring and the words “Understanding topic and level…” and “Assembling the lesson timeline…”."
                        className="block h-auto w-full rounded-lg"
                        loading="lazy"
                    />
                </figure>
            </div>
            <Annotated
                label="Homework from class notes"
                src={`${IMG}/ai-homework.webp`}
                alt="The Generate personalised homework dialog: class notes or external text tabs, a list of recent lessons each with a count of mistakes and vocabulary, a supplementary text field, lesson and student language, folded advanced options with their defaults, and the Generate & assign button."
                pins={HOMEWORK_PINS}
                caption="Personalised homework, generated from what happened in class. The names are sample data from the Figma file."
            />
        </CaseStudySection>
    );
}

/* ------------------------------------------------------------------ */
/* 08 · When the AI gets it wrong                                      */
/* ------------------------------------------------------------------ */

const CHECK_FLOW = [
    { step: 'Generate', text: 'The model writes the exercises and marks an answer key.' },
    { step: 'Check blind', text: 'A second pass answers every question without seeing the key.' },
    { step: 'Keep or drop', text: 'An item stays only if both agree and no other option also fits. The rest are generated again.' },
    { step: 'Tell the teacher', text: 'If something could not be checked or delivered, the homework says so before the student starts.' },
];

function Toast({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-start gap-3 rounded-lg border border-[#f3d9a6] bg-white p-4 shadow-[0_12px_30px_-16px_rgba(16,18,22,0.35)]">
            <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-[#b45309]" aria-hidden="true" />
            <p className="max-w-none! text-sm leading-relaxed text-[#1b1d26]">{children}</p>
        </div>
    );
}

export function WrongSection() {
    return (
        <CaseStudySection eyebrow="When AI is wrong" index={13} title="Designing for the answer the AI got wrong">
            <p>
                Generated homework looked right and was sometimes wrong in the worst possible way. A fill-in-the-blank read “I need to ___ the
                oven before baking”, and the AI had marked “switch off” as the answer. A student wrote “switch on” and was marked wrong.
                The screen repeated the model’s confidence, and the student paid for it.
            </p>

            <Diagram caption="The exercise as it was generated. The interface had no way of knowing the key was wrong.">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-[1.2fr_1fr] md:items-center">
                    <div className="rounded-lg border border-[var(--px-line)] bg-[var(--px-bg)] p-5">
                        <p className="max-w-none! text-[11px] font-medium uppercase tracking-wider text-[var(--px-dim)]">Fill in the blank</p>
                        <p className="mt-3 max-w-none! text-lg text-[var(--px-ink)]">
                            I need to <span className="mx-1 inline-block min-w-16 border-b-2 border-[var(--px-ink)]" /> the oven before baking.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2" aria-hidden="true">
                            <span className="rounded-md border border-[#b7e0c5] bg-[#e7f6ec] px-3 py-1.5 text-sm text-[#007132]">switch off · marked correct</span>
                            <span className="rounded-md border border-[#f5c2c0] bg-[#fdecec] px-3 py-1.5 text-sm text-[#b42318]">switch on · student, marked wrong</span>
                        </div>
                    </div>
                    <p className="max-w-none! leading-relaxed text-[var(--px-muted)]">
                        The colours did exactly what the system says they should: green for right, red for wrong. The design was consistent and
                        the content was false. A design system cannot catch that on its own, so the fix had to reach into how the content is
                        made and what the teacher is told.
                    </p>
                </div>
            </Diagram>

            <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {CHECK_FLOW.map((c, i) => (
                    <li key={c.step} className="relative flex max-w-none! flex-col gap-2 rounded-xl border border-[var(--px-line)] bg-[var(--px-panel)] p-5">
                        <span className="font-pixel-label text-[11px] text-[var(--px-dim)]">{String(i + 1).padStart(2, '0')}</span>
                        <p className="max-w-none! font-medium text-[var(--px-ink)]">{c.step}</p>
                        <p className="max-w-none! text-sm leading-relaxed text-[var(--px-muted)]">{c.text}</p>
                    </li>
                ))}
            </ol>

            <p>
                The last step is the design decision. When the AI could not deliver something, the old behaviour was a silent fallback: filler
                exercises nobody had asked for. Now the fallback only includes what can be correct without AI (a grammar card, matching,
                flashcards, writing), never an invented quiz, and the teacher gets a warning that stays on screen long enough to read.
            </p>

            <figure className="flex flex-col gap-3">
                <div className="grid grid-cols-1 gap-3 rounded-xl border border-[var(--px-line)] bg-[#eef0f3] p-4 sm:p-6 md:grid-cols-2">
                    <Toast>
                        The homework is assigned, but we couldn’t automatically check the answers of its quiz and fill-in exercises. Review them
                        before the student starts.
                    </Toast>
                    <Toast>
                        The homework is assigned, but some exercises didn’t pass the quality checks and were left out. Review it before the
                        student starts.
                    </Toast>
                </div>
                <figcaption className="text-sm leading-relaxed text-[var(--px-dim)]">
                    Two of the warnings, with the product’s own copy. Each one says what happened, what is already done, and what to do next.
                </figcaption>
            </figure>

            <p>
                Honesty includes the case: the check is new, and how often it catches a wrong key on real homework is not measured yet. That
                number is the next thing I want on the dashboard.
            </p>
        </CaseStudySection>
    );
}

/* ------------------------------------------------------------------ */
/* 09 · When the user is an AI                                         */
/* ------------------------------------------------------------------ */

const CAN = [
    { icon: BookOpen, label: 'View the school’s lessons' },
    { icon: Users, label: 'View the student list' },
    { icon: LifeBuoy, label: 'Look up platform help' },
];

const CONSENT_DECISIONS = [
    { title: 'Permissions in plain words', text: 'Not technical scope names: “View the student list”, written the way a school owner would say it.' },
    { title: 'What it cannot do, just as visible', text: '“Cannot create, change or send anything” sits in the same list, so the limit is read, not assumed.' },
    { title: 'Only the owner can say yes', text: 'Anyone else who reaches the screen gets a clear “Restricted access” state instead of a button that fails.' },
    { title: 'Easy to undo', text: 'The screen says access can be revoked at any time, and the integrations page lists every active connection with a Revoke button.' },
];

export function ConsentSection() {
    return (
        <CaseStudySection eyebrow="AI as a user" index={14} title="When the one asking for access is an AI">
            <p>
                A school owner can now connect Claude to ilevar and ask it things like “list this week’s lessons”. That makes an AI assistant a
                new kind of user of the product, and it raises a design question that did not exist a year ago: how does a person decide what
                an AI is allowed to see?
            </p>

            <div className="-mx-4 grid grid-cols-1 gap-6 rounded-xl border border-[var(--px-line)] bg-[#eef0f3] p-4 sm:p-8 md:-mx-10 md:grid-cols-[1fr_1fr] md:items-center lg:-mx-16">
                <div className="mx-auto w-full max-w-sm rounded-xl border border-[#e7e5de] bg-white p-6 shadow-[0_20px_50px_-24px_rgba(16,18,22,0.35)]">
                    <p className="max-w-none! text-center! text-lg font-semibold tracking-tight text-[#0563A8]">ilevar</p>
                    <p className="mt-4 max-w-none! text-center! text-[11px] font-medium uppercase tracking-wide text-[#8a8e99]">Connection with Claude</p>
                    <p className="mt-1.5 max-w-none! text-center! text-lg font-semibold text-[#1b1d26]">Connect Claude to your school</p>
                    <div className="mt-5 rounded-lg border border-[#e7e5de] bg-[#fafaf8] p-4">
                        <p className="max-w-none! text-sm font-medium text-[#1b1d26]">What this AI will be able to do</p>
                        <ul className="mt-3 flex flex-col gap-2.5">
                            {CAN.map((c) => (
                                <li key={c.label} className="flex max-w-none! items-center gap-3 text-sm text-[#1b1d26]">
                                    <c.icon className="h-4 w-4 shrink-0 text-[#0563A8]" aria-hidden="true" />
                                    {c.label}
                                    <Check className="ml-auto h-4 w-4 shrink-0 text-[#007132]" aria-label="allowed" />
                                </li>
                            ))}
                            <li className="flex max-w-none! items-center gap-3 text-sm text-[#6b6f7b]">
                                <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
                                Cannot create, change or send anything
                                <X className="ml-auto h-4 w-4 shrink-0" aria-label="not allowed" />
                            </li>
                        </ul>
                    </div>
                    <p className="mt-4 max-w-none! text-center! text-xs text-[#6b6f7b]">You can revoke access at any time.</p>
                    <div className="mt-5 grid grid-cols-2 gap-3" aria-hidden="true">
                        <span className="flex justify-center rounded-lg border border-[#e7e5de] py-2 text-sm font-medium text-[#1b1d26]">Cancel</span>
                        <span className="flex justify-center rounded-lg bg-[#0563A8] py-2 text-sm font-medium text-white">Authorize access</span>
                    </div>
                </div>
                <ol className="flex flex-col gap-4">
                    {CONSENT_DECISIONS.map((d, i) => (
                        <li key={d.title} className="flex max-w-none! gap-3">
                            <PinDot n={i + 1} active={false} />
                            <div className="flex flex-col gap-0.5">
                                <p className="max-w-none! font-medium text-[#1b1d26]">{d.title}</p>
                                <p className="max-w-none! text-sm leading-relaxed text-[#545866]">{d.text}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
            <p className="text-sm! text-[var(--px-dim)]">
                The consent screen, rebuilt here with its production copy. It ships in Portuguese, English, Spanish and French.
            </p>

            <p>
                One detail I like: the screen shows the ilevar logo and names Claude only in text. Putting another company’s logo on your own
                consent screen borrows trust you have not earned, and their brand guidelines ask for exactly this.
            </p>
        </CaseStudySection>
    );
}

/* ------------------------------------------------------------------ */
/* Accessibility in the token                                          */
/* ------------------------------------------------------------------ */

const PAIRS = [
    { name: 'Blue', fill: '#05acd1', ink: '#013346', fillRatio: '2.67', inkRatio: '13.48' },
    { name: 'Yellow', fill: '#fbbc03', ink: '#5f4202', fillRatio: '1.71', inkRatio: '9.31' },
    { name: 'Success', fill: '#20a04e', ink: '#007132', fillRatio: '3.40', inkRatio: '6.15' },
];

const A11Y_RULES = [
    { title: 'Focus you can see', text: 'The focus ring measures 5.99:1 against the page. It used to be drawn half-transparent, which halved its contrast; the button was fixed.' },
    { title: 'Motion with an off switch', text: 'Every animation in the stylesheet is turned off for people who ask their system for reduced motion. A test checks each one.' },
    { title: 'Checked against the real colours', text: 'Contrast is calculated from the live stylesheet, not from a spreadsheet. If a change fails, the token is fixed; the limit is never lowered.' },
];

export function AccessibilitySection() {
    return (
        <CaseStudySection eyebrow="Accessibility" index={10} title="Accessibility is part of the token, not a checklist">
            <p>
                A bright colour that works as a badge is unreadable as a word. Instead of asking everyone to remember that, every colour in
                ilevar comes as two tokens: a fill for backgrounds and an ink for text on white. Picking the wrong one is not a judgement call
                anymore; a test fails.
            </p>
            <Diagram caption="Real tokens from the product. Contrast of each colour as text on white; WCAG AA asks for 4.5:1.">
                <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {PAIRS.map((p) => (
                        <li key={p.name} className="flex max-w-none! flex-col gap-3 rounded-lg border border-[var(--px-line)] bg-white p-4">
                            <p className="max-w-none! text-[11px] font-medium uppercase tracking-wider text-[#8a8e99]">{p.name}</p>
                            <div className="flex items-center justify-between gap-3">
                                <span className="text-lg font-semibold" style={{ color: p.fill }}>Confirmed</span>
                                <span className="flex items-center gap-1 rounded-full bg-[#fdecec] px-2 py-0.5 text-xs font-medium text-[#b42318]">
                                    <X className="h-3 w-3" aria-hidden="true" /> {p.fillRatio}:1
                                </span>
                            </div>
                            <div className="flex items-center justify-between gap-3 border-t border-black/5 pt-3">
                                <span className="text-lg font-semibold" style={{ color: p.ink }}>Confirmed</span>
                                <span className="flex items-center gap-1 rounded-full bg-[#e7f6ec] px-2 py-0.5 text-xs font-medium text-[#007132]">
                                    <Check className="h-3 w-3" aria-hidden="true" /> {p.inkRatio}:1
                                </span>
                            </div>
                            <div className="flex gap-2 text-[11px] text-[#6b6f7b]">
                                <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded-sm" style={{ background: p.fill }} />fill</span>
                                <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded-sm" style={{ background: p.ink }} />ink</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </Diagram>
            <p>
                The brand blue is the one exception: at 6.26:1 it works as both, so it has no separate ink. Every other colour, including the 12
                category colours of the activity badges, has its pair.
            </p>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {A11Y_RULES.map((r) => (
                    <li key={r.title} className="flex max-w-none! flex-col gap-1.5 rounded-xl border border-[var(--px-line)] bg-[var(--px-panel)] p-5">
                        <p className="max-w-none! font-medium text-[var(--px-ink)]">{r.title}</p>
                        <p className="max-w-none! text-sm leading-relaxed text-[var(--px-muted)]">{r.text}</p>
                    </li>
                ))}
            </ul>
        </CaseStudySection>
    );
}

/* ------------------------------------------------------------------ */
/* 07 · Every activity designed twice                                  */
/* ------------------------------------------------------------------ */

export function TwiceSection() {
    return (
        <CaseStudySection eyebrow="The live room" index={11} title="Every activity, designed twice">
            <p>
                In the live classroom the teacher and the student look at the same activity at the same moment, but they need different things
                from it. The teacher needs the answer and the control to reveal it; the student needs to answer without being told. So every
                interactive activity is drawn for both, side by side, from the same data.
            </p>
            <figure className="-mx-4 flex flex-col gap-3 md:-mx-10 lg:-mx-16">
                <div className="overflow-hidden rounded-xl border border-[var(--px-line)] bg-[#eef0f3]">
                    <div className="grid grid-cols-2 border-b border-black/5 bg-white/60 px-[1.3%] py-2 text-[11px] font-medium uppercase tracking-wider text-[#545866]">
                        <span className="px-[1.3%]">Teacher</span>
                        <span className="px-[1.3%]">Student</span>
                    </div>
                    <ZoomImage
                        src={`${IMG}/ds2-quiz.webp`}
                        alt="Quiz activity in two versions. Teacher: the correct answer in green, the student's wrong answer in red, and a Reveal answer button. Student: four neutral options and the message Answer submitted, waiting for your teacher."
                    />
                </div>
                <figcaption className="px-4 text-sm leading-relaxed text-[var(--px-dim)] md:px-10 lg:px-16">
                    Quiz. The teacher sees the right answer and the student’s choice first, and decides when to reveal it. The student only
                    sees that the answer was sent.
                </figcaption>
            </figure>
            <Board
                bleed
                src={`${IMG}/ds2-matching.webp`}
                alt="Matching activity in two versions. Teacher: each word with the correct meaning and the student's answer, wrong ones in red. Student: words and meanings to connect, with the connected pairs listed below."
                caption="Matching. Same component, same data. The teacher reads it as a marking sheet; the student plays it as a game."
            />
            <Board
                bleed
                src={`${IMG}/fx-fillblank.webp`}
                alt="Fill in the blank in two versions. Teacher: the sentence with the answers has and since in green chips. Student: the sentence in Spanish as a hint, the same sentence with two empty blanks, and a Check button."
                caption="Fill in the blank. The teacher sees the answers in place; the student gets the sentence in their own language as a hint, the gaps and one button, Check."
            />
        </CaseStudySection>
    );
}

/* ------------------------------------------------------------------ */
/* 08 · A design system for the vibecoding era                         */
/* ------------------------------------------------------------------ */

const LOOP = [
    { icon: Code2, title: 'Code holds the truth', text: 'Colours and components live in the code. Their inventory is exported from it, so Figma is reconciled against what users actually see.' },
    { icon: Figma, title: 'Figma holds the intent', text: 'Every component description names its file in the code and its rules, written so that a person or an agent reading the file gets the spec.' },
    { icon: Bot, title: 'Agents follow, and review', text: 'The agents’ own reference file carries the system’s rules as “avoid this, do this”, with the test that will fail. A design reviewer agent checks work against it when an issue asks for it.' },
    { icon: ShieldCheck, title: 'Tests catch the drift', text: '113 automated checks reject what slips through: low contrast, raw colours, hand-made copies, the retired orange button.' },
];

const BANNED = ['Gradient blobs and auroras', 'Badges that pulse for decoration', 'Grids of identical cards', 'Icons in coloured boxes as decoration', 'Everything centred'];

export function AgentsSection() {
    return (
        <CaseStudySection eyebrow="Design × AI" index={15} title="A design system that AI agents can follow">
            <p>
                In a product built with coding agents, the design system has a second audience. A teammate learns the system once; an agent meets
                it fresh every session. If the rules only live in my head, or only in Figma, the agent will guess, and its guesses are exactly
                the generic look the system exists to prevent. So I wrote the system for both readers.
            </p>
            <Diagram caption="How the system stays in one piece while agents write most of the code.">
                <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {LOOP.map((l, i) => (
                        <li key={l.title} className="flex max-w-none! flex-col gap-3 rounded-lg border border-[var(--px-line)] bg-[var(--px-bg)] p-4">
                            <div className="flex items-center justify-between">
                                <l.icon className="h-5 w-5 text-[#0563A8]" aria-hidden="true" />
                                <span className="font-pixel-label text-[11px] text-[var(--px-dim)]">{String(i + 1).padStart(2, '0')}</span>
                            </div>
                            <p className="max-w-none! font-medium text-[var(--px-ink)]">{l.title}</p>
                            <p className="max-w-none! text-sm leading-relaxed text-[var(--px-muted)]">{l.text}</p>
                        </li>
                    ))}
                </ol>
            </Diagram>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <figure className="flex flex-col gap-3">
                    <div className="flex h-full flex-col gap-3 rounded-xl border border-[#2c2c2c] bg-[#1e1e1e] p-5 text-[13px] leading-relaxed text-white/80">
                        <p className="flex items-center gap-2 text-xs text-white/50">
                            <Figma className="h-3.5 w-3.5" aria-hidden="true" /> Component description · AiGeneratorPanel
                        </p>
                        <p className="max-w-none!">
                            AI lesson generator, shown inside the lesson builder card above the blocks when “Generate with AI” is used.
                        </p>
                        <p className="max-w-none!">
                            Generating: the options are hidden, the button reads “Generating...” with a spinner, and a dashed box cycles
                            “Understanding topic and level…”, “Assembling the lesson timeline…”. The result is saved and the builder shows the real
                            activities.
                        </p>
                        <p className="max-w-none! font-mono text-[11px] text-[#0d99ff]">src/components/dashboard/lesson-builder/AiGeneratorPanel.tsx</p>
                    </div>
                    <figcaption className="text-sm leading-relaxed text-[var(--px-dim)]">
                        An excerpt of a real component description in the Figma file. It reads like a spec, and it points to the code.
                    </figcaption>
                </figure>
                <figure className="flex flex-col gap-3">
                    <div className="flex h-full flex-col gap-3 rounded-xl border border-[var(--px-line)] bg-[var(--px-panel)] p-5">
                        <p className="flex items-center gap-2 text-xs text-[var(--px-dim)]">
                            <Ban className="h-3.5 w-3.5" aria-hidden="true" /> Written into the system: do not
                        </p>
                        <ul className="flex flex-wrap gap-2">
                            {BANNED.map((b) => (
                                <li key={b} className="max-w-none! rounded-full border border-[var(--px-line)] bg-[var(--px-bg)] px-3 py-1 text-sm text-[var(--px-ink)] line-through decoration-[#b42318]/60">
                                    {b}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-auto max-w-none! text-sm leading-relaxed text-[var(--px-muted)]">
                            The patterns that make a screen look generated, named one by one so an agent cannot reach for them by default.
                        </p>
                    </div>
                    <figcaption className="text-sm leading-relaxed text-[var(--px-dim)]">
                        Taste, written down. The list came from rejecting these patterns in real reviews.
                    </figcaption>
                </figure>
            </div>

            <p>
                The design reviewer agent has two rules I am especially happy with. When it can open a browser or the Figma file, it must compare
                the rendered screen with the design instead of guessing from the code. And it must not invent a pattern the system does not
                have: if there is no rule for a case, it says so, and that gap comes back to me as a design decision.
            </p>
            <p>
                The result is the part I care about most in this era of vibecoding. Agents make building cheap; the system keeps the product
                from looking cheap. My job moved from drawing every screen to deciding the rules that every screen, drawn or generated, has to
                follow.
            </p>
        </CaseStudySection>
    );
}

/* ------------------------------------------------------------------ */
/* Next + CTA                                                          */
/* ------------------------------------------------------------------ */

const IMPACT = [
    { before: '2', after: '1', label: 'visual identity, from the landing page to the live room' },
    { before: '3', after: '1', label: 'colour map per meaning: one source each for level, activity and status' },
    { before: '37', after: '0', label: '!important rules fighting the components' },
    { before: '676', after: '4', label: 'hand-typed small font sizes, replaced by four named steps' },
    { before: '', after: '361', label: 'coloured texts moved to a readable ink' },
    { before: '', after: '113', label: 'automated checks in 5 test files guard the rules on every change' },
];

export function ImpactSection() {
    return (
        <CaseStudySection eyebrow="Impact" index={16} title="What changed, in numbers">
            <p>
                ilevar has no design team to survey, so I measured the system where it lives: in the code and in the Figma file. These numbers
                are counts, not estimates, and the system document keeps them dated.
            </p>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {IMPACT.map((m) => (
                    <li key={m.label} className="flex max-w-none! flex-col gap-2 rounded-xl border border-[var(--px-line)] bg-[var(--px-panel)] p-5">
                        <p className="max-w-none! font-pixel text-3xl font-semibold text-[var(--px-ink)]">
                            {m.before && (
                                <>
                                    <span className="text-[var(--px-dim)] line-through decoration-2">{m.before}</span>
                                    <ArrowRight className="mx-2 inline h-5 w-5 align-middle text-[var(--px-dim)]" aria-label="to" />
                                </>
                            )}
                            <CountUp value={m.after} />
                        </p>
                        <p className="max-w-none! text-sm leading-relaxed text-[var(--px-muted)]">{m.label}</p>
                    </li>
                ))}
            </ul>
            <p>
                On the Figma side the library reached 607 components and 1,426 variants, with every screen of the product drawn from it across
                22 pages. The part that numbers do not show: new screens, written by agents, now arrive looking like ilevar.
            </p>
        </CaseStudySection>
    );
}

const OPEN = [
    { title: 'Buttons still written by hand', text: '400 raw buttons in 147 files, next to 485 uses of the Button component. Some are legitimate; the audit of which ones has not been done.' },
    { title: 'One page shell for every page', text: 'Only 18 of 66 dashboard pages use the shared page header. The page shell is drawn in Figma for desktop and mobile; the migration is next.' },
    { title: 'Page titles in 7 styles', text: '57 page titles use seven different sizes and weights. A test will enforce one scale once the migration lands, not before, so it does not break everything at once.' },
    { title: 'Measure the AI check', text: 'Track how often the blind check catches a wrong answer key on real homework.' },
];

const LESSONS = [
    { title: 'Names make design decisions', text: 'Nobody chose a second primary button. A colour stored under the wrong name did. Naming is design work.' },
    { title: 'A test that passes empty is worse than none', text: 'I broke every rule on purpose to see its test fail. Two of them passed anyway, and only that check revealed it.' },
    { title: 'Write for the reader who forgets', text: 'An agent meets the system fresh every session. Rules written for that reader turned out clearer for people too.' },
];

export function NextSection() {
    return (
        <CaseStudySection eyebrow="What is open" index={17} title="What is still open, and what I learned">
            <p>
                A design system is never finished, and pretending otherwise is the fastest way to lose a team’s trust. This is what is still
                open, with the same honesty as the rest of the system document.
            </p>
            <ol className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {OPEN.map((n, i) => (
                    <li key={n.title} className="flex max-w-none! flex-col gap-2 rounded-xl border border-[var(--px-line)] bg-[var(--px-panel)] p-5">
                        <span className="font-pixel-label text-[11px] text-[var(--px-dim)]">{String(i + 1).padStart(2, '0')}</span>
                        <p className="max-w-none! font-medium text-[var(--px-ink)]">{n.title}</p>
                        <p className="max-w-none! text-sm leading-relaxed text-[var(--px-muted)]">{n.text}</p>
                    </li>
                ))}
            </ol>
            <h3 className="mt-4 text-2xl">Three lessons I take to the next team</h3>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {LESSONS.map((l) => (
                    <li key={l.title} className="flex max-w-none! flex-col gap-2 border-l-2 border-[#0563A8] pl-4">
                        <p className="max-w-none! font-medium text-[var(--px-ink)]">{l.title}</p>
                        <p className="max-w-none! text-sm leading-relaxed text-[var(--px-muted)]">{l.text}</p>
                    </li>
                ))}
            </ul>
        </CaseStudySection>
    );
}

export function CallToActionSection() {
    return (
        <section className="flex flex-col items-start gap-6 border-t border-[var(--px-line)] pt-12">
            <h2 className="text-3xl md:text-4xl">Design that holds up at AI speed</h2>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                I design systems in Figma that survive contact with fast teams and coding agents: clear decisions, every state drawn, and rules
                written where both people and machines will follow them. If your team is building that way, let’s talk.
            </p>
            <div className="flex flex-wrap gap-3">
                <a href="https://calendly.com/eeliasricardoo" target="_blank" rel="noopener noreferrer" className="px-btn px-btn--primary">
                    Schedule a call
                    <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <a href="/portfolio/sfmc-magic-builder" className="px-btn">
                    Next case: EmailFlow Pro <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
            </div>
        </section>
    );
}
