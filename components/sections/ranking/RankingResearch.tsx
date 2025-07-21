"use client"

import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image';

export default function RankingResearch() {
  const platforms = [
    {
      name: 'Duolingo',
      image: '/images/0_30Q1h7enGUIb_zha.webp',
      description: 'Weekly ranking with opt-in and reward incentives.'
    },
    {
      name: 'Khan Academy',
      image: '/images/0_kFjeH7TxKlRoneaa.webp',
      description: 'Points system and leaderboard per class.'
    },
    {
      name: 'Coursera',
      image: '/images/0_qMjDhi5-9niX47Oq.webp',
      description: 'Use of badges and points to encourage engagement.'
    }
  ];

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold mb-2">Research & Benchmarking</h2>
      <p className="text-muted-foreground text-lg">
        To support the design, we conducted user research and analyzed similar systems, such as:
      </p>
      
      {/* Animação de Benchmarking */}
      <div className="relative mt-8 p-6 bg-muted/20 rounded-lg border border-border/20">
        <div className="grid md:grid-cols-3 gap-6">
          {platforms.map((platform, idx) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.2 }}
              className="bg-background/80 border border-border/20 rounded-lg p-6 shadow-sm flex flex-col items-center text-center"
            >
              <div className="mb-4">
                <Image 
                  src={platform.image} 
                  alt={platform.name} 
                  className="h-16 w-auto"
                  width={64}
                  height={64}
                />
              </div>
              <div className="font-semibold text-foreground text-lg mb-2">{platform.name}</div>
              <div className="text-sm text-muted-foreground">
                {platform.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 