"use client"

import React from "react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  photo: string;
  children: React.ReactNode;
}

export function TestimonialCard({ name, role, company, photo, children }: TestimonialCardProps) {
  return (
    <div className="bg-white/80 dark:bg-muted/60 border border-border rounded-2xl p-6 shadow-md flex flex-col items-center text-center space-y-4">
      <img
        src={photo}
        alt={name}
        className="w-16 h-16 rounded-full object-cover border-2 border-primary/40 shadow"
        loading="lazy"
      />
      <div className="text-lg font-semibold text-foreground">{name}</div>
      <div className="text-sm text-muted-foreground">{role} @ {company}</div>
      <div className="text-base text-foreground/90 leading-relaxed">{children}</div>
    </div>
  );
} 