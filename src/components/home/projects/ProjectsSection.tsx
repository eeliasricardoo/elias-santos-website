import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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

                        <a href={project.link} className="block group">
                            <Card className="relative bg-[#0a0a0a] border-border/10 overflow-hidden rounded-xl h-full hover:border-border/20 transition-colors duration-300">
                                <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8 items-center h-full">
                                    <div className="order-2 md:order-1 flex flex-col justify-center h-full">
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tags.map((tag) => (
                                                <Badge key={tag} variant="outline" className="bg-transparent text-muted-foreground border-border/10 px-3 py-1">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>

                                        <div className="mb-8">
                                            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                                {project.title}
                                            </h3>
                                            <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-6 border-l-2 border-border/30 pl-4 py-1">
                                                "Want to know how I reduced CRM production time by <span className="text-white font-semibold">87.5%</span>?"
                                            </p>
                                            <p className="text-zinc-400 text-lg leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>

                                        <div className="mt-auto pt-6">
                                            <button className="inline-flex items-center gap-2 text-sm font-medium text-white border-b border-white/30 pb-1 hover:border-white transition-colors">
                                                View complete case
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="order-1 md:order-2 relative aspect-video md:aspect-square lg:aspect-video rounded-lg overflow-hidden border border-border/10 h-full min-h-[300px]">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover object-top"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>
                                </div>
                            </Card>
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
                                <Card className="h-full bg-[#0a0a0a] border-border/10 hover:border-border/20 transition-colors duration-300 overflow-hidden flex flex-col">
                                    <div className="relative h-56 w-full overflow-hidden border-b border-border/10 shrink-0">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover object-top"
                                            loading="lazy"
                                            decoding="async"
                                            width="800"
                                            height="404"
                                        />
                                    </div>

                                    <CardContent className="flex flex-col flex-grow justify-between p-6">
                                        <div className="space-y-4">
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map((tag) => (
                                                    <Badge key={tag} variant="outline" className="bg-transparent text-muted-foreground border-border/10">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>

                                            <div>
                                                <h3 className="text-2xl font-bold text-foreground mb-3">
                                                    {project.title}
                                                </h3>
                                                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                                                    {project.description}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-8 pt-6 border-t border-border/5">
                                            <span className="inline-flex items-center gap-2 text-sm font-medium text-white border-b border-white/30 pb-1 group-hover:border-white transition-colors">
                                                View complete case
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
