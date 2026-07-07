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
    roles: 'Product Design · AI · Frontend',
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
    { value: '−87.5%', label: 'email production time · Serasa Experian' },
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
export const SHELL_COMMANDS = ['whoami', 'companies', 'hiking', 'contact', 'sudo hire'] as const;

export const SHELL_RESPONSES: Record<string, readonly string[]> = {
    whoami: [
        'Elias Ricardo — product designer who codes.',
        'Remote from Brazil, working worldwide.',
        'Currently: open to senior product design roles.',
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
    metric: string | null;
    external?: boolean;
}

// One accent per case cover — reuses the ER_SHELL palette so the "code
// color" language reads consistently across the site. Cycles if there are
// ever more projects than colors.
export const PROJECT_ACCENTS = [
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
            'Campaign emails at Serasa Experian took 80 minutes of manual code. I built the tool that cut it to 10.',
        tags: ['React', 'AI', 'UX Engineering'],
        link: '/portfolio/sfmc-magic-builder',
        image: '/portfolios/sfmc-magic-builder/interface-top.webp',
        metric: '80min → 10min',
    },
    {
        index: '02',
        title: 'EnglishRoom',
        description:
            'A single-screen 1:1 classroom — live video, activities, and notes on one surface, from tokens to WebRTC.',
        tags: ['Next.js 16', 'WebRTC', 'UX Engineering'],
        link: '/portfolio/englishroom',
        image: '/portfolios/englishroom/landing.webp',
        metric: 'solo build',
    },
    {
        index: '03',
        title: 'Support Queue',
        description:
            'Every ticket landed in the same pile. I researched, designed a priority system, and shipped it.',
        tags: ['UX/UI', 'Real-time', 'Optimization'],
        link: '/portfolio/support-queue',
        image: '/portfolios/fila-atendimento/1.webp',
        metric: 'avg wait −22%',
    },
    {
        index: '04',
        title: 'ChatAI Ecosystem',
        description:
            'My personal AI workspace — chat, image analysis and generation. Where I learn patterns before client work.',
        tags: ['Next.js', 'AI', 'Streaming'],
        link: '/portfolio/ventuschat',
        image: '/portfolios/ventus/v9.webp',
        metric: null,
    },
    {
        index: '05',
        title: 'Ranking Engine',
        description:
            'Gamification for an EdTech platform — live leaderboards built with SSR and caching to survive launch day.',
        tags: ['Gamification', 'SSR', 'Caching'],
        link: '/portfolio/ranking',
        image: '/portfolios/ranking/ranking.webp',
        metric: null,
    },
] as const;
