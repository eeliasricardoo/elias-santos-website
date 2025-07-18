"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles, Eye, Mail, ArrowRight } from "lucide-react"

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
        
      {/* Botões de Ação */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
                  <Button 
            size="lg" 
            className="bg-foreground text-background hover:bg-foreground/90 group px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Eye className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            View Portfolio
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-border text-foreground hover:bg-muted/50 px-8 py-6 text-lg font-medium backdrop-blur-sm transition-all duration-300"
          >
            <Mail className="mr-3 h-6 w-6" />
            Get in Touch
          </Button>
      </motion.div>
    </motion.div>
  )
} 