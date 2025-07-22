"use client"

import { motion } from "framer-motion"
import { AnimatedBadge } from "../ui"

export function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative z-10 text-center space-y-6 px-4 max-w-5xl mx-auto"
    >
      {/* Badge Animado */}
      <AnimatedBadge 
        text="Elias Santos"
        animationDelay={0.5}
      />

      {/* Título Principal */}
      <div className="space-y-4">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[0.9] tracking-tight"
        >
          <span className="text-foreground">UX From the Future</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light"
        >
          Strategic UX/UI Designer & Full Stack Developer. I transform complex business challenges into elegant, user-centered solutions that drive measurable results and accelerate time-to-market.
        </motion.p>
      </div>
    </motion.div>
  )
} 