import { ArrowRight } from 'lucide-react';

type Actor = 'ai' | 'teacher' | 'student' | 'system';

interface Step {
    label: string;
    route?: string;
    actor: Actor;
}

const ACTOR_LABEL: Record<Actor, string> = { ai: 'AI drafts', teacher: 'Teacher', student: 'Student', system: 'System' };

const TEACHER_BEFORE: Step[] = [
    { label: 'Open the library', route: '/dashboard/library', actor: 'teacher' },
    { label: 'Describe the lesson in one line', route: '/lessons/templates/new', actor: 'ai' },
    { label: 'Review and prepare the plan', route: '/lessons/:id/prepare', actor: 'teacher' },
];
const TEACHER_AFTER: Step[] = [
    { label: 'End the class', actor: 'teacher' },
    { label: 'Summary, notes and attendance', route: '/lessons/:id/summary', actor: 'teacher' },
    { label: 'Send homework from the lesson', route: '/dashboard/homework', actor: 'ai' },
];
const STUDENT_AFTER: Step[] = [
    { label: 'Read the lesson summary', route: '/lessons/:id/summary', actor: 'student' },
    { label: 'Do the homework on the phone', route: '/dashboard/homework', actor: 'student' },
    { label: 'Find it later in the notebook', route: '/dashboard/book', actor: 'student' },
];

function Node({ step, arrow = true }: { step: Step; arrow?: boolean }) {
    const ai = step.actor === 'ai';
    return (
        <div className="relative flex min-h-[6.5rem] flex-col justify-between gap-3 rounded-lg border border-[var(--px-line)] bg-[var(--px-panel)] p-3">
            <div className="flex flex-col gap-1.5">
                <span
                    className={`font-pixel-label w-fit rounded px-1.5 py-0.5 text-[9px] ${
                        ai ? 'bg-[var(--px-accent)] text-white' : 'bg-[var(--px-bg-2)] text-[var(--px-dim)]'
                    }`}
                >
                    {ACTOR_LABEL[step.actor]}
                </span>
                <p className="text-sm font-medium leading-snug text-[var(--px-ink)]">{step.label}</p>
            </div>
            {step.route && <p className="break-all font-mono text-[10px] leading-tight text-[var(--px-dim)]">{step.route}</p>}
            {arrow && (
                <ArrowRight
                    className="absolute -right-[15px] top-1/2 z-10 h-3.5 w-3.5 -translate-y-1/2 text-[var(--px-dim)]"
                    aria-hidden="true"
                />
            )}
        </div>
    );
}

function LaneLabel({ children }: { children: string }) {
    return <p className="font-pixel-label self-center text-[11px] text-[var(--px-dim)]">{children}</p>;
}

/**
 * The core loop as a two-lane flow: what the teacher does and what the student
 * does before, during and after a class. The live room is the one shared step.
 */
export function LessonFlow() {
    return (
        <figure className="flex flex-col gap-3">
            <div className="-mx-4 overflow-x-auto px-4 pb-2 md:-mx-16 md:px-0 lg:-mx-24">
                <div
                    className="grid min-w-[1000px] gap-x-4 gap-y-3"
                    style={{ gridTemplateColumns: '3.75rem repeat(7, minmax(0, 1fr))' }}
                    role="img"
                    aria-label="User flow in two lanes. Teacher: open the library, describe the lesson so AI drafts it, review and prepare the plan, run the live room, end the class, write the summary, send homework generated from the lesson. Student: see the next lesson on the dashboard, join the same live room, read the summary, do the homework on the phone, find the lesson later in the notebook."
                >
                    <span />
                    <p className="font-pixel-label col-span-3 border-b border-[var(--px-line)] pb-2 text-[11px] text-[var(--px-dim)]">Before class</p>
                    <p className="font-pixel-label border-b border-[var(--px-ink)] pb-2 text-[11px] text-[var(--px-ink)]">In class</p>
                    <p className="font-pixel-label col-span-3 border-b border-[var(--px-line)] pb-2 text-[11px] text-[var(--px-dim)]">After class</p>

                    <LaneLabel>Teacher</LaneLabel>
                    {TEACHER_BEFORE.map((s) => (
                        <Node key={s.label} step={s} />
                    ))}
                    <div className="relative row-span-2 flex flex-col justify-between gap-3 rounded-lg bg-[var(--px-ink)] p-3 text-white">
                        <div className="flex flex-col gap-1.5">
                            <span className="font-pixel-label w-fit rounded bg-white/15 px-1.5 py-0.5 text-[9px]">Together, live</span>
                            <p className="text-sm font-medium leading-snug">The live room: video, the activity and chat on one screen</p>
                        </div>
                        <p className="font-mono text-[10px] leading-tight text-white/60">/room/:lessonId</p>
                        <ArrowRight className="absolute -right-[15px] top-1/2 z-10 h-3.5 w-3.5 -translate-y-1/2 text-[var(--px-dim)]" aria-hidden="true" />
                    </div>
                    {TEACHER_AFTER.map((s, i) => (
                        <Node key={s.label} step={s} arrow={i < TEACHER_AFTER.length - 1} />
                    ))}

                    <LaneLabel>Student</LaneLabel>
                    <div className="col-span-3">
                        <Node step={{ label: 'See the next lesson on the dashboard and join when the room opens', route: '/dashboard', actor: 'student' }} />
                    </div>
                    {STUDENT_AFTER.map((s, i) => (
                        <Node key={s.label} step={s} arrow={i < STUDENT_AFTER.length - 1} />
                    ))}
                </div>
            </div>
            <figcaption className="text-sm leading-relaxed text-[var(--px-dim)]">
                The core loop. Blue marks the two places where AI produces a draft; everything else is a person acting. Routes are the real
                ones in the product.
            </figcaption>
        </figure>
    );
}

