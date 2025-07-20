"use client"

import { ProfilePhoto, HeroContent, EmailClient } from "."

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-start overflow-hidden pt-24 bg-background">
      {/* Brilho de fundo global */}
      <div className="absolute inset-0 -bottom-40 -left-40 -right-40 -top-20 bg-gradient-to-t from-white/10 via-white/30 to-transparent rounded-full blur-3xl -z-10" />
      
      {/* Partículas de fundo */}
      <div className="absolute inset-0 -z-10">
        {/* Partículas pequenas */}
        <div className="absolute top-20 left-10 w-1 h-1 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-white/15 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-48 left-1/4 w-1 h-1 bg-white/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-64 right-1/3 w-1 h-1 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-80 left-1/2 w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Partículas médias */}
        <div className="absolute top-40 right-1/4 w-1.5 h-1.5 bg-white/15 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-96 left-1/3 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '2.2s' }}></div>
        <div className="absolute top-72 right-1/2 w-1.5 h-1.5 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '1.2s' }}></div>
        
        {/* Partículas grandes */}
        <div className="absolute top-56 left-1/6 w-2 h-2 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute top-88 right-1/6 w-2 h-2 bg-white/15 rounded-full animate-pulse" style={{ animationDelay: '1.8s' }}></div>
        
        {/* Mais partículas espalhadas */}
        <div className="absolute top-24 left-3/4 w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute top-36 right-1/5 w-1 h-1 bg-white/15 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-52 left-2/3 w-1 h-1 bg-white/25 rounded-full animate-pulse" style={{ animationDelay: '1.1s' }}></div>
        <div className="absolute top-68 right-2/3 w-1 h-1 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '0.9s' }}></div>
        <div className="absolute top-84 left-1/5 w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '1.6s' }}></div>
        <div className="absolute top-100 right-1/2 w-1 h-1 bg-white/15 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
      </div>
      
      <ProfilePhoto />
      <HeroContent />
      <EmailClient />
    </section>
  )
} 