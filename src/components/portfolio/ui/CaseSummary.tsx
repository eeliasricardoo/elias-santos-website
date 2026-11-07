import { STORY_PROJECTS } from '@/components/landing/story-data';

/** The case at a glance — when, problem, my role, result — for readers who won't scroll the whole study. */
export function CaseSummary({ project }: { project: string }) {
    const entry = STORY_PROJECTS.find((p) => p.index === project);
    if (!entry) return null;
    const { summary, period } = entry;

    const rows = [
        ...(period ? [{ label: 'When', text: period }] : []),
        { label: 'Problem', text: summary.problem },
        { label: 'My role', text: summary.role },
        { label: 'Result', text: summary.result },
    ];

    return (
        <section
            aria-label="Summary"
            className={`px-case-summary grid grid-cols-1 gap-x-10 gap-y-7 rounded-xl border border-[var(--px-line)] bg-[var(--px-bg-2)] p-6 sm:grid-cols-2 sm:p-8 md:p-10 ${period ? 'lg:grid-cols-[9rem_1fr_1fr_1fr]' : 'lg:grid-cols-3'}`}
        >
            {rows.map((row) => (
                <div key={row.label} className="flex flex-col gap-2.5">
                    <p className="font-pixel-label text-[11px] text-[var(--px-dim)]">{row.label}</p>
                    <p className="text-[15px] leading-relaxed text-[var(--px-ink)]">{row.text}</p>
                </div>
            ))}
        </section>
    );
}
