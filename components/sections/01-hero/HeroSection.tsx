"use client"

import { ProfilePhoto, HeroContent, EmailClient } from "."

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-start overflow-hidden pt-24 bg-background">
      {/* Brilho de fundo global */}
      <div className="absolute inset-0 -bottom-40 -left-40 -right-40 -top-20 bg-gradient-to-t from-white/10 via-white/30 to-transparent rounded-full blur-3xl -z-10" />
      
      <ProfilePhoto />
      <HeroContent />
      <EmailClient />
    </section>
  )
} 