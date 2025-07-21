"use client"

import React from "react";

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
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold mb-2">Personas</h2>
      <div className="space-y-4">
        {personas.map((persona) => (
          <div key={persona.name} className="bg-muted/20 rounded-lg p-6 border border-border/20">
            <div className="font-semibold text-foreground text-lg mb-2">{persona.name} — {persona.role}</div>
            <div className="text-muted-foreground text-sm mb-3">Age: {persona.age}</div>
            <div className="space-y-2 text-lg">
              <div>
                <span className="font-semibold text-foreground">Goal:</span>
                <span className="text-muted-foreground"> {persona.goal}</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">Needs:</span>
                <span className="text-muted-foreground"> {persona.needs}</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">Pain Points:</span>
                <span className="text-muted-foreground"> {persona.painPoints}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 