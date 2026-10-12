'use client';

import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { CaseStudySection } from '../ui/CaseStudySection';
import { BrowserFrame } from '../ui/BrowserFrame';
import { ClaritySignals, LessonFlow, RoomStates } from './diagrams';

const LIVE_URL = 'https://ilevar.com';
const FIGMA_URL = 'https://www.figma.com/design/7Jp9KZAPYgKUxvl5a5yVWQ/Ilevar-%E2%80%94-Design-system';
const IMG = '/portfolios/ilevar';

/** Screenshot in a browser window, with a caption. */
function Shot({ src, alt, caption, route }: { src: string; alt: string; caption: string; route?: string }) {
    return (
        <figure className="flex flex-col gap-3">
            <BrowserFrame route={route}>
                <img src={src} alt={alt} loading="lazy" decoding="async" className="block h-auto w-full" />
            </BrowserFrame>
            <figcaption className="text-sm leading-relaxed text-[var(--px-dim)]">{caption}</figcaption>
        </figure>
    );
}

/** Short looping screen recording in a browser window. Silent, so it may autoplay. */
function Clip({ name, label, caption, route }: { name: string; label: string; caption: string; route?: string }) {
    return (
        <figure className="flex flex-col gap-3">
            <BrowserFrame route={route}>
                <video
                    src={`${IMG}/${name}.mp4`}
                    poster={`${IMG}/${name}-poster.webp`}
                    aria-label={label}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="block h-auto w-full"
                />
            </BrowserFrame>
            <figcaption className="text-sm leading-relaxed text-[var(--px-dim)]">{caption}</figcaption>
        </figure>
    );
}

/** Figma export on a plain card (no browser chrome — it is not a web page). */
function Board({ src, alt, caption, className = '' }: { src: string; alt: string; caption: string; className?: string }) {
    return (
        <figure className={`flex flex-col gap-3 ${className}`}>
            <div className="overflow-hidden rounded-xl border border-[var(--px-line)] bg-white">
                <img src={src} alt={alt} loading="lazy" decoding="async" className="block h-auto w-full" />
            </div>
            <figcaption className="text-sm leading-relaxed text-[var(--px-dim)]">{caption}</figcaption>
        </figure>
    );
}

function Facts({ items }: { items: { value: string; label: string }[] }) {
    return (
        <dl className="grid grid-cols-2 gap-x-8 gap-y-6 border-y border-[var(--px-line)] py-6 md:grid-cols-4">
            {items.map((f) => (
                <div key={f.label}>
                    <dd className="font-pixel text-3xl font-semibold text-[var(--px-ink)]">{f.value}</dd>
                    <dt className="mt-1 text-sm leading-snug text-[var(--px-muted)]">{f.label}</dt>
                </div>
            ))}
        </dl>
    );
}

export function HeroSection() {
    return (
        <section className="flex flex-col gap-10">
            <div className="flex flex-col items-start gap-6">
                <p className="font-pixel-label text-[11px] text-[var(--px-dim)]">UX Engineering case study · 2026, ongoing</p>
                <h1 className="text-5xl md:text-7xl">ilevar</h1>
                <p className="max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
                    A platform for language schools where AI prepares the lesson and a real teacher still teaches it live. This is how I
                    mapped the flows, built the design system in Figma and in code, and what the usage data is telling me now.
                </p>
                <div className="flex flex-wrap gap-3">
                    <a href={LIVE_URL} target="_blank" rel="noopener noreferrer" className="px-btn px-btn--primary">
                        Open ilevar.com <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                    <a href={FIGMA_URL} target="_blank" rel="noopener noreferrer" className="px-btn">
                        Design system in Figma <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                </div>
            </div>

            <div className="-mx-4 md:-mx-16 lg:-mx-24">
                <BrowserFrame route="ilevar.com">
                    <video
                        src={`${IMG}/hero.mp4`}
                        poster={`${IMG}/hero-poster.webp`}
                        aria-label="The ilevar home page. A teacher types a one-line request, the lesson plan fills in, and homework arrives on a student's phone."
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="block h-auto w-full"
                    />
                </BrowserFrame>
            </div>

            <Facts
                items={[
                    { value: '16', label: 'activity types in the live classroom' },
                    { value: '134', label: 'colour tokens, mirrored between Figma and CSS' },
                    { value: '113', label: 'automated design-system assertions' },
                    { value: '4', label: 'interface languages: PT, EN, ES, FR' },
                ]}
            />
        </section>
    );
}

