'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { MASCOT_FRAMES, onMascotReact, type MascotMood } from './mascot-bus';
import { motionOff, useMotionOff } from './motion-prefs';

const COLS = 6;
const FRAME_W = 144;
const FRAME_H = 156;
const SHEET_W = FRAME_W * COLS;
const SHEET_H = FRAME_H * Math.ceil(MASCOT_FRAMES.length / COLS);
const STORAGE_KEY = 'er-pet-hidden';

// Doom-style escalation when someone keeps poking the face.
const POKES: { mood: MascotMood; say: string }[] = [
    { mood: 'surprised', say: 'Hey.' },
    { mood: 'squint', say: 'Personal space?' },
    { mood: 'angry', say: 'I design interfaces, not punching bags.' },
    { mood: 'shout', say: 'OK. STOP.' },
    { mood: 'scream', say: 'AAAAAAAH' },
    { mood: 'cry', say: '…fine. Go poke the case studies instead.' },
];

function framePosition(mood: MascotMood, size: number) {
    const i = MASCOT_FRAMES.indexOf(mood);
    const scale = size / FRAME_W;
    const x = (i % COLS) * FRAME_W * scale;
    const y = Math.floor(i / COLS) * FRAME_H * scale;
    return {
        backgroundPosition: `-${x}px -${y}px`,
        backgroundSize: `${SHEET_W * scale}px ${SHEET_H * scale}px`,
    };
}

