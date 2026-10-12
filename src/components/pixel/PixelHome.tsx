'use client';

import { useEffect, useState, type CSSProperties } from 'react';
import { ArrowRight, Check, Copy, FileText, Github, Linkedin } from 'lucide-react';
import { STORY_COMPANIES, STORY_IDENTITY, STORY_PROJECTS, STORY_STATS, PROJECT_ACCENTS, type StoryProject } from '@/components/landing/story-data';
import { ContactModal } from '@/components/home/get-in-touch/ContactModal';
import { Mascot } from './Mascot';
import { mascotReact } from './mascot-bus';
import { PostsShelf } from './PostsShelf';
import { CaseCover } from './CaseCover';
import { NewTab, PixelFooter, PixelHeader, navLinkClass } from './PixelChrome';
import { ABOUT_FACTS, CASE_LINES, HERO_INTRO } from './pixel-copy';

const CALENDLY = 'https://calendly.com/eeliasricardoo';
/** The cases shown on the home page, in order. Everything else lives in /portfolio. */
const HOME_CASES = ['02', '01', '04'];

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
                    ['posts', 'Posts'],
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
                <section id="top">
                    <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-4 pb-16 pt-14 sm:px-6 md:px-12 md:pt-24 lg:grid-cols-12 lg:gap-12 lg:pb-24">
                        <div className="flex flex-col items-start gap-6 lg:col-span-6">
                            <p className="px-sign px-rise flex items-center gap-2 px-3 py-1.5 text-sm">
                                <span className="px-dot" /> Open to senior roles · Remote from Brazil
                            </p>

                            <h1 className="px-rise text-[2.75rem] sm:text-6xl lg:text-[4.25rem]" style={{ '--d': '100ms' } as CSSProperties}>
                                Human intention, amplified by AI.
                            </h1>

                            <p className="px-rise max-w-xl text-lg leading-relaxed text-[var(--px-muted)]" style={{ '--d': '200ms' } as CSSProperties}>
                                {HERO_INTRO}
                            </p>

                            <div className="px-rise mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row" style={{ '--d': '300ms' } as CSSProperties}>
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

                        <div className="px-rise lg:col-span-5 lg:col-start-8" style={{ '--d': '250ms' } as CSSProperties}>
                            <img
                                src="/optimized/profile-photo-1080w.webp"
                                alt="Elias Ricardo, in a black turtleneck."
                                width={1080}
                                height={1080}
                                fetchPriority="high"
                                className="aspect-[4/5] w-full max-w-md rounded-2xl object-cover lg:ml-auto"
                            />
                        </div>
                    </div>

                    {/* Results */}
                    <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 md:px-12">
                        <dl className="grid grid-cols-1 gap-x-10 gap-y-6 border-t border-[var(--px-line)] pt-8 sm:grid-cols-3">
                            {STORY_STATS.map((s) => (
                                <div key={s.label}>
                                    <dt className="sr-only">{s.label}</dt>
                                    <dd className="font-pixel text-3xl font-semibold tracking-tight text-[var(--px-ink)]">{s.value}</dd>
                                    <dd className="mt-1 text-sm leading-snug text-[var(--px-muted)]">{s.label}</dd>
                                </div>
                            ))}
                        </dl>
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
                            Three cases. Each one starts with a real problem and ends in production.
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

                {/* ——— Posts ——— */}
                <section
                    id="posts"
                    data-mascot-line="I draw these to think out loud. They're in Portuguese — the drawings help."
                    data-mascot-mood="wink"
                    className="scroll-mt-20 py-20 md:py-28"
                >
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-12">
                        <SectionHeading index="03" label="Writing" title="Field notes">
                            Illustrated essays on design, research and AI that I publish on Instagram and LinkedIn. Click one to read it.
                        </SectionHeading>
                        <PostsShelf />
                    </div>
                </section>

                {/* ——— Contact ——— */}
                <ContactSection onContact={() => setContactOpen(true)} onCopy={copyEmail} copied={copied} />
            </main>

            <PixelFooter />

            <Mascot />
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
                <p className="font-pixel-label text-[11px] text-white/60">04 · Get in touch</p>
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
