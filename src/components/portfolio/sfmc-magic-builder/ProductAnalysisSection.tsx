'use client';

import { CaseStudySection, CaseFigure } from '@/components/portfolio/ui';
import { ExternalLink } from 'lucide-react';

export function ProductAnalysisSection() {
    return (
        <CaseStudySection eyebrow="Implementation" index={8} title="The tool, end to end">
            <p>
                The result is a client-side single-page app with three inputs and one trustworthy output. You paste the raw email,
                hand it the data SFMC gives you, and it assembles a production-ready version — nothing leaves the browser.
            </p>

            <CaseFigure
                label="Fig. 02"
                src="/portfolios/sfmc-magic-builder/interface-top.webp"
                alt="EmailFlow Pro on desktop: three input modules feeding one output panel"
                caption="Three inputs, one output, all on one screen — no tabs, no wizard. Built for a desktop workflow, where the team produces campaigns."
            />

            <ul className="list-disc pl-6 space-y-4">
                <li>
                    <strong className="text-foreground">HTML Editor:</strong> Paste, upload a <code>.html</code> file, preview the rendered email, and format the markup. The starting point for every campaign.
                </li>
                <li>
                    <strong className="text-foreground">Image Log Processor:</strong> The core. SFMC spits out an upload log like <code>Nome: banner.gif, URL: …sfmc-content.com/…</code>. The tool parses it (that format, <code>filename → URL</code>, or JSON) and <strong className="text-foreground">automatically rewrites every image <code>src</code> to its final SFMC content URL</strong> — the most error-prone manual step, gone.
                </li>
                <li>
                    <strong className="text-foreground">AMPScript Block + Link Analysis:</strong> Paste your <code>%%[ … ]%%</code> block and it&apos;s injected in the right place; &quot;Analisar Links&quot; scans every link so you can verify protocols and tracking before the send reaches millions.
                </li>
            </ul>

            <div className="flex flex-col gap-4 rounded-lg border border-border/30 bg-secondary/20 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="font-semibold text-foreground">It&apos;s live — try it yourself.</p>
                    <p className="text-sm text-muted-foreground">Paste any email HTML and watch the three-step assembly run client-side.</p>
                </div>
                <a
                    href="https://sfmc-magic-builder.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold text-background"
                    style={{ backgroundColor: 'var(--brand, hsl(var(--foreground)))' }}
                >
                    Open the live tool
                    <ExternalLink className="h-4 w-4" />
                </a>
            </div>
        </CaseStudySection>
    );
}