export function Mascot() {
    const [hidden, setHidden] = useState(true);
    const [ready, setReady] = useState(false);
    const [mood, setMood] = useState<MascotMood>('idle');
    const [bubble, setBubble] = useState<{ text: string; key: number } | null>(null);
    const [shake, setShake] = useState(false);
    const [size, setSize] = useState(104);
    const [announced, setAnnounced] = useState('');
    const still = useMotionOff();

    const locked = useRef(false); // true while a reaction is playing — idle loop stays out of the way
    const holdTimer = useRef<number | undefined>(undefined);
    const bubbleTimer = useRef<number | undefined>(undefined);
    const pokes = useRef(0);
    const pokeReset = useRef<number | undefined>(undefined);
    const rootRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        try {
            setHidden(localStorage.getItem(STORAGE_KEY) === '1');
        } catch {
            setHidden(false);
        }
        setReady(true);
        const mq = window.matchMedia('(max-width: 640px)');
        const apply = () => setSize(mq.matches ? 76 : 104);
        apply();
        mq.addEventListener('change', apply);
        return () => mq.removeEventListener('change', apply);
    }, []);

    const say = useCallback((text: string) => {
        window.clearTimeout(bubbleTimer.current);
        setBubble({ text, key: Date.now() });
        bubbleTimer.current = window.setTimeout(() => setBubble(null), Math.min(7000, 2600 + text.length * 45));
    }, []);

    const react = useCallback((next: MascotMood, hold = 1400) => {
        locked.current = true;
        setMood(next);
        window.clearTimeout(holdTimer.current);
        holdTimer.current = window.setTimeout(() => {
            locked.current = false;
            setMood('idle');
        }, hold);
    }, []);

    // External reactions (hover on cards, hotspots, section changes…)
    useEffect(() => {
        return onMascotReact((e) => {
            if (e.mood) react(e.mood, e.hold);
            if (e.say) say(e.say);
            if (e.say && e.announce) setAnnounced(e.say);
            if (e.shake && !motionOff()) {
                setShake(true);
                window.setTimeout(() => setShake(false), 800);
            }
        });
    }, [react, say]);

    // First visit of the session: hop in and say hi.
    useEffect(() => {
        if (hidden) return;
        let greeted = false;
        try {
            greeted = sessionStorage.getItem('er-pet-greeted') === '1';
            sessionStorage.setItem('er-pet-greeted', '1');
        } catch {
            /* ignore */
        }
        if (greeted) return;
        const t = window.setTimeout(() => {
            react('wink', 1600);
            say('Hey! Click around — almost everything here reacts.');
        }, 2600);
        return () => window.clearTimeout(t);
        // Only on the first reveal, not when re-showing later.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hidden === false]);

    // Idle life: blinks and glances, like the Doom status bar face.
    useEffect(() => {
        if (hidden || still) return;
        let t: number;
        const tick = () => {
            if (!locked.current && document.visibilityState === 'visible') {
                const r = Math.random();
                if (r < 0.55) {
                    setMood('blink');
                    window.setTimeout(() => !locked.current && setMood('blink2'), 70);
                    window.setTimeout(() => !locked.current && setMood('idle'), 160);
                } else if (r < 0.8) {
                    const side = Math.random() < 0.5 ? 'lookL' : 'lookR';
                    setMood(side);
                    window.setTimeout(() => !locked.current && setMood(side === 'lookL' ? 'lookL2' : 'lookR2'), 500);
                    window.setTimeout(() => !locked.current && setMood('idle'), 1100);
                } else {
                    setMood('idle2');
                    window.setTimeout(() => !locked.current && setMood('idle'), 900);
                }
            }
            t = window.setTimeout(tick, 2200 + Math.random() * 2800);
        };
        t = window.setTimeout(tick, 1800);
        return () => window.clearTimeout(t);
    }, [hidden, still]);

    // Gets suspicious when the cursor hovers near; glances toward it otherwise.
    useEffect(() => {
        if (hidden || window.matchMedia('(pointer: coarse)').matches) return;
        let raf = 0;
        let last: MascotMood | null = null;
        const onMove = (e: PointerEvent) => {
            if (raf) return;
            raf = requestAnimationFrame(() => {
                raf = 0;
                if (locked.current || !rootRef.current) return;
                const box = rootRef.current.getBoundingClientRect();
                const cx = box.left + box.width / 2;
                const cy = box.top + box.height / 2;
                const dist = Math.hypot(e.clientX - cx, e.clientY - cy);
                let next: MascotMood | null = null;
                if (dist < 150) next = 'squint';
                else if (e.clientX < cx - 260 && e.clientY > window.innerHeight * 0.55) next = 'lookL';
                if (next !== last) {
                    last = next;
                    setMood(next ?? 'idle');
                }
            });
        };
        window.addEventListener('pointermove', onMove, { passive: true });
        return () => {
            window.removeEventListener('pointermove', onMove);
            cancelAnimationFrame(raf);
        };
    }, [hidden]);

    // Scroll too fast → shocked face. Rate-limited so it's a joke, not a nag.
    useEffect(() => {
        if (hidden) return;
        let lastY = window.scrollY;
        let lastT = performance.now();
        let cooldown = 0;
        const onScroll = () => {
            const now = performance.now();
            const v = Math.abs(window.scrollY - lastY) / Math.max(1, now - lastT);
            lastY = window.scrollY;
            lastT = now;
            if (v > 5 && now > cooldown) {
                cooldown = now + 20000;
                react('surprised2', 1200);
                say('Whoa. Speedrunning my portfolio?');
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [hidden, react, say]);

    // Each section can carry a line the mascot says the first time it's seen.
    useEffect(() => {
        if (hidden) return;
        const seen = new Set<string>();
        const io = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    const el = entry.target as HTMLElement;
                    const line = el.dataset.mascotLine;
                    if (!entry.isIntersecting || !line || seen.has(el.id)) continue;
                    seen.add(el.id);
                    react((el.dataset.mascotMood as MascotMood) || 'smirk', 1600);
                    say(line);
                }
            },
            { threshold: 0.35 },
        );
        document.querySelectorAll<HTMLElement>('[data-mascot-line]').forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, [hidden, react, say]);

    const poke = () => {
        const step = POKES[Math.min(pokes.current, POKES.length - 1)];
        pokes.current += 1;
        window.clearTimeout(pokeReset.current);
        pokeReset.current = window.setTimeout(() => (pokes.current = 0), 4000);
        react(step.mood, 1800);
        say(step.say);
        setAnnounced(step.say);
        if (pokes.current >= 4 && !motionOff()) {
            setShake(true);
            window.setTimeout(() => setShake(false), 800);
        }
    };

    const toggleHidden = (next: boolean) => {
        setHidden(next);
        setBubble(null);
        try {
            localStorage.setItem(STORAGE_KEY, next ? '1' : '0');
        } catch {
            /* private mode — fine, it just won't persist */
        }
    };

    // Polite live region: only replies to the visitor's own actions land here.
    const live = (
        <div className="sr-only" role="status" aria-live="polite">
            {announced}
        </div>
    );

    if (!ready) return live;

    if (hidden) {
        return (
            <>
            {live}
            <button
                type="button"
                onClick={() => {
                    toggleHidden(false);
                    react('wink', 1400);
                    say("I'm back.");
                }}
                className="px-mascot px-chip border border-[var(--px-line)] !bg-[var(--px-panel)] !text-[var(--px-ink)]"
                aria-label="Bring back the Elias mascot"
            >
                <span className="px-dot" /> Call Elias
            </button>
            </>
        );
    }

    return (
        <div ref={rootRef} className={`px-mascot ${shake ? 'is-shake' : ''}`}>
            {live}
            {bubble && (
                <div key={bubble.key} className="px-bubble" aria-hidden="true">
                    {bubble.text}
                </div>
            )}
            <div className="px-mascot-enter">
            <div className="px-mascot__bob relative">
                <button
                    type="button"
                    onClick={poke}
                    aria-label="Elias mascot. Poke it, see what happens."
                    className="px-mascot__face block"
                    style={{
                        width: size,
                        height: Math.round((size * FRAME_H) / FRAME_W),
                        backgroundImage: 'url(/pixel/mascot.webp)',
                        ...framePosition(mood, size),
                    }}
                />
                <button
                    type="button"
                    onClick={() => toggleHidden(true)}
                    aria-label="Hide mascot"
                    className="absolute -top-1 -left-2 grid h-6 w-6 place-items-center rounded-full border border-[var(--px-line)] bg-[var(--px-panel)] text-[var(--px-muted)] hover:text-[var(--px-ink)]"
                >
                    <X className="h-3 w-3" />
                </button>
            </div>
            </div>
        </div>
    );
}
