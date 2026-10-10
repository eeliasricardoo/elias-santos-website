'use client';

import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react';
import { ArrowRight, Check, Copy, FileText, Github, Linkedin, Volume2, VolumeX } from 'lucide-react';
import { STORY_COMPANIES, STORY_IDENTITY, STORY_PROJECTS, STORY_STATS, PROJECT_ACCENTS } from '@/components/landing/story-data';
import { ProjectWireframe } from '@/components/portfolio/ui';
import { ContactModal } from '@/components/home/get-in-touch/ContactModal';
import { useRetroSound } from '@/hooks/useRetroSound';
import { Mascot } from './Mascot';
import { mascotReact } from './mascot-bus';
import { DepixelPortrait, OverlookScene, PixelScene } from './scenes';
import { PostsShelf } from './PostsShelf';
import { Clouds, Petals, PixelSun, PixelTitle, Stroke } from './hero-fx';
import { NewTab, PixelFooter, PixelHeader, navLinkClass } from './PixelChrome';
import { motionOff, useMotionOff } from './motion-prefs';
import { CHARACTER_STATS, HERO_INTRO, INVENTORY, QUEST_LINES } from './pixel-copy';

const CALENDLY = 'https://calendly.com/eeliasricardoo';
const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

/** Adds `.is-in` to every `.px-reveal` once it scrolls into view. */
function useReveal() {
    useEffect(() => {
        const io = new IntersectionObserver(
            (entries) =>
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add('is-in');
                        io.unobserve(e.target);
                    }
                }),
            { rootMargin: '0px 0px -10% 0px' },
        );
        document.querySelectorAll('.px-reveal').forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);
}

function Typewriter({ text, sound, startDelay = 500 }: { text: string; sound?: () => void; startDelay?: number }) {
    const reduce = useMotionOff();
    const [n, setN] = useState(0);
    const done = reduce || n >= text.length;

    useEffect(() => {
        if (reduce) return;
        if (n >= text.length) return;
        const ch = text[n];
        const delay = n === 0 ? startDelay : /[.,—]/.test(ch) ? 160 : 22;
        const t = window.setTimeout(() => {
            setN((v) => v + 1);
            if (ch !== ' ' && n % 2 === 0) sound?.();
        }, delay);
        return () => window.clearTimeout(t);
    }, [n, text, reduce, sound, startDelay]);

    return (
        // Clicking skips the typing (mouse nicety only — assistive tech always gets the full text).
        <p onClick={() => setN(text.length)} className="relative">
            {/* Full text reserves the space (no layout shift) and is what assistive tech reads. */}
            <span className="invisible block" aria-hidden="true">
                {text}
            </span>
            <span className="absolute inset-0" aria-hidden="true">
                {done ? text : text.slice(0, n)}
                {!done && <span className="px-caret" />}
            </span>
            <span className="sr-only">{text}</span>
        </p>
    );
}

function SectionHeading({ index, label, title, children }: { index: string; label: string; title: string; children?: React.ReactNode }) {
    return (
        <div className="px-reveal mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col items-start gap-5">
                <p className="px-sign px-3 py-2 font-pixel-label text-[11px]">
                    {index} · {label}
                </p>
                <h2 className="text-4xl sm:text-5xl md:text-6xl">
                    <Stroke text={title} />
                </h2>
            </div>
            {children && <div className="max-w-sm text-sm leading-relaxed text-[var(--px-muted)] md:text-right">{children}</div>}
        </div>
    );
}

