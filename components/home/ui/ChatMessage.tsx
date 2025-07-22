"use client"

import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";
import { TypewriterText } from "./TypewriterText";

interface ChatMessageProps {
  message: string;
  isUser?: boolean;
  className?: string;
}

export function ChatMessage({ message, isUser = false, className = "" }: ChatMessageProps) {
  const [isTyping, setIsTyping] = useState(true);

  const handleComplete = useCallback(() => {
    setIsTyping(false);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`flex gap-4 p-4 ${isUser ? 'justify-end' : 'justify-start'} ${className}`}
    >
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md flex-shrink-0">
          <Bot className="w-4 h-4 text-primary-foreground" />
        </div>
      )}
      <div className={`max-w-[75%] ${isUser ? 'order-first' : ''}`}>
        <div className={`rounded-2xl px-4 py-3 text-sm shadow-sm backdrop-blur-sm ${
          isUser 
            ? 'bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-primary/20' 
            : 'bg-muted/40 text-foreground border border-border/20'
        }`}>
          {isTyping ? (
            <TypewriterText 
              text={message} 
              speed={isUser ? 10 : 25}
              onComplete={handleComplete}
            />
          ) : (
            <span className="leading-relaxed">{message}</span>
          )}
        </div>
        <div className={`text-xs text-muted-foreground mt-2 ${isUser ? 'text-right' : 'text-left'}`}>
          {new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
      {isUser && (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-muted to-muted/80 flex items-center justify-center shadow-md flex-shrink-0">
          <User className="w-4 h-4 text-muted-foreground" />
        </div>
      )}
    </motion.div>
  );
} 