'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, Check, Copy, Github, Linkedin } from 'lucide-react';
import { STORY_COMPANIES, STORY_IDENTITY, STORY_PROJECTS, PROJECT_ACCENTS, type StoryProject } from '@/components/landing/story-data';
import { mascotReact } from './mascot-bus';
import { CaseCover } from './CaseCover';
import { WritingCover } from './WritingCover';
import { HeroBanner } from './HeroBanner';
import { NewTab, PixelFooter, PixelHeader, navLinkClass } from './PixelChrome';
import { ABOUT_FACTS, CASE_LINES, HERO_INTRO, WRITING_ARTICLES } from './pixel-copy';

const CALENDLY = 'https://calendly.com/eeliasricardoo';
/** The cases shown on the home page, in order. Everything else lives in /portfolio. */
const HOME_CASES = ['02', '01', '03', '08', '09'];

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
            { rootMargin: '200px 0px 200px 0px' },
        );
        document.querySelectorAll('.px-reveal').forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight + 200) {
                el.classList.add('is-in');
            } else {
                io.observe(el);
            }
        });
        return () => io.disconnect();
    }, []);
}

function SectionHeading({ index, label, title, children }: { index: string; label: string; title: string; children?: React.ReactNode }) {
    return (
        <div className="mb-6 sm:mb-10 md:mb-14 flex flex-col gap-2.5 sm:gap-5 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col items-start gap-2 sm:gap-4">
                <p className="font-pixel-label text-[11px] text-[var(--px-dim)]">
                    {index} · {label}
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl">{title}</h2>
            </div>
            {children && <div className="max-w-sm text-sm leading-relaxed text-[var(--px-muted)] md:text-right">{children}</div>}
        </div>
    );
}

