'use client';

import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { CaseStudySection } from '../ui/CaseStudySection';

const FIGMA_PROTOTYPE_URL =
    'https://www.figma.com/proto/VwpbYwG1GM7ObrAK8W7d0c?node-id=109-333&t=Cb5bumC4Dq7d9AUd-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=109%3A333&page-id=0%3A1';
const IMG = '/portfolios/stanley-black-decker';

function Shot({
    src,
    alt,
    caption,
    className = '',
}: {
    src: string;
    alt: string;
    caption?: string;
    className?: string;
}) {
    return (
        <figure className={`flex flex-col gap-3 ${className}`}>
            <div className="overflow-hidden rounded-xl border border-[var(--px-line)] bg-[#0d0f12] shadow-sm">
                <img src={src} alt={alt} loading="lazy" decoding="async" className="block h-auto w-full object-cover" />
            </div>
            {caption && <figcaption className="text-sm leading-relaxed text-[var(--px-dim)]">{caption}</figcaption>}
        </figure>
    );
}

function MobileFrame({
    src,
    alt,
    caption,
    className = '',
}: {
    src: string;
    alt: string;
    caption?: string;
    className?: string;
}) {
    return (
        <figure className={`flex flex-col items-center gap-3 ${className}`}>
            <div className="relative mx-auto w-full max-w-[280px] overflow-hidden rounded-[2.5rem] border-[6px] border-[#1f2228] bg-black shadow-2xl ring-1 ring-white/10 sm:max-w-[320px]">
                <div className="absolute left-1/2 top-3 h-4 w-24 -translate-x-1/2 rounded-full bg-black z-20" aria-hidden="true" />
                <img src={src} alt={alt} loading="lazy" decoding="async" className="block h-auto w-full object-cover" />
            </div>
            {caption && <figcaption className="text-center text-sm leading-relaxed text-[var(--px-dim)]">{caption}</figcaption>}
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
                <p className="font-pixel-label text-[11px] text-[var(--px-dim)]">
                    Product Design · Mobile App · Industrial Jobsite Ecosystem
                </p>
                <h1 className="text-5xl md:text-7xl">Stanley Black &amp; Decker</h1>
                <p className="max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
                    A jobsite mobile experience for professional tradespeople and crew leaders.
                    Eliminating 6:30 AM jobsite friction through a centralized Morning Setup flow that verifies
                    tool readiness, battery charge, and crew task alignment before work begins.
                </p>
                <div className="flex flex-wrap gap-3">
                    <a
                        href={FIGMA_PROTOTYPE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-btn px-btn--primary"
                    >
                        Interactive Figma Prototype <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                </div>
            </div>

            <div className="-mx-4 md:-mx-16 lg:-mx-24">
                <Shot
                    src={`${IMG}/brand-yellow-palette.webp`}
                    alt="Stanley Black and Decker mobile app design system and UI palette"
                    caption="Mobile app interface built around Stanley Yellow (#FFC106), dark jobsite ergonomics, and rapid morning tool readiness."
                />
            </div>

            <Facts
                items={[
                    { value: '15+ brands', label: 'Stanley, DeWalt, Craftsman, Black+Decker' },
                    { value: '5–8 workers', label: 'crew size managed on site by leader' },
                    { value: '1 setup flow', label: 'single source of truth at 6:30 AM' },
                    { value: '1,840', label: 'design system components adapted to brand' },
                ]}
            />
        </section>
    );
}

export function BriefSection() {
    return (
        <CaseStudySection eyebrow="The Brief" index={1} title="Building for people who build the world">
            <p className="text-lg leading-relaxed text-muted-foreground">
                Stanley Black &amp; Decker owns some of the most recognized tool and hardware brands in the world —
                Stanley, DeWalt, Craftsman, Black+Decker, Cub Cadet, and more.
            </p>
            <p>
                The challenge was to design a new mobile experience aimed at professional tradespeople — contractors, electricians,
                plumbers, and jobsite crews who rely on these tools every single day. Beyond the tools themselves, these workers
                face constant operational friction: managing equipment across multiple trucks, tracking battery readiness,
                communicating assignments, and preventing costly delays under tight deadlines.
            </p>

            {/* Portrait footage: sized by height so it doesn't run 1,700px tall at full column width. */}
            <div className="w-fit max-w-full overflow-hidden rounded-xl border border-[var(--px-line)] bg-black shadow-sm">
                <video
                    src={`${IMG}/stanley-brand-video.mp4`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="block h-auto max-h-[78vh] w-auto max-w-full"
                />
            </div>
            <p className="text-sm text-[var(--px-dim)]">
                Brand footage: professional tradespeople operating in demanding industrial environments.
            </p>
        </CaseStudySection>
    );
}

export function DeskResearchSection() {
    return (
        <CaseStudySection eyebrow="Discovery & Desk Research" index={2} title="Extracting core brand values and field realities">
            <p>
                I conducted thorough desk research on the Stanley Black &amp; Decker global presence to understand the brand positioning,
                user commitments, and industrial ecosystem.
            </p>
            <p>
                Across DeWalt, Stanley, and Craftsman, the brand proposition centers on three non-negotiables:
                <strong className="text-[var(--px-ink)]"> durability, reliability, and performance under extreme conditions</strong>.
                These are not lifestyle gadgets; they are mission-critical tools used in dust, rain, noise, and vibration.
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Shot
                    src={`${IMG}/desk-research-brand.webp`}
                    alt="Desk research on brand purpose and user commitment"
                    caption="Core positioning: industrial endurance and professional trust."
                />
                <Shot
                    src={`${IMG}/desk-research-tools.webp`}
                    alt="Desk research on professional power tools"
                    caption="Diverse tool categories: cordless power, hand tools, and heavy machinery."
                />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Shot
                    src={`${IMG}/desk-research-ecosystem.webp`}
                    alt="Brand ecosystem: DeWalt, Craftsman, Stanley"
                    caption="Multi-brand ecosystem connecting trade equipment across disciplines."
                />
                <Shot
                    src={`${IMG}/desk-research-site.webp`}
                    alt="Stanley Black & Decker website visual audit"
                    caption="Corporate digital audit: mapping existing design patterns and information structure."
                />
            </div>
        </CaseStudySection>
    );
}

export function PersonaSection() {
    return (
        <CaseStudySection eyebrow="Target Persona" index={3} title="Why the Crew Leader is the highest-impact user">
            <p>
                While analyzing the trades ecosystem, I mapped two primary candidate users:
            </p>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <li className="rounded-xl border border-[var(--px-line)] p-5">
                    <h3 className="font-pixel text-base text-[var(--px-ink)]">1. Solo Tradesperson</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Responsible only for his own tools and schedule. Lower operational complexity.
                    </p>
                </li>
                <li className="rounded-xl border border-[var(--px-line)] bg-[var(--px-paper-light)] p-5">
                    <h3 className="font-pixel text-base text-[var(--px-ink)]">2. Crew Leader (Selected)</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Responsible for 5–8 workers, vehicle inventory, task allocation, and deadline compliance.
                    </p>
                </li>
            </ul>

            <div className="rounded-xl border border-[var(--px-line)] bg-[var(--px-paper-light)] p-6">
                <h3 className="font-pixel text-lg text-[var(--px-ink)]">The Strategic Rationale</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    The Crew Leader sits at the center of jobsite friction. He is not in an air-conditioned office; he is in the dust
                    and sun alongside his crew. If a battery is dead or a chop saw is missing from truck #2, work stops and he takes the blame.
                    Solving friction for the Crew Leader multiplies efficiency across an entire 8-person crew.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center">
                <div className="md:col-span-4">
                    <div className="overflow-hidden rounded-2xl border border-[var(--px-line)] bg-[#12151b] p-6 text-center">
                        <img
                            src={`${IMG}/persona-marco-silva.webp`}
                            alt="Marco Silva - Jobsite Crew Leader"
                            className="mx-auto h-32 w-32 rounded-full object-cover border-2 border-[var(--px-line)]"
                        />
                        <h4 className="mt-4 font-pixel text-xl text-[var(--px-ink)]">Marco Silva</h4>
                        <p className="text-xs font-mono uppercase tracking-wider text-[var(--px-dim)]">Age 42 · Crew Leader</p>
                        <div className="mt-4 flex flex-col gap-1.5 border-t border-[var(--px-line)] pt-4 text-left text-xs text-muted-foreground">
                            <div><strong className="text-[var(--px-ink)]">Industry:</strong> Residential &amp; Light Commercial</div>
                            <div><strong className="text-[var(--px-ink)]">Crew Size:</strong> 5–8 workers</div>
                            <div><strong className="text-[var(--px-ink)]">Field Experience:</strong> 15 years on jobsites</div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4 md:col-span-8">
                    <Shot
                        src={`${IMG}/persona-crew-leader-map.webp`}
                        alt="Crew Leader role mapping in the jobsite ecosystem"
                        caption="Operational mapping: the crew leader as the nexus between tools, workers, and deadlines."
                    />
                </div>
            </div>

            <div className="rounded-xl border border-[var(--px-line)] p-6">
                <h3 className="font-pixel text-lg text-[var(--px-ink)]">A Day in Marco’s Shoes: The 6:30 AM Rush</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Marco arrives at the jobsite before anyone else. Before framing can start, he has to verify tool availability,
                    check which batteries charged overnight, and assign tasks. Within 15 minutes, chaos hits:
                    someone forgot the impact driver, two batteries are at 10%, and workers are standing around idle.
                    He needed a <strong>Morning Setup flow</strong> that centralizes readiness before work begins.
                </p>
            </div>
        </CaseStudySection>
    );
}

export function ProblemOpportunitySection() {
    return (
        <CaseStudySection eyebrow="Problem & Opportunity" index={4} title="Framing the core jobsite opportunity">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="flex flex-col gap-3 rounded-xl border border-[var(--px-line)] p-5">
                    <span className="font-pixel text-2xl text-[var(--px-ink)]">01</span>
                    <h3 className="font-pixel text-lg text-[var(--px-ink)]">Problem Statement</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                        At the start of the workday, Crew Leaders lack a single source of truth for tool readiness, leading to avoidable morning delays.
                    </p>
                </div>
                <div className="flex flex-col gap-3 rounded-xl border border-[var(--px-line)] p-5">
                    <span className="font-pixel text-2xl text-[var(--px-ink)]">02</span>
                    <h3 className="font-pixel text-lg text-[var(--px-ink)]">The Opportunity</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                        Create a jobsite-focused mobile experience giving instant visibility into tool availability and crew task assignment in under 60 seconds.
                    </p>
                </div>
                <div className="flex flex-col gap-3 rounded-xl border border-[var(--px-line)] p-5">
                    <span className="font-pixel text-2xl text-[var(--px-ink)]">03</span>
                    <h3 className="font-pixel text-lg text-[var(--px-ink)]">The Hypothesis</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                        By providing a centralized Morning Setup checklist, crew leaders eliminate startup delays and kick off the day with confidence and control.
                    </p>
                </div>
            </div>
        </CaseStudySection>
    );
}

export function DesignDecisionsSection() {
    return (
        <CaseStudySection eyebrow="Design Decisions" index={5} title="Geometric brand strength meets rounded UX approachability">
            <p>
                A key product decision was using the <strong>Simple Design System</strong> (1,840 production-ready components)
                instead of building a custom component library from scratch. The mission was solving the crew leader’s real jobsite pain,
                not reinventing buttons.
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Shot
                    src={`${IMG}/design-system-library.webp`}
                    alt="Design System library overview"
                    caption="Simple Design System foundation: rapid layout assembly with pre-tested accessibility."
                />
                <Shot
                    src={`${IMG}/design-system-components.webp`}
                    alt="Design System components preview"
                    caption="1,840 production-ready components: cards, toggles, badges, lists, and inputs."
                />
            </div>

            <div className="space-y-4">
                <h3 className="font-pixel text-xl text-[var(--px-ink)]">Decoding Stanley’s Visual DNA</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Analyzing the Stanley Black &amp; Decker interface revealed a crucial design signature:
                    the visual structure uses <strong>sharp, geometric, rectangular containers</strong> to communicate industrial toughness,
                    while <strong>all interactive buttons are rounded</strong>.
                </p>

                <Shot
                    src={`${IMG}/brand-patterns-analysis.webp`}
                    alt="Brand pattern analysis: geometric layout with rounded interactive buttons"
                    caption="Brand pattern analysis: sharp geometry communicates strength; rounded pills communicate touch interaction."
                />
            </div>

            <div className="space-y-4">
                <h3 className="font-pixel text-xl text-[var(--px-ink)]">Industrial Color System</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Jobsite conditions are unforgiving: direct sunlight, dust-covered screens, and gloved hands.
                    I followed Stanley’s iconic palette:
                </p>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="rounded-xl border border-[var(--px-line)] p-4">
                        <div className="h-6 w-full rounded bg-[#FFC106] mb-2" />
                        <strong className="text-[var(--px-ink)]">Stanley Yellow (#FFC106)</strong>
                        <p className="text-xs text-muted-foreground">High-visibility primary CTAs matching power tool housings.</p>
                    </div>
                    <div className="rounded-xl border border-[var(--px-line)] p-4">
                        <div className="h-6 w-full rounded bg-[#121418] border border-white/20 mb-2" />
                        <strong className="text-[var(--px-ink)]">Industrial Charcoal</strong>
                        <p className="text-xs text-muted-foreground">Deep dark background eliminating glare under midday sun.</p>
                    </div>
                    <div className="rounded-xl border border-[var(--px-line)] p-4">
                        <div className="h-6 w-full rounded flex gap-1 mb-2">
                            <span className="flex-1 rounded bg-[#22c55e]" />
                            <span className="flex-1 rounded bg-[#f59e0b]" />
                            <span className="flex-1 rounded bg-[#ef4444]" />
                        </div>
                        <strong className="text-[var(--px-ink)]">Semantic Status</strong>
                        <p className="text-xs text-muted-foreground">Instant at-a-glance green/amber/red indicators for battery and tools.</p>
                    </div>
                </div>
            </div>
        </CaseStudySection>
    );
}

export function PrototypingSection() {
    return (
        <CaseStudySection eyebrow="Prototyping & Flow" index={6} title="From paper sketches to high-fidelity mobile prototype">
            <p>
                I started with quick paper sketches (Scratch) to test layout hierarchies, touch ergonomics, and morning flow logic
                before committing to pixel design.
            </p>

            <Shot
                src={`${IMG}/paper-sketches-scratch.webp`}
                alt="Paper sketches exploring morning setup flow"
                caption="Agile paper prototyping: rapid concept validation before high-fidelity execution."
            />

            <div className="space-y-6 pt-6">
                <h3 className="font-pixel text-2xl text-[var(--px-ink)]">The Morning Setup Experience</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Here is the complete end-to-end flow designed for Marco to verify tool readiness in under 60 seconds:
                </p>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <MobileFrame
                        src={`${IMG}/prototype-screen-1.webp`}
                        alt="Morning Setup Dashboard"
                        caption="1. Morning Setup Dashboard: quick daily overview, crew roster, and tool status summary."
                    />
                    <MobileFrame
                        src={`${IMG}/prototype-screen-2.webp`}
                        alt="Tool Readiness & Battery Health"
                        caption="2. Equipment Check: instant battery level verification and missing tool alerts."
                    />
                    <MobileFrame
                        src={`${IMG}/prototype-screen-3.webp`}
                        alt="Task Allocation"
                        caption="3. Crew Assignments: linking specific tools to workers for full accountability."
                    />
                    <MobileFrame
                        src={`${IMG}/prototype-screen-4.webp`}
                        alt="Tool Inventory & Truck Location"
                        caption="4. Location Mapping: confirming which truck or storage bin houses each device."
                    />
                    <MobileFrame
                        src={`${IMG}/prototype-screen-5.webp`}
                        alt="Ready to Work Confirmation"
                        caption="5. Ready to Work: one-tap confirmation broadcasting readiness to the entire crew."
                    />
                </div>
            </div>
        </CaseStudySection>
    );
}

export function CallToActionSection() {
    return (
        <section className="flex flex-col items-center gap-6 rounded-2xl border border-[var(--px-line)] bg-[var(--px-paper-light)] p-8 text-center md:p-14">
            <div className="flex flex-col items-center gap-3">
                <p className="font-pixel-label text-[11px] text-[var(--px-dim)]">Interactive Prototype</p>
                <h2 className="text-3xl md:text-4xl">Test the Stanley Black &amp; Decker prototype</h2>
                <p className="max-w-xl text-base text-muted-foreground">
                    Experience Marco’s morning workflow: check tool batteries, assign tasks to crew members, and confirm jobsite readiness.
                </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                    href={FIGMA_PROTOTYPE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-btn px-btn--primary"
                >
                    Open Figma Prototype <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href="/portfolio" className="px-btn">
                    Browse all case studies <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
            </div>
        </section>
    );
}
