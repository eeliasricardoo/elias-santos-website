'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

export function UXProcessSection() {
  return (
    <section className='space-y-8'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='space-y-8'
      >
        <div className='space-y-4'>
          <Badge className='bg-muted/50 text-muted-foreground border-border/50 px-4 py-2'>
            UX Process
          </Badge>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground'>
            Requirements Mapping & Testing
          </h2>
        </div>

        <div className='max-w-3xl mx-auto space-y-12'>
          {/* Mapeamento de Requisitos */}
          <div className='space-y-8'>
            <h3 className='text-xl font-semibold text-foreground'>📋 Requirements mapping</h3>
            
            <div className='grid md:grid-cols-2 gap-8'>
              <div className='space-y-6'>
                <div className='bg-muted/30 p-6 rounded-lg border border-border'>
                  <h4 className='font-semibold text-foreground mb-4'>🎯 Technical specifications</h4>
                  <ul className='space-y-2 text-muted-foreground text-sm'>
                    <li><strong>User:</strong> online agents (Attendant+ profile)</li>
                    <li><strong>Trigger:</strong> ≥1 ticket and agent under active‑chat limit</li>
                    <li><strong>Content:</strong> title, queue counter, waiting time, Accept CTA</li>
                    <li><strong>Actions:</strong> Accept (primary), Ignore, &quot;x&quot; close</li>
                  </ul>
                </div>
                
                <div className='bg-muted/30 p-6 rounded-lg border border-border'>
                  <h4 className='font-semibold text-foreground mb-4'>⚙️ Business rules</h4>
                  <ul className='space-y-2 text-muted-foreground text-sm'>
                    <li><strong>Optimistic lock:</strong> prevents double assignment</li>
                    <li><strong>Expiration:</strong> pop‑up expires in 15 seconds</li>
                    <li><strong>Limit:</strong> maximum 3 pending pop‑ups</li>
                    <li><strong>Performance:</strong> appears in &lt; 500ms</li>
                  </ul>
                </div>
              </div>

              <div className='space-y-6'>
                <div className='bg-muted/30 p-6 rounded-lg border border-border'>
                  <h4 className='font-semibold text-foreground mb-4'>✅ Acceptance criteria</h4>
                  <ul className='space-y-2 text-muted-foreground text-sm'>
                    <li>• Pop‑up appears in &lt; 500 ms after eligible ticket</li>
                    <li>• Clicking Accept assigns the ticket and opens the conversation</li>
                    <li>• Ignoring/expiring keeps the ticket unassigned</li>
                    <li>• No ticket is assigned to two agents simultaneously</li>
                    <li>• Impressions and clicks monitored for iteration</li>
                  </ul>
                </div>

                <div className='bg-muted/30 p-6 rounded-lg border border-border'>
                  <h4 className='font-semibold text-foreground mb-4'>📊 Tracking metrics</h4>
                  <ul className='space-y-2 text-muted-foreground text-sm'>
                    <li>• Time-to-first-response</li>
                    <li>• Pop‑up click-through rate</li>
                    <li>• First‑contact CSAT</li>
                    <li>• Reopens</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Teste Moderado */}
          <div className='bg-muted/30 p-8 rounded-lg border border-border'>
            <h3 className='text-xl font-semibold text-foreground mb-8'>🧪 Moderated test</h3>
            
            <div className='grid md:grid-cols-3 gap-8'>
              <div className='text-center space-y-4'>
                <div className='text-4xl'>👥</div>
                <h4 className='font-semibold text-foreground'>5 Agents</h4>
                <p className='text-sm text-muted-foreground'>
                  Participants with different experience profiles
                </p>
              </div>
              
              <div className='text-center space-y-4'>
                <div className='text-4xl'>⏱️</div>
                <h4 className='font-semibold text-foreground'>Timed tasks</h4>
                <p className='text-sm text-muted-foreground'>
                  Precise measurement of time‑to‑click
                </p>
              </div>
              
              <div className='text-center space-y-4'>
                <div className='text-4xl'>📈</div>
                <h4 className='font-semibold text-foreground'>Result</h4>
                <p className='text-sm text-muted-foreground'>
                  Time‑to‑click dropped from 11s → 4s (−64%)
                </p>
              </div>
            </div>

            <div className='mt-8 p-6 bg-background rounded-lg border border-border'>
              <h4 className='font-semibold text-foreground mb-4'>💬 Agent feedback</h4>
              <div className='space-y-4'>
                <blockquote className='italic text-muted-foreground border-l-4 border-primary pl-4'>
                  &quot;The blue button helps, but ‘Ignore’ should be less prominent.&quot;
                </blockquote>
                <p className='text-sm text-muted-foreground'>
                  <strong>Implemented change:</strong> Reduced the visual prominence of the “Ignore” button to emphasize the primary “Accept” action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}