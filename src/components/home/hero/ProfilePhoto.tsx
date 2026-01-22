import { AnimatedBadge } from '../ui';
import { HERO_CONTENT } from '@/constants/content';

export function ProfilePhoto() {
  return (
    <div className='relative z-10 flex flex-col items-center mb-4'>
      <div
        className='relative will-change-transform animate-in fade-in zoom-in-50 duration-1000 ease-out'
        style={{ transform: 'translateZ(0)' }}
      >
        {/* Container da foto */}
        <div className='relative w-32 h-32 md:w-32 md:h-32 aspect-square rounded-full overflow-hidden shadow-2xl bg-muted/20 transition-transform hover:scale-105 will-change-transform'>
          {/* Using picture element with optimized formats */}
          <picture>
            {/* AVIF for best compression (~21KB from optimized) */}
            <source
              srcSet="/optimized/profile-photo.avif"
              type="image/avif"
            />
            {/* WebP for broad support (~14KB from optimized) */}
            <source
              srcSet="/optimized/profile-photo.webp"
              type="image/webp"
            />
            {/* Fallback to original (only for very old browsers) */}
            <img
              src="/profile-photo.webp"
              alt={HERO_CONTENT.profile.alt}
              className='object-contain w-full h-full'
              loading='eager'
              fetchPriority='high'
              decoding='sync'
              width={128}
              height={128}
            />
          </picture>
        </div>
      </div>

      {/* ✅ Nome abaixo da foto */}
      <div
        className='mt-4 animate-in fade-in slide-in-from-bottom-4 duration-300 fill-mode-forwards'
      >
        <AnimatedBadge text={HERO_CONTENT.profile.name} animationDelay={0} />
      </div>
    </div>
  );
}
