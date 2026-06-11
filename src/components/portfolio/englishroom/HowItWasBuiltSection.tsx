'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const tools = [
  { name: 'Claude Code', text: 'AI pair for building, cross-cutting refactors, and enforcing tokens at scale.' },
  { name: 'VS Code', text: 'Primary editor, with prompts shown live.' },
  { name: 'Next.js 16', text: 'App Router, React Server Components, Turbopack.' },
  { name: 'Tailwind v4', text: 'OKLCH design tokens as the single source of truth.' },
  { name: 'Vercel', text: 'Git-connected preview and production deploys.' },
  { name: 'Supabase · Daily · OpenAI', text: 'Auth and data, real-time video, AI lesson content.' },
];

const scope = [
  'Design system, tokens, and the editorial visual direction',
  'Every surface: landing, marketplace, role-gated dashboard, the live Room',
  'Real-time video, the interactive activities, and the AI integration',
  'Booking engine, availability, and the two-sided marketplace flows',
];

export function HowItWasBuiltSection() {
  return (
    <section className="flex flex-col gap-8 border-t border-border/40 pt-12">
      <SectionHeading
        eyebrow="Tools & workflow"
        index={12}
        title="How it was built"
        description="I design in code, with the token system as the source of truth and Claude Code as the execution layer — how a one-person team ships product-grade UI quickly."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="rounded-xl border border-border/20 bg-card p-5"
          >
            <h3 className="font-semibold text-foreground text-sm" style={{ color: 'var(--brand, #d9f99d)' }}>{t.name}</h3>
            <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{t.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="rounded-xl border border-border/20 bg-muted/20 p-6">
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">One person, every layer</p>
        <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
          {scope.map((s) => (
            <li key={s} className="flex gap-2 text-[14px] leading-relaxed text-muted-foreground">
              <Check className="mt-0.5 w-4 h-4 flex-shrink-0" style={{ color: 'var(--brand, #d9f99d)' }} />
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
