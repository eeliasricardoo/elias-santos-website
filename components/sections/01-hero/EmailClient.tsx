"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Users, Code, Rocket, Target } from "lucide-react"

export function EmailClient() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 1.2 }}
      className="relative z-10 mt-16 px-4"
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Brilho de fundo - ATRÁS do card */}
        <div className="absolute inset-0 -bottom-40 -left-40 -right-40 -top-20 bg-gradient-to-t from-white/10 via-white/30 to-transparent rounded-full blur-3xl -z-10" />
        
        <Card className="border-border/50 bg-card/40 backdrop-blur-xl relative overflow-hidden shadow-2xl">
          
          <CardContent className="p-0">
            {/* Header do Email Client */}
            <div className="flex items-center justify-between p-6 border-b border-border/30">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                </div>
                <span className="font-semibold text-foreground">Elias Santos</span>
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
                        <p className="text-sm text-muted-foreground mt-1">Intelligent chatbot for customer service</p>
                        <p className="text-xs text-muted-foreground mt-2">
                          MVP developed in 5 days using Next.js, OpenAI API and Supabase. 
                          Intuitive interface with real-time dashboard.
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
                        <p className="text-sm text-muted-foreground mt-1">Complete e-commerce platform</p>
                        <p className="text-xs text-muted-foreground mt-2">
                          Complete design system with reusable components. 
                          Focus on conversion and user experience.
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
                    <p className="text-sm text-muted-foreground mt-1">Intelligent chatbot for customer service</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Technologies</h4>
                    <p className="text-sm text-muted-foreground">Next.js, OpenAI API, Supabase, Tailwind CSS</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Results</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Functional MVP in 5 days</li>
                      <li>• 95% user satisfaction</li>
                      <li>• 80% reduction in response time</li>
                    </ul>
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button size="sm" className="bg-foreground text-background hover:bg-foreground/90">
                      View Demo
                    </Button>
                    <Button variant="outline" size="sm" className="border-border text-foreground hover:bg-muted/50">
                      Full Case Study
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
} 