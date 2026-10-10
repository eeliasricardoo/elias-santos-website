// Everything the pixel home *says* lives here — mascot lines, scene hotspots,
// posts. Edit freely; components render whatever they find.
import type { MascotMood } from './mascot-bus';

export const HERO_INTRO =
    "Hi, I'm Elias — Senior Product Designer & UX Engineer. I research the problem, design the interface, and ship the React component. No handoff meeting required.";

/** Hotspots on the room scene, in % of the image box (left, top, width, height). */
export interface SceneHotspot {
    id: string;
    label: string;
    box: [number, number, number, number];
    mood: MascotMood;
    /** `{time}` is replaced with the current time in São Paulo. */
    say: string;
}

export const OVERLOOK_HOTSPOTS: SceneHotspot[] = [
    {
        id: 'sun',
        label: 'Sun — what time is it in Brazil?',
        box: [66, 0, 12, 16],
        mood: 'lookR',
        say: "It's {time} here in Brazil. I work async with LATAM, the US and Europe.",
    },
    {
        id: 'robot',
        label: 'Robot — about my AI sidekick',
        box: [0, 46, 16, 28],
        mood: 'wink',
        say: 'My AI sidekick. It drafts fast. I decide what ships.',
    },
    {
        id: 'dog',
        label: 'Dog — meet the team',
        box: [27.6, 50, 19, 36],
        mood: 'smirk',
        say: 'Every good team has one. He handles QA.',
    },
    {
        id: 'backpack',
        label: 'Backpack — what I carry',
        box: [9.9, 18, 10, 22],
        mood: 'grimace',
        say: 'Inside: Figma, a terminal, and way too many tabs.',
    },
    {
        id: 'train',
        label: 'Train — on good systems',
        box: [47, 40, 30, 8],
        mood: 'idle2',
        say: "Good systems feel like this train: on time, on rails, nobody notices.",
    },
    {
        id: 'solar',
        label: 'Solar panels — on sustainable design systems',
        box: [86, 23, 13, 8],
        mood: 'smirk',
        say: 'Sustainable design systems. Literally.',
    },
];

/** One line per case, said when the visitor hovers its card. Keyed by project index. */
export const QUEST_LINES: Record<string, { mood: MascotMood; say: string }> = {
    '01': { mood: 'wink', say: 'My flagship. Emails went from 80 minutes to 10–20.' },
    '02': { mood: 'smirk', say: 'Video, 14 activities and WebRTC in one surface.' },
    '03': { mood: 'idle2', say: 'Designed with older adults in mind. WCAG AA.' },
    '04': { mood: 'surprised', say: 'A triage model that cut waiting by 22%.' },
    '05': { mood: 'smirk', say: 'Gamification — with research first, points second.' },
    '06': { mood: 'squint', say: 'Built to understand token streaming before a client needed it.' },
    '07': { mood: 'wink', say: 'Text in, carousel out. Like the ones further down.' },
};

export interface PixelPost {
    id: string;
    title: string;
    subtitle: string;
    slides: number;
    /** Slide aspect ratio (width / height). */
    ratio: number;
    tilt: number;
}

// Slides live in public/pixel/posts/<id>/01.webp … NN.webp
export const PIXEL_POSTS: PixelPost[] = [
    {
        id: 'utopia',
        title: 'What if the future were beautiful?',
        subtitle: 'Technology that works in favour of life.',
        slides: 9,
        ratio: 1,
        tilt: 2,
    },
    {
        id: 'ai-designers',
        title: "AI won't replace designers",
        subtitle: 'But it will expose the ones who only draw screens.',
        slides: 10,
        ratio: 720 / 1124,
        tilt: -2,
    },
    {
        id: 'ai-research',
        title: 'AI-driven investigation',
        subtitle: "Start with a better question, not an answer.",
        slides: 9,
        ratio: 720 / 1130,
        tilt: 1.5,
    },
    {
        id: 'heatmap',
        title: 'Pretty sites still lose people',
        subtitle: 'A heatmap story: where users click, scroll and quit.',
        slides: 8,
        ratio: 720 / 1126,
        tilt: -1,
    },
];

export const CHARACTER_STATS: { label: string; value: string }[] = [
    { label: 'Class', value: 'Product Designer / UX Engineer' },
    { label: 'Base', value: 'Brazil · Remote' },
    { label: 'Party', value: 'LATAM · US · Europe' },
    { label: 'Languages', value: 'PT · EN' },
    { label: 'Status', value: 'Open to senior roles' },
];

export const INVENTORY: { slot: string; items: string[] }[] = [
    {
        slot: 'UX Engineering',
        items: ['Design Systems', 'Component Architecture', 'Design-to-Code', 'Interaction Design', 'Accessibility / WCAG', 'Rapid Prototyping'],
    },
    {
        slot: 'Product Design',
        items: ['UX Research', 'Product Discovery', 'User Flows', 'Information Architecture', 'Usability Testing', 'Figma'],
    },
    {
        slot: 'Frontend',
        items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Astro', 'WebRTC', 'Performance'],
    },
    {
        slot: 'AI & Automation',
        items: ['Claude Code', 'Cursor', 'OpenAI', 'Workflow Automation'],
    },
];

export function saoPauloTime() {
    return new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'America/Sao_Paulo',
    }).format(new Date());
}

export function saoPauloHour() {
    return Number(
        new Intl.DateTimeFormat('en-GB', { hour: 'numeric', hour12: false, timeZone: 'America/Sao_Paulo' }).format(new Date()),
    );
}
