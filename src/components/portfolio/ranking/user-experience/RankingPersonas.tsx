'use client';

import { Section, PersonaCard } from '../../ui';

export default function RankingPersonas() {
  const personas = [
    {
      name: 'Alice',
      role: 'Engaged Student',
      image: '/portfolios/ranking/Alice.webp',
    },
    {
      name: 'Bob',
      role: 'Private Student',
      image: '/portfolios/ranking/Bob.webp',
    },
    {
      name: 'Carla',
      role: 'Institution Administrator',
      image: '/portfolios/ranking/Carla.webp',
    },
  ];

  return (
    <Section title='Personas'>
      <div className='space-y-6'>
        {personas.map(persona => (
          <PersonaCard
            key={persona.name}
            name={persona.name}
            role={persona.role}
            image={persona.image}
          />
        ))}
      </div>
    </Section>
  );
}
