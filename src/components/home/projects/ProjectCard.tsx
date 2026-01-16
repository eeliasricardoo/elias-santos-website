import { Card, CardContent } from '@/components/ui/card';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import { AnimatedMockup } from '../portfolio/AnimatedMockup';
import { useCallback, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface ProjectCardProps {
    project: {
        id: number;
        title: string;
        description: string;
        buttonText: string;
    };
    index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    // Motion values for tilt effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Spring physics for smooth animation
    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    // Transform mouse position to rotation
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

    // Dynamic glare effect based on mouse position
    const glareX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
    const glareY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseXFromCenter = e.clientX - rect.left - width / 2;
        const mouseYFromCenter = e.clientY - rect.top - height / 2;

        // Normalize values to -0.5 to 0.5 range
        const xPct = mouseXFromCenter / width;
        const yPct = mouseYFromCenter / height;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const getRoute = useCallback((): string => {
        switch (index) {
            case 0:
                return '/portfolio/ventuschat';
            case 1:
                return '/portfolio/carousel-builder';
            case 2:
                return '/portfolio/ranking';
            case 3:
                return '/portfolio/support-queue';
            default:
                return '/portfolio/ventuschat';
        }
    }, [index]);

    const handleCardClick = () => {
        const route = getRoute();
        window.location.href = route;
    };

    const handleButtonClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        const route = getRoute();
        window.location.href = route;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ perspective: 1000 }}
            className="w-full max-w-5xl mx-auto"
        >
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={handleCardClick}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="relative group cursor-pointer"
            >
                {/* Background Glow */}
                <div className='absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/5 to-transparent blur-3xl rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

                <Card className='border-border/50 bg-card/90 backdrop-blur-xl shadow-2xl overflow-hidden relative'>

                    {/* Dynamic Glare Effect overlay */}
                    <motion.div
                        className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"
                        style={{
                            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.15) 0%, transparent 80%)`
                        }}
                    />

                    <CardContent className='p-6 md:p-8 lg:p-10 xl:p-12'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 xl:gap-12 items-center'>
                            <div className='space-y-6 md:space-y-8 lg:space-y-10 order-1 transform-gpu translate-z-10' style={{ transform: "translateZ(20px)" }}>
                                <div className='space-y-4 md:space-y-5 lg:space-y-6'>
                                    <h3 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-foreground leading-tight'>
                                        {project.title}
                                    </h3>
                                    <p className='text-muted-foreground leading-relaxed text-base md:text-lg lg:text-xl font-light max-w-lg'>
                                        {project.description}
                                    </p>
                                </div>

                                <div className='w-full'>
                                    <RainbowButton
                                        size='lg'
                                        variant='outline'
                                        className='w-full h-12 text-base font-medium shadow-2xl'
                                        onClick={handleButtonClick}
                                    >
                                        {project.buttonText}
                                    </RainbowButton>
                                </div>
                            </div>

                            <div className='relative w-full order-2 h-[320px] md:h-[380px] lg:h-[460px] xl:h-[500px] overflow-hidden rounded-xl bg-gradient-to-br from-muted/20 to-muted/10 border border-border/20 transform-gpu' style={{ transform: "translateZ(30px)" }}>
                                <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5' />
                                <AnimatedMockup
                                    type={
                                        index === 0
                                            ? 'ventus-chat'
                                            : index === 1
                                                ? 'carousel-builder'
                                                : index === 2
                                                    ? 'ranking'
                                                    : 'support-queue'
                                    }
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </motion.div>
    );
}
