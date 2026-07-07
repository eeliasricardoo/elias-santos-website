'use client';

import { motion } from 'framer-motion';
import { Video, MessageSquare, NotebookPen } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const options = ['go', 'goes', 'going', 'gone'];

export function RoomSection() {
  return (
    <section className="flex flex-col gap-8 border-t border-border/40 pt-12">
      <SectionHeading
        eyebrow="The single-screen Room"
        index={6}
        title="Then the lesson happens — on one surface"
        description="Video anchors presence; the activity is the focal task; chat and teacher notes stay peripheral and collapsible. The teacher drives an activity and the student sees it render in real time — no tab switch."
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-border bg-card overflow-hidden shadow-2xl"
      >
        {/* Room top bar */}
        <div className="flex items-center justify-between border-b border-border px-5 py-3">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-background">
              <span className="w-1.5 h-1.5 rounded-full bg-background animate-pulse motion-reduce:animate-none" /> Live
            </span>
            <span className="text-sm font-semibold text-foreground">Unit 4 · Present Simple</span>
            <span className="hidden sm:inline rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">B1 · Intermediate</span>
          </div>
          <span className="font-mono text-xs tabular-nums text-muted-foreground">24:13</span>
        </div>

        <div className="grid gap-px bg-border/60 md:grid-cols-[1.4fr_1fr]">
          {/* Left: video + activity */}
          <div className="flex flex-col gap-px bg-border/60">
            {/* Video */}
            <div className="bg-card p-4">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { ini: 'EC', name: 'Emily Clarke', role: 'Teacher' },
                  { ini: 'YO', name: 'You', role: 'Student' },
                ].map((u) => (
                  <div key={u.ini} className="relative aspect-video rounded-lg border border-border bg-muted/40 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-1">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full font-mono text-xs font-bold text-background" style={{ backgroundColor: 'var(--brand, hsl(var(--foreground)))' }}>
                        {u.ini}
                      </span>
                      <span className="text-[11px] font-medium text-foreground">{u.name}</span>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">{u.role}</span>
                    </div>
                    <Video className="absolute right-2 top-2 w-3.5 h-3.5 text-muted-foreground/50" />
                  </div>
                ))}
              </div>
            </div>
            {/* Activity */}
            <div className="bg-card p-5">
              <div className="flex gap-2">
                {['Drilling', 'Quiz', 'Flashcards'].map((t, i) => (
                  <span
                    key={t}
                    className={`rounded-md px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider ${i === 1 ? 'text-background' : 'border border-border text-muted-foreground'}`}
                    style={i === 1 ? { backgroundColor: 'var(--brand, hsl(var(--foreground)))' } : undefined}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-base text-foreground">
                She <span className="mx-1 inline-block w-16 border-b-2 border-dashed border-muted-foreground/50" /> to the office every morning.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {options.map((o) => (
                  <span
                    key={o}
                    className={`rounded-lg border px-3 py-2 text-sm ${o === 'goes' ? 'text-foreground' : 'border-border text-muted-foreground'}`}
                    style={o === 'goes' ? { borderColor: 'var(--brand, hsl(var(--foreground)))', backgroundColor: 'color-mix(in srgb, var(--brand, hsl(var(--foreground))) 10%, transparent)' } : undefined}
                  >
                    {o}
                  </span>
                ))}
              </div>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Tap an option to answer</p>
            </div>
          </div>

          {/* Right: chat + notes */}
          <div className="flex flex-col gap-px bg-border/60">
            <div className="bg-card p-5">
              <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                <MessageSquare className="w-3 h-3" style={{ color: 'var(--brand, hsl(var(--foreground)))' }} /> Chat
              </p>
              <div className="mt-3 space-y-2">
                <div className="max-w-[85%] rounded-lg rounded-tl-sm bg-muted/50 px-3 py-2 text-[13px] text-foreground">Nice — now try the quiz 👇</div>
                <div className="ml-auto max-w-[85%] rounded-lg rounded-tr-sm px-3 py-2 text-[13px] text-background" style={{ backgroundColor: 'var(--brand, hsl(var(--foreground)))' }}>got it</div>
              </div>
            </div>
            <div className="bg-card p-5 flex-1">
              <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                <NotebookPen className="w-3 h-3" style={{ color: 'var(--brand, hsl(var(--foreground)))' }} /> Teacher notes
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
                Confident with routines. Review 3rd-person <span className="font-mono text-foreground">-s</span> next session.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
