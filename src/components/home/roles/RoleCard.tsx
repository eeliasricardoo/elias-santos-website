
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';
import { Badge } from '@/components/ui/badge';
import { useInViewOnce } from '@/hooks/use-optimized-inview';

interface RoleCardProps {
    role: {
        id: number;
        title: string;
        description: string;
        skills: { name: string; description: string; usage?: string }[];
    };
    index: number;
    totalCards: number;
}

export function RoleCard({ role, index, totalCards }: RoleCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const isMobile = useIsMobile();
    const { ref: inViewRef, isInView } = useInViewOnce({ rootMargin: '0px' });

    const isLastCard = index === totalCards - 1;

    return (
        <div
            ref={(node) => {
                cardRef.current = node;
                (inViewRef as any).current = node;
            }}
            style={{
                top: `calc(10vh + ${index * 30}px)`,
                zIndex: index,
            }}
            className={`sticky w-full max-w-5xl mx-auto group transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
        >
            <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:200%_100%] blur-3xl rounded-3xl transform scale-110 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

            <Card
                className='border-white/5 bg-black/90 backdrop-blur-xl shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:scale-[1.01] transition-all duration-300 relative z-10 group cursor-default h-[500px]'
            >
                <CardContent className='p-6 md:p-8 lg:p-10 xl:p-12 transition-all duration-500 h-full flex items-center'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 xl:gap-12 items-center w-full'>
                        <div
                            className='space-y-6 md:space-y-8 lg:space-y-10'
                        >
                            <div className='space-y-4 md:space-y-5 lg:space-y-6'>
                                <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight'>
                                    {role.title}
                                </h3>
                                <p className='text-muted-foreground leading-relaxed text-lg md:text-xl lg:text-2xl font-light max-w-lg'>
                                    {role.description}
                                </p>
                            </div>
                        </div>

                        <div
                            className='relative w-full h-full flex flex-col justify-center items-start gap-4'
                        >
                            <div className="flex flex-wrap gap-3">
                                {role.skills.map((skill) => (
                                    <Badge
                                        key={skill.name}
                                        variant="outline"
                                        className="text-lg py-2 px-4 bg-white/5 text-zinc-300 border-white/10"
                                    >
                                        {skill.name}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
