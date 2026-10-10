'use client';

import { useState, useMemo, type CSSProperties } from 'react';
import { Search } from 'lucide-react';
import { STORY_PROJECTS, PROJECT_ACCENTS } from '@/components/landing/story-data';
import { ProjectWireframe } from '@/components/portfolio/ui';
import { Clouds, Stroke } from '@/components/pixel/hero-fx';
import { mascotReact } from '@/components/pixel/mascot-bus';
import { QUEST_LINES } from '@/components/pixel/pixel-copy';

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
        <div className="relative overflow-x-clip">
            <div className="px-case-sky pointer-events-none absolute inset-x-0 top-0 h-[640px]" aria-hidden="true">
                <Clouds count={3} />
            </div>

            <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-14 sm:px-6 md:px-12 md:pt-20">
                {/* Hero */}
                <div className="flex flex-col items-start gap-6 pb-10">
                    <p className="px-sign px-swing-in px-3 py-2 font-pixel-label text-[11px]">Quest archive</p>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl">
                        <Stroke text="All work" /> <Stroke text="& case studies" gold />
                    </h1>
                    <p className="max-w-2xl text-base leading-relaxed text-[var(--px-muted)] md:text-lg">
                        Digital products, design systems, AI tooling and interaction engineering — each one researched, designed and shipped.
                    </p>
                </div>

                {/* Filters + search */}
                <div className="flex flex-col items-start justify-between gap-6 py-8 md:flex-row md:items-center">
                    <div className="flex flex-wrap gap-3" role="group" aria-label="Filter by tag">
                        {FILTER_TAGS.map((tag) => {
                            const active = selectedTag === tag;
                            return (
                                <button
                                    key={tag}
                                    type="button"
                                    aria-pressed={active}
                                    onClick={() => setSelectedTag(tag)}
                                    className={`px-btn px-btn--sm ${active ? 'px-btn--primary' : ''}`}
                                >
                                    {tag}
                                </button>
                            );
                        })}
                    </div>

                    <label className="px-frame relative flex w-full items-center md:w-72">
                        <span className="sr-only">Search projects</span>
                        <Search className="pointer-events-none absolute left-3 h-4 w-4 text-[var(--px-muted)]" />
                        <input
                            type="search"
                            placeholder="Search quests…"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-transparent py-2.5 pl-10 pr-3 font-pixel text-base text-[var(--px-ink)] placeholder:text-[var(--px-dim)] focus:outline-none"
                        />
                    </label>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-x-10 gap-y-16 pt-6 md:grid-cols-2">
                    {filteredProjects.map((project) => {
                        const idx = STORY_PROJECTS.indexOf(project);
                        const accent = PROJECT_ACCENTS[idx % PROJECT_ACCENTS.length];
                        const line = QUEST_LINES[project.index];
                        return (
                            <article
                                key={project.index}
                                className="px-quest group flex flex-col items-start gap-4"
                                style={{ '--quest-accent': accent } as CSSProperties}
                                onMouseEnter={() => line && mascotReact({ ...line, hold: 1400 })}
                            >
                                <a href={project.link} tabIndex={-1} aria-hidden="true" className="px-frame px-frame-drop block w-full overflow-hidden">
                                    <div className="px-bar flex items-center justify-between px-3 py-2 font-pixel-label text-[11px]">
                                        <span>QUEST {project.index}</span>
                                    </div>
                                    <div className="relative aspect-[16/10] bg-[#0a0a0b]">
                                        <ProjectWireframe title={project.title} accent={accent} />
                                    </div>
                                </a>

                                {project.metric && <p className="px-chip mt-2 !bg-[var(--px-gold)] !text-[11px]">Loot ▸ {project.metric}</p>}
                                <h2 className="text-3xl text-[var(--px-ink)]">{project.title}</h2>
                                <p className="text-sm leading-relaxed text-[var(--px-muted)] md:text-base">{project.description}</p>
                                <ul className="flex flex-wrap gap-2.5">
                                    {project.tags.map((tag) => (
                                        <li key={tag} className="px-chip px-chip--leaf">
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                                <a href={project.link} className="px-btn px-btn--sign mt-2">
                                    ▶ Read case study
                                </a>
                            </article>
                        );
                    })}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="px-dialog mx-auto mt-6 max-w-md px-6 py-10 text-center font-pixel text-lg">
                        <span className="px-dialog__name">ELIAS</span>
                        No quests match &ldquo;{searchQuery}&rdquo;. Try another word?
                    </div>
                )}
            </div>
        </div>
    );
}
