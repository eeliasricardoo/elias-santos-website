"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative z-10 text-center space-y-6 px-4 max-w-5xl mx-auto"
    >
      {/* Badge Animado */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-muted/50 border border-border/50 backdrop-blur-sm shadow-sm"
      >
        <Sparkles className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm font-medium text-muted-foreground tracking-wide">UX from the Future</span>
      </motion.div>

      {/* Título Principal */}
      <div className="space-y-4">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[0.9] tracking-tight"
        >
          Hi, I'm{" "}
          <span className="relative">
            <span className="text-foreground">Elias Santos</span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -bottom-2 left-0 right-0 h-1 bg-foreground/20 rounded-full"
            />
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light"
        >
          UX/UI Designer & Full Stack Developer. Specialized in creating fast and functional MVPs. 
          I transform ideas into products that sell in record time.
        </motion.p>
      </div>
        

    </motion.div>
  )
} 