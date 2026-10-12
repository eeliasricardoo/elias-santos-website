'use client';

import { ArrowRight } from 'lucide-react';
import { CaseStudySection } from '../ui/CaseStudySection';
import { AdminMock, CatalogMock, PlayStatesMock, SubscriptionFlow } from './mocks';

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

function MockNote() {
    return (
        <p className="text-sm leading-relaxed text-[var(--px-dim)]">
            The client and its catalogue are confidential. Every interface on this page is a mock that follows the real layout, with
            placeholder titles and values withheld.
        </p>
    );
}

export function HeroSection() {
    return (
        <section className="flex flex-col gap-10">
            <div className="flex flex-col items-start gap-6">
                <p className="font-pixel-label text-[11px] text-[var(--px-dim)]">Product design and engineering · client project, name withheld</p>
                <h1 className="text-5xl md:text-7xl">Streaming Platform</h1>
                <p className="max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
                    A subscription streaming service with more than 500 active users. I designed and built all of it: the viewer app, the
                    design system, the payment and access logic, and the admin panel the client runs it from.
                </p>
            </div>

            <div className="-mx-4 md:-mx-16 lg:-mx-24">
                <CatalogMock />
            </div>
            <MockNote />

            <Facts
                items={[
                    { value: '500+', label: 'active users today' },
                    { value: '1', label: 'person: design, front end, API and admin' },
                    { value: '29', label: 'components documented in Storybook' },
                    { value: '5', label: 'areas in the admin panel' },
                ]}
            />
        </section>
    );
}

export function ProblemSection() {
    return (
        <CaseStudySection eyebrow="Problem" index={1} title="The hard part is the minute between paying and watching">
            <p>
                The client sells weekly and monthly plans to people who arrive on a phone, often from an ad. They pay at an external
                checkout, which means the moment of highest intent happens on someone else's page. If access is not ready when they come
                back, the product fails at the exact moment it was just paid for.
            </p>
            <p>
                So the design problem was never the catalogue grid. It was everything around it: getting someone from payment to the
                first play without an account-creation form, deciding what each person sees when they press play, and giving the client
                a way to run the service day to day without a developer.
            </p>
        </CaseStudySection>
    );
}

export function RoleSection() {
    return (
        <CaseStudySection eyebrow="My role" index={2} title="Everything, on purpose">
            <p>
                I was the only designer and the only developer. That shaped the decisions: every flow I drew was a flow I would also have to
                build and keep running, so I designed for fewer moving parts. Sign-in is a phone number and a password, because
                that is what this audience already has in hand. There is no email verification step to lose people in.
            </p>
            <ul className="grid grid-cols-1 gap-x-10 border-t border-[var(--px-line)] md:grid-cols-2">
                {[
                    ['Product and flows', 'Subscription, access rules, cancellation and renewal, mapped before screens.'],
                    ['Interface', 'Landing page, catalogue, player, profile and billing, mobile first and installable as an app.'],
                    ['Design system', 'Semantic colour tokens, 47 base components, documented in Storybook.'],
                    ['Engineering', 'React front end, serverless API, Postgres, payment events, signed video links.'],
                ].map(([k, v]) => (
                    <li key={k} className="border-b border-[var(--px-line)] py-4">
                        <p className="font-pixel text-lg font-semibold text-[var(--px-ink)]">{k}</p>
                        <p className="mt-1 text-base leading-relaxed text-muted-foreground">{v}</p>
                    </li>
                ))}
            </ul>
        </CaseStudySection>
    );
}

export function FlowSection() {
    return (
        <CaseStudySection eyebrow="User flow" index={3} title="From an ad to the first play in eight steps">
            <p>
                I mapped the path as one line and marked which steps the viewer performs and which the system performs for them. Two of
                the eight have no screen at all, and those two decide whether the experience feels instant or broken.
            </p>
            <SubscriptionFlow />
            <p>
                Step four is the fragile one. The payment provider reports the purchase to the product, and the product turns that into
                access. I treated it as a designed step: each event is processed once even if it is sent twice, failures are recorded
                instead of swallowed, and the admin dashboard shows the health of those events so the client notices a problem before a
                customer does. A second payment provider is wired in as a fallback.
            </p>
        </CaseStudySection>
    );
}

