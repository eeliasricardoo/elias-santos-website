"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

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

// Componente de card individual
function PortfolioCard({ card, index, totalCards }: { 
  card: typeof portfolioCards[0], 
  index: number, 
  totalCards: number 
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  })

  // Animação de sobreposição baseada no scroll
  const y = useTransform(scrollYProgress, [0, 1], [0, -50 * (totalCards - index - 1)])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.02, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.7, 1, 1, 0.8])
  const zIndex = useTransform(scrollYProgress, [0, 0.5, 1], [totalCards - index, totalCards - index + 10, totalCards - index])



  return (
    <motion.div
      ref={cardRef}
      style={{ y, scale, opacity, zIndex }}
      className="relative w-full max-w-5xl mx-auto"
    >
      <Card className="border-border/50 bg-card/20 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500">
        <CardContent className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Lado Esquerdo - Conteúdo */}
            <div className="space-y-8">
              {/* Título e Descrição */}
              <div className="space-y-6">
                <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                  {card.title}
                </h3>
                <p className="text-white/80 leading-relaxed text-lg">
                  {card.description}
                </p>
              </div>

              {/* Botão */}
              <Button 
                size="lg"
                className="bg-black border border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-lg px-8 py-3"
              >
                {card.buttonText}
              </Button>
            </div>

            {/* Lado Direito - Área de mídia */}
            <div className="space-y-6">
              {/* Área de mídia - placeholder escuro */}
              <div className="w-full h-64 bg-black/30 rounded-2xl border border-white/10" />
              
              {/* Indicadores de navegação - 3 pontos */}
              <div className="flex justify-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                <div className="w-2 h-2 bg-white/30 rounded-full" />
                <div className="w-2 h-2 bg-white/30 rounded-full" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function PortfolioSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
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

        {/* Cards com animação de sobreposição */}
        <div className="relative space-y-8">
          {portfolioCards.map((card, index) => (
            <PortfolioCard
              key={card.id}
              card={card}
              index={index}
              totalCards={portfolioCards.length}
            />
          ))}
        </div>

        {/* Elementos decorativos de fundo */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-muted/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
      </div>
    </section>
  )
} 