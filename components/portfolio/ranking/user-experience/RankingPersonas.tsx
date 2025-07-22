"use client"

import React from "react";
import { Section, PersonaCard } from '../../ui';

export default function RankingPersonas() {
  const personas = [
    {
      name: 'Alice',
      role: 'Engaged Student',
      age: '22 years old',
      goal: 'Track her academic progress and improve her ranking position.',
      needs: 'A ranking that is easy to understand, with clear visual feedback about her position.',
      painPoints: 'Lack of clarity in scoring and difficulties comparing her progress with others.'
    },
    {
      name: 'Bob',
      role: 'Private Student',
      age: '24 years old',
      goal: 'Focus on learning without worrying about comparisons.',
      needs: 'An easy option to opt out of the ranking and avoid public exposure of his performance.',
      painPoints: 'Concern about having his performance publicly compared without consent.'
    },
    {
      name: 'Carla',
      role: 'Institution Administrator',
      age: '35 years old',
      goal: 'Monitor student performance and encourage engagement in the platform.',
      needs: 'Access to detailed reports and the ability to enable/disable the ranking as needed.',
      painPoints: 'Lack of granular control over which students participate in the ranking.'
    }
  ];

  return (
    <Section title="Personas">
      <div className="space-y-4">
        {personas.map((persona) => (
          <PersonaCard
            key={persona.name}
            name={persona.name}
            role={persona.role}
            age={persona.age}
            goal={persona.goal}
            needs={persona.needs}
            painPoints={persona.painPoints}
          />
        ))}
      </div>
    </Section>
  );
} 