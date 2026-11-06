'use client';

import { useEffect, useState, type CSSProperties } from 'react';
import { ArrowRight, Check, Copy, FileText, Github, Linkedin } from 'lucide-react';
import { STORY_COMPANIES, STORY_IDENTITY, STORY_PROJECTS, PROJECT_ACCENTS, type StoryProject } from '@/components/landing/story-data';
import { ContactModal } from '@/components/home/get-in-touch/ContactModal';
import { mascotReact } from './mascot-bus';
import { CaseCover } from './CaseCover';
import { NewTab, PixelFooter, PixelHeader, navLinkClass } from './PixelChrome';
import { ABOUT_FACTS, CASE_LINES, HERO_INTRO } from './pixel-copy';

const CALENDLY = 'https://calendly.com/eeliasricardoo';
/** The cases shown on the home page, in order. Everything else lives in /portfolio. */
const HOME_CASES = ['02', '08', '09', '03', '01'];

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

function SectionHeading({ index, label, title, children }: { index: string; label: string; title: string; children?: React.ReactNode }) {
    return (
        <div className="px-reveal mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col items-start gap-4">
                <p className="font-pixel-label text-[11px] text-[var(--px-dim)]">
                    {index} · {label}
                </p>
                <h2 className="text-4xl sm:text-5xl">{title}</h2>
            </div>
            {children && <div className="max-w-sm text-sm leading-relaxed text-[var(--px-muted)] md:text-right">{children}</div>}
        </div>
    );
}

export function PixelHome() {
    const [copied, setCopied] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);
    useReveal();

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
                    ['about', 'About'],
                ].map(([id, label]) => (
                    <button key={id} type="button" onClick={() => scrollTo(id)} className={navLinkClass}>
                        {label}
                    </button>
                ))}
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={`${navLinkClass} hidden md:inline`}>
                    Resume
                    <NewTab />
                </a>
                <button type="button" onClick={() => setContactOpen(true)} className="px-btn px-btn--primary px-btn--sm ml-2 hidden sm:inline-flex">
                    Contact
                </button>
            </PixelHeader>

            <main id="main-content">
                {/* ——— Hero ——— */}
                <section id="top" className="px-4 pb-14 pt-6 sm:px-6 md:px-12 md:pb-20 md:pt-10">
                    <div className="mx-auto max-w-6xl">
                        <div className="px-frame overflow-hidden border border-[var(--px-line)] bg-white shadow-sm">
                            {/* Pixel sky cover banner */}
                            <div className="relative h-44 sm:h-60 md:h-72 lg:h-80 w-full overflow-hidden bg-[#93c7f8]">
                                <img
                                    src="/pixel/hero-sky.webp"
                                    alt="Pixel art sky with fluffy clouds and distant mountains"
                                    width={2000}
                                    height={1090}
                                    fetchPriority="high"
                                    className="h-full w-full object-cover object-bottom"
                                    style={{ imageRendering: 'pixelated' }}
                                />
                            </div>

                            {/* Profile content with overlapping circular avatar */}
                            <div className="px-5 pb-8 pt-0 sm:px-8 sm:pb-10 md:px-10 md:pb-12">
                                {/* Top row: Overlapping Avatar + Status Pill */}
                                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 -mt-16 sm:-mt-20 md:-mt-24 mb-6 sm:mb-8">
                                    <div className="relative inline-block">
                                        <img
                                            src="/optimized/profile-photo-1080w.webp"
                                            alt="Elias Ricardo"
                                            width={1080}
                                            height={1080}
                                            fetchPriority="high"
                                            className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 rounded-full object-cover ring-4 ring-white shadow-xl bg-white"
                                        />
                                    </div>

                                    <div className="flex items-center gap-3 self-start sm:self-end">
                                        <p className="px-sign flex items-center gap-2 px-3 py-1.5 text-sm">
                                            <span className="px-dot" /> Open to senior roles · Remote from Brazil
                                        </p>
                                    </div>
                                </div>

                                {/* Main Hero Info & Actions */}
                                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
                                    <div className="flex flex-col items-start gap-5 lg:col-span-8">
                                        <div>
                                            <p className="text-xl font-semibold text-[var(--px-ink)]">Elias Ricardo</p>
                                            <p className="font-pixel-label text-xs text-[var(--px-dim)] mt-0.5">
                                                Senior Product Designer & UX Engineer
                                            </p>
                                        </div>

                                        <h1 className="text-[1.85rem] sm:text-4xl md:text-5xl lg:text-[3.75rem] font-semibold tracking-tight text-[var(--px-ink)] leading-tight">
                                            Human intention,<br className="sm:hidden" /> amplified by AI.
                                        </h1>

                                        <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-[var(--px-muted)]">
                                            {HERO_INTRO}
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-stretch lg:justify-end">
                                        <button
                                            type="button"
                                            onClick={() => scrollTo('work')}
                                            className="px-btn px-btn--primary"
                                            onMouseEnter={() => mascotReact({ mood: 'wink', hold: 900 })}
                                        >
                                            View work
                                        </button>
                                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-btn">
                                            <FileText className="h-4 w-4" aria-hidden="true" /> Resume
                                            <NewTab />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ——— Companies ——— */}
                <section aria-label="Companies I've shipped for" className="border-y border-[var(--px-line)] bg-[var(--px-bg-2)]">
                    <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 md:px-12">
                        <p className="font-pixel-label text-[11px] text-[var(--px-dim)]">Shipped for</p>
                    </div>
                    <div className="px-marquee-wrap overflow-hidden py-8 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
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
                </section>

                {/* ——— Work ——— */}
                <section
                    id="work"
                    data-mascot-line="Start with the first one — it's my favourite."
                    data-mascot-mood="smirk"
                    className="scroll-mt-20 py-20 md:py-28"
                >
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-12">
                        <SectionHeading index="01" label="Work" title="Selected work">
                            Five cases. Each one starts with a real problem and ends in production.
                        </SectionHeading>

                        <CaseCard project={featured} accent={PROJECT_ACCENTS[0]} featured />

                        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2">
                            {rest.map((p, i) => (
                                <CaseCard key={p.index} project={p} accent={PROJECT_ACCENTS[(i + 1) % PROJECT_ACCENTS.length]} />
                            ))}
                        </div>

                        <div className="mt-16 flex justify-center">
                            <a href="/portfolio" className="px-btn">
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
                    className="scroll-mt-20 border-y border-[var(--px-line)] bg-[var(--px-bg-2)] py-20 md:py-28"
                >
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-12">
                        <SectionHeading index="02" label="About" title="Design that ships." />

                        <div className="px-reveal grid grid-cols-1 gap-12 lg:grid-cols-12">
                            <div className="space-y-5 text-lg leading-relaxed text-[var(--px-ink)] lg:col-span-7">
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
                                    <div key={f.label} className="flex items-baseline justify-between gap-4 border-b border-[var(--px-line)] py-3">
                                        <dt className="font-pixel-label text-[11px] text-[var(--px-dim)]">{f.label}</dt>
                                        <dd className="text-right text-[var(--px-ink)]">{f.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </section>

                {/* ——— Contact ——— */}
                <ContactSection onContact={() => setContactOpen(true)} onCopy={copyEmail} copied={copied} />
            </main>

            <PixelFooter />
        </div>
    );
}

