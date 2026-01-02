# 📊 Componentes de Ranking

Esta pasta contém todos os componentes relacionados ao case study de ranking,
organizados em categorias lógicas para melhor manutenibilidade e escalabilidade.

## 📁 Estrutura de Pastas

```
components/ranking/
├── header/                 # Componentes de cabeçalho
│   ├── RankingHeader.tsx   # Cabeçalho principal com navegação
│   └── index.ts
├── content/                # Conteúdo principal
│   ├── RankingIntroduction.tsx  # Introdução e gamificação
│   ├── RankingProblem.tsx       # Problema identificado
│   ├── RankingObjectives.tsx    # Objetivos do projeto
│   └── index.ts
├── research/               # Pesquisa e insights
│   ├── RankingResearch.tsx      # Pesquisa de mercado
│   ├── RankingInsights.tsx      # Insights da pesquisa
│   └── index.ts
├── user-experience/        # Experiência do usuário
│   ├── RankingPersonas.tsx      # Personas definidas
│   ├── RankingUserJourney.tsx   # User Journey Maps
│   └── index.ts
├── solution/               # Solução e implementação
│   ├── RankingSolution.tsx      # Definição da solução
│   └── index.ts
├── testing/                # Testes e validação
│   ├── RankingTesting.tsx       # Testes realizados
│   └── index.ts
├── author/                 # Informações do autor
│   ├── RankingAuthor.tsx        # Dados do autor
│   └── index.ts
├── index.ts                # Exportações centralizadas
└── README.md               # Esta documentação
```

## 🎯 Categorias

### **Header**

Componentes relacionados ao cabeçalho da página, incluindo navegação e métricas
principais.

### **Content**

Conteúdo principal do case study, incluindo introdução, problema identificado e
objetivos.

### **Research**

Componentes relacionados à pesquisa de mercado, benchmarking e insights obtidos.

### **User Experience**

Componentes focados na experiência do usuário, incluindo personas e user journey
maps.

### **Solution**

Definição e detalhes da solução implementada, incluindo screenshots e
especificações.

### **Testing**

Componentes relacionados aos testes realizados e iterações do projeto.

### **Author**

Informações sobre o autor do case study.

## 📦 Uso

```typescript
// Importar todos os componentes
import {
  RankingHeader,
  RankingIntroduction,
  RankingProblem,
  RankingObjectives,
  RankingResearch,
  RankingInsights,
  RankingPersonas,
  RankingUserJourney,
  RankingSolution,
  RankingTesting,
  RankingAuthor,
} from '@/components/ranking';

// Ou importar por categoria
import { RankingHeader } from '@/components/ranking/header';
import {
  RankingIntroduction,
  RankingProblem,
} from '@/components/ranking/content';
```

## 🔧 Manutenção

- Cada categoria tem seu próprio `index.ts` para exportações
- O arquivo principal `index.ts` centraliza todas as exportações
- Mantenha a organização por responsabilidade
- Adicione novos componentes na categoria apropriada
