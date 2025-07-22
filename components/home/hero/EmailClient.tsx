"use client"

import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { ShineBorder } from "@/components/magicui/shine-border";
import { ChatMessage } from "./ChatMessage";
import { BorderBeam } from "./BorderBeam";


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
      {/* Luz atrás do card */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/10 to-primary/20 blur-2xl rounded-2xl transform scale-20 -z-10"></div>
      
      <ShineBorder className="rounded-2xl">
        <Card className="border-border/30 bg-card shadow-2xl shadow-primary/5 relative z-10 overflow-hidden">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 border-b border-border/20 p-4">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="flex-1 text-center">
                <span className="text-sm font-medium text-muted-foreground">Chat with Elias</span>
              </div>
            </div>
          </div>
          
          <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
            {/* Bot messages */}
            {messages.slice(0, currentStep + 1).map((message, index) => (
              <ChatMessage
                key={index}
                message={message}
                isUser={false}
              />
            ))}
            
            {/* Typing indicator */}
            {isTyping && (
              <ChatMessage
                message={messages[currentStep] ?? ""}
                isUser={false}
              />
            )}
            
            {/* User input */}
            {showInput && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <ChatMessage
                  message={userInput || "Typing..."}
                  isUser={true}
                />
                
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 border border-border/20 rounded-lg bg-muted/20 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                    disabled={isSubmitting}
                  />
                  <button
                    type="submit"
                    disabled={!userInput.trim() || isSubmitting}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </Card>
      </ShineBorder>
      
      {/* Border beam effects */}
      <BorderBeam
        size={20}
        duration={3}
        delay={1}
        className="absolute -top-2 -left-2"
        colorFrom="#ffaa40"
        colorTo="#9c40ff"
      />
      <BorderBeam
        size={15}
        duration={4}
        delay={2}
        className="absolute -bottom-2 -right-2"
        colorFrom="#9c40ff"
        colorTo="#ffaa40"
        reverse
      />
    </div>
  );
} 