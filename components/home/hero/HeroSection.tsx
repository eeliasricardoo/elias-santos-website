"use client"

import { ProfilePhoto, HeroContent, MiniChat } from "."

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-start overflow-hidden pt-24">
      <ProfilePhoto />
      <HeroContent />
              <MiniChat />
    </section>
  )
} 