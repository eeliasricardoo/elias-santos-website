// Tiny event bus so any part of the page can make the mascot react without
// prop-drilling. Fire-and-forget: if the mascot is hidden, nothing happens.

// Frame order matches public/pixel/mascot.webp (6 columns, 144×156 per frame).
export const MASCOT_FRAMES = [
    'idle', 'idle2', 'blink', 'blink2', 'lookR', 'lookR2',
    'lookL', 'lookL2', 'wink', 'wink2', 'smirk', 'surprised',
    'surprised2', 'grimace', 'squint', 'angry', 'shout', 'scream',
    'clench', 'cry', 'cry2', 'sad',
] as const;

export type MascotMood = (typeof MASCOT_FRAMES)[number];

export interface MascotEvent {
    mood?: MascotMood;
    say?: string;
    /** How long the mood holds before returning to idle (ms). */
    hold?: number;
    shake?: boolean;
    /** Also read the line to screen readers. Use for replies to a visitor's own action. */
    announce?: boolean;
}

const EVENT = 'er:mascot';

export function mascotReact(detail: MascotEvent) {
    if (typeof window === 'undefined') return;
    window.dispatchEvent(new CustomEvent<MascotEvent>(EVENT, { detail }));
}

export function onMascotReact(handler: (e: MascotEvent) => void) {
    const listener = (e: Event) => handler((e as CustomEvent<MascotEvent>).detail);
    window.addEventListener(EVENT, listener);
    return () => window.removeEventListener(EVENT, listener);
}
