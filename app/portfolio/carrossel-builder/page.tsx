'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import {
  ArrowLeft,
  FileText,
  Github,
  Brain,
  Palette,
  Edit3,
  MessageSquare,
  Layout,
  Download,
  Code,
  Type,
  Layers,
  Zap,
  Target,
  Users,
  Clock,
  TrendingUp,
  CheckCircle,
  Lightbulb,
  Rocket,
  Eye,
  Sparkles,
  Mail,
  Database,
  Shield,
  TestTube,
  Monitor,
  Settings,
} from 'lucide-react';
import Link from 'next/link';

export default function CarrosselBuilderPage() {
  return (
    <main className='max-w-4xl mx-auto py-12 px-4 space-y-20 pt-24'>
      
      {/* Header */}
      <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mb-8'>
        <div className='container flex h-14 max-w-screen-2xl items-center'>
          <Link href='/' className='flex items-center space-x-2'>
            <ArrowLeft className='h-4 w-4' />
            <span className='font-bold'>Voltar ao Portfólio</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className='text-center space-y-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-6'
        >
          <Badge className='bg-muted/50 text-muted-foreground border-border/50 px-4 py-2 text-sm font-medium'>
            Case de UX/Product Design
          </Badge>
          <h1 className='text-5xl md:text-6xl font-bold text-foreground tracking-tight'>
            Post & Carrossel Generator
          </h1>
          <p className='text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
            A jornada de transformação de uma ideia simples em uma ferramenta profissional de criação de carrosséis com IA
          </p>
        </motion.div>

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
                <source src='/portfolios/carrossel-builder/demo.mp4' type='video/mp4' />
              </video>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className='space-y-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-6'
        >
          <h2 className='text-3xl font-bold text-foreground'>A Jornada de Transformação</h2>
          
          <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
            <p>
              Imagine um criador de conteúdo que passa horas criando carrosséis para LinkedIn. Ele tem ideias brilhantes, 
              mas o processo de criação é lento e repetitivo. Cada slide precisa ser pensado, estruturado, formatado... 
              e no final, muitas vezes o resultado não fica profissional.
            </p>
            
            <p>
              <strong className='text-foreground'>&ldquo;E se existisse uma ferramenta que pudesse transformar uma ideia em um carrossel profissional em minutos?&rdquo;</strong>
            </p>
            
            <p>
              Essa foi a pergunta que deu origem ao <strong className='text-foreground'>Post & Carrossel Generator</strong> - 
              uma ferramenta que combina IA generativa com design intuitivo para democratizar a criação de conteúdo profissional.
            </p>
          </div>

          {/* Stats Cards */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-12'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className='bg-card/80 border border-border/20 rounded-xl p-6 text-center'
            >
              <div className='text-3xl font-bold text-foreground'>17</div>
              <div className='text-sm text-muted-foreground'>Fases de Desenvolvimento</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className='bg-card/80 border border-border/20 rounded-xl p-6 text-center'
            >
              <div className='text-3xl font-bold text-foreground'>9</div>
              <div className='text-sm text-muted-foreground'>Templates Profissionais</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className='bg-card/80 border border-border/20 rounded-xl p-6 text-center'
            >
              <div className='text-3xl font-bold text-foreground'>90%</div>
              <div className='text-sm text-muted-foreground'>Redução no Tempo</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className='bg-card/80 border border-border/20 rounded-xl p-6 text-center'
            >
              <div className='text-3xl font-bold text-foreground'>60+</div>
              <div className='text-sm text-muted-foreground'>Slides Otimizados</div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* The Problem */}
      <section className='space-y-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-6'
        >
          <h2 className='text-3xl font-bold text-foreground'>O Desafio Real</h2>
          
          <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
            <p>
              Criadores de conteúdo enfrentam diariamente o desafio de produzir carrosséis profissionais para redes sociais. 
              O processo tradicional envolve múltiplas etapas demoradas e técnicas que muitas vezes resultam em frustração e resultados inconsistentes.
            </p>
          </div>

          {/* Pain Points */}
          <div className='grid md:grid-cols-2 gap-6'>
            {[
              {
                icon: <Clock className='w-6 h-6' />,
                title: 'Tempo Excessivo',
                description: '30+ minutos para criar um carrossel simples, muitas vezes sem resultado profissional'
              },
              {
                icon: <Users className='w-6 h-6' />,
                title: 'Falta de Habilidades',
                description: 'Criadores sem conhecimento técnico de design ficam limitados'
              },
              {
                icon: <Eye className='w-6 h-6' />,
                title: 'Inspiração Limitada',
                description: 'Ausência de referências visuais e templates profissionais'
              },
              {
                icon: <Target className='w-6 h-6' />,
                title: 'Qualidade Inconsistente',
                description: 'Resultados variados dependendo da experiência e habilidades do criador'
              }
            ].map((pain, index) => (
              <motion.div
                key={pain.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className='bg-card border border-border/20 rounded-xl p-6 space-y-4'
              >
                <div className='text-primary'>{pain.icon}</div>
                <div>
                  <h3 className='font-semibold text-foreground text-lg'>{pain.title}</h3>
                  <p className='text-muted-foreground mt-2'>{pain.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* The Solution */}
      <section className='space-y-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-6'
        >
          <h2 className='text-3xl font-bold text-foreground'>A Solução Visionária</h2>
          
          <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
            <p>
              A resposta para esse desafio veio através da combinação de <strong className='text-foreground'>IA generativa</strong> 
              com <strong className='text-foreground'>design intuitivo</strong>. Criamos uma ferramenta que transforma 
              o processo de criação de carrosséis de uma tarefa técnica complexa em uma experiência fluida e produtiva.
            </p>
            
            <p>
              O <strong className='text-foreground'>Post & Carrossel Generator</strong> nasceu da visão de democratizar 
              a criação de conteúdo profissional, permitindo que qualquer pessoa, independente de suas habilidades de design, 
              possa criar carrosséis impactantes em minutos.
            </p>
          </div>

          {/* Solution Features */}
          <div className='grid md:grid-cols-2 gap-6'>
            {[
              {
                icon: <Brain className='w-6 h-6' />,
                title: 'IA Generativa Inteligente',
                description: 'OpenRouter API gera conteúdo relevante e estruturado automaticamente'
              },
              {
                icon: <Palette className='w-6 h-6' />,
                title: 'Templates Profissionais',
                description: '9 templates especializados com conteúdo otimizado para diferentes nichos'
              },
              {
                icon: <Edit3 className='w-6 h-6' />,
                title: 'Editor Avançado',
                description: 'TipTap para formatação rica e personalização completa de cada elemento'
              },
              {
                icon: <MessageSquare className='w-6 h-6' />,
                title: 'Interface Conversacional',
                description: 'Chat lateral para interação natural com IA, mantendo contexto e histórico'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className='bg-card border border-border/20 rounded-xl p-6 space-y-4'
              >
                <div className='text-primary'>{feature.icon}</div>
                <div>
                  <h3 className='font-semibold text-foreground text-lg'>{feature.title}</h3>
                  <p className='text-muted-foreground mt-2'>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Development Journey */}
      <section className='space-y-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-6'
        >
          <h2 className='text-3xl font-bold text-foreground'>A Jornada de Desenvolvimento</h2>
          
          <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
            <p>
              O desenvolvimento do Post & Carrossel Generator foi uma jornada de <strong className='text-foreground'>17 fases estruturadas</strong>, 
              cada uma representando um marco na evolução do produto. Começamos com um conceito simples e fomos iterando 
              continuamente baseado em feedback e necessidades dos usuários.
            </p>
          </div>

          {/* Development Phases */}
          <div className='space-y-6'>
            {[
              {
                phase: 'Fases 1-2',
                title: 'Brainstorm & Design',
                description: 'Definição do produto através de brainstorming com IA e criação de wireframes iniciais',
                icon: <Lightbulb className='w-5 h-5' />
              },
              {
                phase: 'Fases 3-4',
                title: 'Setup & MVP',
                description: 'Configuração do ambiente de desenvolvimento e criação do MVP funcional',
                icon: <Rocket className='w-5 h-5' />
              },
              {
                phase: 'Fases 5-7',
                title: 'IA Integration',
                description: 'Integração com OpenRouter API e implementação da geração de conteúdo com IA',
                icon: <Brain className='w-5 h-5' />
              },
              {
                phase: 'Fases 8-9',
                title: 'Redesign & Export',
                description: 'Implementação de dark mode, redesign moderno e funcionalidade de exportação PDF',
                icon: <Palette className='w-5 h-5' />
              },
              {
                phase: 'Fases 10-12',
                title: 'Builder Visual',
                description: 'Desenvolvimento do editor visual avançado com TipTap e personalização completa',
                icon: <Edit3 className='w-5 h-5' />
              },
              {
                phase: 'Fases 13-15',
                title: 'Canvas & Chat',
                description: 'Implementação do canvas interativo e interface conversacional com chat lateral',
                icon: <MessageSquare className='w-5 h-5' />
              },
              {
                phase: 'Fases 16-17',
                title: 'Templates & Polish',
                description: 'Sistema de templates profissionais e float menu de formatação avançado',
                icon: <Sparkles className='w-5 h-5' />
              }
            ].map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className='flex items-start space-x-4 p-6 bg-card border border-border/20 rounded-xl'
              >
                <div className='flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full text-primary'>
                  {phase.icon}
                </div>
                <div className='flex-1'>
                  <div className='flex items-center space-x-3 mb-2'>
                    <span className='text-sm font-medium text-muted-foreground'>{phase.phase}</span>
                    <CheckCircle className='w-4 h-4 text-green-500' />
                  </div>
                  <h3 className='font-semibold text-foreground text-lg'>{phase.title}</h3>
                  <p className='text-muted-foreground mt-1'>{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Detailed Development Story */}
      <section className='space-y-16'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-8'
        >
          <h2 className='text-3xl font-bold text-foreground'>A História Detalhada de Cada Fase</h2>
          
          <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
            <p>
              Cada fase do desenvolvimento contou uma história única. Vamos mergulhar profundamente em como cada etapa 
              transformou nossa visão em realidade, usando as capturas de tela que documentam nossa jornada.
            </p>
          </div>
        </motion.div>

        {/* Fase 0: Wireframe */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-6'
        >
          <div className='flex items-center space-x-3 mb-6'>
            <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center'>
              <span className='text-sm font-bold text-primary'>0</span>
            </div>
            <h3 className='text-2xl font-bold text-foreground'>O Primeiro Wireframe</h3>
          </div>
          
          <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
            <p>
              Tudo começou com uma pergunta simples: <strong className='text-foreground'>&ldquo;Como seria a interface ideal para gerar carrosséis com IA?&rdquo;</strong> 
              Usando ChatGPT para brainstorming, definimos a estrutura fundamental que guiaria todo o desenvolvimento.
            </p>
            
            <p>
              O wireframe inicial estabeleceu os pilares da experiência: formulário de entrada à esquerda, preview à direita, 
              e uma seção de slides gerados abaixo. Era simples, mas continha a essência do que viria a ser uma ferramenta poderosa.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className='w-full rounded-2xl overflow-hidden shadow-2xl border border-border/20 bg-card/80'
          >
            <Image 
              src='/documentation/v0 - wireframe.png' 
              alt='Wireframe inicial da interface' 
              width={800}
              height={600}
              className='w-full h-auto'
            />
          </motion.div>
        </motion.div>

        {/* Fase 1: MVP Funcionando */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-6'
        >
          <div className='flex items-center space-x-3 mb-6'>
            <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center'>
              <span className='text-sm font-bold text-primary'>1</span>
            </div>
            <h3 className='text-2xl font-bold text-foreground'>O MVP Funcionando</h3>
          </div>
          
          <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
            <p>
              Após semanas de desenvolvimento, chegou o momento mágico: <strong className='text-foreground'>o MVP funcionando</strong>. 
              A integração com a OpenRouter API estava operacional, e pela primeira vez conseguimos gerar carrosséis reais com IA.
            </p>
            
            <p>
              A interface era básica, mas funcional. Os usuários podiam inserir um tema, escolher estilo e tom, e em segundos 
              recebiam 5 slides estruturados. Era a prova de conceito que validava nossa visão - a IA realmente podia criar 
              conteúdo relevante e bem estruturado.
            </p>
            
            <p>
              <strong className='text-foreground'>Este foi o momento que mudou tudo.</strong> Ver a ferramenta funcionando 
              nos deu confiança para investir em melhorias mais ambiciosas.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className='w-full rounded-2xl overflow-hidden shadow-2xl border border-border/20 bg-card/80'
          >
            <Image 
              src='/documentation/v1 - funcionando .png' 
              alt='MVP funcionando com geração de carrosséis' 
              width={800}
              height={600}
              className='w-full h-auto'
            />
          </motion.div>
        </motion.div>

        {/* Fase 2: Primeiro Redesign */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-6'
        >
          <div className='flex items-center space-x-3 mb-6'>
            <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center'>
              <span className='text-sm font-bold text-primary'>2</span>
            </div>
            <h3 className='text-2xl font-bold text-foreground'>O Primeiro Redesign - Dark Mode Moderno</h3>
          </div>
          
          <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
            <p>
              Com o MVP validado, era hora de criar uma experiência visual que fizesse jus ao potencial da ferramenta. 
              <strong className='text-foreground'>O primeiro redesign foi uma revolução visual</strong> - implementamos dark mode como padrão, 
              gradientes modernos e um layout que respirava profissionalismo.
            </p>
            
            <p>
              A mudança foi dramática. De uma interface básica e clara, passamos para um design sofisticado com glassmorphism, 
              gradientes roxo-azul e uma paleta escura que destacava o conteúdo. Os cards dos slides agora tinham proporções 
              corretas para LinkedIn (4:5) e informações técnicas visíveis.
            </p>
            
            <p>
              <strong className='text-foreground'>A interface agora parecia profissional.</strong> Usuários se sentiam mais 
              confiantes usando a ferramenta, e isso refletia na qualidade do conteúdo que criavam.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className='w-full rounded-2xl overflow-hidden shadow-2xl border border-border/20 bg-card/80'
          >
            <Image 
              src='/documentation/v2 - redesign.png' 
              alt='Primeiro redesign com dark mode e layout moderno' 
              width={800}
              height={600}
              className='w-full h-auto'
            />
          </motion.div>
        </motion.div>

        {/* Fase 3: Paleta Neutra */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-6'
        >
          <div className='flex items-center space-x-3 mb-6'>
            <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center'>
              <span className='text-sm font-bold text-primary'>3</span>
            </div>
            <h3 className='text-2xl font-bold text-foreground'>A Revolução da Paleta Neutra</h3>
          </div>
          
          <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
            <p>
              O feedback dos usuários foi claro: <strong className='text-foreground'>&ldquo;As cores são muito chamativas, distraem do conteúdo&rdquo;</strong>. 
              Eles estavam certos. O design colorido, embora moderno, estava competindo com o conteúdo que deveria ser o protagonista.
            </p>
            
            <p>
              <strong className='text-foreground'>A solução foi radical: remoção completa de cores</strong>. Substituímos todos os gradientes 
              coloridos por uma paleta 100% neutra - preto, cinza e branco. O resultado foi uma interface elegante, discreta 
              e focada exclusivamente no conteúdo.
            </p>
            
            <p>
              Esta mudança foi um marco no design da ferramenta. <strong className='text-foreground'>A simplicidade se tornou nossa força</strong>, 
              e os usuários agora podiam focar totalmente no conteúdo dos carrosséis sem distrações visuais.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className='w-full rounded-2xl overflow-hidden shadow-2xl border border-border/20 bg-card/80'
          >
            <Image 
              src='/documentation/v3 - colors.png' 
              alt='Interface com paleta neutra focada no conteúdo' 
              width={800}
              height={600}
              className='w-full h-auto'
            />
          </motion.div>
        </motion.div>

        {/* Fase 4: Exportação PDF */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-6'
        >
          <div className='flex items-center space-x-3 mb-6'>
            <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center'>
              <span className='text-sm font-bold text-primary'>4</span>
            </div>
            <h3 className='text-2xl font-bold text-foreground'>Exportação PDF - O Fluxo Completo</h3>
          </div>
          
          <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
            <p>
              <strong className='text-foreground'>Um problema crítico surgiu:</strong> os usuários conseguiam gerar carrosséis, 
              mas não sabiam como publicá-los no LinkedIn. A ferramenta estava incompleta - faltava o elo final da cadeia.
            </p>
            
            <p>
              A solução foi implementar <strong className='text-foreground'>exportação PDF multipágina</strong>. Cada slide gerado 
              se transformava em uma página do PDF, com proporção 1:1 (1080x1080px) otimizada para LinkedIn. O usuário 
              clicava em &ldquo;Exportar como PDF&rdquo; e recebia um arquivo pronto para upload.
            </p>
            
            <p>
              <strong className='text-foreground'>Agora o fluxo estava completo:</strong> da ideia à publicação em uma única ferramenta. 
              Esta funcionalidade reduziu significativamente o tempo total de trabalho e eliminou a frustração de não saber 
              como usar o conteúdo criado.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className='w-full rounded-2xl overflow-hidden shadow-2xl border border-border/20 bg-card/80'
          >
            <Image 
              src='/documentation/v4 - builder.png' 
              alt='Funcionalidade de exportação PDF implementada' 
              width={800}
              height={600}
              className='w-full h-auto'
            />
          </motion.div>
        </motion.div>

        {/* Fase 5: Builder Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-6'
        >
          <div className='flex items-center space-x-3 mb-6'>
            <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center'>
              <span className='text-sm font-bold text-primary'>5</span>
            </div>
            <h3 className='text-2xl font-bold text-foreground'>Builder Visual - Controle Total</h3>
          </div>
          
          <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
            <p>
              Os usuários queriam mais controle. <strong className='text-foreground'>&ldquo;E se eu quiser editar o texto gerado pela IA?&rdquo;</strong> 
              &ldquo;E se eu quiser adicionar uma imagem?&rdquo; &ldquo;E se eu quiser remover um slide?&rdquo; As perguntas revelavam uma necessidade 
              clara: a ferramenta precisava ser mais flexível.
            </p>
            
            <p>
              <strong className='text-foreground'>A resposta foi o Builder Visual</strong> - um editor completo inspirado no Canva, 
              mas focado especificamente em carrosséis. Slides editáveis horizontalmente, edição inline de texto, upload de imagens, 
              adição e remoção dinâmica de slides. Era o controle total que os usuários pediam.
            </p>
            
            <p>
              <strong className='text-foreground'>A experiência agora era profissional</strong>. Usuários podiam começar com a IA 
              e depois personalizar completamente o resultado. Era a combinação perfeita: velocidade da IA + controle criativo total.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className='w-full rounded-2xl overflow-hidden shadow-2xl border border-border/20 bg-card/80'
          >
            <Image 
              src='/documentation/v5 - side bar builder.png' 
              alt='Builder visual com editor completo de slides' 
              width={800}
              height={600}
              className='w-full h-auto'
            />
          </motion.div>
        </motion.div>

        {/* Fase 6: Slides Profissionais */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-6'
        >
          <div className='flex items-center space-x-3 mb-6'>
            <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center'>
              <span className='text-sm font-bold text-primary'>6</span>
            </div>
            <h3 className='text-2xl font-bold text-foreground'>Slides Profissionais - Estrutura Avançada</h3>
          </div>
          
          <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
            <p>
              <strong className='text-foreground'>O próximo desafio era criar slides realmente profissionais</strong>. Os slides 
              básicos com apenas título e conteúdo não eram suficientes para competir com as melhores ferramentas do mercado.
            </p>
            
            <p>
              Implementamos uma <strong className='text-foreground'>estrutura de dados avançada</strong>: tagline, título, parágrafo, 
              indicador de swipe, botões customizáveis, cores de fundo, elementos gráficos. Cada slide agora tinha múltiplos 
              campos editáveis independentemente, permitindo layouts flexíveis e profissionais.
            </p>
            
            <p>
              <strong className='text-foreground'>A qualidade dos carrosséis disparou</strong>. Agora era possível criar slides 
              com estrutura visual rica, botões de call-to-action, elementos gráficos decorativos e layouts variados. 
              A ferramenta estava se tornando verdadeiramente profissional.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className='w-full rounded-2xl overflow-hidden shadow-2xl border border-border/20 bg-card/80'
          >
            <Image 
              src='/documentation/v6.png' 
              alt='Estrutura avançada de slides profissionais' 
              width={800}
              height={600}
              className='w-full h-auto'
            />
          </motion.div>
        </motion.div>

        {/* Fase 7: Editor TipTap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-6'
        >
          <div className='flex items-center space-x-3 mb-6'>
            <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center'>
              <span className='text-sm font-bold text-primary'>7</span>
            </div>
            <h3 className='text-2xl font-bold text-foreground'>Editor TipTap - Formatação Rica</h3>
          </div>
          
          <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
            <p>
              <strong className='text-foreground'>A formatação básica não era suficiente</strong>. Usuários precisavam de negrito, 
              itálico, cores, tamanhos de fonte diferentes. O editor inline simples limitava a criação de conteúdo rico e profissional.
            </p>
            
            <p>
              <strong className='text-foreground'>A solução foi integrar o TipTap</strong> - um editor de texto rico profissional 
              que oferecia formatação avançada, editor inline fluido e experiência similar aos melhores editores do mercado. 
              Agora era possível criar conteúdo visualmente rico sem quebrar o fluxo de trabalho.
            </p>
            
            <p>
              <strong className='text-foreground'>A qualidade do conteúdo criado melhorou dramaticamente</strong>. Usuários 
              podiam destacar pontos importantes, usar cores estratégicas, criar hierarquia visual. O editor TipTap 
              transformou a ferramenta em uma solução verdadeiramente profissional.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className='w-full rounded-2xl overflow-hidden shadow-2xl border border-border/20 bg-card/80'
          >
            <Image 
              src='/documentation/v7.png' 
              alt='Editor TipTap com formatação rica implementada' 
              width={800}
              height={600}
              className='w-full h-auto'
            />
          </motion.div>
        </motion.div>

        {/* Fase 8: Canvas Interativo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-6'
        >
          <div className='flex items-center space-x-3 mb-6'>
            <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center'>
              <span className='text-sm font-bold text-primary'>8</span>
            </div>
            <h3 className='text-2xl font-bold text-foreground'>Canvas Interativo - Navegação Profissional</h3>
          </div>
          
          <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
            <p>
              <strong className='text-foreground'>A navegação básica limitava a experiência</strong>. Usuários queriam zoom, 
              pan, minimap - funcionalidades que conheciam de editores profissionais como Canva, Figma e Photoshop.
            </p>
            
            <p>
              <strong className='text-foreground'>Implementamos um canvas interativo completo</strong>: sistema de zoom de 10% 
              a 300%, pan com barra de espaço, minimap para navegação rápida, teclas de atalho profissionais. A experiência 
              agora era familiar e intuitiva para usuários acostumados com ferramentas profissionais.
            </p>
            
            <p>
              <strong className='text-foreground'>A ferramenta se posicionou como alternativa profissional</strong>. O canvas 
              interativo elevou a qualidade da experiência, permitindo trabalhar com projetos complexos de forma eficiente. 
              Era a diferença entre uma ferramenta básica e uma solução profissional.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className='w-full rounded-2xl overflow-hidden shadow-2xl border border-border/20 bg-card/80'
          >
            <Image 
              src='/documentation/v8.png' 
              alt='Canvas interativo com zoom, pan e minimap' 
              width={800}
              height={600}
              className='w-full h-auto'
            />
          </motion.div>
        </motion.div>

        {/* Fase 9: Interface Conversacional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-6'
        >
          <div className='flex items-center space-x-3 mb-6'>
            <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center'>
              <span className='text-sm font-bold text-primary'>9</span>
            </div>
            <h3 className='text-2xl font-bold text-foreground'>Interface Conversacional - O Futuro da IA</h3>
          </div>
          
          <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
            <p>
              <strong className='text-foreground'>A interface tradicional com formulários estava limitada</strong>. Usuários 
              queriam conversar naturalmente com a IA, manter contexto entre interações, ter histórico de comandos. 
              Era hora de evoluir para uma interface conversacional.
            </p>
            
            <p>
              <strong className='text-foreground'>Criamos um layout de três painéis</strong>: chat lateral para conversação 
              com IA, canvas interativo para visualização, e painel de edição detalhada. Painéis redimensionáveis, 
              histórico de conversas, comandos naturais. Era a interface do futuro.
            </p>
            
            <p>
              <strong className='text-foreground'>A experiência se tornou intuitiva e natural</strong>. Usuários podiam 
              dizer &ldquo;crie um carrossel sobre marketing digital&rdquo; e depois &ldquo;mude a cor do segundo slide para azul&rdquo;. 
              A IA mantinha contexto e respondia naturalmente. Era a democratização da criação de conteúdo.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className='w-full rounded-2xl overflow-hidden shadow-2xl border border-border/20 bg-card/80'
          >
            <Image 
              src='/documentation/v9.png' 
              alt='Interface conversacional com chat lateral' 
              width={800}
              height={600}
              className='w-full h-auto'
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className='w-full rounded-2xl overflow-hidden shadow-2xl border border-border/20 bg-card/80'
          >
            <Image 
              src='/documentation/v10.gif' 
              alt='Demonstração da interface conversacional em ação' 
              width={800}
              height={600}
              className='w-full h-auto'
            />
          </motion.div>
        </motion.div>

        {/* Fase 10: Templates Profissionais */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-6'
        >
          <div className='flex items-center space-x-3 mb-6'>
            <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center'>
              <span className='text-sm font-bold text-primary'>10</span>
            </div>
            <h3 className='text-2xl font-bold text-foreground'>Templates Profissionais - O Poder do Conteúdo</h3>
          </div>
          
          <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
            <p>
              <strong className='text-foreground'>O maior desafio ainda estava por vir</strong>: como reduzir drasticamente 
              o tempo de criação sem comprometer a qualidade? A resposta estava nos templates profissionais.
            </p>
            
            <p>
              <strong className='text-foreground'>Criamos 9 templates especializados</strong>: Marketing Digital 101, 
              Estratégia de Redes Sociais, Revolução da IA, Hacks de Produtividade, Lições de Startup, Métodos de 
              Aprendizado, Mindset de Sucesso, Fitness Academy e Modern Fitness. Cada um com conteúdo otimizado, 
              paletas de cores únicas e estrutura testada.
            </p>
            
            <p>
              <strong className='text-foreground'>O impacto foi revolucionário</strong>: redução de 90% no tempo de criação. 
              Usuários agora tinham pontos de partida profissionais que podiam personalizar completamente. Era a 
              democratização da criação de conteúdo de qualidade.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className='w-full rounded-2xl overflow-hidden shadow-2xl border border-border/20 bg-card/80'
          >
            <Image 
              src='/documentation/v11.gif' 
              alt='Sistema de templates profissionais em ação' 
              width={800}
              height={600}
              className='w-full h-auto'
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Technical Architecture */}
      <section className='space-y-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-6'
        >
          <h2 className='text-3xl font-bold text-foreground'>Arquitetura Técnica</h2>
          
          <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
            <p>
              Para suportar a complexidade e performance necessárias, escolhemos uma stack moderna e robusta 
              que permite desenvolvimento rápido, manutenibilidade e escalabilidade.
            </p>
          </div>

          {/* Tech Stack */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {[
              { icon: <Code className='w-8 h-8' />, name: 'Next.js 15.2.4', desc: 'App Router' },
              { icon: <Type className='w-8 h-8' />, name: 'React 19', desc: 'UI Library' },
              { icon: <Type className='w-8 h-8' />, name: 'TypeScript 5', desc: 'Tipagem Estática' },
              { icon: <Palette className='w-8 h-8' />, name: 'Tailwind CSS 3.4.17', desc: 'Styling' },
              { icon: <Layers className='w-8 h-8' />, name: 'Shadcn UI', desc: 'Componentes' },
              { icon: <Layers className='w-8 h-8' />, name: 'Radix UI', desc: 'Primitives' },
              { icon: <Brain className='w-8 h-8' />, name: 'OpenRouter API', desc: 'IA Integration' },
              { icon: <Layout className='w-8 h-8' />, name: 'Framer Motion', desc: 'Animações' },
              { icon: <Edit3 className='w-8 h-8' />, name: 'TipTap', desc: 'Rich Text Editor' },
              { icon: <Mail className='w-8 h-8' />, name: 'Resend', desc: 'Email API' },
              { icon: <Download className='w-8 h-8' />, name: 'React PDF Renderer', desc: 'PDF Export' },
              { icon: <Database className='w-8 h-8' />, name: 'Zustand', desc: 'State Management' },
              { icon: <FileText className='w-8 h-8' />, name: 'React Hook Form', desc: 'Form Management' },
              { icon: <Shield className='w-8 h-8' />, name: 'Zod', desc: 'Schema Validation' },
              { icon: <TestTube className='w-8 h-8' />, name: 'Jest', desc: 'Unit Testing' },
              { icon: <Monitor className='w-8 h-8' />, name: 'Playwright', desc: 'E2E Testing' },
              { icon: <Settings className='w-8 h-8' />, name: 'ESLint', desc: 'Linting' },
              { icon: <Sparkles className='w-8 h-8' />, name: 'Prettier', desc: 'Code Formatting' },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className='bg-card border border-border/20 rounded-xl p-6 text-center space-y-3'
              >
                <div className='text-primary mx-auto'>{tech.icon}</div>
                <div>
                  <h3 className='font-semibold text-foreground'>{tech.name}</h3>
                  <p className='text-sm text-muted-foreground'>{tech.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Results & Impact */}
      <section className='space-y-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-6'
        >
          <h2 className='text-3xl font-bold text-foreground'>Resultados e Impacto</h2>
          
          <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
            <p>
              A transformação foi profunda e mensurável. O que começou como um conceito simples evoluiu para uma 
              ferramenta profissional que realmente resolve problemas reais dos usuários.
            </p>
          </div>

          {/* Results Cards */}
          <div className='grid md:grid-cols-3 gap-8'>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className='bg-card border border-border/20 rounded-xl p-8 text-center space-y-4'
            >
              <div className='text-4xl font-bold text-primary'>90%</div>
              <h3 className='text-xl font-semibold text-foreground'>Redução no Tempo de Criação</h3>
              <p className='text-muted-foreground'>
                Templates profissionais reduzem o tempo de criação de 30+ minutos para 2-3 minutos
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className='bg-card border border-border/20 rounded-xl p-8 text-center space-y-4'
            >
              <div className='text-4xl font-bold text-primary'>9</div>
              <h3 className='text-xl font-semibold text-foreground'>Templates Especializados</h3>
              <p className='text-muted-foreground'>
                Cobertura completa de nichos populares com conteúdo otimizado e testado
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className='bg-card border border-border/20 rounded-xl p-8 text-center space-y-4'
            >
              <div className='text-4xl font-bold text-primary'>17</div>
              <h3 className='text-xl font-semibold text-foreground'>Fases de Evolução</h3>
              <p className='text-muted-foreground'>
                Desenvolvimento estruturado com melhorias contínuas baseadas em feedback
              </p>
            </motion.div>
          </div>

          <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
            <p>
              <strong className='text-foreground'>O impacto vai além dos números:</strong> Usuários agora conseguem 
              criar conteúdo profissional sem precisar de habilidades técnicas avançadas. A ferramenta democratiza 
              a criação de carrosséis, permitindo que qualquer pessoa com uma ideia possa transformá-la em conteúdo 
              visual impactante.
            </p>
            
            <p>
              A experiência do usuário foi completamente transformada - de um processo frustrante e demorado para 
              uma experiência fluida e produtiva que inspira criatividade e confiança.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Key Learnings */}
      <section className='space-y-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-6'
        >
          <h2 className='text-3xl font-bold text-foreground'>Principais Aprendizados</h2>
          
          <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
            <p>
              Esta jornada nos ensinou lições valiosas sobre design de produto, desenvolvimento de software e 
              criação de experiências que realmente importam para os usuários.
            </p>
          </div>

          {/* Learnings */}
          <div className='grid md:grid-cols-2 gap-6'>
            {[
              {
                icon: <Eye className='w-6 h-6' />,
                title: 'Simplicidade é Fundamental',
                description: 'A interface neutra focou atenção no conteúdo, provando que menos é mais'
              },
              {
                icon: <TrendingUp className='w-6 h-6' />,
                title: 'Iteração Contínua',
                description: 'Feedback constante e melhorias incrementais foram essenciais para o sucesso'
              },
              {
                icon: <Users className='w-6 h-6' />,
                title: 'UX Profissional',
                description: 'Padrões de mercado e comportamentos familiares aumentam a confiança do usuário'
              },
              {
                icon: <Zap className='w-6 h-6' />,
                title: 'Performance Importa',
                description: 'Canvas interativo e otimizações específicas são cruciais para experiência fluida'
              }
            ].map((learning, index) => (
              <motion.div
                key={learning.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className='bg-card border border-border/20 rounded-xl p-6 space-y-4'
              >
                <div className='text-primary'>{learning.icon}</div>
                <div>
                  <h3 className='font-semibold text-foreground text-lg'>{learning.title}</h3>
                  <p className='text-muted-foreground mt-2'>{learning.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Conclusion */}
      <section className='space-y-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-6'
        >
          <h2 className='text-3xl font-bold text-foreground'>Conclusão</h2>
          
          <div className='space-y-6 text-lg text-muted-foreground leading-relaxed'>
            <p>
              O <strong className='text-foreground'>Post & Carrossel Generator</strong> evoluiu de um conceito simples 
              para uma ferramenta profissional completa, demonstrando como o <strong className='text-foreground'>design thinking</strong> 
              aplicado ao desenvolvimento pode transformar uma ideia em uma solução real.
            </p>
            
            <p>
              Esta jornada nos mostrou que a combinação de <strong className='text-foreground'>IA generativa</strong>, 
              <strong className='text-foreground'> design intuitivo</strong> e <strong className='text-foreground'>desenvolvimento ágil</strong> 
              pode criar produtos que realmente resolvem problemas reais dos usuários, oferecendo valor tangível e experiência excepcional.
            </p>
            
            <p>
              <strong className='text-foreground'>O resultado final:</strong> Uma ferramenta que transforma a criação 
              de carrosséis de um processo demorado e técnico em uma experiência rápida, intuitiva e profissional - 
              exatamente como prometido no início da jornada.
            </p>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className='text-center space-y-8 py-12 bg-muted/20 rounded-2xl'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-6'
        >
          <h2 className='text-3xl font-bold text-foreground'>Pronto para Explorar Mais?</h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Veja o case completo com todos os detalhes técnicos, wireframes e processo de desenvolvimento
          </p>
          
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              size='lg'
              className='bg-foreground text-background hover:bg-background hover:text-foreground'
              onClick={() => {
                window.open('/docs/CARROSSEL_BUILDER_UX_CASE.md', '_blank');
              }}
            >
              <FileText className='w-4 h-4 mr-2' />
              Ver Case Completo
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='border-border hover:bg-background'
            >
              <Github className='w-4 h-4 mr-2' />
              Ver Código
            </Button>
          </div>
        </motion.div>
      </section>
    </main>
  );
} 