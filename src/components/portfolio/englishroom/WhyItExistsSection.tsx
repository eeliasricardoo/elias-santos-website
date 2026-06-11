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
        className="font-mono text-xs uppercase tracking-widest"
        style={{ color: 'var(--brand, #d9f99d)' }}
      >
        Why it exists
      </motion.p>

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl border border-destructive/25 bg-destructive/[0.04] p-6"
        >
          <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-destructive">The problem</p>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
            Most online English lessons are stitched together from three disconnected tools: a video
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
          className="rounded-xl border p-6"
          style={{ borderColor: 'color-mix(in srgb, var(--brand, #d9f99d) 25%, transparent)', backgroundColor: 'color-mix(in srgb, var(--brand, #d9f99d) 4%, transparent)' }}
        >
          <p className="font-mono text-[11px] font-semibold uppercase tracking-widest" style={{ color: 'var(--brand, #d9f99d)' }}>The bet</p>
          <p className="mt-3 text-[15px] leading-relaxed text-foreground/85">
            EnglishRoom collapses the lesson into one surface. Video, interactive activities
            (drilling, quizzes, flashcards, guided reading), live chat, and the teacher&apos;s private
            notes all live inside a single room — so the lesson never breaks context.
          </p>
        </motion.div>
      </div>

      <p className="max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
        Around that core, the platform is a real two-sided product:{' '}
        <strong className="text-foreground">Students</strong> browse the marketplace, book slots,
        follow CEFR-aligned learning trails, and review AI summaries;{' '}
        <strong className="text-foreground">Teachers</strong> set availability, prepare lesson plans
        with AI, and run the live room; <strong className="text-foreground">Admins</strong> vet and
        approve teacher profiles.
      </p>
    </section>
  );
}
