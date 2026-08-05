'use client';

import { motion } from 'framer-motion';

export function WhyItExistsSection() {
  return (
    <section className="flex flex-col gap-8 border-t border-border/40 pt-12">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-mono text-xs uppercase tracking-widest text-sky-400 font-bold"
      >
        Why it exists
      </motion.p>

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl border border-destructive/30 bg-destructive/10 p-6"
        >
          <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-red-400">The problem</p>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
            Most online language lessons are stitched together from three disconnected tools: a video
            call (Zoom), a worksheet (Google Docs / PDF), and a chat (WhatsApp). The student&apos;s
            attention is split across tabs, and the teacher spends the lesson screen-sharing instead
            of teaching.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-xl border border-sky-500/30 bg-sky-500/10 p-6"
        >
          <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-sky-400">The bet</p>
          <p className="mt-3 text-[15px] leading-relaxed text-foreground/85">
            ilevar collapses the lesson into one surface — and one data model. A <code className="font-mono text-[13px]">Lesson</code>{' '}
            is a <code className="font-mono text-[13px]">Lesson</code> whether it seats one student or a whole class
            group; video, one of 14 activity types, live chat, and the teacher&apos;s private notes all
            live inside the same room, so the lesson never breaks context.
          </p>
        </motion.div>
      </div>

      <p className="max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
        Around that core, the platform is a real two-sided product:{' '}
        <strong className="text-foreground">Students</strong> browse the marketplace, book 1:1 slots
        or join a class group, follow CEFR-aligned learning trails, and review AI summaries;{' '}
        <strong className="text-foreground">Teachers</strong> set availability, run class groups
        alongside their 1:1 roster, prepare lesson plans with AI, and run the live room;{' '}
        <strong className="text-foreground">Admins</strong> vet and approve teacher profiles.
      </p>
    </section>
  );
}
