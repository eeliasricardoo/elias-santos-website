"use client"

import React from "react";

interface PersonaCardProps {
  name: string;
  role: string;
  age: string;
  goal: string;
  needs: string;
  painPoints: string;
}

export function PersonaCard({ name, role, age, goal, needs, painPoints }: PersonaCardProps) {
  return (
    <div className="bg-muted/20 rounded-lg p-6 border border-border/20">
      <div className="font-semibold text-foreground text-lg mb-2">{name} — {role}</div>
      <div className="text-muted-foreground text-sm mb-3">Age: {age}</div>
      <div className="space-y-2 text-lg">
        <div>
          <span className="font-semibold text-foreground">Goal:</span>
          <span className="text-muted-foreground"> {goal}</span>
        </div>
        <div>
          <span className="font-semibold text-foreground">Needs:</span>
          <span className="text-muted-foreground"> {needs}</span>
        </div>
        <div>
          <span className="font-semibold text-foreground">Pain Points:</span>
          <span className="text-muted-foreground"> {painPoints}</span>
        </div>
      </div>
    </div>
  );
} 