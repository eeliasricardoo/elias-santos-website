

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';


export function CallToActionSection() {
  return (
    <section className='space-y-8'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='text-center space-y-6'
      >
        <h2 className='text-3xl font-bold text-foreground'>
          Gostou do Projeto?
        </h2>
        <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
          Vamos conversar sobre como posso ajudar a resolver os desafios de
          UX/UI do seu negócio.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <a href='/'>
            <Button
              size='lg'
              className='bg-orange-600 hover:bg-orange-700 text-white'
            >
              Entrar em Contato
              <ArrowRight className='w-4 h-4 ml-2' />
            </Button>
          </a>
          <a href='/portfolio'>
            <Button size='lg' variant='outline'>
              Ver Outros Projetos
              <ExternalLink className='w-4 h-4 ml-2' />
            </Button>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
