'use client';
import { useEffect, useState } from 'react';
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

export function AboutTerminal() {
  const [cursor, setCursor] = useState(true);

  // Idle cursor blink
  useEffect(() => {
    const id = setInterval(() => setCursor((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="about" className="relative border-t border-border/20 bg-[#080808]">
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

              {blocks.map((block, bi) => (
                <div key={bi} className="space-y-1.5">
                  {/* Prompt line */}
                  <div className="flex items-center gap-2">
                    <span className="text-electric flex-shrink-0">$</span>
                    <span className="text-foreground/90">{block.prompt}</span>
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

              {/* Idle cursor */}
              <div className="flex items-center gap-2">
                <span className="text-electric">$</span>
                <span
                  className="inline-block w-2 h-4 bg-electric"
                  style={{ opacity: cursor ? 1 : 0 }}
                />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
