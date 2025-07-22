'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ArrowLeft,
  Zap,
  Target,
  Rocket,
  Users,
  Code,
  Database,
  Cloud,
  Shield,
  TrendingUp,
  Clock,
  Github,
  Play,
  Palette,
  Cpu,
  Globe,
  Mail,
  Sparkles,
  Eye,
  ArrowRight,
  Smartphone,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function VentuChatPage() {
  return (
    <div className='min-h-screen bg-background'>
      {/* Header */}
      <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <div className='container flex h-14 max-w-screen-2xl items-center'>
          <Link href='/' className='flex items-center space-x-2'>
            <ArrowLeft className='h-4 w-4' />
            <span className='font-bold'>Voltar ao Portfólio</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className='relative py-24 px-4'>
        <div className='max-w-6xl mx-auto space-y-12'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center space-y-6'
          >
            <Badge className='bg-muted/50 text-muted-foreground border-border/50 px-4 py-2 text-sm font-medium'>
              Case de Sucesso
            </Badge>
            <h1 className='text-5xl md:text-7xl font-bold text-foreground tracking-tight'>
              Ventu Chat
            </h1>
            <p className='text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed'>
              MVP de chatbot inteligente desenvolvido em 5 dias. Validação de
              mercado em tempo recorde com resultados impressionantes e 93% de
              redução de custos.
            </p>

            {/* Video Demo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className='w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-border/20 bg-card/80'
            >
              <div className='relative w-full'>
                <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className='absolute top-0 left-0 w-full h-full object-cover'
                  >
                    <source src='/case destaque/video.gif' type='video/mp4' />
                    <source
                      src='/case destaque/new_recording_-_7_18_2025,_5_39_16_pm (1080p).mp4'
                      type='video/mp4'
                    />
                  </video>
                </div>
              </div>
            </motion.div>

            {/* Stats Cards */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-12'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className='bg-card/80 border border-border/20 rounded-xl p-6 text-center'
              >
                <div className='text-3xl font-bold text-foreground'>5</div>
                <div className='text-sm text-muted-foreground'>Dias</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className='bg-card/80 border border-border/20 rounded-xl p-6 text-center'
              >
                <div className='text-3xl font-bold text-foreground'>95%</div>
                <div className='text-sm text-muted-foreground'>Satisfação</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className='bg-card/80 border border-border/20 rounded-xl p-6 text-center'
              >
                <div className='text-3xl font-bold text-foreground'>80%</div>
                <div className='text-sm text-muted-foreground'>Redução</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className='bg-card/80 border border-border/20 rounded-xl p-6 text-center'
              >
                <div className='text-3xl font-bold text-foreground'>10k+</div>
                <div className='text-sm text-muted-foreground'>Conversas</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className='py-24 px-4 bg-muted/20'>
        <div className='max-w-6xl mx-auto space-y-12'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center space-y-4'
          >
            <h2 className='text-4xl md:text-5xl font-bold text-foreground tracking-tight'>
              Visão Geral do Projeto
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Uma jornada completa de concepção, desenvolvimento e otimização de
              uma plataforma de chat com IA
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-4'
            >
              <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center'>
                <Target className='w-6 h-6 text-primary' />
              </div>
              <h3 className='text-xl font-bold text-foreground'>
                Problema Identificado
              </h3>
              <p className='text-muted-foreground'>
                Falta de uma solução unificada para chat com IA, custos elevados
                de modelos premium e experiências fragmentadas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-4'
            >
              <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center'>
                <Rocket className='w-6 h-6 text-primary' />
              </div>
              <h3 className='text-xl font-bold text-foreground'>
                Solução Proposta
              </h3>
              <p className='text-muted-foreground'>
                Plataforma única que integra múltiplos modelos de IA, otimiza
                custos e oferece experiência fluida.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-4'
            >
              <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center'>
                <Users className='w-6 h-6 text-primary' />
              </div>
              <h3 className='text-xl font-bold text-foreground'>
                Público-Alvo
              </h3>
              <p className='text-muted-foreground'>
                Desenvolvedores, criadores de conteúdo, estudantes e
                profissionais que buscam produtividade.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Evolution Section */}
      <section className='py-24 px-4 bg-gradient-to-br from-muted/30 via-background to-muted/20'>
        <div className='max-w-7xl mx-auto space-y-16'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center space-y-6'
          >
            <Badge className='bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium'>
              Evolução do Design
            </Badge>
            <h2 className='text-5xl md:text-6xl font-bold text-foreground tracking-tight'>
              Jornada de Design
            </h2>
            <p className='text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed'>
              Do conceito inicial ao design final otimizado pelo Gemini Cli
            </p>
          </motion.div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {/* Version 0 - Initial */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='group relative'
            >
              <div className='relative overflow-hidden rounded-2xl shadow-2xl border border-border/30 bg-card/90 group-hover:shadow-3xl transition-all duration-500'>
                <div className='aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center'>
                  <div className='text-center space-y-4 p-8'>
                    <div className='w-16 h-16 rounded-2xl bg-purple-600 flex items-center justify-center mx-auto'>
                      <Sparkles className='w-8 h-8 text-white' />
                    </div>
                    <div className='space-y-2'>
                      <h4 className='text-white font-bold text-lg'>
                        Comece uma nova conversa
                      </h4>
                      <p className='text-gray-300 text-sm'>
                        Digite sua mensagem abaixo para começar a conversar com
                        a IA
                      </p>
                    </div>
                  </div>
                </div>
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none' />
                <div className='absolute bottom-4 left-4 right-4'>
                  <Badge className='bg-yellow-500/20 text-yellow-500 border-yellow-500/30 mb-2'>
                    Versão 0
                  </Badge>
                  <h4 className='text-white font-bold text-lg mb-2'>
                    Conceito Inicial
                  </h4>
                  <p className='text-white/90 text-sm'>
                    Interface básica com funcionalidade essencial
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Version 2.1 - Gemini Cli Improved */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='group relative'
            >
              <div className='relative overflow-hidden rounded-2xl shadow-2xl border border-border/30 bg-card/90 group-hover:shadow-3xl transition-all duration-500'>
                <div className='aspect-video bg-gradient-to-br from-gray-900 to-blue-900 flex'>
                  <div className='w-1/4 bg-gray-800 p-4'>
                    <div className='space-y-4'>
                      <div className='w-full h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-medium'>
                        + Nova Conversa
                      </div>
                      <div className='space-y-2'>
                        <div className='w-full h-8 bg-blue-800 rounded text-white text-sm flex items-center px-3'>
                          Quem é pedro?
                        </div>
                        <div className='w-full h-8 bg-gray-700 rounded text-gray-300 text-sm flex items-center px-3'>
                          esquece
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1 p-4'>
                    <div className='space-y-4'>
                      <div className='flex justify-between items-center'>
                        <h4 className='text-white font-bold'>Quem é pedro?</h4>
                        <div className='bg-gray-700 rounded px-3 py-1 text-white text-sm'>
                          Claude 3.5 Sonnet
                        </div>
                      </div>
                      <div className='bg-blue-800 rounded-lg p-4 text-white text-sm'>
                        <p>
                          Pedro é um nome muito comum e pode se referir a várias
                          pessoas famosas...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none' />
                <div className='absolute bottom-4 left-4 right-4'>
                  <Badge className='bg-green-500/20 text-green-500 border-green-500/30 mb-2'>
                    Versão 2.1
                  </Badge>
                  <h4 className='text-white font-bold text-lg mb-2'>
                    Gemini Cli Melhorado
                  </h4>
                  <p className='text-white/90 text-sm'>
                    Interface aprimorada com sidebar e conversas
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Version 2 - Final */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='group relative'
            >
              <div className='relative overflow-hidden rounded-2xl shadow-2xl border border-border/30 bg-card/90 group-hover:shadow-3xl transition-all duration-500'>
                <div className='aspect-video bg-gradient-to-br from-gray-900 to-purple-900 flex'>
                  <div className='w-1/4 bg-gray-800 p-4'>
                    <div className='space-y-4'>
                      <div className='w-full h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white font-medium'>
                        + Nova Conversa
                      </div>
                      <div className='space-y-2'>
                        <div className='w-full h-8 bg-purple-800 rounded text-white text-sm flex items-center px-3'>
                          o que você ve?
                        </div>
                        <div className='w-full h-8 bg-gray-700 rounded text-gray-300 text-sm flex items-center px-3'>
                          esquece
                        </div>
                      </div>
                      <div className='absolute bottom-4 left-4 right-4'>
                        <div className='bg-gray-700 rounded p-2 flex items-center gap-2'>
                          <div className='w-6 h-6 bg-purple-600 rounded text-white text-xs flex items-center justify-center'>
                            ES
                          </div>
                          <div className='text-white text-xs'>
                            <div>Elias Santos</div>
                            <div className='text-gray-400'>
                              eeliasricardoo@gmail.com
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1 p-4'>
                    <div className='space-y-4'>
                      <div className='flex justify-between items-center'>
                        <h4 className='text-white font-bold'>o que você ve?</h4>
                        <div className='bg-gray-700 rounded px-3 py-1 text-white text-sm'>
                          Claude 3.5 Sonnet
                        </div>
                      </div>
                      <div className='bg-gray-700 rounded-lg p-4'>
                        <div className='w-full h-24 bg-gray-600 rounded mb-2 flex items-center justify-center'>
                          <span className='text-white font-bold text-lg'>
                            Google
                          </span>
                        </div>
                        <p className='text-white text-sm'>
                          Esta é a logomarca do Google em sua versão mais
                          moderna...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none' />
                <div className='absolute bottom-4 left-4 right-4'>
                  <Badge className='bg-blue-500/20 text-blue-500 border-blue-500/30 mb-2'>
                    Versão Final
                  </Badge>
                  <h4 className='text-white font-bold text-lg mb-2'>
                    Design Completo
                  </h4>
                  <p className='text-white/90 text-sm'>
                    Interface final com análise de imagens
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Evolution Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='bg-gradient-to-br from-primary/5 via-background to-primary/5 border border-border/30 rounded-2xl p-8'
          >
            <div className='text-center space-y-6'>
              <h4 className='text-2xl font-bold text-foreground'>
                A Evolução do Design
              </h4>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-left'>
                <div className='space-y-3'>
                  <div className='flex items-center gap-3'>
                    <div className='w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center'>
                      <span className='text-yellow-500 font-bold text-sm'>
                        1
                      </span>
                    </div>
                    <h5 className='font-semibold text-foreground'>Versão 0</h5>
                  </div>
                  <p className='text-muted-foreground text-sm'>
                    Comecei o projeto com uma interface básica, focando apenas
                    na funcionalidade essencial do chat com IA.
                  </p>
                </div>

                <div className='space-y-3'>
                  <div className='flex items-center gap-3'>
                    <div className='w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center'>
                      <span className='text-green-500 font-bold text-sm'>
                        2
                      </span>
                    </div>
                    <h5 className='font-semibold text-foreground'>
                      Gemini Cli
                    </h5>
                  </div>
                  <p className='text-muted-foreground text-sm'>
                    Pedi para o Gemini Cli melhorar o design, que adicionou
                    sidebar, histórico de conversas e melhor organização.
                  </p>
                </div>

                <div className='space-y-3'>
                  <div className='flex items-center gap-3'>
                    <div className='w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center'>
                      <span className='text-blue-500 font-bold text-sm'>3</span>
                    </div>
                    <h5 className='font-semibold text-foreground'>
                      Versão Final
                    </h5>
                  </div>
                  <p className='text-muted-foreground text-sm'>
                    Interface completa com análise de imagens, perfil do usuário
                    e todas as funcionalidades avançadas implementadas.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interface Screenshots */}
      <section className='py-24 px-4 bg-gradient-to-br from-muted/30 via-background to-muted/20'>
        <div className='max-w-7xl mx-auto space-y-16'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center space-y-6'
          >
            <Badge className='bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium'>
              Interface Design
            </Badge>
            <h2 className='text-5xl md:text-6xl font-bold text-foreground tracking-tight'>
              Interface do Ventu Chat
            </h2>
            <p className='text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed'>
              Design moderno e intuitivo que oferece uma experiência fluida de
              conversação com IA
            </p>
          </motion.div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Primeira linha - 2 cards grandes */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-6 group'
            >
              <div className='relative rounded-2xl overflow-hidden shadow-2xl border border-border/30 bg-card/90 group-hover:shadow-3xl transition-all duration-500'>
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10' />
                <Image
                  src='/case destaque/Imge.png'
                  alt='Interface principal do Ventu Chat'
                  width={600}
                  height={450}
                  className='w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500'
                />
                <div className='absolute bottom-0 left-0 right-0 p-6 z-20'>
                  <h3 className='text-2xl font-bold text-white mb-2'>
                    Interface Principal
                  </h3>
                  <p className='text-white/90'>
                    Chat limpo e organizado com histórico de conversas
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='space-y-6 group'
            >
              <div className='relative rounded-2xl overflow-hidden shadow-2xl border border-border/30 bg-card/90 group-hover:shadow-3xl transition-all duration-500'>
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10' />
                <Image
                  src='/case destaque/Login.png'
                  alt='Tela de login do Ventu Chat'
                  width={600}
                  height={450}
                  className='w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500'
                />
                <div className='absolute bottom-0 left-0 right-0 p-6 z-20'>
                  <h3 className='text-2xl font-bold text-white mb-2'>
                    Sistema de Login
                  </h3>
                  <p className='text-white/90'>
                    Autenticação segura com Supabase
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Segunda linha - 3 cards médios */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className='lg:col-span-2 space-y-6 group'
            >
              <div className='relative rounded-2xl overflow-hidden shadow-2xl border border-border/30 bg-card/90 group-hover:shadow-3xl transition-all duration-500'>
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10' />
                <Image
                  src='/case destaque/Menu aberto.png'
                  alt='Menu lateral do Ventu Chat'
                  width={800}
                  height={400}
                  className='w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500'
                />
                <div className='absolute bottom-0 left-0 right-0 p-6 z-20'>
                  <h3 className='text-2xl font-bold text-white mb-2'>
                    Menu Lateral
                  </h3>
                  <p className='text-white/90'>
                    Navegação intuitiva entre conversas
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Terceira linha - 2 cards médios */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='space-y-6 group'
            >
              <div className='relative rounded-2xl overflow-hidden shadow-2xl border border-border/30 bg-card/90 group-hover:shadow-3xl transition-all duration-500'>
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10' />
                <Image
                  src='/case destaque/Menu fechado.png'
                  alt='Menu fechado do Ventu Chat'
                  width={500}
                  height={350}
                  className='w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500'
                />
                <div className='absolute bottom-0 left-0 right-0 p-6 z-20'>
                  <h3 className='text-xl font-bold text-white mb-2'>
                    Interface Compacta
                  </h3>
                  <p className='text-white/90'>
                    Design responsivo para diferentes telas
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className='space-y-6 group'
            >
              <div className='relative rounded-2xl overflow-hidden shadow-2xl border border-border/30 bg-card/90 group-hover:shadow-3xl transition-all duration-500'>
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10' />
                <Image
                  src='/case destaque/Modelos personalizado.gif'
                  alt='Seleção de modelos de IA'
                  width={500}
                  height={350}
                  className='w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500'
                />
                <div className='absolute bottom-0 left-0 right-0 p-6 z-20'>
                  <h3 className='text-xl font-bold text-white mb-2'>
                    Modelos Personalizados
                  </h3>
                  <p className='text-white/90'>
                    Escolha entre diferentes modelos de IA
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card especial - Funcionalidades */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className='lg:col-span-2 group'
            >
              <div className='relative rounded-2xl overflow-hidden shadow-2xl border border-border/30 bg-gradient-to-br from-primary/10 via-background to-primary/5 p-12 group-hover:shadow-3xl transition-all duration-500'>
                <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10' />
                <div className='relative z-10 text-center space-y-8'>
                  <div className='w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500'>
                    <Sparkles className='w-12 h-12 text-primary' />
                  </div>
                  <div className='space-y-4'>
                    <h3 className='text-3xl font-bold text-foreground'>
                      Funcionalidades Avançadas
                    </h3>
                    <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
                      Geração de imagens, vídeos, múltiplos modelos de IA e
                      muito mais integrados em uma única plataforma
                    </p>
                  </div>
                  <div className='flex flex-wrap justify-center gap-4'>
                    {[
                      { icon: Eye, label: 'Chat Inteligente' },
                      { icon: Palette, label: 'Geração de Imagens' },
                      { icon: Play, label: 'Criação de Vídeos' },
                      { icon: Cpu, label: 'Múltiplos Modelos' },
                    ].map((feature, index) => (
                      <div
                        key={index}
                        className='flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full'
                      >
                        <feature.icon className='w-4 h-4 text-primary' />
                        <span className='text-sm font-medium text-foreground'>
                          {feature.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* UX & Design System Section */}
      <section className='py-24 px-4 bg-gradient-to-br from-background via-muted/10 to-background'>
        <div className='max-w-7xl mx-auto space-y-16'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center space-y-6'
          >
            <Badge className='bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium'>
              UX & Design System
            </Badge>
            <h2 className='text-5xl md:text-6xl font-bold text-foreground tracking-tight'>
              Experiência do Usuário & Design System
            </h2>
            <p className='text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed'>
              Sistema de design completo baseado em princípios modernos de UX/UI
            </p>
          </motion.div>

          {/* Design Principles */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              {
                icon: Eye,
                title: 'Consistência',
                description: 'Padrões visuais unificados em todo o sistema',
                color: 'text-blue-500',
              },
              {
                icon: Shield,
                title: 'Acessibilidade',
                description: 'Suporte completo a WCAG 2.1 AA',
                color: 'text-green-500',
              },
              {
                icon: Zap,
                title: 'Performance',
                description: 'Otimizado para Web Vitals e velocidade',
                color: 'text-yellow-500',
              },
              {
                icon: Smartphone,
                title: 'Responsividade',
                description: 'Mobile-first com breakpoints consistentes',
                color: 'text-purple-500',
              },
            ].map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className='group'
              >
                <div className='bg-card/80 border border-border/20 rounded-2xl p-8 hover:bg-card/90 transition-all duration-300 hover:shadow-xl'>
                  <div
                    className={`w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <principle.icon className={`w-6 h-6 ${principle.color}`} />
                  </div>
                  <h3 className='text-xl font-bold text-foreground mb-3'>
                    {principle.title}
                  </h3>
                  <p className='text-muted-foreground leading-relaxed'>
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Design System Components */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-12'
          >
            <div className='text-center space-y-4'>
              <h3 className='text-3xl md:text-4xl font-bold text-foreground'>
                Sistema de Componentes
              </h3>
              <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
                Biblioteca de componentes reutilizáveis baseada em Shadcn/ui e
                Radix UI
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {[
                {
                  name: 'Button',
                  variants: ['default', 'outline', 'ghost', 'destructive'],
                  description: 'Botões com múltiplas variantes e estados',
                },
                {
                  name: 'Card',
                  variants: ['default', 'glassmorphism'],
                  description: 'Containers com efeitos visuais modernos',
                },
                {
                  name: 'Dialog',
                  variants: ['modal', 'sheet', 'drawer'],
                  description: 'Modais e overlays responsivos',
                },
                {
                  name: 'Badge',
                  variants: ['default', 'secondary', 'outline'],
                  description: 'Indicadores de status e tags',
                },
                {
                  name: 'Input',
                  variants: ['text', 'search', 'textarea'],
                  description: 'Campos de entrada com validação',
                },
                {
                  name: 'Tabs',
                  variants: ['horizontal', 'vertical'],
                  description: 'Navegação por abas e seções',
                },
              ].map((component, index) => (
                <motion.div
                  key={component.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className='bg-card/60 border border-border/20 rounded-xl p-6 hover:bg-card/80 transition-colors'
                >
                  <h4 className='font-semibold text-foreground mb-2'>
                    {component.name}
                  </h4>
                  <p className='text-sm text-muted-foreground mb-3'>
                    {component.description}
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {component.variants.map(variant => (
                      <Badge
                        key={variant}
                        variant='secondary'
                        className='text-xs'
                      >
                        {variant}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Color System */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-8'
          >
            <div className='text-center space-y-4'>
              <h3 className='text-3xl md:text-4xl font-bold text-foreground'>
                Sistema de Cores
              </h3>
              <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
                Paleta de cores consistente com suporte a tema claro/escuro
              </p>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6'>
              {[
                {
                  name: 'Background',
                  class: 'bg-background',
                  color: 'bg-gray-100 dark:bg-gray-900',
                },
                {
                  name: 'Foreground',
                  class: 'bg-foreground',
                  color: 'bg-gray-900 dark:bg-gray-100',
                },
                { name: 'Primary', class: 'bg-primary', color: 'bg-blue-600' },
                {
                  name: 'Secondary',
                  class: 'bg-secondary',
                  color: 'bg-gray-200 dark:bg-gray-800',
                },
                {
                  name: 'Muted',
                  class: 'bg-muted',
                  color: 'bg-gray-100 dark:bg-gray-800',
                },
                {
                  name: 'Border',
                  class: 'bg-border',
                  color: 'bg-gray-300 dark:bg-gray-700',
                },
              ].map((color, index) => (
                <motion.div
                  key={color.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className='text-center space-y-3'
                >
                  <div
                    className={`w-16 h-16 rounded-xl mx-auto border border-border/20 ${color.color}`}
                  />
                  <div>
                    <p className='text-sm font-medium text-foreground'>
                      {color.name}
                    </p>
                    <p className='text-xs text-muted-foreground'>
                      {color.class}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Typography System */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-8'
          >
            <div className='text-center space-y-4'>
              <h3 className='text-3xl md:text-4xl font-bold text-foreground'>
                Sistema de Tipografia
              </h3>
              <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
                Hierarquia tipográfica responsiva e acessível
              </p>
            </div>

            <div className='bg-card/60 border border-border/20 rounded-2xl p-8 space-y-6'>
              <div className='space-y-2'>
                <h1 className='text-4xl md:text-5xl font-bold text-foreground'>
                  Heading 1 - Título Principal
                </h1>
                <p className='text-sm text-muted-foreground'>
                  text-4xl md:text-5xl font-bold
                </p>
              </div>
              <div className='space-y-2'>
                <h2 className='text-3xl md:text-4xl font-bold text-foreground'>
                  Heading 2 - Subtítulo
                </h2>
                <p className='text-sm text-muted-foreground'>
                  text-3xl md:text-4xl font-bold
                </p>
              </div>
              <div className='space-y-2'>
                <h3 className='text-2xl font-bold text-foreground'>
                  Heading 3 - Seção
                </h3>
                <p className='text-sm text-muted-foreground'>
                  text-2xl font-bold
                </p>
              </div>
              <div className='space-y-2'>
                <p className='text-lg text-foreground'>
                  Body Large - Texto de destaque
                </p>
                <p className='text-sm text-muted-foreground'>text-lg</p>
              </div>
              <div className='space-y-2'>
                <p className='text-base text-foreground'>
                  Body - Texto padrão do sistema
                </p>
                <p className='text-sm text-muted-foreground'>text-base</p>
              </div>
              <div className='space-y-2'>
                <p className='text-sm text-muted-foreground'>
                  Body Small - Texto secundário
                </p>
                <p className='text-xs text-muted-foreground'>
                  text-sm text-muted-foreground
                </p>
              </div>
            </div>
          </motion.div>

          {/* UX Process */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-8'
          >
            <div className='text-center space-y-4'>
              <h3 className='text-3xl md:text-4xl font-bold text-foreground'>
                Processo de UX
              </h3>
              <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
                Metodologia ágil focada em validação rápida e iteração contínua
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {[
                {
                  step: '01',
                  title: 'Discovery',
                  description:
                    'Análise de usuários, pesquisa de mercado e definição de problemas',
                  icon: Target,
                },
                {
                  step: '02',
                  title: 'Design',
                  description:
                    'Wireframes, protótipos e design system baseado em insights',
                  icon: Palette,
                },
                {
                  step: '03',
                  title: 'Development',
                  description:
                    'Implementação ágil com feedback contínuo e testes',
                  icon: Code,
                },
                {
                  step: '04',
                  title: 'Validation',
                  description:
                    'Testes de usabilidade, métricas e iteração baseada em dados',
                  icon: TrendingUp,
                },
              ].map((phase, index) => (
                <motion.div
                  key={phase.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className='relative group'
                >
                  <div className='bg-card/80 border border-border/20 rounded-2xl p-8 hover:bg-card/90 transition-all duration-300'>
                    <div className='flex items-center gap-4 mb-6'>
                      <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                        <phase.icon className='w-6 h-6 text-primary' />
                      </div>
                      <div className='text-2xl font-bold text-primary'>
                        {phase.step}
                      </div>
                    </div>
                    <h4 className='text-xl font-bold text-foreground mb-3'>
                      {phase.title}
                    </h4>
                    <p className='text-muted-foreground leading-relaxed'>
                      {phase.description}
                    </p>
                  </div>
                  {index < 3 && (
                    <div className='hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2'>
                      <ArrowRight className='w-8 h-8 text-muted-foreground' />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className='py-24 px-4'>
        <div className='max-w-6xl mx-auto space-y-12'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center space-y-4'
          >
            <h2 className='text-4xl md:text-5xl font-bold text-foreground tracking-tight'>
              Tecnologias Utilizadas
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              15+ tecnologias integradas em uma arquitetura robusta e escalável
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[
              { name: 'Next.js', icon: Globe, category: 'Framework' },
              { name: 'TypeScript', icon: Code, category: 'Linguagem' },
              { name: 'Supabase', icon: Database, category: 'Backend' },
              { name: 'OpenAI API', icon: Sparkles, category: 'IA' },
              { name: 'Tailwind CSS', icon: Palette, category: 'UI' },
              { name: 'Framer Motion', icon: Eye, category: 'UI' },
              { name: 'Prisma', icon: Database, category: 'ORM' },
              { name: 'Vercel', icon: Cloud, category: 'Deploy' },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className='bg-card/80 border border-border/20 rounded-xl p-6 hover:bg-card/90 transition-colors'
              >
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 rounded-lg bg-muted flex items-center justify-center'>
                    <tech.icon className='w-5 h-5 text-muted-foreground' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-foreground'>
                      {tech.name}
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                      {tech.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className='py-24 px-4 bg-muted/20'>
        <div className='max-w-6xl mx-auto space-y-12'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center space-y-4'
          >
            <h2 className='text-4xl md:text-5xl font-bold text-foreground tracking-tight'>
              Resultados Impressionantes
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Métricas quantificáveis que demonstram o impacto real do projeto
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* Development Speed */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className='bg-card/80 border border-border/20 rounded-xl p-8'
            >
              <div className='flex items-center space-x-3 mb-6'>
                <div className='w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center'>
                  <Clock className='w-6 h-6 text-blue-500' />
                </div>
                <h3 className='text-2xl font-bold text-foreground'>
                  Velocidade de Desenvolvimento
                </h3>
              </div>

              <div className='space-y-4'>
                <div className='flex justify-between items-center'>
                  <span className='text-muted-foreground'>
                    Tempo de Desenvolvimento
                  </span>
                  <span className='font-bold text-foreground'>5 dias</span>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-muted-foreground'>MVP Funcional</span>
                  <span className='font-bold text-foreground'>100%</span>
                </div>
                <div className='border-t border-border/20 pt-4'>
                  <div className='flex justify-between items-center'>
                    <span className='text-blue-500 font-bold'>Eficiência</span>
                    <span className='text-blue-500 font-bold'>Recorde</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* User Satisfaction */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className='bg-card/80 border border-border/20 rounded-xl p-8'
            >
              <div className='flex items-center space-x-3 mb-6'>
                <div className='w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center'>
                  <TrendingUp className='w-6 h-6 text-green-500' />
                </div>
                <h3 className='text-2xl font-bold text-foreground'>
                  Satisfação do Usuário
                </h3>
              </div>

              <div className='space-y-4'>
                <div className='flex justify-between items-center'>
                  <span className='text-muted-foreground'>
                    Taxa de Satisfação
                  </span>
                  <span className='font-bold text-foreground'>95%</span>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-muted-foreground'>
                    Conversas Processadas
                  </span>
                  <span className='font-bold text-foreground'>10.000+</span>
                </div>
                <div className='border-t border-border/20 pt-4'>
                  <div className='flex justify-between items-center'>
                    <span className='text-green-500 font-bold'>
                      Redução de Tempo
                    </span>
                    <span className='text-green-500 font-bold'>80%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className='py-24 px-4'>
        <div className='max-w-6xl mx-auto space-y-12'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center space-y-4'
          >
            <h2 className='text-4xl md:text-5xl font-bold text-foreground tracking-tight'>
              Desafios e Soluções
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Problemas complexos resolvidos com soluções inovadoras
            </p>
          </motion.div>

          <div className='space-y-8'>
            {[
              {
                title: 'Migração de Dados',
                problem: 'Problemas com exportação de schemas do Supabase',
                solution:
                  'Implementação de sistema híbrido com localStorage como fallback',
                result:
                  'Sincronização automática e migração transparente de dados',
              },
              {
                title: 'Integração de APIs',
                problem: 'Coordenação complexa entre múltiplas APIs de IA',
                solution:
                  'Sistema unificado com fallback e tratamento de erros robusto',
                result:
                  'Interface fluida com múltiplos modelos de IA integrados',
              },
              {
                title: 'Performance e Cache',
                problem: 'Latência alta nas requisições de IA',
                solution:
                  'Sistema de cache inteligente e otimizações de queries',
                result: '80% de redução no tempo de resposta',
              },
              {
                title: 'Validação de Mercado',
                problem: 'Necessidade de validar o produto rapidamente',
                solution: 'MVP funcional em 5 dias com métricas de uso',
                result: '95% de satisfação dos usuários e 10.000+ conversas',
              },
            ].map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className='bg-card/80 border border-border/20 rounded-xl p-8'
              >
                <h3 className='text-2xl font-bold text-foreground mb-6'>
                  {challenge.title}
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                  <div>
                    <h4 className='font-semibold text-red-500 mb-2'>
                      ❌ Problema
                    </h4>
                    <p className='text-muted-foreground'>{challenge.problem}</p>
                  </div>
                  <div>
                    <h4 className='font-semibold text-blue-500 mb-2'>
                      💡 Solução
                    </h4>
                    <p className='text-muted-foreground'>
                      {challenge.solution}
                    </p>
                  </div>
                  <div>
                    <h4 className='font-semibold text-green-500 mb-2'>
                      ✅ Resultado
                    </h4>
                    <p className='text-muted-foreground'>{challenge.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-24 px-4 bg-muted/20'>
        <div className='max-w-4xl mx-auto text-center space-y-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-4'
          >
            <h2 className='text-4xl md:text-5xl font-bold text-foreground tracking-tight'>
              Interessado em trabalhar juntos?
            </h2>
            <p className='text-xl text-muted-foreground'>
              Vamos transformar suas ideias em produtos que vendem
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className='flex flex-col sm:flex-row gap-4 justify-center'
          >
            <Button
              size='lg'
              className='bg-foreground text-background hover:bg-foreground/90'
            >
              <Mail className='mr-2 h-5 w-5' />
              Entre em Contato
            </Button>
            <Button
              variant='outline'
              size='lg'
              className='border-border text-foreground hover:bg-muted/50'
            >
              <Github className='mr-2 h-5 w-5' />
              Ver Código
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
