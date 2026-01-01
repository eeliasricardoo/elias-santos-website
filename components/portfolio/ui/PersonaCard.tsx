'use client';

import Image from 'next/image';

interface PersonaCardProps {
  name: string;
  role: string;
  image?: string;
}

export function PersonaCard({ name, role, image }: PersonaCardProps) {
  return (
    <div className='bg-muted/20 rounded-lg p-4 border border-border/20'>
      {image && (
        <div className='w-full'>
          <Image
            src={image}
            alt={`${name} - ${role}`}
            width={1090}
            height={200}
            className='w-full h-auto rounded-lg object-contain border border-border/20'
          />
        </div>
      )}
    </div>
  );
}
