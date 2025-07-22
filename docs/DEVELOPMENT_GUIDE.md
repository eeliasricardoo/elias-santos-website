# 🛠️ Guia de Desenvolvimento - Ferramentas de Qualidade

> **Guia prático para usar as ferramentas de qualidade implementadas**  
> Data: Janeiro 2025 | Versão: 1.0.0

---

## 🚀 **Início Rápido**

### **Comandos Essenciais:**

```bash
# Verificar qualidade antes de commitar
pnpm run lint:check    # ESLint sem warnings
pnpm run type-check    # TypeScript sem erros
pnpm run build         # Testar build completo

# Corrigir automaticamente
pnpm run lint:fix      # Corrigir ESLint
pnpm run quality:fix   # Corrigir tudo
```

---

## 📋 **Workflow de Desenvolvimento**

### **1. Antes de Começar:**

```bash
# Instalar dependências
pnpm install

# Verificar se tudo está funcionando
pnpm run build
```

### **2. Durante o Desenvolvimento:**

```bash
# Desenvolvimento local
pnpm run dev

# Verificar qualidade em tempo real
pnpm run lint          # Ver erros ESLint
pnpm run type-check    # Ver erros TypeScript
```

### **3. Antes de Commitar:**

```bash
# Checklist obrigatório
pnpm run lint:check    # ✅ Sem erros ESLint
pnpm run type-check    # ✅ Sem erros críticos TypeScript
pnpm run build         # ✅ Build funcionando
```

### **4. Se Houver Problemas:**

```bash
# Corrigir automaticamente
pnpm run lint:fix      # Corrigir ESLint
pnpm run quality:fix   # Corrigir tudo

# Verificar novamente
pnpm run lint:check
pnpm run type-check
```

---

## 🎯 **Regras de Qualidade**

### **ESLint Rules (Obrigatórias):**

#### **React Hooks:**

```tsx
// ✅ CORRETO
useEffect(() => {
  // lógica
  return () => cleanup();
}, [dependencies]);

// ❌ INCORRETO
useEffect(() => {
  // lógica sem return
}, [dependencies]);
```

#### **Console Statements:**

```tsx
// ✅ PERMITIDO
console.warn('Aviso importante');
console.error('Erro crítico');

// ❌ NÃO PERMITIDO
console.log('Debug info'); // Warning
console.debug('Debug'); // Warning
```

#### **Object Shorthand:**

```tsx
// ✅ CORRETO
const obj = { name, age };

// ❌ INCORRETO
const obj = { name: name, age: age };
```

#### **Const vs Let:**

```tsx
// ✅ CORRETO
const data = fetchData();
const items = data.map(item => item.id);

// ❌ INCORRETO
let data = fetchData(); // Se não vai reatribuir
```

### **TypeScript Rules (Obrigatórias):**

#### **Imports Não Utilizados:**

```tsx
// ❌ NÃO PERMITIDO
import { useState, useEffect, useMemo } from 'react'; // useEffect não usado
import { Button, Card, Badge } from '@/components/ui'; // Badge não usado

// ✅ CORRETO
import { useState, useMemo } from 'react';
import { Button, Card } from '@/components/ui';
```

#### **Variáveis Undefined:**

```tsx
// ❌ PROBLEMÁTICO
const user = users.find(u => u.id === id);
console.log(user.name); // user pode ser undefined

// ✅ SEGURO
const user = users.find(u => u.id === id);
if (user) {
  console.log(user.name);
}
```

---

## 🔧 **Correções Comuns**

### **1. Imports Não Utilizados:**

```bash
# Remover automaticamente
pnpm run lint:fix

# Ou remover manualmente
# Remover linha: import { UnusedComponent } from './components'
```

### **2. Apostrofes em JSX:**

```tsx
// ❌ PROBLEMA
<p>Let's work together!</p>

// ✅ SOLUÇÃO
<p>Let&apos;s work together!</p>
```

### **3. Object Shorthand:**

```tsx
// ❌ PROBLEMA
const props = { name: name, age: age };

// ✅ SOLUÇÃO
const props = { name, age };
```

### **4. useEffect sem Return:**

```tsx
// ❌ PROBLEMA
useEffect(() => {
  if (condition) {
    // lógica
    return cleanup();
  }
}, [condition]);

// ✅ SOLUÇÃO
useEffect(() => {
  if (!condition) return;

  // lógica
  return cleanup();
}, [condition]);
```

---

## 📁 **Estrutura de Arquivos**

### **Organização Recomendada:**

