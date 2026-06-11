'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';

const decisions = [
  {
    n: '01',
    title: "A design decision I'm proud of — The single-screen Room",
    text: "The hardest UX call was the live classroom. The obvious build is 'Zoom + a sidebar.' Instead I designed the Room as one composed surface — VideoPanel + ActivityPanel + ChatSidebar + TeacherNotesPanel — with a clear hierarchy: video anchors presence, activity is the focal task, chat/notes are peripheral and collapsible. The teacher drives an activity; the student sees it render in real time without a tab switch.",
  },
  {
    n: '02',
    title: "A design decision I'd reverse — The AI-slop component library",
    text: 'Early on, to move fast, I pulled in flashy animated components (aurora gradient background, infinite marquee testimonials). Later I recognized the problem: those patterns read as un-serious and AI-slop. Testimonials were rebuilt as a static, token-driven editorial grid (reducing JS to zero). Lessons learned: polish must be contextual, and impressive components in isolation can still break brand trust.',
  },
  {
    n: '03',
    title: 'Keeping visual and component consistency',
    text: 'Consistency is enforced at three levels: (1) tokens over literals — no hardcoded hexes, theme-aware variables; (2) primitives over re-invention — enumerated button/input variants via CVA; (3) standards captured as artifacts — written design rules, so corrections compound instead of repeating.',
  },
];

export function DecisionsSection() {
  return (
    <section className="flex flex-col gap-8 border-t border-border/40 pt-12">
      <SectionHeading eyebrow="Critical Decisions & Reflections" index={10} title="What I'd defend, and what I'd redo" />

      <div className="flex flex-col gap-4">
        {decisions.map((d, i) => (
          <motion.div
            key={d.n}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex gap-5 rounded-xl border border-border/20 bg-card p-6"
          >
            <span className="font-mono text-2xl font-bold tabular-nums leading-none" style={{ color: 'var(--brand, #d9f99d)' }}>{d.n}</span>
            <div>
              <h3 className="font-semibold text-foreground">{d.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{d.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
