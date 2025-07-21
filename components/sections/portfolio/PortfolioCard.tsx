"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedMockup } from "./AnimatedMockup"

interface PortfolioCardProps {
  card: {
    id: number
    title: string
    description: string
    buttonText: string
  }
  index: number
  totalCards: number
}

export function PortfolioCard({ card, index, totalCards }: PortfolioCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start center", "end center"]
  })

  const cardY = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0, -80 * (totalCards - index - 1)])
  const cardOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 0.7, 0.2])
  const cardScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 0.96, 0.88])
  const cardZIndex = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [index, index, index + 15, index + 25])
  const cardBlur = useTransform(scrollYProgress, [0, 0.7, 1], [0, 1.5, 4])

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      style={{
        opacity: cardOpacity,
        scale: cardScale,
        y: cardY,
        zIndex: cardZIndex,
        filter: `blur(${cardBlur}px)`
      }}
      className="sticky top-8 w-full max-w-5xl mx-auto transition-all duration-300 ease-out"
    >
      {/* Removido: brilho/fundo gradiente e ShineBorder */}
      <Card className="border-border/30 bg-card shadow-2xl hover:shadow-3xl transition-all duration-100 relative z-10 group">
        {/* Removido: <ShineBorder ... /> */}
        {/* Removido: <motion.div ... className="absolute inset-0 bg-primary/5 ... blur-xl ..." /> */}
        <CardContent className="p-16 group-hover:p-20 transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Lado Esquerdo - Conteúdo */}
            <div className="space-y-16">
              {/* Título e Descrição */}
              <div className="space-y-2">
                <h3 className="lg:text-4xl font-normal text-foreground">
                  {card.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base font-light">
                  {card.description}
                </p>
              </div>
              
              {/* Botão */}
              <Button 
                size="lg"
                className="bg-foreground border border-border text-background hover:bg-background hover:text-foreground transition-all duration-300 px-6 py-2.5 text-sm font-medium"
              >
                {card.buttonText}
              </Button>
            </div>
            {/* Lado Direito - Mockup Animado */}
            <div className="relative w-full h-full overflow-hidden">
              <AnimatedMockup type={index === 0 ? "ranking" : "ventus-chat"} />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
} 