export function ProblemSection() {
    return (
        <CaseStudySection eyebrow="Problem" index={1} title="Six problems every language school repeats">
            <p>
                A language lesson usually lives in pieces: the call in Zoom, the material in a PDF, the quiz in Kahoot, the notes in Notion.
                Around that sit the problems school owners describe in almost the same words. Teachers spend Sundays building lessons.
                Rescheduling happens on WhatsApp. Online classes turn into video calls students only watch. Nobody practises between
                lessons. When a teacher leaves, what the student covered leaves too. And students who cannot see progress cancel.
            </p>
            <Board
                src={`${IMG}/problem.webp`}
                alt="The problem section of the ilevar home page: six quotes from school owners, each paired with how the product answers it."
                caption="The home page opens with these six quotes. Each card links to the part of the product that answers it."
            />
            <p>
                ilevar started as a marketplace where students found teachers. It is now built for the people who live with these problems:
                school owners and independent teachers, who need one place to teach and to run the school.
            </p>
        </CaseStudySection>
    );
}

export function AiSection() {
    return (
        <CaseStudySection eyebrow="Design decision" index={5} title="The AI output is a draft, and the interface says so">
            <p>
                The teacher gives a topic, a level and a duration, and the AI assembles a timed plan. The decision that shaped the screen
                was what happens next. A generated lesson that goes straight to students would save the most time, and it would also
                remove the teacher's judgment from the one place it matters. So the result lands as editable steps, each with its type and
                minutes, under a line that reads "Lesson ready. You review it and decide what stays."
            </p>
            <Clip
                name="ai-builder"
                label="The AI lesson builder: a request is typed and the lesson plan fills in step by step with reading, vocabulary, grammar, drilling and a quiz."
                caption="The plan fills a time budget, so the teacher sees at a glance whether the lesson fits the hour before editing it."
                route="ilevar.com/dashboard/library/new"
            />
            <Shot
                src={`${IMG}/lesson-plan.webp`}
                alt="A lesson plan in ilevar called Binge culture, level A1: nine timed steps including quiz, grammar, flashcards, fill in, listening and drilling, filling 60 of 60 minutes."
                caption="The same structure in a real lesson: nine steps, each with its activity type and duration, filling 60 of 60 minutes."
                route="ilevar.com/dashboard/trail"
            />
        </CaseStudySection>
    );
}

export function FlowSection() {
    return (
        <CaseStudySection eyebrow="User flow" index={3} title="One loop, two people, one shared room">
            <p>
                Before drawing screens I mapped the product as a single loop seen from two sides. The teacher's path and the student's path
                only truly meet in one place, the live room, so every other screen is judged by one question: does it get this person into
                the room prepared, or does it carry something useful out of it?
            </p>
            <LessonFlow />
            <p>
                Mapping it this way exposed where context was being dropped. The lesson summary, the homework and the notebook all sit
                after the room, and all three are built from what happened inside it. That is why homework is generated from the lesson
                that just ended and not from a generic bank, and why each lesson becomes a page in the student's notebook that the next
                teacher can open.
            </p>
            <Clip
                name="ai-homework"
                label="Homework on a phone: a fill-in-the-blank exercise, instant feedback, a result screen with 9 out of 10 correct, and the teacher being notified."
                caption="The last step of the loop: homework built from the lesson, one exercise per screen, with the result going back to the teacher."
                route="ilevar.com"
            />
            <p>
                The full map lives in the repository as a document with flowcharts for every role (visitor, student, teacher, school owner,
                admin), the screen inventory, and a confidence level for each part: what is confirmed by routes and guards, and what still
                has to be checked in a browser.
            </p>
        </CaseStudySection>
    );
}

