# 🌌 Hero Section - Efeitos Espaciais

> Efeitos de motion e parallax implementados no hero section

## ✨ Efeitos Implementados

### 1. **Parallax Stars** (`ParallaxStars.tsx`)
- 50 estrelas animadas em parallax
- Move com scroll do usuário
- Opacidade reduzida durante scroll
- Fade out suave

**Características:**
```typescript
- useScroll() para detectar scroll
- useTransform() para parallax
- Animações de pulsar (opacity + scale)
- Performance otimizada com GPU
```

### 2. **Floating Elements** (`FloatingElements.tsx`)
- 8 elementos flutuantes orbitais
- Gradientes radiais animados
- Movimento contínuo e suave
- Efeito "nebulosa" espacial

**Características:**
```typescript
- Posições aleatórias
- Tamanhos variados (50-150px)
- Durações únicas por elemento
- Blur para efeito suave
```

### 3. **Profile Photo** (Atualizado)
- **Entrada Animada:** Scale + Fade
- **Glow Espacial:** Brilho pulsante
- **Anéis Orbitais:** 2 anéis rotacionando
  - Anel interno: 20s (horário)
  - Anel externo: 30s (anti-horário)

**Características:**
```typescript
- Animação de entrada suave
- Efeito glow com radial gradient
- Orbitais com rotação infinita
- GPU acceleration
```

### 4. **Hero Content** (Atualizado)
- **Sequência de Animação:**
  1. Título: 0.3s delay
  2. Descrição: 0.5s delay
  3. Badge: 0.7s delay
- **Glow Effect:** Palavra "Future" com brilho
- **Parallax:** Move com scroll (100px)
- **Fade Out:** Durante scroll

**Características:**
```typescript
- Scroll parallax (0-100px)
- Opacity fade (1-0)
- Glow pulsante no texto
- Entrada sequencial elegante
```

---

## 🎨 Design System

Todos os efeitos seguem o design system:
- ✅ Cores: `hsl(var(--primary))`
- ✅ Opacidades: `/20`, `/10`, `/30`
- ✅ Border: `border-border/30`
- ✅ Performance: GPU acceleration
- ✅ Acessibilidade: `prefers-reduced-motion`

---

## ⚡ Performance

### Otimizações Implementadas

1. **Lazy Loading**
   - Estrelas só renderizam após mount
   - Floating elements geram posições aleatórias
   - Evita hydration mismatch

2. **GPU Acceleration**
   - `transform: translateZ(0)` para performance
   - `will-change: auto` no body
   - Blur otimizado

3. **Reduced Motion**
   - Respeita `prefers-reduced-motion`
   - Animações mais rápidas
   - Efeitos simplificados

4. **Memoization**
   - Star positions geradas uma vez
   - Elementos estáticos após mount
   - Evita re-renders

---

## 📊 Performance Metrics

### Build Results
```
✓ Compiled successfully
✓ No linter errors
✓ Homepage: 14.4 kB (+0.5 kB)
✓ First Load JS: 293 kB (mantido)
```

### Web Vitals (Expected)
- **LCP:** < 1.5s (mantido)
- **FID:** < 100ms (mantido)
- **CLS:** < 0.1 (mantido)
- **FPS:** 60fps constante

---

## 🎭 Efeitos Visuais

### Hierarquia de Animações

```
Entrada:    0s ──────► 0.8s
  ├─ Profile Photo: 0s (scale + fade)
  ├─ Hero Content: 0.2s (fade up)
  ├─ Title: 0.3s (fade up)
  ├─ Description: 0.5s (fade up)
  └─ Badge: 0.7s (scale + fade)

Contínuo:   ∞
  ├─ Stars pulsando
  ├─ Floating elements orbitando
  ├─ Glow efeito na foto
  └─ Anéis orbitais rotacionando

Scroll:    0px ──────► 300px
  ├─ Stars movem com parallax
  ├─ Content fade out
  └─ Transition suave
```

---

## 🚀 Como Usar

### Desenvolvimento
```bash
# Visualizar efeitos
pnpm run dev

# Efeitos aparecem automaticamente
# - Estrelas: Instantâneo
# - Floating: Após 200ms
# - Profile: Animação de entrada
# - Content: Sequência escalonada
```

### Produção
```bash
# Build otimizado
pnpm run build

# Todos os efeitos incluídos
# - Performance otimizada
# - GPU acceleration
# - Lazy loading
```

---

## 🔧 Customização

### Alterar Número de Estrelas
```tsx
// ParallaxStars.tsx
const stars = Array.from({ length: 50 }, ...) // Altere 50
```

### Alterar Elementos Flutuantes
```tsx
// FloatingElements.tsx
const elems = Array.from({ length: 8 }, ...) // Altere 8
```

### Velocidade dos Anéis
```tsx
// ProfilePhoto.tsx
animate={{ rotate: 360 }}
transition={{
  duration: 20, // Altere duração
  repeat: Infinity,
}}
```

---

## 🎨 Cores e Variáveis

### Usadas no Hero

```css
/* Primary */
hsl(var(--primary))           /* Cor principal */
hsl(var(--primary)/0.2)       /* 20% opacidade */
hsl(var(--primary)/0.3)       /* 30% opacidade */

/* Background */
bg-background                 /* Fundo principal */
bg-muted/40                   /* Fundo suave */

/* Border */
border-border/30              /* 30% borda */
border-border/20              /* 20% borda */
```

---

## 📱 Responsividade

### Mobile
- Estrelas: 50 → 30
- Floating: 8 → 4
- Anéis: 2x mais rápido
- Glow: 50% menos intensidade

### Tablet
- Estrelas: 50 → 40
- Floating: 8 → 6
- Animations: 100% speed

### Desktop
- Full effects
- Full performance
- All animations active

---

## ♿ Acessibilidade

### Reduced Motion
```tsx
// Detecta preferência do usuário
const reducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
);

// Respeita preferência
if (reducedMotion.matches) {
  // Animações desabilitadas
  // Efeitos simplificados
}
```

### Performance
- ✅ GPU acceleration
- ✅ Lazy loading
- ✅ Memoization
- ✅ Transform only (não layout)

---

## 🐛 Debug

### Console Logs
```tsx
// Debug estrelas
console.log('Stars:', stars.length);

// Debug floating
console.log('Floating:', elements.length);

// Debug scroll
console.log('Scroll Y:', scrollY);
```

### Performance Monitor
```tsx
// Render count
console.log('Renders:', renderCount);

// FPS check
// Chrome DevTools → Performance Tab
```

---

## 📚 Referências

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)
- [GPU Acceleration](https://developer.mozilla.org/en-US/docs/Web/CSS/will-change)
- [Reduced Motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)

---

**✨ Hero Section - Efeitos Espaciais v1.0**  
_Interstellar Design Experience_
