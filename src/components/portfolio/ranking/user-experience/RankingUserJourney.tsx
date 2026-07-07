'use client';

import { Fragment } from 'react';

interface JourneyStep {
  icon: string;
  title: string;
  description: string;
  context: string;
  /** Chip rendered on the context row — filled ink for positive, outline for negative/neutral. */
  chip?: { label: string; variant: 'filled' | 'outline' };
}

const participatingSteps: JourneyStep[] = [
  {
    icon: 'M13 7l5 5m0 0l-5 5m5-5H6',
    title: 'Access the platform',
    description: 'Alice logs into the educational platform.',
    context: 'Login Screen',
  },
  {
    icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Opt-in Modal',
    description: 'The system presents a modal asking if she wants to participate in the ranking.',
    context: 'Participation Question',
    chip: { label: 'Yes', variant: 'filled' },
  },
  {
    icon: 'M5 13l4 4L19 7',
    title: 'Participation Confirmation',
    description: 'Alice opts in and sees her initial ranking position.',
    context: 'Current Position: #15',
    chip: { label: 'Done', variant: 'filled' },
  },
  {
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    title: 'Tracking Progress',
    description: 'She can view her position in real-time and filter by different periods.',
    context: 'Weekly: #12, Monthly: #8, Total: #15',
  },
  {
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    title: 'Improving Position',
    description: 'Alice is motivated to earn more XP to climb the ranking.',
    context: 'XP Earned: +150',
    chip: { label: '↑ #10', variant: 'filled' },
  },
  {
    icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
    title: 'Rewards',
    description: 'If she reaches the top, she receives an incentive from the institution.',
    context: 'Top 3 Prize: $500',
    chip: { label: 'Reward', variant: 'filled' },
  },
];

const optingOutSteps: JourneyStep[] = [
  {
    icon: 'M13 7l5 5m0 0l-5 5m5-5H6',
    title: 'Access the platform',
    description: 'Bob logs into the system.',
    context: 'Login Screen',
  },
  {
    icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Opt-in Modal',
    description: 'He decides not to participate in the ranking.',
    context: 'Participation Question',
    chip: { label: 'No', variant: 'outline' },
  },
  {
    icon: 'M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728',
    title: 'Exclusion from the Ranking',
    description: 'The system hides the ranking interface for him.',
    context: 'Ranking Hidden',
    chip: { label: 'Hidden', variant: 'outline' },
  },
  {
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
    title: 'Reactivation Option',
    description: 'Bob can access settings and change his decision later.',
    context: 'Settings Panel',
    chip: { label: '24h delay', variant: 'outline' },
  },
];

const adminSteps: JourneyStep[] = [
  {
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    title: 'Access the admin panel',
    description: 'Carla navigates to the ranking section.',
    context: 'Admin Dashboard',
  },
  {
    icon: 'M5 13l4 4L19 7',
    title: 'Enable the ranking',
    description: 'She decides to activate the ranking system for the institution.',
    context: 'System Activation',
    chip: { label: 'Active', variant: 'filled' },
  },
  {
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
    title: 'Configure the ranking',
    description: 'Chooses whether to use historical data and sets tie-breaking rules.',
    context: 'Historical Data: Enabled, Tie-breaking: Last XP',
  },
  {
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    title: 'Monitor the ranking',
    description: 'Analyzes reports and checks student performance.',
    context: 'Active Students: 247, Avg. XP: 1,250, Top Performer: Maria S.',
  },
  {
    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z',
    title: 'Manage students',
    description: 'Can see which students participate and manually add or remove them if necessary.',
    context: 'Student Management',
    chip: { label: 'Add / Remove', variant: 'outline' },
  },
];

function StepCard({ step }: { step: JourneyStep }) {
  return (
    <div className='w-full max-w-sm rounded-xl border border-border/40 bg-card p-6'>
      <div className='mb-4 flex items-center gap-4'>
        <div className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-muted/50'>
          <svg
            aria-hidden='true'
            className='h-6 w-6 text-foreground'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d={step.icon} />
          </svg>
        </div>
        <div className='flex-1'>
          <h4 className='mb-1 text-base font-semibold text-foreground'>{step.title}</h4>
          <p className='text-sm text-muted-foreground'>{step.description}</p>
        </div>
      </div>
      <div className='flex items-center justify-between gap-3 rounded-lg bg-muted/30 p-3'>
        <span className='font-mono text-xs text-muted-foreground'>{step.context}</span>
        {step.chip && (
          <span
            className={`whitespace-nowrap rounded-full px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider ${
              step.chip.variant === 'filled'
                ? 'bg-foreground text-background'
                : 'border border-border text-muted-foreground'
            }`}
          >
            {step.chip.label}
          </span>
        )}
      </div>
    </div>
  );
}

function JourneyTimeline({ steps, subtitle }: { steps: JourneyStep[]; subtitle: string }) {
  return (
    <div className='space-y-4'>
      <h3 className='text-xl font-semibold text-foreground'>{subtitle}</h3>

      <div className='rounded-2xl border border-border/40 bg-muted/20 p-6'>
        <div className='flex flex-col items-center gap-6'>
          {steps.map((step, index) => (
            <Fragment key={step.title}>
              <StepCard step={step} />
              {index < steps.length - 1 && (
                <span aria-hidden='true' className='text-2xl font-bold text-muted-foreground'>
                  ↓
                </span>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function RankingUserJourney() {
  return (
    <section className='space-y-12'>
      <div className='space-y-3'>
        <h2 className='flex items-center gap-3 text-3xl font-bold leading-[1.1] text-foreground md:text-4xl'>
          <span
            className='inline-block h-7 w-1.5 flex-shrink-0 rounded-full'
            style={{ backgroundColor: 'var(--brand, hsl(var(--foreground)))' }}
          />
          User Journey Map
        </h2>
        <p className='text-lg text-muted-foreground'>
          Three paths through the same system — participating, opting out, and administering.
        </p>
      </div>

      <JourneyTimeline steps={participatingSteps} subtitle='Student Participating in the Ranking' />
      <JourneyTimeline steps={optingOutSteps} subtitle='Student Opting Out of the Ranking' />
      <JourneyTimeline steps={adminSteps} subtitle='Administrator Managing the Ranking' />
    </section>
  );
}
