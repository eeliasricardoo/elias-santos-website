'use client';

import { useState } from 'react';
import Image from 'next/image';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cn } from '@/lib/utils';
import { ZoomIn, X } from 'lucide-react';

interface ImageLightboxProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  children?: React.ReactNode;
}

export function ImageLightbox({
  src,
  alt,
  width = 800,
  height = 600,
  className,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px',
  quality = 85,
  children,
}: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <DialogPrimitive.Trigger asChild>
        <div className='group relative cursor-pointer overflow-hidden rounded-lg'>
          {children || (
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className={cn(
                'w-full h-full object-cover transition-transform duration-300 group-hover:scale-105',
                className
              )}
              priority={priority}
              sizes={sizes}
              quality={quality}
            />
          )}
          <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center'>
            <ZoomIn className='w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
          </div>
        </div>
      </DialogPrimitive.Trigger>

      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className='fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0' />
        <DialogPrimitive.Content className='fixed left-[50%] top-[50%] z-50 w-[95vw] h-[95vh] translate-x-[-50%] translate-y-[-50%] border-0 bg-transparent data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95'>
          <DialogPrimitive.Title className='sr-only'>
            Visualização ampliada da imagem: {alt}
          </DialogPrimitive.Title>
          <div className='relative w-full h-full flex items-center justify-center'>
            <button
              onClick={() => setIsOpen(false)}
              className='absolute top-4 right-4 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors duration-200'
              aria-label='Fechar visualização'
            >
              <X className='w-6 h-6' />
            </button>

            <div className='relative w-full h-full flex items-center justify-center'>
              <Image
                src={src}
                alt={alt}
                fill
                className='object-contain'
                priority={true}
                sizes='95vw'
                quality={95}
              />
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
