'use client';
import { motion, MotionValue, useTransform } from 'framer-motion';

// Each step has its own color identity
const stepColors = [
  { bg: '#18181b', text: '#ffffff', label: 'RESEARCH', accent: '#ef4444' },   // 01 — crimson
  { bg: '#111113', text: '#e4e4e7', label: 'DESIGN',   accent: '#f43f5e' },   // 02 — rose
  { bg: '#09090b', text: '#d4d4d8', label: 'PROTOTYPE', accent: '#be123c' },  // 03 — ruby
  { bg: '#1e1e21', text: '#fafafa', label: 'SHIP',     accent: '#e11d48' },   // 04 — dark rose
];

interface Props {
  progress: MotionValue<number>;
}

function StepVisual({
  step,
  color,
  opacity,
}: {
  step: string;
  color: typeof stepColors[number];
  opacity: MotionValue<number>;
}) {
  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 flex items-center justify-center"
    >
      {/* Colored panel — fills right side */}
      <div
        className="relative w-full h-full flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: color.bg }}
      >
        {/* Center content */}
        <div className="relative z-10 flex flex-col items-center gap-6 text-center px-10">
          {/* Step label */}
          <span
            className="font-mono text-xs uppercase tracking-[0.3em] font-bold"
            style={{ color: color.accent }}
          >
            Step {step}
          </span>

          {/* Role word — outline treatment on dark color */}
          <span
            className="font-bold uppercase leading-none tracking-tight"
            style={{
              fontSize: 'clamp(48px, 6vw, 80px)',
              color: 'transparent',
              WebkitTextStroke: `2px ${color.text}`,
            }}
          >
            {color.label}
          </span>

          {/* Decorative line */}
          <div className="w-12 h-px" style={{ backgroundColor: color.accent }} />
        </div>

        {/* Floating decorative pills — top right */}
        <div
          className="absolute top-8 right-8 flex flex-col gap-2"
          style={{ color: color.accent }}
        >
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="h-1.5 rounded-full"
              style={{
                width: `${48 - i * 12}px`,
                backgroundColor: color.accent,
                opacity: 0.4 + i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Floating decorative corner square — bottom left */}
        <div
          className="absolute bottom-8 left-8 w-10 h-10 border-2 rotate-12"
          style={{ borderColor: color.accent, opacity: 0.4 }}
        />

        {/* Small dot grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, ${color.accent}30 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>
    </motion.div>
  );
}

export function HowIWorkVisuals({ progress }: Props) {
  const op1 = useTransform(progress, [0,    0.2,  0.28], [1, 1, 0]);
  const op2 = useTransform(progress, [0.22, 0.3,  0.48, 0.55], [0, 1, 1, 0]);
  const op3 = useTransform(progress, [0.48, 0.56, 0.72, 0.80], [0, 1, 1, 0]);
  const op4 = useTransform(progress, [0.72, 0.82, 1.0],        [0, 1, 1]);

  const opacities = [op1, op2, op3, op4];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {stepColors.map((color, i) => (
        <StepVisual
          key={i}
          step={String(i + 1).padStart(2, '0')}
          color={color}
          opacity={opacities[i]}
        />
      ))}
    </div>
  );
}
