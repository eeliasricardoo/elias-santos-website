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
        style={{ color: 'var(--brand, hsl(var(--foreground)))' }}
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
          <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-destructive">The UX Problem</p>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
            Standard streaming interfaces are visually cluttered and complex. Tiny text, low-contrast menus, complex navigations, and very small touch elements make it incredibly frustrating and alienating for older adults. Furthermore, the legacy backend was severely bottlenecked by Deno webhook timeouts and Supabase connection limits, collapsing with only 50 active users.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-xl border p-6"
          style={{ borderColor: 'color-mix(in srgb, var(--brand, hsl(var(--foreground))) 25%, transparent)', backgroundColor: 'color-mix(in srgb, var(--brand, hsl(var(--foreground))) 4%, transparent)' }}
        >
          <p className="font-mono text-[11px] font-semibold uppercase tracking-widest" style={{ color: 'var(--brand, hsl(var(--foreground)))' }}>The UX Bet</p>
          <p className="mt-3 text-[15px] leading-relaxed text-foreground/85">
            By building a dedicated design system with oversized, clear-labeled touch targets (48px+ targets), bold layout flows, and high contrast, we could create an inclusive experience for older adults. Under the hood, migrating the database connection pools to Neon and implementing custom serverless JWT auth allowed us to easily scale to over <strong>300 concurrent active users</strong>.
          </p>
        </motion.div>
      </div>

      <p className="max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
        To bring this vision to life, I took on the complete lifecycle: researching user behaviors, designing the high-accessibility visual layers, and writing the entire implementation myself. The resulting platform features a clean catalog of standard, LGBT, and picante titles, complete with direct payment webhook integrations (Cakto, Lowify) and token-secured video streaming from Bunny CDN.
      </p>
    </section>
  );
}