export function StatesSection() {
    return (
        <CaseStudySection eyebrow="Edge cases" index={4} title="Designing the moments when the room is not available">
            <p>
                A room link gets shared, bookmarked and opened at the wrong time. Most of the experience of a live product is decided in
                those moments, so I designed the states before the happy path: a lesson is scheduled, live, completed or cancelled, and
                each visitor to a room link gets an answer that makes sense for where the lesson is and who they are.
            </p>
            <RoomStates />
            <p>
                The rule behind the table is that nobody lands on a dead end. A finished lesson leads to its summary; a student who is
                early is told the room is not open yet; someone who does not belong is taken to something that is theirs.
            </p>
        </CaseStudySection>
    );
}

const LOOP = [
    { step: 'Figma', text: 'Tokens, components and full screen patterns, each with its real states: default, empty, saving, error.' },
    { step: 'Build', text: 'The same structure in code: atoms, molecules, organisms. Dependencies only point downwards.' },
    { step: 'Code', text: 'Next.js, React and TypeScript in production, including the live classroom and the billing flows.' },
    { step: 'Support', text: 'An in-product help widget with guides, a changelog and tickets that reach me with context attached.' },
    { step: 'Experience', text: 'User flows, states and edge cases mapped before screens, and revised with what support and recordings show.' },
    { step: 'Clarity', text: 'Microsoft Clarity heatmaps and recordings, loaded only after the visitor consents.' },
];

export function RoleSection() {
    return (
        <CaseStudySection eyebrow="My role" index={2} title="One person, the whole loop">
            <p>
                The bet behind ilevar is that AI should do the preparation and a person should do the teaching, and that what connects
                them is context: the AI works from what this class actually covered. My job is to make that bet usable. I work on it as
                a UX Engineer, which here means there is no handoff. The person who maps the flow also draws the component, ships it,
                reads the ticket when it confuses someone, and watches the recording to see why.
            </p>
            <ol className="grid grid-cols-1 gap-x-10 border-t border-[var(--px-line)] md:grid-cols-2">
                {LOOP.map((item, i) => (
                    <li key={item.step} className="flex gap-4 border-b border-[var(--px-line)] py-5">
                        <span className="font-pixel-label pt-1 text-[11px] text-[var(--px-dim)]">{String(i + 1).padStart(2, '0')}</span>
                        <div>
                            <p className="font-pixel text-lg font-semibold text-[var(--px-ink)]">{item.step}</p>
                            <p className="mt-1 text-base leading-relaxed text-muted-foreground">{item.text}</p>
                        </div>
                    </li>
                ))}
            </ol>
        </CaseStudySection>
    );
}

