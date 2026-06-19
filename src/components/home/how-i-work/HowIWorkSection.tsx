'use client';
import { motion } from 'framer-motion';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  tools: string[];
  color: { bg: string; text: string; accent: string; label: string };
}

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand the real problem',
    description:
      'Interviews, support tickets, session recordings — I go to the source before opening Figma. Most redesigns fail because they solve the stated problem instead of the real one.',
    tools: ['User interviews', 'Hotjar', 'GA4'],
    color: { bg: '#18181b', text: 'rgba(239,68,68,0.25)', accent: '#ef4444', label: 'RESEARCH' },
  },
  {
    number: '02',
    title: 'Design the decision, not just the screen',
    description:
      "Flows and wireframes first, high fidelity last. Every screen exists to answer a product question — if I can't say which one, the screen doesn't ship.",
    tools: ['Figma', 'Design systems', 'Prototyping'],
    color: { bg: '#111113', text: 'rgba(244,63,94,0.25)', accent: '#f43f5e', label: 'DESIGN' },
  },
  {
    number: '03',
    title: 'Prototype in code, not in slides',
    description:
      "I skip the static handoff. Stakeholders and users test a working prototype in the browser, with real data — ambiguity dies before development starts.",
    tools: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
    color: { bg: '#09090b', text: 'rgba(190,18,60,0.25)', accent: '#be123c', label: 'PROTOTYPE' },
  },
  {
    number: '04',
    title: 'Ship, measure, iterate',
    description:
      'Production code with analytics wired from day one. The 87.5% and 22% on this page exist because they were measured, not estimated.',
    tools: ['GA4', 'Mixpanel', 'A/B testing'],
    color: { bg: '#1e1e21', text: 'rgba(225,29,72,0.25)', accent: '#e11d48', label: 'SHIP' },
  },
];

function StepVisualPanel({ step }: { step: ProcessStep }) {
  const { color } = step;
  return (
    <div
      className="relative w-full h-full min-h-[320px] lg:min-h-full flex items-center justify-center overflow-hidden border border-white/5 bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-2xl lg:rounded-none"
      style={{ backgroundColor: color.bg }}
    >
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, ${color.accent}20 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center gap-4 text-center px-8 py-12">
        <span
          className="font-mono text-xs uppercase tracking-[0.3em] font-bold"
          style={{ color: color.accent }}
        >
          Step {step.number}
        </span>
        <span
          className="font-bold uppercase leading-none tracking-tight"
          style={{
            fontSize: 'clamp(44px, 5.5vw, 72px)',
            color: 'transparent',
            WebkitTextStroke: `2px ${color.accent}`,
            opacity: 0.8
          }}
        >
          {color.label}
        </span>
        <div className="w-10 h-0.5 mt-1" style={{ backgroundColor: color.accent, opacity: 0.3 }} />
      </div>
      {/* Decorative pills */}
      <div className="absolute top-6 right-6 flex flex-col gap-1.5">
        {[40, 28, 16].map((w, i) => (
          <div
            key={i}
            className="h-1 rounded-full"
            style={{ width: w, backgroundColor: color.accent, opacity: 0.15 + i * 0.1 }}
          />
        ))}
      </div>
      <div
        className="absolute bottom-6 left-6 w-8 h-8 border-2 rotate-12"
        style={{ borderColor: color.accent, opacity: 0.15 }}
      />
    </div>
  );
}

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function HowIWorkSection() {
  return (
    <section id="how-i-work" className="relative bg-background">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <span className="text-red-500 font-semibold">/01</span> How I work
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
            Fast where the tools help.
            <span className="block text-muted-foreground">In charge where they don't.</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            The tools I use now didn't exist three years ago. The process hasn't changed: understand the real problem, design a decision, prototype in code, then measure. What's different is how fast I move through it.
          </p>
        </motion.div>
      </div>

      {/* Steps — alternating grid */}
      <div className="flex flex-col">
        {steps.map((step, index) => {
          const isEven = index % 2 === 1;
          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 border-t border-border/20 min-h-[480px] lg:min-h-[560px]"
            >
              {/* Visual panel */}
              <motion.div
                initial={{ x: isEven ? 32 : -32, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-8%' }}
                transition={{ duration: 0.7, ease: EASE }}
                className={isEven ? 'lg:order-last' : 'lg:order-first'}
              >
                <StepVisualPanel step={step} />
              </motion.div>

              {/* Text panel */}
              <motion.div
                initial={{ x: isEven ? -32 : 32, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-8%' }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.06 }}
                className={`flex flex-col justify-center px-8 md:px-12 lg:px-16 py-14 ${isEven ? 'lg:order-first' : 'lg:order-last'}`}
              >
                <span className="font-mono text-5xl lg:text-7xl font-bold leading-none mb-6 text-gradient-chrome w-fit">
                  {step.number}
                </span>

                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground/40 pt-1">
                    {step.tools.join(' · ')}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
