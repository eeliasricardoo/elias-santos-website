'use client';

import { CaseStudySection, CaseFigure } from '@/components/portfolio/ui';

export function PhilosophySection() {
    return (
        <CaseStudySection eyebrow="Context" index={1} title="Solve your own pain first">
            <p>
                At <strong className="text-foreground">Serasa Experian</strong> (the Brazilian arm of the global credit bureau), I was the designer responsible for producing campaign emails in Salesforce Marketing Cloud. The friction wasn&apos;t theoretical — I felt it every day: changes that should take minutes meant diving back into code, and every campaign repeated the same manual ritual.
            </p>
            <p>
                My approach was pragmatic: <strong className="text-foreground">if I can&apos;t use UX and AI to fix my own daily workflow, how can I design efficient solutions for millions of people?</strong> EmailFlow Pro wasn&apos;t born as a portfolio piece. It was a survival tool.
            </p>

            <CaseFigure
                label="Fig. 01"
                src="/portfolios/sfmc-magic-builder/interface-full.webp"
                alt="EmailFlow Pro interface — HTML editor, image log processor, AMPScript block and output panel"
                caption="The finished tool, live at sfmc-magic-builder.vercel.app: paste the email HTML, feed it the SFMC image log and AMPScript, get a production-ready email on the right."
            />
        </CaseStudySection>
    );
}
