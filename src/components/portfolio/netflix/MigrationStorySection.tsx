'use client';

import { CaseStudySection } from '@/components/portfolio/ui';
import { ArrowRight, Check, X } from 'lucide-react';

export function MigrationStorySection() {
  return (
    <CaseStudySection eyebrow="Interaction Speed" index={2} title="UX Performance: From Waiting to Instant">
      <p>
        A delay of just a few seconds can make an older user believe the system is broken. This leads to duplicate clicks, checkout drop-outs, and deep cognitive frustration. I refactored the database architecture and webhook processes specifically to eliminate interface lag, ensuring instant feedback loops.
      </p>

      <div className="grid md:grid-cols-2 gap-8 my-6">
        {/* Supabase - Before */}
        <div className="rounded-xl border border-destructive/20 bg-destructive/[0.01] p-6 space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-mono text-xs uppercase tracking-wider text-destructive font-semibold">Initial Prototype Stack</span>
            <X className="h-5 w-5 text-destructive" />
          </div>
          <ul className="space-y-3 text-[14px]">
            <li className="flex items-start gap-2">
              <span className="text-destructive mt-1">•</span>
              <span>
                <strong>Webhook processing lag:</strong> Identifying users during checkouts required slow, sequential scans that caused transaction spinners to rotate for over 8 seconds.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-destructive mt-1">•</span>
              <span>
                <strong>Database limits:</strong> Connection spikes caused occasional catalog crashes, displaying blank pages during high traffic.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-destructive mt-1">•</span>
              <span>
                <strong>Delayed video playback:</strong> Non-indexed database checks created a noticeable 3-second latency before a video started streaming.
              </span>
            </li>
          </ul>
        </div>

        {/* Neon - After */}
        <div className="rounded-xl border border-success/20 bg-success/[0.01] p-6 space-y-4" style={{ borderColor: 'color-mix(in srgb, var(--brand, hsl(var(--foreground))) 25%, transparent)', backgroundColor: 'color-mix(in srgb, var(--brand, hsl(var(--foreground))) 2%, transparent)' }}>
          <div className="flex justify-between items-center">
            <span className="font-mono text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--brand, hsl(var(--foreground)))' }}>Scaling Architecture</span>
            <Check className="h-5 w-5" style={{ color: 'var(--brand, hsl(var(--foreground)))' }} />
          </div>
          <ul className="space-y-3 text-[14px]">
            <li className="flex items-start gap-2">
              <span className="mt-1" style={{ color: 'var(--brand, hsl(var(--foreground)))' }}>•</span>
              <span>
                <strong>O(1) instant search:</strong> Indexing data search columns reduced user verification to sub-milliseconds, validating checkouts instantly.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1" style={{ color: 'var(--brand, hsl(var(--foreground)))' }}>•</span>
              <span>
                <strong>Scalable connection pools:</strong> Dynamic database pooling handles active spikes from 300 users without freezing the interface.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1" style={{ color: 'var(--brand, hsl(var(--foreground)))' }}>•</span>
              <span>
                <strong>Sub-second video starting:</strong> Integrated optimized server routes and Bunny CDN, getting video streams running in under 0.8 seconds.
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
            <p className="text-2xl font-bold text-foreground">300</p>
            <p className="text-[10px] uppercase font-mono text-muted-foreground">Concurrent Users</p>
          </div>
        </div>
      </div>
    </CaseStudySection>
  );
}
