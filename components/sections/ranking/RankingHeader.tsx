"use client"

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

export default function RankingHeader() {
  const router = useRouter();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
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
  );
} 