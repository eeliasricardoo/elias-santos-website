'use client';

import { CaseStudySection } from '@/components/portfolio/ui';
import { ArrowRight, Check, X } from 'lucide-react';

export function MigrationStorySection() {
  return (
    <CaseStudySection eyebrow="Migration Case" index={2} title="Migrating Supabase to Neon & JWT">
      <p>
        The defining engineering challenge of this project was migrating the database layer and authentication strategy away from Supabase to achieve lower latency, better connection pooling, and simpler data query logic.
      </p>

      <div className="grid md:grid-cols-2 gap-8 my-6">
        {/* Supabase - Before */}
        <div className="rounded-xl border border-destructive/20 bg-destructive/[0.01] p-6 space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-mono text-xs uppercase tracking-wider text-destructive font-semibold">Legacy: Supabase Stack</span>
            <X className="h-5 w-5 text-destructive" />
          </div>
          <ul className="space-y-3 text-[14px]">
            <li className="flex items-start gap-2">
              <span className="text-destructive mt-1">•</span>
              <span>
                <strong>Webhook verification timeouts:</strong> Identifying users required calling Supabase Auth API lists sequentially, creating an <strong>O(n)</strong> loop that timed out on payment events.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-destructive mt-1">•</span>
              <span>
                <strong>DB connection limits:</strong> Limited concurrent connection limits (maximum ~30 pooled) caused database exhaustion during traffic peaks.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-destructive mt-1">•</span>
              <span>
                <strong>Rigid costs:</strong> Standard projects starting at $25/mo made hosting simple prototypes expensive.
              </span>
            </li>
          </ul>
        </div>

        {/* Neon - After */}
        <div className="rounded-xl border border-success/20 bg-success/[0.01] p-6 space-y-4" style={{ borderColor: 'color-mix(in srgb, var(--brand, hsl(var(--foreground))) 25%, transparent)', backgroundColor: 'color-mix(in srgb, var(--brand, hsl(var(--foreground))) 2%, transparent)' }}>
          <div className="flex justify-between items-center">
            <span className="font-mono text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--brand, hsl(var(--foreground)))' }}>Target: Neon + JWT Stack</span>
            <Check className="h-5 w-5" style={{ color: 'var(--brand, hsl(var(--foreground)))' }} />
          </div>
          <ul className="space-y-3 text-[14px]">
            <li className="flex items-start gap-2">
              <span className="mt-1" style={{ color: 'var(--brand, hsl(var(--foreground)))' }}>•</span>
              <span>
                <strong>O(1) direct queries:</strong> Direct database lookups using phone numbers on indexed SQL columns returned results in sub-milliseconds:
                <code className="block mt-2 p-2 rounded bg-foreground/5 text-xs text-foreground font-mono">
                  SELECT * FROM users WHERE phone = $1;
                </code>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1" style={{ color: 'var(--brand, hsl(var(--foreground)))' }}>•</span>
              <span>
                <strong>Massive connection pool:</strong> Dynamically scales connections up to 100+, preventing serverless execution crashes.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1" style={{ color: 'var(--brand, hsl(var(--foreground)))' }}>•</span>
              <span>
                <strong>Optimized costs:</strong> Serverless pricing scales down to zero when idle, lowering active upkeep costs to $0-$19/mo.
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="rounded-xl border border-border/40 p-6 bg-card/10 space-y-4">
        <h4 className="font-mono text-sm font-semibold text-foreground uppercase tracking-wider">Metrics Snapshot</h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-3 border-r border-border/20 last:border-0">
            <p className="text-2xl font-bold text-foreground">O(1)</p>
            <p className="text-[10px] uppercase font-mono text-muted-foreground">Search Complexity</p>
          </div>
          <div className="p-3 border-r border-border/20 last:border-0">
            <p className="text-2xl font-bold text-foreground">15,000x</p>
            <p className="text-[10px] uppercase font-mono text-muted-foreground">Lookup Speedup</p>
          </div>
          <div className="p-3 border-r border-border/20 last:border-0">
            <p className="text-2xl font-bold text-foreground">92% ↓</p>
            <p className="text-[10px] uppercase font-mono text-muted-foreground">Monthly Cost</p>
          </div>
          <div className="p-3">
            <p className="text-2xl font-bold text-foreground">15k+</p>
            <p className="text-[10px] uppercase font-mono text-muted-foreground">Concurrent Users</p>
          </div>
        </div>
      </div>
    </CaseStudySection>
  );
}
