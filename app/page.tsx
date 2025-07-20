"use client"

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import { 
  ChevronDown
} from "lucide-react"
import Image from "next/image"

// Importando componentes de seções
import { HeroSection, CompaniesSection, PortfolioSection, AboutMeSection } from "@/components/sections"



// Componente de Progress Indicator
function ProgressIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (isClient) {
      const handleScroll = () => {
        const scrollTop = window.scrollY
        const docHeight = document.body.scrollHeight - window.innerHeight
        const scrollPercent = scrollTop / docHeight
        setScrollProgress(scrollPercent)
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
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
    if (isClient) {
      const handleScroll = () => {
        const scrollY = window.scrollY
        const scrollHeight = document.body.scrollHeight - window.innerHeight
        const progress = Math.min((scrollY / scrollHeight) * 100, 100)
        
        setScrollY(scrollY)
        setScrollProgress(progress)
      }
      
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
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
        <p className="text-muted-foreground">Carregando...</p>
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
    <div ref={containerRef} className="relative min-h-screen bg-background">
      {/* Efeito de brilho removido */}
      
      {/* Elementos de Fundo */}
      
      
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
    </div>
  )
}
