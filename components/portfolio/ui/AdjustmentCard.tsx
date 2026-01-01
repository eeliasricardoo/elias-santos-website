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
      <div className='w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
        <svg
          className='w-4 h-4 text-blue-600 dark:text-blue-400'
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
        <h5 className='font-semibold text-gray-800 dark:text-gray-100 mb-1'>
          {title}
        </h5>
        <p className='text-gray-600 dark:text-gray-300'>{description}</p>
      </div>
    </div>
  );
}
