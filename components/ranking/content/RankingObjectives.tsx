"use client"

import React from "react";

export default function RankingObjectives() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold mb-2">Project Objectives</h2>
      <ul className="text-muted-foreground list-disc ml-6 space-y-1 text-lg">
        <li>Create a dynamic ranking based on XP, updated in real-time.</li>
        <li>Allow students to opt-in or opt-out of the ranking.</li>
        <li>Ensure an intuitive and responsive interface for admins and students.</li>
        <li>Implement view filters (by unit, by period: week, month, year).</li>
        <li>Guarantee security and privacy, respecting students&apos; decisions.</li>
      </ul>
    </section>
  );
} 