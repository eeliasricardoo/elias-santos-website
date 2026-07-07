'use client';


interface StatsCardProps {
  value: string;
  label: string;
  className?: string;
}

export function StatsCard({ value, label, className = '' }: StatsCardProps) {
  return (
    <div
      className={`bg-card rounded-lg px-6 py-4 text-center flex-1 border border-border/20 ${className}`}
    >
      <div className='text-2xl font-bold' style={{ color: 'var(--brand, hsl(var(--foreground)))' }}>
        {value}
      </div>
      <div className='font-mono text-xs uppercase tracking-widest text-muted-foreground'>
        {label}
      </div>
    </div>
  );
}
