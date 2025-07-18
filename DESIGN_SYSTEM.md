# 🎨 Design System - Meu Site

> **Sistema de Design Completo para Meu Site**  
> Uma documentação abrangente sobre cores, tipografia, componentes e padrões de uso

---

## 📋 Índice

- [🎯 Visão Geral](#-visão-geral)
- [🎨 Paleta de Cores](#-paleta-de-cores)
- [📝 Tipografia](#-tipografia)
- [🔧 Componentes](#-componentes)
- [📱 Responsividade](#-responsividade)
- [✨ Animações](#-animações)
- [🎭 Estados](#-estados)
- [📐 Espaçamentos](#-espaçamentos)
- [🔍 Padrões de Uso](#-padrões-de-uso)
- [🚀 Boas Práticas](#-boas-práticas)

---

## 🎯 Visão Geral

O **Meu Site Design System** é baseado em um tema **Modern** com foco em:

- **Tema Claro/Escuro** com suporte completo
- **Glassmorphism** para efeitos visuais modernos
- **Acessibilidade** e **UX** otimizadas
- **Responsividade** mobile-first
- **Performance** e **Web Vitals**

### 🏗️ Stack Tecnológico

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Components**: Radix UI + Shadcn/ui
- **Icons**: Lucide React
- **Animations**: Tailwind CSS Animate + Framer Motion
- **Theme**: CSS Custom Properties
- **Package Manager**: pnpm

---

## 🎨 Paleta de Cores

### 🌞 Tema Claro (Padrão)

```css
/* Cores Principais */
--background: 0 0% 100%           /* #ffffff - Fundo principal */
--foreground: 0 0% 3.9%           /* #0a0a0a - Texto principal */

/* Cores de Interface */
--card: 0 0% 100%                 /* #ffffff - Cards e containers */
--card-foreground: 0 0% 3.9%      /* #0a0a0a - Texto em cards */
--popover: 0 0% 100%              /* #ffffff - Popovers */
--popover-foreground: 0 0% 3.9%   /* #0a0a0a - Texto em popovers */

/* Cores de Interação */
--primary: 0 0% 9%                /* #171717 - Cor primária */
--primary-foreground: 0 0% 98%    /* #fafafa - Texto sobre primária */
--secondary: 0 0% 96.1%           /* #f5f5f5 - Cor secundária */
--secondary-foreground: 0 0% 9%   /* #171717 - Texto sobre secundária */

/* Cores de Estado */
--muted: 0 0% 96.1%               /* #f5f5f5 - Elementos suaves */
--muted-foreground: 0 0% 45.1%    /* #737373 - Texto suave */
--accent: 0 0% 96.1%              /* #f5f5f5 - Destaque */
--accent-foreground: 0 0% 9%      /* #171717 - Texto sobre destaque */

/* Cores de Feedback */
--destructive: 0 84.2% 60.2%      /* #ef4444 - Erro/Danger */
--destructive-foreground: 0 0% 98% /* #fafafa - Texto sobre erro */

/* Cores de Interface */
--border: 0 0% 89.8%              /* #e5e5e5 - Bordas */
--input: 0 0% 89.8%               /* #e5e5e5 - Inputs */
--ring: 0 0% 3.9%                 /* #0a0a0a - Focus rings */
```

### 🌙 Tema Escuro

```css
/* Cores Principais */
--background: 0 0% 3.9%           /* #0a0a0a - Fundo principal */
--foreground: 0 0% 98%            /* #fafafa - Texto principal */

/* Cores de Interface */
--card: 0 0% 3.9%                 /* #0a0a0a - Cards e containers */
--card-foreground: 0 0% 98%       /* #fafafa - Texto em cards */
--popover: 0 0% 3.9%              /* #0a0a0a - Popovers */
--popover-foreground: 0 0% 98%    /* #fafafa - Texto em popovers */

/* Cores de Interação */
--primary: 0 0% 98%               /* #fafafa - Cor primária */
--primary-foreground: 0 0% 9%     /* #171717 - Texto sobre primária */
--secondary: 0 0% 14.9%           /* #262626 - Cor secundária */
--secondary-foreground: 0 0% 98%  /* #fafafa - Texto sobre secundária */

/* Cores de Estado */
--muted: 0 0% 14.9%               /* #262626 - Elementos suaves */
--muted-foreground: 0 0% 63.9%    /* #a3a3a3 - Texto suave */
--accent: 0 0% 14.9%              /* #262626 - Destaque */
--accent-foreground: 0 0% 98%     /* #fafafa - Texto sobre destaque */

/* Cores de Feedback */
--destructive: 0 62.8% 30.6%      /* #7f1d1d - Erro/Danger */
--destructive-foreground: 0 0% 98% /* #fafafa - Texto sobre erro */

/* Cores de Interface */
--border: 0 0% 14.9%              /* #262626 - Bordas */
--input: 0 0% 14.9%               /* #262626 - Inputs */
--ring: 0 0% 83.1%                /* #d4d4d4 - Focus rings */
```

### 🎭 Estados de Cor

```css
/* Estados de Hover */
.hover\:bg-primary\/10:hover { background-color: hsl(var(--primary) / 0.1); }
.hover\:bg-muted\/50:hover { background-color: hsl(var(--muted) / 0.5); }

/* Estados de Focus */
.focus\:ring-2:focus { box-shadow: 0 0 0 2px hsl(var(--ring)); }
.focus\:ring-primary\/50:focus { box-shadow: 0 0 0 2px hsl(var(--primary) / 0.5); }

/* Estados de Disabled */
.disabled\:opacity-50:disabled { opacity: 0.5; }
.disabled\:cursor-not-allowed:disabled { cursor: not-allowed; }
```

---

## 📝 Tipografia

### 🔤 Hierarquia de Fontes

```css
/* Títulos */
.text-4xl { font-size: 2.25rem; line-height: 2.5rem; } /* 36px */
.text-3xl { font-size: 1.875rem; line-height: 2.25rem; } /* 30px */
.text-2xl { font-size: 1.5rem; line-height: 2rem; } /* 24px */
.text-xl { font-size: 1.25rem; line-height: 1.75rem; } /* 20px */
.text-lg { font-size: 1.125rem; line-height: 1.75rem; } /* 18px */

/* Corpo de Texto */
.text-base { font-size: 1rem; line-height: 1.5rem; } /* 16px - Padrão */
.text-sm { font-size: 0.875rem; line-height: 1.25rem; } /* 14px */
.text-xs { font-size: 0.75rem; line-height: 1rem; } /* 12px */

/* Pesos */
.font-light { font-weight: 300; }
.font-normal { font-weight: 400; }
.font-medium { font-weight: 500; }
.font-semibold { font-weight: 600; }
.font-bold { font-weight: 700; }
```

### 📱 Tipografia Responsiva

```css
/* Mobile First */
.text-base { font-size: 1rem; } /* 16px - Mobile */
@media (min-width: 768px) {
  .text-base { font-size: 1.125rem; } /* 18px - Desktop */
}

/* Títulos Responsivos */
.text-2xl { font-size: 1.5rem; } /* Mobile */
@media (min-width: 768px) {
  .text-2xl { font-size: 2rem; } /* Desktop */
}
```

---

## 🔧 Componentes

### 🎯 Componentes Principais

#### **Button** - Botões
```tsx
// Variantes
<Button variant="default">Padrão</Button>
<Button variant="destructive">Danger</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Tamanhos
<Button size="default">Padrão</Button>
<Button size="sm">Pequeno</Button>
<Button size="lg">Grande</Button>
<Button size="icon">Ícone</Button>

// Estados
<Button disabled>Desabilitado</Button>
<Button loading>Carregando</Button>
```

#### **Card** - Cards
```tsx
<Card className="border-border/50 bg-card/50 hover:bg-card/70 transition-colors">
  <CardHeader>
    <CardTitle>Título do Card</CardTitle>
    <CardDescription>Descrição do card</CardDescription>
  </CardHeader>
  <CardContent>
    Conteúdo do card
  </CardContent>
</Card>
```

#### **Dialog** - Modais
```tsx
<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent className="backdrop-blur-xl bg-card/95 border-border/50 z-[60]">
    <DialogHeader>
      <DialogTitle>Título do Modal</DialogTitle>
      <DialogDescription>Descrição do modal</DialogDescription>
    </DialogHeader>
    {/* Conteúdo */}
  </DialogContent>
</Dialog>
```

#### **Tabs** - Abas
```tsx
<Tabs defaultValue="tab1" className="w-full">
  <TabsList className="grid w-full grid-cols-3 bg-muted/30 p-1 rounded-lg">
    <TabsTrigger value="tab1" className="data-[state=active]:bg-background">
      Aba 1
    </TabsTrigger>
    <TabsTrigger value="tab2" className="data-[state=active]:bg-background">
      Aba 2
    </TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Conteúdo da Aba 1</TabsContent>
  <TabsContent value="tab2">Conteúdo da Aba 2</TabsContent>
</Tabs>
```

#### **Badge** - Badges
```tsx
// Variantes
<Badge variant="default">Padrão</Badge>
<Badge variant="secondary">Secundário</Badge>
<Badge variant="destructive">Erro</Badge>
<Badge variant="outline">Outline</Badge>

// Cores Customizadas
<Badge className="bg-green-500/10 text-green-500 border-green-500/30">
  Sucesso
</Badge>
<Badge className="bg-blue-500/10 text-blue-500 border-blue-500/30">
  Info
</Badge>
```

#### **Avatar** - Avatares
```tsx
<Avatar className="h-12 w-12">
  <AvatarImage src="/user.jpg" alt="Usuário" />
  <AvatarFallback className="bg-primary text-primary-foreground">
    US
  </AvatarFallback>
</Avatar>
```

#### **Input** - Campos de Entrada
```tsx
<Input 
  placeholder="Digite aqui..."
  className="bg-background/50 border-border/50 focus:border-primary/50"
/>
```

#### **Switch** - Switches
```tsx
<Switch 
  checked={enabled}
  onCheckedChange={setEnabled}
  className="data-[state=checked]:bg-primary"
/>
```

### 🎨 Padronização de Cores

O projeto usa **exclusivamente** as variáveis de cor do Shadcn/ui:

- ✅ **`bg-background`** - Fundo principal
- ✅ **`bg-card`** - Fundo de cards
- ✅ **`bg-muted`** - Fundo de elementos suaves
- ✅ **`text-foreground`** - Texto principal
- ✅ **`text-muted-foreground`** - Texto suave
- ✅ **`border-border`** - Bordas
- ✅ **`bg-primary`** - Cor primária
- ✅ **`text-primary-foreground`** - Texto sobre primária
- ✅ **`text-destructive`** - Texto de erro

**Benefícios:**
- 🎯 **Consistência** visual em todo o sistema
- 🔧 **Manutenibilidade** facilitada
- 🎨 **Tema único** e coeso
- ⚡ **Performance** otimizada

### 🎨 Componentes Customizados

#### **Glassmorphism**
```css
.glass {
  @apply bg-card/60 backdrop-blur-xl border border-white/10;
}

.glass-strong {
  @apply bg-card/80 backdrop-blur-xl border border-white/15;
}

/* Mobile */
@media (max-width: 768px) {
  .glass {
    @apply bg-card/80 backdrop-blur-xl border-0;
  }
}
```

#### **Hover Effects**
```css
.hover-lift {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}
```

---

## 📱 Responsividade

### 📐 Breakpoints

```css
/* Mobile First */
sm: 640px   /* Tablets pequenos */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Telas grandes */
```

### 📱 Mobile Optimizations

```css
/* Safe Area Support */
.safe-area-top { padding-top: var(--safe-area-inset-top); }
.safe-area-bottom { padding-bottom: var(--safe-area-inset-bottom); }

/* Mobile Input Area */
.mobile-input-area {
  @apply fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-xl border-t border-border/50;
  padding-bottom: var(--safe-area-inset-bottom);
}

/* Mobile Chat Container */
.mobile-chat-container {
  @apply h-screen flex flex-col;
  padding-top: var(--safe-area-inset-top);
}
```

### 🎯 Responsive Patterns

```tsx
// Grid Responsivo
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Cards */}
</div>

// Texto Responsivo
<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
  Título Responsivo
</h1>

// Espaçamento Responsivo
<div className="p-4 md:p-6 lg:p-8">
  {/* Conteúdo */}
</div>
```

---

## ✨ Animações

### 🎬 Animações CSS

```css
/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

/* Shine Effect */
@keyframes shine {
  from { background-position: 200% 0; }
  to { background-position: -200% 0; }
}

.animate-shine {
  animation: shine 16s ease-in-out infinite;
}

/* Bounce Dot (Typing Indicator) */
@keyframes bounce-dot {
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1.0); }
}

.animate-bounce-dot {
  animation: bounce-dot 1.4s infinite ease-in-out both;
}
```

### 🎭 Transições

```css
/* Transições Suaves */
.transition-colors { transition: color 0.2s, background-color 0.2s, border-color 0.2s; }
.transition-all { transition: all 0.2s; }
.transition-transform { transition: transform 0.2s; }

/* Hover Effects */
.hover\:scale-105:hover { transform: scale(1.05); }
.hover\:bg-primary\/10:hover { background-color: hsl(var(--primary) / 0.1); }
```

---

## 🎭 Estados

### 🔄 Estados de Loading

```tsx
// Botão com Loading
<Button disabled={loading}>
  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
  {loading ? "Carregando..." : "Salvar"}
</Button>

// Skeleton Loading
<Skeleton className="h-4 w-full" />
<Skeleton className="h-8 w-32" />
```

### ✅ Estados de Sucesso/Erro

```tsx
// Toast Notifications
import { toast } from "sonner"

toast.success("Operação realizada com sucesso!")
toast.error("Ocorreu um erro!")
toast.info("Informação importante")
toast.warning("Atenção!")

// Badges de Status
<Badge className="bg-green-500/10 text-green-500 border-green-500/30">
  Ativo
</Badge>
<Badge className="bg-red-500/10 text-red-500 border-red-500/30">
  Erro
</Badge>
```

### 🎯 Estados de Interação

```css
/* Focus States */
.focus\:ring-2:focus { box-shadow: 0 0 0 2px hsl(var(--ring)); }
.focus\:ring-primary\/50:focus { box-shadow: 0 0 0 2px hsl(var(--primary) / 0.5); }

/* Active States */
.active\:scale-95:active { transform: scale(0.95); }

/* Disabled States */
.disabled\:opacity-50:disabled { opacity: 0.5; }
.disabled\:cursor-not-allowed:disabled { cursor: not-allowed; }
```

---

## 📐 Espaçamentos

### 📏 Sistema de Espaçamento

```css
/* Espaçamentos Base */
.space-y-1 { margin-top: 0.25rem; } /* 4px */
.space-y-2 { margin-top: 0.5rem; }  /* 8px */
.space-y-3 { margin-top: 0.75rem; } /* 12px */
.space-y-4 { margin-top: 1rem; }    /* 16px */
.space-y-6 { margin-top: 1.5rem; }  /* 24px */
.space-y-8 { margin-top: 2rem; }    /* 32px */

/* Padding */
.p-1 { padding: 0.25rem; }  /* 4px */
.p-2 { padding: 0.5rem; }   /* 8px */
.p-3 { padding: 0.75rem; }  /* 12px */
.p-4 { padding: 1rem; }     /* 16px */
.p-6 { padding: 1.5rem; }   /* 24px */
.p-8 { padding: 2rem; }     /* 32px */

/* Margin */
.m-1 { margin: 0.25rem; }   /* 4px */
.m-2 { margin: 0.5rem; }    /* 8px */
.m-4 { margin: 1rem; }      /* 16px */
.m-6 { margin: 1.5rem; }    /* 24px */
.m-8 { margin: 2rem; }      /* 32px */
```

### 🎯 Padrões de Espaçamento

```tsx
// Cards com Espaçamento Consistente
<Card className="p-6 space-y-4">
  <CardHeader className="pb-3">
    <CardTitle>Título</CardTitle>
  </CardHeader>
  <CardContent className="space-y-3">
    {/* Conteúdo */}
  </CardContent>
</Card>

// Grid com Gap Consistente
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
  {/* Items */}
</div>
```

---

## 🔍 Padrões de Uso

### 🎨 Layout Patterns

#### **Card Layout**
```tsx
<Card className="border-border/50 bg-card/50 hover:bg-card/70 transition-colors">
  <CardHeader className="pb-3">
    <CardTitle className="flex items-center gap-2 text-sm font-medium">
      <Icon className="h-4 w-4 text-primary" />
      Título do Card
    </CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    {/* Conteúdo */}
  </CardContent>
</Card>
```

#### **Modal Layout**
```tsx
<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto backdrop-blur-xl bg-card/95 border-border/50 z-[60]">
    <DialogHeader className="pb-6">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <div>
          <DialogTitle className="text-xl font-semibold">Título</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Descrição
          </DialogDescription>
        </div>
      </div>
    </DialogHeader>
    <div className="space-y-6">
      {/* Conteúdo */}
    </div>
  </DialogContent>
</Dialog>
```

#### **Form Layout**
```tsx
<form onSubmit={handleSubmit} className="space-y-4">
  <div className="grid grid-cols-2 gap-4">
    <div className="space-y-2">
      <Label htmlFor="field" className="text-sm font-medium">Campo</Label>
      <Input 
        id="field"
        className="bg-background/50"
        placeholder="Digite aqui..."
      />
    </div>
  </div>
  <Button type="submit" className="w-full">
    Enviar
  </Button>
</form>
```

### 🎯 Component Patterns

#### **Status Indicators**
```tsx
// Badge com Status
<Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/30">
  Ativo
</Badge>

// Loading State
<div className="flex items-center gap-2">
  <Loader2 className="h-4 w-4 animate-spin" />
  <span>Carregando...</span>
</div>
```

#### **Action Buttons**
```tsx
// Primary Action
<Button className="w-full">
  <Icon className="mr-2 h-4 w-4" />
  Ação Principal
</Button>

// Secondary Action
<Button variant="outline" className="w-full">
  <Icon className="mr-2 h-4 w-4" />
  Ação Secundária
</Button>

// Destructive Action
<Button variant="destructive" className="w-full">
  <Trash2 className="mr-2 h-4 w-4" />
  Deletar
</Button>
```

---

## 🚀 Boas Práticas

### 🎨 Design Principles

1. **Consistência**: Use sempre os mesmos padrões de cores, espaçamentos e componentes
2. **Acessibilidade**: Mantenha contraste adequado e suporte a navegação por teclado
3. **Performance**: Use animações CSS em vez de JavaScript quando possível
4. **Responsividade**: Design mobile-first com breakpoints consistentes
5. **Feedback**: Sempre forneça feedback visual para ações do usuário

### 🔧 Código Guidelines

#### **Nomenclatura de Classes**
```css
/* ✅ Correto */
.bg-primary\/10
.hover\:bg-primary\/20
.focus\:ring-2

/* ❌ Evitar */
.custom-background
.hover-effect
.focus-style
```

#### **Estrutura de Componentes**
```tsx
// ✅ Padrão Recomendado
export function ComponentName({ prop1, prop2 }: ComponentProps) {
  // 1. Hooks
  const [state, setState] = useState()
  
  // 2. Handlers
  const handleClick = () => {}
  
  // 3. Render
  return (
    <div className="space-y-4">
      {/* Conteúdo */}
    </div>
  )
}
```

#### **Responsividade**
```tsx
// ✅ Mobile First
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Conteúdo */}
</div>

// ✅ Texto Responsivo
<h1 className="text-2xl md:text-3xl lg:text-4xl">
  Título
</h1>
```

### 🎯 Performance Tips

1. **Lazy Loading**: Use `dynamic` imports para componentes pesados
2. **Image Optimization**: Use `next/image` para otimização automática
3. **CSS-in-JS**: Evite, use Tailwind CSS para melhor performance
4. **Bundle Size**: Mantenha imports específicos em vez de imports globais

### 🔍 Acessibilidade

```tsx
// ✅ Semântica Correta
<button aria-label="Fechar modal" onClick={onClose}>
  <X className="h-4 w-4" />
</button>

// ✅ Navegação por Teclado
<div tabIndex={0} onKeyDown={handleKeyDown}>
  {/* Conteúdo */}
</div>

// ✅ Contraste Adequado
<span className="text-foreground bg-background">
  Texto com contraste adequado
</span>
```

---

## 📚 Recursos Adicionais

### 🔗 Links Úteis

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Components](https://www.radix-ui.com/primitives)
- [Shadcn/ui Components](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion](https://www.framer.com/motion/)

### 🛠️ Ferramentas

- **Tailwind CSS IntelliSense**: Extensão VS Code para autocomplete
- **Headwind**: Organização automática de classes Tailwind
- **Prettier**: Formatação de código
- **ESLint**: Linting e boas práticas

### 📖 Documentação Relacionada

- [README.md](./README.md) - Documentação principal do projeto
- [package.json](./package.json) - Dependências e scripts
- [tailwind.config.ts](./tailwind.config.ts) - Configuração do Tailwind
- [components.json](./components.json) - Configuração do Shadcn/ui

---

## 🤝 Contribuição

Para contribuir com o design system:

1. **Siga os padrões** estabelecidos neste documento
2. **Teste em diferentes dispositivos** e navegadores
3. **Mantenha a acessibilidade** em mente
4. **Documente mudanças** significativas
5. **Use os componentes** existentes quando possível

### 🚨 Regras do Projeto

- ✅ **SEMPRE use `pnpm`** para gerenciar dependências
- ✅ **NUNCA quebre o projeto** - teste tudo antes
- ✅ **Use `npx dotenv-cli -e .env.local`** para ver variáveis de ambiente
- ✅ **Execute `pnpm run build`** após mudanças significativas
- ✅ **Mantenha compatibilidade** durante refatorações

---

**🎨 Design System v1.0.0**  
*Última atualização: Dezembro 2024* 