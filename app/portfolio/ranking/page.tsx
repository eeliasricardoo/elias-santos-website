"use client"

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from 'next/image';

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
          <Image 
            src="/portfolios/ranking/1_Eqflzr9sr1z_mH6CUvohrQ.gif" 
            alt="XP Ranking System Interface" 
            className="w-full max-w-4xl rounded-lg shadow-lg"
            width={1024}
            height={768}
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
        {/* Animação de Problema */}
        <div className="relative mt-8 p-6 bg-muted/20 rounded-lg border border-border/20">
          {/* Cards animados dos pain points */}
          <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: 'No Ranking Visibility',
                desc: 'Students can\'t track their progress.'
              },
              {
                title: 'No Opt-in System',
                desc: 'No way for students to choose participation.'
              },
              {
                title: 'Data Uncertainty',
                desc: 'Historical data use is unclear.'
              },
              {
                title: 'Low Interface Clarity',
                desc: 'Admins and students struggle with the UI.'
              }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 + idx * 0.2 }}
                className="bg-background/80 border border-border/20 rounded-lg p-4 shadow-sm flex flex-col gap-2"
              >
                <div className="font-semibold text-foreground text-base">{item.title}</div>
                <div className="text-sm text-muted-foreground">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OBJETIVOS DO PROJETO */}
      <section className="space-y-4">
          <h2 className="text-2xl font-semibold mb-2">Project Objectives</h2>
        <ul className="text-muted-foreground list-disc ml-6 space-y-1 text-lg">
            <li>Create a dynamic ranking based on XP, updated in real-time.</li>
            <li>Allow students to opt-in or opt-out of the ranking.</li>
            <li>Ensure an intuitive and responsive interface for admins and students.</li>
            <li>Implement view filters (by unit, by period: week, month, year).</li>
            <li>Guarantee security and privacy, respecting students&apos; decisions.</li>
          </ul>
      </section>

      {/* RESEARCH & BENCHMARKING */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold mb-2">Research & Benchmarking</h2>
        <p className="text-muted-foreground text-lg">
          To support the design, we conducted user research and analyzed similar systems, such as:
        </p>
        
        {/* Animação de Benchmarking */}
        <div className="relative mt-8 p-6 bg-muted/20 rounded-lg border border-border/20">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Duolingo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-background/80 border border-border/20 rounded-lg p-6 shadow-sm flex flex-col items-center text-center"
            >
              <div className="mb-4">
                <Image 
                  src="/images/0_30Q1h7enGUIb_zha.webp" 
                  alt="Duolingo" 
                  className="h-16 w-auto"
                  width={64}
                  height={64}
                />
              </div>
              <div className="font-semibold text-foreground text-lg mb-2">Duolingo</div>
              <div className="text-sm text-muted-foreground">
                Weekly ranking with opt-in and reward incentives.
              </div>
            </motion.div>
            
            {/* Khan Academy */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-background/80 border border-border/20 rounded-lg p-6 shadow-sm flex flex-col items-center text-center"
            >
              <div className="mb-4">
                <Image 
                  src="/images/0_kFjeH7TxKlRoneaa.webp" 
                  alt="Khan Academy" 
                  className="h-16 w-auto opacity-70"
                  width={64}
                  height={64}
                />
              </div>
              <div className="font-semibold text-foreground text-lg mb-2">Khan Academy</div>
              <div className="text-sm text-muted-foreground">
                Points system and leaderboard per class.
              </div>
            </motion.div>
            
            {/* Coursera */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-background/80 border border-border/20 rounded-lg p-6 shadow-sm flex flex-col items-center text-center"
            >
              <div className="mb-4">
                <Image 
                  src="/images/0_qMjDhi5-9niX47Oq.webp" 
                  alt="Coursera" 
                  className="h-16 w-auto"
                  width={64}
                  height={64}
                />
              </div>
              <div className="font-semibold text-foreground text-lg mb-2">Coursera</div>
              <div className="text-sm text-muted-foreground">
                Use of badges and points to encourage engagement.
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* KEY INSIGHTS FROM RESEARCH */}
      <section className="space-y-4">
          <h2 className="text-2xl font-semibold mb-2">Key insights from research</h2>
        <ul className="text-muted-foreground list-disc ml-6 space-y-1 text-lg">
            <li>Transparency in participation: Users should be able to easily opt-in or opt-out of the ranking.</li>
            <li>Immediate visual feedback: Highlighting the user&apos;s position on the leaderboard improves engagement.</li>
            <li>Intuitive filters: Allowing different time filters increases the ranking&apos;s usability.</li>
          </ul>
      </section>

      {/* PERSONAS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold mb-2">Personas</h2>
        <div className="space-y-4">
          {/* Alice */}
          <div className="bg-muted/20 rounded-lg p-6 border border-border/20">
            <div className="font-semibold text-foreground text-lg mb-2">Alice — Engaged Student</div>
            <div className="text-muted-foreground text-sm mb-3">Age: 22 years old</div>
            <div className="space-y-2 text-lg">
        <div>
                <span className="font-semibold text-foreground">Goal:</span>
                <span className="text-muted-foreground"> Track her academic progress and improve her ranking position.</span>
        </div>
        <div>
                <span className="font-semibold text-foreground">Needs:</span>
                <span className="text-muted-foreground"> A ranking that is easy to understand, with clear visual feedback about her position.</span>
          </div>
          <div>
                <span className="font-semibold text-foreground">Pain Points:</span>
                <span className="text-muted-foreground"> Lack of clarity in scoring and difficulties comparing her progress with others.</span>
              </div>
            </div>
          </div>

          {/* Bob */}
          <div className="bg-muted/20 rounded-lg p-6 border border-border/20">
            <div className="font-semibold text-foreground text-lg mb-2">Bob — Private Student</div>
            <div className="text-muted-foreground text-sm mb-3">Age: 24 years old</div>
            <div className="space-y-2 text-lg">
              <div>
                <span className="font-semibold text-foreground">Goal:</span>
                <span className="text-muted-foreground"> Focus on learning without worrying about comparisons.</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">Needs:</span>
                <span className="text-muted-foreground"> An easy option to opt out of the ranking and avoid public exposure of his performance.</span>
        </div>
        <div>
                <span className="font-semibold text-foreground">Pain Points:</span>
                <span className="text-muted-foreground"> Concern about having his performance publicly compared without consent.</span>
        </div>
            </div>
          </div>

          {/* Carla */}
          <div className="bg-muted/20 rounded-lg p-6 border border-border/20">
            <div className="font-semibold text-foreground text-lg mb-2">Carla — Institution Administrator</div>
            <div className="text-muted-foreground text-sm mb-3">Age: 35 years old</div>
            <div className="space-y-2 text-lg">
              <div>
                <span className="font-semibold text-foreground">Goal:</span>
                <span className="text-muted-foreground"> Monitor student performance and encourage engagement in the platform.</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">Needs:</span>
                <span className="text-muted-foreground"> Access to detailed reports and the ability to enable/disable the ranking as needed.</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">Pain Points:</span>
                <span className="text-muted-foreground"> Lack of granular control over which students participate in the ranking.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USER JOURNEY MAP */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold mb-2">User Journey Map</h2>
        <p className="text-muted-foreground text-lg mb-8">Student Participating in the Ranking</p>
        
        <div className="relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-500/5 via-gray-500/5 to-gray-500/5 rounded-2xl blur-3xl"></div>
          
          {/* Timeline Container */}
          <div className="relative bg-gray-100 dark:bg-zinc-800/50 backdrop-blur-xl border border-gray-200 dark:border-zinc-700/50 rounded-2xl p-6">
            {/* Main timeline - vertical */}
            <div className="flex flex-col items-center gap-6">
              {/* Step 1: Access Platform */}
              <div className="relative bg-white/10 dark:bg-zinc-900/20 backdrop-blur-xl border border-white/20 dark:border-zinc-700/50 rounded-xl p-6 shadow-lg w-full max-w-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-100/80 dark:bg-gray-800/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-base mb-1">Access the platform</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Alice logs into the educational platform.</p>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/30 rounded-lg p-3">
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>Login Screen</span>
                  </div>
                </div>
              </div>
              
              {/* Arrow 1 */}
              <div className="text-gray-400 dark:text-gray-500 text-2xl font-bold">
                ↓
              </div>

              {/* Step 2: Opt-in Modal */}
              <div className="relative bg-white/10 dark:bg-zinc-900/20 backdrop-blur-xl border border-white/20 dark:border-zinc-700/50 rounded-xl p-6 shadow-lg w-full max-w-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-100/80 dark:bg-gray-800/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-base mb-1">Opt-in Modal</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">The system presents a modal asking if she wants to participate in the ranking.</p>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/30 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Participation Question</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-8 h-6 bg-green-100 dark:bg-green-900/30 rounded text-xs flex items-center justify-center text-green-600 dark:text-green-400 font-medium">Yes</div>
                      <div className="w-8 h-6 bg-gray-100 dark:bg-gray-700/30 rounded text-xs flex items-center justify-center text-gray-500 dark:text-gray-400">No</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Arrow 2 */}
              <div className="text-gray-400 dark:text-gray-500 text-2xl font-bold">
                ↓
              </div>

              {/* Step 3: Participation Confirmation */}
              <div className="relative bg-white/10 dark:bg-zinc-900/20 backdrop-blur-xl border border-white/20 dark:border-zinc-700/50 rounded-xl p-6 shadow-lg w-full max-w-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-100/80 dark:bg-gray-800/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-base mb-1">Participation Confirmation</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Alice opts in and sees her initial ranking position.</p>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/30 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <span>Current Position: #15</span>
                    </div>
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Arrow 3 */}
              <div className="text-gray-400 dark:text-gray-500 text-2xl font-bold">
                ↓
              </div>

              {/* Step 4: Tracking Progress */}
              <div className="relative bg-white/10 dark:bg-zinc-900/20 backdrop-blur-xl border border-white/20 dark:border-zinc-700/50 rounded-xl p-6 shadow-lg w-full max-w-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-100/80 dark:bg-gray-800/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-base mb-1">Tracking Progress</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">She can view her position in real-time and filter by different periods.</p>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/30 rounded-lg p-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500 dark:text-gray-400">Weekly</span>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">#12</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500 dark:text-gray-400">Monthly</span>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">#8</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500 dark:text-gray-400">Total</span>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">#15</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Arrow 4 */}
              <div className="text-gray-400 dark:text-gray-500 text-2xl font-bold">
                ↓
              </div>

              {/* Step 5: Improving Position */}
              <div className="relative bg-white/10 dark:bg-zinc-900/20 backdrop-blur-xl border border-white/20 dark:border-zinc-700/50 rounded-xl p-6 shadow-lg w-full max-w-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-100/80 dark:bg-gray-800/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-base mb-1">Improving Position</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Alice is motivated to earn more XP to climb the ranking.</p>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/30 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span>XP Earned: +150</span>
                    </div>
                    <div className="text-xs text-green-600 dark:text-green-400 font-medium">↑ #10</div>
                  </div>
                </div>
              </div>
              
              {/* Arrow 5 */}
              <div className="text-gray-400 dark:text-gray-500 text-2xl font-bold">
                ↓
              </div>

              {/* Step 6: Rewards */}
              <div className="relative bg-white/10 dark:bg-zinc-900/20 backdrop-blur-xl border border-white/20 dark:border-zinc-700/50 rounded-xl p-6 shadow-lg w-full max-w-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-100/80 dark:bg-gray-800/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-base mb-1">Rewards</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">If she reaches the top, she receives an incentive from the institution.</p>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/30 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                      <span>Top 3 Prize: $500</span>
                    </div>
                    <div className="w-6 h-6 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USER JOURNEY MAP - OPTING OUT */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold mb-2">User Journey Map</h2>
        <p className="text-muted-foreground text-lg mb-8">Student Opting Out of the Ranking</p>
        
        <div className="relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-500/5 via-gray-500/5 to-gray-500/5 rounded-2xl blur-3xl"></div>
          
          {/* Timeline Container */}
          <div className="relative bg-gray-100 dark:bg-zinc-800/50 backdrop-blur-xl border border-gray-200 dark:border-zinc-700/50 rounded-2xl p-6">
            {/* Main timeline - vertical */}
            <div className="flex flex-col items-center gap-6">
              {/* Step 1: Access Platform */}
              <div className="relative bg-white/10 dark:bg-zinc-900/20 backdrop-blur-xl border border-white/20 dark:border-zinc-700/50 rounded-xl p-6 shadow-lg w-full max-w-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-100/80 dark:bg-gray-800/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-base mb-1">Access the platform</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Bob logs into the system.</p>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/30 rounded-lg p-3">
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>Login Screen</span>
                  </div>
                </div>
              </div>
              
              {/* Arrow 1 */}
              <div className="text-gray-400 dark:text-gray-500 text-2xl font-bold">
                ↓
              </div>

              {/* Step 2: Opt-in Modal */}
              <div className="relative bg-white/10 dark:bg-zinc-900/20 backdrop-blur-xl border border-white/20 dark:border-zinc-700/50 rounded-xl p-6 shadow-lg w-full max-w-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-100/80 dark:bg-gray-800/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-base mb-1">Opt-in Modal</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">He decides not to participate in the ranking.</p>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/30 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Participation Question</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-8 h-6 bg-gray-100 dark:bg-gray-700/30 rounded text-xs flex items-center justify-center text-gray-500 dark:text-gray-400">Yes</div>
                      <div className="w-8 h-6 bg-red-100 dark:bg-red-900/30 rounded text-xs flex items-center justify-center text-red-600 dark:text-red-400 font-medium">No</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Arrow 2 */}
              <div className="text-gray-400 dark:text-gray-500 text-2xl font-bold">
                ↓
              </div>

              {/* Step 3: Exclusion from the Ranking */}
              <div className="relative bg-white/10 dark:bg-zinc-900/20 backdrop-blur-xl border border-white/20 dark:border-zinc-700/50 rounded-xl p-6 shadow-lg w-full max-w-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-100/80 dark:bg-gray-800/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-base mb-1">Exclusion from the Ranking</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">The system hides the ranking interface for him.</p>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/30 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Ranking Hidden</span>
                    </div>
                    <div className="w-6 h-6 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Arrow 3 */}
              <div className="text-gray-400 dark:text-gray-500 text-2xl font-bold">
                ↓
              </div>

              {/* Step 4: Reactivation Option */}
              <div className="relative bg-white/10 dark:bg-zinc-900/20 backdrop-blur-xl border border-white/20 dark:border-zinc-700/50 rounded-xl p-6 shadow-lg w-full max-w-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-100/80 dark:bg-gray-800/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-base mb-1">Reactivation Option</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Bob can access settings and change his decision later.</p>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/30 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Settings Panel</span>
                    </div>
                    <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">24h delay</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Persona Description */}
        <div className="relative bg-white/10 dark:bg-zinc-900/20 backdrop-blur-xl border border-white/20 dark:border-zinc-700/50 rounded-xl p-6 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gray-100/80 dark:bg-gray-800/30 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-base mb-1">Bob</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Privacy-focused student</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Bob values his privacy and prefers not to participate in public rankings. He focuses on learning at his own pace without the competitive aspect.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ADMINISTRATOR JOURNEY MAP */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold mb-2">User Journey Map</h2>
        <p className="text-muted-foreground text-lg mb-8">Administrator Managing the Ranking</p>
        
        <div className="relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-500/5 via-gray-500/5 to-gray-500/5 rounded-2xl blur-3xl"></div>
          
          {/* Timeline Container */}
          <div className="relative bg-gray-100 dark:bg-zinc-800/50 backdrop-blur-xl border border-gray-200 dark:border-zinc-700/50 rounded-2xl p-6">
            {/* Main timeline - vertical */}
            <div className="flex flex-col items-center gap-6">
              {/* Step 1: Access the admin panel */}
              <div className="relative bg-white/10 dark:bg-zinc-900/20 backdrop-blur-xl border border-white/20 dark:border-zinc-700/50 rounded-xl p-6 shadow-lg w-full max-w-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-100/80 dark:bg-gray-800/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-base mb-1">Access the admin panel</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Carla navigates to the ranking section.</p>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/30 rounded-lg p-3">
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span>Admin Dashboard</span>
                  </div>
                </div>
              </div>
              
              {/* Arrow 1 */}
              <div className="text-gray-400 dark:text-gray-500 text-2xl font-bold">
                ↓
              </div>

              {/* Step 2: Enable the ranking */}
              <div className="relative bg-white/10 dark:bg-zinc-900/20 backdrop-blur-xl border border-white/20 dark:border-zinc-700/50 rounded-xl p-6 shadow-lg w-full max-w-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-100/80 dark:bg-gray-800/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-base mb-1">Enable the ranking</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">She decides to activate the ranking system for the institution.</p>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/30 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>System Activation</span>
                    </div>
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Arrow 2 */}
              <div className="text-gray-400 dark:text-gray-500 text-2xl font-bold">
                ↓
              </div>

              {/* Step 3: Configure the ranking */}
              <div className="relative bg-white/10 dark:bg-zinc-900/20 backdrop-blur-xl border border-white/20 dark:border-zinc-700/50 rounded-xl p-6 shadow-lg w-full max-w-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-100/80 dark:bg-gray-800/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-base mb-1">Configure the ranking</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Chooses whether to use historical data and sets tie-breaking rules.</p>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/30 rounded-lg p-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500 dark:text-gray-400">Historical Data</span>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Enabled</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500 dark:text-gray-400">Tie-breaking</span>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Last XP</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Arrow 3 */}
              <div className="text-gray-400 dark:text-gray-500 text-2xl font-bold">
                ↓
              </div>

              {/* Step 4: Monitor the ranking */}
              <div className="relative bg-white/10 dark:bg-zinc-900/20 backdrop-blur-xl border border-white/20 dark:border-zinc-700/50 rounded-xl p-6 shadow-lg w-full max-w-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-100/80 dark:bg-gray-800/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-base mb-1">Monitor the ranking</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Analyzes reports and checks student performance.</p>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/30 rounded-lg p-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500 dark:text-gray-400">Active Students</span>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">247</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500 dark:text-gray-400">Avg. XP</span>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">1,250</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500 dark:text-gray-400">Top Performer</span>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Maria S.</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Arrow 4 */}
              <div className="text-gray-400 dark:text-gray-500 text-2xl font-bold">
                ↓
              </div>

              {/* Step 5: Manage students */}
              <div className="relative bg-white/10 dark:bg-zinc-900/20 backdrop-blur-xl border border-white/20 dark:border-zinc-700/50 rounded-xl p-6 shadow-lg w-full max-w-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-100/80 dark:bg-gray-800/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-base mb-1">Manage students</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Can see which students participate and manually add or remove them if necessary.</p>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/30 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                      </svg>
                      <span>Student Management</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded flex items-center justify-center">
                        <svg className="w-3 h-3 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                      <div className="w-6 h-6 bg-red-100 dark:bg-red-900/30 rounded flex items-center justify-center">
                        <svg className="w-3 h-3 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION DEFINITION */}
      <section className="space-y-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Solution Definition</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive ranking system that balances student engagement with privacy protection, 
            providing administrators with full control over the platform&apos;s competitive features.
          </p>
        </div>

        {/* System Screenshots */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">System Interface</h3>
            <p className="text-muted-foreground mb-6">Visual representation of the ranking system in action</p>
          </div>
          
          {/* First Image - Empty State */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-center">Empty State - No Results Found</h4>
            <div className="bg-white/10 dark:bg-zinc-900/20 backdrop-blur-xl border border-white/20 dark:border-zinc-700/50 rounded-xl p-6">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gray-50 border-b border-gray-200 p-4">
                  <div className="flex items-center justify-between">
                    <h5 className="font-semibold text-gray-800">• Ranking</h5>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm px-3 py-1 bg-blue-100 text-blue-800 rounded">Sistema de ranking</span>
                      <span className="text-sm text-gray-500">Sistema de pontos de experiência</span>
                      <span className="text-sm text-gray-500">Sistema de nível</span>
                      <span className="text-sm text-gray-500">Sistema de medalhas</span>
                      <span className="text-sm text-gray-500">Sistemas de moedas</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h6 className="font-medium text-gray-800">Sistema de ranking</h6>
                          <p className="text-sm text-gray-600">Confira agora o progresso dos seus alunos na Unidade</p>
                        </div>
                        <div className="w-12 h-6 bg-blue-500 rounded-full relative">
                          <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h6 className="font-medium text-gray-800 mb-2">Tabela de classificação</h6>
                      <p className="text-sm text-gray-600 mb-4">O sistema de ranking medirá o desempenho dos alunos com base na interação e consumo de conteúdos.</p>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex space-x-1">
                          <button className="px-3 py-1 bg-blue-500 text-white text-sm rounded">Total</button>
                          <button className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded">Semana</button>
                          <button className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded">Mês</button>
                          <button className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded">Ano</button>
                        </div>
                        <div className="flex-1 max-w-xs">
                          <div className="relative">
                            <input type="text" placeholder="Alun" className="w-full pl-8 pr-3 py-1 border border-gray-300 rounded text-sm" />
                            <svg className="w-4 h-4 absolute left-2 top-1.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                          </div>
                        </div>
                        <select className="px-3 py-1 border border-gray-300 rounded text-sm">
                          <option>Top 10</option>
                        </select>
                        <select className="px-3 py-1 border border-gray-300 rounded text-sm">
                          <option>Filtrar por unidade</option>
                        </select>
                        <div className="px-3 py-1 border border-gray-300 rounded text-sm flex items-center">
                          <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          13 Junho 2023 - 14 Julho 2023
                        </div>
                      </div>
                      <div className="text-center py-12">
                        <div className="text-gray-400 mb-2">
                          <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
                          </svg>
                        </div>
                        <h6 className="font-semibold text-gray-800 mb-1">Nenhum resultado encontrado</h6>
                        <p className="text-sm text-gray-600">Verifique o termo buscado ou os filtros selecionados.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Image - With Data */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-center">Active Ranking with Student Data</h4>
            <div className="bg-white/10 dark:bg-zinc-900/20 backdrop-blur-xl border border-white/20 dark:border-zinc-700/50 rounded-xl p-6">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gray-50 border-b border-gray-200 p-4">
                  <div className="flex items-center justify-between">
                    <h5 className="font-semibold text-gray-800">• Ranking</h5>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm px-3 py-1 bg-blue-100 text-blue-800 rounded">Sistema de ranking</span>
                      <span className="text-sm text-gray-500">Sistema de pontos de experiência</span>
                      <span className="text-sm text-gray-500">Sistema de nível</span>
                      <span className="text-sm text-gray-500">Sistema de medalhas</span>
                      <span className="text-sm text-gray-500">Sistemas de moedas</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h6 className="font-medium text-gray-800">Sistema de ranking</h6>
                          <p className="text-sm text-gray-600">Confira agora o progresso dos seus alunos na Unidade</p>
                        </div>
                        <div className="w-12 h-6 bg-blue-500 rounded-full relative">
                          <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h6 className="font-medium text-gray-800 mb-2">Tabela de classificação</h6>
                      <p className="text-sm text-gray-600 mb-4">O sistema de ranking medirá o desempenho dos alunos com base na interação e consumo de conteúdos.</p>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex space-x-1">
                          <button className="px-3 py-1 bg-blue-500 text-white text-sm rounded">Total</button>
                          <button className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded">Semana</button>
                          <button className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded">Mês</button>
                          <button className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded">Ano</button>
                        </div>
                        <div className="flex-1 max-w-xs">
                          <div className="relative">
                            <input type="text" placeholder="Buscar aluno" className="w-full pl-8 pr-3 py-1 border border-gray-300 rounded text-sm" />
                            <svg className="w-4 h-4 absolute left-2 top-1.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                          </div>
                        </div>
                        <select className="px-3 py-1 border border-gray-300 rounded text-sm">
                          <option>Top 10</option>
                        </select>
                        <select className="px-3 py-1 border border-gray-300 rounded text-sm">
                          <option>Filtrar por unidade</option>
                        </select>
                        <div className="px-3 py-1 border border-gray-300 rounded text-sm flex items-center">
                          <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          13 Junho 2023 - 14 Julho 2023
                        </div>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-gray-200">
                              <th className="text-left py-3 px-4 font-medium text-gray-700">Posição</th>
                              <th className="text-left py-3 px-4 font-medium text-gray-700">Usuário</th>
                              <th className="text-left py-3 px-4 font-medium text-gray-700">E-mail</th>
                              <th className="text-left py-3 px-4 font-medium text-gray-700">Pontuação</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((position) => (
                              <tr key={position} className="border-b border-gray-100">
                                <td className="py-3 px-4">
                                  {position <= 3 ? (
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                                      position === 1 ? 'bg-yellow-500' : 
                                      position === 2 ? 'bg-gray-400' : 'bg-orange-500'
                                    }`}>
                                      {position}
                                    </div>
                                  ) : (
                                    <span className="text-gray-600 font-medium">{position}</span>
                                  )}
                                </td>
                                <td className="py-3 px-4">
                                  <div className="flex items-center">
                                    <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                                    <span className="text-gray-800">Jorge augusto</span>
                                  </div>
                                </td>
                                <td className="py-3 px-4 text-gray-600">aluno.exemplo@gmail.com</td>
                                <td className="py-3 px-4 text-gray-800 font-medium">2.770 XP</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* TESTING & ITERATIONS */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Testing & Iterations</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive testing and iterative improvements based on user feedback and accessibility requirements.
            </p>
          </div>

          {/* Tests Conducted */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-2">Tests Conducted</h4>
            <div className="space-y-4 text-lg">
              <div className="bg-white/10 dark:bg-zinc-900/20 backdrop-blur-xl border border-white/20 dark:border-zinc-700/50 rounded-xl p-6">
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h5 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Usability Tests</h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Comprehensive testing with students and administrators to validate user experience and workflow efficiency.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <h5 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Accessibility Validation</h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Thorough testing of keyboard navigation and screen reader compatibility to ensure inclusive design.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h5 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Performance Tests</h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Optimization testing to ensure fast loading times and smooth user interactions across all devices.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Adjustments */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-2">Key Adjustments</h4>
            <div className="space-y-4 text-lg">
              <div className="bg-white/10 dark:bg-zinc-900/20 backdrop-blur-xl border border-white/20 dark:border-zinc-700/50 rounded-xl p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Improved Opt-in Clarity</h5>
                      <p className="text-gray-600 dark:text-gray-300">Added clear explanations about privacy protection and what information will be displayed in the ranking.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Reorganized Filters</h5>
                      <p className="text-gray-600 dark:text-gray-300">Restructured filter options in a more intuitive order, making it easier for users to find and apply their desired filters.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Highlighting Student&apos;s Ranking</h5>
                      <p className="text-gray-600 dark:text-gray-300">Enhanced visibility of the student&apos;s current position in the ranking to provide better context and motivation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-2">Conclusion</h4>
            <div className="space-y-4 text-lg">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 backdrop-blur-xl border border-blue-200 dark:border-blue-700/50 rounded-xl p-6">
                <div className="space-y-4">
                  <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                    The ranking system provides gamified engagement, allowing students to track their progress while admins encourage active participation.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    This case study demonstrates the importance of user-centered design, with decisions based on research and testing, ensuring a functional and accessible solution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 1. Ranking Rules */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold border-b border-gray-200 dark:border-gray-700 pb-2">1. Ranking Rules</h3>
          <div className="space-y-4 text-lg">
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">XP-Based Ranking</h4>
              <p className="text-gray-600 dark:text-gray-300">Students are ranked by their total accumulated experience points (XP). The more XP you earn, the higher your position in the ranking.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Tie-Breaking System</h4>
              <p className="text-gray-600 dark:text-gray-300">When two students have the same XP, the one who earned their last XP most recently gets the higher position.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Flexible Filtering</h4>
              <p className="text-gray-600 dark:text-gray-300">Students can view rankings by different time periods: total XP, weekly, monthly, yearly, or custom date ranges.</p>
            </div>
          </div>
        </div>

        {/* 2. Student Participation */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold border-b border-gray-200 dark:border-gray-700 pb-2">2. Student Participation</h3>
          <div className="space-y-4 text-lg">
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Privacy-First Approach</h4>
              <p className="text-gray-600 dark:text-gray-300">All students start excluded from the ranking by default for privacy protection. They must actively choose to participate.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Opt-in Process</h4>
              <p className="text-gray-600 dark:text-gray-300">On first access, students see a friendly modal asking if they want to participate. If they accept, their profile picture and name appear in the ranking.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Flexible Control</h4>
              <p className="text-gray-600 dark:text-gray-300">Students can change their participation status anytime through their settings panel, with a 24-hour delay to prevent abuse.</p>
            </div>
          </div>
        </div>

        {/* 3. Admin Access */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold border-b border-gray-200 dark:border-gray-700 pb-2">3. Admin Access</h3>
          <div className="space-y-4 text-lg">
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Complete Control</h4>
              <p className="text-gray-600 dark:text-gray-300">Administrators can enable or disable the entire ranking system for their institution with one click.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Historical Data Management</h4>
              <p className="text-gray-600 dark:text-gray-300">When activating the ranking, administrators can choose whether to include past XP data or start fresh.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Granular Activation</h4>
              <p className="text-gray-600 dark:text-gray-300">The ranking can be activated for specific schools or departments within the institution, allowing for targeted implementation.</p>
            </div>
          </div>
        </div>

        {/* 4. User Interface */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold border-b border-gray-200 dark:border-gray-700 pb-2">4. User Interface</h3>
          <div className="space-y-4 text-lg">
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Student Panel</h4>
              <p className="text-gray-600 dark:text-gray-300">Students see the top 10 ranked students with their own position highlighted. The interface is designed to be motivating and easy to understand.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Admin Dashboard</h4>
              <p className="text-gray-600 dark:text-gray-300">Administrators have access to a comprehensive dashboard with ranking management, student oversight, and detailed performance reports.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Intuitive Navigation</h4>
              <p className="text-gray-600 dark:text-gray-300">Simple date filters allow users to view rankings by different time periods, making navigation and visualization straightforward.</p>
            </div>
          </div>
        </div>
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