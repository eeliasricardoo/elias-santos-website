'use client';

import React from 'react';
import { Section } from '../../ui';

export default function RankingInsights() {
  return (
    <Section title='Key insights from research'>
      <ul className='text-muted-foreground list-disc ml-6 space-y-1 text-lg'>
        <li>
          Transparency in participation: Users should be able to easily opt-in
          or opt-out of the ranking.
        </li>
        <li>
          Immediate visual feedback: Highlighting the user&apos;s position on
          the leaderboard improves engagement.
        </li>
        <li>
          Intuitive filters: Allowing different time filters increases the
          ranking&apos;s usability.
        </li>
      </ul>
    </Section>
  );
}
