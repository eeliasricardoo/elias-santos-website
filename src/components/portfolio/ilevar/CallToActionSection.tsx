'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';

export function CallToActionSection() {
  const handleLetsTalk = () => {
    window.open('https://calendly.com/eeliasricardoo', '_blank');
  };

  return (
    <section className="text-center space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold text-foreground">
          Designing the surface where learning actually happens
        </h2>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            EnglishRoom is the kind of product I like to build end to end — from
            design tokens to live WebRTC — where the interface gets out of the way
            so the work can happen. If that&apos;s the kind of UX you&apos;re hiring for,
            let&apos;s talk.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 cursor-pointer"
            onClick={handleLetsTalk}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Let&apos;s Talk
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="cursor-pointer"
            onClick={() => (window.location.href = '/portfolio/ventuschat')}
          >
            Next Project
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
