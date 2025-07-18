"use client"

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Star, 
  Code, 
  Palette, 
  Smartphone, 
  Globe,
  ChevronDown,
  Play,
  Award,
  Users,
  Target,
  Rocket,
  Lightbulb,
  Shield,
  Heart,
  Eye,
  MousePointer,
  Layers,
  Cpu,
  Database,
  Cloud,
  Lock,
  Wifi,
  Battery,
  Camera,
  Music,
  Gamepad2,
  BookOpen,
  GraduationCap,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Youtube,
  Twitch,
  Download,
  CreditCard
} from "lucide-react"
import Image from "next/image"

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

// Componente de Partículas do Hero
function HeroParticles() {
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
      const newParticles = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        initialX: Math.random() * 1200,
        initialY: Math.random() * 800,
        animateX: Math.random() * 1200,
        animateY: Math.random() * 800,
        duration: Math.random() * 20 + 20
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
          className="absolute w-1 h-1 bg-muted-foreground/20 rounded-full"
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
            opacity: [0, 0.4, 0]
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

// Componente de Partículas Flutuantes
function FloatingParticles() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
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
      const width = window.innerWidth
      const height = window.innerHeight
      
      setDimensions({ width, height })
      
      // Gerar partículas com valores aleatórios consistentes
      const newParticles = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        initialX: Math.random() * width,
        initialY: Math.random() * height,
        animateX: Math.random() * width,
        animateY: Math.random() * height,
        duration: Math.random() * 15 + 15
      }))
      
      setParticles(newParticles)
    }
  }, [])

  if (dimensions.width === 0 || particles.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div 
          key={particle.id}
          className="absolute w-1 h-1 bg-muted-foreground/20 rounded-full"
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
            opacity: [0, 0.4, 0]
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

// Componente de Gradiente Dinâmico
function DynamicGradient() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight
        })
      }

      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div 
        className="absolute inset-0 opacity-10"
              style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
            hsl(var(--muted-foreground) / 0.2) 0%, 
            hsl(var(--muted-foreground) / 0.05) 25%, 
            transparent 50%)`
        }}
      />
    </div>
  )
}



// Componente de Progress Indicator
function ProgressIndicator() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
        <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-foreground origin-left z-50"
      style={{ scaleX }}
    />
  )
}

// Componente de Scroll Indicator
function ScrollIndicator() {
  const [scrollY, setScrollY] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
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
  }, [])

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

// Componente de Tech Stack com Animações
function TechStack() {
  const techs = [
    { name: "Figma", icon: Palette },
    { name: "Next.js", icon: Globe },
    { name: "Vercel", icon: Cloud },
    { name: "Supabase", icon: Database },
    { name: "Stripe", icon: CreditCard },
    { name: "Framer", icon: MousePointer },
    { name: "TypeScript", icon: Code },
    { name: "Tailwind", icon: Palette }
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {techs.map((tech, index) => (
          <motion.div 
          key={tech.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="group"
        >
          <Card className="border-border/50 bg-card/30 hover:bg-card/50 backdrop-blur-sm transition-all duration-300">
            <CardContent className="p-4 text-center space-y-2">
              <div className="w-12 h-12 mx-auto rounded-lg bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <tech.icon className="w-6 h-6 text-muted-foreground" />
              </div>
              <p className="text-sm font-medium text-foreground">{tech.name}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

// Componente de Serviços com Hover Effects
function Services() {
  const services = [
    {
      icon: Zap,
      title: "Prototipagem Rápida",
      description: "MVP funcional em 7-14 dias com validação de conceito",
      features: ["Design Sprint", "Desenvolvimento Ágil", "Deploy Automático"]
    },
    {
      icon: Target,
      title: "Validação de Mercado",
      description: "Teste rápido com usuários reais e métricas de engajamento",
      features: ["User Testing", "Analytics", "Feedback Loop"]
    },
    {
      icon: Rocket,
      title: "Time-to-Market",
      description: "Do conceito ao produto funcional em semanas, não meses",
      features: ["Stack Otimizada", "CI/CD", "Escalabilidade"]
    },
    {
      icon: Users,
      title: "Growth Hacking",
      description: "Estratégias para validar e escalar produtos rapidamente",
      features: ["A/B Testing", "Growth Loops", "Conversão"]
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {services.map((service, index) => (
              <motion.div
          key={service.title}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ y: -10 }}
          className="group"
        >
          <Card className="border-border/50 bg-card/40 hover:bg-card/60 backdrop-blur-xl transition-all duration-500 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-muted-foreground/20" />
            <CardContent className="p-6 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-muted-foreground" />
            </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <Badge key={feature} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          </motion.div>
      ))}
    </div>
  )
}

// Componente de Portfolio com Grid Dinâmico
function Portfolio() {
  const projects = [
    {
      title: "SaaS de Gestão",
      category: "MVP em 7 dias",
      image: "/images/portfolio-reference.png",
      tech: ["Next.js", "Stripe", "Supabase"]
    },
    {
      title: "App de Delivery",
      category: "MVP em 10 dias",
      image: "/images/portfolio-reference.png",
      tech: ["React Native", "Firebase", "Maps API"]
    },
    {
      title: "Marketplace",
      category: "MVP em 14 dias",
      image: "/images/portfolio-reference.png",
      tech: ["Next.js", "Stripe", "PostgreSQL"]
    },
    {
      title: "App de Finanças",
      category: "MVP em 12 dias",
      image: "/images/portfolio-reference.png",
      tech: ["React", "Plaid", "Vercel"]
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
          <motion.div 
          key={project.title}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
          className="group relative overflow-hidden rounded-2xl"
        >
          <Card className="border-border/50 bg-card/40 backdrop-blur-xl overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <Badge className="bg-muted/80 text-muted-foreground border-0 mb-2">
                  {project.category}
                </Badge>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          </motion.div>
      ))}
    </div>
  )
}

// Componente de Carrossel de Empresas Melhorado
function CompanyCarousel() {
  const companies = [
    "/empresas/Frame 26.png",
    "/empresas/Frame 27.png",
    "/empresas/Frame 28.png",
    "/empresas/Frame 29.png",
    "/empresas/Frame 30.png",
    "/empresas/Frame 31.png",
    "/empresas/Frame 32.png",
    "/empresas/Frame 33.png",
    "/empresas/Frame 34.png"
  ]

  return (
    <div className="relative overflow-hidden py-8">
      <div className="flex animate-scroll space-x-16">
        {[...companies, ...companies].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center"
            style={{
              width: `${Math.min(120 + (index % companies.length) * 20, 200)}px`,
              height: `${Math.min(60 + (index % companies.length) * 10, 100)}px`
            }}
          >
                <Image
              src={logo}
              alt={`Empresa ${index + 1}`}
              width={Math.min(120 + (index % companies.length) * 20, 200)}
              height={Math.min(60 + (index % companies.length) * 10, 100)}
              className="filter brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

// Componente de Estatísticas Animadas
function AnimatedStats() {
  const stats = [
    { number: 7, label: "Dias para MVP", icon: Zap },
    { number: 95, label: "% de Validação", icon: Target },
    { number: 50, label: "Produtos Lançados", icon: Rocket },
    { number: 10, label: "Milhões de Usuários", icon: Users }
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
          <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="text-center"
        >
          <Card className="border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-colors">
            <CardContent className="p-6 space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-muted flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-muted-foreground" />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                className="text-3xl font-bold text-foreground"
              >
                {stat.number}+
              </motion.div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

// Componente de CTA Melhorado
function EnhancedCTA() {
  return (
              <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-3xl"
    >
      <div className="absolute inset-0 bg-muted/20" />
      <Card className="border-border/50 bg-card/40 backdrop-blur-xl relative z-10">
        <CardContent className="p-8 md:p-12 text-center space-y-6">
          <div className="w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center">
            <Zap className="w-8 h-8 text-muted-foreground" />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Pronto para Validar sua Ideia em 7 Dias?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transforme seu conceito em MVP funcional em tempo recorde. 
              Valide no mercado antes que a concorrência perceba.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90">
              <Rocket className="mr-2 h-5 w-5" />
              Começar MVP
            </Button>
            <Button variant="outline" size="lg" className="border-border text-foreground hover:bg-muted">
              <Target className="mr-2 h-5 w-5" />
              Validar Ideia
            </Button>
          </div>
        </CardContent>
      </Card>
          </motion.div>
  )
}

// Componente de Sobre Mim
function AboutMe() {
  const experiences = [
    {
      company: "Augusto Cesar Design & Consultoria",
      role: "UX/UI Designer",
      period: "2023 - Present",
      description: "Especializado em User Research, Service Design e Mentoria UX/UI. Trabalhando com marcas importantes e agências de UX/UI."
    },
    {
      company: "Freelancer",
      role: "UX/UI Designer & Full Stack Developer",
      period: "2022 - Present",
      description: "Desenvolvimento de MVPs rápidos e funcionais, especializado em prototipagem e validação de mercado."
    },
    {
      company: "Projetos Próprios",
      role: "Empreendedor & Product Designer",
      period: "2022 - Present",
      description: "Criação e validação de produtos digitais, foco em UX do futuro e metodologias ágeis."
    }
  ]

  const education = [
    {
      institution: "UX Unicórnio",
      course: "UX/UI Design",
      period: "2023"
    },
    {
      institution: "UNIVERTAS",
      course: "Formação Acadêmica",
      period: "2022 - 2024"
    },
    {
      institution: "Cursos Online",
      course: "Next.js, React, TypeScript, Figma",
      period: "2022 - 2024"
    }
  ]

  const skills = [
    "Product Design", "User Experience (UX)", "Product Management",
    "Figma", "Next.js", "React", "TypeScript", "Tailwind CSS", 
    "UX Research", "Prototyping", "User Testing", "Service Design",
    "User Research", "Mentoria UX/UI", "Supabase", "Vercel"
  ]

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-transparent to-muted/5">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
          <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <Badge className="bg-muted/50 text-muted-foreground border-border/50 px-4 py-2 text-sm font-medium">
            Sobre Mim
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Hi, I'm Elias Santos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            UX/UI Designer & Full Stack Developer. Especializado em criar MVPs rápidos e funcionais. 
            Trabalho com marcas importantes e agências de UX/UI, transformando ideias em produtos que vendem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Coluna Principal */}
          <div className="lg:col-span-2 space-y-12">
            {/* Work Experience */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-foreground tracking-tight">Work Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="flex gap-4 p-6 rounded-xl bg-muted/20 backdrop-blur-sm border border-border/50">
                    <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-foreground">{exp.company}</h4>
                          <p className="text-muted-foreground">{exp.role}</p>
                        </div>
                        <span className="text-sm text-muted-foreground font-medium">{exp.period}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
              <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-foreground tracking-tight">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-lg bg-muted/10">
                    <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1 flex justify-between items-center">
                      <div>
                        <h4 className="font-medium text-foreground">{edu.institution}</h4>
                        <p className="text-sm text-muted-foreground">{edu.course}</p>
                      </div>
                      <span className="text-sm text-muted-foreground">{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Skills */}
                <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-foreground tracking-tight">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index}
                    variant="secondary" 
                    className="bg-muted/50 text-muted-foreground border-border/50 px-3 py-1 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
              
            {/* Stats */}
              <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-foreground tracking-tight">Stats</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-muted/20 backdrop-blur-sm border border-border/50">
                  <div className="text-2xl font-bold text-foreground">50+</div>
                  <div className="text-sm text-muted-foreground">MVPs Criados</div>
                </div>
                <div className="p-4 rounded-lg bg-muted/20 backdrop-blur-sm border border-border/50">
                  <div className="text-2xl font-bold text-foreground">7</div>
                  <div className="text-sm text-muted-foreground">Dias Média</div>
                </div>
                <div className="p-4 rounded-lg bg-muted/20 backdrop-blur-sm border border-border/50">
                  <div className="text-2xl font-bold text-foreground">95%</div>
                  <div className="text-sm text-muted-foreground">Taxa de Validação</div>
                </div>
              </div>
              </motion.div>
              
            {/* Contact */}
              <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-foreground tracking-tight">Get in Touch</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start border-border/50 text-foreground hover:bg-muted/50">
                  <Linkedin className="mr-3 h-4 w-4" />
                  LinkedIn
                </Button>
                <Button variant="outline" className="w-full justify-start border-border/50 text-foreground hover:bg-muted/50">
                  <Github className="mr-3 h-4 w-4" />
                  GitHub
                </Button>
                <Button variant="outline" className="w-full justify-start border-border/50 text-foreground hover:bg-muted/50">
                  <Mail className="mr-3 h-4 w-4" />
                  Email
                </Button>
              </div>
              </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}



export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])

  return (
    <div ref={containerRef} className="relative min-h-screen bg-background">
      {/* Elementos de Fundo */}
      <FloatingParticles />
      <DynamicGradient />
      
      {/* Progress Indicator */}
      <ProgressIndicator />
      
      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-start overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/5" />
        {/* Grid Pattern Simples */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--muted-foreground) / 0.2) 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        {/* Gradient transicionado embaixo do grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent"
        />
        
        {/* Gradient dinâmico que se move */}
        <motion.div
          animate={{
            background: [
              "linear-gradient(to top, hsl(var(--background)) 0%, hsl(var(--background)/0.8) 50%, transparent 100%)",
              "linear-gradient(to top, hsl(var(--background)) 0%, hsl(var(--background)/0.9) 30%, transparent 100%)",
              "linear-gradient(to top, hsl(var(--background)) 0%, hsl(var(--background)/0.8) 50%, transparent 100%)"
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        />
        
        {/* Partículas flutuantes no Hero */}
        <HeroParticles />
        
        {/* Conteúdo do Hero */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center space-y-6 px-4 max-w-5xl mx-auto mt-16"
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
              
              {/* Partículas sutis */}
              <EmailParticles />
              
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

                      {/* Projeto 3 */}
                      <div className="p-4 rounded-lg hover:bg-muted/20 cursor-pointer border border-transparent hover:border-border/30 relative overflow-hidden">
                        {/* Border Effect Simples */}
                        <div className="absolute inset-0 border border-border/20 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300" />
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-medium text-foreground">Dashboard Analytics</h4>
                            <p className="text-sm text-muted-foreground mt-1">Dashboard de analytics e métricas</p>
                            <p className="text-xs text-muted-foreground mt-2">
                              Interface para visualização de dados complexos. 
                              Design responsivo com gráficos interativos.
                            </p>
                            <div className="flex gap-2 mt-3">
                              <Badge variant="secondary" className="text-xs">Dashboard</Badge>
                              <Badge variant="secondary" className="text-xs">Analytics</Badge>
                              <Badge variant="secondary" className="text-xs">Data Viz</Badge>
                            </div>
                          </div>
                          <span className="text-xs text-muted-foreground">1 month ago</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Preview do Projeto */}
                  <div className="w-96 bg-muted/10 relative overflow-hidden">
                    {/* Border Effect Simples */}
                    <div className="absolute inset-0 border border-border/20 rounded-lg" />
                    <div className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold text-foreground">Ventu Chat</h3>
                          <p className="text-sm text-muted-foreground">Chatbot inteligente para atendimento ao cliente</p>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="p-4 rounded-lg bg-muted/20">
                            <h4 className="font-medium text-foreground text-sm">Tecnologias</h4>
                            <p className="text-xs text-muted-foreground mt-1">Next.js, OpenAI API, Supabase, Tailwind CSS</p>
                          </div>
                          
                          <div className="p-4 rounded-lg bg-muted/20">
                            <h4 className="font-medium text-foreground text-sm">Resultados</h4>
                            <ul className="text-xs text-muted-foreground mt-1 space-y-1">
                              <li>• MVP funcional em 5 dias</li>
                              <li>• 95% de satisfação dos usuários</li>
                              <li>• Redução de 80% no tempo de resposta</li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex gap-3 pt-4">
                          <Button size="sm" className="flex-1">
                            <Play className="mr-2 h-4 w-4" />
                            Ver Demo
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Target className="mr-2 h-4 w-4" />
                            Case Completo
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* Companies Section - Movido para logo após o Hero */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-muted/5 to-transparent">
        <div className="max-w-6xl mx-auto space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <Badge className="bg-muted/50 text-muted-foreground border-border/50 px-4 py-2 text-sm font-medium">
              Parceiros
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Empresas que Confiam no Meu Trabalho
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Colaborações com empresas de diversos setores, sempre entregando 
              resultados excepcionais em tempo recorde.
            </p>
          </motion.div>
          
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-muted/10 to-transparent" />
            <CompanyCarousel />
          </motion.div>
        </div>
      </section>

      

      {/* Case de Sucesso - Ventu Chat */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-transparent to-muted/5">
        <div className="max-w-6xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <Badge className="bg-muted/50 text-muted-foreground border-border/50 px-4 py-2 text-sm font-medium">
              Case de Sucesso
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Ventu Chat
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              MVP de chatbot inteligente desenvolvido em 5 dias. 
              Validação de mercado em tempo recorde com resultados impressionantes.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground tracking-tight">O Desafio</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Criar um chatbot inteligente para atendimento ao cliente em tempo recorde, 
                    com integração a múltiplas plataformas e análise de sentimentos.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground tracking-tight">A Solução</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    MVP desenvolvido em 5 dias usando Next.js, OpenAI API e Supabase. 
                    Interface intuitiva com dashboard em tempo real.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground tracking-tight">Resultados</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3 p-3 rounded-lg bg-muted/20 backdrop-blur-sm">
                      <Zap className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      <span>MVP funcional em 5 dias</span>
                    </li>
                    <li className="flex items-center gap-3 p-3 rounded-lg bg-muted/20 backdrop-blur-sm">
                      <Target className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      <span>95% de satisfação dos usuários</span>
                    </li>
                    <li className="flex items-center gap-3 p-3 rounded-lg bg-muted/20 backdrop-blur-sm">
                      <Rocket className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      <span>Redução de 80% no tempo de resposta</span>
                    </li>
                    <li className="flex items-center gap-3 p-3 rounded-lg bg-muted/20 backdrop-blur-sm">
                      <Users className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      <span>10.000+ conversas processadas</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                    <Play className="mr-3 h-6 w-6" />
                    Ver Demo
                  </Button>
                  <Button variant="outline" className="border-2 border-border text-foreground hover:bg-muted/50 px-8 py-6 text-lg font-medium backdrop-blur-sm transition-all duration-300">
                    <Target className="mr-3 h-6 w-6" />
                    Case Completo
                  </Button>
                </div>
              </div>
            </motion.div>

                <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Vídeo Principal */}
              <div className="relative aspect-video bg-muted/30 rounded-2xl overflow-hidden shadow-2xl border border-border/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-20 h-20 mx-auto rounded-full bg-muted/50 flex items-center justify-center cursor-pointer shadow-lg"
                    >
                      <Play className="w-10 h-10 text-muted-foreground" />
                    </motion.div>
                    <p className="text-muted-foreground font-medium">Vídeo Demo - Ventu Chat</p>
                  </div>
                </div>
              </div>

              {/* GIFs/Imagens Secundárias */}
              <div className="grid grid-cols-2 gap-6">
                    <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square bg-muted/30 rounded-xl overflow-hidden shadow-lg border border-border/20 cursor-pointer"
                >
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center space-y-3">
                      <div className="w-12 h-12 mx-auto rounded-full bg-muted/50 flex items-center justify-center">
                        <MousePointer className="w-6 h-6 text-muted-foreground" />
                  </div>
                      <p className="text-sm text-muted-foreground font-medium">Interface</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square bg-muted/30 rounded-xl overflow-hidden shadow-lg border border-border/20 cursor-pointer"
                >
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center space-y-3">
                      <div className="w-12 h-12 mx-auto rounded-full bg-muted/50 flex items-center justify-center">
                        <Database className="w-6 h-6 text-muted-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground font-medium">Dashboard</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Estatísticas do Case */}
              <Card className="border-border/30 bg-card/30 backdrop-blur-sm shadow-xl">
                <CardContent className="p-8">
                  <h4 className="font-bold text-foreground mb-6 text-lg">Métricas do Projeto</h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center space-y-2 p-4 rounded-lg bg-muted/20">
                      <div className="text-3xl font-bold text-foreground">5</div>
                      <div className="text-sm text-muted-foreground font-medium">Dias</div>
                    </div>
                    <div className="text-center space-y-2 p-4 rounded-lg bg-muted/20">
                      <div className="text-3xl font-bold text-foreground">95%</div>
                      <div className="text-sm text-muted-foreground font-medium">Satisfação</div>
                    </div>
                    <div className="text-center space-y-2 p-4 rounded-lg bg-muted/20">
                      <div className="text-3xl font-bold text-foreground">80%</div>
                      <div className="text-sm text-muted-foreground font-medium">Redução</div>
                    </div>
                    <div className="text-center space-y-2 p-4 rounded-lg bg-muted/20">
                      <div className="text-3xl font-bold text-foreground">10k+</div>
                      <div className="text-sm text-muted-foreground font-medium">Conversas</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <Badge className="bg-muted text-muted-foreground border-border">
              Metodologia
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              O Futuro da Prototipagem Rápida
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Revoluciono a forma como produtos digitais são criados. 
              Combinando design thinking, desenvolvimento ágil e tecnologias de ponta 
              para entregar MVPs funcionais em tempo recorde.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                    <Zap className="w-6 h-6 text-muted-foreground" />
                    </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Prototipagem Rápida</h3>
                    <p className="text-muted-foreground">MVP funcional em 7-14 dias</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                    <Target className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Validação de Mercado</h3>
                    <p className="text-muted-foreground">Teste rápido com usuários reais</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Time-to-Market</h3>
                    <p className="text-muted-foreground">Do conceito ao produto em semanas</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button className="bg-foreground text-background hover:bg-foreground/90">
                  <Rocket className="mr-2 h-4 w-4" />
                  Ver Metodologia
                </Button>
                <Button variant="outline" className="border-border text-foreground hover:bg-muted">
                  <Target className="mr-2 h-4 w-4" />
                  Case Studies
                </Button>
                  </div>
                </motion.div>

                  <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Card className="border-border/50 bg-card/40 backdrop-blur-xl overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src="/images/profile-photo.jpg"
                    alt="Profile"
                    width={500}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </CardContent>
              </Card>
              
              {/* Elementos Decorativos */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-xl" />
                  </motion.div>
                </div>
        </div>
      </section>
          
      {/* Tech Stack Section */}
      <section className="relative py-20 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <Badge className="bg-muted text-muted-foreground border-border">
              Stack Rápida
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ferramentas do Futuro
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Stack otimizada para velocidade e funcionalidade. 
              Tecnologias que permitem prototipagem em tempo recorde 
              sem comprometer a qualidade.
            </p>
              </motion.div>
          
          <TechStack />
          </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
              <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <Badge className="bg-muted text-muted-foreground border-border">
              Processo
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Metodologia de Aceleração
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Processo otimizado para transformar ideias em MVPs funcionais 
              em tempo recorde, validando conceitos rapidamente no mercado.
            </p>
          </motion.div>
          
          <Services />
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto space-y-16">
                  <motion.div 
            initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <Badge className="bg-muted text-muted-foreground border-border">
              Resultados
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Velocidade que Impressiona
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Números que comprovam a eficiência da metodologia de prototipagem rápida.
            </p>
                  </motion.div>

          <AnimatedStats />
                </div>
      </section>

      {/* Portfolio Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <Badge className="bg-muted text-muted-foreground border-border">
              MVPs Rápidos
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Casos de Sucesso
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Produtos validados e lançados em tempo recorde, 
              demonstrando o poder da prototipagem rápida.
            </p>
        </motion.div>
          
          <Portfolio />
                </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <EnhancedCTA />
        </div>
      </section>
    </div>
  )
}
