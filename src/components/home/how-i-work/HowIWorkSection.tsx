'use client';
import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Sparkles, UserRound } from 'lucide-react';
import { HowIWorkVisuals } from './HowIWorkVisuals';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  ai: string;
  human: string;
  tools: string[];
}

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand the real problem',
    description:
      'Interviews, support tickets, session recordings — I go to the source before opening Figma. Most "redesigns" fail because they solve the stated problem instead of the real one.',
    ai: 'Transcribes, clusters and summarizes hours of research in minutes.',
    human: 'Asks the follow-up question. AI has never sat in a user interview that changed a roadmap. I have.',
    tools: ['User interviews', 'Hotjar', 'GA4'],
  },
  {
    number: '02',
    title: 'Design the decision, not just the screen',
    description:
      "Flows and wireframes first, high fidelity last. Every screen exists to answer a product question — if I can't say which one, the screen doesn't ship.",
    ai: 'Generates layout variations to react against — exploring ten directions costs minutes, not days.',
    human: "Decides which direction survives. Taste doesn't come from a prompt.",
    tools: ['Figma', 'Design systems', 'Prototyping'],
  },
  {
    number: '03',
    title: 'Prototype in code, not in slides',
    description:
      "I skip the static handoff. Stakeholders and users test a working prototype in the browser, with real data — ambiguity dies before development starts.",
    ai: "Turns a designed component into working React in hours instead of sprints.",
    human: "Reviews every line. AI writes fast; it doesn't know your edge cases.",
    tools: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    number: '04',
    title: 'Ship, measure, iterate',
    description:
      'Production code with analytics wired in from day one. The 87.5% and 22% on this page exist because they were measured, not estimated.',
    ai: 'Drafts test cases, digs through analytics, flags regressions.',
    human: 'Owns what "better" means — and kills the feature when the data says no.',
    tools: ['GA4', 'Mixpanel', 'A/B testing'],
  },
];

export function HowIWorkSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress through the ENTIRE section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="how-i-work" ref={containerRef} className="relative bg-background">
      {/* Header (Normal scroll) */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-28 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <span className="text-electric">/01</span> How I work
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
            AI where it accelerates.
            <span className="block text-muted-foreground">
              Judgment where it counts.
            </span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            "UX from the future" isn't using AI for everything. It's knowing
            exactly which parts of the process it compresses — and which parts
            still need a human in the room.
          </p>
        </motion.div>
      </div>

      {/* Sticky Scroll Area */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="relative flex flex-col lg:flex-row">
          
          {/* Sticky Visuals (Right side on desktop, fixed background on mobile) */}
          <div className="lg:w-1/2 lg:order-last">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-0 pointer-events-none lg:pointer-events-auto opacity-30 lg:opacity-100">
               <HowIWorkVisuals progress={scrollYProgress} />
            </div>
          </div>

          {/* Scrolling Steps Content */}
          <div className="w-full lg:w-1/2 relative z-10 -mt-[100vh] lg:mt-0 pb-[30vh]">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className="min-h-[100vh] flex flex-col justify-center py-20 lg:pr-16"
              >
                <div className="bg-background/80 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none p-6 md:p-8 lg:p-0 rounded-2xl border border-border/20 lg:border-none shadow-xl lg:shadow-none">
                  
                  {/* Step number */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-mono text-4xl lg:text-6xl font-bold text-electric">
                      {step.number}
                    </span>
                  </div>

                  {/* Title + description */}
                  <div className="space-y-4 mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                    <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground/50 pt-2">
                      {step.tools.join(' · ')}
                    </p>
                  </div>

                  {/* AI vs Human panels */}
                  <div className="flex flex-col gap-6">
                    <div className="border-l-2 border-electric/40 pl-5">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4 text-electric" />
                        <span className="font-mono text-xs uppercase tracking-widest text-electric">
                          Where AI comes in
                        </span>
                      </div>
                      <p className="text-base text-foreground/80 leading-relaxed">{step.ai}</p>
                    </div>

                    <div className="border-l-2 border-border pl-5">
                      <div className="flex items-center gap-2 mb-2">
                        <UserRound className="w-4 h-4 text-foreground/70" />
                        <span className="font-mono text-xs uppercase tracking-widest text-foreground/60">
                          Where it doesn't
                        </span>
                      </div>
                      <p className="text-base text-foreground/80 leading-relaxed">{step.human}</p>
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
