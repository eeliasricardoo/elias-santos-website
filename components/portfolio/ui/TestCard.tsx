'use client';

import React from 'react';

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
      <h5 className='font-semibold text-gray-800 dark:text-gray-100 mb-2'>
        {title}
      </h5>
      <p className='text-gray-600 dark:text-gray-300 text-sm'>{description}</p>
    </div>
  );
}