function CaseCard({ project, accent, featured = false }: { project: StoryProject; accent: string; featured?: boolean }) {
    const line = CASE_LINES[project.index];
    return (
        <article
            className={`px-work px-reveal group grid grid-cols-1 gap-6 ${featured ? 'lg:grid-cols-12 lg:items-center lg:gap-12' : ''}`}
            onMouseEnter={() => line && mascotReact({ ...line, hold: 1400 })}
        >
            <CaseCover project={project} accent={accent} className={featured ? 'lg:col-span-7' : ''} />

            <div className={`flex flex-col items-start gap-3 ${featured ? 'lg:col-span-5' : ''}`}>
                <p className="font-pixel-label text-[11px] text-[var(--px-dim)]">{[project.period, project.metric].filter(Boolean).join(' · ')}</p>
                <h3 className={`text-[var(--px-ink)] ${featured ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'}`}>{project.title}</h3>
                <p className="text-base leading-relaxed text-[var(--px-muted)]">{project.description}</p>
                <a href={project.link} className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--px-ink)] underline decoration-[var(--px-line)] underline-offset-4 hover:decoration-[var(--px-ink)]">
                    Read case study <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
            </div>
        </article>
    );
}

function ContactSection({ onContact, onCopy, copied }: { onContact: () => void; onCopy: () => void; copied: boolean }) {
    return (
        <section id="contact" data-mascot-line="Your move." data-mascot-mood="smirk" className="px-dark scroll-mt-20 bg-[var(--px-panel-2)] text-[var(--px-on-sign)]">
            <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-24 sm:px-6 md:px-12 md:py-28">
                <p className="font-pixel-label text-[11px] text-white/60">03 · Get in touch</p>
                <h2 className="text-5xl text-white sm:text-6xl">Let's talk.</h2>
                <p className="max-w-xl text-lg leading-relaxed text-white/75">
                    I'm open to Senior Product Designer, UX Engineer and Design Engineer roles where product design and frontend engineering meet.
                </p>

                <div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
                    <button type="button" onClick={onContact} className="px-btn px-btn--primary">
                        Send a message
                    </button>
                    <button type="button" onClick={onCopy} className="px-btn">
                        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        {copied ? 'Copied' : STORY_IDENTITY.email}
                    </button>
                    <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="px-btn">
                        Schedule a call
                        <NewTab />
                    </a>
                </div>

                <div className="mt-4 flex items-center gap-6 text-sm text-white/75">
                    <a href={STORY_IDENTITY.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white">
                        <Github className="h-4 w-4" aria-hidden="true" /> GitHub
                        <NewTab />
                    </a>
                    <a href={STORY_IDENTITY.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white">
                        <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn
                        <NewTab />
                    </a>
                </div>
            </div>
        </section>
    );
}
