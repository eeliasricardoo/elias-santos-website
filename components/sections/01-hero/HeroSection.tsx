"use client"

import { ProfilePhoto, HeroContent, EmailClient } from "."

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-start overflow-hidden pt-24 bg-background">
      <ProfilePhoto />
      <HeroContent />
      <EmailClient />
    </section>
  )
} 