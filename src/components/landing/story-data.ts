// Content for the ER_ scroll-story landing.
// Palette comes from the personal banner: warm gray paper + charcoal ink.

export const STORY_PALETTE = {
    paper: '#C9CAC6',
    paperDim: '#b4b5b1',
    ink: '#262626',
    inkSoft: '#333333',
    inkLine: '#3d3d3d',
} as const;

// Scoped to the ER_SHELL only — the rest of the site stays monochromatic,
// but a terminal reads as a terminal when it can tell a key from a value.
export const SHELL_ACCENTS = {
    prompt: '#8FBF8A', // visitor@er:~$
    command: '#D9A662', // typed / executed command, and object-like keys
    value: '#7FB0C4', // values, index numbers
    success: '#8FBF8A', // "Access granted." etc.
    error: '#D98080', // "command not found"
} as const;

export const STORY_IDENTITY = {
    logo: 'ER',
    name: 'Elias Ricardo',
    roles: 'Senior Product Designer & UX Engineer · Frontend',
    remote: '//REMOTE — WORLDWIDE//',
    site: 'https://eeliasricardoo.com',
    siteLabel: 'eeliasricardoo.com',
    email: 'eeliasricardoo@gmail.com',
    github: 'https://github.com/eeliasricardoo',
    linkedin: 'https://linkedin.com/in/eeliasricardoo',
} as const;

// Broken into words so the manifesto can reveal them one by one on scroll.
export const MANIFESTO_TEXT = 'Human intention, amplified by AI.';

// Words rendered as inverted paper chips once revealed
export const MANIFESTO_HIGHLIGHTS = new Set(['intention', 'ai']);

export const TICKER_ITEMS = [
    'PRODUCT DESIGN',
    'AI',
    'FRONTEND',
    'UX ENGINEERING',
    'RESEARCH',
    'DESIGN SYSTEMS',
    'REACT',
    'SHIP IT',
] as const;

export const STORY_STATS = [
    { value: '80 → 10–20 min', label: 'email production time · Serasa Experian' },
    { value: '−22%', label: 'average support wait · triage redesign' },
    { value: '<0.8s', label: 'LCP on this site · open source' },
] as const;

// ——— Act — About. Everything here is copy: edit freely, the act renders whatever it finds. ———

export interface StoryCompany {
    name: string;
    logo: string;
    /** Native logo aspect ratio (width / height). */
    ratio: number;
    /** Optional visual bump for logos that read small next to the others at the same box size. */
    scale?: number;
}

// Logos live in public/logos/companies, shown in their real brand colors on
// the paper band (see CompaniesWall). Each sits in a fixed-size box so very
// different aspect ratios still read as roughly the same optical size.
export const STORY_COMPANIES: readonly StoryCompany[] = [
    { name: 'Toolzz', logo: '/logos/companies/toolzz.svg', ratio: 975.79 / 236.68 },
    { name: 'Stanley Black & Decker', logo: '/logos/companies/stanley-black-decker.svg', ratio: 9.8, scale: 1.3 },
    { name: 'Oliver Agency', logo: '/logos/companies/oliver-agency.svg', ratio: 150 / 27 },
    { name: 'Trailmerge', logo: '/logos/companies/trailmerge.svg', ratio: 145 / 32 },
    { name: 'Zurich Insurance', logo: '/logos/companies/zurich-insurance.svg', ratio: 805 / 190 },
    { name: 'Superbid', logo: '/logos/companies/superbid.png', ratio: 684 / 160 },
    { name: 'Stellantis', logo: '/logos/companies/stellantis.svg', ratio: 512 / 108 },
    { name: 'Serasa Experian', logo: '/logos/companies/serasa-experian.svg', ratio: 383 / 210 },
] as const;

// Interactive shell responses. Keys are the commands visitors can type;
// 'help' and 'clear' are handled by the component itself.
export const SHELL_COMMANDS = ['whoami', 'work', 'contact', 'sudo hire'] as const;

export const SHELL_RESPONSES: Record<string, readonly string[]> = {
    whoami: [
        'Elias Ricardo — product designer who codes.',
        'Remote from Brazil, working worldwide.',
        'Currently: open to Senior Product Designer / UX Engineer roles.',
    ],
    companies: STORY_COMPANIES.map((c, i) => `${String(i + 1).padStart(2, '0')}  ${c.name}`),
    hiking: [
        'Trails > treadmills.',
        'Most of my best design calls happened offline, halfway up a hill.',
    ],
    contact: [
        `email     ${STORY_IDENTITY.email}`,
        'github    github.com/eeliasricardoo',
        'linkedin  linkedin.com/in/eeliasricardoo',
    ],
    'sudo hire': ['Access granted.', `→ ${STORY_IDENTITY.email}`],
};

