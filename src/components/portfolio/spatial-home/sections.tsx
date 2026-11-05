'use client';

import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { CaseStudySection } from '../ui/CaseStudySection';

const FIGMA_PROTOTYPE_URL =
    'https://www.figma.com/design/S8tB3BUnSueNWVE4e5Jirh/Spatial-Home?node-id=78-508&p=f&t=FopJ3UESvkSridj2-0';
const IMG = '/portfolios/spatial-home';

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
            <div className="overflow-hidden rounded-xl border border-[var(--px-line)] bg-[#070b10] shadow-sm">
                <img src={src} alt={alt} loading="lazy" decoding="async" className="block h-auto w-full object-cover" />
            </div>
            {caption && <figcaption className="text-sm leading-relaxed text-[var(--px-dim)]">{caption}</figcaption>}
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
                    Spatial UI &amp; Interaction Design · Concept for AR Glasses
                </p>
                <h1 className="text-5xl md:text-7xl">Spatial Home</h1>
                <p className="max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
                    A gesture-controlled AR experience for the connected home. What if the home itself became the interface?
                    No remotes, no unlocking a smartphone — just glance, tap, and interact directly with physical devices in space.
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
                    src={`${IMG}/spatial-home-menu.webp`}
                    alt="Spatial Home augmented reality interface showing living room TV with floating category menu"
                    caption="The spatial menu opens in front of the user, keeping the physical living room visible and anchoring controls directly to objects."
                />
            </div>

            <Facts
                items={[
                    { value: '0', label: 'screens or remotes needed in hand' },
                    { value: '2 steps', label: 'menu category + physical tap confirmation' },
                    { value: '4 devices', label: 'television, audio, climate & lighting' },
                    { value: '1 layer', label: 'shared spatial interface across the room' },
                ]}
            />
        </section>
    );
}

export function OverviewSection() {
    return (
        <CaseStudySection eyebrow="Overview" index={1} title="The home itself becomes the interface">
            <p className="text-lg leading-relaxed text-muted-foreground">
                Instead of searching for a remote control or opening a different mobile app for every connected device, the user
                opens a spatial menu, chooses what they want to control, and confirms the physical device with an intentional hand gesture.
            </p>
            <div className="my-2 rounded-xl border border-[var(--px-line)] bg-[var(--px-paper-light)] p-6">
                <p className="font-pixel text-xl text-[var(--px-ink)]">
                    &ldquo;What would controlling a smart home feel like if no phone or remote were required?&rdquo;
                </p>
            </div>
            <p>
                The television is the primary prototype scenario, but the interaction architecture scales horizontally across
                lighting, climate, sound, and home appliances. By shifting from a screen-bound model to contextual spatial computing,
                the interface only surfaces when summoned and remains anchored to the real world.
            </p>
        </CaseStudySection>
    );
}

