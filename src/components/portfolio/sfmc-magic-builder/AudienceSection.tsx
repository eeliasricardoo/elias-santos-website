'use client';

import { CaseStudySection, InfoCard } from '@/components/portfolio/ui';

const jobs = [
    {
        title: 'Re-link every image to its SFMC URL',
        description:
            'After uploading assets to SFMC, the team had to manually swap each local image src for its final content-CDN URL. Dozens per campaign, all by hand.',
    },
    {
        title: 'Inject AMPScript without breaking the layout',
        description:
            'Personalization blocks had to land in the right place and survive the build — one wrong escape and the send fails for millions.',
    },
    {
        title: 'Verify every link before it ships',
        description:
            'A broken or untracked link reaches the entire base. They needed to scan all links at a glance, not hunt through raw HTML.',
    },
];

export function AudienceSection() {
    return (
        <CaseStudySection eyebrow="Users" index={2} title="Who I was actually designing for">
            <p>
                The users weren&apos;t a market — they were <strong className="text-foreground">my own team: the internal CRM and email-marketing
                staff at Serasa Experian</strong> who finish campaign emails in Salesforce Marketing Cloud. People fluent in HTML and design,
                but not interested in defending AMPScript edge cases on a deadline.
            </p>
            <p>
                Designing for internal colleagues changed the priorities. There&apos;s no marketing funnel, no onboarding, no sign-up — just a
                tool that has to <strong className="text-foreground">earn trust on the first paste</strong>. Because the stakes are millions of
                recipients, their deepest need wasn&apos;t speed, it was <strong className="text-foreground">verifiable correctness</strong>. Speed was
                the headline; trust was the spec.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
                {jobs.map((job, i) => (
                    <InfoCard
                        key={job.title}
                        title={job.title}
                        description={job.description}
                        animationDelay={i * 0.1}
                    />
                ))}
            </div>

            <p className="text-base text-muted-foreground/80">
                <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--brand, hsl(var(--foreground)))' }}>
                    Jobs-to-be-done
                </span>{' '}
                — framed as the outcomes my colleagues were &quot;hiring&quot; the tool to achieve, not features I wanted to build.
            </p>
        </CaseStudySection>
    );
}
