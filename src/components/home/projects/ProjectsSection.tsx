
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RainbowButton } from '@/components/magicui/rainbow-button';

const projects = [
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <a href={project.link} className="block h-full group">
                            <Card className="h-full bg-zinc-900/40 border-white/10 backdrop-blur-sm hover:bg-zinc-900/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 overflow-hidden">
                                <div className="relative h-48 w-full overflow-hidden border-b border-white/5">
                                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <CardContent className="flex flex-col justify-between p-6 h-[calc(100%-192px)]">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-zinc-400 mb-6 line-clamp-2">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tags.map((tag) => (
                                                <Badge key={tag} variant="outline" className="bg-white/5 text-zinc-300 border-white/10">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                    <RainbowButton className="w-full text-sm h-10 !text-black font-bold">View Case Study</RainbowButton>
                                </CardContent>
                            </Card>
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
