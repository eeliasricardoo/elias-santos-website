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
        <section aria-label="Summary" className={`-mt-8 grid grid-cols-1 gap-8 border-y border-[var(--px-line)] py-8 ${period ? 'md:grid-cols-[8rem_1fr_1fr_1fr]' : 'md:grid-cols-3'}`}>
            {rows.map((row) => (
                <div key={row.label} className="space-y-2">
                    <p className="font-pixel-label text-[11px] text-[var(--px-dim)]">{row.label}</p>
                    <p className="text-base leading-relaxed text-[var(--px-ink)]">{row.text}</p>
                </div>
            ))}
        </section>
    );
}
