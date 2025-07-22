"use client"

import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { ShineBorder } from "@/components/magicui/shine-border";
import { ChatMessage, BorderBeam } from "./index";

interface EmailClientProps {
  className?: string;
}

export function EmailClient({ className = "" }: EmailClientProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const messages = [
    "Hello! I'm Elias, a UX/UI Designer and Full Stack Developer. 👋",
    "I specialize in creating user-centered digital experiences that drive results.",
    "Would you like to discuss a project or learn more about my work?",
    "Feel free to share your vision or ask any questions!"
  ];

  useEffect(() => {
    if (currentStep === 0) {
      setIsTyping(true);
    }
  }, [currentStep]);

  useEffect(() => {
    if (isTyping) {
      setIsTyping(false);
    }
  }, [currentStep, isTyping]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setUserInput("");
    setShowInput(false);
    
    // Show thank you message
    setTimeout(() => {
      setCurrentStep(0);
      setIsTyping(true);
    }, 3000);
  };

  return (
    <div className={`relative max-w-md mx-auto ${className}`}>
      {/* Teste sem ShineBorder - voltando ao Card */}
      <Card className="border-border/30 bg-card shadow-2xl shadow-primary/5 relative z-10 overflow-hidden">
        <div style={{ 
          background: 'orange', 
          height: '400px', 
          width: '100%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: 'white',
          fontSize: '18px',
          fontWeight: 'bold',
          padding: '20px'
        }}>
          🟠 SHINEBORDER PROBLEMÁTICO - VAMOS CONTINUAR SEM ELE 🟠
        </div>
      </Card>
    </div>
  );
} 