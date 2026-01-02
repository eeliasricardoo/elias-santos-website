'use client';


interface StatsCardProps {
  value: string;
  label: string;
  className?: string;
}

export function StatsCard({ value, label, className = '' }: StatsCardProps) {
  return (
    <div
      className={`bg-muted text-foreground rounded-lg px-6 py-4 text-center flex-1 shadow-md border border-border ${className}`}
    >
      <div className='text-2xl font-bold'>{value}</div>
      <div className='text-xs uppercase tracking-wide text-muted-foreground'>
        {label}
      </div>
    </div>
  );
}
