"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

// Dados dos cards de portfolio
const portfolioCards = [
  {
    id: 1,
    title: "Ranking: Gamified Engagement and Competitiveness",
    description: "A solution to create personalized rankings, helping institutions track performance and motivate students and teams with flexible criteria for engagement and competition.",
    buttonText: "Check"
  },
  {
    id: 2,
    title: "Weighted Average: Greater Flexibility for Test Configuration",
    description: "A solution designed to simplify the configuration of assessments by enabling flexible weight attribution. Institutions can customize the value of tests and questions to better align with their educational goals and specific needs, enhancing precision and fairness in evaluations.",
    buttonText: "Soon..."
  },
  {
    id: 3,
    title: "UX Research & Service Design",
    description: "Comprehensive research methodologies and service design solutions to create user-centered experiences that drive business value and user satisfaction.",
    buttonText: "Explore"
  }
]

// Componente de card individual com efeito de stacking
function PortfolioCard({ card, index, totalCards }: { 
  card: typeof portfolioCards[0], 
  index: number, 
  totalCards: number 
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start center", "end center"]
  })

  // Efeito de stacking refinado - card de baixo vai para frente
  const cardY = useTransform(scrollYProgress, [0, 0.2, 1], [0, 0, -120 * (totalCards - index - 1)])
  const cardOpacity = useTransform(scrollYProgress, [0, 0.2, 0.7, 0.9, 1], [1, 1, 1, 0.6, 0.2])
  const cardScale = useTransform(scrollYProgress, [0, 0.2, 0.7, 0.9, 1], [1, 1, 1, 0.98, 0.92])
  const cardZIndex = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.7, 1], [index, index, index + 5, index + 15, index + 20])
  const cardBlur = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0, 0, 2])



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
              <Card className="border-border/50 bg-card/10 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500">
          <CardContent className="p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Lado Esquerdo - Conteúdo */}
            <div className="space-y-16">
              {/* Título e Descrição */}
              <div className="space-y-2">
                <h3 className="lg:text-4xl font-normal text-white">
                  {card.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-base font-light">
                  {card.description}
                </p>
              </div>

              {/* Botão */}
              <Button 
                size="lg"
                className="bg-black border border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-6 py-2.5 text-sm font-medium"
              >
                {card.buttonText}
              </Button>
            </div>

            {/* Lado Direito - Imagem fixa */}
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/portoflio-card/ranking.png"
                alt="Ranking: Gamified Engagement and Competitiveness"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header fixo no top */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-16"
        >
          <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium">
            Portfolio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Projetos em Destaque
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Soluções inovadoras desenvolvidas com foco em experiência do usuário e resultados excepcionais
          </p>
        </motion.div>

        {/* Container dos cards com scroll próprio */}
        <div className="relative h-[70vh] overflow-y-auto scroll-smooth">
          <div className="relative space-y-16 pb-20 pt-8">
            {portfolioCards.map((card, index) => (
              <PortfolioCard
                key={card.id}
                card={card}
                index={index}
                totalCards={portfolioCards.length}
              />
            ))}
          </div>
        </div>

        {/* Elementos decorativos de fundo com parallax */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"
            style={{
              y: useTransform(scrollYProgress, [0, 1], [0, -50])
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-muted/10 rounded-full blur-3xl animate-float"
            style={{
              y: useTransform(scrollYProgress, [0, 1], [0, 30]),
              animationDelay: '2s'
            }}
          />
        </div>
      </div>
    </section>
  )
} 