'use client';

import { motion } from 'framer-motion';

export function FutureIllustration() {
    return (
        <div className="relative w-full max-w-2xl mx-auto h-[300px] mt-12 flex items-center justify-center overflow-hidden">
            {/* Grid de fundo com perspectiva */}
            <div className="absolute inset-0 preserve-3d">
                <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: 'linear-gradient(0deg, transparent 24%, var(--color-primary-500) 25%, var(--color-primary-500) 26%, transparent 27%, transparent 74%, var(--color-primary-500) 75%, var(--color-primary-500) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, var(--color-primary-500) 25%, var(--color-primary-500) 26%, transparent 27%, transparent 74%, var(--color-primary-500) 75%, var(--color-primary-500) 76%, transparent 77%, transparent)',
                        backgroundSize: '30px 30px',
                        transform: 'perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px)',
                    }}
                    animate={{
                        backgroundPosition: ['0px 0px', '0px 30px']
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>

            {/* Círculo central "Portal" */}
            <div className="relative z-10 w-48 h-48">
                {/* Glow externo */}
                <motion.div
                    className="absolute inset-0 rounded-full blur-xl bg-primary/20"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Anéis orbitais */}
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute inset-0 rounded-full border border-primary/30"
                        style={{
                            borderWidth: '1px',
                            borderStyle: i === 1 ? 'dashed' : 'solid'
                        }}
                        animate={{
                            rotate: i % 2 === 0 ? 360 : -360,
                            scale: [1, 1.05 + i * 0.05, 1],
                        }}
                        transition={{
                            rotate: {
                                duration: 10 + i * 5,
                                repeat: Infinity,
                                ease: "linear"
                            },
                            scale: {
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.5
                            }
                        }}
                    />
                ))}

                {/* Núcleo central */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 backdrop-blur-sm flex items-center justify-center">
                    <motion.div
                        className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_var(--color-primary)]"
                        animate={{
                            opacity: [0.5, 1, 0.5],
                            scale: [0.8, 1.2, 0.8]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity
                        }}
                    />
                </div>

                {/* Orbiting particles */}
                <motion.div
                    className="absolute inset-0"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                    <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary rounded-full blur-[1px] -translate-x-1/2 -translate-y-1/2" />
                </motion.div>
            </div>

            {/* Floating UI Elements */}
            <motion.div
                className="absolute left-10 bottom-10 px-3 py-1 bg-background/50 backdrop-blur-md border border-primary/20 rounded text-[10px] text-primary/80 font-mono"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                SYSTEM_ONLINE
            </motion.div>

            <motion.div
                className="absolute right-10 top-10 px-3 py-1 bg-background/50 backdrop-blur-md border border-primary/20 rounded text-[10px] text-primary/80 font-mono"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
            >
                SYNC_RATE: 99.9%
            </motion.div>
        </div>
    );
}