export function EvolutionSection() {
    return (
        <CaseStudySection eyebrow="Concept evolution" index={2} title="From pointing a phone to interacting directly with the room">
            <p>
                The project did not start with smart glasses. The earliest exploration was a mobile AR app where users pointed their
                phone camera at a TV or lamp to reveal digital controls hovering over it.
            </p>
            <p>
                While technically viable for device identification, it still required locating the phone, unlocking the screen, and
                holding a handheld barrier between the user and their home. It felt incremental rather than transformative.
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Shot
                    src={`${IMG}/evolution-mobile-concept.webp`}
                    alt="Early mobile AR exploration where phone camera points at device"
                    caption="Early mobile AR exploration: still required finding and holding a phone."
                />
                <Shot
                    src={`${IMG}/evolution-diagram.webp`}
                    alt="Evolution diagram comparing mobile AR against AR glasses"
                    caption="Strategic pivot: moving from pointing a phone screen to direct hands-free spatial interaction."
                />
            </div>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-[var(--px-line)] text-left text-sm">
                    <thead>
                        <tr className="border-b border-[var(--px-line)] bg-[var(--px-paper-light)]">
                            <th className="p-4 font-pixel text-base text-[var(--px-ink)]">Exploration</th>
                            <th className="p-4 font-pixel text-base text-[var(--px-ink)]">What I learned</th>
                            <th className="p-4 font-pixel text-base text-[var(--px-ink)]">Resulting direction</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--px-line)]">
                        <tr>
                            <td className="p-4 font-medium text-[var(--px-ink)]">Mobile AR</td>
                            <td className="p-4 text-muted-foreground">Direct device identification was valuable, but the phone remained a physical barrier.</td>
                            <td className="p-4 text-[var(--px-ink)]">Keep the contextual interaction, remove the handheld screen entirely.</td>
                        </tr>
                        <tr>
                            <td className="p-4 font-medium text-[var(--px-ink)]">AR Glasses</td>
                            <td className="p-4 text-muted-foreground">Hands-free interaction made the room feel like an extension of the interface.</td>
                            <td className="p-4 text-[var(--px-ink)]">Use a persistent spatial menu with spatially anchored controls.</td>
                        </tr>
                        <tr>
                            <td className="p-4 font-medium text-[var(--px-ink)]">Spatial Home</td>
                            <td className="p-4 text-muted-foreground">Gaze tracking alone caused ambiguity, fatigue, and accidental triggers.</td>
                            <td className="p-4 text-[var(--px-ink)]">Require an intentional hand gesture to select and confirm targets.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </CaseStudySection>
    );
}

export function ResearchSection() {
    return (
        <CaseStudySection eyebrow="Discovery & Benchmarking" index={3} title="Grounded in real user anxieties and spatial benchmarks">
            <p>
                To avoid speculative fiction, I conducted qualitative exploratory conversations with people who own smart glasses
                as well as users with varying familiarity with augmented reality.
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="flex flex-col gap-3 rounded-xl border border-[var(--px-line)] p-5">
                    <span className="font-pixel text-2xl text-[var(--px-ink)]">01</span>
                    <h3 className="font-pixel text-lg text-[var(--px-ink)]">Stay out of the way</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                        Users do not want floating dashboards obstructing their view. Interfaces must remain collapsed until explicitly summoned.
                    </p>
                </div>
                <div className="flex flex-col gap-3 rounded-xl border border-[var(--px-line)] p-5">
                    <span className="font-pixel text-2xl text-[var(--px-ink)]">02</span>
                    <h3 className="font-pixel text-lg text-[var(--px-ink)]">Feedback on physical objects</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                        Gestures feel trustworthy when the real-world device signals connection — through physical outlines and visible loading states.
                    </p>
                </div>
                <div className="flex flex-col gap-3 rounded-xl border border-[var(--px-line)] p-5">
                    <span className="font-pixel text-2xl text-[var(--px-ink)]">03</span>
                    <h3 className="font-pixel text-lg text-[var(--px-ink)]">Accidental trigger anxiety</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                        The biggest fear was turning on devices unintentionally by simply glancing around. This directly dictated a two-step confirmation model.
                    </p>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="font-pixel text-xl text-[var(--px-ink)]">Benchmark References</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="rounded-xl border border-[var(--px-line)] p-4">
                        <p className="font-semibold text-[var(--px-ink)]">Apple Vision Pro</p>
                        <p className="text-sm text-muted-foreground">
                            Informed direct touch, large targets, and explicit pinch-to-confirm feedback over ambiguous dwell-time gaze selection.
                        </p>
                    </div>
                    <div className="rounded-xl border border-[var(--px-line)] p-4">
                        <p className="font-semibold text-[var(--px-ink)]">Meta Orion &amp; Neural Band</p>
                        <p className="text-sm text-muted-foreground">
                            Analyzed whether EMG wristbands are mandatory. Concluded camera-based hand tracking is more inclusive and self-contained for home use.
                        </p>
                    </div>
                    <div className="rounded-xl border border-[var(--px-line)] p-4">
                        <p className="font-semibold text-[var(--px-ink)]">Google AR Interaction Design</p>
                        <p className="text-sm text-muted-foreground">
                            Guided visual cues, gentle physical transitions, and spatial restraints that prevent digital clutter from fighting real furniture.
                        </p>
                    </div>
                    <div className="rounded-xl border border-[var(--px-line)] p-4">
                        <p className="font-semibold text-[var(--px-ink)]">Ambient Smart Home Standards</p>
                        <p className="text-sm text-muted-foreground">
                            Mapped device hierarchy (Power, Source, Volume, Mode) to establish consistent interaction muscle memory across diverse appliances.
                        </p>
                    </div>
                </div>
            </div>
        </CaseStudySection>
    );
}

