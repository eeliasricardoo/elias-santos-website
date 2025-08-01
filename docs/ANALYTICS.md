# 📊 Analytics da Vercel - Documentação

## 🎯 Visão Geral

Este projeto utiliza o **Vercel Analytics** para rastrear o comportamento dos usuários e métricas de performance. O analytics está configurado para capturar dados de todas as rotas principais do site.

## 🚀 Configuração Atual

### 1. Analytics Global
- **Arquivo**: `app/layout.tsx`
- **Componente**: `<Analytics />` da Vercel
- **Cobertura**: Todas as páginas automaticamente

### 2. Analytics Personalizado por Página
- **Arquivo**: `components/analytics/page-analytics.tsx`
- **Funcionalidade**: Rastreamento específico por página com propriedades customizadas

## 📍 Páginas com Analytics Implementado

### ✅ Páginas Principais
1. **Home** (`/`)
   - Nome: "Home"
   - Propriedades: `section: "main", language: "pt-BR"`

### ✅ Páginas do Portfolio
2. **Portfolio VentuChat** (`/portfolio/ventuschat`)
   - Nome: "Portfolio VentuChat"
   - Propriedades: `section: "portfolio", project: "ventuchat", type: "detailed_case"`

3. **Carousel Builder** (`/portfolio/carousel-builder`)
   - Nome: "Carousel Builder"
   - Propriedades: `section: "portfolio", project: "carousel_builder", type: "ux_case"`

4. **Ranking Case Study** (`/portfolio/ranking`)
   - Nome: "Ranking Case Study"
   - Propriedades: `section: "portfolio", project: "ranking", type: "ux_research_case"`

### ✅ APIs
5. **API de Contato** (`/api/contact`)
   - Eventos: `contact_form_success`, `contact_form_error`
   - Propriedades: `subject`, `has_name`, `has_email`, `message_length`

## 🛠️ Como Usar

### 1. Adicionar Analytics em uma Nova Página

```tsx
import { PageAnalytics } from '@/components/analytics/page-analytics';

export default function MinhaNovaPagina() {
  return (
    <div>
      <PageAnalytics 
        pageName="Nome da Página" 
        pagePath="/minha-rota" 
        customProperties={{
          section: "secao",
          type: "tipo_pagina"
        }}
      />
      {/* Conteúdo da página */}
    </div>
  );
}
```

### 2. Usar o Hook de Analytics

```tsx
import { useAnalytics } from '@/components/analytics/page-analytics';

export default function MinhaPagina() {
  const { trackEvent, trackButtonClick, trackFormSubmission } = useAnalytics();

  const handleButtonClick = () => {
    trackButtonClick('meu_botao', '/minha-rota', {
      action: 'click_action'
    });
  };

  const handleFormSubmit = () => {
    trackFormSubmission('meu_formulario', '/minha-rota', {
      form_type: 'contact'
    });
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Clique Aqui</button>
      <form onSubmit={handleFormSubmit}>
        {/* Formulário */}
      </form>
    </div>
  );
}
```

### 3. Rastrear Eventos Customizados

```tsx
import { track } from '@vercel/analytics';

// Rastrear evento simples
track('meu_evento', {
  propriedade1: 'valor1',
  propriedade2: 'valor2'
});

// Rastrear evento com contexto
track('video_play', {
  video_name: 'demo_video',
  page_path: '/portfolio/projeto',
  duration: 120
});
```

## 📊 Eventos Disponíveis

### Eventos Automáticos
- `page_view` - Visualização de página
- `contact_form_success` - Formulário de contato enviado com sucesso
- `contact_form_error` - Erro no envio do formulário

### Eventos Customizados (via Hook)
- `button_click` - Clique em botão
- `form_submission` - Submissão de formulário

## 🔧 Configuração da Vercel

### Arquivo `vercel.json`
```json
{
  "analytics": {
    "enabled": true
  },
  "rewrites": [
    {
      "source": "/portfolio/:path*",
      "destination": "/portfolio/:path*"
    }
  ]
}
```

## 📈 Métricas Capturadas

### Páginas
- Visualizações por página
- Tempo de permanência
- Taxa de rejeição
- Origem do tráfego

### Eventos
- Cliques em botões
- Submissões de formulário
- Interações com vídeos
- Navegação entre seções

### Performance
- Core Web Vitals
- Tempo de carregamento
- Performance de rede

## 🎨 Personalização

### Propriedades Customizadas
Cada página pode ter propriedades específicas:

```tsx
<PageAnalytics 
  pageName="Minha Página" 
  pagePath="/minha-rota" 
  customProperties={{
    section: "portfolio",
    project: "meu_projeto",
    type: "case_study",
    language: "pt-BR",
    category: "design"
  }}
/>
```

### Eventos Customizados
Crie eventos específicos para suas necessidades:

```tsx
track('projeto_view', {
  project_name: 'ventuchat',
  view_type: 'detailed',
  user_type: 'visitor'
});
```

## 🔍 Visualizando os Dados

1. Acesse o [Dashboard da Vercel](https://vercel.com/dashboard)
2. Selecione seu projeto
3. Vá para a aba "Analytics"
4. Visualize métricas em tempo real

## 📝 Boas Práticas

1. **Nomes Consistentes**: Use nomes descritivos e consistentes para páginas e eventos
2. **Propriedades Úteis**: Adicione propriedades que ajudem na análise
3. **Privacidade**: Não rastreie dados pessoais sensíveis
4. **Performance**: O analytics é otimizado para não impactar a performance

## 🚨 Troubleshooting

### Analytics não aparece
1. Verifique se o componente `<Analytics />` está no layout
2. Confirme se o `@vercel/analytics` está instalado
3. Verifique se o projeto está deployado na Vercel

### Eventos não sendo capturados
1. Verifique se o `track()` está sendo chamado
2. Confirme se as propriedades estão no formato correto
3. Aguarde alguns minutos para aparecer no dashboard

---

**💡 Dica**: Sempre teste o analytics em desenvolvimento antes de fazer deploy! 