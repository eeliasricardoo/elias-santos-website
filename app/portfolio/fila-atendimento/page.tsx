'use client';

import React from 'react';
import { PageAnalytics } from '@/components/analytics/page-analytics';
import { PageSEO } from '@/components/seo/PageSEO';
import { ProjectStructuredData } from '@/components/seo/ProjectStructuredData';
import { BackButton } from '@/components/portfolio/ui/BackButton';
import Image from 'next/image';
// Page sections will be added progressively during the case build

export default function FilaAtendimentoPage() {
  return (
    <>
      {/* SEO */}
      <PageSEO
        title='Feat UX/UI — Support Queue — Omnichannel Chat | Case Study'
        description='How we reduced time-to-first-response by 22% using waiting-time queue ordering and a persistent, actionable assignment pop-up. First-contact CSAT increased from 4.1 to 4.3 and reopens dropped by 9%.'
        keywords={[
          'Support Queue',
          'Omnichannel Chat',
          'UX/UI Design',
          'Time-to-first-response',
          'CSAT',
          'Pop-up Design',
          'Customer Support',
          'User Experience',
          'Interface Design',
          'Case Study',
          'UX Research',
          'Zendesk',
          'Intercom',
          'Operational Efficiency',
          'Customer Satisfaction',
        ]}
        url='/portfolio/fila-atendimento'
        type='article'
        publishedTime='2024-07-05T00:00:00Z'
        modifiedTime='2024-12-19T00:00:00Z'
        author='Elias Santos'
        section='Portfolio'
        tags={[
          'UX/UI',
          'Design',
          'Chat',
          'Atendimento',
          'Figma',
          'Case Study',
        ]}
      />

      {/* Structured Data */}
      <ProjectStructuredData
        name='Feat UX/UI — Support Queue — Omnichannel Chat'
        description='Case study showing how we reduced time-to-first-response by 22% with a persistent, actionable assignment pop-up and queue ordering by waiting time. CSAT rose from 4.1 to 4.3 and reopens decreased by 9%.'
        image='/portfolios/omnichanel.webp'
        url='/portfolio/fila-atendimento'
        technologies={[
          'Figma',
          'UX Research',
          'UI Design',
          'React',
          'TypeScript',
          'Design System',
        ]}
        category='UX/UI Design'
        datePublished='2024-07-05T00:00:00Z'
        dateModified='2024-12-19T00:00:00Z'
         author='Elias Santos'
      />

      <main className='max-w-3xl mx-auto py-12 px-4 space-y-16 pt-24'>
        {/* Analytics */}
        <PageAnalytics
          pageName='Portfolio Fila Atendimento'
          pagePath='/portfolio/fila-atendimento'
          customProperties={{
            section: 'portfolio',
            project: 'fila-atendimento',
            type: 'detailed_case',
          }}
        />
        
        {/* Header */}
        <header className='mb-10 text-left'>
          <BackButton />
        </header>
        {/* Full-bleed hero image (like ventuschat case) */}
        <section className='relative -mx-8 md:-mx-16 lg:-mx-24 xl:-mx-32'>
          <div className='relative rounded-2xl overflow-hidden border border-border/20 shadow-2xl'>
            <Image
              src='/portfolios/fila-atendimento/1.png'
              alt='Support Queue — Omnichannel Chat overview'
              width={1200}
              height={800}
              className='w-full object-contain'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px'
              quality={85}
              priority
            />
          </div>
        </section>

        {/* 1. Overview */}
        <section className='space-y-6'>
          <h2 className='text-2xl md:text-3xl font-bold text-foreground'>1. Overview</h2>
          <p className='text-muted-foreground text-lg leading-relaxed'>
            We identified ~30s delays between customer arrival and the first human contact. To reduce this interval, we combined two targeted improvements: ordering the queue by waiting time and displaying a persistent, actionable pop‑up for immediate assignment. The goal was to make the experience smoother for both customers and agents.
          </p>

          <div className='space-y-3'>
            <h3 className='text-xl font-semibold text-foreground'>Key results</h3>
            <ul className='list-disc pl-6 space-y-2 text-muted-foreground'>
              <li>
                <em>Time‑to‑first‑response</em> reduced by ≈ 22%.
              </li>
              <li>
                First‑contact CSAT increased from <strong>4.1</strong> → <strong>4.3</strong>.
              </li>
              <li>
                Reopened tickets decreased by ≈ 9%.
              </li>
            </ul>
            <p className='italic text-sm text-muted-foreground'>(Detailed metrics in section 10.)</p>
          </div>
        </section>

        {/* 2. Project context */}
        <section className='space-y-6'>
          <h2 className='text-2xl md:text-3xl font-bold text-foreground'>2. Project context</h2>
          <ul className='list-disc pl-6 space-y-2 text-muted-foreground'>
            <li>
              <strong className='text-foreground'>Product:</strong> Support platform (web & mobile)
            </li>
            <li>
              <strong className='text-foreground'>My role:</strong> UX/UI — research, flows and metrics
            </li>
            <li>
              <strong className='text-foreground'>Origin of request:</strong> Directly requested by the client, who reported delays perceived by end users
            </li>
            <li>
              <strong className='text-foreground'>Internal stakeholders:</strong> Support, CS, QA, Engineering
            </li>
            <li>
              <strong className='text-foreground'>Validation:</strong> Each iteration was presented to the client for feedback and approval before the next step
            </li>
          </ul>
        </section>

        {/* 3. Problem */}
        <section className='space-y-6'>
          <h2 className='text-2xl md:text-3xl font-bold text-foreground'>3. Problem</h2>
          <blockquote className='border-l-4 border-primary pl-4 text-muted-foreground italic'>
            “I only notice the ticket when I return to the Conversations tab. Too much time has already passed.”
            <div className='not-italic text-xs mt-2 text-muted-foreground'>— Agent, field test</div>
          </blockquote>
          <ul className='list-disc pl-6 space-y-2 text-muted-foreground'>
            <li>Agents missed the sound alert or were in another tab.</li>
            <li>The queue refresh did not draw enough visual attention.</li>
            <li>This caused wait spikes, CSAT drop and ticket reopens.</li>
          </ul>
        </section>

        {/* 4. Goal */}
        <section className='space-y-4'>
          <h2 className='text-2xl md:text-3xl font-bold text-foreground'>4. Goal</h2>
          <p className='text-lg text-muted-foreground leading-relaxed'>
            Reduce time to first human contact by <strong className='text-foreground'>≥ 20%</strong> without increasing UI complexity or overloading agents.
          </p>
        </section>

        {/* 5. Design hypothesis */}
        <section className='space-y-4'>
          <h2 className='text-2xl md:text-3xl font-bold text-foreground'>5. Design hypothesis</h2>
          <p className='text-lg text-muted-foreground leading-relaxed'>
            If we show a <strong className='text-foreground'>persistent, actionable pop‑up</strong> as soon as there is an eligible ticket, agents will accept faster because they won’t depend on manually checking queues.
          </p>
        </section>

        {/* 6. UX process */}
        <section className='space-y-6'>
          <h2 className='text-2xl md:text-3xl font-bold text-foreground'>6. UX process</h2>

          {/* 6.1 Quick research */}
          <div className='space-y-3'>
            <h3 className='text-xl font-semibold text-foreground'>6.1 Quick research</h3>
            <ul className='list-disc pl-6 space-y-2 text-muted-foreground'>
              <li>
                <strong className='text-foreground'>Interviews:</strong> mapped real work flows.
              </li>
              <li>
                <strong className='text-foreground'>Log analysis:</strong> 63% of sound alerts did not result in a click.
              </li>
              <li>
                <strong className='text-foreground'>Benchmark:</strong> Zendesk, Intercom, Crisp — all use CTA toasts.
              </li>
            </ul>
          </div>

          {/* 6.2 Requirements mapping */}
          <div className='space-y-3'>
            <h3 className='text-xl font-semibold text-foreground'>6.2 Requirements mapping</h3>
            <ol className='list-decimal pl-6 space-y-2 text-muted-foreground'>
              <li>
                <strong className='text-foreground'>User:</strong> online agents (Attendant+ profile)
              </li>
              <li>
                <strong className='text-foreground'>Trigger:</strong> ≥1 ticket and agent under active chat limit
              </li>
              <li>
                <strong className='text-foreground'>Content:</strong> title, queue counter, waiting time, <strong>Accept</strong> CTA
              </li>
              <li>
                <strong className='text-foreground'>Actions:</strong> <strong>Accept</strong> (primary), <strong>Ignore</strong>, “x” close
              </li>
              <li>
                <strong className='text-foreground'>Rules:</strong> optimistic lock; pop‑up expires in 15s; max 3 pending
              </li>
              <li>
                <strong className='text-foreground'>Acceptance criteria:</strong> see section 9
              </li>
            </ol>
          </div>

		  {/* 6.3 Ideation & wireframes */}
          <div className='space-y-4'>
            <h3 className='text-xl font-semibold text-foreground'>6.3 Ideation & wireframes</h3>
            <div className='space-y-8'>
              {[
                { src: '/portfolios/fila-atendimento/2.png', alt: 'Initial pop-up wireframe' },
                { src: '/portfolios/fila-atendimento/3.png', alt: 'Wireframe evolution' },
                { src: '/portfolios/fila-atendimento/4.png', alt: 'Refined final wireframe' },
              ].map((img, i) => (
                <div key={i} className='relative -mx-8 md:-mx-16 lg:-mx-24 xl:-mx-32'>
                  <div className='relative rounded-2xl overflow-hidden border border-border/20 shadow-2xl'>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={1200}
                      height={800}
                      className='w-full object-contain'
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px'
                      quality={85}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* 7. Final solution */}
        <section className='space-y-6'>
          <h2 className='text-2xl md:text-3xl font-bold text-foreground'>7. Final solution</h2>
          <ol className='list-decimal pl-6 space-y-2 text-muted-foreground'>
            <li>Bottom-right anchored pop‑up; respects safe‑area on mobile.</li>
            <li>Badge “Queue: 8” + timer “Waiting for 01:35”.</li>
            <li>
              <strong className='text-foreground'>Accept</strong> in blue; <strong className='text-foreground'>Ignore</strong> as text; “x” to close.
            </li>
            <li>
              If the agent is penalized, the same component changes its state:
              <ul className='list-disc pl-6 mt-2 space-y-2'>
                <li>Red message, grey disabled button, text “Your access will be unlocked at 19:52”.</li>
                <li>“Learn more” link opens the help article.</li>
              </ul>
            </li>
          </ol>
        </section>

        {/* 7.A – Three main states (5–7) */}
        <section className='relative -mx-8 md:-mx-16 lg:-mx-24 xl:-mx-32'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {[
              { src: '/portfolios/fila-atendimento/5.png', alt: 'Pop-up — normal state' },
              { src: '/portfolios/fila-atendimento/6.png', alt: 'Pop-up — details' },
              { src: '/portfolios/fila-atendimento/7.png', alt: 'Pop-up — penalized state' },
            ].map((img, i) => (
              <div key={i} className='relative rounded-2xl overflow-hidden border border-border/20 shadow-2xl'>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1200}
                  height={800}
                  className='w-full object-contain'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px'
                  quality={85}
                />
              </div>
            ))}
          </div>
        </section>

        {/* 7.B – Variations (8–10) */}
        <section className='relative -mx-8 md:-mx-16 lg:-mx-24 xl:-mx-32'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {[
              '/portfolios/fila-atendimento/8.png',
              '/portfolios/fila-atendimento/9.png',
              '/portfolios/fila-atendimento/10.png',
            ].map((src, i) => (
              <div key={i} className='relative rounded-2xl overflow-hidden border border-border/20 shadow-2xl'>
                <Image
                  src={src}
                  alt={`Variation ${i + 8}`}
                  width={1200}
                  height={800}
                  className='w-full object-contain'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px'
                  quality={85}
                />
              </div>
            ))}
          </div>
        </section>

        {/* 7.C – Variations (11–13) */}
        <section className='relative -mx-8 md:-mx-16 lg:-mx-24 xl:-mx-32'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {[
              '/portfolios/fila-atendimento/11.png',
              '/portfolios/fila-atendimento/12.png',
              '/portfolios/fila-atendimento/13.png',
            ].map((src, i) => (
              <div key={i} className='relative rounded-2xl overflow-hidden border border-border/20 shadow-2xl'>
                <Image
                  src={src}
                  alt={`Variation ${i + 11}`}
                  width={1200}
                  height={800}
                  className='w-full object-contain'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px'
                  quality={85}
                />
              </div>
            ))}
          </div>
        </section>

        {/* 7.D – Light mode (14–16) */}
        <section className='relative -mx-8 md:-mx-16 lg:-mx-24 xl:-mx-32'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {[
              '/portfolios/fila-atendimento/14.png',
              '/portfolios/fila-atendimento/15.png',
              '/portfolios/fila-atendimento/16.png',
            ].map((src, i) => (
              <div key={i} className='relative rounded-2xl overflow-hidden border border-border/20 shadow-2xl'>
                <Image
                  src={src}
                  alt={`Light mode ${i + 14}`}
                  width={1200}
                  height={800}
                  className='w-full object-contain'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px'
                  quality={85}
                />
              </div>
            ))}
          </div>
        </section>

        {/* 8. Moderated test */}
        <section className='space-y-4'>
          <h2 className='text-2xl md:text-3xl font-bold text-foreground'>8. Moderated test</h2>
          <ul className='list-disc pl-6 space-y-2 text-muted-foreground'>
            <li>
              <strong className='text-foreground'>5 agents</strong> — timed tasks
            </li>
            <li>
              <em>Time‑to‑click</em> dropped from 11 s → <strong>4 s</strong> (−64%)
            </li>
            <li>
              Feedback: “The blue button helps, but ‘Ignore’ should be less prominent” → color hierarchy adjusted
            </li>
          </ul>
        </section>

        {/* 9. Acceptance criteria */}
        <section className='space-y-4'>
          <h2 className='text-2xl md:text-3xl font-bold text-foreground'>9. Acceptance criteria</h2>
          <ol className='list-decimal pl-6 space-y-2 text-muted-foreground'>
            <li>Pop‑up appears in &lt; 500 ms after eligible ticket.</li>
            <li>Clicking <strong className='text-foreground'>Accept</strong> assigns the ticket and opens the conversation.</li>
            <li>Ignoring/expiring keeps the ticket free and the pop‑up disappears.</li>
            <li>No ticket is assigned to two agents simultaneously.</li>
            <li>Impressions and clicks are tracked to monitor engagement and iterate.</li>
          </ol>
        </section>

        {/* 10. Results & validation */}
        <section className='space-y-6'>
          <h2 className='text-2xl md:text-3xl font-bold text-foreground'>10. Results & how we validated</h2>
          <div className='space-y-3 text-muted-foreground'>
            <h3 className='text-lg font-semibold text-foreground'>Summary method</h3>
            <ol className='list-decimal pl-6 space-y-2'>
              <li>Usage metrics via internal analytics (e.g., time to first contact, pop‑up clicks).</li>
              <li>1‑question pulse survey after the first interaction to measure CSAT.</li>
              <li>Quick interviews with 5 agents to understand experience and validate solutions.</li>
              <li>Results and prototypes shared with the client to confirm perceived value.</li>
            </ol>
          </div>

          <div className='space-y-3'>
            <h3 className='text-lg font-semibold text-foreground'>Main metrics</h3>
            <ul className='list-disc pl-6 space-y-2 text-muted-foreground'>
              <li>
                <strong>Time‑to‑first‑response:</strong> 18.5 s → <strong>14.4 s</strong> (−22%)
              </li>
              <li>
                <strong>First‑contact CSAT:</strong> 4.1 / 5 → <strong>4.3 / 5</strong> (+0.2)
              </li>
              <li>
                <strong>Reopened tickets:</strong> 7.8% → <strong>7.1%</strong> (−9%)
              </li>
            </ul>
          </div>

          <div className='space-y-3'>
            <h3 className='text-lg font-semibold text-foreground'>Interpretation</h3>
            <ul className='list-disc pl-6 space-y-2 text-muted-foreground'>
              <li>Consistent response‑time drop indicates real efficiency gain.</li>
              <li>CSAT increased with statistical relevance.</li>
              <li>Fewer reopens suggest less friction in the first interaction.</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
