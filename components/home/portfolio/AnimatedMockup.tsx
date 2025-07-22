"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface AnimatedMockupProps {
  type: "ranking" | "weighted" | "ux-research" | "ventus-chat"
}

export function AnimatedMockup({ type }: AnimatedMockupProps) {
  const [currentScore, setCurrentScore] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScore(prev => (prev + Math.floor(Math.random() * 50) + 10) % 1000)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  // Remover o useEffect de simulação de digitação, pois não é mais usado

  if (type === "ventus-chat") {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Background Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        {/* Chat Container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full h-full bg-gradient-to-br from-background/95 via-card/90 to-muted/80 rounded-2xl overflow-hidden backdrop-blur-xl border border-border/20 shadow-2xl"
        >
          {/* Chat Messages */}
          <div className="flex-1 p-4 space-y-3 overflow-hidden h-[calc(100%-5rem)]">
            {/* AI Message 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex items-end space-x-2"
            >
              <div className="w-6 h-6 rounded-full bg-primary/80 flex items-center justify-center">
                <span className="text-xs font-bold text-primary-foreground">AI</span>
              </div>
              <div className="bg-card/70 backdrop-blur-sm rounded-2xl rounded-bl-md p-3 border border-border/20 shadow-sm max-w-[80%]">
                <p className="text-xs text-foreground leading-relaxed">
                  Olá! Como posso ajudar você hoje?
                </p>
              </div>
            </motion.div>

            {/* User Message */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex items-end space-x-2 justify-end"
            >
              <div className="bg-primary/80 backdrop-blur-sm rounded-2xl rounded-br-md p-3 border border-primary/20 shadow-sm max-w-[80%]">
                <p className="text-xs text-primary-foreground leading-relaxed">
                  Preciso de ajuda com React
                </p>
              </div>
              <div className="w-6 h-6 rounded-full bg-muted-foreground/60 flex items-center justify-center">
                <span className="text-xs font-bold text-primary-foreground">U</span>
              </div>
            </motion.div>

            {/* AI Message 2 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2, duration: 0.6 }}
              className="flex items-end space-x-2"
            >
              <div className="w-6 h-6 rounded-full bg-primary/80 flex items-center justify-center">
                <span className="text-xs font-bold text-primary-foreground">AI</span>
              </div>
              <div className="bg-card/70 backdrop-blur-sm rounded-2xl rounded-bl-md p-3 border border-border/20 shadow-sm max-w-[80%]">
                <p className="text-xs text-foreground leading-relaxed">
                  Claro! O que você quer saber sobre React?
                </p>
              </div>
            </motion.div>

            {/* User Message 2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3, duration: 0.6 }}
              className="flex items-end space-x-2 justify-end"
            >
              <div className="bg-primary/80 backdrop-blur-sm rounded-2xl rounded-br-md p-3 border border-primary/20 shadow-sm max-w-[80%]">
                <p className="text-xs text-primary-foreground leading-relaxed">
                  Como criar um componente?
                </p>
              </div>
              <div className="w-6 h-6 rounded-full bg-muted-foreground/60 flex items-center justify-center">
                <span className="text-xs font-bold text-primary-foreground">U</span>
              </div>
            </motion.div>

            {/* AI Typing Indicator */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 4, duration: 0.6 }}
              className="flex items-end space-x-2"
            >
              <div className="w-6 h-6 rounded-full bg-primary/80 flex items-center justify-center">
                <span className="text-xs font-bold text-primary-foreground">AI</span>
              </div>
              <div className="bg-card/70 backdrop-blur-sm rounded-2xl rounded-bl-md p-3 border border-border/20 shadow-sm">
                <div className="flex space-x-1">
                  <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                    className="w-2 h-2 bg-muted-foreground rounded-full"
                  />
                  <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                    className="w-2 h-2 bg-muted-foreground rounded-full"
                  />
                  <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                    className="w-2 h-2 bg-muted-foreground rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Input Bar */}
          <div className="p-4 border-t border-border/20">
            <div className="flex items-center space-x-2">
              <div className="flex-1 bg-muted/50 rounded-full px-4 py-2">
                <p className="text-sm text-muted-foreground">Digite uma mensagem...</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-8 h-8 bg-primary/80 rounded-full flex items-center justify-center"
              >
                <span className="text-xs text-primary-foreground">→</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Background Glow */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-primary/20 rounded-full blur-3xl -z-10"
        />
      </div>
    )
  }

  if (type === "ranking") {
    return (
      <div className="w-full h-full flex items-center justify-center bg-transparent">
        <div className="w-full max-w-xs mx-auto p-4 bg-card/80 rounded-xl border border-border/20 shadow-none space-y-6">
          {/* Título */}
          <div className="text-center space-y-1">
            <h3 className="text-lg font-semibold text-foreground">Ranking</h3>
            <p className="text-xs text-muted-foreground">Engagement Score</p>
          </div>

          {/* Score */}
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">{currentScore}</div>
            <div className="text-xs text-muted-foreground">points</div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Progress</span>
              <span>75%</span>
            </div>
            <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-primary/60 rounded-full transition-all duration-700" />
            </div>
          </div>

          {/* Lista de Usuários */}
          <div className="space-y-2">
            {[
              { name: "Ana Silva", score: 892, emoji: "👑" },
              { name: "João Costa", score: 756, emoji: "🥈" },
              { name: "Maria Santos", score: 634, emoji: "🥉" }
            ].map((user, index) => (
              <div
                key={user.name}
                className="flex items-center space-x-2 bg-card/60 rounded-lg px-3 py-2"
              >
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="text-xs font-medium text-foreground">{user.name}</div>
                  <div className="text-[10px] text-muted-foreground">{user.emoji} Top</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-foreground">{user.score}</div>
                  <div className="text-[10px] text-muted-foreground">pts</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Placeholder para outros tipos
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-muted-foreground">Mockup {type} em desenvolvimento</div>
    </div>
  )
} 