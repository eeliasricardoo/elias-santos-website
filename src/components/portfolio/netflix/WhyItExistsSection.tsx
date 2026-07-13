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
          <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-destructive">The problem</p>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
            The initial implementation relied on Supabase Auth and Deno Edge Functions. This created critical scaling issues: identifying users in webhook flows required fetching pages of user lists and scanning them sequentially—an <strong className="text-foreground">O(n) search</strong> that frequently timed out. Combined with high base hosting costs ($25+/mo) and database connection limits under heavy loads, the platform was bottlenecked at around 50 concurrent active users.
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
          <p className="font-mono text-[11px] font-semibold uppercase tracking-widest" style={{ color: 'var(--brand, hsl(var(--foreground)))' }}>The bet</p>
          <p className="mt-3 text-[15px] leading-relaxed text-foreground/85">
            By migrating the architecture to Neon PostgreSQL, utilizing `@neondatabase/serverless` pool connections, and implementing a custom JWT authentication system with encrypted HttpOnly cookie storage, we could execute direct indexed queries. This reduced database search complexity to <strong className="text-foreground">O(1)</strong>, drastically improved performance, increased connection pool size from 30 to over 100, and slashed operational costs to virtually zero ($0-$19/mo).
          </p>
        </motion.div>
      </div>

      <p className="max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
        With the database bottleneck resolved, the product supports an impressive feature matrix: a complete catalogs of movies and series categorized under standard, LGBT, and restricted (Picante) segments; a paywall gateway integrated with <strong className="text-foreground">Cakto</strong> and <strong className="text-foreground">Lowify</strong>; secure media delivery via <strong className="text-foreground">Bunny CDN/Stream</strong> using signed URL tokens; and a fully protected administrative dashboard for managing content.
      </p>
    </section>
  );
}
