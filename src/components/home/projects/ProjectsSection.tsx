import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import { TiltCard } from '@/components/ui/TiltCard';

const projects = [
    {
        title: 'SFMC Magic Builder',
        description: 'The Triad of UX, AI, and Code. High-performance SPA that optimizes CRM workflow by 87.5%.',
        tags: ['React', 'AI', 'UX Engineering'],
        link: '/portfolio/sfmc-magic-builder',
        image: '/portfolios/sfmc-magic-builder/cover.png'
    },
    {
        title: 'ChatAI: Personal AI Ecosystem',
        description: 'Personal AI ecosystem with unified chat, screenshot analysis, and multimodal generation.',
        tags: ['Next.js', 'AI', 'Streaming'],
        link: '/portfolio/ventuschat',
        image: '/portfolios/ventus/v9.webp'
    },
    {
        title: 'Carousel Builder',
        description: 'No-code tool to create professional carousels in minutes with real-time preview.',
        tags: ['React', 'No-Code', 'Automation'],
        link: '/portfolio/carousel-builder',
        image: '/portfolios/carousel-builder/Captura de tela 2025-07-27 040136.webp'
    },
    {
        title: 'Ranking Engine',
        description: 'Gamification engine with weekly leaderboards, badges, and dynamic scoring.',
        tags: ['Gamification', 'SSR', 'Caching'],
        link: '/portfolio/ranking',
        image: '/portfolios/ranking/ranking.webp'
    },
    {
        title: 'Support Queue',
        description: 'Omnichannel chat system reducing wait time by 22% through intelligent queuing.',
        tags: ['UX/UI', 'Real-time', 'Optimization'],
        link: '/portfolio/support-queue',
        image: '/portfolios/fila-atendimento/1.webp'
    }
];

interface ProjectsSectionProps {
    title?: string;
    description?: string;
}

export function ProjectsSection({
    title = "Selected Projects",
    description = "Here are some of the projects I've worked on. Each one represents a unique challenge and solution."
}: ProjectsSectionProps) {
    return (
        <section id="projects" className="py-20 px-4 container mx-auto">
            <div className="mb-12 text-left">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>
                <p className="text-zinc-400 text-lg md:text-xl max-w-2xl">{description}</p>
            </div>

            <div className="flex flex-col gap-12">
                {/* Featured Project - SFMC Magic Builder */}
                {projects.slice(0, 1).map((project, index) => (
                    <motion.div
                        key={`featured-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full"
                    >
                        <div className="mb-4 flex items-center gap-2">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                            </span>
                            <span className="text-sm font-medium text-amber-500 uppercase tracking-wider">Featured Case Study</span>
                        </div>

                        <a href={project.link} className="block group relative perspective-1000">
                            <TiltCard>
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
                                <Card className="relative bg-card/95 border-primary/20 overflow-hidden rounded-xl h-full">
                                    <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8 items-center h-full">
                                        <div className="order-2 md:order-1 space-y-6 transform-gpu translate-z-6 " style={{ transform: "translateZ(20px)" }}>
                                            <div>
                                                <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                                                    {project.title}
                                                </h3>
                                                <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-4">
                                                    "Want to know how I reduced CRM production time by <span className="text-primary font-bold">87.5%</span>?"
                                                </p>
                                                <p className="text-muted-foreground text-lg leading-relaxed">
                                                    {project.description}
                                                </p>
                                            </div>

                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map((tag) => (
                                                    <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>

                                            <RainbowButton
                                                className="w-full md:w-auto px-8 py-6 text-base font-bold !text-black bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))]"
                                                style={{
                                                    '--color-1': '#fbbf24',
                                                    '--color-2': '#d97706',
                                                    '--color-3': '#fbbf24',
                                                    '--color-4': '#d97706',
                                                    '--color-5': '#f59e0b',
                                                } as React.CSSProperties}
                                            >
                                                Read the Full Story
                                            </RainbowButton>
                                        </div>

                                        <div className="order-1 md:order-2 relative aspect-video md:aspect-square lg:aspect-video rounded-lg overflow-hidden border border-border/10 shadow-2xl transform-gpu" style={{ transform: "translateZ(30px)" }}>
                                            <div className="absolute inset-0 bg-transparent group-hover:bg-transparent transition-colors z-10" />
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        </div>
                                    </div>
                                </Card>
                            </TiltCard>
                        </a>
                    </motion.div>
                ))}

                {/* Other Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.slice(1).map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <a href={project.link} className="block h-full group">
                                <TiltCard className="h-full">
                                    <Card className="h-full bg-card/40 border-border/10 backdrop-blur-sm hover:bg-card/60 transition-all duration-300 hover:border-primary/20 overflow-hidden">
                                        <div className="relative h-48 w-full overflow-hidden border-b border-border/10 transform-gpu" style={{ transform: "translateZ(20px)" }}>
                                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10" />
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                                                loading="lazy"
                                                decoding="async"
                                                width="800"
                                                height="404"
                                            />
                                        </div>
                                        <CardContent className="flex flex-col justify-between p-6 h-[calc(100%-192px)] transform-gpu" style={{ transform: "translateZ(10px)" }}>
                                            <div>
                                                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                                    {project.title}
                                                </h3>
                                                <p className="text-muted-foreground mb-6 line-clamp-2">{project.description}</p>
                                                <div className="flex flex-wrap gap-2 mb-6">
                                                    {project.tags.map((tag) => (
                                                        <Badge key={tag} variant="outline" className="bg-primary/5 text-muted-foreground border-border/10">
                                                            {tag}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                            <RainbowButton className="w-full text-sm h-10 !text-black font-bold bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))]">View Case Study</RainbowButton>
                                        </CardContent>
                                    </Card>
                                </TiltCard>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
