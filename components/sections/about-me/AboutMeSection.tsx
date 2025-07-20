"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Award, 
  Target, 
  Rocket, 
  Brain, 
  Zap, 
  Globe, 
  TrendingUp, 
  Users, 
  Clock, 
  Star,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Code,
  Palette,
  Lightbulb
} from "lucide-react"

// Componente de Timeline de Experiência
function ExperienceTimeline() {
  const experiences = [
    {
      year: "2024",
      title: "UX Lead & Prototipagem Rápida",
      description: "Liderança em processos de UX/UI Research e otimização de metodologias ágeis",
      icon: Award
    },
    {
      year: "2023",
      title: "40+ Certificações UX/UI/Frontend",
      description: "Especialização em Service Design e tecnologias modernas",
      icon: BookOpen
    },
    {
      year: "2022",
      title: "Projeto Toolzz LMS",
      description: "Maior impacto nos negócios - melhoria significativa em processos",
      icon: TrendingUp
    },
    {
      year: "2020",
      title: "Início da Jornada",
      description: "Começou na área de UX/UI e Frontend Development",
      icon: Rocket
    }
  ]

  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.year}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="flex items-start gap-4"
        >
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <exp.icon className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="secondary" className="text-xs">
                {exp.year}
              </Badge>
            </div>
            <h4 className="font-semibold text-foreground mb-1">{exp.title}</h4>
            <p className="text-sm text-muted-foreground">{exp.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// Componente de Skills
function SkillsSection() {
  const skills = [
    { name: "UX/UI Design", level: 95, icon: Palette },
    { name: "Frontend Development", level: 90, icon: Code },
    { name: "Service Design", level: 85, icon: Users },
    { name: "Prototipagem Rápida", level: 98, icon: Zap },
    { name: "Metodologias Ágeis", level: 88, icon: Target },
    { name: "Vibe Coding", level: 92, icon: Brain }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="space-y-2"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <skill.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
            <span className="text-xs text-muted-foreground">{skill.level}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <motion.div
              className="bg-primary h-2 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: index * 0.1 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// Componente de Filosofia
function PhilosophyCard() {
  return (
    <Card className="border-primary/20 bg-primary/5">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Lightbulb className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-foreground mb-2">Filosofia de Trabalho</h4>
            <p className="text-muted-foreground mb-3">
              "Estoicismo - O que é do outro não me afeta"
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="text-xs">Ambicioso</Badge>
              <Badge variant="outline" className="text-xs">Resiliente</Badge>
              <Badge variant="outline" className="text-xs">Dedicado</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Componente de Metodologia
function MethodologyCard() {
  const methodologies = [
    "Double Diamond",
    "UX Research",
    "Prototipagem Rápida",
    "Metodologias Ágeis",
    "Service Design"
  ]

  return (
    <Card className="border-border/50 bg-card/30">
      <CardContent className="p-6">
        <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-primary" />
          Metodologia de Trabalho
        </h4>
        <div className="space-y-3">
          {methodologies.map((method, index) => (
            <motion.div
              key={method}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <CheckCircle className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">{method}</span>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export function AboutMeSection() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium">
            Sobre Mim
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Elias Santos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            UX/UI Designer & Frontend Developer com 4 anos de experiência, especializado em 
            prototipagem rápida e resolução de problemas complexos. 
            <span className="text-primary font-medium"> 40+ certificações</span> e confiança para aceitar qualquer desafio.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Timeline & Skills */}
          <div className="space-y-12">
            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Jornada Profissional
              </h3>
              <ExperienceTimeline />
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                Especialidades
              </h3>
              <SkillsSection />
            </motion.div>
          </div>

          {/* Right Column - Philosophy & Methodology */}
          <div className="space-y-8">
            {/* Philosophy */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <PhilosophyCard />
            </motion.div>

            {/* Methodology */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <MethodologyCard />
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="border-border/50 bg-card/30">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Maior Conquista
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    "Conseguir chegar no nível intelectual para aceitar qualquer desafio, 
                    ter conseguido alcançar essa confiança é o que mais vale."
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary font-medium">
                    <Globe className="w-4 h-4" />
                    Objetivo: Empresa Internacional
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center space-y-6"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Pronto para Desafios Globais
            </h3>
            <p className="text-muted-foreground mb-6">
              Busco oportunidades em empresas de inovação, abertas a novas tecnologias 
              e mentalidades. Qualquer desafio é bem-vindo!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Globe className="mr-2 h-4 w-4" />
                Ver Portfólio Completo
              </Button>
              <Button variant="outline" className="border-border text-foreground hover:bg-muted">
                <ArrowRight className="mr-2 h-4 w-4" />
                Conectar no LinkedIn
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 