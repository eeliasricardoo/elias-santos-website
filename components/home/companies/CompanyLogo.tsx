"use client"

import React from "react";

interface CompanyLogoProps {
  src: string;
  alt: string;
  className?: string;
  size?: number;
}

export function CompanyLogo({ src, alt, className = "", size = 64 }: CompanyLogoProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`object-contain rounded-lg shadow-md bg-white/80 border border-border ${className}`}
      loading="lazy"
      style={{ maxWidth: size, maxHeight: size }}
    />
  );
} 