export function PixelHome() {
    const [copied, setCopied] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);
    const [soundOn, setSoundOn] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);
    const { playHover, playClick, playKeyPress } = useRetroSound();
    useReveal();

    useEffect(() => {
        try {
            setSoundOn(localStorage.getItem('er-sound') === '1');
        } catch {
            /* ignore */
        }
    }, []);

    const sfx = useCallback(
        (kind: 'hover' | 'click' | 'key') => {
            if (!soundOn) return;
            if (kind === 'hover') playHover();
            else if (kind === 'click') playClick();
            else playKeyPress();
        },
        [soundOn, playHover, playClick, playKeyPress],
    );
    const typeSound = useCallback(() => sfx('key'), [sfx]);

    // Global click / hover blips for anything interactive, when sound is on.
    useEffect(() => {
        const root = rootRef.current;
        if (!root || !soundOn) return;
        const sel = 'a, button';
        const onOver = (e: Event) => (e.target as HTMLElement).closest(sel) && sfx('hover');
        const onClick = (e: Event) => (e.target as HTMLElement).closest(sel) && sfx('click');
        root.addEventListener('pointerover', onOver);
        root.addEventListener('click', onClick);
        return () => {
            root.removeEventListener('pointerover', onOver);
            root.removeEventListener('click', onClick);
        };
    }, [soundOn, sfx]);

    // ↑↑↓↓←→←→BA
    useEffect(() => {
        let i = 0;
        const onKey = (e: KeyboardEvent) => {
            i = e.key === KONAMI[i] || e.key.toLowerCase() === KONAMI[i] ? i + 1 : e.key === KONAMI[0] ? 1 : 0;
            if (i === KONAMI.length) {
                i = 0;
                mascotReact({ mood: 'scream', say: 'CHEAT CODE ACCEPTED. +30 lives. You clearly read docs.', hold: 2200, shake: true });
                const el = rootRef.current;
                if (el && !motionOff()) {
                    el.classList.remove('px-page-shake');
                    void el.offsetWidth;
                    el.classList.add('px-page-shake');
                }
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    const toggleSound = () => {
        const next = !soundOn;
        setSoundOn(next);
        try {
            localStorage.setItem('er-sound', next ? '1' : '0');
        } catch {
            /* ignore */
        }
        if (next) playClick();
        mascotReact(next ? { mood: 'wink', say: 'Sound on. Chiptune UI, as nature intended.', announce: true } : { mood: 'idle2', say: 'Muted.', announce: true });
    };

    const copyEmail = () => {
        navigator.clipboard.writeText(STORY_IDENTITY.email);
        setCopied(true);
        mascotReact({ mood: 'wink', say: 'Email address copied.', announce: true });
        window.setTimeout(() => setCopied(false), 2000);
    };

    const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    const [featured, ...rest] = STORY_PROJECTS;

    return (
        <div ref={rootRef} className="px-root min-h-screen overflow-x-clip">
            <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

            <PixelHeader
                logoHref="#"
                onLogoClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
            >
                {[
                    ['work', 'Work'],
                    ['posts', 'Posts'],
                    ['about', 'About'],
                ].map(([id, label]) => (
                    <button key={id} type="button" onClick={() => scrollTo(id)} className={navLinkClass}>
                        {label}
                    </button>
                ))}
                <a href="/portfolio" className={`${navLinkClass} hidden md:inline`}>
                    All work
                </a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={`${navLinkClass} hidden md:inline`}>
                    Resume
                    <NewTab />
                </a>
                <button
                    type="button"
                    onClick={toggleSound}
                    aria-pressed={soundOn}
                    aria-label="Interface sounds"
                    className="grid h-9 w-9 place-items-center hover:text-[var(--px-gold)]"
                >
                    {soundOn ? <Volume2 className="h-4 w-4" aria-hidden="true" /> : <VolumeX className="h-4 w-4" aria-hidden="true" />}
                </button>
                <button type="button" onClick={() => setContactOpen(true)} className="px-btn px-btn--primary px-btn--sm ml-2 hidden sm:inline-flex">
                    Contact
                </button>
            </PixelHeader>

            <main id="main-content">
                {/* ——— Hero: open sky ——— */}
                <section className="px-sky relative overflow-hidden" id="top">
                    <Clouds />
                    <Petals />
                    <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-4 pb-16 pt-12 sm:px-6 md:px-12 md:pt-20 lg:grid-cols-12 lg:gap-12 lg:pb-24">
                        <div className="flex flex-col items-start gap-7 lg:col-span-6">
                            <p className="px-sign px-swing-in flex items-center gap-2 px-3 py-2 font-pixel-label text-[11px]">
                                <span className="px-dot" /> Open to senior roles · Remote from Brazil
                            </p>

                            <h1 className="text-[2.5rem] sm:text-6xl lg:text-[4rem]">
                                <span className="sr-only">Human intention, amplified by AI.</span>
                                <PixelTitle lines={[{ text: 'Human intention,' }, { text: 'amplified by AI.', gold: true }]} startDelay={350} />
                            </h1>

                            <div
                                className="px-dialog px-rise mt-3 w-full px-6 pb-8 pt-7 font-pixel text-lg leading-snug sm:text-xl"
                                style={{ '--d': '1450ms' } as CSSProperties}
                            >
                                <span className="px-dialog__name">ELIAS</span>
                                <Typewriter text={HERO_INTRO} sound={typeSound} startDelay={1900} />
                                <span className="px-next" aria-hidden="true" />
                            </div>

                            <div className="mt-2 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:flex-wrap">
                                <button
                                    type="button"
                                    onClick={() => scrollTo('work')}
                                    className="px-btn px-btn--primary px-rise"
                                    style={{ '--d': '1700ms' } as CSSProperties}
                                    onMouseEnter={() => mascotReact({ mood: 'wink', hold: 900 })}
                                >
                                    ▶ View work
                                </button>
                                <button type="button" onClick={copyEmail} className="px-btn px-rise" style={{ '--d': '1800ms' } as CSSProperties}>
                                    {copied ? <Check className="h-3.5 w-3.5 text-[var(--px-leaf)]" /> : <Copy className="h-3.5 w-3.5" />}
                                    {copied ? 'Copied' : 'Copy email'}
                                </button>
                                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-btn px-rise" style={{ '--d': '1900ms' } as CSSProperties}>
                                    <FileText className="h-3.5 w-3.5" aria-hidden="true" /> Resume
                                    <NewTab />
                                </a>
                            </div>
                        </div>

                        <div className="relative lg:col-span-6">
                            <PixelSun className="-right-16 -top-20 hidden sm:block" />
                            <div className="px-rise relative" style={{ '--d': '200ms' } as CSSProperties}>
                                <OverlookScene />
                            </div>
                        </div>
                    </div>

                    {/* Stats on signboards */}
                    <div className="relative mx-auto max-w-6xl px-4 pb-14 sm:px-6 md:px-12">
                        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                            {STORY_STATS.map((s, k) => (
                                <div key={s.label} className="px-sign px-rise px-5 py-4" style={{ '--d': `${2100 + k * 120}ms` } as CSSProperties}>
                                    <dt className="sr-only">{s.label}</dt>
                                    <dd className="font-pixel text-2xl font-semibold text-[var(--px-gold)]">{s.value}</dd>
                                    <dd className="mt-1 text-xs leading-snug text-[var(--px-on-sign)]/85">{s.label}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                    <div className="px-grass" aria-hidden="true" />
                </section>

                {/* ——— Companies ——— */}
                <section aria-label="Companies I've shipped for" className="bg-[var(--px-leaf)]">
                    <div className="bg-[var(--px-panel)]">
                        <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 md:px-12">
                            <p className="font-pixel-label text-[11px] text-[var(--px-dim)]">Shipped for</p>
                        </div>
                        <div className="px-marquee-wrap overflow-hidden py-10 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
                            <ul className="px-marquee items-center">
                                {[...STORY_COMPANIES, ...STORY_COMPANIES].map((c, i) => (
                                    <li key={`${c.name}-${i}`} className="mx-10 flex h-10 w-40 shrink-0 items-center justify-center" aria-hidden={i >= STORY_COMPANIES.length}>
                                        <img
                                            src={c.logo}
                                            alt={i < STORY_COMPANIES.length ? c.name : ''}
                                            loading="lazy"
                                            className="max-h-full max-w-full object-contain"
                                            style={{
                                                transform: c.name === 'Serasa Experian' ? 'scale(1.7)' : c.scale ? `scale(${c.scale})` : undefined,
                                            }}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="h-2 bg-[var(--px-leaf-dark)]" />
                </section>

                {/* ——— Quest log (work) ——— */}
                <section
                    id="work"
                    data-mascot-line="Pick a quest. Start with 01 — it's my favourite."
                    data-mascot-mood="smirk"
                    className="scroll-mt-20 py-20 md:py-28"
                >
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-12">
                        <SectionHeading index="01" label="Quest log" title="Selected work">
                            {STORY_PROJECTS.length} cases. Each one starts with a real problem and ends in production.
                        </SectionHeading>

                        <QuestCard project={featured} accent={PROJECT_ACCENTS[0]} featured />

                        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2">
                            {rest.map((p, i) => (
                                <QuestCard key={p.index} project={p} accent={PROJECT_ACCENTS[(i + 1) % PROJECT_ACCENTS.length]} />
                            ))}
                        </div>

                        <div className="mt-16 flex justify-center">
                            <a href="/portfolio" className="px-btn px-btn--sign">
                                Open the full archive <ArrowRight className="h-3.5 w-3.5" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* ——— Posts ——— */}
                <section
                    id="posts"
                    data-mascot-line="I draw these to think out loud. They're in Portuguese — the drawings help."
                    data-mascot-mood="wink"
                    className="px-sky relative scroll-mt-20 py-20 md:py-28"
                >
                    <Clouds count={3} />
                    <div className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-12">
                        <SectionHeading index="02" label="Side quests" title="Field notes">
                            Pixel comics about design, research and AI that I publish on Instagram and LinkedIn. Click one to read it.
                        </SectionHeading>
                        <PostsShelf />
                    </div>
                </section>
                <div className="px-grass bg-[var(--px-bg)]" aria-hidden="true" />

                {/* ——— About / character sheet ——— */}
                <section
                    id="about"
                    data-mascot-line="Character sheet. No made-up skill bars, promise."
                    data-mascot-mood="smirk"
                    className="scroll-mt-20 bg-[var(--px-bg-leaf)] py-20 md:py-28"
                >
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-12">
                        <SectionHeading index="03" label="Character sheet" title="Design that ships." />

                        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">
                            <div className="px-reveal flex flex-col gap-8 lg:col-span-4">
                                <DepixelPortrait />
                                <dl className="px-frame divide-y-2 divide-[var(--px-line)]/15 text-sm">
                                    {CHARACTER_STATS.map((s) => (
                                        <div key={s.label} className="flex items-baseline justify-between gap-4 px-4 py-3">
                                            <dt className="font-pixel-label text-[11px] text-[var(--px-dim)]">{s.label}</dt>
                                            <dd className="text-right text-[var(--px-ink)]">{s.value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>

                            <div className="flex flex-col gap-10 lg:col-span-8">
                                <div className="px-reveal px-dialog space-y-5 px-6 py-6 text-base leading-relaxed md:text-lg">
                                    <span className="px-dialog__name">ABOUT</span>
                                    <p>
                                        I started in product design and kept moving closer to implementation. My best work happens{' '}
                                        <strong className="font-semibold">between design and engineering</strong> — understanding the user problem,
                                        shaping the interaction, building the system behind the interface, and shipping it with the team. That's what led
                                        me to UX Engineering.
                                    </p>
                                    <p>
                                        AI is part of my toolkit for prototyping and workflow automation. The responsibility stays human: make the problem
                                        clearer, the interface more useful, and the implementation more resilient.
                                    </p>
                                </div>

                                <div className="px-reveal">
                                    <p className="px-sign mb-6 inline-block px-3 py-2 font-pixel-label text-[11px]">Inventory</p>
                                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                        {INVENTORY.map((group) => (
                                            <div key={group.slot} className="px-frame p-4">
                                                <p className="mb-3 font-pixel text-base font-semibold text-[var(--px-ink)]">{group.slot}</p>
                                                <ul className="flex flex-wrap gap-2.5">
                                                    {group.items.map((item) => (
                                                        <li key={item} className="px-chip px-chip--leaf">
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="px-reveal">
                                    <PixelScene
                                        src="/pixel/utopia-street.webp"
                                        alt="Pixel-art Elias waving as he walks down a green street market with neighbours, a friendly robot carrying vegetables and a cat."
                                        width={992}
                                        height={1015}
                                        label="NEIGHBOURHOOD.PNG"
                                        caption="TECH THAT WORKS FOR PEOPLE"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ——— Continue? (contact) ——— */}
                <ContinueScreen onContact={() => setContactOpen(true)} onCopy={copyEmail} copied={copied} />
            </main>

            <PixelFooter grass={false} />

            <Mascot />
        </div>
    );
}

function QuestCard({ project, accent, featured = false }: { project: (typeof STORY_PROJECTS)[number]; accent: string; featured?: boolean }) {
    const line = QUEST_LINES[project.index];
    return (
        <article
            className={`px-quest px-reveal group grid grid-cols-1 gap-8 ${featured ? 'lg:grid-cols-12 lg:items-center lg:gap-12' : ''}`}
            style={{ '--quest-accent': accent } as CSSProperties}
            onMouseEnter={() => line && mascotReact({ ...line, hold: 1400 })}
        >
            <a
                href={project.link}
                className={`px-frame px-frame-drop block overflow-hidden ${featured ? 'lg:col-span-7' : ''}`}
                tabIndex={-1}
                aria-hidden="true"
            >
                <div className="px-bar flex items-center justify-between px-3 py-2 font-pixel-label text-[11px]">
                    <span>QUEST {project.index}</span>
                    {featured && <span className="text-[var(--px-gold)]">★ Featured</span>}
                </div>
                <div className="relative aspect-[16/10] bg-[#0a0a0b]">
                    <ProjectWireframe title={project.title} accent={accent} />
                </div>
            </a>

            <div className={`flex flex-col items-start gap-4 ${featured ? 'lg:col-span-5' : ''}`}>
                {project.metric && (
                    <p className="px-chip !bg-[var(--px-gold)] !text-[11px]">
                        Loot ▸ {project.metric}
                    </p>
                )}
                <h3 className={`text-[var(--px-ink)] ${featured ? 'text-4xl md:text-5xl' : 'text-3xl'}`}>{project.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--px-muted)] md:text-base">{project.description}</p>
                <ul className="flex flex-wrap gap-2.5">
                    {project.tags.map((t) => (
                        <li key={t} className="px-chip px-chip--leaf">
                            {t}
                        </li>
                    ))}
                </ul>
                <div className="mt-3">
                    <a href={project.link} className="px-btn px-btn--sign">
                        ▶ Start case study
                    </a>
                </div>
            </div>
        </article>
    );
}

function ContinueScreen({ onContact, onCopy, copied }: { onContact: () => void; onCopy: () => void; copied: boolean }) {
    const reduce = useMotionOff();
    const ref = useRef<HTMLElement>(null);
    const [count, setCount] = useState(9);
    const [active, setActive] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(([e]) => setActive(e.isIntersecting), { threshold: 0.4 });
        io.observe(el);
        return () => io.disconnect();
    }, []);

    useEffect(() => {
        if (!active || reduce) return;
        const t = window.setTimeout(() => {
            if (count === 1) mascotReact({ mood: 'cry', say: "Don't let it hit zero…", hold: 1600 });
            if (count === 0) {
                mascotReact({ mood: 'wink', say: 'Free continue. You get infinite ones here.', hold: 1400 });
                setCount(9);
            } else {
                setCount(count - 1);
            }
        }, 1000);
        return () => window.clearTimeout(t);
    }, [active, count, reduce]);


    return (
        <section
            ref={ref}
            id="contact"
            data-mascot-line="Your move."
            data-mascot-mood="smirk"
            className="relative scroll-mt-20 overflow-hidden"
        >
            <img
                src="/pixel/utopia-community.webp"
                alt=""
                width={992}
                height={793}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-[30%_35%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,38,63,0.1),rgba(22,38,63,0.45))] lg:bg-[linear-gradient(90deg,transparent_35%,rgba(22,38,63,0.45))]" aria-hidden="true" />

            <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-24 sm:px-6 md:px-12 md:py-32 lg:items-end">
                <div className="px-sign flex w-full max-w-2xl flex-col items-center gap-6 px-6 py-10 text-center sm:px-12 lg:max-w-[560px]">
                    <p className="font-pixel-label text-[11px] text-[var(--px-gold)]">04 · Get in touch</p>
                    <div className="flex items-end gap-5" aria-hidden="true">
                        <Stroke text="CONTINUE?" className="font-pixel text-5xl sm:text-7xl" />
                        {!reduce && <Stroke key={count} text={String(count)} gold className="px-countdown is-tick font-pixel text-6xl sm:text-8xl" />}
                    </div>
                    <h2 className="text-2xl text-white sm:text-3xl">Let's build something exceptional.</h2>
                    <p className="max-w-xl text-base leading-relaxed text-[var(--px-on-sign)]/85">
                        I'm open to Senior Product Designer, UX Engineer and Design Engineer roles where product design and frontend engineering
                        meet.
                    </p>

                    <div className="mt-2 flex w-full flex-col justify-center gap-5 sm:w-auto sm:flex-row sm:flex-wrap">
                        <button type="button" onClick={onContact} className="px-btn px-btn--primary">
                            ▶ Yes — send a message
                        </button>
                        <button type="button" onClick={onCopy} className="px-btn px-btn--cream">
                            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                            {copied ? 'Copied' : STORY_IDENTITY.email}
                        </button>
                        <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="px-btn px-btn--cream">
                            Schedule a call
                            <NewTab />
                        </a>
                    </div>

                    <div className="mt-2 flex items-center gap-6 font-pixel-label text-[11px]">
                        <a href={STORY_IDENTITY.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[var(--px-gold)]">
                            <Github className="h-3.5 w-3.5" aria-hidden="true" /> GitHub
                            <NewTab />
                        </a>
                        <a href={STORY_IDENTITY.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[var(--px-gold)]">
                            <Linkedin className="h-3.5 w-3.5" aria-hidden="true" /> LinkedIn
                            <NewTab />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
