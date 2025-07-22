'use client';

import React from 'react';
import { Section, AnimatedContainer, PlatformCard } from '../../ui';

export default function RankingResearch() {
  const platforms = [
    {
      name: 'Duolingo',
      image: '/images/0_30Q1h7enGUIb_zha.webp',
      description: 'Weekly ranking with opt-in and reward incentives.',
    },
    {
      name: 'Khan Academy',
      image: '/images/0_kFjeH7TxKlRoneaa.webp',
      description: 'Points system and leaderboard per class.',
    },
    {
      name: 'Coursera',
      image: '/images/0_qMjDhi5-9niX47Oq.webp',
      description: 'Use of badges and points to encourage engagement.',
    },
  ];

  return (
    <Section title='Research & Benchmarking'>
      <p className='text-muted-foreground text-lg'>
        To support the design, we conducted user research and analyzed similar
        systems, such as:
      </p>

      {/* Animação de Benchmarking */}
      <AnimatedContainer>
        <div className='grid md:grid-cols-3 gap-6'>
          {platforms.map((platform, idx) => (
            <PlatformCard
              key={platform.name}
              name={platform.name}
              image={platform.image}
              description={platform.description}
              animationDelay={0.2 + idx * 0.2}
            />
          ))}
        </div>
      </AnimatedContainer>
    </Section>
  );
}