```
components/
├── ui/                    # Componentes Shadcn/ui
├── sections/              # Seções da página
│   ├── hero/
│   ├── about/
│   └── portfolio/
├── magicui/               # Componentes Magic UI
└── shared/                # Componentes compartilhados

app/
├── page.tsx               # Página principal
├── layout.tsx             # Layout global
└── api/                   # API routes
```

### **Convenções de Nomenclatura:**

```tsx
// ✅ Componentes
export function HeroSection() {}
export function AboutMeSection() {}

// ✅ Hooks
export function useScrollAnimation() {}
export function useMobile() {}

// ✅ Utilitários
export function formatDate() {}
export function validateEmail() {}
```

---

## 🎨 **Design System**

### **Cores (Obrigatório):**

```tsx
// ✅ SEMPRE use variáveis CSS
className = 'bg-background text-foreground';
className = 'bg-primary text-primary-foreground';
className = 'bg-muted text-muted-foreground';

// ❌ NUNCA use cores hardcoded
className = 'bg-white text-black'; // ❌
className = 'bg-gray-100'; // ❌
```

### **Espaçamentos (Obrigatório):**

```tsx
// ✅ Espaçamentos consistentes
className = 'space-y-4'; // 16px - PADRÃO
className = 'space-y-6'; // 24px
className = 'space-y-8'; // 32px

// ✅ Responsividade
className = 'p-4 md:p-6 lg:p-8';
className = 'text-lg md:text-xl lg:text-2xl';
```

### **Componentes (Obrigatório):**

```tsx
// ✅ SEMPRE use Shadcn/ui
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// ❌ NUNCA crie componentes básicos
<div className="bg-white p-4 rounded-lg shadow">  // ❌
```

---

## 🚨 **Problemas Comuns e Soluções**

### **1. ESLint não funciona:**

```bash
# Verificar dependências
pnpm install

# Verificar configuração
cat .eslintrc.json

# Reinstalar ESLint
pnpm remove eslint-config-next
pnpm add -D eslint-config-next
```

### **2. TypeScript com muitos erros:**

```bash
# Verificar configuração
cat tsconfig.json

# Limpar cache
rm -rf .next
pnpm run build
```

### **3. Build falha:**

```bash
# Verificar erros
pnpm run type-check
pnpm run lint

# Limpar e reconstruir
rm -rf .next node_modules
pnpm install
pnpm run build
```

### **4. Imports não resolvidos:**

```tsx
// ✅ Verificar paths no tsconfig.json
{
  "paths": {
    "@/*": ["./*"],
    "@/components/*": ["./components/*"]
  }
}

// ✅ Usar imports corretos
import { Button } from "@/components/ui/button"  // ✅
import { Button } from "../../ui/button"         // ❌
```

---

## 📊 **Métricas de Qualidade**

### **Status Atual:**

- ✅ **TypeScript:** 14 erros (78% redução)
- ✅ **ESLint:** 8 erros menores
- ✅ **Build:** Funcionando perfeitamente
- ✅ **Performance:** Mantida

### **Metas:**

- 🎯 **TypeScript:** < 10 erros
- 🎯 **ESLint:** < 5 erros
- 🎯 **Build:** Sempre funcionando
- 🎯 **Coverage:** > 80% (futuro)

---

## 🔄 **Integração com IDE**

### **VS Code Extensions Recomendadas:**

```json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-typescript-next",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-eslint"
  ]
}
```

### **Configurações VS Code:**

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative"
}
```

---

## 📚 **Recursos Adicionais**

### **Documentação:**

- [Melhorias de Qualidade](./CODE_QUALITY_IMPROVEMENTS.md)
- [Design System Rules](../DESIGN_SYSTEM_RULES.md)
- [Regras do Projeto](../README.md)

### **Comandos Úteis:**

```bash
# Verificar tudo
pnpm run quality

# Desenvolvimento
pnpm run dev

# Produção
pnpm run build
pnpm run start

# Análise
pnpm run analyze
```

---

## 🎯 **Checklist Diário**

### **Antes de Começar:**

- [ ] `pnpm install` (se necessário)
- [ ] `pnpm run dev` funcionando
- [ ] ESLint configurado no IDE

### **Durante Desenvolvimento:**

- [ ] Seguir design system
- [ ] Usar componentes Shadcn/ui
- [ ] Verificar responsividade
- [ ] Testar funcionalidades

### **Antes de Commitar:**

- [ ] `pnpm run lint:check`
- [ ] `pnpm run type-check`
- [ ] `pnpm run build`
- [ ] Testes manuais

---

**📅 Última Atualização:** Janeiro 2025  
**👨‍💻 Responsável:** Assistente AI  
**📋 Versão:** 1.0.0
