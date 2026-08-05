import React from 'react';

interface IlevarLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showWordmark?: boolean;
}

/**
 * Official ilevar logo component (Gennai Mascot + Blue Rebrand).
 * Replaces the old green 3-rect SVG mark with Gennai, the wizard mascot,
 * and Brand Blue #0563A8 (sampled from Gennai's robe).
 */
export function IlevarLogo({
  className = '',
  size = 'md',
  showWordmark = true,
}: IlevarLogoProps) {
  const iconSizes = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-11 w-11',
    xl: 'h-16 w-16',
  };

  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl md:text-5xl',
    xl: 'text-5xl md:text-7xl',
  };

  return (
    <div className={`inline-flex items-center gap-3 font-sans ${className}`}>
      {/* Gennai Mascot Avatar Icon */}
      <img
        src="/mascot/gennai-icon.png"
        alt="Gennai Mascot"
        className={`${iconSizes[size]} shrink-0 rounded-lg object-cover shadow-sm`}
      />

      {/* Wordmark ilevar */}
      {showWordmark && (
        <span
          className={`${textSizes[size]} font-extrabold tracking-tight select-none text-foreground`}
          style={{ fontFamily: "'Plus Jakarta Sans', var(--font-sans), system-ui, sans-serif" }}
        >
          <span style={{ color: '#0563A8' }}>i</span>levar
        </span>
      )}
    </div>
  );
}
