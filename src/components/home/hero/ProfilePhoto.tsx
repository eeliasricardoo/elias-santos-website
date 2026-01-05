import { motion } from 'framer-motion';
import { useMounted } from '@/hooks/use-mounted';
import { AnimatedBadge } from '../ui';
import { HERO_CONTENT } from '@/constants/content';

export function ProfilePhoto() {
  const mounted = useMounted();

  return (
    <div className='relative z-10 flex flex-col items-center mb-8'>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 0.8,
        }}
        className='relative transition-transform hover:scale-105'
      >
        {/* Container da foto */}
        <div className='relative w-32 h-32 md:w-32 md:h-32 aspect-square rounded-full overflow-hidden shadow-2xl bg-muted/20'>
          <img
            src={HERO_CONTENT.profile.imgSrc}
            alt={HERO_CONTENT.profile.alt}
            className='object-contain w-full h-full'
            loading='eager'
            fetchPriority='high'
            decoding='async'
            width={128}
            height={128}
          />
        </div>
      </motion.div>

      {/* ✅ Nome abaixo da foto */}
      {mounted && (
        <motion.div
          className='mt-6 pt-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <AnimatedBadge text={HERO_CONTENT.profile.name} animationDelay={0} />
        </motion.div>
      )}
    </div>
  );
}
