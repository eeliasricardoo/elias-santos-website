import { motion } from 'framer-motion';
import { Sparkles, UserRound } from 'lucide-react';

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
            'Flows and wireframes first, high fidelity last. Every screen exists to answer a product question — if I can\'t say which one, the screen doesn\'t ship.',
        ai: 'Generates layout variations to react against — exploring ten directions costs minutes, not days.',
        human: 'Decides which direction survives. Taste doesn\'t come from a prompt.',
        tools: ['Figma', 'Design systems', 'Prototyping'],
    },
    {
        number: '03',
        title: 'Prototype in code, not in slides',
        description:
            'I skip the static handoff. Stakeholders and users test a working prototype in the browser, with real data — ambiguity dies before development starts.',
        ai: 'Turns a designed component into working React in hours instead of sprints.',
        human: 'Reviews every line. AI writes fast; it doesn\'t know your edge cases.',
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
    return (
        <section id='how-i-work' className='relative py-20 px-4'>
            <div className='max-w-5xl mx-auto'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className='mb-16 max-w-3xl'
                >
                    <span className='text-sm font-bold uppercase tracking-wider text-muted-foreground'>
                        How I work
                    </span>
                    <h2 className='mt-3 text-3xl md:text-5xl font-bold leading-tight'>
                        AI where it accelerates.{' '}
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-slate-300 via-white to-slate-300'>
                            Judgment where it counts.
                        </span>
                    </h2>
                    <p className='mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed'>
                        "UX from the future" isn't using AI for everything. It's knowing
                        exactly which parts of the process it compresses — and which parts
                        still need a human in the room.
                    </p>
                </motion.div>

                <div className='flex flex-col'>
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className='group border-t border-border/20 py-10 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8'
                        >
                            <div className='md:col-span-1'>
                                <span className='text-sm font-mono text-muted-foreground/60 group-hover:text-foreground transition-colors'>
                                    {step.number}
                                </span>
                            </div>

                            <div className='md:col-span-5 space-y-3'>
                                <h3 className='text-xl md:text-2xl font-bold text-foreground leading-snug'>
                                    {step.title}
                                </h3>
                                <p className='text-muted-foreground leading-relaxed'>
                                    {step.description}
                                </p>
                                <p className='text-sm text-muted-foreground/60 pt-1'>
                                    {step.tools.join(' · ')}
                                </p>
                            </div>

                            <div className='md:col-span-6 flex flex-col gap-4'>
                                <div className='rounded-xl border border-border/10 bg-white/[0.02] p-4'>
                                    <div className='flex items-center gap-2 mb-1.5'>
                                        <Sparkles className='w-3.5 h-3.5 text-slate-400' />
                                        <span className='text-xs font-bold uppercase tracking-wider text-slate-400'>
                                            Where AI comes in
                                        </span>
                                    </div>
                                    <p className='text-sm text-foreground/80 leading-relaxed'>
                                        {step.ai}
                                    </p>
                                </div>
                                <div className='rounded-xl border border-border/10 bg-white/[0.02] p-4'>
                                    <div className='flex items-center gap-2 mb-1.5'>
                                        <UserRound className='w-3.5 h-3.5 text-slate-400' />
                                        <span className='text-xs font-bold uppercase tracking-wider text-slate-400'>
                                            Where it doesn't
                                        </span>
                                    </div>
                                    <p className='text-sm text-foreground/80 leading-relaxed'>
                                        {step.human}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
