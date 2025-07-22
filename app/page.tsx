"use client"

import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react"

import { 
  ChevronDown
} from "lucide-react"

// Importando componentes de seções
import { HeroSection, CompaniesSection, PortfolioSection, DepoimentsSection } from "@/components/home"
import { AboutMeSection } from "@/components/home/about-me"
import { Footer } from "@/components/Footer"
import { GetInTouch } from "@/components/home/get-in-touch"

// Componente de Background Animado
function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradiente de fundo animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/40 animate-gradient" />
      
      {/* Gradiente radial sutil */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/15 via-transparent to-transparent" />
      
      {/* Elementos decorativos flutuantes */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/15 rounded-full blur-3xl animate-float" />
      <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-muted/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-primary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }} />
      
      {/* Padrão de pontos sutil */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-20 left-20 w-3 h-3 bg-primary/40 rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-2 h-2 bg-muted-foreground/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-60 left-1/2 w-2.5 h-2.5 bg-primary/35 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-80 right-20 w-1.5 h-1.5 bg-muted-foreground/45 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute top-96 left-1/4 w-3 h-3 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '4s' }} />
      </div>
      
      {/* Linhas decorativas sutis */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-muted-foreground/25 to-transparent" />
    </div>
  )
}

// Componente de Progress Indicator
function ProgressIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      const scrollPercent = scrollTop / docHeight
      setScrollProgress(scrollPercent)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isClient])

  if (!isClient) {
    return null
  }

  return (
        <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-foreground origin-left z-50"
      style={{ scaleX: scrollProgress }}
    />
  )
}

// Componente de Scroll Indicator
function ScrollIndicator() {
  const [scrollY, setScrollY] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const handleScroll = () => {
      const scrollY = window.scrollY
      const scrollHeight = document.body.scrollHeight - window.innerHeight
      const progress = Math.min((scrollY / scrollHeight) * 100, 100)
      
      setScrollY(scrollY)
      setScrollProgress(progress)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isClient])

  if (!isClient) {
    return null
  }

  return (
        <motion.div
      className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
      style={{ opacity: scrollY > 100 ? 1 : 0 }}
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="w-1 h-32 bg-muted/30 rounded-full relative">
          <motion.div 
            className="absolute top-0 left-0 w-full bg-foreground rounded-full"
            style={{
              height: `${scrollProgress}%`
          }}
        />
      </div>
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-6 h-6 border-2 border-muted-foreground/30 rounded-full flex items-center justify-center"
        >
          <ChevronDown className="w-3 h-3 text-muted-foreground" />
          </motion.div>
      </div>
          </motion.div>
  )
}

// Componente de Loading
function LoadingScreen() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-foreground mx-auto"></div>
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  )
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Pequeno delay para garantir que a hidratação seja completa
    const timer = setTimeout(() => {
      setIsClient(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  if (!isClient) {
    return <LoadingScreen />
  }

  return (
    <div ref={containerRef} className="relative min-h-screen">
      {/* Background Animado */}
      <AnimatedBackground />
      
      {/* Progress Indicator */}
      <ProgressIndicator />
      
      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Hero Section */}
      <HeroSection />

      {/* Companies Section - Movido para logo após o Hero */}
      <CompaniesSection />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* About Me Section */}
      <AboutMeSection />

      {/* Depoiments Section */}
      <DepoimentsSection />

      {/* Get in Touch Section */}
      <GetInTouch />

      {/* Footer */}
      <Footer />
    </div>
  )
}
