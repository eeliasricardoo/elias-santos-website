'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function ProfilePhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: -20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
      className='relative z-10 flex justify-center mb-8'
    >
      <div className='relative'>
        {/* Container da foto */}
        <div className='relative w-48 h-48 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-border/30 shadow-2xl'>
          <Image
            src='/profile-photo.png'
            alt='Elias Santos - UX/UI Designer & Frontend'
            fill
            className='object-cover object-center'
            priority
          />
        </div>

        {/* Efeito de borda animada */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className='absolute -inset-1 border-2 border-border/20 rounded-full'
        />
      </div>
    </motion.div>
  );
}
