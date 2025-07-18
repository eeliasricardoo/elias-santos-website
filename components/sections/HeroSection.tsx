"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight, 
  Sparkles, 
  Eye,
  Mail,
  Users,
  Code,
  Rocket,
  Target
} from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

// Componente de Partículas do Email Client
function EmailParticles() {
  const [particles, setParticles] = useState<Array<{
    id: number
    initialX: number
    initialY: number
    animateX: number
    animateY: number
    duration: number
  }>>([])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Gerar partículas com valores aleatórios consistentes
      const newParticles = Array.from({ length: 6 }, (_, i) => ({
        id: i,
        initialX: Math.random() * 800 - 400,
        initialY: Math.random() * 400 + 200,
        animateX: Math.random() * 800 - 400,
        animateY: Math.random() * 400 + 200,
        duration: Math.random() * 8 + 8
      }))
      
      setParticles(newParticles)
    }
  }, [])

  if (particles.length === 0) return null

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          initial={{
            x: particle.initialX,
            y: particle.initialY,
            scale: 0,
            opacity: 0
          }}
          animate={{
            x: particle.animateX,
            y: particle.animateY,
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-start overflow-hidden pt-20 bg-background">
      {/* Grid Pattern removido */}
      
      {/* Partículas do Hero removidas */}
      
      {/* Conteúdo do Hero */}
      {/* Foto do Elias - Posicionada no topo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex justify-center mb-8"
      >
        <div className="relative">
          {/* Efeito de brilho atrás da foto */}
          <div className="absolute inset-0 -inset-3 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-full blur-xl" />
          
          {/* Container da foto */}
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-border/30 shadow-2xl">
            <Image
              src="/images/WhatsApp Image 2025-07-18 at 02.01.50_8d26a9db.jpg"
              alt="Elias Santos - UX/UI Designer & Full Stack Developer"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          
          {/* Efeito de borda animada */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 -inset-1 border-2 border-border/20 rounded-full"
          />
        </div>
      </motion.div>

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
          <span className="text-sm font-medium text-muted-foreground tracking-wide">Portfolio</span>
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
            UX/UI Designer & Full Stack Developer. Especializado em criar MVPs rápidos e funcionais. 
            Transformo ideias em produtos que vendem em tempo recorde.
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
            Ver Portfolio
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-border text-foreground hover:bg-muted/50 px-8 py-6 text-lg font-medium backdrop-blur-sm transition-all duration-300"
          >
            <Mail className="mr-3 h-6 w-6" />
            Entrar em Contato
          </Button>
        </motion.div>
      </motion.div>

      {/* Email Client UI integrado ao Hero */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1.2 }}
        className="relative z-10 mt-16 px-4"
      >
        <div className="max-w-7xl mx-auto relative">
          {/* Brilho de fundo - ATRÁS do card */}
          <div className="absolute inset-0 -bottom-40 -left-40 -right-40 -top-20 bg-gradient-to-t from-white/25 via-white/15 to-transparent rounded-full blur-3xl -z-10" />
          <div className="absolute inset-0 -bottom-20 -left-20 -right-20 -top-10 bg-gradient-to-t from-white/20 via-white/10 to-transparent rounded-full blur-2xl -z-10" />
          
          <Card className="border-border/50 bg-card/40 backdrop-blur-xl relative overflow-hidden shadow-2xl">
            {/* Border Effect Simples */}
            <div className="absolute inset-0 border border-border/30 rounded-lg" />
            
            {/* Partículas do Email removidas */}
            
            <CardContent className="p-0">
              {/* Header do Email Client */}
              <div className="flex items-center justify-between p-6 border-b border-border/30">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <span className="font-semibold text-foreground">Portfolio</span>
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                    Log in
                  </Button>
                  <Button size="sm" className="bg-foreground text-background hover:bg-foreground/90">
                    Sign up
                  </Button>
                </div>
              </div>

              <div className="flex h-[500px]">
                {/* Sidebar */}
                <div className="w-64 bg-muted/20 border-r border-border/30 p-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                      <div className="w-6 h-6 rounded bg-muted/50 flex items-center justify-center">
                        <Users className="w-3 h-3 text-muted-foreground" />
                      </div>
                      <span className="text-sm text-foreground font-medium">UX/UI Design</span>
                      <Badge variant="secondary" className="ml-auto text-xs">12</Badge>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/30 cursor-pointer">
                      <div className="w-6 h-6 rounded bg-muted/50 flex items-center justify-center">
                        <Code className="w-3 h-3 text-muted-foreground" />
                      </div>
                      <span className="text-sm text-muted-foreground">Development</span>
                      <Badge variant="secondary" className="ml-auto text-xs">8</Badge>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/30 cursor-pointer">
                      <div className="w-6 h-6 rounded bg-muted/50 flex items-center justify-center">
                        <Rocket className="w-3 h-3 text-muted-foreground" />
                      </div>
                      <span className="text-sm text-muted-foreground">MVPs</span>
                      <Badge variant="secondary" className="ml-auto text-xs">15</Badge>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/30 cursor-pointer">
                      <div className="w-6 h-6 rounded bg-muted/50 flex items-center justify-center">
                        <Target className="w-3 h-3 text-muted-foreground" />
                      </div>
                      <span className="text-sm text-muted-foreground">Case Studies</span>
                      <Badge variant="secondary" className="ml-auto text-xs">6</Badge>
                    </div>
                  </div>
                </div>

                {/* Lista de Projetos */}
                <div className="flex-1 border-r border-border/30">
                  <div className="p-4 border-b border-border/30">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-foreground">UX/UI Design</h3>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="text-xs">All projects</Button>
                        <Button variant="ghost" size="sm" className="text-xs">Featured</Button>
                      </div>
                    </div>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Search projects..." 
                        className="w-full px-4 py-2 bg-muted/30 border border-border/30 rounded-lg text-sm text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                  </div>
                  
                  <div className="p-4 space-y-4">
                    {/* Projeto 1 */}
                    <div className="p-4 rounded-lg hover:bg-muted/20 cursor-pointer border border-transparent hover:border-border/30 relative overflow-hidden">
                      {/* Border Effect Simples */}
                      <div className="absolute inset-0 border border-border/20 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300" />
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground">Ventu Chat</h4>
                          <p className="text-sm text-muted-foreground mt-1">Chatbot inteligente para atendimento ao cliente</p>
                          <p className="text-xs text-muted-foreground mt-2">
                            MVP desenvolvido em 5 dias usando Next.js, OpenAI API e Supabase. 
                            Interface intuitiva com dashboard em tempo real.
                          </p>
                          <div className="flex gap-2 mt-3">
                            <Badge variant="secondary" className="text-xs">MVP</Badge>
                            <Badge variant="secondary" className="text-xs">AI</Badge>
                            <Badge variant="secondary" className="text-xs">Chatbot</Badge>
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground">5 days ago</span>
                      </div>
                    </div>

                    {/* Projeto 2 */}
                    <div className="p-4 rounded-lg hover:bg-muted/20 cursor-pointer border border-transparent hover:border-border/30 relative overflow-hidden">
                      {/* Border Effect Simples */}
                      <div className="absolute inset-0 border border-border/20 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300" />
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground">E-commerce Platform</h4>
                          <p className="text-sm text-muted-foreground mt-1">Plataforma completa de e-commerce</p>
                          <p className="text-xs text-muted-foreground mt-2">
                            Design system completo com componentes reutilizáveis. 
                            Foco em conversão e experiência do usuário.
                          </p>
                          <div className="flex gap-2 mt-3">
                            <Badge variant="secondary" className="text-xs">E-commerce</Badge>
                            <Badge variant="secondary" className="text-xs">Design System</Badge>
                            <Badge variant="secondary" className="text-xs">UX</Badge>
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground">2 weeks ago</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Detalhes do Projeto */}
                <div className="w-80 p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Ventu Chat</h3>
                      <p className="text-sm text-muted-foreground mt-1">Chatbot inteligente para atendimento ao cliente</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Tecnologias</h4>
                      <p className="text-sm text-muted-foreground">Next.js, OpenAI API, Supabase, Tailwind CSS</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Resultados</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• MVP funcional em 5 dias</li>
                        <li>• 95% de satisfação dos usuários</li>
                        <li>• Redução de 80% no tempo de resposta</li>
                      </ul>
                    </div>
                    
                    <div className="flex gap-3 pt-4">
                      <Button size="sm" className="bg-foreground text-background hover:bg-foreground/90">
                        Ver Demo
                      </Button>
                      <Button variant="outline" size="sm" className="border-border text-foreground hover:bg-muted/50">
                        Case Completo
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  )
} 