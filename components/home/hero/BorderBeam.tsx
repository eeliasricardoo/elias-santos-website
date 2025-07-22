"use client"

import React from "react";
import { motion, Transition } from "framer-motion";

interface BorderBeamProps {
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  transition?: Transition;
  className?: string;
  style?: React.CSSProperties;
  reverse?: boolean;
  initialOffset?: number;
  borderWidth?: number;
}

export const BorderBeam = ({
  className,
  size = 50,
  delay = 0,
  duration = 6,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  transition,
  style,
  reverse = false,
  initialOffset = 0,
  borderWidth = 1,
}: BorderBeamProps) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          x: reverse ? size : -size,
          y: initialOffset,
        }}
        animate={
          isVisible
            ? {
                opacity: [0, 1, 0],
                x: reverse ? [-size, size] : [size, -size],
                y: [initialOffset, initialOffset + size],
              }
            : {}
        }
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          ...transition,
        }}
        style={{
          position: "absolute",
          width: size,
          height: size,
          background: `linear-gradient(45deg, ${colorFrom}, ${colorTo})`,
          borderRadius: "50%",
          filter: "blur(1px)",
          border: `${borderWidth}px solid ${colorFrom}`,
          zIndex: 1,
        }}
      />
    </div>
  );
}; 