export function InteractionTradeoffSection() {
    return (
        <CaseStudySection eyebrow="Design Trade-off" index={4} title="Camera-based hand gestures vs. wearable EMG wristband">
            <p>
                A core product question was input hardware: should Spatial Home depend on an EMG neural wristband to detect subtle
                finger twitches, or rely on optical camera hand-tracking built into the glasses frame?
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Shot
                    src={`${IMG}/wristband-vs-camera.webp`}
                    alt="Comparison diagram between EMG wristband and camera-based hand tracking"
                    caption="Hardware trade-off: eliminating accessory fatigue in favor of optical camera tracking."
                />
                <Shot
                    src={`${IMG}/hand-gestures-diagram.webp`}
                    alt="Hand gesture interaction specification"
                    caption="Visible, intentional tap and drag gestures prioritize clarity over microscopic muscle input."
                />
            </div>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-[var(--px-line)] text-left text-sm">
                    <thead>
                        <tr className="border-b border-[var(--px-line)] bg-[var(--px-paper-light)]">
                            <th className="p-4 font-pixel text-base text-[var(--px-ink)]">Approach</th>
                            <th className="p-4 font-pixel text-base text-[var(--px-ink)]">Advantage</th>
                            <th className="p-4 font-pixel text-base text-[var(--px-ink)]">Trade-off &amp; Decision</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--px-line)]">
                        <tr>
                            <td className="p-4 font-medium text-[var(--px-ink)]">EMG Wristband</td>
                            <td className="p-4 text-muted-foreground">Detects micro-gestures even when hands are tucked under blankets or out of sight.</td>
                            <td className="p-4 text-muted-foreground">Requires buying, wearing, and charging a secondary accessory. High barrier to casual adoption.</td>
                        </tr>
                        <tr>
                            <td className="p-4 font-medium text-[var(--px-ink)]">Camera-based Tracking (Chosen)</td>
                            <td className="p-4 text-[var(--px-ink)]">Zero additional hardware. Totally self-contained, natural, and visually legible.</td>
                            <td className="p-4 text-[var(--px-ink)]">Requires visible hands in reasonable lighting. Mitigated with clear visual indicators and large tap targets.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </CaseStudySection>
    );
}

export function InteractionModelSection() {
    return (
        <CaseStudySection eyebrow="Interaction Model" index={5} title="Touch-confirmed, menu-first: eliminating gaze mistakes">
            <p>
                Looking at an object should never activate it. Gaze is used for attention, not execution. Spatial Home uses a
                deterministic two-step workflow:
            </p>

            <div className="flex flex-col gap-3 rounded-xl border border-[var(--px-line)] bg-[var(--px-paper-light)] p-6 font-mono text-sm leading-relaxed text-[var(--px-ink)]">
                <div className="flex items-center gap-2">
                    <span className="font-bold text-[var(--brand-accent)]">1.</span> Open spatial menu (hand tap)
                </div>
                <div className="flex items-center gap-2 pl-4 text-muted-foreground">↓</div>
                <div className="flex items-center gap-2">
                    <span className="font-bold text-[var(--brand-accent)]">2.</span> Select category (e.g., Television, Climate, Lighting)
                </div>
                <div className="flex items-center gap-2 pl-4 text-muted-foreground">↓</div>
                <div className="flex items-center gap-2">
                    <span className="font-bold text-[var(--brand-accent)]">3.</span> Compatible devices are highlighted in the physical room
                </div>
                <div className="flex items-center gap-2 pl-4 text-muted-foreground">↓</div>
                <div className="flex items-center gap-2">
                    <span className="font-bold text-[var(--brand-accent)]">4.</span> Tap intended physical object to confirm target
                </div>
                <div className="flex items-center gap-2 pl-4 text-muted-foreground">↓</div>
                <div className="flex items-center gap-2">
                    <span className="font-bold text-[var(--brand-accent)]">5.</span> Contextual controls anchor beside the physical device
                </div>
            </div>

            <p>
                This model completely eliminates accidental inputs and gracefully supports multi-device environments (e.g., rooms
                with two lamps, multiple soundbars, or adjacent screens).
            </p>
        </CaseStudySection>
    );
}

