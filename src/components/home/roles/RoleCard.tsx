
import { useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';
import { Badge } from '@/components/ui/badge';
import { useInViewOnce } from '@/hooks/use-optimized-inview';
import { motion } from 'framer-motion';
import { Info, RotateCw } from 'lucide-react';

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
    const [isFlipped, setIsFlipped] = useState(false);
    const isMobile = useIsMobile();
    const { ref: inViewRef, isInView } = useInViewOnce({ rootMargin: '0px' });

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div
            ref={(node) => {
                cardRef.current = node;
                (inViewRef as any).current = node;
            }}
            style={{
                top: `calc(10vh + ${index * 30}px)`,
                zIndex: index,
                perspective: '1000px',
                scrollMarginTop: `calc(10vh + ${index * 30}px)`,
            }}
            className={`sticky w-full max-w-5xl mx-auto group transition-[opacity,transform] duration-700 h-[500px] will-change-transform snap-start ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
        >
            <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:200%_100%] blur-3xl rounded-3xl transform scale-110 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

            <motion.div
                className="relative w-full h-full cursor-pointer"
                onClick={handleFlip}
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* FRONT FACE */}
                <Card
                    className='absolute inset-0 border-border/50 bg-card/90 backdrop-blur-xl shadow-2xl hover:shadow-primary/20 transition-all duration-300 w-full h-full'
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    <CardContent className='p-6 md:p-8 lg:p-10 xl:p-12 h-full flex items-center relative'>
                        {/* Hint to flip */}
                        <div className="absolute top-6 right-6 text-muted-foreground/50 flex items-center gap-2 text-sm">
                            <span className="hidden group-hover:inline-block transition-opacity">Click for details</span>
                            <Info className="w-5 h-5" />
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 xl:gap-12 items-center w-full'>
                            <div className='space-y-6 md:space-y-8 lg:space-y-10'>
                                <div className='space-y-4 md:space-y-5 lg:space-y-6'>
                                    <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight'>
                                        {role.title}
                                    </h3>
                                    <p className='text-muted-foreground leading-relaxed text-lg md:text-xl lg:text-2xl font-light max-w-lg'>
                                        {role.description}
                                    </p>
                                </div>
                            </div>

                            <div className='relative w-full h-full flex flex-col justify-center items-start gap-4'>
                                <div className="flex flex-wrap gap-3">
                                    {role.skills.map((skill) => (
                                        <Badge
                                            key={skill.name}
                                            variant="outline"
                                            className="text-lg py-2 px-4 bg-primary/5 text-muted-foreground border-border/10"
                                        >
                                            {skill.name}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* BACK FACE */}
                <Card
                    className='absolute inset-0 border-border/50 bg-card/95 backdrop-blur-xl shadow-2xl w-full h-full'
                    style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                    }}
                >
                    <CardContent className='p-6 md:p-8 lg:p-10 h-full flex flex-col relative overflow-hidden'>
                        <div className="absolute top-6 right-6 text-muted-foreground/50 hover:text-primary transition-colors">
                            <RotateCw className="w-5 h-5" />
                        </div>

                        <h4 className="text-2xl font-bold mb-6 text-foreground/80">Skill Breakdown</h4>

                        <div className="overflow-y-auto pr-4 space-y-4 flex-1">
                            {role.skills.map((skill, i) => (
                                <div key={i} className="group/item p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                                    <div className="flex items-baseline justify-between mb-1">
                                        <h5 className="text-lg font-semibold text-primary">{skill.name}</h5>
                                    </div>
                                    <p className="text-sm font-medium text-muted-foreground mb-2 italic">
                                        {skill.description}
                                    </p>
                                    {skill.usage && (
                                        <p className="text-sm text-foreground/80 leading-relaxed">
                                            {skill.usage}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}
