'use client';

import { CaseStudySection } from '@/components/portfolio/ui';
import { Palette, Layers, Sparkles, BookOpen } from 'lucide-react';

export function DesignSystemSection() {
  return (
    <CaseStudySection eyebrow="Design System" index={5} title="High-Contrast Aesthetics & Component Library">
      <p>
        A streaming application requires a dark-first, premium interface where content is the absolute hero. DramaFlix implements a unified design system documented in a central interactive library, utilizing high-contrast tokens and a unified spacing system.
      </p>

      <div className="grid gap-6 md:grid-cols-2 mt-4 font-sans">
        <div className="space-y-4">
          <div className="flex gap-3 items-start">
            <div className="p-2 rounded bg-foreground/5 text-foreground mt-1">
              <Palette className="h-4 w-4" />
            </div>
            <div>
              <h5 className="font-mono text-sm font-semibold text-foreground">High-Contrast Readability</h5>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                The visual palette ensures strict, comfortable contrast boundaries. The deep obsidian backdrop combined with crisp white typography complies with international accessibility guidelines, reducing eye strain and aiding readability for senior users.
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <div className="p-2 rounded bg-foreground/5 text-foreground mt-1">
              <Layers className="h-4 w-4" />
            </div>
            <div>
              <h5 className="font-mono text-sm font-semibold text-foreground">Oversized Touch Targets</h5>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                All primary interface buttons, interactive cards, and navigation drawer links enforce a minimum target size of 48px. This accommodates natural motor skill decline and completely eliminates accidental misclicks.
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
              <h5 className="font-mono text-sm font-semibold text-foreground">Component Library</h5>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                All application components, from catalog rows and banners to category menus, are documented in an interactive design playground showing states, responsive behaviors, and content boundaries.
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <div className="p-2 rounded bg-foreground/5 text-foreground mt-1">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <h5 className="font-mono text-sm font-semibold text-foreground">Accessibility Testing</h5>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                Design system elements were tested under simulated low-vision conditions. High-contrast overlays, larger baseline fonts (16px to 18px), and distinct outlines ensure clear navigation pathways.
              </p>
            </div>
          </div>
        </div>
      </div>
    </CaseStudySection>
  );
}