export function TelevisionFlowSection() {
    const steps = [
        {
            title: '1. Device Category Selection',
            desc: 'The user opens the compact spatial dock and selects Television. Other categories remain accessible without modal clutter.',
            img: `${IMG}/television-selected.webp`,
        },
        {
            title: '2. Physical Device Highlighting',
            desc: 'The living room TV is recognized and highlighted with an outline in 3D space, confirming which physical object is targeted.',
            img: `${IMG}/tv-highlighted.webp`,
        },
        {
            title: '3. Connection Handshake',
            desc: 'A brief connection pulse gives the user reassuring physical and digital feedback that the TV is ready.',
            img: `${IMG}/connecting-to-tv.webp`,
        },
        {
            title: '4. Service & App Launcher',
            desc: 'Available services (Netflix, YouTube, Prime) surface beside the TV without covering the screen.',
            img: `${IMG}/netflix-selected.webp`,
        },
        {
            title: '5. Content Selection',
            desc: 'Large poster cards make browsing movies effortless from across the sofa.',
            img: `${IMG}/movie-selected.webp`,
        },
        {
            title: '6. Playback & Anchored Widget',
            desc: 'Once playback starts, the full UI fades away into a minimal playback pill: Previous, Pause, Next, Volume.',
            img: `${IMG}/movie-playing.webp`,
        },
        {
            title: '7. Progressive Volume Control',
            desc: 'Touching the volume pill temporarily expands a generous spatial slider with real-time numeric dB feedback.',
            img: `${IMG}/volume-control.webp`,
        },
    ];

    return (
        <CaseStudySection eyebrow="Primary Flow" index={6} title="Television experience: from sofa to playback">
            <p>
                Here is the complete end-to-end flow designed for sitting on a couch and watching a movie, verified step-by-step in the
                interactive prototype.
            </p>

            <div className="flex flex-col gap-12">
                {steps.map((step, i) => (
                    <div key={step.title} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <h3 className="font-pixel text-xl text-[var(--px-ink)]">{step.title}</h3>
                            <p className="text-sm text-muted-foreground">{step.desc}</p>
                        </div>
                        <Shot src={step.img} alt={step.title} />
                    </div>
                ))}
            </div>
        </CaseStudySection>
    );
}

export function BeyondTvSection() {
    return (
        <CaseStudySection eyebrow="Extensibility" index={7} title="One shared interaction language across the home">
            <p>
                Television is the marquee prototype scenario, not the boundary of the product. Every smart home device adheres to the
                exact same interaction grammar: category selection → physical confirmation → minimal contextual controls.
            </p>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-[var(--px-line)] text-left text-sm">
                    <thead>
                        <tr className="border-b border-[var(--px-line)] bg-[var(--px-paper-light)]">
                            <th className="p-4 font-pixel text-base text-[var(--px-ink)]">Device</th>
                            <th className="p-4 font-pixel text-base text-[var(--px-ink)]">Contextual Controls Revealed</th>
                            <th className="p-4 font-pixel text-base text-[var(--px-ink)]">Spatial Placement</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--px-line)]">
                        <tr>
                            <td className="p-4 font-medium text-[var(--px-ink)]">Television</td>
                            <td className="p-4 text-muted-foreground">Power, apps, movie catalog, playback widget, volume slider</td>
                            <td className="p-4 text-[var(--px-ink)]">Floating immediately to the right of the TV bezel</td>
                        </tr>
                        <tr>
                            <td className="p-4 font-medium text-[var(--px-ink)]">Home Theater / Soundbar</td>
                            <td className="p-4 text-muted-foreground">Volume slider, source input (Optical / eARC / Bluetooth), surround mode</td>
                            <td className="p-4 text-[var(--px-ink)]">Anchored below the acoustic mesh</td>
                        </tr>
                        <tr>
                            <td className="p-4 font-medium text-[var(--px-ink)]">Air Conditioner</td>
                            <td className="p-4 text-muted-foreground">Power, target temperature dial, eco mode, fan speed</td>
                            <td className="p-4 text-[var(--px-ink)]">Anchored beneath wall unit airflow vents</td>
                        </tr>
                        <tr>
                            <td className="p-4 font-medium text-[var(--px-ink)]">Smart Lighting</td>
                            <td className="p-4 text-muted-foreground">Power toggle, brightness slider, warm/cool circadian scenes</td>
                            <td className="p-4 text-[var(--px-ink)]">Anchored adjacent to physical lampshade or switch</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </CaseStudySection>
    );
}

