'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PROJECT_BRANDS, BRAND_ORDER } from '@/constants/project-brands';
import { OptimizedImage } from '@/components/performance/OptimizedImage';
import { Parallax } from '@/components/motion';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const projectColors = BRAND_ORDER.map((c) => PROJECT_BRANDS[c]);

const projects = [
  {
    title: 'EmailFlow Pro',
    description: 'At Serasa Experian, producing a campaign email in Salesforce Marketing Cloud took me 80 minutes of manual code work. I built the tool that cut it to 10 — designed in Lovable, engineered in Cursor.',
    tags: ['React', 'AI', 'UX Engineering'],
    link: '/portfolio/sfmc-magic-builder',
    image: '/portfolios/sfmc-magic-builder/interface-top.webp',
    width: 1220,
    height: 694,
    metric: 'Email prod 80min → 10min',
    company: 'Serasa Experian',
  },
  {
    title: 'EnglishRoom',
    description: 'English lessons were scattered across Zoom, docs, and chat. I built a single-screen 1:1 classroom — live video, activities, and notes on one surface — designed from tokens up to the live WebRTC room.',
    tags: ['Next.js 16', 'WebRTC', 'UX Engineering'],
    link: '/portfolio/englishroom',
    image: '/portfolios/englishroom/landing.webp',
    width: 1220,
    height: 762,
    metric: '1:1 live room · solo build',
    company: 'Personal project',
  },
  {
    title: 'ChatAI: Personal AI Ecosystem',
    description: 'My personal AI workspace and testing lab — chat, image analysis and generation in one interface. Where I learn streaming and multimodal patterns before they reach client work.',
    tags: ['Next.js', 'AI', 'Streaming'],
    link: '/portfolio/ventuschat',
    image: '/portfolios/ventus/v9.webp',
    width: 800,
    height: 399,
    metric: null,
    company: 'Personal project',
  },
  {
    title: 'Ranking Engine',
    description: 'A gamification engine for an EdTech platform — live leaderboards, badges, real-time scoring. I designed the mechanics, then built it with SSR and caching to survive launch-day traffic.',
    tags: ['Gamification', 'SSR', 'Caching'],
    link: '/portfolio/ranking',
    image: '/portfolios/ranking/ranking.webp',
    width: 800,
    height: 406,
    metric: null,
    company: null,
  },
  {
    title: 'Support Queue',
    description: 'The support queue had no triage logic — every ticket landed in the same pile. I researched the problem, designed a priority system, and shipped it. Average wait time dropped 22%.',
    tags: ['UX/UI', 'Real-time', 'Optimization'],
    link: '/portfolio/support-queue',
    image: '/portfolios/fila-atendimento/1.webp',
    width: 800,
    height: 399,
    metric: 'Avg wait −22%',
    company: null,
  },
  {
    title: 'UX Engineer Portfolio',
    description: 'This very website — built to showcase UX engineering best practices, design tokens, micro-interactions, and fast load times. Open-sourced to show how I structure production Astro code.',
    tags: ['Astro', 'React', 'Design System', 'Framer Motion'],
    link: 'https://github.com/eeliasricardoo/meu-site',
    image: '/oq-image.png',
    width: 2400,
    height: 1260,
    metric: 'LCP < 0.8s · Open Source',
    company: 'Personal project',
  },
];

interface ProjectsSectionProps {
  title?: string;
  description?: string;
}

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  color: typeof projectColors[0];
  isFeatured: boolean;
  isExternal: boolean;
}

function ProjectCard({ project, index, color, isFeatured, isExternal }: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Subtle scale + fade as the card gets covered by the next one — reads as depth, not a glitch
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.72]);

  const imageOnLeft = index % 2 === 1;

  return (
    <div
      ref={containerRef}
      className="sticky-card w-full pb-[10vh] md:pb-[14vh] last:pb-0"
      style={{
        '--index': index,
        zIndex: index + 1,
      } as React.CSSProperties}
    >
      <motion.div
        style={{ scale, opacity }}
        className="w-full origin-top"
      >
        <motion.a
          href={project.link}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          initial={{ opacity: 0, y: 48, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="group block rounded-2xl md:rounded-3xl border border-border/40 bg-card shadow-2xl overflow-hidden transition-all duration-300 hover:border-border/80"
        >
          <div className="grid md:grid-cols-2 items-stretch min-h-[440px] md:min-h-[520px]">
            {/* Text side */}
            <div
              className={`flex flex-col justify-center gap-6 px-6 py-10 md:px-12 lg:px-20 md:py-16 order-2 ${
                imageOnLeft ? 'md:order-2' : 'md:order-1'
              }`}
            >
              {/* Mono index */}
              <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-muted-foreground/60">
                <span style={{ color: color.accent }}>
                  /{String(index + 1).padStart(2, '0')}
                </span>
                <span className="h-px flex-1 max-w-[80px] bg-border/40" />
                {isFeatured ? 'Featured Case Study' : 'Case Study'}
              </div>

              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] text-foreground transition-colors group-hover:text-foreground">
                {project.title}
              </h3>

              <p className="leading-relaxed max-w-xl text-muted-foreground">
                {project.description}
              </p>

              {/* Same premium CTA as the hero — presses down when the card is clicked */}
              <span
                className={cn(
                  buttonVariants({ variant: 'premium', size: 'lg' }),
                  'h-12 w-fit',
                  'group-active:translate-y-[2px] group-active:shadow-[0_1px_0_0_#a1a1aa] light:group-active:shadow-[0_1px_0_0_#27272a]',
                )}
              >
                View complete case
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>

            {/* Image side — colored panel, bleeds to edge */}
            <div
              className={`relative overflow-hidden flex items-center justify-center p-8 md:p-12 min-h-[300px] order-1 ${
                imageOnLeft ? 'md:order-1' : 'md:order-2'
              }`}
              style={{ background: color.gradient }}
            >
              {/* Dot grid */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle, ${color.accent}15 1px, transparent 1px)`,
                  backgroundSize: '24px 24px',
                }}
              />
              {/* Screenshot as floating mockup — drifts on scroll for depth */}
              <Parallax amount={36} className="relative z-10 w-full max-w-md">
                <div className="w-full rounded-xl overflow-hidden shadow-2xl group-hover:scale-[1.03] transition-transform duration-700">
                  <OptimizedImage
                    src={project.image}
                    alt={project.title}
                    width={project.width}
                    height={project.height}
                    className="w-full h-full object-cover object-top"
                    lazy={true}
                  />
                </div>
              </Parallax>
            </div>
          </div>
        </motion.a>
      </motion.div>
    </div>
  );
}

export function ProjectsSection({
  title = 'Selected Case Studies',
  description = "Told the way I'd tell them in an interview: the constraint, the decisions, and what the numbers did.",
}: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20 md:py-28">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-24 text-left max-w-7xl mx-auto px-4 md:px-6 lg:px-8"
      >
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span className="text-foreground font-semibold">/02</span> Work
        </span>
        <h2 className="mt-3 text-3xl md:text-5xl font-bold mb-4">{title}</h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl">{description}</p>
      </motion.div>

      {/* Stacked Cards container */}
      <div className="flex flex-col max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative">
        {projects.map((project, index) => {
          const color = projectColors[index];
          const isFeatured = index === 0;
          const isExternal = project.link.startsWith('http');

          return (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              color={color}
              isFeatured={isFeatured}
              isExternal={isExternal}
            />
          );
        })}
      </div>
    </section>
  );
}