export interface StoryProject {
    index: string;
    title: string;
    description: string;
    tags: readonly string[];
    link: string;
    image: string;
    video?: string;
    metric: string | null;
    /** When the work happened, as shown on cards and case pages. Omitted when not confirmed. */
    period?: string;
    external?: boolean;
    /** Real product screenshot for the card cover. Without one the card falls back to the coded mock. */
    cover?: string;
    /** Landing-style cover: placeholder headline over a brand gradient, with `cover` shown in a window. */
    hero?: { headline: string; sub: string; from: string; to: string };
    /** Canvas colour behind the cover screenshot. */
    tint: string;
    /** The case in three lines, shown at the top of its case study. */
    summary: { problem: string; role: string; result: string };
}

// One accent per case cover — reuses the ER_SHELL palette so the "code
// color" language reads consistently across the site. Cycles if there are
// ever more projects than colors.
export const PROJECT_ACCENTS = [
    '#FF3B45', // Crimson Red for Streaming Platform (lifted from #E50914 for 4.5:1 on the dark mocks)
    SHELL_ACCENTS.command, // amber
    SHELL_ACCENTS.value, // cyan
    SHELL_ACCENTS.error, // coral
    SHELL_ACCENTS.success, // green
    '#B79FD9', // violet — the one hue outside the shell palette
] as const;

