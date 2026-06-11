'use client';

import {
    CaseStudySection,
    TestCard,
    AdjustmentCard,
} from '@/components/portfolio/ui';

const ICONS = {
    check: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    inbox:
        'M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4',
    link: 'M13.828 10.172a4 4 0 010 5.656l-3 3a4 4 0 01-5.656-5.656l1.5-1.5M10.172 13.828a4 4 0 010-5.656l3-3a4 4 0 015.656 5.656l-1.5 1.5',
    wrench:
        'M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63',
};

const tests = [
    {
        icon: ICONS.inbox,
        title: 'Real campaign replay',
        description:
            'I ran emails I had already shipped by hand through the tool and diffed the output. The assembled HTML had to match the version that already went to production.',
    },
    {
        icon: ICONS.check,
        title: 'Image-swap accuracy',
        description:
            'Every image src in the HTML had to resolve to the correct SFMC content URL from the log — no leftovers, no wrong matches, even with dozens of assets.',
    },
    {
        icon: ICONS.link,
        title: 'Link & AMPScript integrity',
        description:
            'I seeded emails with bad links and edge-case AMPScript to confirm the analyzer caught them and the injection survived without breaking the build.',
    },
];

const fixes = [
    {
        icon: ICONS.wrench,
        title: 'The image log came in inconsistent formats',
        description:
            'Different exports gave me &quot;Nome: x, URL: …&quot;, plain &quot;filename → URL&quot;, and JSON. Rather than force one format on my colleagues, I made the parser accept all three.',
    },
    {
        icon: ICONS.wrench,
        title: 'Filenames in the HTML didn&apos;t always match the log',
        description:
            'Casing and path prefixes broke naïve matching, so images silently stayed un-swapped. I normalized filenames before matching so a near-match still resolves.',
    },
    {
        icon: ICONS.wrench,
        title: '&quot;Did it actually work?&quot; anxiety',
        description:
            'A silent transform isn&apos;t trustworthy when millions of sends are on the line. Surfacing the link analysis and a clear processed-output panel turned that doubt into a visible check.',
    },
];

export function ValidationSection() {
    return (
        <CaseStudySection eyebrow="Validation" index={6} title="What I tested — and what broke">
            <p>
                A tool my team would trust with millions of sends can&apos;t be validated by &quot;it looks fine.&quot; The bar was strict:
                <strong className="text-foreground"> the assembled email had to match the version we already produced by hand</strong> — same
                images, same personalization, same links. So I tested it against real campaigns, not happy-path samples.
            </p>

            <div className="grid gap-8 md:grid-cols-3">
                {tests.map((t) => (
                    <TestCard key={t.title} icon={t.icon} title={t.title} description={t.description} />
                ))}
            </div>

            <p className="text-foreground font-semibold">
                Testing against real data surfaced three failures that shaped the final product:
            </p>

            <div className="flex flex-col gap-6">
                {fixes.map((f) => (
                    <AdjustmentCard key={f.title} icon={f.icon} title={f.title} description={f.description} />
                ))}
            </div>

            <p>
                None of these showed up in the original prototype. They only appeared under real logs and real campaigns — which is
                exactly why shipping a working tool to my own team and stress-testing it beat polishing a mockup.
            </p>
        </CaseStudySection>
    );
}
