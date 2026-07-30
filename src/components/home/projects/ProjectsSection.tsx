'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PROJECT_BRANDS, BRAND_ORDER } from '@/constants/project-brands';
import { OptimizedImage } from '@/components/performance/OptimizedImage';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ProjectWireframe, HoverVideoPreview } from '@/components/portfolio/ui';

const projectColors = BRAND_ORDER.map((c) => PROJECT_BRANDS[c]);

const projects = [
  {
    title: 'EmailFlow Pro',
    description: 'Campaign email production at Serasa Experian was bottlenecked by manual HTML coding. I designed and engineered EmailFlow Pro, a visual builder that cut layout creation from 80 minutes to just 10.',
    tags: ['React', 'AI', 'UX Engineering'],
    link: '/portfolio/sfmc-magic-builder',
    image: '/portfolios/sfmc-magic-builder/interface-top.webp',
    video: '/portfolios/oliver.webm',
    width: 1220,
    height: 694,
    metric: 'Email prod 80min → 10min',
    company: 'Serasa Experian',
  },
  {
    title: 'ilevar',
    description: 'Language teachers run 1:1 and group lessons across Zoom, WhatsApp, and a stack of disconnected docs. I built ilevar, a live classroom that puts video, drilling and reading activities, and a CEFR-mapped progress trail on one screen — for any language, not just English.',
    tags: ['Next.js 16', 'WebRTC', 'UX Engineering'],
    link: '/portfolio/ilevar',
    image: '/portfolios/englishroom/s_dashboard_lt.webp',
    width: 1220,
    height: 762,
    metric: '1:1 + group · solo build',
    company: 'Personal project',
  },
  {
    title: 'ChatAI: Personal AI Ecosystem',
    description: 'To trust AI in production, you have to break it first. I built a custom workspace to prototype, benchmark, and de-risk token streaming, multimodal models, and orchestration before client work.',
    tags: ['Next.js', 'AI', 'Streaming'],
    link: '/portfolio/ventuschat',
    image: '/portfolios/ventus/v9.webp',
    video: '/portfolios/ventus/video.webm',
    width: 800,
    height: 399,
    metric: null,
    company: 'Personal project',
  },
  {
    title: 'Ranking Engine',
    description: 'EdTech engagement relies on real-time feedback. I designed the gamification loop and engineered a scale-ready leaderboard system using SSR and caching to process millions of score events.',
    tags: ['Gamification', 'SSR', 'Caching'],
    link: '/portfolio/ranking',
    image: '/portfolios/ranking/ranking.webp',
    video: '/portfolios/ranking/ranking-demo.webm',
    width: 800,
    height: 406,
    metric: null,
    company: null,
  },
  {
    title: 'Support Queue',
    description: 'Without triage logic, customer support operations suffered from high backlog overhead. I analyzed the queues, designed an automated prioritization system, and successfully slashed wait times by 22%.',
    tags: ['UX/UI', 'Real-time', 'Optimization'],
    link: '/portfolio/support-queue',
    image: '/portfolios/fila-atendimento/1.webp',
    video: '/portfolios/framer-ui.webm',
    width: 800,
    height: 399,
    metric: 'Avg wait −22%',
    company: null,
  },
  {
    title: 'UX Engineer Portfolio',
    description: 'A high-performance portfolio engineered to demonstrate design token systems, micro-animations, and speed optimization. Fully open-sourced to showcase production-grade Astro patterns.',
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
  const imageOnLeft = index % 2 === 1;

  return (
    <div
      className="sticky-card w-full pb-[4vh] md:pb-[6vh] last:pb-0"
      style={{
        '--index': index,
        zIndex: index + 1,
      } as React.CSSProperties}
    >
      <div className="w-full">
        <a
          href={project.link}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="group block rounded-2xl md:rounded-3xl border border-border/40 bg-card shadow-2xl overflow-hidden transition-colors duration-300 hover:border-border/80"
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
                  'group-active:translate-y-[2px] group-active:shadow-[0_1px_0_0_hsl(var(--foreground)/0.4)]',
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
              {/* Screenshot as floating mockup */}
              <div className="relative z-10 w-full max-w-md">
                <div className="w-full rounded-xl overflow-hidden shadow-2xl group-hover:scale-[1.03] transition-transform duration-700 aspect-[16/10]">
                  <HoverVideoPreview
                    title={project.title}
                    accent={color.accent}
                    video={project.video}
                    image={project.image}
                  />
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
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
