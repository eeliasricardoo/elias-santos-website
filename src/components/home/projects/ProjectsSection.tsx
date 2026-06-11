'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const projectColors = [
  { bg: '#d9f99d', accent: '#65a30d', label: 'FEATURED' },  // lime
  { bg: '#67e8f9', accent: '#0891b2', label: 'PERSONAL'  }, // cyan
  { bg: '#c4b5fd', accent: '#7c3aed', label: 'TOOL'      }, // violet
  { bg: '#fb923c', accent: '#c2410c', label: 'PLATFORM'  }, // orange
  { bg: '#f9a8d4', accent: '#be185d', label: 'NEW FEATURE'}, // pink
];

const projects = [
  {
    title: 'SFMC Magic Builder',
    description: 'At Serasa Experian, producing a campaign email in Salesforce Marketing Cloud took me 80 minutes of manual code work. I built the tool that cut it to 10 — designed in Lovable, engineered in Cursor.',
    tags: ['React', 'AI', 'UX Engineering'],
    link: '/portfolio/sfmc-magic-builder',
    image: '/portfolios/sfmc-magic-builder/cover.png',
    metric: 'Email prod 80min → 10min',
    company: 'Serasa Experian',
  },
  {
    title: 'ChatAI: Personal AI Ecosystem',
    description: 'My personal AI workspace and testing lab — chat, image analysis and generation in one interface. Where I learn streaming and multimodal patterns before they reach client work.',
    tags: ['Next.js', 'AI', 'Streaming'],
    link: '/portfolio/ventuschat',
    image: '/portfolios/ventus/v9.webp',
    metric: null,
    company: 'Personal project',
  },
  {
    title: 'Carousel Builder',
    description: 'Marketing waited on design for every social carousel. I shipped a no-code editor with live preview, so the team publishes on-brand carousels without the queue.',
    tags: ['React', 'No-Code', 'Automation'],
    link: '/portfolio/carousel-builder',
    image: '/portfolios/carousel-builder/carousel-builder-cover.webp',
    metric: null,
    company: null,
  },
  {
    title: 'Ranking Engine',
    description: 'A gamification engine for an EdTech platform — live leaderboards, badges, real-time scoring. I designed the mechanics, then built it with SSR and caching to survive launch-day traffic.',
    tags: ['Gamification', 'SSR', 'Caching'],
    link: '/portfolio/ranking',
    image: '/portfolios/ranking/ranking.webp',
    metric: null,
    company: null,
  },
  {
    title: 'Support Queue',
    description: 'The support queue had no triage logic — every ticket landed in the same pile. I researched the problem, designed a priority system, and shipped it. Average wait time dropped 22%.',
    tags: ['UX/UI', 'Real-time', 'Optimization'],
    link: '/portfolio/support-queue',
    image: '/portfolios/fila-atendimento/1.webp',
    metric: 'Avg wait −22%',
    company: null,
  },
];

interface ProjectsSectionProps {
  title?: string;
  description?: string;
}

export function ProjectsSection({
  title = 'Selected Case Studies',
  description = "Told the way I'd tell them in an interview: the constraint, the decisions, and what the numbers did.",
}: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-left"
      >
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span className="text-electric">/02</span> Work
        </span>
        <h2 className="mt-3 text-3xl md:text-5xl font-bold mb-4">{title}</h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl">{description}</p>
      </motion.div>

      <div className="flex flex-col gap-6">
        {/* Featured Project */}
        <motion.a
          href={projects[0].link}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="block group relative overflow-hidden rounded-2xl border border-border/60 hover:border-border/80 transition-colors duration-300"
          style={{ backgroundColor: '#0a0a0a' }}
        >
          <div className="grid md:grid-cols-2 gap-0 min-h-[420px]">
            {/* Text side */}
            <div className="flex flex-col justify-between p-8 md:p-10 order-2 md:order-1">
              <div className="space-y-5">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ backgroundColor: projectColors[0].bg }} />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ backgroundColor: projectColors[0].bg }} />
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest" style={{ color: projectColors[0].bg }}>
                    Featured Case Study
                  </span>
                </div>

                <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {projects[0].tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>

                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {projects[0].title}
                </h3>

                <div className="border-l-2 pl-4" style={{ borderColor: projectColors[0].accent }}>
                  <p className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
                    {projects[0].company} —{' '}
                    <span style={{ color: projectColors[0].bg }}>{projects[0].metric}</span>
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {projects[0].description}
                </p>
              </div>

              <div className="mt-8">
                <span
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest border-b pb-1 transition-colors"
                  style={{ color: projectColors[0].bg, borderColor: `${projectColors[0].bg}50` }}
                >
                  View complete case
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>

            {/* Image side — colored panel */}
            <div
              className="relative order-1 md:order-2 min-h-[280px] overflow-hidden flex items-center justify-center p-8"
              style={{ backgroundColor: projectColors[0].bg }}
            >
              {/* Dot grid */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle, ${projectColors[0].accent}50 1px, transparent 1px)`,
                  backgroundSize: '24px 24px',
                }}
              />
              {/* Giant label */}
              <span
                className="absolute font-bold leading-none select-none pointer-events-none"
                aria-hidden="true"
                style={{
                  fontSize: 'clamp(80px, 12vw, 160px)',
                  color: projectColors[0].accent,
                  opacity: 0.15,
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  letterSpacing: '-0.05em',
                  whiteSpace: 'nowrap',
                }}
              >
                {projectColors[0].label}
              </span>
              {/* Screenshot as floating mockup */}
              <div className="relative z-10 w-full max-w-sm rounded-xl overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-700 rotate-1">
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </motion.a>

        {/* Grid of remaining projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(1).map((project, index) => {
            const color = projectColors[index + 1];
            return (
              <motion.a
                key={project.title}
                href={project.link}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="block group relative overflow-hidden rounded-2xl border border-border/60 hover:border-border/80 transition-colors duration-300"
                style={{ backgroundColor: '#0a0a0a' }}
              >
                {/* Colored image panel */}
                <div
                  className="relative h-56 overflow-hidden flex items-center justify-center px-6"
                  style={{ backgroundColor: color.bg }}
                >
                  {/* Dot grid */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      backgroundImage: `radial-gradient(circle, ${color.accent}50 1px, transparent 1px)`,
                      backgroundSize: '24px 24px',
                    }}
                  />
                  {/* Giant label */}
                  <span
                    className="absolute font-bold leading-none select-none pointer-events-none"
                    aria-hidden="true"
                    style={{
                      fontSize: 'clamp(60px, 9vw, 110px)',
                      color: color.accent,
                      opacity: 0.15,
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      letterSpacing: '-0.05em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {color.label}
                  </span>
                  {/* Screenshot as floating mockup */}
                  <div className="relative z-10 w-full max-w-xs rounded-lg overflow-hidden shadow-xl group-hover:scale-105 transition-transform duration-700 -rotate-1">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  {/* Color label badge */}
                  <span
                    className="absolute top-3 right-3 font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded font-bold"
                    style={{ backgroundColor: color.accent, color: '#0a0a0a' }}
                  >
                    {color.label}
                  </span>
                </div>

                {/* Text */}
                <div className="p-6 space-y-3">
                  <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-foreground leading-snug">
                    {project.title}
                  </h3>

                  {project.metric && (
                    <p className="font-mono text-xs uppercase tracking-wider" style={{ color: color.bg }}>
                      {project.metric}
                    </p>
                  )}

                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="pt-4 border-t border-border/40">
                    <span
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest border-b pb-1 transition-colors"
                      style={{ color: `${color.bg}99`, borderColor: `${color.bg}30` }}
                    >
                      View complete case
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
