'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { STORY_COMPANIES, SHELL_COMMANDS, SHELL_RESPONSES, SHELL_ACCENTS } from './story-data';

const HELP_OUTPUT: readonly string[] = [
    'available commands:',
    ...SHELL_COMMANDS.map((c) => `  ${c}`),
    '  clear',
];

// Commands the shell types by itself when it scrolls into view.
const AUTOPLAY_SCRIPT = ['whoami', 'companies', 'hiking'] as const;
const TYPE_SPEED_MS = 55;

interface ShellEntry {
    cmd: string;
    output: readonly string[];
}

const respond = (cmd: string): readonly string[] =>
    cmd === 'help'
        ? HELP_OUTPUT
        : (SHELL_RESPONSES[cmd] ?? [`command not found: ${cmd} — try 'help'`]);

/**
 * Renders one output line with the coloring a real shell/editor would give
 * it: success/error states, "key   value" pairs (contact, help list),
 * numbered entries (companies), and "Label:" sentences all get their own
 * accent. Anything that doesn't match a pattern falls back to plain dim text.
 */
function OutputLine({ line }: { line: string }) {
    if (/^access granted\.?$/i.test(line) || line.startsWith('→')) {
        return (
            <p style={{ color: SHELL_ACCENTS.success }} className="font-medium">
                {line}
            </p>
        );
    }

    const notFound = line.match(/^command not found: (\S+)(.*)$/);
    if (notFound) {
        return (
            <p>
                <span style={{ color: SHELL_ACCENTS.error }}>command not found:</span>{' '}
                <span style={{ color: SHELL_ACCENTS.command }}>{notFound[1]}</span>
                <span className="opacity-60">{notFound[2]}</span>
            </p>
        );
    }

    // Help list items ("  whoami") and numbered/key-value rows all share the
    // same shape: a short token, run of spaces, then the rest of the line.
    const row = line.match(/^(\s*)(\S+)(\s{2,}|(?=\s*$))(.*)$/);
    if (row && (row[1].length >= 2 || row[3].length >= 2)) {
        const [, indent, token, gap, rest] = row;
        return (
            <p className="whitespace-pre">
                {indent}
                <span style={{ color: SHELL_ACCENTS.command }}>{token}</span>
                {gap}
                <span style={{ color: SHELL_ACCENTS.value }}>{rest}</span>
            </p>
        );
    }

    const label = line.match(/^([A-Za-z][A-Za-z ]*:)\s(.*)$/);
    if (label) {
        return (
            <p>
                <span style={{ color: SHELL_ACCENTS.command }}>{label[1]}</span>{' '}
                <span className="opacity-80">{label[2]}</span>
            </p>
        );
    }

    return <p className="whitespace-pre-wrap opacity-80">{line}</p>;
}

/**
 * er_shell — the interactive centerpiece of the About act.
 * It demos itself: once in view it types a short scripted session,
 * character by character, then hands the prompt to the visitor.
 * Clicking a command chip types it out the same way before running.
 * Any click or focus interrupts whatever is being typed. Copy lives
 * in story-data.ts.
 */
