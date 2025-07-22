# Home UI Components

Esta pasta contém componentes reutilizáveis extraídos dos componentes
específicos da home para evitar duplicação de código.

## Componentes Disponíveis

### `Section`

Componente base para todas as seções da home com animação padronizada.

```tsx
<Section id='about' className='py-24'>
  {/* Conteúdo da seção */}
</Section>
```

### `SectionHeader`

Cabeçalho padronizado para seções com título e subtítulo opcional.

```tsx
<SectionHeader
  title="Let's Build Something Amazing"
  subtitle='Ready to transform your ideas into exceptional digital experiences?'
/>
```

### `AnimatedBadge`

Badge animado com ícone e texto.

```tsx
<AnimatedBadge
  text='Elias Santos'
  icon={<Sparkles className='w-4 h-4' />}
  animationDelay={0.5}
/>
```

### `TypewriterText`

Efeito de digitação para textos.

```tsx
<TypewriterText
  text='Hello, World!'
  speed={25}
  onComplete={() => console.log('Done!')}
/>
```

### `ChatMessage`

Mensagem de chat com suporte a usuário/bot.

```tsx
<ChatMessage message='Hello! How can I help you?' isUser={false} />
```

### `TestimonialCard`

Card para depoimentos com avatar e informações.

```tsx
<TestimonialCard
  testimonial={{
    id: 1,
    name: 'Sarah Chen',
    username: '@sarahchen',
    content: 'Amazing work!',
    avatarGradient: 'from-green-400 to-yellow-400',
  }}
/>
```

### `CompanyLogo`

Logo de empresa com tamanho dinâmico baseado no índice.

```tsx
<CompanyLogo src='/empresas/logo.png' alt='Company Name' index={0} />
```

### `FormField`

Campo de formulário com suporte a input e textarea.

```tsx
<FormField
  label='Name'
  name='name'
  type='text'
  value={formData.name}
  onChange={handleChange}
  required
  animationDelay={0.1}
/>
```

## Benefícios da Componentização

1. **Reutilização**: Componentes podem ser usados em múltiplos lugares
2. **Consistência**: Mantém o mesmo estilo e comportamento
3. **Manutenibilidade**: Mudanças em um lugar se refletem em todos os usos
4. **Legibilidade**: Código mais limpo e organizado
5. **Performance**: Componentes otimizados e reutilizáveis

## Como Usar

Importe os componentes do arquivo de índice:

```tsx
import {
  Section,
  SectionHeader,
  AnimatedBadge,
  TypewriterText,
  ChatMessage,
  TestimonialCard,
  CompanyLogo,
  FormField,
} from '@/components/home/ui';
```

## Próximos Passos

- Quebrar `MiniChat.tsx` em componentes menores
- Refatorar `GetInTouch.tsx` para usar `FormField`
- Criar componentes para `AnimatedMockup.tsx`
- Adicionar mais componentes reutilizáveis conforme necessário
