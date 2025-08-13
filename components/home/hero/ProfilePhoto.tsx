'use client';

import Image from 'next/image';

export function ProfilePhoto() {
  return (
    <div className='relative z-10 flex justify-center mb-8'>
      <div className='relative'>
        {/* Container da foto */}
        <div className='relative w-48 h-48 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-border/30 shadow-2xl'>
          <Image
            src='/profile-photo.png'
            alt='Elias Ricardo - UX/UI Designer & Frontend'
            fill
            className='object-cover object-center'
            priority
            sizes='(max-width: 768px) 128px, 192px'
            quality={85}
            placeholder='blur'
            blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
          />
        </div>

        {/* Efeito de borda animada - versão simplificada */}
        <div className='absolute -inset-1 border-2 border-border/20 rounded-full opacity-0 animate-in fade-in duration-1000 delay-500' />
      </div>
    </div>
  );
}