export function FigmaSection() {
    return (
        <CaseStudySection eyebrow="Figma" index={6} title="A design system that matches the code, token for token">
            <p>
                The Figma file is organised the way the product is built: Foundations, Icons, then Atoms, Molecules and Organisms, then
                Patterns, where components are combined into real screens. The colour collection holds 134 tokens, and every one carries the
                CSS variable it maps to, so a swatch in Figma and a class in the codebase are the same thing with the same name. Aliases
                are marked, so it is visible that the focus ring is the primary blue and not a second blue that happens to match.
            </p>
            <p>
                I keep the file honest by reconciling it against the code, not the other way round. The stylesheet is the source of
                truth; when the two disagree, the inventory in the repository says which token is real, and the Figma variable is fixed to
                match. The cover of the file carries the date of the last reconciliation.
            </p>
            <Board
                src={`${IMG}/ds-cover.webp`}
                alt="Cover of the ilevar design system Figma file listing its pages: Foundations, Icons, Atoms, Molecules, Organisms, Patterns and References."
                caption="The file's cover. The last line points to the document in the repository that the file is reconciled against."
            />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <Board
                    src={`${IMG}/ds-color.webp`}
                    alt="Colour foundations in Figma: the primary blue ramp, status colours and CEFR level colours, each labelled with its CSS variable."
                    caption="Colour foundations. Each swatch shows its value and its CSS variable; arrows mark aliases."
                />
                <Board
                    src={`${IMG}/ds-type.webp`}
                    alt="Typography styles in Figma, from display to heading sizes, each annotated with the Tailwind classes that produce it."
                    caption="Type styles, annotated with the classes that render them and where each one is used."
                />
            </div>
            <p>
                Patterns are drawn with their states, not just the happy path. A table has its empty state next to it; a dialog has its
                saving and error versions. That is what makes the file useful to build from: the awkward cases are already decided.
            </p>
            <Board
                src={`${IMG}/ds-dialog-states.webp`}
                alt="One dialog in Figma drawn in four states: empty, filled, saving with the button disabled, and error with a message at the top."
                caption="One dialog, four states: empty, filled, saving and error. The component set is the specification."
            />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <Board
                    src={`${IMG}/ds-table.webp`}
                    alt="Tenants table pattern in Figma, shown in its default state with four schools and in its empty search state."
                    caption="Admin pattern: the schools table, default and empty."
                />
                <Board
                    src={`${IMG}/ds-plan.webp`}
                    alt="Plan panel pattern in Figma in three states: active subscription, trial and past due."
                    caption="The same plan panel as active, trial and past due."
                />
            </div>
            <p>
                <a
                    href={FIGMA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-[var(--px-ink)] underline decoration-[var(--px-line)] underline-offset-4 hover:decoration-[var(--px-ink)]"
                >
                    Open the design system in Figma <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only"> (opens in a new tab)</span>
                </a>
            </p>
        </CaseStudySection>
    );
}

export function BuildSection() {
    return (
        <CaseStudySection eyebrow="Build and code" index={7} title="Rules that are tested, not remembered">
            <p>
                In code the system is 32 atoms, 14 molecules and 12 organisms, with one rule about direction: organisms may use molecules,
                molecules may use atoms, and nothing in those layers imports feature code. The tokens live in a single stylesheet, which is
                the source of truth for both the app and the Figma file.
            </p>
            <p>
                The accessibility rules are enforced by tests. Every colour pair the interface renders is checked against WCAG AA, calculated
                from the real stylesheet. The brand blue, <code>#0563A8</code>, carries white text at 6.26:1 and is dark enough to work as
                text on a light surface too, so it needs no separate ink token. When a token changes and a pair fails, the fix is to change
                the token, not to lower the threshold.
            </p>
            <Facts
                items={[
                    { value: '32 · 14 · 12', label: 'atoms, molecules, organisms' },
                    { value: '113', label: 'design-system assertions in 5 test files' },
                    { value: '6.26:1', label: 'contrast of white on the brand blue' },
                    { value: '26', label: 'end-to-end specs covering the main flows' },
                ]}
            />
            <Board
                src={`${IMG}/ds-system.webp`}
                alt="System stability patterns in Figma: header with auto-refresh states, health banner in healthy and degraded states, presence KPIs, online users table and service health cards."
                caption="The internal admin gets the same care as the product: system health, presence and diagnostics, each with its states."
            />
        </CaseStudySection>
    );
}

export function SupportSection() {
    return (
        <CaseStudySection eyebrow="Support" index={8} title="Support is part of the interface">
            <p>
                Teachers and school owners have a help widget inside the product with three things: short guides, a changelog of what
                shipped, and a ticket form. A ticket goes to one of four queues (technical, pedagogical, financial or feedback) with a
                severity, and it automatically carries the page the person was on and their browser. I do not have to ask "where were you
                when it happened?".
            </p>
            <p>
                Because I am also the one who answers, the ticket and the fix sit with the same person. A confusing screen is something I
                can redraw and ship, not a request I pass along. The public site makes the same promise to schools: every issue is followed
                through, and they are told when the fix is live.
            </p>
            <Clip
                name="human-support"
                label="A chat between a school and the ilevar team: the school asks for something, the team answers and delivers it."
                caption="How the public site shows it: a school asks, a person answers, and the request ships."
                route="ilevar.com"
            />
        </CaseStudySection>
    );
}

export function ClaritySection() {
    return (
        <CaseStudySection eyebrow="Measuring" index={9} title="What 30 days of Clarity say, and what I do about it">
            <p>
                Microsoft Clarity runs on the product, loaded only after a visitor accepts analytics in the cookie banner; someone who
                picks "essential only" is never recorded. In the last 30 days it logged 386 sessions from 77 people, with 6.5 pages and 5.2
                active minutes per session. Two of the signals are good news and two are work to do.
            </p>
            <Shot
                src={`${IMG}/clarity.webp`}
                alt="Microsoft Clarity dashboard for ilevar, last 30 days: 386 sessions, 6.52 pages per session, 5.2 minutes active time, 77 unique users, 68% returning sessions, rage clicks 1.04%, dead clicks 38.60%, quick backs 47.67%."
                caption="The Clarity dashboard for ilevar, last 30 days."
                route="clarity.microsoft.com"
            />
            <ClaritySignals />
            <p>
                The same questions were already on my list from mapping the flows, which is what makes the numbers useful. These are the
                ones I am validating next:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                <li>Whether teachers understand the difference between Library, Lessons and Templates without being told.</li>
                <li>Who confirms a pending booking, and whether both sides can tell pending from confirmed at a glance.</li>
                <li>
                    Whether the single onboarding screen is enough for a new teacher. I built a guided tour and removed it two days later;
                    the question it was answering is still open.
                </li>
                <li>The full class-group path on mobile: group, members, lesson, attendance, summary.</li>
            </ul>
        </CaseStudySection>
    );
}

const STACK: [string, string][] = [
    ['Framework', 'Next.js 16 (App Router), React 19, TypeScript'],
    ['Interface', 'Tailwind CSS 4, shadcn/ui, Motion'],
    ['Data', 'PostgreSQL on Supabase, Prisma, 57 models'],
    ['Auth', 'Auth.js (NextAuth v5)'],
    ['Live video', 'WebRTC for 1:1, Cloudflare Calls for class groups'],
    ['AI', 'OpenRouter for lesson and homework generation'],
    ['Payments', 'Stripe: subscriptions, add-ons and Connect payouts'],
    ['Quality', 'Vitest and Playwright; 26 end-to-end specs'],
];

export function StackSection() {
    return (
        <CaseStudySection eyebrow="Under the hood" index={10} title="The stack, briefly">
            <dl className="border-t border-[var(--px-line)] text-base">
                {STACK.map(([k, v]) => (
                    <div key={k} className="grid grid-cols-1 gap-1 border-b border-[var(--px-line)] py-3 sm:grid-cols-[10rem_1fr] sm:gap-6">
                        <dt className="font-pixel-label pt-1 text-[11px] text-[var(--px-dim)]">{k}</dt>
                        <dd className="text-[var(--px-ink)]">{v}</dd>
                    </div>
                ))}
            </dl>
            <p>
                The repository has more than 2,500 commits and 680 merged pull requests since May 2026. I use Claude Code as a pair for
                refactors and for keeping token usage consistent across the codebase; the design decisions and the review are mine.
            </p>
        </CaseStudySection>
    );
}

export function CallToActionSection() {
    return (
        <section className="flex flex-col items-start gap-6 border-t border-[var(--px-line)] pt-12">
            <h2 className="text-3xl md:text-4xl">Design, code and support, from one person</h2>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                ilevar is how I like to work: close enough to the code to ship the component, and close enough to the users to hear when it
                fails. If that is the kind of UX Engineer you are hiring, let's talk.
            </p>
            <div className="flex flex-wrap gap-3">
                <a href="https://calendly.com/eeliasricardoo" target="_blank" rel="noopener noreferrer" className="px-btn px-btn--primary">
                    Schedule a call
                    <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <a href="/portfolio/sfmc-magic-builder" className="px-btn">
                    Next case: EmailFlow Pro <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
            </div>
        </section>
    );
}