function Shell() {
    const reduce = useReducedMotion();
    const [entries, setEntries] = useState<ShellEntry[]>([]);
    const [value, setValue] = useState('');
    const rootRef = useRef<HTMLDivElement>(null);
    const bodyRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const startedRef = useRef(false);
    const typingRef = useRef(false);
    const timersRef = useRef<number[]>([]);

    const run = (raw: string) => {
        const cmd = raw.trim().toLowerCase();
        if (!cmd) return;
        if (cmd === 'clear') {
            setEntries([]);
            setValue('');
            return;
        }
        setEntries((prev) => [...prev, { cmd, output: respond(cmd) }]);
        setValue('');
    };

    // Stops any scripted typing — the autoplay session or a clicked chip —
    // and hands the prompt back to the visitor.
    const cancelTyping = () => {
        timersRef.current.forEach(clearTimeout);
        timersRef.current = [];
        if (typingRef.current) setValue('');
        typingRef.current = false;
    };

    // Types cmd into the prompt char by char, then executes it.
    // Returns the total duration so the autoplay script can chain commands.
    const typeAndRun = (cmd: string): number => {
        if (reduce) {
            run(cmd);
            return 0;
        }
        cancelTyping();
        typingRef.current = true;
        let at = 0;
        for (let i = 1; i <= cmd.length; i++) {
            const typed = cmd.slice(0, i);
            timersRef.current.push(window.setTimeout(() => setValue(typed), at));
            at += TYPE_SPEED_MS;
        }
        at += 350;
        timersRef.current.push(
            window.setTimeout(() => {
                typingRef.current = false;
                setValue('');
                run(cmd);
            }, at),
        );
        return at;
    };

    useEffect(() => {
        const el = rootRef.current;
        if (!el) return;

        const playNext = (idx: number) => {
            if (idx >= AUTOPLAY_SCRIPT.length) return;
            const total = typeAndRun(AUTOPLAY_SCRIPT[idx]);
            if (idx + 1 < AUTOPLAY_SCRIPT.length) {
                timersRef.current.push(window.setTimeout(() => playNext(idx + 1), total + 1100));
            }
        };

        const io = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting || startedRef.current) return;
                startedRef.current = true;
                io.disconnect();
                if (reduce) {
                    // No typing theater — render the session already played out
                    setEntries(AUTOPLAY_SCRIPT.map((cmd) => ({ cmd, output: respond(cmd) })));
                } else {
                    timersRef.current.push(window.setTimeout(() => playNext(0), 500));
                }
            },
            { threshold: 0.4 },
        );
        io.observe(el);

        return () => {
            io.disconnect();
            timersRef.current.forEach(clearTimeout);
            timersRef.current = [];
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reduce]);

    // Keep the newest output (and the prompt) in view
    useEffect(() => {
        const el = bodyRef.current;
        if (el) el.scrollTop = el.scrollHeight;
    }, [entries, value]);

    return (
        <div
            ref={rootRef}
            className="overflow-hidden rounded-lg border"
            style={{ borderColor: 'color-mix(in srgb, var(--er-paper) 25%, transparent)' }}
            onPointerDown={cancelTyping}
        >
            <div
                className="flex items-center justify-between border-b px-5 py-3 text-[10px] tracking-[0.25em] opacity-60"
                style={{ borderColor: 'inherit' }}
            >
                <span>ER_SHELL — VISITOR SESSION</span>
                <span>TTY01</span>
            </div>

            <div
                ref={bodyRef}
                role="log"
                aria-live="polite"
                className="h-[26rem] cursor-text overflow-y-auto px-5 py-5 text-sm leading-relaxed md:h-[30rem] md:text-[15px]"
                onClick={() => inputRef.current?.focus()}
            >
                <p className="opacity-50">er_shell v1.0 — type a command, or click one below.</p>

                {entries.map((entry, i) => (
                    <div key={i} className="mt-4">
                        <p>
                            <span style={{ color: SHELL_ACCENTS.prompt }}>visitor@er:~$ </span>
                            <span style={{ color: SHELL_ACCENTS.command }} className="font-medium">
                                {entry.cmd}
                            </span>
                        </p>
                        {entry.output.map((line, j) => (
                            <OutputLine key={j} line={line} />
                        ))}
                    </div>
                ))}

                <form
                    className="mt-4 flex items-baseline gap-2"
                    onSubmit={(e) => {
                        e.preventDefault();
                        run(value);
                    }}
                >
                    <span style={{ color: SHELL_ACCENTS.prompt }}>visitor@er:~$</span>
                    <input
                        ref={inputRef}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onFocus={cancelTyping}
                        className="min-w-0 flex-1 bg-transparent font-medium outline-none placeholder:font-normal placeholder:opacity-30"
                        style={{ color: SHELL_ACCENTS.command, caretColor: 'var(--er-paper)' }}
                        placeholder="help"
                        aria-label="Terminal command"
                        autoComplete="off"
                        autoCapitalize="off"
                        spellCheck={false}
                    />
                    <span className="er-cursor" aria-hidden="true">
                        _
                    </span>
                </form>
            </div>

            <div
                className="flex flex-wrap gap-2 border-t px-5 py-3.5"
                style={{ borderColor: 'inherit' }}
            >
                {SHELL_COMMANDS.map((cmd) => (
                    <button
                        key={cmd}
                        type="button"
                        onClick={() => typeAndRun(cmd)}
                        className="er-chip rounded-full border px-3.5 py-1.5 text-xs tracking-[0.15em]"
                        style={{ borderColor: 'color-mix(in srgb, var(--er-paper) 35%, transparent)' }}
                    >
                        {cmd}
                    </button>
                ))}
            </div>
        </div>
    );
}

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', damping: 22, stiffness: 90 } },
};

/**
 * Companies wall — a straight paper band with a slow-crawling marquee.
 * Each logo keeps its own native brand colors (no mask-to-silhouette
 * treatment) since a plain <img> reads better once color is back on the
 * table — the band's light background is exactly what most of these marks
 * are designed to sit on.
 */
function CompaniesWall() {
    const strip = [...STORY_COMPANIES, ...STORY_COMPANIES];

    return (
        <div className="overflow-hidden py-12" style={{ background: 'var(--er-paper)' }}>
            {/* Real content for assistive tech — the marquee below is a visual duplicate */}
            <p className="sr-only">{STORY_COMPANIES.map((c) => c.name).join(', ')}</p>

            <div className="er-marquee items-center" style={{ animationDuration: '35s' }} aria-hidden="true">
                {strip.map((company, i) => (
                    // Fixed box (not just height) so wildly different aspect
                    // ratios — a wide short wordmark vs. a compact two-line
                    // mark — still read as roughly the same optical size.
                    <div
                        key={i}
                        className="mr-16 flex h-16 w-36 shrink-0 items-center justify-center md:mr-20 md:h-20 md:w-44"
                    >
                        <img
                            src={company.logo}
                            alt=""
                            loading="lazy"
                            className="max-h-full max-w-full object-contain"
                            style={company.scale ? { transform: `scale(${company.scale})` } : undefined}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

/**
 * Act II — the human behind ER_.
 * Right after the hero's blob swallows the screen, the companies wall
 * grounds the claim immediately, then a live shell session introduces
 * Elias in his own words.
 */
export function AboutAct() {
    const reduce = useReducedMotion();

    const inView = reduce
        ? {}
        : {
              initial: 'hidden' as const,
              whileInView: 'show' as const,
              viewport: { once: true, margin: '-15% 0px' },
          };

    return (
        <section
            className="overflow-hidden py-28 md:py-36"
            style={{ background: 'var(--er-ink)', color: 'var(--er-paper)' }}
        >
            <div className="px-6 md:px-12">
                <p className="mb-10 text-xs tracking-[0.35em] opacity-50">
                    //COMPANIES I&apos;VE SHIPPED FOR
                </p>
            </div>

            <CompaniesWall />

            <div className="px-6 pt-28 md:px-12 md:pt-36">
                <p className="mb-14 text-xs tracking-[0.35em] opacity-50">//ABOUT — THE HUMAN</p>

                <motion.div variants={fadeUp} {...inView} className="mx-auto w-full max-w-5xl">
                    <Shell />
                </motion.div>
            </div>
        </section>
    );
}