export const STORY_PROJECTS: readonly StoryProject[] = [
    {
        index: '01',
        title: 'EmailFlow Pro',
        description:
            'Email production at Serasa Experian was bottlenecked by manual HTML coding. I mapped the workflow, designed a visual builder, and engineered the React interface that reduced campaign build time from about 80 minutes to 10–20.',
        tags: ['UX Engineering', 'Product Design', 'React · AI'],
        link: '/portfolio/sfmc-magic-builder',
        image: '/portfolios/sfmc-magic-builder/interface-top.webp',
        video: '/portfolios/oliver.webm',
        metric: '80min → 10–20min',
        period: '2025',
        cover: '/portfolios/sfmc-magic-builder/interface-top.webp',
        hero: { headline: "Campaign emails in 10 minutes, not 80.", sub: "A visual builder for Salesforce Marketing Cloud.", from: '#34309a', to: '#131230' },
        tint: '#e8e6f5',
        summary: {
            problem: "Campaign emails at Serasa Experian were hand-coded in HTML for Salesforce Marketing Cloud. Each one took about 80 minutes.",
            role: "I was the designer producing those emails. I mapped the workflow, designed the tool and built it in React with AI-assisted development.",
            result: "Build time went from about 80 minutes to 10–20 per email.",
        },
    },
    {
        index: '02',
        title: 'ilevar',
        description:
            'A platform for language schools where AI prepares the lesson and the homework, and a real teacher still teaches it live. I designed the system in Figma, built it in Next.js, and I stay close to the schools that use it.',
        tags: ['UX Engineering', 'Design System', 'Next.js · WebRTC'],
        link: '/portfolio/ilevar',
        image: '/portfolios/ilevar/dashboard.webp',
        metric: 'AI lesson prep · live class',
        period: '2026 – present',
        cover: '/portfolios/ilevar/hero-poster.webp',
        tint: '#dde7f6',
        summary: {
            problem: "Teachers lose weekends building lessons, online classes turn into calls students only watch, and nothing connects the class to what the student practises next.",
            role: 'UX Engineer across the whole loop: user flows and edge cases, the design system in Figma and in code, support for schools, and Clarity to check what people actually do.',
            result: 'In production at ilevar.com: AI drafts the lesson and the homework, a teacher runs the class live with 16 activity types, and every lesson stays in the student\'s notebook.',
        },
    },
    {
        index: '03',
        title: 'Streaming Platform',
        description:
            'A subscription streaming service with more than 500 active users. I designed and built all of it: the viewer app, the design system, the payment and access logic, and the admin panel the client runs it from.',
        tags: ['Product Design', 'UX Engineering', 'React · Design System'],
        link: '/portfolio/netflix',
        image: '/portfolios/netflix/hero-featured.jpg',
        metric: '500+ active users',
        period: '2026 – present',
        tint: '#f2e2df',
        summary: {
            problem: "Subscribers pay at an external checkout, so the product has to turn a payment into working access before they come back, and answer correctly every time someone presses play.",
            role: "Sole designer and developer: user flows, access rules, interface, design system, serverless back end and the admin panel.",
            result: "In production with more than 500 active users, run day to day by a non-technical client from the admin I designed.",
        },
    },
    {
        index: '04',
        title: 'Support Queue',
        description:
            'Customer support lacked a triage system, leaving all tickets in a single pool. I researched pain points, designed the priority model and interface, and reduced average wait times by 22%.',
        tags: ['UX Engineering', 'Product Design', 'Real-time UI'],
        link: '/portfolio/support-queue',
        image: '/portfolios/fila-atendimento/1.webp',
        video: '/portfolios/framer-ui.webm',
        metric: 'avg wait −22%',
        period: '2024',
        cover: '/portfolios/fila-atendimento/10.webp',
        hero: { headline: "The longest wait goes first.", sub: "Triage and assignment for omnichannel support.", from: '#0f5552', to: '#081c1f' },
        tint: '#e5e8ee',
        summary: {
            problem: "Support had no triage. Every ticket sat in one pool, and customers waited longer than needed for a first human reply.",
            role: "I researched the pain points, then designed queue ordering by waiting time and a pop-up for immediate assignment.",
            result: "Average wait time down 22%.",
        },
    },
    {
        index: '05',
        title: 'Ranking Engine',
        description:
            'An EdTech gamification system shaped through research, user journeys, and interface design, then implemented around real-time leaderboard behavior, SSR, and caching.',
        tags: ['UX Engineering', 'Product Design', 'SSR · Caching'],
        link: '/portfolio/ranking',
        image: '/portfolios/ranking/ranking.webp',
        video: '/portfolios/ranking/ranking-demo.webm',
        metric: 'Sub-100ms Sync',
        period: '2023',
        cover: '/portfolios/ranking/ranking.png',
        hero: { headline: "A leaderboard that keeps everyone playing.", sub: "Real-time ranking for an EdTech platform.", from: '#9a5410', to: '#2a1505' },
        tint: '#f4ead9',
        summary: {
            problem: "An EdTech platform wanted more student engagement from a ranking that stays competitive without discouraging anyone.",
            role: "Research, user journeys and interface design, then the real-time leaderboard with SSR and caching.",
            result: "A leaderboard that syncs in under 100ms.",
        },
    },
    {
        index: '06',
        title: 'ChatAI Ecosystem',
        description:
            'Reading docs only gets you so far. I designed and built a multimodal AI sandbox to master and de-risk token streaming and model orchestration before client work.',
        tags: ['Next.js', 'AI', 'Streaming'],
        link: '/portfolio/ventuschat',
        image: '/portfolios/ventus/v9.webp',
        video: '/portfolios/ventus/video.webm',
        metric: 'Multimodal AI Stream',
        period: '2025',
        cover: '/portfolios/ventus/Imge.webp',
        hero: { headline: "Text, images and models in one chat.", sub: "A sandbox for streaming and model orchestration.", from: '#44248a', to: '#0f0a20' },
        tint: '#e3e4f0',
        summary: {
            problem: "I didn't want to learn token streaming and model orchestration for the first time on a client deadline.",
            role: "I designed and built a multimodal AI chat sandbox in Next.js.",
            result: "A working lab for streaming, multimodal generation and model orchestration.",
        },
    },
    {
        index: '07',
        title: 'Carousel AI Generator',
        description:
            'An AI-powered design tool that turns long-form text and ideas into structured, high-conversion multi-slide social carousels with instant theme switching and responsive preview.',
        tags: ['UX Engineering', 'AI Automation', 'React · Canvas'],
        link: '/portfolio/carousel-builder',
        image: '/portfolios/carousel-builder/Captura de tela 2025-08-01 001703.png',
        metric: '−90% creation time',
        period: '2025',
        cover: '/portfolios/carousel-builder/carousel-builder-cover.webp',
        hero: { headline: "From a paragraph to a carousel.", sub: "AI structures the slides; you pick the theme.", from: '#8a1f5f', to: '#1f0a18' },
        tint: '#f0e3ec',
        summary: {
            problem: "Turning long-form text into a social carousel by hand is slow.",
            role: "I designed and built an AI tool that structures the text into slides, with theme switching and a responsive preview.",
            result: "About 90% less time per carousel.",
        },
    },
] as const;
