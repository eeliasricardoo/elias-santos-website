# Portfolio UX/UI Designer & Developer

Um portfolio moderno e interativo construído com Next.js, TypeScript, Tailwind
CSS e Shadcn UI, focado em mostrar cases de UX/UI e desenvolvimento.

## 🚀 Funcionalidades

- **Design Moderno**: Glassmorphism, Magic UI e animações avançadas
- **Interatividade**: Efeitos de hover, scroll animations e mouse tracking
- **Responsivo**: Adaptável para todos os dispositivos
- **Performance**: Otimizado com Next.js 14 e React Server Components
- **Acessibilidade**: Componentes acessíveis com Radix UI
- **Nova Feature**: Demonstração de processo de merge com Git

## 🎨 Elementos Visuais

### Glassmorphism

- Containers com backdrop-blur e transparência
- Bordas sutis com gradientes
- Efeitos de profundidade e camadas

### Magic UI

- Animações de entrada suaves
- Efeitos de hover interativos
- Transições fluidas entre estados
- Elementos flutuantes animados

### Animações

- **Scroll Reveal**: Elementos aparecem conforme o scroll
- **Float Animation**: Elementos flutuam suavemente
- **Hover Effects**: Interações responsivas ao mouse
- **Mouse Tracking**: Efeitos que seguem o cursor

## 📸 Seu Portfolio

### Hero Section

- **Foto de Perfil**: Sua foto em container glassmorphism
- **Badge de Status**: "Available for work" com indicador animado
- **CTA Buttons**: Botões de ação principais
- **Efeitos Interativos**: Glow effect que segue o mouse

### Featured Work

- **Cards de Projetos**: 3 projetos em destaque
- **Tags de Tecnologia**: Stack usado em cada projeto
- **Hover Effects**: Cards se elevam e brilham
- **Scroll Animation**: Aparecem conforme o scroll

### Skills & Tools

- **Grid de Habilidades**: 12 tecnologias principais
- **Ícones Visuais**: Emojis para cada tecnologia
- **Interatividade**: Cards respondem ao hover
- **Staggered Animation**: Aparecem em sequência

## 🛠️ Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **Shadcn UI** - Componentes prontos
- **Radix UI** - Primitivos acessíveis
- **Framer Motion** - Animações (opcional)

## 📚 Documentação

- **[Design System](./DESIGN_SYSTEM.md)** - Documentação completa do design
  system
- **[Regras do Design System](./DESIGN_SYSTEM_RULES.md)** - Regras obrigatórias
  para manter consistência

## 📦 Instalação

```bash
# Instalar dependências
pnpm install

# Executar em desenvolvimento
pnpm dev

# Build para produção
pnpm build
```

## 🎯 Personalização

### Adicionar Projetos

Edite o array de projetos no `app/page.tsx`:

```tsx
// Exemplo de projeto
{
  title: "Nome do Projeto",
  description: "Descrição do projeto",
  technologies: ["Figma", "React", "TypeScript"],
  image: "/images/project-1.jpg"
}
```

### Modificar Skills

Atualize o array de skills:

```tsx
{ name: 'Sua Skill', icon: '🎯' }
```

### Cores e Temas

Personalize no `tailwind.config.ts`:

```ts
theme: {
  extend: {
    colors: {
      // Suas cores personalizadas
    }
  }
}
```

## 🚀 Deploy

O projeto está pronto para deploy em:

- **Vercel** (recomendado)
- **Netlify**
- **Railway**
- **AWS Amplify**

## 📱 Responsividade

- **Mobile First**: Design otimizado para mobile
- **Breakpoints**: sm, md, lg, xl, 2xl
- **Touch Friendly**: Interações otimizadas para touch
- **Performance**: Lazy loading e otimizações

## 🎨 Animações CSS

### Classes Disponíveis

- `.animate-float` - Flutuação suave
- `.animate-glow-pulse` - Pulso com brilho
- `.hover-lift` - Elevação no hover
- `.interactive-glow` - Brilho interativo
- `.scroll-reveal` - Aparece no scroll

### Customização

Edite as animações no `app/globals.css`:

```css
@keyframes sua-animacao {
  /* Sua animação personalizada */
}
```

## 🔧 Próximos Passos

- [ ] Adicionar mais projetos
- [ ] Implementar blog/artigos
- [ ] Adicionar formulário de contato
- [ ] Integrar CMS (Sanity/Strapi)
- [ ] Adicionar dark/light mode
- [ ] Implementar PWA

---

Desenvolvido com ❤️ usando Next.js, TypeScript e Tailwind CSS
