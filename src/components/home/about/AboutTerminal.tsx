'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface Block {
  prompt: string;
  lines: { text: string; highlight: boolean }[];
}

const blocks: Block[] = [
  {
    prompt: 'whoami',
    lines: [
      { text: '→ Elias Ricardo', highlight: false },
      { text: '→ UX Engineer — I sit at the intersection of design and engineering.', highlight: false },
      { text: '→ I own the full loop: research → Figma → React → production.', highlight: false },
    ],
  },
  {
    prompt: 'describe --role',
    lines: [
      { text: "→ Most designers stop at the handoff. I don't hand off.", highlight: false },
      { text: '→ Most devs stop at "it works". I ask if it makes sense to the user.', highlight: false },
      { text: '→ The gap between those two is where I live.', highlight: true },
    ],
  },
  {
    prompt: 'stack --list',
    lines: [
      { text: '→ Design:      Figma · Prototyping · Design Systems · UX Research', highlight: false },
      { text: '→ Frontend:    React · Next.js · TypeScript · Tailwind CSS', highlight: false },
      { text: '→ Tools:       Cursor · Lovable · Claude · v0', highlight: false },
      { text: '→ Analytics:   GA4 · Mixpanel · Hotjar · A/B testing', highlight: false },
    ],
  },
  {
    prompt: 'results --verified',
    lines: [
      { text: '→ Serasa Experian   email production  80min → 10min  (-87.5%)', highlight: true },
      { text: '→ Support redesign  avg queue wait    baseline → -22%', highlight: true },
      { text: '→ Status:           available for new work', highlight: false },
    ],
  },
];

type Phase =
  | { kind: 'typing'; blockIdx: number; charIdx: number }
  | { kind: 'output'; blockIdx: number; lineIdx: number }
  | { kind: 'pause'; blockIdx: number }
  | { kind: 'done' };

interface Rendered {
  prompt: string;
  lines: { text: string; highlight: boolean }[];
  promptDone: boolean;
}

const CHAR_DELAY = 42;
const LINE_DELAY = 180;
const BLOCK_PAUSE = 420;

export function AboutTerminal() {
  const [rendered, setRendered] = useState<Rendered[]>([]);
  const [cursor, setCursor] = useState(true);
  const phaseRef = useRef<Phase>({ kind: 'typing', blockIdx: 0, charIdx: 0 });
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);

  // Cursor blink
  useEffect(() => {
    const id = setInterval(() => setCursor((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  // Scroll to bottom as text appears
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [rendered]);

  function tick() {
    const phase = phaseRef.current;

    if (phase.kind === 'done') return;

    if (phase.kind === 'typing') {
      const { blockIdx, charIdx } = phase;
      const block = blocks[blockIdx];
      const nextChar = charIdx + 1;

      setRendered((prev) => {
        const next = [...prev];
        if (!next[blockIdx]) next[blockIdx] = { prompt: '', lines: [], promptDone: false };
        next[blockIdx] = { ...next[blockIdx], prompt: block.prompt.slice(0, nextChar) };
        return next;
      });

      if (nextChar >= block.prompt.length) {
        phaseRef.current = { kind: 'pause', blockIdx };
        timerRef.current = setTimeout(tick, BLOCK_PAUSE / 2);
      } else {
        phaseRef.current = { kind: 'typing', blockIdx, charIdx: nextChar };
        timerRef.current = setTimeout(tick, CHAR_DELAY);
      }
      return;
    }

    if (phase.kind === 'pause') {
      const { blockIdx } = phase;
      setRendered((prev) => {
        const next = [...prev];
        next[blockIdx] = { ...next[blockIdx], promptDone: true };
        return next;
      });
      phaseRef.current = { kind: 'output', blockIdx, lineIdx: 0 };
      timerRef.current = setTimeout(tick, LINE_DELAY);
      return;
    }

    if (phase.kind === 'output') {
      const { blockIdx, lineIdx } = phase;
      const block = blocks[blockIdx];

      setRendered((prev) => {
        const next = [...prev];
        next[blockIdx] = {
          ...next[blockIdx],
          lines: block.lines.slice(0, lineIdx + 1),
        };
        return next;
      });

      if (lineIdx + 1 >= block.lines.length) {
        // done with this block
        if (blockIdx + 1 >= blocks.length) {
          phaseRef.current = { kind: 'done' };
        } else {
          phaseRef.current = { kind: 'typing', blockIdx: blockIdx + 1, charIdx: 0 };
          timerRef.current = setTimeout(tick, BLOCK_PAUSE);
        }
      } else {
        phaseRef.current = { kind: 'output', blockIdx, lineIdx: lineIdx + 1 };
        timerRef.current = setTimeout(tick, LINE_DELAY);
      }
    }
  }

  // Start when section enters viewport
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          timerRef.current = setTimeout(tick, 600);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const isDone = phaseRef.current.kind === 'done';
  const activeBlockIdx =
    phaseRef.current.kind !== 'done' ? phaseRef.current.blockIdx : blocks.length;

  return (
    <section id="about" ref={sectionRef} className="relative border-t border-border/20 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-start">

          {/* Left label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 space-y-4"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <span className="text-electric">/00</span> About
            </span>
            <h2 className="text-2xl md:text-3xl font-bold leading-snug">
              The person<br />
              <span className="text-muted-foreground">behind the work.</span>
            </h2>
            <p className="text-sm text-muted-foreground/70 leading-relaxed max-w-xs">
              Senior UX Engineer based in Brazil. Open to remote roles worldwide.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-electric" />
              </span>
              <span className="font-mono text-xs text-electric uppercase tracking-widest">
                Available for work
              </span>
            </div>
          </motion.div>

          {/* Terminal window */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="rounded-xl overflow-hidden border border-border/30"
          >
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#111] border-b border-border/20">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <span className="ml-3 font-mono text-xs text-muted-foreground/50 tracking-wider">
                elias@uxengineer ~ %
              </span>
            </div>

            {/* Body */}
            <div className="p-6 md:p-8 font-mono text-sm space-y-6 bg-[#0d0d0d] min-h-[420px]">

              {rendered.map((block, bi) => (
                <div key={bi} className="space-y-1.5">
                  {/* Prompt line */}
                  <div className="flex items-center gap-2">
                    <span className="text-electric flex-shrink-0">$</span>
                    <span className="text-foreground/90">{block.prompt}</span>
                    {/* Cursor on active prompt being typed */}
                    {!block.promptDone && bi === activeBlockIdx && (
                      <span
                        className="inline-block w-2 h-4 bg-electric align-middle"
                        style={{ opacity: cursor ? 1 : 0 }}
                      />
                    )}
                  </div>

                  {/* Output lines */}
                  {block.lines.map((line, li) => (
                    <div
                      key={li}
                      className={`pl-4 leading-relaxed ${
                        line.highlight ? 'text-electric/90' : 'text-muted-foreground/60'
                      }`}
                    >
                      {line.text}
                    </div>
                  ))}
                </div>
              ))}

              {/* Idle cursor when done */}
              {isDone && (
                <div className="flex items-center gap-2">
                  <span className="text-electric">$</span>
                  <span
                    className="inline-block w-2 h-4 bg-electric"
                    style={{ opacity: cursor ? 1 : 0 }}
                  />
                </div>
              )}

              <div ref={bottomRef} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
