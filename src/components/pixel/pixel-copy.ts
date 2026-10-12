// Everything the home *says* lives here — mascot lines and posts. Edit freely; components render whatever they find.
import type { MascotMood } from './mascot-bus';

export const HERO_INTRO =
    "Hi, I'm Elias — Senior Product Designer & UX Engineer. I research the problem, design the interface, and ship the React component. No handoff meeting required.";

/** One line per case, said when the visitor hovers its card. Keyed by project index. */
export const CASE_LINES: Record<string, { mood: MascotMood; say: string }> = {
    '01': { mood: 'wink', say: 'Emails went from 80 minutes to 10–20.' },
    '02': { mood: 'smirk', say: 'My main case. Figma, code and support, same person.' },
    '03': { mood: 'idle2', say: 'Over 500 active users. I designed and built all of it.' },
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
}

// Slides live in public/pixel/posts/<id>/01.webp … NN.webp
export const PIXEL_POSTS: PixelPost[] = [
    {
        id: 'utopia',
        title: 'What if the future were beautiful?',
        subtitle: 'Technology that works in favour of life.',
        slides: 9,
        ratio: 1,
    },
    {
        id: 'ai-designers',
        title: "AI won't replace designers",
        subtitle: 'But it will expose the ones who only draw screens.',
        slides: 10,
        ratio: 720 / 1124,
    },
    {
        id: 'ai-research',
        title: 'AI-driven investigation',
        subtitle: "Start with a better question, not an answer.",
        slides: 9,
        ratio: 720 / 1130,
    },
    {
        id: 'heatmap',
        title: 'Pretty sites still lose people',
        subtitle: 'A heatmap story: where users click, scroll and quit.',
        slides: 8,
        ratio: 720 / 1126,
    },
];

export const ABOUT_FACTS: { label: string; value: string }[] = [
    { label: 'Role', value: 'Product Designer / UX Engineer' },
    { label: 'Based in', value: 'Brazil · Remote' },
    { label: 'Works with', value: 'LATAM · US · Europe' },
    { label: 'Languages', value: 'PT · EN' },
    { label: 'Status', value: 'Open to senior roles' },
];
