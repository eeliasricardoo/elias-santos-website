'use client';



export function FutureIllustration() {
    return (
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto mt-12 mb-8 perspective-1000">
            {/* Central Glowing Core - Static Pulse */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-primary/20 blur-3xl animate-pulse" />
            </div>

            {/* Static Rings for decoration */}
            <svg className="w-full h-full opacity-30" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle
                    cx="200"
                    cy="200"
                    r="100"
                    stroke="hsl(var(--primary))"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    className="opacity-40"
                />
                <circle
                    cx="200"
                    cy="200"
                    r="140"
                    stroke="hsl(var(--primary))"
                    strokeWidth="0.5"
                    className="opacity-20"
                />
                <circle
                    cx="200"
                    cy="200"
                    r="180"
                    stroke="hsl(var(--primary))"
                    strokeWidth="0.5"
                    strokeDasharray="10 10"
                    className="opacity-10"
                />
            </svg>
        </div>
    );
}
