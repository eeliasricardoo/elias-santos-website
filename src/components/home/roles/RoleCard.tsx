
import { useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';
import { Badge } from '@/components/ui/badge';
import { useInViewOnce } from '@/hooks/use-optimized-inview';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
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
    const [isHovering, setIsHovering] = useState(false);
    const isMobile = useIsMobile();
    const { ref: inViewRef, isInView } = useInViewOnce({ rootMargin: '0px' });

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rafRef = useRef<number | null>(null);
    const pendingCoords = useRef<{ x: number; y: number } | null>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        pendingCoords.current = {
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100,
        };
        if (rafRef.current !== null) return;
        rafRef.current = requestAnimationFrame(() => {
            rafRef.current = null;
            if (!pendingCoords.current) return;
            mouseX.set(pendingCoords.current.x);
            mouseY.set(pendingCoords.current.y);
        });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
        setIsHovering(false);
        if (rafRef.current !== null) {
            cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
        }
    };

    // Create dynamic background templates
    const backgroundFront = useMotionTemplate`radial-gradient(800px circle at ${mouseX}% ${mouseY}%, rgba(255,255,255,0.1), transparent 40%)`;
    const backgroundBack = useMotionTemplate`radial-gradient(800px circle at ${mouseX}% ${mouseY}%, rgba(255,255,255,0.1), transparent 40%)`;

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
                perspective: '1000px',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={isHovering ? handleMouseMove : undefined}
            className={`relative w-full group transition-[opacity,transform] duration-700 h-[520px] ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
        >
            {/* Old background effect removed */}

            <motion.div
                className="preserve-3d relative w-full h-full cursor-pointer"
                onClick={handleFlip}
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
            >
                {/* FRONT FACE */}
                <Card
                    className='backface-hidden absolute inset-0 border-border/50 bg-[#0a0a0a] shadow-2xl hover:shadow-primary/20 transition-all duration-300 w-full h-full overflow-hidden'
                >
                    <CardContent className='p-6 md:p-8 h-full flex flex-col relative'>
                        {/* Hint to flip */}
                        <div className="absolute top-6 right-6 text-muted-foreground/50 flex items-center gap-2 text-sm">
                            <Info className="w-5 h-5" />
                        </div>

                        <div className='flex flex-col h-full gap-6'>
                            <div className='space-y-3'>
                                <h3 className='text-2xl md:text-3xl font-bold text-foreground leading-tight'>
                                    {role.title}
                                </h3>
                                <p className='text-muted-foreground leading-relaxed text-base md:text-lg font-light'>
                                    {role.description}
                                </p>
                            </div>

                            <div className='mt-auto flex flex-wrap gap-2'>
                                {role.skills.map((skill) => (
                                    <Badge
                                        key={skill.name}
                                        variant="outline"
                                        className="text-sm py-1.5 px-3 bg-primary/5 text-muted-foreground border-border/10"
                                    >
                                        {skill.name}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </CardContent>

                    {/* Spotlight Overlay - Front */}
                    {isHovering && (
                        <motion.div
                            className="pointer-events-none absolute inset-0 z-50 rounded-xl"
                            style={{
                                background: backgroundFront
                            }}
                        />
                    )}
                </Card>

                {/* BACK FACE */}
                <Card
                    className='backface-hidden absolute inset-0 border-border/50 bg-[#0a0a0a] shadow-2xl w-full h-full'
                    style={{
                        transform: 'rotateY(180deg)'
                    }}
                >
                    <CardContent className='p-6 md:p-8 lg:p-10 h-full flex flex-col relative overflow-hidden'>
                        <div className="absolute top-6 right-6 text-muted-foreground/50 hover:text-primary transition-colors">
                            <RotateCw className="w-5 h-5" />
                        </div>

                        <h4 className="text-2xl font-bold mb-6 text-foreground/80">Skill Breakdown</h4>

                        <div className="overflow-y-auto pr-2 pb-2 space-y-4 flex-1 scrollbar-thin pl-1">
                            {role.skills.map((skill, i) => (
                                <div key={i} className="group/item p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 last:mb-2">
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

                    {/* Spotlight Overlay - Back (Mirrored X) */}
                    {isHovering && (
                        <motion.div
                            className="pointer-events-none absolute inset-0 z-50 rounded-xl"
                            style={{
                                background: backgroundBack
                            }}
                        />
                    )}
                </Card>
            </motion.div>
        </div>
    );
}
