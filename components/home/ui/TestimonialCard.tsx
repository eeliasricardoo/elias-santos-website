"use client"

import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Testimonial {
  id: number;
  name: string;
  username: string;
  content: string;
  avatarGradient: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className = "" }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`flex-shrink-0 w-72 bg-card rounded-xl p-5 shadow-lg border border-border hover:shadow-xl transition-all duration-300 ${className}`}
    >
      <div className="flex items-start space-x-3">
        <Avatar className="w-10 h-10 flex-shrink-0">
          <AvatarFallback 
            className={`bg-gradient-to-br ${testimonial.avatarGradient} text-white font-semibold text-sm`}
          >
            {testimonial.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-2">
            <h4 className="font-semibold text-card-foreground text-sm">
              {testimonial.name}
            </h4>
            <span className="text-muted-foreground text-xs">
              {testimonial.username}
            </span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {testimonial.content}
          </p>
        </div>
      </div>
    </motion.div>
  );
} 