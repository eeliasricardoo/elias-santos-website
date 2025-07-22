"use client"

import React, { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
}

export function TypewriterText({ text, speed = 25, onComplete }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else if (onComplete) {
      onComplete();
    }
    return undefined;
  }, [currentIndex, text, speed, onComplete]);

  return (
    <span>
      {displayText}
      {currentIndex < text.length && <span className="animate-pulse">|</span>}
    </span>
  );
} 