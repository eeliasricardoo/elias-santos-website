'use client';

import { useState } from 'react';
import { Mail, Github, Linkedin, Calendar, ExternalLink, ArrowRight, Check, Copy } from 'lucide-react';
import { STORY_IDENTITY, STORY_PROJECTS, STORY_COMPANIES, STORY_STATS, PROJECT_ACCENTS } from './story-data';
import { Button } from '@/components/ui/button';
import { ShinyButton } from '@/components/magicui/shiny-button';
import { ProjectWireframe } from '@/components/portfolio/ui';

export function SimpleHome() {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(STORY_IDENTITY.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
            {/* Clean Sticky Header */}
            <header className="sticky top-0 z-50 w-full border-b border-zinc-900 bg-black/80 backdrop-blur-md">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-12">
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="text-lg font-bold tracking-tight hover:opacity-80 transition"
                    >
                        {STORY_IDENTITY.logo}
                        <span className="text-zinc-500 font-mono">_</span>
                    </a>

                    <nav className="flex items-center gap-4 text-xs font-mono tracking-wider text-zinc-400 sm:gap-6 md:gap-8">
                        <button
                            type="button"
                            onClick={() => scrollTo('work')}
                            className="inline-flex py-2 hover:text-white transition"
                        >
                            WORK
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollTo('about')}
                            className="inline-flex py-2 hover:text-white transition"
                        >
                            ABOUT
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollTo('contact')}
                            className="hidden sm:inline-flex py-2 hover:text-white transition"
                        >
                            CONTACT
                        </button>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:inline-flex items-center gap-1 hover:text-white transition border-l border-zinc-800 pl-6 mr-2"
                        >
                            RESUME
                        </a>
                        <ShinyButton
                            onClick={() => window.open('https://calendly.com/eeliasricardoo', '_blank', 'noopener,noreferrer')}
                            className="py-2 px-3 text-[10px]"
                        >
                            Schedule a Call
                        </ShinyButton>
                    </nav>
                </div>
            </header>

            {/* Typographic & Visual Hero */}
            <section className="mx-auto max-w-6xl px-6 py-8 md:px-12 md:py-28">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Main Content Column */}
                    <div className="lg:col-span-8 flex flex-col gap-6">
                        
                        {/* Mobile Header: Integrated Avatar + Metadata */}
                        <div className="flex items-center gap-4 lg:hidden pb-2 border-b border-zinc-900/80">
                            <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-zinc-800 bg-zinc-950 shadow-md">
                                <img
                                    src="/profile-photo.webp"
                                    alt="Elias Ricardo"
                                    width={100}
                                    height={100}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col gap-1 font-mono text-xs uppercase tracking-wider text-zinc-400">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-white font-semibold text-xs tracking-normal">Elias Ricardo</span>
                                </div>
                                <span className="text-[10px] text-zinc-500">{STORY_IDENTITY.remote} • SENIOR UX ENGINEER</span>
                            </div>
                        </div>

                        {/* Desktop Status Eyebrow */}
                        <div className="hidden lg:flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono tracking-widest text-zinc-500 uppercase">
                            <span className="whitespace-nowrap">{STORY_IDENTITY.remote}</span>
                            <span>•</span>
                            <span className="whitespace-nowrap">SENIOR UX ENGINEER</span>
                        </div>
                        
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl leading-[1.1] text-white">
                            Human intention,<br />
                            amplified by AI.
                        </h1>

                        <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl font-light">
                            Hi, I&apos;m <span className="text-white font-medium">Elias Ricardo</span>, a Senior UX Engineer and Product Designer.
                        </p>

                        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-2">
                            <ShinyButton
                                onClick={() => scrollTo('work')}
                                className="flex w-full sm:w-auto items-center justify-center gap-1.5"
                            >
                                Explore Projects ↓
                            </ShinyButton>

                            <button
                                onClick={handleCopyEmail}
                                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 transition-all text-zinc-300 font-mono text-xs px-5 py-3 rounded-md cursor-pointer hover:text-white hover:border-zinc-700 active:scale-95 duration-200"
                            >
                                {copied ? (
                                    <>
                                        <Check className="h-3.5 w-3.5 text-green-500" />
                                        Copied email
                                    </>
                                ) : (
                                    <>
                                        <Copy className="h-3.5 w-3.5" />
                                        {STORY_IDENTITY.email}
                                    </>
                                )}
                            </button>
                        </div>

                        <div className="flex items-center gap-6 mt-4 text-xs font-mono text-zinc-500">
                            <a
                                href={STORY_IDENTITY.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition flex items-center gap-1"
                            >
                                <Github className="h-3.5 w-3.5" />
                                GITHUB
                            </a>
                            <a
                                href={STORY_IDENTITY.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition flex items-center gap-1"
                            >
                                <Linkedin className="h-3.5 w-3.5" />
                                LINKEDIN
                            </a>
                        </div>
                    </div>

                    {/* Desktop Right Column - Full Portrait */}
                    <div className="hidden lg:flex lg:col-span-4 flex-col justify-center items-end">
                        <div className="w-full max-w-[320px] aspect-square overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl">
                            <img
                                src="/profile-photo.webp"
                                alt="Elias Ricardo"
                                width={400}
                                height={400}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* Companies Wall */}
            <section className="border-t border-b border-zinc-900 py-16 bg-zinc-100 text-black">
                <div className="mx-auto max-w-6xl px-6 md:px-12">
                    <p className="text-[10px] font-mono tracking-widest text-zinc-500 mb-10 uppercase">// COMPANIES I&apos;VE SHIPPED FOR</p>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12 items-center">
                        {STORY_COMPANIES.map((company) => (
                            <div key={company.name} className="flex h-12 justify-center items-center">
                                <img
                                    src={company.logo}
                                    alt={company.name}
                                    loading="lazy"
                                    className="max-h-full max-w-full object-contain"
                                    style={
                                        company.name === 'Serasa Experian'
                                            ? { transform: 'scale(1.7)' }
                                            : company.scale
                                            ? { transform: `scale(${company.scale})` }
                                            : undefined
                                    }
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Selected Work List */}
            <section id="work" className="scroll-mt-16 border-t border-zinc-900 bg-zinc-950/20 py-16 md:py-20">
                <div className="mx-auto max-w-6xl px-6 md:px-12">
                    <div className="border-b border-zinc-900 pb-5 mb-16 flex items-baseline justify-between">
                        <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">SELECTED WORK</h2>
                        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                            // 01 — {String(STORY_PROJECTS.length).padStart(2, '0')}
                        </span>
                    </div>

                    <div className="flex flex-col gap-16 md:gap-32">
                        {STORY_PROJECTS.map((project, idx) => {
                            const accentColor = PROJECT_ACCENTS[idx % PROJECT_ACCENTS.length];
                            return (
                                <div
                                    key={project.index}
                                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                                >
                                    {/* Left: Coded wireframe mockup */}
                                    <div className="lg:col-span-6 group relative overflow-hidden rounded-xl border border-zinc-800/80 bg-[#0a0a0b] aspect-[4/3] min-h-[220px] sm:aspect-[16/10] shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)] transition-colors duration-500 hover:border-zinc-700">
                                        <ProjectWireframe title={project.title} accent={accentColor} />
                                    </div>

                                    {/* Right: Project details */}
                                    <div className="lg:col-span-6 flex flex-col gap-4">
                                        <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                                            <span>PROJ {project.index}</span>
                                            {project.metric && (
                                                <span 
                                                    className="border border-zinc-800 bg-zinc-900/60 px-2 py-0.5 rounded text-xs font-medium text-white/90"
                                                    style={{ borderLeftColor: accentColor }}
                                                >
                                                    {project.metric}
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                                            {project.title}
                                        </h3>

                                        <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="rounded border border-zinc-800 bg-zinc-950 px-2 py-0.5 text-[10px] font-mono tracking-wide text-zinc-400"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="mt-4 md:mt-6">
                                            <ShinyButton
                                                onClick={() => window.location.href = project.link}
                                                className="flex w-full sm:w-auto items-center justify-center gap-1.5"
                                            >
                                                View Case Study
                                                <ArrowRight className="h-3.5 w-3.5" />
                                            </ShinyButton>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>


            {/* About & Stack Section */}
            <section id="about" className="scroll-mt-16 border-t border-zinc-900 bg-zinc-950/10 py-16 md:py-20">
                <div className="mx-auto max-w-6xl px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                        
                        {/* Bio */}
                        <div className="lg:col-span-7 flex flex-col gap-6">
                            <p className="text-xs font-mono tracking-widest text-zinc-500 uppercase">// ABOUT THE HUMAN</p>
                            <h3 className="text-3xl font-bold tracking-tight text-white">
                                Human intention, amplified by AI.
                            </h3>
                            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
                                Today, anyone can generate a user interface with AI in seconds. But a great product needs direction, clear design, and real user empathy. To me, &quot;Human intention, amplified by AI&quot; means using technology to build faster, but keeping human vision in control.
                            </p>
                            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
                                Outside of work, I love travel and new adventures. I pay close attention to details and I am always open to change. I love learning about new AI tools, and I really have fun doing this every day.
                            </p>
                        </div>

                        {/* Stack */}
                        <div className="lg:col-span-5 flex flex-col gap-6">
                            <p className="text-xs font-mono tracking-widest text-zinc-500 uppercase">// EXPERTISE</p>
                            
                            <div className="flex flex-col gap-6">
                                <div>
                                    <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">Design</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Product Design', 'UI/UX Design', 'User Research', 'Interactive Prototyping', 'Design Systems', 'Figma'].map(tag => (
                                            <span key={tag} className="border border-zinc-800 bg-zinc-950/60 rounded px-2.5 py-1 text-xs font-mono text-zinc-400">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">Engineering</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['React', 'Next.js', 'Astro', 'TypeScript', 'Tailwind CSS', 'WebRTC', 'Vercel', 'Performance Tuning'].map(tag => (
                                            <span key={tag} className="border border-zinc-800 bg-zinc-950/60 rounded px-2.5 py-1 text-xs font-mono text-zinc-400">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact / CTA */}
            <section id="contact" className="scroll-mt-16 border-t border-zinc-900 bg-zinc-950/20 py-20 md:py-32">
                <div className="mx-auto max-w-6xl px-6 md:px-12 text-center flex flex-col items-center gap-6">
                    <p className="text-xs font-mono tracking-widest text-zinc-500 uppercase">// GET IN TOUCH</p>
                    
                    <h2 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl leading-[1.05] max-w-4xl">
                        Let&apos;s build something exceptional.
                    </h2>
                    
                    <p className="text-zinc-400 text-base md:text-lg max-w-xl font-light">
                        I am currently open to senior product design and UX engineering opportunities.
                    </p>

                    <div className="flex w-full max-w-xs flex-col items-stretch gap-3 mt-6 sm:w-auto sm:max-w-none sm:flex-row sm:items-center sm:gap-4">
                        <ShinyButton
                            onClick={() => window.open('https://calendly.com/eeliasricardoo', '_blank', 'noopener,noreferrer')}
                            className="px-8 py-4 text-sm font-bold"
                            variant="primary"
                        >
                            Book on Calendly
                        </ShinyButton>
                        <ShinyButton
                            onClick={() => window.location.href = `mailto:${STORY_IDENTITY.email}`}
                            className="px-8 py-4 text-sm"
                            variant="secondary"
                        >
                            Send an Email
                        </ShinyButton>
                    </div>

                    <div className="flex items-center gap-6 mt-12 text-xs font-mono text-zinc-500">
                        <a
                            href={STORY_IDENTITY.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition"
                        >
                            GITHUB
                        </a>
                        <a
                            href={STORY_IDENTITY.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition"
                        >
                            LINKEDIN
                        </a>
                        <a href="/portfolio" className="hover:text-white transition">
                            ALL WORK
                        </a>
                    </div>
                </div>
            </section>

            {/* Clean Footer */}
            <footer className="border-t border-zinc-900 py-8 text-xs font-mono text-zinc-500">
                <div className="mx-auto max-w-6xl px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span>
                        {STORY_IDENTITY.logo}_ © {new Date().getFullYear()}
                    </span>
                    <span className="hidden sm:inline">
                        {STORY_IDENTITY.roles.toUpperCase()}
                    </span>
                    <span>
                        {STORY_IDENTITY.remote}
                    </span>
                </div>
            </footer>
        </div>
    );
}
