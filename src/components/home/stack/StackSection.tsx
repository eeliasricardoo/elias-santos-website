'use client';
import { motion } from 'framer-motion';
import { Pencil, Boxes, Bot, FileText, GitBranch } from 'lucide-react';

interface Tool {
  name: string;
  role: string;
  note: string;
  icon: React.ReactNode;
  color: { bg: string; accent: string };
}

const lime = { bg: '#d9f99d', accent: '#65a30d' };
const cyan = { bg: '#67e8f9', accent: '#0891b2' };
const violet = { bg: '#c4b5fd', accent: '#7c3aed' };
const orange = { bg: '#fb923c', accent: '#c2410c' };

const tools: Tool[] = [
  {
    name: 'Lovable',
    role: 'Design → working UI',
    note: 'Where I turn a direction into a clickable interface fast, before committing to code.',
    icon: <Pencil className="w-5 h-5" />,
    color: cyan,
  },
  {
    name: 'Cursor',
    role: 'Production code',
    note: 'My day-to-day editor for shipping real React. AI-assisted, every line reviewed by me.',
    icon: <Boxes className="w-5 h-5" />,
    color: violet,
  },
  {
    name: 'Antigravity',
    role: 'Agentic builds',
    note: 'Agent-driven workflows for scaffolding and refactors I would otherwise do by hand.',
    icon: <Bot className="w-5 h-5" />,
    color: orange,
  },
  {
    name: 'Claude',
    role: 'Code & design partner',
    note: 'Claude Code for engineering, Claude for design thinking — my second pair of hands across the whole loop.',
    icon: <Bot className="w-5 h-5" />,
    color: lime,
  },
];

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function StackSection() {
  return (
    <section id="stack" className="relative bg-background py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14 md:mb-20"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <span className="text-brand-orange">/03</span> Stack
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
            The tools in my process.
            <span className="block text-muted-foreground">The judgment stays mine.</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            I move through research, design and code with whatever tool is fastest at each step — and I keep ownership of every decision they help me reach.
          </p>
        </motion.div>

        {/* Tool grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/30 border border-border/30 rounded-2xl overflow-hidden">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: EASE, delay: index * 0.08 }}
              className="group relative flex flex-col gap-4 bg-background p-7 md:p-8"
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ backgroundColor: tool.color.bg, color: '#0a0a0a' }}
              >
                {tool.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-foreground">{tool.name}</h3>
                <p
                  className="font-mono text-xs uppercase tracking-wider"
                  style={{ color: tool.color.accent }}
                >
                  {tool.role}
                </p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{tool.note}</p>
            </motion.div>
          ))}
        </div>

        {/* Process strip — docs + agile */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mt-px grid md:grid-cols-2 gap-px bg-border/30 border border-t-0 border-border/30 rounded-2xl rounded-t-none overflow-hidden"
        >
          <div className="flex items-start gap-4 bg-background p-7 md:p-8">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-secondary/40 text-foreground">
              <FileText className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-lg font-bold text-foreground">Documented in Notion</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every project lives in Notion — decisions, specs and research in one place, so the thinking is as legible as the result.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-background p-7 md:p-8">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-secondary/40 text-foreground">
              <GitBranch className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-lg font-bold text-foreground">Agile by default</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Comfortable in agile teams — short cycles, rituals and continuous delivery — shipping in increments and adjusting from real feedback.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