export function PixelHome() {
    const [copied, setCopied] = useState(false);
    const writingScrollRef = useRef<HTMLDivElement>(null);
    useReveal();

    const scrollWriting = (direction: 'left' | 'right') => {
        if (writingScrollRef.current) {
            const firstCard = writingScrollRef.current.firstElementChild as HTMLElement | null;
            const scrollAmount = firstCard ? firstCard.offsetWidth + 20 : 360;
            writingScrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    const copyEmail = () => {
        navigator.clipboard.writeText(STORY_IDENTITY.email);
        setCopied(true);
        mascotReact({ mood: 'wink', say: 'Email address copied.', announce: true });
        window.setTimeout(() => setCopied(false), 2000);
    };

    const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    const cases = HOME_CASES.map((index) => STORY_PROJECTS.find((p) => p.index === index)).filter((p): p is StoryProject => Boolean(p));
    const [featured, ...rest] = cases;

    return (
        <div className="px-root min-h-screen overflow-x-clip">
            <PixelHeader
                logoHref="#"
                onLogoClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
            >
                <button type="button" onClick={() => scrollTo('work')} className={navLinkClass}>
                    Work
                </button>
                <button type="button" onClick={() => scrollTo('about')} className={navLinkClass}>
                    About
                </button>
                <button type="button" onClick={() => scrollTo('writing')} className={`${navLinkClass} hidden md:inline-block`}>
                    Writing
                </button>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={`${navLinkClass} hidden md:inline-block`}>
                    Resume
                    <NewTab />
                </a>
                <a
                    href={CALENDLY}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-btn px-btn--primary !px-2.5 !py-1 text-xs sm:text-sm sm:!px-3 sm:!py-1.5 ml-1 sm:ml-2 inline-flex shrink-0"
                >
                    Contact
                </a>
            </PixelHeader>

            <main id="main-content">
                {/* ——— Hero ——— */}
                <section id="top" className="pb-5 sm:pb-12 md:pb-[80px]">
                    {/* Full-width pixel sky banner with voxel field */}
                    <HeroBanner />

                    {/* Profile content */}
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-12">
                        {/* Overlapping circular avatar */}
                        <div className="-mt-12 sm:-mt-14 md:-mt-16 mb-4 sm:mb-5">
                            <div className="relative inline-block">
                                <img
                                    src="/optimized/profile-photo-1080w.webp"
                                    alt="Elias Ricardo"
                                    width={1080}
                                    height={1080}
                                    fetchPriority="high"
                                    className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 rounded-full object-cover ring-4 ring-white shadow-lg bg-white"
                                />
                            </div>
                        </div>

                        {/* Main Hero Info */}
                        <div className="flex max-w-4xl flex-col items-start gap-3 sm:gap-4">
                            <div>
                                <p className="text-xl sm:text-2xl font-semibold text-[var(--px-ink)]">Elias Ricardo</p>
                                <p className="font-pixel-label text-xs sm:text-sm text-[var(--px-dim)] mt-0.5">
                                    Senior Product Designer & UX Engineer
                                </p>
                            </div>

                            <h1 className="text-[1.75rem] leading-[1.18] sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-[var(--px-ink)]">
                                Human intention, <span className="whitespace-nowrap">amplified by AI.</span>
                            </h1>

                            <p className="max-w-2xl text-[15px] sm:text-lg leading-relaxed text-[var(--px-muted)]">
                                {HERO_INTRO}
                            </p>

                            <div className="mt-2 flex w-full sm:w-auto items-center gap-3">
                                <button
                                    type="button"
                                    onClick={() => scrollTo('work')}
                                    className="px-btn px-btn--primary flex-1 sm:flex-initial justify-center text-center"
                                    onMouseEnter={() => mascotReact({ mood: 'wink', hold: 900 })}
                                >
                                    View work
                                </button>
                                <a
                                    href={CALENDLY}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-btn flex-1 sm:flex-initial justify-center text-center"
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ——— Companies ——— */}
                <section aria-label="Companies I've worked with" className="border-y border-[var(--px-line)] bg-[var(--px-bg-2)]">
                    <div className="mx-auto max-w-6xl px-4 pt-3.5 sm:pt-8 sm:px-6 md:px-12">
                        <p className="font-pixel-label text-[11px] text-[var(--px-dim)]">Worked with</p>
                    </div>
                    <div className="px-marquee-wrap overflow-hidden py-3.5 sm:py-8 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
                        <ul className="px-marquee items-center">
                            {[...STORY_COMPANIES, ...STORY_COMPANIES].map((c, i) => (
                                <li key={`${c.name}-${i}`} className="mx-6 sm:mx-10 flex h-10 w-36 sm:w-40 shrink-0 items-center justify-center" aria-hidden={i >= STORY_COMPANIES.length}>
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
                </section>

                {/* ——— Work ——— */}
                <section
                    id="work"
                    data-mascot-line="Start with the first one — it's my favourite."
                    data-mascot-mood="smirk"
                    className="scroll-mt-16 sm:scroll-mt-20 pt-6 pb-14 sm:py-20 md:py-28"
                >
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-12">
                        <SectionHeading index="01" label="Work" title="Selected work" />

                        <CaseCard project={featured} accent={PROJECT_ACCENTS[0]} featured />

                        <div className="mt-10 sm:mt-16 grid grid-cols-1 gap-x-10 gap-y-10 sm:gap-y-14 md:grid-cols-2">
                            {rest.map((p, i) => (
                                <CaseCard key={p.index} project={p} accent={PROJECT_ACCENTS[(i + 1) % PROJECT_ACCENTS.length]} />
                            ))}
                        </div>

                        <div className="mt-10 sm:mt-16 flex justify-center">
                            <a href="/portfolio" className="px-btn w-full sm:w-auto justify-center text-center">
                                See all {STORY_PROJECTS.length} case studies <ArrowRight className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* ——— About ——— */}
                <section
                    id="about"
                    data-mascot-line="The short version of me. No skill bars, promise."
                    data-mascot-mood="smirk"
                    className="scroll-mt-16 sm:scroll-mt-20 border-y border-[var(--px-line)] bg-[var(--px-bg-2)] py-14 sm:py-20 md:py-28"
                >
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-12">
                        <SectionHeading index="02" label="About" title="Design that ships." />

                        <div className="px-reveal grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-12">
                            <div className="space-y-4 sm:space-y-5 text-base sm:text-lg leading-relaxed text-[var(--px-ink)] lg:col-span-7">
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

                            <dl className="self-start border-t border-[var(--px-line)] text-sm lg:col-span-4 lg:col-start-9">
                                {ABOUT_FACTS.map((f) => (
                                    <div key={f.label} className="flex items-baseline justify-between gap-4 border-b border-[var(--px-line)] py-2.5 sm:py-3">
                                        <dt className="font-pixel-label text-[11px] text-[var(--px-dim)]">{f.label}</dt>
                                        <dd className="text-right text-[var(--px-ink)]">{f.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </section>

                {/* ——— 03 Writing ——— */}
                <section
                    id="writing"
                    data-mascot-line="Articles & case notes on Medium."
                    data-mascot-mood="wink"
                    className="scroll-mt-16 sm:scroll-mt-20 border-b border-[var(--px-line)] bg-[var(--px-bg)] py-14 sm:py-20 md:py-28"
                >
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-12">
                        <div className="mb-6 sm:mb-10 md:mb-12 flex flex-col gap-3 sm:gap-5 md:flex-row md:items-end md:justify-between">
                            <div className="flex flex-col items-start gap-2 sm:gap-4">
                                <p className="font-pixel-label text-[11px] text-[var(--px-dim)]">03 · Writing</p>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl">Essays & case notes</h2>
                            </div>
                            <div className="flex items-center justify-between gap-4 md:justify-end">
                                <p className="hidden max-w-xs text-sm leading-relaxed text-[var(--px-muted)] md:block md:text-right">
                                    Thoughts on AI, interaction design, and the human craft behind digital systems.
                                </p>
                                <div className="flex items-center gap-2">
                                    <button
                                        type="button"
                                        onClick={() => scrollWriting('left')}
                                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--px-line)] bg-[var(--px-panel)] text-[var(--px-ink)] transition-colors hover:border-[var(--px-ink)] hover:bg-[var(--px-bg-2)]"
                                        aria-label="Previous articles"
                                    >
                                        <ArrowLeft className="h-4 w-4" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => scrollWriting('right')}
                                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--px-line)] bg-[var(--px-panel)] text-[var(--px-ink)] transition-colors hover:border-[var(--px-ink)] hover:bg-[var(--px-bg-2)]"
                                        aria-label="Next articles"
                                    >
                                        <ArrowRight className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Horizontal Carousel Track */}
                        <div
                            ref={writingScrollRef}
                            className="relative flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                        >
                            {WRITING_ARTICLES.map((article) => (
                                <a
                                    key={article.url}
                                    href={article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-work group flex flex-col justify-between w-[300px] sm:w-[350px] md:w-[380px] shrink-0 snap-start border border-[var(--px-line)] bg-[var(--px-panel)] rounded-xl overflow-hidden transition-all duration-200 hover:border-[var(--px-ink)] hover:shadow-lg"
                                    onMouseEnter={() => mascotReact({ mood: 'smirk', say: 'Read on Medium.', hold: 1200 })}
                                >
                                    <WritingCover article={article} />

                                    {/* Card Content */}
                                    <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                                        <div className="flex flex-col gap-2.5">
                                            <div className="flex items-center justify-between text-[11px] font-pixel-label text-[var(--px-dim)]">
                                                <span>{article.tag}</span>
                                                <span>{article.date} · {article.readTime}</span>
                                            </div>
                                            <h3 className="text-base sm:text-lg font-medium leading-snug text-[var(--px-ink)] group-hover:text-[var(--px-ink)] transition-colors line-clamp-2">
                                                {article.title}
                                            </h3>
                                            <p className="text-xs sm:text-sm leading-relaxed text-[var(--px-muted)] line-clamp-3">
                                                {article.description}
                                            </p>
                                        </div>

                                        <div className="mt-4 flex items-center justify-between text-xs sm:text-sm font-medium text-[var(--px-ink)] pt-3.5 border-t border-[var(--px-line)]/50 group-hover:border-[var(--px-ink)]/20 transition-colors">
                                            <span className="flex items-center gap-1.5">
                                                <span>Read on Medium</span>
                                                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                                                <NewTab />
                                            </span>
                                            <span className="rounded bg-[var(--px-bg-2)] px-2 py-0.5 font-mono text-[10px] text-[var(--px-dim)] border border-[var(--px-line)]">
                                                {article.language}
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-[var(--px-line)] pt-6">
                            <span className="text-xs sm:text-sm text-[var(--px-muted)]">
                                10 stories and UX case studies published on Medium
                            </span>
                            <a
                                href={STORY_IDENTITY.medium}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[var(--px-ink)] underline decoration-[var(--px-line)] underline-offset-4 hover:decoration-[var(--px-ink)]"
                            >
                                View all stories on Medium
                                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                                <NewTab />
                            </a>
                        </div>
                    </div>
                </section>

                {/* ——— Contact ——— */}
                <ContactSection onCopy={copyEmail} copied={copied} />
            </main>

            <PixelFooter />
        </div>
    );
}

function CaseCard({ project, accent, featured = false }: { project: StoryProject; accent: string; featured?: boolean }) {
    const line = CASE_LINES[project.index];
    return (
        <article
            className={`px-work ${featured ? '' : 'px-reveal'} group grid grid-cols-1 gap-5 sm:gap-6 ${featured ? 'lg:grid-cols-12 lg:items-center lg:gap-12' : ''}`}
            onMouseEnter={() => line && mascotReact({ ...line, hold: 1400 })}
        >
            <CaseCover project={project} accent={accent} className={featured ? 'lg:col-span-7' : ''} />

            <div className={`flex flex-col items-start gap-2.5 sm:gap-3 ${featured ? 'lg:col-span-5' : ''}`}>
                <p className="font-pixel-label text-[11px] text-[var(--px-dim)]">{[project.period, project.metric].filter(Boolean).join(' · ')}</p>
                <h3 className={`text-[var(--px-ink)] ${featured ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-xl sm:text-2xl md:text-3xl'}`}>{project.title}</h3>
                <p className="text-sm sm:text-base leading-relaxed text-[var(--px-muted)]">{project.description}</p>
                <a href={project.link} className="mt-1 sm:mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--px-ink)] underline decoration-[var(--px-line)] underline-offset-4 hover:decoration-[var(--px-ink)]">
                    Read case study <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
            </div>
        </article>
    );
}

function ContactSection({ onCopy, copied }: { onCopy: () => void; copied: boolean }) {
    return (
        <section id="contact" data-mascot-line="Your move." data-mascot-mood="smirk" className="px-dark scroll-mt-16 sm:scroll-mt-20 bg-[var(--px-panel-2)] text-[var(--px-on-sign)]">
            <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 sm:gap-6 px-4 py-16 sm:py-24 md:px-12 md:py-28">
                <p className="font-pixel-label text-[11px] text-white/60">04 · Get in touch</p>
                <h2 className="text-4xl text-white sm:text-5xl md:text-6xl font-semibold">Let's talk.</h2>
                <p className="max-w-xl text-base sm:text-lg leading-relaxed text-white/75">
                    I'm open to Senior Product Designer, UX Engineer and Design Engineer roles where product design and frontend engineering meet.
                </p>

                <div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
                    <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="px-btn px-btn--primary justify-center text-center">
                        Schedule a call
                        <NewTab />
                    </a>
                    <button type="button" onClick={onCopy} className="px-btn justify-center text-center">
                        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        {copied ? 'Copied' : STORY_IDENTITY.email}
                    </button>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-6 text-sm text-white/75">
                    <a href={STORY_IDENTITY.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white">
                        <Github className="h-4 w-4" aria-hidden="true" /> GitHub
                        <NewTab />
                    </a>
                    <a href={STORY_IDENTITY.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white">
                        <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn
                        <NewTab />
                    </a>
                    <a href={STORY_IDENTITY.medium} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white">
                        <BookOpen className="h-4 w-4" aria-hidden="true" /> Medium
                        <NewTab />
                    </a>
                </div>
            </div>
        </section>
    );
}
