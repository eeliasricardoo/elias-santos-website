'use client';

import { ArrowRight } from 'lucide-react';
import { CaseStudySection } from '../ui/CaseStudySection';
import { ZoomImage } from '../ui/ZoomImage';
import { HeroPlugin } from './hero';
import { MatchDemo, ResonanceDemo, PitchDemo, ModuleGallery } from './demos';

const IMG = '/portfolios/saile';

/** Figma export on a plain card (it is a plugin window, not a web page). */
function Board({ name, alt, caption, className = '' }: { name: string; alt: string; caption: string; className?: string }) {
    return (
        <figure className={`flex flex-col gap-3 ${className}`}>
            <div className="overflow-hidden rounded-xl border border-[var(--px-line)] bg-white">
                <ZoomImage src={`${IMG}/${name}.webp`} alt={alt} />
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

function Rows({ items, labelWidth = '10rem' }: { items: [string, string][]; labelWidth?: string }) {
    return (
        <dl className="border-t border-[var(--px-line)] text-base">
            {items.map(([k, v]) => (
                <div
                    key={k}
                    className="grid grid-cols-1 gap-1 border-b border-[var(--px-line)] py-3 sm:gap-6 sm:[grid-template-columns:var(--label-w)_1fr]"
                    style={{ ['--label-w' as string]: labelWidth }}
                >
                    <dt className="font-pixel text-base font-semibold text-[var(--px-ink)]">{k}</dt>
                    <dd className="text-muted-foreground">{v}</dd>
                </div>
            ))}
        </dl>
    );
}

export function HeroSection() {
    return (
        <section className="flex flex-col gap-10">
            <div className="flex flex-col items-start gap-6">
                <p className="font-pixel-label text-[11px] text-[var(--px-dim)]">Product design and engineering · personal project, in development</p>
                <h1 className="text-5xl md:text-7xl">Saile</h1>
                <p className="max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
                    A vocal plugin for FL Studio. You drop in a song that sounds the way you want to sound, turn one knob, and your voice moves
                    toward it. I designed every screen in Figma first, then built the plugin so the window matches the file.
                </p>
            </div>

            <HeroPlugin
                fallback={
                    <Board
                        name="match"
                        alt="The Saile plugin window on the Match step: a large knob at 72%, a graph of the user's voice against the reference, and bars for what is different."
                        caption="The Match step, as designed. One knob, one sentence about what you hear, and three bars written in words."
                    />
                }
            />

            <Facts
                items={[
                    { value: '3', label: 'steps in the Simple view' },
                    { value: '8', label: 'modules in the Advanced view' },
                    { value: '247', label: 'automated checks on sound and interface' },
                    { value: '1.2%', label: 'of one audio core with everything on' },
                ]}
            />
        </section>
    );
}

export function ProblemSection() {
    return (
        <CaseStudySection eyebrow="Problem" index={1} title="Mixing a vocal means knowing which of eight tools fixes what you hear">
            <p>
                A producer records a vocal and hears that it is "muffled" or "buried in the beat". The fix could be an EQ, a compressor, a
                de-esser, some reverb or a cleanup pass, and each of those has six to ten parameters named for engineers. The usual shortcut
                is to put a favourite song next to the vocal and compare by ear. That works, but only if you already know what you are
                listening for.
            </p>
            <p>
                I wanted to keep the shortcut and remove the vocabulary. The question the product answers is "how close am I to that song,
                and what is the biggest difference?" The eight tools are still there for people who want them. Nobody has to open them first.
            </p>
        </CaseStudySection>
    );
}

export function RoleSection() {
    return (
        <CaseStudySection eyebrow="My role" index={2} title="Design first, then the code that has to obey it">
            <p>
                I am the designer and the person building it, with Claude Code writing most of the C++. The Figma file is the source of truth:
                a screen that is not drawn does not get built, and a built screen is checked against its frame. That rule kept me from
                designing around what was easy to code.
            </p>
            <Rows
                items={[
                    ['Product and flows', 'Three-step Simple view, Advanced view, track roles for lead, double, ad-lib, beat and master.'],
                    ['Interface', '1280 × 800 plugin window, 46 screens across the Simple and Advanced pages, plus Foundations and Components.'],
                    ['Design tokens', 'Colour, type, radius, spacing and size tokens in Figma, carried into the code as one theme file.'],
                    ['Engineering', 'C++20 and JUCE 9: audio chain, analysis, the Copilot and the interface, with tests for each.'],
                ]}
            />
        </CaseStudySection>
    );
}

export function SimpleSection() {
    return (
        <CaseStudySection eyebrow="Simple view" index={3} title="Reference, Match, Refine">
            <p>
                The default view has no module names and no parameters. It is a three-step line at the top, and each step is a screen with one
                job. The first asks for a song and says plainly that it is analysed on your machine and never uploaded.
            </p>
            <Board
                name="reference"
                alt="Saile step one, Reference: a dashed drop zone asking for a song, three numbered steps on the right, four macro knobs and a Copilot field below."
                caption="Step 1. The empty state is the instruction: drop a song. Match stays locked until there is one, and says why."
            />
            <p>
                Step two is the knob. It reads as a percentage of how close your voice is to the reference. Turn it up and the voice moves
                toward the song, turn it down to keep more of your own sound. The graph above it says in one sentence what it shows, and the
                axis uses words (deep, body, air) instead of frequencies.
            </p>
            <MatchDemo />
            <Board
                name="refine"
                alt="Saile step three, Refine: a graph with before, now and reference lines, five difference bars, and a panel saying two changes were applied with Undo and I am done buttons."
                caption="Step 3. After a change, the graph keeps the old curve so you can see what moved, and the panel names the next biggest difference."
            />
            <p>
                Refine closes the loop. It tells you what changed (tone went from 82% to 93%), what is still furthest from the reference
                (space), and offers one action for it. Undo is always one click away.
            </p>
        </CaseStudySection>
    );
}

export function CopilotSection() {
    return (
        <CaseStudySection eyebrow="Design decision" index={4} title="The Copilot suggests, you decide">
            <p>
                Next to the knobs there is a text field: "or just tell Copilot what you hear". Type "it sounds muffled" and it proposes a few
                changes in plain numbers. Nothing moves until you press Apply. There is also Listen first, which plays the change and undoes
                itself, and No thanks.
            </p>
            <p>
                That rule is also a safety rule in the code. The language model never receives audio and never writes to a parameter. It can
                only return a short JSON list of changes, which the plugin checks against each parameter's limits before showing them. It
                runs through the user's own Claude Code install, so the plugin stores no key, and the CLAUDE button is off by default because
                it is the button that decides whether anything leaves the machine.
            </p>
        </CaseStudySection>
    );
}

export function AdvancedSection() {
    return (
        <CaseStudySection eyebrow="Advanced view" index={5} title="Every module, and a graph that cannot lie">
            <p>
                Advanced is for people who want to reach in. The row of eight keys (Cleanup, Pitch, Tone, Dynamics, FX, Space, Fit, Output)
                switches the screen, and each one has its own graph, its own knobs and the same Copilot panel beside it. Here are all of them,
                plus the Beat and Master roles I designed next.
            </p>
            <ModuleGallery />
            <p>
                The graphs are calculated, not drawn. The EQ curve comes from the same filters that process the audio, and the compressor
                curve from the same function the compressor uses. If the graph were wrong, the sound would be wrong too, so I would hear it.
            </p>
            <p>
                Two of them, rebuilt to move. The resonance suppressor works on a live spectrum, so I drew it as one: raise Depth and the peaks
                that stick out get pressed down.
            </p>
            <ResonanceDemo />
            <p>
                Pitch correction is about time, so its graph is a phrase over bars. The singer's line wobbles; the corrected line snaps to the
                scale, and the key change at bar 17 is marked because the Copilot can act on it.
            </p>
            <PitchDemo />
            <p>
                A project usually has more than one vocal track, so a Voices screen lists all nine linked instances (lead, doubles, ad-libs,
                backing, beat, master) and shows what each one follows, so a double is not set up from scratch.
            </p>
            <Board
                name="voices"
                alt="Saile Voices screen listing nine linked tracks with their inserts, levels and how each follows the lead."
                caption="Voices. Each double or ad-lib says what it follows, and the controls below edit the selected one."
            />
        </CaseStudySection>
    );
}

export function SystemSection() {
    return (
        <CaseStudySection eyebrow="Design system" index={6} title="Black and platinum, and colour only when it means something">
            <p>
                The plugin should look like a piece of studio hardware: recessed slots, raised keys, machined knobs and a glass display. I
                wrote the rules down in Figma so that every new screen could be checked against them.
            </p>
            <ul className="flex max-w-3xl flex-col gap-2 border-t border-[var(--px-line)] pt-4 text-base leading-relaxed text-muted-foreground">
                <li>Raised things are keys. Recessed things are slots and the display.</li>
                <li>A lit LED or a white label means active. Dim means idle or not available yet.</li>
                <li>Values glow softly. Labels do not.</li>
                <li>Every graph says in one sentence what it shows.</li>
                <li>A selector with more than two options is a stepper: ‹ value ›.</li>
            </ul>
            <p>
                The colour decision took a test. Foundations started as black and platinum only, which left the Match screen with no way to say
                "close" or "far" at a glance. I drew two options on the same four roles, mint and champagne, and compared them on the Match frame (both versions are in the Figma file). I chose
                champagne for the reference line and the middle state, mint for close and active, and coral for far, error and clipping.
                Platinum stays the colour of what you control, so colour is always what Saile tells you and never decoration.
            </p>
            <Board
                name="foundations"
                alt="The Saile Foundations page in Figma: seven colour tokens, the type scale, radius, spacing and size tokens, and the rules."
                caption="The Foundations page: seven colour tokens, eleven text styles in Space Grotesk, Geist and Geist Mono, and the number tokens."
                className="max-w-3xl"
            />
        </CaseStudySection>
    );
}

export function PerformanceSection() {
    return (
        <CaseStudySection eyebrow="Craft" index={7} title="A window that moves at 60 frames a second">
            <p>
                The first build drew the whole window in 45 ms, about 22 frames per second, and turning the Match knob repainted everything.
                A 60 fps frame is 16.7 ms. I treated that as a design problem: a knob that lags does not feel like hardware.
            </p>
            <p>
                The parts that never move (shadow, bezel, the platinum cap with its 144 facets, the glass reflection) are drawn once and
                reused. Turning Match now repaints only the number, the display and the bars. The Advanced graphs redraw when a parameter
                changes, not 30 times a second while idle. The motion itself is small: the curve glides behind the knob, and switching view or
                module dissolves instead of jumping.
            </p>
            <Facts
                items={[
                    { value: '45 → 13 ms', label: 'full window draw, Simple view' },
                    { value: '2.9 → 1.1 ms', label: 'one knob and its labels' },
                    { value: '~180 ms', label: 'dissolve between Simple and Advanced' },
                    { value: '5.3 ms', label: 'latency in Live mode, for singing while monitoring' },
                ]}
            />
        </CaseStudySection>
    );
}

export function StatusSection() {
    return (
        <CaseStudySection eyebrow="Where it stands" index={8} title="What works, and what I have not been able to check">
            <p>
                Saile is in development and not released. All eight modules process audio, the reference is measured on the machine, and the
                voice is separated from the song with a local model so the comparison is voice to voice. The Match knob is real, and the
                Copilot works with and without Claude. Along the way I removed invented numbers from the interface: until the voice is
                measured, the screen says "Not measured yet".
            </p>
            <Rows
                labelWidth="12rem"
                items={[
                    ['Checked', '247 automated checks on sound and interface; pluginval at strictness 5 and 8; no NaN or clipping across 40 rounds of random parameters.'],
                    ['Not checked yet', 'How it sounds on real vocals, and inside FL Studio. The tests use synthetic signals with known answers, so they prove the processing and not the taste.'],
                    ['Open question', 'The licence of the voice-separation model weights is unclear, so it is for local testing only until that is resolved.'],
                    ['Next', 'Listening sessions with other producers, then the Beat and Master roles.'],
                ]}
            />
        </CaseStudySection>
    );
}

const STACK: [string, string][] = [
    ['Design', 'Figma: tokens, components, 46 screens across Simple and Advanced'],
    ['Plugin', 'C++20, JUCE 9, VST3 for macOS (arm64), built with CMake and Ninja'],
    ['Audio', 'Own filters, compressor models and limiter; spectral cleanup; TD-PSOLA pitch correction'],
    ['Analysis', 'HT-Demucs through ONNX Runtime, on the user\'s machine; loudness by BS.1770'],
    ['Copilot', 'Local phrase interpreter, optional Claude through the user\'s own CLI, JSON validated before Apply'],
    ['Quality', 'pluginval, 247 checks, a UI benchmark that measures draw time'],
];

export function StackSection() {
    return (
        <CaseStudySection eyebrow="Under the hood" index={9} title="The stack, briefly">
            <Rows items={STACK} />
        </CaseStudySection>
    );
}

export function CallToActionSection() {
    return (
        <section className="flex flex-col items-start gap-6 border-t border-[var(--px-line)] pt-12">
            <h2 className="text-3xl md:text-4xl">Hard interfaces, made readable</h2>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Saile is what I do when a tool is powerful and unfriendly: find the one question the user is really asking, design the
                answer in Figma, and build it far enough to know it holds. If your team needs that, let's talk.
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
