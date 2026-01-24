import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import { TiltCard } from '@/components/ui/TiltCard';
import { ArrowRight } from 'lucide-react';

// ... (imports remain the same)

const projects = [
    {
        title: 'SFMC Magic Builder',
        description: 'A revolutionary SPA blending UX, AI, and Code. Streamlined CRM workflows to achieve a massive 87.5% efficiency boost.',
        tags: ['React', 'AI', 'UX Engineering'],
        link: '/portfolio/sfmc-magic-builder',
        image: '/portfolios/sfmc-magic-builder/cover.png'
    },
    {
        title: 'ChatAI: Personal AI Ecosystem',
        description: 'A unified Personal AI Ecosystem. Seamlessly integrating chat, visual analysis, and multimodal generation into one intuitive interface.',
        tags: ['Next.js', 'AI', 'Streaming'],
        link: '/portfolio/ventuschat',
        image: '/portfolios/ventus/v9.webp'
    },
    {
        title: 'Carousel Builder',
        description: 'Empowering creators with a No-Code solution. Build professional, engaging carousels in minutes with instant real-time previews.',
        tags: ['React', 'No-Code', 'Automation'],
        link: '/portfolio/carousel-builder',
        image: '/portfolios/carousel-builder/Captura de tela 2025-07-27 040136.webp'
    },
    {
        title: 'Ranking Engine',
        description: 'Driving engagement through Gamification. A dynamic engine featuring live leaderboards, achievement badges, and real-time scoring.',
        tags: ['Gamification', 'SSR', 'Caching'],
        link: '/portfolio/ranking',
        image: '/portfolios/ranking/ranking.webp'
    },
    {
        title: 'Support Queue',
        description: 'Optimizing support with Intelligent Queuing. An omnichannel system that slashed wait times by 22%, enhancing customer satisfaction.',
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
    title = "Selected Case Studies",
    description = "Deep dives into complex problems, strategic design, and technical execution. Read the full stories behind the solutions."
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
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-slate-500"></span>
                            </span>
                            <span className="text-sm font-bold bg-gradient-to-r from-slate-300 via-white to-slate-400 bg-clip-text text-transparent uppercase tracking-wider">Featured Case Study</span>
                        </div>

                        <a href={project.link} className="block group relative perspective-1000">
                            <TiltCard>
                                <div className="absolute -inset-[2px] bg-gradient-to-r from-slate-300 via-slate-100 to-slate-400 rounded-2xl opacity-40 group-hover:opacity-70 blur-md transition duration-500"></div>
                                <Card className="relative bg-black/90 border-slate-500/30 overflow-hidden rounded-xl h-full">
                                    <div className="absolute inset-0 bg-gradient-to-br from-slate-500/10 via-black/50 to-black" />
                                    <div className="relative z-10 grid md:grid-cols-2 gap-6 p-6 md:p-8 items-center h-full">
                                        <div className="order-2 md:order-1 flex flex-col justify-center h-full transform-gpu translate-z-6 " style={{ transform: "translateZ(20px)" }}>

                                            {/* Tags moved top for hierarchy */}
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.tags.map((tag) => (
                                                    <Badge key={tag} variant="secondary" className="bg-slate-500/10 text-slate-300 hover:bg-slate-500/20 border border-slate-500/20 px-3 py-1">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>

                                            <div className="mb-8">
                                                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 group-hover:text-slate-200 transition-colors leading-tight">
                                                    {project.title}
                                                </h3>
                                                <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-6 border-l-2 border-slate-500/30 pl-4 py-1">
                                                    "Want to know how I reduced CRM production time by <span className="text-slate-200 font-bold">87.5%</span>?"
                                                </p>
                                                <p className="text-zinc-400 text-lg leading-relaxed">
                                                    {project.description}
                                                </p>
                                            </div>

                                            {/* Button with more prominence */}
                                            <div className="mt-auto pt-6">
                                                <RainbowButton
                                                    className="w-full md:w-auto min-w-[240px] px-8 py-6 text-lg font-bold !text-black bg-gradient-to-b from-white via-slate-200 to-slate-400 border border-white/40 shadow-[0_0_20px_-5px_rgba(255,255,255,0.4),0_0_10px_rgba(255,255,255,0.2)_inset] hover:shadow-[0_0_50px_-5px_rgba(255,255,255,0.9),0_0_20px_rgba(255,255,255,0.7)_inset] hover:scale-[1.03] active:scale-[0.98] transition-all duration-500"
                                                    style={{
                                                        '--color-1': '#ffffff',
                                                        '--color-2': '#e2e8f0',
                                                        '--color-3': '#cbd5e1',
                                                        '--color-4': '#94a3b8',
                                                        '--color-5': '#f1f5f9',
                                                    } as React.CSSProperties}
                                                >
                                                    <span className="flex items-center justify-center gap-2 uppercase tracking-tight text-base font-black text-black/90 drop-shadow-sm">
                                                        View Complete Case
                                                        <ArrowRight className="w-5 h-5 ml-1 stroke-[3px]" />
                                                    </span>
                                                </RainbowButton>
                                            </div>
                                        </div>

                                        <div className="order-1 md:order-2 relative aspect-video md:aspect-square lg:aspect-video rounded-lg overflow-hidden border border-border/10 shadow-2xl transform-gpu h-full min-h-[300px]" style={{ transform: "translateZ(30px)" }}>
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
                                    <Card className="h-full bg-card/40 border-border/10 backdrop-blur-sm hover:bg-card/60 transition-all duration-300 hover:border-primary/20 overflow-hidden flex flex-col">
                                        <div className="relative h-56 w-full overflow-hidden border-b border-border/10 transform-gpu shrink-0" style={{ transform: "translateZ(20px)" }}>
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

                                        <CardContent className="flex flex-col flex-grow justify-between p-6 transform-gpu" style={{ transform: "translateZ(10px)" }}>
                                            <div className="space-y-4">
                                                {/* Tags moved to top */}
                                                <div className="flex flex-wrap gap-2">
                                                    {project.tags.map((tag) => (
                                                        <Badge key={tag} variant="outline" className="bg-primary/5 text-muted-foreground border-border/10">
                                                            {tag}
                                                        </Badge>
                                                    ))}
                                                </div>

                                                <div>
                                                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                                        {project.title}
                                                    </h3>
                                                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                                                        {project.description}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Distinct action area */}
                                            <div className="mt-8 pt-6 border-t border-border/5">
                                                <RainbowButton className="w-full h-12 !text-black bg-gradient-to-b from-slate-100 via-slate-200 to-slate-400 border border-t-white/60 border-b-slate-500/30 shadow-[0_2px_10px_-2px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.6),0_0_15px_rgba(255,255,255,0.4)_inset] transition-all duration-500 group-hover:scale-[1.02] active:scale-[0.98]">
                                                    <span className="flex items-center justify-center gap-2 w-full uppercase tracking-tight text-sm font-black text-black/80 group-hover:text-black">
                                                        View Complete Case
                                                        <ArrowRight className="w-5 h-5 opacity-100 translate-x-0 group-hover:translate-x-1 transition-transform stroke-[2.5px]" />
                                                    </span>
                                                </RainbowButton>
                                            </div>
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
