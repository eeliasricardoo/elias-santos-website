# Carrossel Builder AI

## 📋 Descrição

O componente `CarouselBuilderCard` simula um carrossel infinito de stories,
similar aos encontrados no Instagram e LinkedIn. Ele demonstra uma interface de
criação de conteúdo automatizada com IA.

## 🎯 Funcionalidades

- **Carrossel Infinito**: Transição automática entre slides a cada 3 segundos
- **Navegação Interativa**: Dots de navegação clicáveis
- **Animações Suaves**: Transições fluidas entre slides usando Framer Motion
- **Interface Realista**: Simula uma interface de criação de stories com IA
- **Partículas Animadas**: Efeitos visuais de fundo para maior engajamento

## 🎨 Características Visuais

- **Gradientes Dinâmicos**: Cada slide possui um gradiente único
- **Partículas Flutuantes**: Efeitos de partículas no fundo
- **Glow Animado**: Efeito de brilho rotativo no fundo
- **Responsivo**: Adapta-se a diferentes tamanhos de tela

## 📱 Estrutura do Componente

```
CarouselBuilderCard/
├── Header com informações do AI Builder
├── Conteúdo do carrossel com slides
├── Ações de interação (like, comentário, compartilhar)
└── Navegação por dots
```

## 🔧 Uso

```tsx
import { CarouselBuilderCard } from '@/components/portfolio/carousel-builder';

// No componente
<CarouselBuilderCard />;
```

## 🎭 Animações

- **Transição de Slides**: Slide-in da direita com fade
- **Partículas**: Movimento flutuante contínuo
- **Glow**: Rotação e escala pulsante
- **Interações**: Hover effects nos botões

## 📊 Dados do Carrossel

O componente inclui 5 slides de exemplo com:

- Títulos únicos
- Conteúdo variado
- Gradientes coloridos diferentes
- Contadores de progresso

## 🚀 Integração

O componente está integrado ao sistema de portfolio e pode ser usado como mockup
animado nos cards de portfolio, demonstrando capacidades de desenvolvimento de
interfaces de carrossel com IA.
