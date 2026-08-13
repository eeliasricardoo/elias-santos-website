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
    external?: boolean;
}

// One accent per case cover — reuses the ER_SHELL palette so the "code
// color" language reads consistently across the site. Cycles if there are
// ever more projects than colors.
export const PROJECT_ACCENTS = [
    '#E50914', // Netflix Red for DramaFlix
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
    },
    {
        index: '02',
        title: 'ilevar',
        description:
            'A live classroom platform shaped from research and interaction design through design tokens, reusable interfaces, and WebRTC implementation. The experience brings video, interactive activities, and progress into one coherent product surface.',
        tags: ['UX Engineering', 'Product Design', 'Next.js · WebRTC'],
        link: '/portfolio/ilevar',
        image: '/mascot/gennai-hero.png',
        metric: null,
    },
    {
        index: '03',
        title: 'DramaFlix',
        description:
            'A streaming experience designed and engineered with accessible controls, a documented design system, and a focus on making content easier to discover and use for older adults.',
        tags: ['UX Engineering', 'Product Design', 'React · Accessibility'],
        link: '/portfolio/netflix',
        image: '/portfolios/netflix/hero-featured.jpg',
        video: '/portfolios/netflix/a_da_ca_fba_dmp_.mp4',
        metric: '300 active users',
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
        metric: null,
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
        metric: null,
    },
] as const;
