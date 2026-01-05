'use client';


interface TestCardProps {
  icon: string;
  title: string;
  description: string;
}

export function TestCard({ icon, title, description }: TestCardProps) {
  return (
    <div className='text-center'>
      <div className='w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4'>
        <svg
          className='w-6 h-6 text-blue-600 dark:text-blue-400'
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
      <h5 className='font-semibold text-foreground mb-2'>
        {title}
      </h5>
      <p className='text-muted-foreground text-sm'>{description}</p>
    </div>
  );
}
