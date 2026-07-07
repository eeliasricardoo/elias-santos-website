'use client';

import { useEffect, useRef, useState } from 'react';
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    useVelocity,
    useReducedMotion,
} from 'framer-motion';
import { STORY_PROJECTS, type StoryProject } from './story-data';

/**
 * Every case cover gets the same treatment: charcoal panel with a dot
 * grid, a ghost index number, and the screenshot inside an identical
 * browser frame — one pattern for all five projects.
 */
function CaseCover({ project }: { project: StoryProject }) {
    return (
        <div className="relative aspect-[16/10] overflow-hidden" style={{ background: 'var(--er-ink)' }}>
            {/* Dot grid */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: 'radial-gradient(circle, rgba(201,202,198,0.09) 1px, transparent 1px)',
                    backgroundSize: '22px 22px',
                }}
            />

            {/* Ghost index */}
            <span
                className="pointer-events-none absolute -right-1 -top-7 font-bold leading-none"
                style={{ fontSize: '130px', color: 'var(--er-paper)', opacity: 0.08 }}
            >
                {project.index}
            </span>

            {/* Browser frame — slides up slightly on hover */}
            <div
                className="absolute bottom-0 left-[9%] right-[9%] top-[16%] flex flex-col overflow-hidden rounded-t-lg border border-b-0 shadow-2xl transition-transform duration-500 ease-out group-hover:-translate-y-2"
                style={{ borderColor: 'var(--er-ink-line)', background: 'var(--er-ink-soft)' }}
            >
                {/* Chrome bar */}
                <div
                    className="flex items-center gap-1.5 border-b px-3 py-2"
                    style={{ borderColor: 'var(--er-ink-line)' }}
                >
                    {[0, 1, 2].map((d) => (
                        <span
                            key={d}
                            className="h-2 w-2 rounded-full border"
                            style={{ borderColor: 'rgba(201,202,198,0.4)' }}
                        />
                    ))}
                    <span
                        className="mx-2 flex-1 truncate rounded-full px-3 py-0.5 text-center text-[9px] tracking-[0.15em]"
                        style={{ background: 'rgba(201,202,198,0.08)', color: 'rgba(201,202,198,0.5)' }}
                    >
                        er.work/{project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                    </span>
                </div>

                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="min-h-0 w-full flex-1 object-cover object-top grayscale transition-all duration-700 ease-out group-hover:grayscale-0"
                />
            </div>
        </div>
    );
}

function ProjectCard({ project }: { project: StoryProject }) {
    return (
        <a
            href={project.link}
            className="group relative flex w-[82vw] shrink-0 flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 sm:w-[64vw] lg:w-[42vw] xl:w-[36vw]"
            style={{ background: 'var(--er-ink-soft)', borderColor: 'var(--er-ink-line)' }}
        >
            <CaseCover project={project} />

            <div className="flex flex-1 flex-col gap-3 p-6 md:p-8" style={{ color: 'var(--er-paper)' }}>
                <div className="flex items-baseline justify-between text-xs tracking-[0.25em] opacity-60">
                    <span>//{project.index}</span>
                    {project.metric && <span>{project.metric}</span>}
                </div>

                <h3 className="text-xl font-bold tracking-tight md:text-2xl">
                    {project.title}
                    <span className="ml-2 inline-block opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                        →
                    </span>
                </h3>

                <p className="text-sm leading-relaxed opacity-70">{project.description}</p>

                <div className="mt-auto flex flex-wrap gap-2 pt-3">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border px-3 py-1 text-[10px] tracking-[0.15em] opacity-60"
                            style={{ borderColor: 'var(--er-ink-line)' }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </a>
    );
}

/**
 * Act III — selected work.
 * The viewport pins and vertical scroll drives a horizontal filmstrip.
 * The track skews with scroll velocity, so flicking fast bends the row.
 */
export function ProjectsAct() {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const [shift, setShift] = useState(0);
    const reduce = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    useEffect(() => {
        const measure = () => {
            if (!trackRef.current) return;
            const overflow = trackRef.current.scrollWidth - window.innerWidth;
            setShift(Math.max(0, overflow));
        };
        measure();
        const ro = new ResizeObserver(measure);
        if (trackRef.current) ro.observe(trackRef.current);
        window.addEventListener('resize', measure);
        return () => {
            ro.disconnect();
            window.removeEventListener('resize', measure);
        };
    }, []);

    const x = useTransform(scrollYProgress, [0.06, 0.94], [0, -shift]);
    const barScale = useTransform(scrollYProgress, [0.06, 0.94], [0, 1]);

    // Scroll velocity bends the filmstrip
    const velocity = useVelocity(scrollYProgress);
    const skewRaw = useTransform(velocity, [-0.6, 0.6], [5, -5]);
    const skewX = useSpring(skewRaw, { stiffness: 120, damping: 25 });

    return (
        <div ref={containerRef} className={reduce ? '' : 'h-[420vh]'}>
            <div
                className={`${reduce ? 'relative py-24' : 'sticky top-0 h-screen'} flex flex-col justify-center overflow-hidden`}
                style={{ background: 'var(--er-ink)' }}
            >
                <motion.div
                    className="mb-8 flex items-baseline justify-between px-6 md:px-12"
                    style={{ color: 'var(--er-paper)' }}
                    initial={reduce ? false : { y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: '-15% 0px' }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="text-2xl font-bold tracking-tight md:text-4xl">SELECTED WORK</h2>
                    <span className="text-xs tracking-[0.3em] opacity-50">
                        //01—{STORY_PROJECTS[STORY_PROJECTS.length - 1].index}
                    </span>
                </motion.div>

                {reduce ? (
                    <div className="flex flex-col gap-8 px-6 md:px-12">
                        {STORY_PROJECTS.map((p) => (
                            <ProjectCard key={p.index} project={p} />
                        ))}
                    </div>
                ) : (
                    <motion.div
                        ref={trackRef}
                        className="flex items-stretch gap-6 pl-6 pr-[18vw] will-change-transform md:gap-8 md:pl-12"
                        style={{ x, skewX }}
                    >
                        {STORY_PROJECTS.map((p) => (
                            <ProjectCard key={p.index} project={p} />
                        ))}
                    </motion.div>
                )}

                {/* Ride progress */}
                {!reduce && (
                    <div className="mt-10 flex items-center gap-4 px-6 md:px-12">
                        <div className="h-px flex-1" style={{ background: 'var(--er-ink-line)' }}>
                            <motion.div
                                className="h-px origin-left"
                                style={{ background: 'var(--er-paper)', scaleX: barScale }}
                            />
                        </div>
                        <span className="text-[10px] tracking-[0.3em]" style={{ color: 'var(--er-paper)', opacity: 0.4 }}>
                            SCROLL TO EXPLORE
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}
