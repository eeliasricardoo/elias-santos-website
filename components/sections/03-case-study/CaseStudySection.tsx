"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Zap,
  Target,
  Rocket,
  Users,
  Play,
  MousePointer,
  Database,
  Code,
  MessageCircle,
  CheckCircle2
} from "lucide-react"
import Image from "next/image"

const metrics = [
  { icon: <Zap className="w-5 h-5 text-primary" />, label: "Dias", value: "5" },
  { icon: <Target className="w-5 h-5 text-primary" />, label: "Satisfação", value: "95%" },
  { icon: <Rocket className="w-5 h-5 text-primary" />, label: "Redução", value: "80%" },
  { icon: <Users className="w-5 h-5 text-primary" />, label: "Conversas", value: "10k+" }
]

const techs = [
  { icon: <Code className="w-4 h-4 text-muted-foreground" />, name: "Next.js" },
  { icon: <MessageCircle className="w-4 h-4 text-muted-foreground" />, name: "OpenAI API" },
  { icon: <Database className="w-4 h-4 text-muted-foreground" />, name: "Supabase" },
  { icon: <CheckCircle2 className="w-4 h-4 text-muted-foreground" />, name: "Tailwind CSS" }
]

export function CaseStudySection() {
  return (
    <section className="relative py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <Badge className="bg-muted/50 text-muted-foreground border-border/50 px-4 py-2 text-sm font-medium">
            Case de Sucesso
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Ventu Chat
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            MVP de chatbot inteligente desenvolvido em 5 dias. Validação de mercado em tempo recorde com resultados impressionantes.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(180px,1fr)]">
          {/* Vídeo Demo - destaque maior */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden shadow-xl border border-border/20 bg-card/80 flex flex-col justify-center items-center relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-muted/40 via-transparent to-transparent pointer-events-none" />
            <div className="flex-1 flex flex-col justify-center items-center p-8">
              <motion.div
                whileHover={{ scale: 1.08 }}
                className="w-24 h-24 mx-auto rounded-full bg-muted/60 flex items-center justify-center cursor-pointer shadow-lg border-2 border-primary/30 mb-4"
              >
                <Play className="w-12 h-12 text-primary" />
              </motion.div>
              <p className="text-muted-foreground font-medium text-center">Vídeo Demo - Ventu Chat</p>
            </div>
          </motion.div>

          {/* Métricas - 4 cards pequenos */}
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (i + 1) }}
              className="rounded-2xl bg-card/80 border border-border/20 shadow flex flex-col items-center justify-center p-6 text-center"
            >
              <div className="mb-2">{m.icon}</div>
              <div className="text-2xl font-bold text-foreground">{m.value}</div>
              <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mt-1">{m.label}</div>
            </motion.div>
          ))}

          {/* Tecnologias - card horizontal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-2 flex flex-col justify-center rounded-2xl bg-card/80 border border-border/20 shadow p-6 gap-4"
          >
            <div className="font-semibold text-foreground mb-2">Tecnologias Utilizadas</div>
            <div className="flex flex-wrap gap-4">
              {techs.map((t) => (
                <div key={t.name} className="flex items-center gap-2 px-3 py-2 bg-muted/40 rounded-lg text-sm">
                  {t.icon}
                  <span>{t.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Resultados - card vertical */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:row-span-2 flex flex-col justify-center rounded-2xl bg-card/80 border border-border/20 shadow p-6 gap-4"
          >
            <div className="font-semibold text-foreground mb-2">Resultados</div>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> MVP funcional em 5 dias</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> 95% de satisfação dos usuários</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Redução de 80% no tempo de resposta</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> 10.000+ conversas processadas</li>
            </ul>
            <div className="flex gap-3 pt-2">
              <Button size="sm" className="bg-primary text-background hover:bg-primary/90">
                Ver Demo
              </Button>
              <Button variant="outline" size="sm" className="border-border text-foreground hover:bg-muted/50">
                Case Completo
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 