export function DesignDecisionsSection() {
    const pillars = [
        {
            title: 'A predictable spatial dock',
            desc: 'The persistent menu creates a stable baseline. It never wanders with head turns, ensuring users always know where to look.',
        },
        {
            title: 'Contextual minimalism',
            desc: 'Controls appear only when relevant and collapse immediately after use, keeping the user’s actual living room completely visible.',
        },
        {
            title: 'Progressive disclosure',
            desc: 'Primary actions (play/pause) are one tap; secondary actions (fine-grained volume adjustment) expand on demand.',
        },
        {
            title: 'Immediate multimodal feedback',
            desc: '3D outlines, loading rings, and responsive state transitions confirm actions instantly without auditory noise.',
        },
        {
            title: 'The room remains primary',
            desc: 'Spatial Home is not a matrix of floating windows. The home is the canvas, and technology is respectful ambient infrastructure.',
        },
        {
            title: 'Functional glassmorphism',
            desc: 'Frosted translucency preserves peripheral awareness of people and furniture while blur layers guarantee high text legibility.',
        },
    ];

    return (
        <CaseStudySection eyebrow="Design System" index={8} title="Key spatial design decisions & visual foundation">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {pillars.map((p) => (
                    <div key={p.title} className="flex flex-col gap-2 rounded-xl border border-[var(--px-line)] p-6">
                        <h3 className="font-pixel text-lg text-[var(--px-ink)]">{p.title}</h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                    </div>
                ))}
            </div>

            <div className="mt-4 flex flex-col gap-4 rounded-xl border border-[var(--px-line)] bg-[var(--px-paper-light)] p-6">
                <h3 className="font-pixel text-xl text-[var(--px-ink)]">Visual Foundation &amp; Typography</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Given the prototype timeline, I established a lightweight visual system: high-contrast dark glassmorphism tailored for optical
                    transmissivity, consistent 8px spatial grid tokens, Phosphor Icons for crisp geometric recognition, and 48px minimum hit targets
                    to ensure effortless hand gesture accuracy from couch distances.
                </p>
            </div>
        </CaseStudySection>
    );
}

export function CallToActionSection() {
    return (
        <section className="flex flex-col items-center gap-6 rounded-2xl border border-[var(--px-line)] bg-[var(--px-paper-light)] p-8 text-center md:p-14">
            <div className="flex flex-col items-center gap-3">
                <p className="font-pixel-label text-[11px] text-[var(--px-dim)]">Interactive Prototype</p>
                <h2 className="text-3xl md:text-4xl">Test the Spatial Home prototype in Figma</h2>
                <p className="max-w-xl text-base text-muted-foreground">
                    Walk through the entire connected home experience: from sofa device discovery to application launching and volume adjustment.
                </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                    href={FIGMA_PROTOTYPE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-btn px-btn--primary"
                >
                    Open in Figma <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href="/portfolio" className="px-btn">
                    Browse all case studies <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
            </div>
        </section>
    );
}
