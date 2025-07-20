# 🎨 Regras do Design System - Meu Site

> **Regras obrigatórias para manter consistência visual e de código**  
> Baseado no design system atual do projeto

---

## 🚨 **REGRAS OBRIGATÓRIAS**

### **1. Cores - SEMPRE use as variáveis do Shadcn/ui**

```css
/* ✅ CORRETO - Use SEMPRE estas variáveis */
bg-background          /* Fundo principal */
bg-card               /* Fundo de cards */
bg-muted              /* Fundo de elementos suaves */
text-foreground       /* Texto principal */
text-muted-foreground /* Texto suave */
border-border         /* Bordas */
bg-primary            /* Cor primária */
text-primary-foreground /* Texto sobre primária */
text-destructive      /* Texto de erro */

/* ❌ NUNCA use cores hardcoded */
bg-white              /* ❌ */
text-black            /* ❌ */
border-gray-300       /* ❌ */
```

### **2. Glassmorphism - Padrão para cards e modais**

```tsx
// ✅ Padrão Glassmorphism
<Card className="border-border/50 bg-card/50 hover:bg-card/70 transition-colors">
  {/* Conteúdo */}
</Card>

// ✅ Modal com Glassmorphism
<DialogContent className="backdrop-blur-xl bg-card/95 border-border/50 z-[60]">
  {/* Conteúdo */}
</DialogContent>

// ✅ Mobile Glassmorphism (sem bordas)
@media (max-width: 768px) {
  .glass {
    @apply bg-card/80 backdrop-blur-xl border-0;
  }
}
```

### **3. Espaçamentos - Sistema consistente**

```tsx
// ✅ Espaçamentos padrão
space-y-1  /* 4px */
space-y-2  /* 8px */
space-y-3  /* 12px */
space-y-4  /* 16px - PADRÃO */
space-y-6  /* 24px */
space-y-8  /* 32px */

// ✅ Cards com espaçamento padrão
<Card className="p-6 space-y-4">
  <CardHeader className="pb-3">
    <CardTitle>Título</CardTitle>
  </CardHeader>
  <CardContent className="space-y-3">
    {/* Conteúdo */}
  </CardContent>
</Card>
```

### **4. Responsividade - Mobile First**

```tsx
// ✅ Mobile First - SEMPRE
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Conteúdo */}
</div>

// ✅ Texto responsivo
<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
  Título Responsivo
</h1>

// ✅ Espaçamento responsivo
<div className="p-4 md:p-6 lg:p-8">
  {/* Conteúdo */}
</div>
```

### **5. Componentes - Use SEMPRE Shadcn/ui**

```tsx
// ✅ Componentes obrigatórios
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

// ❌ NUNCA crie componentes básicos do zero
// Use os componentes existentes do Shadcn/ui
```

### **6. Animações - Transições suaves**

```tsx
// ✅ Transições padrão
transition-colors     /* Para cores */
transition-all        /* Para todas as propriedades */
transition-transform  /* Para transformações */

// ✅ Hover effects padrão
hover:bg-primary/10   /* Hover suave */
hover:scale-105       /* Hover com escala */
hover:bg-card/70      /* Hover em cards */

// ✅ Loading states
<Loader2 className="h-4 w-4 animate-spin" />
```

### **7. Estados - Feedback visual obrigatório**

```tsx
// ✅ Estados de loading
<Button disabled={loading}>
  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
  {loading ? "Carregando..." : "Salvar"}
</Button>

// ✅ Estados de sucesso/erro
<Badge className="bg-green-500/10 text-green-500 border-green-500/30">
  Sucesso
</Badge>
<Badge className="bg-red-500/10 text-red-500 border-red-500/30">
  Erro
</Badge>

// ✅ Focus states
focus:ring-2 focus:ring-primary/50
```

---

## 🎯 **PADRÕES DE LAYOUT**

### **1. Card Layout Padrão**

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

### **2. Modal Layout Padrão**

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

### **3. Form Layout Padrão**

```tsx
<form onSubmit={handleSubmit} className="space-y-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="space-y-2">
      <Label htmlFor="field" className="text-sm font-medium">Campo</Label>
      <Input 
        id="field"
        className="bg-background/50 border-border/50 focus:border-primary/50"
        placeholder="Digite aqui..."
      />
    </div>
  </div>
  <Button type="submit" className="w-full">
    Enviar
  </Button>
</form>
```

