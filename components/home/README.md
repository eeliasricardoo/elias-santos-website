# 🏠 Componentes da Home

Esta pasta contém todos os componentes relacionados à página inicial (home) do site, organizados em seções específicas para melhor manutenibilidade.

## 📁 Estrutura de Pastas

```
components/home/
├── about-me/           # Seção sobre mim
│   ├── AboutMeSection.tsx
│   └── index.ts
├── companies/          # Seção de empresas parceiras
│   ├── CompaniesSection.tsx
│   └── index.ts
├── depoiments/         # Seção de depoimentos
│   ├── DepoimentsSection.tsx
│   └── index.ts
├── get-in-touch/       # Seção de contato
│   ├── GetInTouch.tsx
│   └── index.ts
├── hero/               # Seção hero principal
│   ├── HeroContent.tsx
│   ├── HeroSection.tsx
│   ├── MiniChat.tsx
│   ├── ProfilePhoto.tsx
│   └── index.ts
├── portfolio/          # Seção de portfólio
│   ├── AnimatedMockup.tsx
│   ├── PortfolioCard.tsx
│   ├── PortfolioSection.tsx
│   └── index.ts
├── index.ts            # Exportações centralizadas
└── README.md           # Esta documentação
```

## 🎯 Seções

### **Hero**
Seção principal da página inicial, incluindo apresentação, foto de perfil e chat interativo.

### **About Me**
Seção com informações sobre o autor/desenvolvedor.

### **Companies**
Seção mostrando empresas parceiras ou clientes.

### **Portfolio**
Seção de projetos e trabalhos realizados.

### **Depoiments**
Seção com depoimentos de clientes ou colegas.

### **Get In Touch**
Seção de contato e formulário.

## 📦 Uso

```typescript
// Importar todos os componentes
import { 
  HeroSection, 
  CompaniesSection, 
  PortfolioSection, 
  DepoimentsSection 
} from "@/components/home";

// Importar componentes específicos
import { AboutMeSection } from "@/components/home/about-me";
import { GetInTouch } from "@/components/home/get-in-touch";
```

## 🔧 Manutenção

- Cada seção tem seu próprio `index.ts` para exportações
- O arquivo principal `index.ts` centraliza todas as exportações
- Mantenha a organização por responsabilidade
- Adicione novos componentes na seção apropriada 