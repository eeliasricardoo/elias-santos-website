'use client';
import { motion } from 'framer-motion';

export function HeroPhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="relative hidden lg:flex justify-center items-center"
    >
      {/* Lime glow blob behind photo */}
      <div className="absolute inset-0 bg-electric/10 rounded-3xl blur-3xl scale-90 pointer-events-none" />

      {/* Photo container */}
      <div className="relative w-[400px] h-[500px] rounded-2xl overflow-hidden border border-border/40 group">
        {/* Corner label */}
        <div className="absolute top-4 right-4 font-mono text-xs text-electric/60 z-10 tracking-widest">
          ER_
        </div>

        <picture>
          <source srcSet="/optimized/profile-photo.avif" type="image/avif" />
          <source srcSet="/optimized/profile-photo.webp" type="image/webp" />
          <img
            src="/profile-photo.webp"
            alt="Elias Ricardo — UX/UI Designer"
            className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
            loading="eager"
            fetchPriority="high"
            width={400}
            height={500}
          />
        </picture>

        {/* Gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background/90 to-transparent" />

        {/* Bottom info strip */}
        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between z-10">
          <span className="font-mono text-xs uppercase tracking-widest text-electric/80">
            Elias Ricardo
          </span>
          <span className="font-mono text-xs text-muted-foreground/60">UX/UI Designer</span>
        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute -right-5 top-1/4 h-1/2 w-px bg-gradient-to-b from-transparent via-electric/25 to-transparent" />
      {/* Decorative horizontal line */}
      <div className="absolute -bottom-5 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-electric/25 to-transparent" />
    </motion.div>
  );
}
