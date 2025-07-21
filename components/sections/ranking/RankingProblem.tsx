"use client"

import React from "react";
import { motion } from "framer-motion";

export default function RankingProblem() {
  const painPoints = [
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
  ];

  return (
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
          {painPoints.map((item, idx) => (
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
  );
} 