'use client';

import { CaseStudySection } from '@/components/portfolio/ui';

const tradeoffs = [
    {
        decision: 'Deterministic rules over an LLM at runtime',
        gain: 'Same input always produces the same output — auditable and testable.',
        cost: 'I had to hand-write and maintain the sanitization logic instead of letting a model guess. More code to own.',
    },
    {
        decision: '100% client-side processing',
        gain: 'Instant, and customer HTML never leaves the browser — a real concern at a credit bureau.',
        cost: 'No server means no usage analytics or shared rule updates. Each user runs their own copy.',
    },
    {
        decision: 'Opinionated one-click flow over a configurable editor',
        gain: 'Zero learning curve; the tool disappears.',
        cost: "Power users can't tweak edge-case rules in the UI — they have to ask me to change the code.",
    },
];

export function JourneySection() {
    return (
        <CaseStudySection eyebrow="Key decisions" index={6} title="Design for trust, engineer for repeatability">
            <p>
                If the tool I needed didn&apos;t exist, I had to build it — without asking for budget, a dev team, or permission. I ran an AI-assisted development cycle in two stages:
            </p>
            <ul className="list-disc pl-6 space-y-4">
                <li>
                    <strong className="text-foreground">Functional ideation (Lovable):</strong> I prototyped the interface around <strong className="text-foreground">utility UX</strong>. The design had to &quot;disappear&quot; so the function could shine: raw code in, polished code out.
                </li>
                <li>
                    <strong className="text-foreground">Precision engineering (Cursor):</strong> I moved the project to Cursor to code rigid business rules — deterministic sanitization that an LLM couldn&apos;t maintain consistently, ensuring the HTML met global email-rendering standards.
                </li>
            </ul>

            <div className="flex flex-col gap-4">
                <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--brand, hsl(var(--foreground)))' }}>
                    Key decisions & trade-offs
                </span>
                <div className="grid gap-px overflow-hidden rounded-lg border border-border/30 bg-border/30 md:grid-cols-3">
                    {tradeoffs.map((t) => (
                        <div key={t.decision} className="flex flex-col gap-3 bg-background p-5">
                            <p className="font-semibold text-foreground">{t.decision}</p>
                            <p className="text-sm text-muted-foreground">
                                <span className="font-mono text-xs uppercase tracking-wider text-foreground/50">Gain</span>
                                <br />
                                {t.gain}
                            </p>
                            <p className="text-sm text-muted-foreground">
                                <span className="font-mono text-xs uppercase tracking-wider text-foreground/50">Cost</span>
                                <br />
                                {t.cost}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </CaseStudySection>
    );
}
