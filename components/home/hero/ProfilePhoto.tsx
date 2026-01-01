'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useMounted } from '@/hooks/use-mounted';
import { AnimatedBadge } from '../ui';

export function ProfilePhoto() {
  const mounted = useMounted();

  return (
    <div className='relative z-10 flex flex-col items-center mb-8'>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: 'easeOut',
        }}
        className='relative'
      >
        {/* Container da foto */}
        <div className='relative w-32 h-32 md:w-32 md:h-32 aspect-square rounded-full overflow-hidden shadow-2xl'>
          <Image
            src='/profile-photo.jpg'
            alt='Elias Ricardo - UX/UI Designer & Frontend'
            fill
            className='object-cover'
            style={{ transform: 'translateX(2px)' }}
            priority
            sizes='(max-width: 768px) 128px, 192px'
            quality={90}
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
          <AnimatedBadge text='Elias Ricardo' animationDelay={0} />
        </motion.div>
      )}
    </div>
  );
}
