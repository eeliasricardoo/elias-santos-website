'use client';
import { motion, MotionValue, useTransform } from 'framer-motion';

export function HowIWorkVisuals({ progress }: { progress: MotionValue<number> }) {
  // Map the scroll progress (0 to 1) to opacity and scale for the 4 steps
  const op1 = useTransform(progress, [0, 0.2, 0.3], [1, 1, 0]);
  const op2 = useTransform(progress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const op3 = useTransform(progress, [0.45, 0.55, 0.7, 0.8], [0, 1, 1, 0]);
  const op4 = useTransform(progress, [0.7, 0.8, 1], [0, 1, 1]);

  const scale1 = useTransform(progress, [0, 0.3], [1, 1.2]);
  const scale2 = useTransform(progress, [0.2, 0.55], [0.8, 1.1]);
  const scale3 = useTransform(progress, [0.45, 0.8], [0.8, 1.1]);
  const scale4 = useTransform(progress, [0.7, 1], [0.8, 1]);

  return (
    <div className="relative w-full aspect-square max-w-md mx-auto md:max-w-lg lg:max-w-full lg:h-[600px] lg:aspect-auto">
      {/* Common container for the absolute elements */}
      <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-16">
        
        {/* Step 1 Visual: Research / Problem (Abstract Dots/Clusters) */}
        <motion.div style={{ opacity: op1, scale: scale1 }} className="absolute inset-0 flex items-center justify-center">
           <div className="relative w-full h-full max-h-[400px] max-w-[400px] border border-electric/20 rounded-full flex items-center justify-center shadow-[inset_0_0_50px_rgba(204,255,0,0.05)]">
              <div className="absolute w-[80%] h-[80%] border border-electric/10 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute w-[60%] h-[60%] border border-electric/40 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              <div className="w-32 h-32 bg-electric/10 blur-2xl rounded-full" />
              <div className="w-6 h-6 bg-electric rounded-full shadow-[0_0_30px_#ccff00] animate-pulse" />
           </div>
        </motion.div>

        {/* Step 2 Visual: Wireframes/Decisions (Grid Lines) */}
        <motion.div style={{ opacity: op2, scale: scale2 }} className="absolute inset-0 flex items-center justify-center">
           <div className="relative w-full max-h-[400px] max-w-[400px] aspect-square grid grid-cols-3 grid-rows-3 gap-4">
             {[...Array(9)].map((_, i) => (
               <div key={i} className={`border border-border/40 rounded-xl transition-all duration-1000 ${i === 4 ? 'bg-electric/20 border-electric/60 shadow-[0_0_30px_rgba(204,255,0,0.2)] scale-105' : 'bg-foreground/[0.02]'}`} />
             ))}
           </div>
        </motion.div>

        {/* Step 3 Visual: Prototype/Code (Floating Blocks) */}
        <motion.div style={{ opacity: op3, scale: scale3 }} className="absolute inset-0 flex items-center justify-center">
           <div className="relative w-full max-h-[400px] max-w-[500px] aspect-video bg-background border border-border/30 rounded-2xl overflow-hidden flex flex-col p-6 gap-4 shadow-2xl relative z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-electric/5 to-transparent pointer-events-none" />
              <div className="w-1/3 h-6 bg-border/40 rounded-md" />
              <div className="w-2/3 h-4 bg-border/20 rounded-md" />
              <div className="w-1/2 h-4 bg-border/20 rounded-md" />
              <div className="mt-auto w-full h-28 bg-foreground/[0.03] border border-border/40 rounded-lg flex items-center justify-center relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-electric to-transparent opacity-50" />
                 <div className="w-12 h-12 rounded-full border-2 border-border/50 border-t-electric animate-spin" />
              </div>
           </div>
        </motion.div>

        {/* Step 4 Visual: Measure/Iterate (Analytics Chart) */}
        <motion.div style={{ opacity: op4, scale: scale4 }} className="absolute inset-0 flex items-center justify-center">
           <div className="relative w-full max-h-[400px] max-w-[500px] aspect-video flex items-end gap-3 p-8 border-b-2 border-l-2 border-border/50">
             {[30, 45, 25, 60, 80, 50, 95].map((h, i) => (
               <motion.div 
                 key={i}
                 initial={{ height: '0%' }}
                 animate={{ height: `${h}%` }}
                 transition={{ duration: 1.5, delay: i * 0.1, ease: 'easeOut', repeat: Infinity, repeatType: 'reverse', repeatDelay: 2 }}
                 className={`w-full rounded-t-sm ${i === 6 ? 'bg-electric shadow-[0_0_20px_#ccff00]' : 'bg-foreground/20'}`}
               />
             ))}
           </div>
        </motion.div>

      </div>
    </div>
  );
}
