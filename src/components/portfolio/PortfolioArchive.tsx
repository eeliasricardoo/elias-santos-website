'use client';

import { useState, useMemo } from 'react';
import { ArrowLeft, ArrowRight, Search, Sparkles } from 'lucide-react';
import { STORY_IDENTITY, STORY_PROJECTS, PROJECT_ACCENTS } from '@/components/landing/story-data';
import { ProjectWireframe } from '@/components/portfolio/ui';
import { ShinyButton } from '@/components/magicui/shiny-button';

const FILTER_TAGS = ['All', 'UX Engineering', 'Product Design', 'AI Automation', 'React', 'WebRTC'] as const;

export function PortfolioArchive() {
    const [selectedTag, setSelectedTag] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProjects = useMemo(() => {
        return STORY_PROJECTS.filter((project) => {
            const matchesTag =
                selectedTag === 'All' ||
                project.tags.some((tag) => tag.toLowerCase().includes(selectedTag.toLowerCase()));

            const matchesSearch =
                searchQuery === '' ||
                project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

            return matchesTag && matchesSearch;
        });
    }, [selectedTag, searchQuery]);

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
            {/* Top Navigation */}
            <header className="sticky top-0 z-50 w-full border-b border-zinc-900 bg-black/80 backdrop-blur-md">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-12">
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-zinc-400 hover:text-white transition"
                    >
                        <ArrowLeft className="h-3.5 w-3.5" />
                        <span>BACK TO HOME</span>
                    </a>

                    <div className="flex items-center gap-4 text-xs font-mono">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-white transition hidden sm:inline"
                        >
                            RESUME (PDF)
                        </a>
                        <ShinyButton
                            onClick={() => window.open('https://calendly.com/eeliasricardoo', '_blank', 'noopener,noreferrer')}
                            className="py-1.5 px-3 text-[10px]"
                        >
                            Schedule a Call
                        </ShinyButton>
                    </div>
                </div>
            </header>

            <main className="mx-auto max-w-6xl px-6 py-12 md:px-12 md:py-20">
                {/* Hero Header */}
                <div className="flex flex-col gap-4 border-b border-zinc-900 pb-10">
                    <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-500 uppercase">
                        <Sparkles className="h-3.5 w-3.5 text-zinc-400" />
                        <span>CRAFT &amp; ENGINEERING ARCHIVE</span>
                    </div>
                    
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white">
                        All Work &amp; Case Studies
                    </h1>
                    
                    <p className="text-base md:text-lg text-zinc-400 font-light max-w-2xl">
                        A curated archive of digital products, design systems, AI tooling, and interaction engineering shipped for scale.
                    </p>
                </div>

                {/* Filter and Search Bar */}
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between py-8">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {FILTER_TAGS.map((tag) => {
                            const active = selectedTag === tag;
                            return (
                                <button
                                    key={tag}
                                    type="button"
                                    onClick={() => setSelectedTag(tag)}
                                    className={`px-3 py-1.5 rounded text-xs font-mono tracking-wider transition ${
                                        active
                                            ? 'bg-white text-black font-semibold shadow-sm'
                                            : 'border border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-white hover:border-zinc-700'
                                    }`}
                                >
                                    {tag}
                                </button>
                            );
                        })}
                    </div>

                    {/* Search Input */}
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-500" />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-1.5 pl-9 text-xs font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition"
                        />
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 pt-4">
                    {filteredProjects.map((project, idx) => {
                        const accentColor = PROJECT_ACCENTS[idx % PROJECT_ACCENTS.length];
                        return (
                            <div
                                key={project.index}
                                className="group flex flex-col rounded-xl border border-zinc-800/80 bg-zinc-950/40 p-5 hover:border-zinc-700 transition duration-300 shadow-xl"
                            >
                                {/* Media Mockup */}
                                <div className="relative overflow-hidden rounded-lg border border-zinc-800/80 bg-[#0a0a0b] aspect-[16/10] mb-5">
                                    <ProjectWireframe
                                        title={project.title}
                                        accent={accentColor}
                                    />
                                </div>

                                {/* Header & Metrics */}
                                <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-2">
                                    <span>PROJECT {project.index}</span>
                                    {project.metric && (
                                        <span
                                            className="border border-zinc-800 bg-zinc-900/60 px-2 py-0.5 rounded text-[11px] font-medium text-white/90"
                                            style={{ borderLeftColor: accentColor }}
                                        >
                                            {project.metric}
                                        </span>
                                    )}
                                </div>

                                <h2 className="text-xl font-bold tracking-tight text-white mb-2 group-hover:text-zinc-100">
                                    {project.title}
                                </h2>

                                <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed mb-4 flex-1">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded border border-zinc-800 bg-zinc-900/80 px-2 py-0.5 text-[9px] font-mono text-zinc-400"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA Link */}
                                <div>
                                    <a
                                        href={project.link}
                                        className="inline-flex items-center gap-2 text-xs font-mono tracking-wider font-semibold text-white hover:opacity-80 transition"
                                        style={{ color: accentColor }}
                                    >
                                        <span>READ CASE STUDY</span>
                                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-20 border border-dashed border-zinc-800 rounded-xl">
                        <p className="text-zinc-500 font-mono text-sm">No projects found matching &ldquo;{searchQuery}&rdquo;</p>
                    </div>
                )}
            </main>

            {/* Clean Footer */}
            <footer className="border-t border-zinc-900 py-8 text-xs font-mono text-zinc-500">
                <div className="mx-auto max-w-6xl px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span>
                        {STORY_IDENTITY.logo}_ © {new Date().getFullYear()}
                    </span>
                    <span>
                        {STORY_IDENTITY.roles.toUpperCase()}
                    </span>
                    <a href={`mailto:${STORY_IDENTITY.email}`} className="hover:text-white transition">
                        {STORY_IDENTITY.email}
                    </a>
                </div>
            </footer>
        </div>
    );
}
