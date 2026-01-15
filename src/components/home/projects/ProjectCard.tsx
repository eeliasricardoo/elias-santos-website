
import { Card, CardContent } from '@/components/ui/card';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import { AnimatedMockup } from '../portfolio/AnimatedMockup';
import { useCallback } from 'react';

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
        // Use native navigation for better performance
        const route = getRoute();
        window.location.href = route;
    };

    const handleButtonClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        const route = getRoute();
        window.location.href = route;
    };

    return (
        <div
            className="w-full max-w-5xl mx-auto opacity-0 translate-y-5 animate-fade-in-up"
            style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards',
            }}
        >
            <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:200%_100%] blur-3xl rounded-3xl transform scale-110 -z-10 opacity-0 group-hover:opacity-100 group-hover:animate-shine transition-all duration-500' />

            <Card
                className='border-border/50 bg-card/90 backdrop-blur-xl shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:scale-[1.01] transition-all duration-300 relative z-10 group cursor-pointer overflow-hidden'
                onClick={handleCardClick}
            >
                <CardContent className='p-6 md:p-8 lg:p-10 xl:p-12'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 xl:gap-12 items-center'>
                        <div className='space-y-6 md:space-y-8 lg:space-y-10 order-1'>
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

                        <div className='relative w-full order-2 h-[320px] md:h-[380px] lg:h-[460px] xl:h-[500px] overflow-hidden rounded-xl bg-gradient-to-br from-muted/20 to-muted/10 border border-border/20'>
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
        </div>
    );
}
