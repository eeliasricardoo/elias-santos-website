"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, Rocket, Target } from "lucide-react"

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
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
      </div>
    </section>
  )
} 