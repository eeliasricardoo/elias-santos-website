"use client"

import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image';

interface PlatformCardProps {
  name: string;
  image: string;
  description: string;
  animationDelay?: number;
}

export function PlatformCard({ name, image, description, animationDelay = 0 }: PlatformCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: animationDelay }}
      className="bg-background/80 border border-border/20 rounded-lg p-6 shadow-sm flex flex-col items-center text-center"
    >
      <div className="mb-4">
        <Image 
          src={image} 
          alt={name} 
          className="h-16 w-auto"
          width={64}
          height={64}
        />
      </div>
      <div className="font-semibold text-foreground text-lg mb-2">{name}</div>
      <div className="text-sm text-muted-foreground">
        {description}
      </div>
    </motion.div>
  );
} 