const LESSON_STATES = [
    { name: 'Scheduled', note: 'class created' },
    { name: 'Live', note: 'room started' },
    { name: 'Completed', note: 'class ended' },
];

const ENTRY_RULES: [string, string][] = [
    ['Not signed in', 'Sent to login.'],
    ['Signed in, but not part of this lesson', 'Sent to their own bookings.'],
    ['The lesson has already finished', 'Sent to the lesson summary instead of an empty room.'],
    ['A student arrives before the room opens', 'Back to the dashboard with a "room not open yet" notice.'],
    ['A participant arrives inside the entry window', 'Joins the room.'],
];

/** Lesson lifecycle plus what each visitor to /room/:id actually gets. */
export function RoomStates() {
    return (
        <figure className="flex flex-col gap-6">
            <div
                className="flex flex-col gap-4 rounded-xl border border-[var(--px-line)] bg-[var(--px-bg-2)] p-5 sm:p-6"
                role="img"
                aria-label="Lesson states: Scheduled, then Live, then Completed. A lesson can be cancelled from Scheduled or from Live."
            >
                <p className="font-pixel-label text-[11px] text-[var(--px-dim)]">Lesson lifecycle</p>
                <div className="flex flex-wrap items-center gap-3">
                    {LESSON_STATES.map((s, i) => (
                        <div key={s.name} className="flex items-center gap-3">
                            <div className="rounded-lg border border-[var(--px-line)] bg-[var(--px-panel)] px-4 py-3">
                                <p className="font-pixel text-base font-semibold text-[var(--px-ink)]">{s.name}</p>
                                <p className="text-xs text-[var(--px-dim)]">{s.note}</p>
                            </div>
                            {i < LESSON_STATES.length - 1 && <ArrowRight className="h-4 w-4 text-[var(--px-dim)]" aria-hidden="true" />}
                        </div>
                    ))}
                </div>
                <p className="text-sm text-[var(--px-muted)]">
                    <span className="rounded border border-dashed border-[var(--px-dim)] px-2 py-0.5 font-medium text-[var(--px-ink)]">Cancelled</span>{' '}
                    can be reached from Scheduled or, in exceptional cases, from Live.
                </p>
            </div>

            <table className="w-full border-t border-[var(--px-line)] text-left text-base">
                <caption className="sr-only">What happens when someone opens a room link</caption>
                <thead>
                    <tr className="border-b border-[var(--px-line)]">
                        <th scope="col" className="font-pixel-label w-1/2 py-3 pr-6 text-[11px] font-normal text-[var(--px-dim)]">
                            Someone opens a room link and…
                        </th>
                        <th scope="col" className="font-pixel-label py-3 text-[11px] font-normal text-[var(--px-dim)]">
                            The product…
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {ENTRY_RULES.map(([when, then]) => (
                        <tr key={when} className="border-b border-[var(--px-line)] align-top">
                            <td className="py-3 pr-6 font-medium text-[var(--px-ink)]">{when}</td>
                            <td className="py-3 text-muted-foreground">{then}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </figure>
    );
}

const SIGNALS: { signal: string; value: string; reading: string; next: string }[] = [
    {
        signal: 'Returning sessions',
        value: '68%',
        reading: '263 of 386 sessions come from people who have been here before. It is used as a tool, not visited once.',
        next: 'Keep the first screen about what comes next, not about features.',
    },
    {
        signal: 'Rage clicks',
        value: '1.04%',
        reading: 'Four sessions. People are not fighting the interface.',
        next: 'Few enough to watch each recording.',
    },
    {
        signal: 'Dead clicks',
        value: '38.6%',
        reading: 'High. In 149 sessions someone clicked something that did nothing. My hypothesis: cards, rows and badges that look interactive and are not.',
        next: 'Heatmaps page by page to find which elements; then either make them clickable or remove the affordance.',
    },
    {
        signal: 'Quick backs',
        value: '47.7%',
        reading: 'High. In 184 sessions someone opened a page and came straight back. My hypothesis: some menu labels do not predict where they lead.',
        next: 'Find which navigations cause it; it lines up with the open question about Library, Lessons and Templates.',
    },
];

/** Clarity signals with how I read them. Hypotheses are labelled as such. */
export function ClaritySignals() {
    return (
        <div className="border-t border-[var(--px-line)]">
            {SIGNALS.map((s) => (
                <div key={s.signal} className="grid grid-cols-1 gap-x-8 gap-y-2 border-b border-[var(--px-line)] py-5 md:grid-cols-[11rem_1fr_1fr]">
                    <div>
                        <p className="font-pixel text-3xl font-semibold text-[var(--px-ink)]">{s.value}</p>
                        <p className="mt-1 text-sm text-[var(--px-muted)]">{s.signal}</p>
                    </div>
                    <div>
                        <p className="font-pixel-label mb-1 text-[10px] text-[var(--px-dim)]">How I read it</p>
                        <p className="text-base leading-relaxed text-muted-foreground">{s.reading}</p>
                    </div>
                    <div>
                        <p className="font-pixel-label mb-1 text-[10px] text-[var(--px-dim)]">What I do with it</p>
                        <p className="text-base leading-relaxed text-muted-foreground">{s.next}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
