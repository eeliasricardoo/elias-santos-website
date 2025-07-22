# Componentes UI Reutilizáveis - Ranking

Esta pasta contém componentes reutilizáveis que foram extraídos dos componentes específicos do ranking para evitar duplicação de código.

## Componentes Disponíveis

### `Section`
Componente base para todas as seções do ranking com título padronizado.

```tsx
<Section title="Título da Seção">
  {/* Conteúdo da seção */}
</Section>
```

### `StatsCard`
Card para exibir estatísticas com valor e label.

```tsx
<StatsCard value="+40%" label="Engajamento" />
```

### `BackButton`
Botão de navegação para voltar à página anterior.

```tsx
<BackButton />
```

### `InfoCard`
Card para informações com animação e opcionalmente ícone.

```tsx
<InfoCard 
  title="Título"
  description="Descrição"
  icon="M16 7a4 4 0 11-8 0 4 4 0 018 0z"
  animationDelay={0.3}
  variant="default" // ou "highlighted"
/>
```

### `PlatformCard`
Card específico para plataformas com imagem, nome e descrição.

```tsx
<PlatformCard 
  name="Duolingo"
  image="/images/duolingo.webp"
  description="Descrição da plataforma"
  animationDelay={0.2}
/>
```

### `PersonaCard`
Card para personas com informações detalhadas.

```tsx
<PersonaCard 
  name="Alice"
  role="Engaged Student"
  age="22 years old"
  goal="Track her academic progress"
  needs="Clear visual feedback"
  painPoints="Lack of clarity in scoring"
/>
```

### `AnimatedContainer`
Container com animação e estilo padronizado.

```tsx
<AnimatedContainer>
  {/* Conteúdo animado */}
</AnimatedContainer>
```

### `TestCard`
Card para testes com ícone, título e descrição.

```tsx
<TestCard 
  icon="M16 7a4 4 0 11-8 0 4 4 0 018 0z"
  title="Usability Tests"
  description="Comprehensive testing with students"
/>
```

### `AdjustmentCard`
Card para ajustes com ícone, título e descrição.

```tsx
<AdjustmentCard 
  icon="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  title="Improved Opt-in Clarity"
  description="Added clear explanations about privacy"
/>
```

## Benefícios da Componentização

1. **Reutilização**: Componentes podem ser usados em múltiplos lugares
2. **Consistência**: Mantém o mesmo estilo e comportamento
3. **Manutenibilidade**: Mudanças em um lugar se refletem em todos os usos
4. **Legibilidade**: Código mais limpo e organizado
5. **Testabilidade**: Componentes isolados são mais fáceis de testar

## Como Usar

Importe os componentes do arquivo de índice:

```tsx
import { Section, StatsCard, InfoCard } from '@/components/ranking/ui';
```

Ou importe individualmente:

```tsx
import { Section } from '@/components/ranking/ui/Section';
``` 