---

## 🔧 **REGRAS DE CÓDIGO**

### **1. Estrutura de Componentes**

```tsx
// ✅ Estrutura obrigatória
export function ComponentName({ prop1, prop2 }: ComponentProps) {
  // 1. Hooks (useState, useEffect, etc.)
  const [state, setState] = useState()
  
  // 2. Handlers (funções de evento)
  const handleClick = () => {}
  
  // 3. Render (JSX)
  return (
    <div className="space-y-4">
      {/* Conteúdo */}
    </div>
  )
}
```

### **2. Nomenclatura de Classes**

```css
/* ✅ Correto - Use SEMPRE */
bg-primary/10
hover:bg-primary/20
focus:ring-2
transition-colors
space-y-4

/* ❌ Evitar - NUNCA use */
custom-background
hover-effect
focus-style
custom-spacing
```

### **3. Imports Organizados**

```tsx
// ✅ Imports organizados
// 1. React e Next.js
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

// 2. Componentes UI
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// 3. Ícones
import { Loader2, Mail, Phone } from "lucide-react"

// 4. Utilitários
import { cn } from "@/lib/utils"

// 5. Tipos
import type { ComponentProps } from "./types"
```

---

## 🚨 **CHECKLIST OBRIGATÓRIO**

Antes de commitar qualquer mudança, verifique:

### **✅ Design**
- [ ] Cores seguem o padrão Shadcn/ui
- [ ] Glassmorphism aplicado em cards/modais
- [ ] Espaçamentos consistentes (space-y-4 padrão)
- [ ] Responsividade mobile-first
- [ ] Animações suaves (transition-colors)

### **✅ Código**
- [ ] Componentes Shadcn/ui utilizados
- [ ] Estrutura de componente seguida
- [ ] Imports organizados
- [ ] Classes Tailwind corretas
- [ ] Estados de loading/erro implementados

### **✅ Performance**
- [ ] `pnpm run build` executado com sucesso
- [ ] Sem erros de TypeScript
- [ ] Imagens otimizadas (next/image)
- [ ] Lazy loading para componentes pesados

### **✅ Acessibilidade**
- [ ] Contraste adequado
- [ ] Navegação por teclado
- [ ] Labels semânticos
- [ ] ARIA attributes quando necessário

---

## 🎯 **EXEMPLOS PRÁTICOS**

### **✅ Card de Produto**

```tsx
<Card className="border-border/50 bg-card/50 hover:bg-card/70 transition-colors">
  <CardHeader className="pb-3">
    <CardTitle className="flex items-center gap-2 text-sm font-medium">
      <Package className="h-4 w-4 text-primary" />
      Nome do Produto
    </CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    <p className="text-sm text-muted-foreground">
      Descrição do produto
    </p>
    <div className="flex items-center justify-between">
      <Badge className="bg-green-500/10 text-green-500 border-green-500/30">
        Disponível
      </Badge>
      <Button size="sm">
        Ver Detalhes
      </Button>
    </div>
  </CardContent>
</Card>
```

### **✅ Modal de Confirmação**

```tsx
<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent className="backdrop-blur-xl bg-card/95 border-border/50 z-[60]">
    <DialogHeader className="pb-6">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-destructive/10 rounded-lg">
          <AlertTriangle className="h-5 w-5 text-destructive" />
        </div>
        <div>
          <DialogTitle className="text-xl font-semibold">Confirmar Ação</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Esta ação não pode ser desfeita.
          </DialogDescription>
        </div>
      </div>
    </DialogHeader>
    <div className="flex gap-3">
      <Button variant="outline" onClick={() => setOpen(false)}>
        Cancelar
      </Button>
      <Button variant="destructive" onClick={handleConfirm}>
        Confirmar
      </Button>
    </div>
  </DialogContent>
</Dialog>
```

---

## 🚀 **COMANDOS DE VERIFICAÇÃO**

```bash
# Verificar se o build funciona
pnpm run build

# Verificar tipos TypeScript
pnpm run type-check

# Verificar linting
pnpm run lint

# Verificar formatação
pnpm run format
```

---

**🎨 Design System Rules v1.0.0**  
*Regras obrigatórias para manter consistência no projeto*

**⚠️ IMPORTANTE:** Sempre siga estas regras para manter a qualidade e consistência do projeto! 