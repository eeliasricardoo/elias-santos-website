'use client';

import { Check, Minus, X } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const columns = ['Live human teacher', 'Single-screen lesson', 'In-lesson activities', 'CEFR progress', 'Self-serve booking'];

type Cell = 'yes' | 'partial' | 'no';

const rows: { name: string; highlight?: boolean; cells: Cell[] }[] = [
  { name: 'DIY (Zoom + Docs + WhatsApp)', cells: ['yes', 'no', 'no', 'no', 'no'] },
  { name: 'Tutor marketplaces (italki, Preply)', cells: ['yes', 'no', 'partial', 'partial', 'yes'] },
  { name: 'Self-serve apps (Duolingo)', cells: ['no', 'yes', 'yes', 'partial', 'no'] },
  { name: 'EnglishRoom', highlight: true, cells: ['yes', 'yes', 'yes', 'yes', 'yes'] },
];

const CELL_LABELS: Record<Cell, string> = { yes: 'Yes', partial: 'Partial', no: 'No' };

function CellIcon({ v }: { v: Cell }) {
  const icon =
    v === 'yes' ? <Check aria-hidden="true" className="w-4 h-4 text-foreground" /> :
    v === 'partial' ? <Minus aria-hidden="true" className="w-4 h-4 text-muted-foreground" /> :
    <X aria-hidden="true" className="w-4 h-4 text-muted-foreground/40" />;

  return (
    <>
      {icon}
      <span className="sr-only">{CELL_LABELS[v]}</span>
    </>
  );
}

export function LandscapeSection() {
  return (
    <section className="flex flex-col gap-8 border-t border-border/40 pt-12">
      <SectionHeading
        eyebrow="The landscape"
        index={3}
        title="Where EnglishRoom sits"
        description="The category splits into three. Each solves part of the problem, but none put a live teacher and an interactive, single-screen lesson in the same place."
      />

      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full min-w-[680px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="p-4 text-left font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Approach</th>
              {columns.map((c) => (
                <th key={c} className="p-4 text-center font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr
                key={r.name}
                className="border-b border-border last:border-0"
                style={r.highlight ? { backgroundColor: 'color-mix(in srgb, var(--brand, hsl(var(--foreground))) 8%, transparent)' } : undefined}
              >
                <td className={`p-4 text-left text-[13px] ${r.highlight ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}>{r.name}</td>
                {r.cells.map((v, i) => (
                  <td key={i} className="p-4">
                    <div className="flex justify-center"><CellIcon v={v} /></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
