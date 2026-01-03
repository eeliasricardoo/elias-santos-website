'use client';

import { motion } from 'framer-motion';

export function FutureIllustration() {
    return (
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto mt-12 mb-8 perspective-1000">
            {/* Central Glowing Core */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="w-32 h-32 rounded-full bg-primary/20 blur-3xl animate-pulse" />
            </motion.div>

            {/* Orbiting Rings */}
            <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.circle
                    cx="200"
                    cy="200"
                    r="100"
                    stroke="hsl(var(--primary))"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
                    animate={{ rotate: 360, scale: 1, opacity: 0.4 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.circle
                    cx="200"
                    cy="200"
                    r="140"
                    stroke="hsl(var(--primary))"
                    strokeWidth="0.5"
                    initial={{ rotate: 360, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 0.2 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
                <motion.circle
                    cx="200"
                    cy="200"
                    r="180"
                    stroke="hsl(var(--primary))"
                    strokeWidth="0.5"
                    strokeDasharray="10 10"
                    initial={{ rotate: 0, opacity: 0 }}
                    animate={{ rotate: -360, opacity: 0.1 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />

                {/* Floating Particles */}
                {[...Array(6)].map((_, i) => (
                    <motion.circle
                        key={i}
                        cx="200"
                        cy="200"
                        r="3"
                        fill="hsl(var(--primary))"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 1, 0],
                            x: Math.cos(i * 60 * (Math.PI / 180)) * 120,
                            y: Math.sin(i * 60 * (Math.PI / 180)) * 120,
                            scale: [0.5, 1.2, 0.5]
                        }}
                        transition={{
                            duration: 3 + Math.random(),
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.5
                        }}
                    />
                ))}

                {/* Dynamic Lines */}
                <motion.path
                    d="M200 100 L200 300 M100 200 L300 200"
                    stroke="hsl(var(--primary))"
                    strokeWidth="0.5"
                    strokeOpacity="0.2"
                    initial={{ pathLength: 0, rotate: 45 }}
                    animate={{ pathLength: 1, rotate: 225 }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
                />
            </svg>

            {/* Futuristic Grid Plane (Bottom) */}
            <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[200px] bg-[linear-gradient(to_bottom,transparent_0%,hsl(var(--primary))_0.5px,transparent_1px)] bg-[size:100%_20px] opacity-10"
                style={{
                    maskImage: 'linear-gradient(to bottom, transparent, black 80%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 80%)',
                    transform: 'perspective(500px) rotateX(60deg) translateY(100px)'
                }}
                animate={{
                    backgroundPosition: ["0px 0px", "0px 40px"]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
        </div>
    );
}
