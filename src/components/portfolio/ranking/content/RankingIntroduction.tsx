'use client';

import { motion } from 'framer-motion';
import { CaseStudySection, AnimatedContainer, MetricsGrid, type MetricItem } from '../../ui';

const metrics: MetricItem[] = [
  { value: '+40%', label: 'Engagement' },
  { value: '+12,000', label: 'Users' },
  { value: '18', label: 'Institutions' },
];

export default function RankingIntroduction() {
  return (
    <CaseStudySection title="Introduction">
      <p>
        In digital education platforms, gamification has been an effective tool
        for engaging students. One of the main gamified mechanisms is the
        ranking system, which allows students to track their progress and
        compare their performance with peers.
      </p>

      <p>
        This case study documents the UX design process for implementing a
        ranking system based on XP (experience points) within a learning
        platform.
      </p>

      <MetricsGrid metrics={metrics} />

      {/* Animação de Gamificação */}
      <AnimatedContainer>
        {/* Barra de progresso animada */}
        <div className="mb-6">
          <div className="bg-muted rounded-full h-4 overflow-hidden border border-border/30">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '85%' }}
              transition={{
                duration: 2,
                ease: 'easeOut',
                delay: 0.5,
              }}
              className="bg-foreground h-full rounded-full"
            />
          </div>
          <div className="flex justify-between text-sm text-foreground mt-2">
            <span className="font-medium">0 XP</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="font-bold text-muted-foreground"
            >
              8,500 XP
            </motion.span>
          </div>
        </div>

        {/* Ranking animado */}
        <div className="space-y-3">
          {[
            {
              pos: 1,
              label: 'Top Student',
              level: 15,
              xp: '8,500',
              color: 'bg-foreground',
            },
            {
              pos: 2,
              label: 'Active Learner',
              level: 12,
              xp: '7,200',
              color: 'bg-foreground/70',
            },
            {
              pos: 3,
              label: 'Dedicated Student',
              level: 10,
              xp: '6,800',
              color: 'bg-foreground/50',
            },
          ].map((item, idx) => (
            <div
              key={item.pos}
              className={`flex items-center space-x-4 p-3 rounded-lg border ${idx === 0 ? 'bg-background/50 border-border/30' : idx === 1 ? 'bg-background/30 border-border/20' : 'bg-background/20 border-border/10'}`}
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 + idx * 0.4 }}
                className={`flex items-center justify-center w-10 h-10 rounded-full text-background text-sm font-bold ${item.color}`}
              >
                {item.pos}
              </motion.div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + idx * 0.4 }}
                className="flex-1"
              >
                <div className="text-sm font-semibold text-foreground">
                  {item.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  Level {item.level} • {item.xp} XP
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </AnimatedContainer>
    </CaseStudySection>
  );
}
