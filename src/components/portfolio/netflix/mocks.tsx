import { ArrowRight, Film, LayoutDashboard, Lock, Play, Receipt, Search, Tag, Users } from 'lucide-react';

/*
 * Representative mocks for the streaming case. The client and the catalogue are
 * confidential, so nothing here is a screenshot: layouts follow the real product,
 * names, titles and numbers are placeholders.
 */

const POSTERS = ['#3b2f4a', '#5a2a2a', '#22404a', '#4a3a22', '#2a3552', '#4a2540', '#254a3a'];

function Poster({ i, className = '', locked = false }: { i: number; className?: string; locked?: boolean }) {
    const c = POSTERS[i % POSTERS.length];
    return (
        <div
            className={`relative shrink-0 overflow-hidden rounded-md ${className}`}
            style={{ background: `linear-gradient(160deg, ${c}, #121216 85%)` }}
        >
            <div className="absolute inset-x-2 bottom-2 space-y-1">
                <div className="h-1.5 w-3/4 rounded-sm bg-white/35" />
                <div className="h-1 w-1/2 rounded-sm bg-white/15" />
            </div>
            {locked && (
                <span className="absolute right-1.5 top-1.5 grid h-5 w-5 place-items-center rounded-full bg-black/60 text-white/80">
                    <Lock className="h-2.5 w-2.5" aria-hidden="true" />
                </span>
            )}
        </div>
    );
}

function AppChrome({ label, children, dark = true }: { label: string; children: React.ReactNode; dark?: boolean }) {
    return (
        <div className={`overflow-hidden rounded-xl border ${dark ? 'border-white/10 bg-[#0b0b0e] text-white' : 'border-[var(--px-line)] bg-white text-[#111827]'}`}>
            <div className={`flex items-center gap-1.5 border-b px-3 py-2 ${dark ? 'border-white/10' : 'border-[var(--px-line)] bg-[var(--px-bg-2)]'}`} aria-hidden="true">
                <span className={`h-2 w-2 rounded-full ${dark ? 'bg-white/20' : 'bg-[var(--px-line)]'}`} />
                <span className={`h-2 w-2 rounded-full ${dark ? 'bg-white/20' : 'bg-[var(--px-line)]'}`} />
                <span className={`h-2 w-2 rounded-full ${dark ? 'bg-white/20' : 'bg-[var(--px-line)]'}`} />
                <span className={`ml-2 font-mono text-[10px] uppercase tracking-widest ${dark ? 'text-white/40' : 'text-[var(--px-dim)]'}`}>{label}</span>
            </div>
            {children}
        </div>
    );
}

/**
 * Project-card cover in the shape of the product's public page: headline and
 * one action on the left, the catalogue in a window with the phone app over it.
 * Copy is placeholder. Fills its parent.
 */
