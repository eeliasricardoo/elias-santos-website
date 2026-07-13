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
            Standard streaming platforms ignore the digital divide. Visually cluttered layouts, complex search parameters, and low-contrast typography create massive cognitive barriers for older adults. Furthermore, hidden menu overlays and tiny, icon-only navigation elements alienate senior users who suffer from visual or motor precision decline, resulting in frustration and quick drop-offs.
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
            By designing a simplified streaming interface tailored for older users—featuring high-contrast typography, large touch targets (48px+ bounds), and clear text labels instead of abstract icons—we could create a comfortable digital cinema. To support this smooth experience, I engineered the entire backend from scratch, scaling it to accommodate over <strong>300 concurrent users</strong> without load-time friction.
          </p>
        </motion.div>
      </div>

      <p className="max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
        To achieve this, I took on the complete lifecycle of the project: researching the online behaviors of senior demographics, modeling their user flow, designing the high-accessibility visual assets, and writing the entire frontend and backend implementation. The resulting design supports standard, LGBT, and picante catalogs with frictionless checkout integrations and seamless video delivery systems.
      </p>
    </section>
  );
}
