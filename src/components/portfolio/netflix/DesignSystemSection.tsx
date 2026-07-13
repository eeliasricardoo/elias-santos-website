'use client';

import { CaseStudySection } from '@/components/portfolio/ui';
import { Palette, Layers, Sparkles, BookOpen } from 'lucide-react';

export function DesignSystemSection() {
  return (
    <CaseStudySection eyebrow="Design System" index={3} title="High-Contrast OKLCH & Storybook 10">
      <p>
        A streaming application requires a dark-first, premium interface where content is the absolute hero. DramaFlix implements a unified design system documented in <strong className="text-foreground">Storybook v10</strong>, utilizing Tailwind CSS v4 and the OKLCH color space for uniform brightness interpolation.
      </p>

      <div className="grid gap-6 md:grid-cols-2 mt-4">
        <div className="space-y-4">
          <div className="flex gap-3 items-start">
            <div className="p-2 rounded bg-foreground/5 text-foreground mt-1">
              <Palette className="h-4 w-4" />
            </div>
            <div>
              <h5 className="font-mono text-sm font-semibold text-foreground">Chromatic Tokens in OKLCH</h5>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                Colors are defined in OKLCH to allow predictable alpha blending (e.g., <code className="text-foreground">bg-primary/15</code> for catalog row indicators) and uniform contrast. The obsidian backdrop and pure white accent button replicate standard high-contrast theatrical streaming styles.
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <div className="p-2 rounded bg-foreground/5 text-foreground mt-1">
              <Layers className="h-4 w-4" />
            </div>
            <div>
              <h5 className="font-mono text-sm font-semibold text-foreground">Content Categorization Badges</h5>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                Visual tags identify categories like standard content, LGBT themes, and +18 content (using the signature <code className="text-foreground">--picante</code> gradient). Keeping colors mapped semantically ensures modification of actions doesn't break content tags.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex gap-3 items-start">
            <div className="p-2 rounded bg-foreground/5 text-foreground mt-1">
              <BookOpen className="h-4 w-4" />
            </div>
            <div>
              <h5 className="font-mono text-sm font-semibold text-foreground">Storybook Documentation</h5>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                All application components, from buttons and inputs to catalog layouts (Top10Row, FeaturedCarousel, CatalogHeader), are documented through an interactive Storybook dashboard with dynamic mock responses.
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <div className="p-2 rounded bg-foreground/5 text-foreground mt-1">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <h5 className="font-mono text-sm font-semibold text-foreground">Micro-interactions</h5>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                Features smooth 60s marquee carousels for the landing page (respecting <code className="text-foreground">prefers-reduced-motion</code>), pulse actions on principal CTA buttons, and responsive modal transitions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 rounded-xl border border-border/40 bg-card/20 font-mono text-xs text-muted-foreground space-y-2">
        <p className="text-foreground font-semibold">// Brand Color Semantics Example (from styles.css)</p>
        <p>--background: oklch(0.07 0.008 255); <span className="opacity-45">/* Obsidian Dark */</span></p>
        <p>--foreground: oklch(0.96 0.004 255); <span className="opacity-45">/* Off-White Text */</span></p>
        <p>--primary: oklch(0.577 0.245 27.325); <span className="opacity-45">/* DramaFlix Red Action */</span></p>
        <p>--picante: oklch(0.585 0.22 22); <span className="opacity-45">/* Restricted +18 tag */</span></p>
      </div>
    </CaseStudySection>
  );
}
