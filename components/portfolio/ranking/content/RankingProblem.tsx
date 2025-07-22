'use client';

import React from 'react';
import { Section, AnimatedContainer, InfoCard } from '../../ui';

export default function RankingProblem() {
  const painPoints = [
    {
      title: 'No Ranking Visibility',
      desc: "Students can't track their progress.",
    },
    {
      title: 'No Opt-in System',
      desc: 'No way for students to choose participation.',
    },
    {
      title: 'Data Uncertainty',
      desc: 'Historical data use is unclear.',
    },
    {
      title: 'Low Interface Clarity',
      desc: 'Admins and students struggle with the UI.',
    },
  ];

  return (
    <Section title='Identified Problem'>
      <p className='text-muted-foreground text-lg'>
        Platform administrators want to identify the most engaged students and
        incentivize them through rewards. However, the current system lacks a
        structured mechanism to classify and display the best-performing
        students.
      </p>
      <p className='text-muted-foreground text-lg'>The main pain points are:</p>

      {/* Animação de Problema */}
      <AnimatedContainer>
        {/* Cards animados dos pain points */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {painPoints.map((item, idx) => (
            <InfoCard
              key={item.title}
              title={item.title}
              description={item.desc}
              animationDelay={0.3 + idx * 0.2}
            />
          ))}
        </div>
      </AnimatedContainer>
    </Section>
  );
}