const ACCESS_RULES: [string, string][] = [
    ['Not signed in', 'Asked to sign in.'],
    ['Signed in, plan covers the title', 'The video plays. The link is signed and stops working after three hours, so it cannot be passed around.'],
    ['Signed in, title belongs to another plan', 'A paywall over the title, with one action: see plans.'],
    ['Plan has expired', 'A dedicated page that says so plainly and offers renewal.'],
    ['Cancellation requested', 'Access continues to the end of the paid period; the admin sees it as a pending cancellation.'],
    ['Payment refunded or disputed', 'Access ends immediately.'],
];

export function StatesSection() {
    return (
        <CaseStudySection eyebrow="Edge cases" index={4} title="One play button, six possible answers">
            <p>
                Pressing play looks like one action and is really a question: who is this person, what did they pay for, and is it still
                valid? I wrote the answers as a table first and designed a screen for each one, so that no combination ends in a spinner
                or a generic error.
            </p>
            <PlayStatesMock />
            <table className="w-full border-t border-[var(--px-line)] text-left text-base">
                <caption className="sr-only">What happens when a viewer presses play</caption>
                <thead>
                    <tr className="border-b border-[var(--px-line)]">
                        <th scope="col" className="font-pixel-label w-2/5 py-3 pr-6 text-[11px] font-normal text-[var(--px-dim)]">
                            The viewer is…
                        </th>
                        <th scope="col" className="font-pixel-label py-3 text-[11px] font-normal text-[var(--px-dim)]">
                            The product…
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {ACCESS_RULES.map(([when, then]) => (
                        <tr key={when} className="border-b border-[var(--px-line)] align-top">
                            <td className="py-3 pr-6 font-medium text-[var(--px-ink)]">{when}</td>
                            <td className="py-3 text-muted-foreground">{then}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>
                The check runs on the server every time, not in the interface. Hiding a button is a courtesy to the viewer; the rule that
                protects the client's content lives where it cannot be bypassed.
            </p>
        </CaseStudySection>
    );
}

export function SpeedSection() {
    return (
        <CaseStudySection eyebrow="Design decision" index={5} title="Making it feel instant on a mid-range phone">
            <p>
                Most viewers are on mobile data. Waiting for a video to start is where a streaming product loses people, so I spent the
                effort on perceived speed. The product starts preparing the video the moment a finger touches a title, before the tap is
                finished. The catalogue is cached on the device, so returning viewers see it immediately while fresh data loads behind it.
                It installs as an app and updates in the background without signing anyone out.
            </p>
            <p>
                The visual decisions serve the same goal. The interface is dark and quiet so the artwork carries it, and the one primary
                action on the featured title is white on dark: there is never a question about what to press. The red brand colour is
                reserved for subscription and sign-in.
            </p>
        </CaseStudySection>
    );
}

export function AdminSection() {
    return (
        <CaseStudySection eyebrow="Admin" index={6} title="A panel the client runs without me">
            <p>
                The second user of this product is the client. They add titles, answer customers and watch revenue. I designed the admin
                as five plain areas, each named after the question it answers.
            </p>
            <AdminMock />
            <dl className="border-t border-[var(--px-line)] text-base">
                {[
                    ['Dashboard', 'How is the business today? Users, active subscriptions, pending cancellations, new sign-ups and the health of payment events.'],
                    ['Titles', 'What is in the catalogue? Sync from the video host, edit details, preview as a viewer, choose what appears on the public page and order the Top 10.'],
                    ['Tags', 'How is it organised? The categories viewers browse by.'],
                    ['Users', 'Who is this customer? Search, see and edit the plan, revoke access.'],
                    ['Charges', 'What was paid? Payment history and totals, without opening the payment provider.'],
                ].map(([k, v]) => (
                    <div key={k} className="grid grid-cols-1 gap-1 border-b border-[var(--px-line)] py-3 sm:grid-cols-[9rem_1fr] sm:gap-6">
                        <dt className="font-pixel text-base font-semibold text-[var(--px-ink)]">{k}</dt>
                        <dd className="text-muted-foreground">{v}</dd>
                    </div>
                ))}
            </dl>
            <p>
                The admin deliberately does not use the viewer's dark theme. It is a work tool made of tables and numbers, so it is
                light, dense and plain.
            </p>
        </CaseStudySection>
    );
}

export function SystemSection() {
    return (
        <CaseStudySection eyebrow="Design system" index={7} title="Small, semantic and documented">
            <p>
                The system has two layers. Raw colour values are defined once, and every component refers to them by role (primary,
                card, muted, destructive) and never by a literal colour. Changing the brand red is one line. Each plan tier, success
                and warning has its own token, so a state never borrows a colour that means something else.
            </p>
            <p>
                Components are organised from small to large and documented in Storybook with their variants, including the ones that are
                awkward to reach in the live product: the paywall, the player, the expired state. Accessibility rules are written into the
                system and not left to each screen: visible focus on every control, form fields sized so phones do not zoom on tap, safe
                areas respected on notched screens, and motion that switches off for people who ask for less of it.
            </p>
            <Facts
                items={[
                    { value: '47', label: 'base components' },
                    { value: '29', label: 'documented in Storybook' },
                    { value: '2', label: 'token layers: value and role' },
                    { value: '13', label: 'test files on access, payment and login' },
                ]}
            />
        </CaseStudySection>
    );
}

const STACK: [string, string][] = [
    ['Front end', 'React 19, TanStack Start and Router, Tailwind CSS 4, shadcn/ui'],
    ['Back end', 'Serverless functions, Postgres (Neon)'],
    ['Sign-in', 'Phone and password, session in an HttpOnly cookie, login rate limiting'],
    ['Video', 'CDN streaming with links signed per viewer'],
    ['Payments', 'Two providers through payment events, with failure tracking'],
    ['Quality', 'Vitest on the access, payment and login paths; Storybook for the interface'],
];

export function StackSection() {
    return (
        <CaseStudySection eyebrow="Under the hood" index={8} title="The stack, briefly">
            <dl className="border-t border-[var(--px-line)] text-base">
                {STACK.map(([k, v]) => (
                    <div key={k} className="grid grid-cols-1 gap-1 border-b border-[var(--px-line)] py-3 sm:grid-cols-[10rem_1fr] sm:gap-6">
                        <dt className="font-pixel-label pt-1 text-[11px] text-[var(--px-dim)]">{k}</dt>
                        <dd className="text-[var(--px-ink)]">{v}</dd>
                    </div>
                ))}
            </dl>
            <p>In production since mid-2026, with more than 500 active users and one person maintaining it.</p>
        </CaseStudySection>
    );
}

export function CallToActionSection() {
    return (
        <section className="flex flex-col items-start gap-6 border-t border-[var(--px-line)] pt-12">
            <h2 className="text-3xl md:text-4xl">A whole product, from one person</h2>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                This is the kind of work I do best: owning the flow, the interface and the code behind it, including the parts nobody sees.
                If you need that range on your team, let's talk.
            </p>
            <div className="flex flex-wrap gap-3">
                <a href="https://calendly.com/eeliasricardoo" target="_blank" rel="noopener noreferrer" className="px-btn px-btn--primary">
                    Schedule a call
                    <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <a href="/portfolio/ilevar" className="px-btn">
                    Next case: ilevar <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
            </div>
        </section>
    );
}
