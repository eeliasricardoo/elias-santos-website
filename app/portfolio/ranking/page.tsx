"use client"

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function RankingCasePage() {
  const router = useRouter();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <main className="max-w-4xl mx-auto py-12 px-4 space-y-20 pt-24">
      {/* HEADER */}
      <header className="mb-10 text-left">
        {/* Botão Voltar */}
        <div className="mb-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleGoBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 text-left">
          <h1 className="text-4xl font-bold leading-tight text-left">UX Case Study: Ranking System for Gamification</h1>
        </div>
        {/* Imagem do ranking */}
        <div className="mb-8 text-left">
          <img 
            src="/portfolios/ranking/1_Eqflzr9sr1z_mH6CUvohrQ.gif" 
            alt="XP Ranking System Interface" 
            className="w-full max-w-4xl rounded-lg shadow-lg"
          />
        </div>
        <div className="flex gap-4 mb-8 justify-start">
          <div className="bg-muted text-foreground rounded-lg px-6 py-4 text-center flex-1 shadow-md border border-border">
            <div className="text-2xl font-bold">+40%</div>
            <div className="text-xs uppercase tracking-wide text-muted-foreground">Engajamento</div>
          </div>
          <div className="bg-muted text-foreground rounded-lg px-6 py-4 text-center flex-1 shadow-md border border-border">
            <div className="text-2xl font-bold">+12.000</div>
            <div className="text-xs uppercase tracking-wide text-muted-foreground">Usuários</div>
          </div>
          <div className="bg-muted text-foreground rounded-lg px-6 py-4 text-center flex-1 shadow-md border border-border">
            <div className="text-2xl font-bold">18</div>
            <div className="text-xs uppercase tracking-wide text-muted-foreground">Instituições</div>
          </div>
        </div>
      </header>

      {/* INTRODUÇÃO */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        
        <p className="text-muted-foreground text-lg">
          In digital education platforms, gamification has been an effective tool for engaging students. One of the main gamified mechanisms is the ranking system, which allows students to track their progress and compare their performance with peers.
        </p>
        <p className="text-muted-foreground text-lg">
          This case study documents the UX design process for implementing a ranking system based on XP (experience points) within a learning platform.
        </p>
        
        {/* Animação de Gamificação */}
        <div className="relative mt-8 p-6 bg-muted/20 rounded-lg border border-border/20">
          {/* Barra de progresso animada */}
          <div className="relative z-10 mb-6">
            <div className="bg-gray-800 rounded-full h-4 overflow-hidden border border-border/30">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "85%" }}
                transition={{ 
                  duration: 2, 
                  ease: "easeOut",
                  delay: 0.5
                }}
                className="bg-gray-400 h-full rounded-full shadow-lg"
              />
            </div>
            <div className="flex justify-between text-sm text-foreground mt-2">
              <span className="font-medium">0 XP</span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="font-bold text-gray-400"
              >
                8,500 XP
              </motion.span>
            </div>
          </div>
          
          {/* Ranking animado */}
          <div className="relative z-10 space-y-3">
            {[{
              pos: 1, label: 'Top Student', level: 15, xp: '8,500', color: 'bg-gray-700'
            }, {
              pos: 2, label: 'Active Learner', level: 12, xp: '7,200', color: 'bg-gray-500'
            }, {
              pos: 3, label: 'Dedicated Student', level: 10, xp: '6,800', color: 'bg-gray-400'
            }].map((item, idx) => (
              <div key={item.pos} className={`flex items-center space-x-4 p-3 rounded-lg border ${idx === 0 ? 'bg-background/50 border-border/30' : idx === 1 ? 'bg-background/30 border-border/20' : 'bg-background/20 border-border/10'}`}>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 + idx * 0.4 }}
                  className={`flex items-center justify-center w-10 h-10 rounded-full shadow-lg text-white text-sm font-bold ${item.color}`}
                >
                  {item.pos}
                </motion.div>
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + idx * 0.4 }}
                  className="flex-1"
                >
                  <div className="text-sm font-semibold text-foreground">{item.label}</div>
                  <div className="text-xs text-muted-foreground">Level {item.level} • {item.xp} XP</div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEMA IDENTIFICADO */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold mb-2">Identified Problem</h2>
        <p className="text-muted-foreground text-lg">
          Platform administrators want to identify the most engaged students and incentivize them through rewards. However, the current system lacks a structured mechanism to classify and display the best-performing students.
        </p>
        <p className="text-muted-foreground text-lg">
          The main pain points are:
        </p>
        <ul className="text-muted-foreground list-disc ml-6 space-y-1">
          <li>Lack of a visible ranking for students to track their progress.</li>
          <li>Absence of an opt-in system for students who want to participate in the ranking.</li>
          <li>Uncertainty about the use of historical data, affecting ranking accuracy.</li>
          <li>Low interface clarity for administrators and students.</li>
        </ul>
      </section>

      {/* OBJETIVOS DO PROJETO */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold mb-2">Project Objectives</h2>
        <ul className="text-muted-foreground list-disc ml-6 space-y-1">
          <li>Create a dynamic ranking based on XP, updated in real-time.</li>
          <li>Allow students to opt-in or opt-out of the ranking.</li>
          <li>Ensure an intuitive and responsive interface for admins and students.</li>
          <li>Implement view filters (by unit, by period: week, month, year).</li>
          <li>Guarantee security and privacy, respecting students' decisions.</li>
        </ul>
      </section>

      {/* AUTHOR */}
      <section className="border-t pt-8 flex items-center gap-4">
        <div>
          <div className="font-semibold text-lg">Elias Santos</div>
          <div className="text-muted-foreground">UX Designer & Product Manager</div>
        </div>
      </section>
    </main>
  );
} 