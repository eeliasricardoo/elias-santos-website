
import { ArrowDown } from 'lucide-react';

export function HeroScrollPrompt() {
    return (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
            {/* Text Label with shimmer effect */}
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground/80 font-medium animate-pulse">
                Scroll to Explore
            </span>

            {/* Premium Mouse/Scroll Indicator */}
            <div className="relative group cursor-pointer transition-transform hover:scale-110 active:scale-95">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Border/Glass Container */}
                <div className="flex h-12 w-8 items-start justify-center rounded-full border border-primary/20 bg-background/50 backdrop-blur-sm p-1.5 shadow-lg shadow-primary/5 ring-1 ring-white/10">
                    {/* Animated Scroll Wheel */}
                    <div className="h-1.5 w-1 rounded-full bg-primary animate-scroll-wheel" />
                </div>
            </div>

            {/* Decorative arrow that appears on hover */}
            <div className="absolute -bottom-8 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-primary/50">
                <ArrowDown className="w-4 h-4 animate-bounce" />
            </div>
        </div>
    );
}
