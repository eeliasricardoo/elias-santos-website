'use client';

import { CaseStudySection } from '@/components/portfolio/ui';

export function ConflictSection() {
    return (
        <>
            <CaseStudySection eyebrow="Problem" index={3} title="The cost of &quot;manual labor&quot;">
                <p>
                    Developing for Salesforce Marketing Cloud (SFMC) requires absolute precision — these emails went out to millions of Serasa Experian customers. My manual workflow was a massive bottleneck:
                </p>
                <ul className="list-disc pl-6 space-y-4">
                    <li>
                        <strong className="text-foreground">Time-consuming:</strong> 80 minutes per email.
                    </li>
                    <li>
                        <strong className="text-foreground">Image re-linking:</strong> Hand-swapping every local image <code>src</code> for its SFMC content URL, one at a time, from an upload log.
                    </li>
                    <li>
                        <strong className="text-foreground">High risk:</strong> Manually injecting AMPScript and checking 20+ links per campaign for millions of customers.
                    </li>
                </ul>
                <p>
                    I was acting like a &quot;human compiler.&quot; My creative energy was being drained by tasks that technology should have solved—but didn't.
                </p>
            </CaseStudySection>

            <CaseStudySection eyebrow="Constraint" index={4} title="Why generic AI (ChatGPT) failed">
                <p>
                    My first instinct was to use ChatGPT. I tried custom GPTs and complex prompts, but it revealed the limits of conversational AI:
                </p>
                <ul className="list-disc pl-6 space-y-4">
                    <li>
                        <strong className="text-foreground">Technical Hallucinations:</strong> GPT often invented AMPScript syntax, creating code that crashed inside Salesforce.
                    </li>
                    <li>
                        <strong className="text-foreground">Inconsistency:</strong> Being a probabilistic model, the HTML structure changed every time. I spent more time reviewing the AI's work than doing it myself.
                    </li>
                    <li>
                        <strong className="text-foreground">Lack of Workflow:</strong> A chat is a conversation, not a tool. Copying and pasting code back and forth is just another bottleneck. I needed a <strong className="text-foreground">precision tool</strong>, not a chat window.
                    </li>
                </ul>
            </CaseStudySection>
        </>
    );
}
