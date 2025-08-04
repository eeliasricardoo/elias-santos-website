'use client';

import React from 'react';
import Image from 'next/image';
import { BackButton, StatsCard } from '../../ui';

export default function RankingHeader() {
  return (
    <header className='mb-10 text-left'>
      <BackButton />

      <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 text-left'>
        <h1 className='text-4xl font-bold leading-tight text-left'>
          UX Case Study: Ranking System for Gamification
        </h1>
      </div>

      {/* Imagem do ranking */}
      <div className='mb-8 text-left'>
        <Image
          src='/portfolios/ranking/1_Eqflzr9sr1z_mH6CUvohrQ.gif'
          alt='XP Ranking System Interface'
          className='w-full max-w-4xl rounded-lg shadow-lg'
          width={1024}
          height={768}
        />
      </div>

      <div className='flex gap-4 mb-8 justify-start'>
        <StatsCard value='+40%' label='Engagement' />
        <StatsCard value='+12.000' label='Users' />
        <StatsCard value='18' label='Institutions' />
      </div>
    </header>
  );
}
