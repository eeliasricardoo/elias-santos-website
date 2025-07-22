# Portfolio Components

Esta pasta contém todos os componentes relacionados aos projetos do portfólio.

## Estrutura

```
components/portfolio/
├── ranking/          # UX Case Study: Ranking System
│   ├── ui/          # Componentes reutilizáveis
│   ├── header/      # Cabeçalho do case study
│   ├── content/     # Conteúdo principal
│   ├── research/    # Pesquisa e benchmarking
│   ├── user-experience/ # Personas e jornadas
│   ├── solution/    # Solução implementada
│   ├── testing/     # Testes e iterações
│   └── author/      # Informações do autor
├── ventus/          # Projeto Ventus (futuro)
└── index.ts         # Exportações centralizadas
```

## Como Usar

### Importar componentes do ranking:

```tsx
// Importar todos os componentes do ranking
import {
  RankingHeader,
  RankingIntroduction,
  RankingProblem,
  // ... outros componentes
} from '@/components/portfolio';

// Ou importar componentes específicos
import { RankingHeader } from '@/components/portfolio/ranking/header';
```

### Importar componentes UI reutilizáveis:

```tsx
import {
  Section,
  StatsCard,
  InfoCard,
  // ... outros componentes UI
} from '@/components/portfolio/ranking/ui';
```

## Benefícios da Organização

1. **Estrutura Clara**: Cada projeto tem sua própria pasta
2. **Componentes Reutilizáveis**: UI components podem ser usados em outros
   projetos
3. **Imports Limpos**: Caminhos organizados e fáceis de entender
4. **Escalabilidade**: Fácil adicionar novos projetos do portfólio

## Próximos Projetos

- `ventus/` - Projeto Ventus (preparado para futuras implementações)
- Outros projetos podem ser adicionados seguindo a mesma estrutura
