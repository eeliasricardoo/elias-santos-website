"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  ExternalLink, 
  Github, 
  Eye, 
  ArrowRight,
  MessageSquare,
  Building2,
  Truck,
  ShoppingCart,
  Globe,
  Smartphone,
  Palette,
  Trophy
} from "lucide-react"
import Image from "next/image"

const featuredCard = {
  title: "Ventus Chat",
  description: "Chat inteligente com IA para atendimento ao cliente",
  icon: MessageSquare,
  category: "MVP em 7 dias",
  image: "/ventus/video.gif"
}

const portfolioCards = [
  {
    title: "UX Case Study: Ranking System for Gamification",
    description: "Sistema de gamificação com ranking e recompensas",
    icon: Trophy,
    category: "UX/UI Design",
    image: "/portfolios/ranking.gif"
  },
  {
    title: "Case de estudo UI Framer",
    description: "Design de interface moderna e responsiva",
    icon: Palette,
    category: "UI/UX Design",
    image: "/portfolios/framer ui.gif"
  },
  {
    title: "Migration Oliver Spain to Latam Wordpress",
    description: "Migração e adaptação para mercado latino-americano",
    icon: Globe,
    category: "WordPress Migration",
    image: "/portfolios/oliver.gif"
  }
]

export function PortfolioSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative py-24 bg-background overflow-hidden">
      <div className="w-full px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium mb-6">
            Portfolio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Projetos em Destaque
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Projetos desenvolvidos em tempo recorde com foco em inovação e resultados excepcionais
          </p>
        </motion.div>

        {/* Featured Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative group">
            <div className="relative h-[450px] rounded-3xl bg-card/10 backdrop-blur-xl border border-border/50 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] cursor-pointer group-hover:border-border max-w-5xl mx-auto">
              {/* Background Image */}
              {featuredCard.image && (
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={featuredCard.image}
                    alt={featuredCard.title}
                    fill
                    className="object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    priority
                  />
                </div>
              )}
              {/* Card Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                {/* Top Section - Badge */}
                <div className="flex justify-end">
                  <Badge className="text-sm px-4 py-2 bg-white/20 text-white border-white/30">
                    {featuredCard.category}
                  </Badge>
                </div>

                {/* Content - Title and Description */}
                {featuredCard.image && (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-4xl font-bold mb-3 text-white">
                        {featuredCard.title}
                      </h3>
                      <div className="w-16 h-1 mb-4 bg-white/30"></div>
                      <p className="text-lg leading-relaxed text-white/90">
                        {featuredCard.description}
                      </p>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex justify-end">
                      <Button size="lg" className="backdrop-blur-sm bg-white/20 hover:bg-white/30 text-white border-white/30">
                        <Eye className="w-5 h-5 mr-2" />
                        Ver case completo
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20"></div>
            </div>
          </div>
        </motion.div>

        {/* Other Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {portfolioCards.map((card, index) => {
            const CardIcon = card.icon
            return (
              <motion.div 
                key={card.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-96 rounded-2xl bg-card/10 backdrop-blur-xl border border-border/50 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] cursor-pointer group-hover:border-border">
                                    {/* Background Image */}
                  {card.image && (
                    <div className="absolute inset-0 overflow-hidden">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  {/* Card Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    {/* Top Section - Badge */}
                    <div className="flex justify-end">
                      <Badge className={`text-xs px-3 py-1 ${card.image ? 'bg-white/20 text-white border-white/30' : 'bg-primary/20 text-primary border-primary/30'}`}>
                        {card.category}
                      </Badge>
                    </div>

                    {/* Center Content - Icon for cards without image */}
                    {!card.image && (
                      <div className="flex justify-center items-center flex-1">
                        <div className="relative">
                          <CardIcon className="w-24 h-24 text-primary/80 group-hover:text-primary transition-colors duration-300" />
                          {/* Floating Elements */}
                          <div className="absolute -top-2 -right-2 w-3 h-3 bg-primary/40 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-primary/30 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
                        </div>
                      </div>
                    )}

                    {/* Content - Title and Description */}
                    {card.image && (
                      <div className="space-y-3">
                        <div>
                          <h3 className="text-2xl font-bold mb-2 text-white">
                            {card.title}
                          </h3>
                          <div className="w-12 h-0.5 mb-3 bg-white/30"></div>
                          <p className="text-sm leading-relaxed text-white/90">
                            {card.description}
                          </p>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex justify-end">
                          <Button size="sm" className="backdrop-blur-sm bg-white/20 hover:bg-white/30 text-white border-white/30">
                            <Eye className="w-4 h-4 mr-2" />
                            Ver case completo
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Non-image cards content */}
                    {!card.image && (
                      <div className="space-y-3">
                        <div>
                          <h3 className="text-2xl font-bold mb-2 text-foreground">
                            {card.title}
                          </h3>
                          <div className="w-12 h-0.5 mb-3 bg-border"></div>
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {card.description}
                          </p>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex justify-end">
                          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Button size="sm" className="backdrop-blur-sm bg-primary/20 hover:bg-primary/30 text-primary border-primary/30">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="backdrop-blur-sm border-primary/30 text-primary hover:bg-primary/20">
                              <Github className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${card.image ? 'bg-black/20' : 'bg-primary/5'}`}></div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 font-medium">
            Ver Todos os Projetos
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 