export function CatalogCover() {
    return (
        <div
            className="absolute inset-0 flex flex-col text-white"
            style={{ background: 'linear-gradient(160deg, #5c121b 0%, #2a0c12 45%, #0d0d11 100%)' }}
        >
            <div className="flex shrink-0 items-center justify-between px-[5%] pt-[3.5%]">
                <span className="text-[10px] font-black tracking-[0.2em]">STREAM+</span>
                <div className="flex items-center gap-3 text-[8px] font-medium uppercase tracking-wider text-white/70">
                    <span>Catalogue</span>
                    <span>Plans</span>
                    <span className="rounded-full bg-white px-2 py-1 text-black">Subscribe</span>
                </div>
            </div>

            <div className="flex min-h-0 flex-1 items-center gap-[4%] px-[5%] pb-[4%]">
                <div className="flex w-[40%] shrink-0 flex-col items-start gap-2.5">
                    <p className="font-pixel text-[clamp(15px,4.6cqw,32px)] font-bold leading-[1.08]">
                        Press play.
                        <br />
                        Keep watching.
                    </p>
                    <p className="text-[9px] leading-snug text-white/65">New episodes every week, on any screen.</p>
                    <span className="inline-flex items-center gap-1.5 rounded bg-white px-3 py-1.5 text-[9px] font-bold text-black">
                        <Play className="h-2.5 w-2.5 fill-current" aria-hidden="true" /> Start watching
                    </span>
                </div>

                <div className="relative h-[82%] min-w-0 flex-1">
                    <div className="absolute inset-y-0 left-0 right-[10%] flex flex-col overflow-hidden rounded-md border border-white/15 bg-[#0b0b0e] shadow-2xl">
                        <div className="flex shrink-0 items-center gap-1 border-b border-white/10 px-2 py-1.5">
                            <span className="h-1 w-1 rounded-full bg-white/25" />
                            <span className="h-1 w-1 rounded-full bg-white/25" />
                            <span className="h-1 w-1 rounded-full bg-white/25" />
                        </div>
                        <div className="m-[4%] flex min-h-0 flex-1 flex-col justify-end gap-1 rounded p-[5%]" style={{ background: 'linear-gradient(115deg, #4a1820, #12283a)' }}>
                            <div className="h-1.5 w-2/5 rounded-sm bg-white/90" />
                            <div className="h-1 w-1/2 rounded-sm bg-white/30" />
                        </div>
                        <div className="flex h-[32%] shrink-0 gap-[2.5%] px-[4%] pb-[4%]">
                            {[0, 1, 2, 3].map((n) => (
                                <Poster key={n} i={n} className="h-full flex-1" />
                            ))}
                        </div>
                    </div>

                    <div className="absolute -bottom-[6%] right-0 flex aspect-[9/17] h-[78%] flex-col gap-[4%] overflow-hidden rounded-lg border-2 border-white/25 bg-[#0b0b0e] p-[6%] shadow-2xl">
                        <Poster i={5} className="w-full flex-1" />
                        <div className="h-1 w-3/4 rounded-sm bg-white/80" />
                        <span className="grid place-items-center rounded-sm bg-white py-1 text-[7px] font-bold text-black">Watch</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

/** Catalogue: billboard with the white primary action, a Top 10 row and a regular row. */
export function CatalogMock() {
    return (
        <AppChrome label="streaming.app / catalogue">
            <div role="img" aria-label="Mock of the catalogue: a featured title with a white Watch button, a Top 10 row with large rank numbers, and a row of titles where one is locked behind a higher plan.">
                <div className="flex items-center justify-between px-5 py-3">
                    <span className="text-sm font-black tracking-[0.2em] text-[#e5484d]">STREAM+</span>
                    <div className="flex items-center gap-4 text-[11px] text-white/60">
                        <span>Home</span>
                        <span>My list</span>
                        <span className="grid h-6 w-6 place-items-center rounded-full bg-white/10 text-[10px] text-white">M</span>
                    </div>
                </div>

                <div className="relative mx-5 overflow-hidden rounded-lg" style={{ background: 'linear-gradient(110deg, #2a1218 0%, #16161c 60%, #0f1a24 100%)' }}>
                    <div className="flex flex-col gap-3 p-6 sm:p-8">
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">New this week</span>
                        <div className="h-5 w-56 max-w-full rounded bg-white/85" />
                        <div className="h-2.5 w-72 max-w-full rounded bg-white/25" />
                        <div className="mt-2 flex items-center gap-2">
                            <span className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-xs font-bold text-black">
                                <Play className="h-3.5 w-3.5 fill-current" aria-hidden="true" /> Watch
                            </span>
                            <span className="rounded-md border border-white/25 px-3 py-2 text-xs text-white/85">+ My list</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-5 px-5 py-5">
                    <div>
                        <p className="mb-2 text-xs font-semibold text-white/85">Top 10 this week</p>
                        <div className="flex gap-4 overflow-hidden">
                            {[1, 2, 3, 4, 5].map((n) => (
                                <div key={n} className="flex shrink-0 items-end">
                                    <span className="-mr-2 text-5xl font-black leading-none text-white/15">{n}</span>
                                    <Poster i={n} className="h-28 w-20" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="mb-2 text-xs font-semibold text-white/85">Featured</p>
                        <div className="flex gap-3 overflow-hidden">
                            {[0, 3, 5, 2, 6, 4].map((n, k) => (
                                <Poster key={n} i={n} className="h-24 w-40" locked={k === 3} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AppChrome>
    );
}

const PLAY_STATES: { title: string; tone: string; body: React.ReactNode }[] = [
    {
        title: 'Plan covers the title',
        tone: 'Plays',
        body: (
            <div className="grid h-full place-items-center" style={{ background: 'linear-gradient(140deg, #22404a, #0f1014)' }}>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-black">
                    <Play className="h-4 w-4 fill-current" aria-hidden="true" />
                </span>
                <div className="absolute inset-x-3 bottom-3 h-1 rounded bg-white/20">
                    <div className="h-full w-1/3 rounded bg-[#e5484d]" />
                </div>
            </div>
        ),
    },
    {
        title: 'Title sits in another plan',
        tone: 'Paywall',
        body: (
            <div className="flex h-full flex-col items-center justify-center gap-2 bg-[#16161c] p-3 text-center">
                <Lock className="h-4 w-4 text-white/70" aria-hidden="true" />
                <p className="text-[11px] font-semibold text-white">This title is part of another plan</p>
                <span className="rounded bg-[#e5484d] px-3 py-1.5 text-[10px] font-bold text-white">See plans</span>
            </div>
        ),
    },
    {
        title: 'Plan has expired',
        tone: 'Renew',
        body: (
            <div className="flex h-full flex-col items-center justify-center gap-2 bg-[#16161c] p-3 text-center">
                <p className="text-[11px] font-semibold text-white">Your plan ended</p>
                <p className="text-[10px] text-white/55">Renew to keep watching.</p>
                <span className="rounded bg-white px-3 py-1.5 text-[10px] font-bold text-black">Renew</span>
            </div>
        ),
    },
];

/** The three answers a viewer can get when they press play. */
export function PlayStatesMock() {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {PLAY_STATES.map((s) => (
                <figure key={s.title} className="flex flex-col gap-2">
                    <div className="relative aspect-video overflow-hidden rounded-lg border border-white/10 bg-[#0b0b0e]">{s.body}</div>
                    <figcaption className="text-sm text-[var(--px-muted)]">
                        <span className="font-pixel-label mr-2 text-[10px] text-[var(--px-dim)]">{s.tone}</span>
                        {s.title}
                    </figcaption>
                </figure>
            ))}
        </div>
    );
}

const NAV = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: Film, label: 'Titles' },
    { icon: Tag, label: 'Tags' },
    { icon: Users, label: 'Users' },
    { icon: Receipt, label: 'Charges' },
];

const KPIS = [
    ['Total users', '—'],
    ['Active subscriptions', '500+'],
    ['No active subscription', '—'],
    ['Pending cancellations', '—'],
    ['New users, 7 days', '—'],
    ['New users, 30 days', '—'],
    ['Titles in catalogue', '—'],
    ['Payment events, 30 days', '—'],
];

const PLANS = [
    ['Weekly', 62, '#3b82f6'],
    ['Monthly', 30, '#10b981'],
    ['Add-on plans', 18, '#8b5cf6'],
] as const;

/** Admin dashboard: the same five areas as the real panel. Values are withheld. */
export function AdminMock() {
    return (
        <AppChrome label="streaming.app / admin" dark={false}>
            <div
                className="grid grid-cols-1 sm:grid-cols-[11rem_1fr]"
                role="img"
                aria-label="Mock of the admin panel: a sidebar with Dashboard, Titles, Tags, Users and Charges; eight metric cards with values withheld except active subscriptions at over 500; a bar chart of active plans; and shortcuts to manage users and titles."
            >
                <div className="hidden border-r border-[var(--px-line)] bg-[#fafafa] p-3 sm:block">
                    <p className="mb-3 px-2 text-xs font-bold tracking-wide text-[#111827]">Admin</p>
                    <ul className="space-y-1">
                        {NAV.map(({ icon: Icon, label, active }) => (
                            <li
                                key={label}
                                className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-xs ${active ? 'bg-[#111827] font-medium text-white' : 'text-[#4b5563]'}`}
                            >
                                <Icon className="h-3.5 w-3.5" aria-hidden="true" /> {label}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-4 p-4 sm:p-5">
                    <div className="flex items-center justify-between">
                        <p className="text-base font-bold text-[#111827]">Dashboard</p>
                        <span className="flex items-center gap-1.5 rounded-md border border-[var(--px-line)] px-2 py-1 text-[11px] text-[#6b7280]">
                            <Search className="h-3 w-3" aria-hidden="true" /> Search users
                        </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
                        {KPIS.map(([label, value]) => (
                            <div key={label} className="rounded-lg border border-[var(--px-line)] p-3">
                                <p className={`text-xl font-bold ${value === '—' ? 'text-[#d1d5db]' : 'text-[#111827]'}`}>{value}</p>
                                <p className="mt-0.5 text-[11px] leading-snug text-[#6b7280]">{label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 gap-2.5 lg:grid-cols-[1fr_15rem]">
                        <div className="rounded-lg border border-[var(--px-line)] p-4">
                            <p className="mb-3 text-xs font-semibold text-[#111827]">Active plans</p>
                            <div className="space-y-2.5">
                                {PLANS.map(([label, pct, color]) => (
                                    <div key={label} className="flex items-center gap-3">
                                        <span className="w-24 shrink-0 text-[11px] text-[#4b5563]">{label}</span>
                                        <div className="h-2 flex-1 rounded-full bg-[#f3f4f6]">
                                            <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: color }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2.5">
                            {[
                                [Users, 'Manage users', 'Search, edit plans, revoke access'],
                                [Film, 'Manage titles', 'Sync from the video CDN, edit the catalogue'],
                            ].map(([Icon, title, sub]) => {
                                const I = Icon as typeof Users;
                                return (
                                    <div key={title as string} className="flex-1 rounded-lg border border-[var(--px-line)] p-3">
                                        <I className="mb-2 h-3.5 w-3.5 text-[#9ca3af]" aria-hidden="true" />
                                        <p className="text-xs font-semibold text-[#111827]">{title as string}</p>
                                        <p className="mt-0.5 text-[11px] leading-snug text-[#9ca3af]">{sub as string}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </AppChrome>
    );
}

type Lane = 'viewer' | 'system';
const FLOW: { label: string; lane: Lane }[] = [
    { label: 'Lands on the public page', lane: 'viewer' },
    { label: 'Picks a plan', lane: 'viewer' },
    { label: 'Pays at the external checkout', lane: 'viewer' },
    { label: 'Payment event arrives and access is activated', lane: 'system' },
    { label: 'Signs in with a phone number', lane: 'viewer' },
    { label: 'Browses the catalogue', lane: 'viewer' },
    { label: 'Presses play', lane: 'viewer' },
    { label: 'Plan is checked and a signed link is issued', lane: 'system' },
];

/** From first visit to first play, marking the two steps the viewer never sees. */
export function SubscriptionFlow() {
    return (
        <figure className="flex flex-col gap-3">
            <ol
                className="grid grid-cols-2 gap-3 md:grid-cols-4"
                aria-label="Flow from first visit to first play. Viewer steps: lands on the public page, picks a plan, pays at the external checkout, signs in with a phone number, browses the catalogue, presses play. System steps: the payment event activates access; the plan is checked and a signed video link is issued."
            >
                {FLOW.map((s, i) => {
                    const system = s.lane === 'system';
                    return (
                        <li
                            key={s.label}
                            className={`relative flex min-h-[6.5rem] flex-col gap-2 rounded-lg border p-3 ${
                                system ? 'border-[var(--px-ink)] bg-[var(--px-ink)] text-white' : 'border-[var(--px-line)] bg-[var(--px-panel)]'
                            }`}
                        >
                            <div className="flex items-center justify-between">
                                <span className={`font-pixel-label text-[9px] ${system ? 'text-white/60' : 'text-[var(--px-dim)]'}`}>
                                    {String(i + 1).padStart(2, '0')} · {system ? 'System' : 'Viewer'}
                                </span>
                                {i < FLOW.length - 1 && <ArrowRight className={`h-3.5 w-3.5 ${system ? 'text-white/50' : 'text-[var(--px-dim)]'}`} aria-hidden="true" />}
                            </div>
                            <p className={`text-sm font-medium leading-snug ${system ? 'text-white' : 'text-[var(--px-ink)]'}`}>{s.label}</p>
                        </li>
                    );
                })}
            </ol>
            <figcaption className="text-sm leading-relaxed text-[var(--px-dim)]">
                First visit to first play. The two dark steps happen without a screen, which is exactly why they needed designing.
            </figcaption>
        </figure>
    );
}
