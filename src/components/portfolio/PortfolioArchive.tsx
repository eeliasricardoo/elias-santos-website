'use client';

import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { STORY_PROJECTS, PROJECT_ACCENTS, type StoryProject } from '@/components/landing/story-data';
import { CaseCover } from '@/components/pixel/CaseCover';
import { mascotReact } from '@/components/pixel/mascot-bus';
import { CASE_LINES } from '@/components/pixel/pixel-copy';

/** Concepts and design challenges — shown apart from shipped work so they don't read as delivered products. */
const EXPLORATIONS = ['08', '09'];

/** Few enough to sit on one line; each one matches at least three cases. */
const FILTER_TAGS = ['All', 'Product Design', 'Design System', 'UX Engineering', 'AI'] as const;

/** Same opening order as the home page; everything else keeps its catalogue order. */
const LEAD_ORDER = ['02', '01', '03'];
const rank = (p: StoryProject) => {
    const i = LEAD_ORDER.indexOf(p.index);
    return i === -1 ? LEAD_ORDER.length : i;
};
const ORDERED_PROJECTS = [...STORY_PROJECTS].sort((a, b) => rank(a) - rank(b));

export function PortfolioArchive() {
    const [selectedTag, setSelectedTag] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProjects = useMemo(() => {
        return ORDERED_PROJECTS.filter((project) => {
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
            <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-14 md:px-12 md:pt-20">
                {/* Hero */}
                <div className="flex flex-col items-start gap-4 sm:gap-6 pb-6 sm:pb-10">
                    <p className="font-pixel-label text-[11px] text-[var(--px-dim)]">Archive</p>
                    <h1 className="text-3xl sm:text-5xl md:text-6xl">All work &amp; case studies</h1>
                    <p className="max-w-2xl text-base leading-relaxed text-[var(--px-muted)] md:text-lg">
                        Digital products, design systems, AI tooling and interaction engineering — researched, designed and shipped.
                    </p>
                </div>

                {/* Filters + search */}
                <div className="flex flex-col items-start justify-between gap-6 py-8 md:flex-row md:items-center">
                    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by tag">
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
                            placeholder="Search projects…"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-transparent py-2.5 pl-10 pr-3 text-base text-[var(--px-ink)] placeholder:text-[var(--px-dim)] focus:outline-none"
                        />
                    </label>
                </div>

                {/* Shipped work */}
                <ProjectGrid projects={filteredProjects.filter((p) => !EXPLORATIONS.includes(p.index))} />

                {/* Concepts & challenges */}
                {filteredProjects.some((p) => EXPLORATIONS.includes(p.index)) && (
                    <section aria-labelledby="explorations" className="mt-20 sm:mt-28 border-t border-[var(--px-line)] pt-10 sm:pt-14">
                        <p className="font-pixel-label text-[11px] text-[var(--px-dim)]">Explorations</p>
                        <h2 id="explorations" className="mt-3 text-2xl sm:text-4xl">Concepts &amp; design challenges</h2>
                        <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--px-muted)]">
                            Self-initiated concepts and a hiring challenge — not shipped products, but a look at how I explore new problems.
                        </p>
                        <ProjectGrid headingLevel="h3" projects={filteredProjects.filter((p) => EXPLORATIONS.includes(p.index))} />
                    </section>
                )}

                {filteredProjects.length === 0 && (
                    <div className="px-frame mx-auto mt-6 max-w-md px-6 py-10 text-center text-lg">
                        No projects match &ldquo;{searchQuery}&rdquo;. Try another word?
                    </div>
                )}
            </div>
        </div>
    );
}

function ProjectGrid({ projects, headingLevel = 'h2' }: { projects: StoryProject[]; headingLevel?: 'h2' | 'h3' }) {
    const Heading = headingLevel;
    // An odd count would leave one card alone on the last row, so the first one takes a full row instead.
    const leadWide = projects.length > 1 && projects.length % 2 === 1;
    return (
        <div className="grid grid-cols-1 gap-x-10 gap-y-16 pt-6 md:grid-cols-2">
            {projects.map((project, i) => {
                const idx = STORY_PROJECTS.indexOf(project);
                const accent = PROJECT_ACCENTS[idx % PROJECT_ACCENTS.length];
                const line = CASE_LINES[project.index];
                const wide = leadWide && i === 0;
                return (
                    <article
                        key={project.index}
                        className={`px-work group ${wide ? 'grid grid-cols-1 gap-4 md:col-span-2 lg:grid-cols-12 lg:items-center lg:gap-12' : 'flex flex-col items-start gap-4'}`}
                        onMouseEnter={() => line && mascotReact({ ...line, hold: 1400 })}
                    >
                        <CaseCover project={project} accent={accent} className={wide ? 'w-full lg:col-span-7' : 'w-full'} />

                        <div className={`flex flex-col items-start gap-4 ${wide ? 'lg:col-span-5' : ''}`}>
                            <p className="mt-2 font-pixel-label text-[11px] text-[var(--px-dim)]">{[project.period, project.metric].filter(Boolean).join(' · ')}</p>
                            <Heading className="text-3xl text-[var(--px-ink)]">{project.title}</Heading>
                            <p className="text-sm leading-relaxed text-[var(--px-muted)] md:text-base">{project.description}</p>
                            <ul className="flex flex-wrap gap-2.5">
                                {project.tags.map((tag) => (
                                    <li key={tag} className="px-chip">
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                            <a href={project.link} className="px-btn mt-2">
                                Read case study
                            </a>
                        </div>
                    </article>
                );
            })}
        </div>
    );
}
