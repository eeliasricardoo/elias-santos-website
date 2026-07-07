// Content for the ER_ scroll-story landing.
// Palette comes from the personal banner: warm gray paper + charcoal ink.

export const STORY_PALETTE = {
    paper: '#C9CAC6',
    paperDim: '#b4b5b1',
    ink: '#262626',
    inkSoft: '#333333',
    inkLine: '#3d3d3d',
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
