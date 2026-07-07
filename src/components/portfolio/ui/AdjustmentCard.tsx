'use client';


interface AdjustmentCardProps {
  icon: string;
  title: string;
  description: string;
}

export function AdjustmentCard({
  icon,
  title,
  description,
}: AdjustmentCardProps) {
  return (
    <div className='flex items-start space-x-4'>
      <div
        className='w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1'
        style={{ backgroundColor: 'color-mix(in srgb, var(--brand, hsl(var(--foreground))) 18%, transparent)' }}
      >
        <svg
          className='w-4 h-4'
          style={{ color: 'var(--brand, hsl(var(--foreground)))' }}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d={icon}
          />
        </svg>
      </div>
      <div>
        <h5 className='font-semibold text-foreground mb-1'>
          {title}
        </h5>
        <p className='text-muted-foreground'>{description}</p>
      </div>
    </div>
  );
}
