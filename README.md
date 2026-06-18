# Elias Ricardo — Senior UX Engineer
> **Bridging the gap between high-fidelity interface design and production-ready code.**

[![Portfolio](https://img.shields.io/badge/Portfolio-eliasricardo.com-7c3aed?style=for-the-badge&logo=react)](https://eliasricardo.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-eeliasricardoo-0077b5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/eeliasricardoo)
[![GitHub](https://img.shields.io/badge/GitHub-eeliasricardoo-181717?style=for-the-badge&logo=github)](https://github.com/eeliasricardoo)
[![Email](https://img.shields.io/badge/Email-Get%20in%20Touch-db4437?style=for-the-badge&logo=gmail)](mailto:eeliasricardoo@gmail.com)
[![Calendly](https://img.shields.io/badge/Calendly-Schedule%20a%20Call-006bff?style=for-the-badge&logo=calendly)](https://calendly.com/eeliasricardoo)

This repository contains the complete source code of my personal portfolio. It was designed from scratch to be a fast, responsive, and beautiful showcase of my UX engineering capabilities, combining strict design token systems with high-performance static rendering.

---

## 🙋‍♂️ About Me

I am a **Senior UX Engineer** who researches the problem, designs the interface in Figma, and ships the React components—no handoff meetings required. I focus on creating toolings, platforms, and interactive applications that solve real user problems and deliver measurable business outcomes.

* **Design Capabilities:** High-fidelity prototyping, Design Systems, UX Research, Interaction Design, and Micro-interactions.
* **Engineering Capabilities:** React, Next.js, Astro, TypeScript, TailwindCSS, State Management, WebRTC, and Performance Optimization.

---

## 🏗️ Architectural Decisions: The "Why"

Every technical decision in this codebase was made to balance **developer experience, design consistency, and end-user performance**.

### 1. Astro as the Core Engine (Static-First)
* **The Decision:** Chosen over full SPA frameworks (like Next.js or Create React App) or heavy site builders.
* **The "Why":** Astro compiles to 100% static HTML by default. It uses the **Island Architecture (Selective Hydration)** to isolate interactivity.
* **The Benefit:** 90% of the page is static HTML/CSS. JavaScript is only loaded and hydrated for components that explicitly need it (e.g., `<Navbar client:load />` or `<SkillsTicker client:idle />`). This keeps the initial JS bundle size extremely close to zero.

### 2. React for Islands of Interactivity
* **The Decision:** Integrated React for complex frontend modules instead of plain JS.
* **The "Why":** For elements requiring complex state management, event orchestration, or lifecycle events (such as the project sections, animations, testimonial slider, and sound design), React offers robust component organization and ecosystem support.
* **The Benefit:** I can build complex user flows with React while letting Astro handle static layout structures.

### 3. TailwindCSS for Single-Source-of-Truth Styling
* **The Decision:** TailwindCSS configured with strict token boundaries.
* **The "Why":** It enforces naming conventions and prevents layout fragmentation. During compilation, Tailwind purges unused rules, resulting in a minimal, highly optimized CSS file (usually < 20KB).
* **The Benefit:** Design changes are made directly in the configuration tokens, updating the visual theme globally.

---

## ⚡ Performance Engineering & LCP Optimization (< 0.8s LCP)

To achieve sub-100ms transitions and top-tier Google Lighthouse scores, several core performance patterns were implemented:

### 1. Zero-JS Above-the-Fold Animation
* **The Pattern:** Hero entry transitions (fade-in, slide-up, cursor blinking) are implemented using **pure CSS animations** in [HeroContent.astro](file:///Users/eeliasricardoo/Desktop/work/Meu%20site/meu-site/src/components/home/hero/HeroContent.astro#L56-L91).
* **The Optimization:** Since these animations run without JS, the browser executes them immediately on LCP, even before React hydration begins. This guarantees a fast **First Contentful Paint (FCP)** and eliminates layout stuttering.

### 2. Non-Blocking Sound Design
* **The Pattern:** Audio assets and sound effects in the Hero section are initialized asynchronously in [HeroSounds.tsx](file:///Users/eeliasricardoo/Desktop/work/Meu%20site/meu-site/src/components/home/hero/HeroSounds.tsx) and loaded with `client:idle`.
* **The Optimization:** By scheduling the initialization when the main thread is idle, we ensure that audio loading never blocks critical rendering paths, preserving 100/100 performance scores.

### 3. Advanced Asset & Font Preloading
* **The Pattern:** Pre-resolving CDNs and preloading primary assets:
  ```typescript
  preloadImages: ['/profile-photo.webp', '/oq-image.png'],
  dnsPrefetch: ['//fonts.googleapis.com', '//api.fontshare.com'],
  ```
* **The Optimization:** Declared inside [seo-config.ts](file:///Users/eeliasricardoo/Desktop/work/Meu%20site/meu-site/src/lib/seo-config.ts#L138-L149) and loaded via layout headers. This tells the browser to resolve font domains and fetch above-the-fold assets early, preventing font flickering (FOUT/FOIT) and reducing LCP.

### 4. Layout Shift (CLS) Prevention
* **The Pattern:** All visual screenshots utilize a custom `<OptimizedImage />` wrapper that defines specific aspect ratios and modern formats (WebP/AVIF).
* **The Optimization:** Reserving space before loading prevents Layout Shifts (CLS = 0), making the page feel instant and solid.

---

## 📂 Codebase Architecture & Design Patterns

The codebase is structured following component modularity and separation of concerns:

```text
meu-site/
├── src/
│   ├── components/
│   │   ├── home/           # Homepage components (modular structures per section)
│   │   ├── portfolio/      # Case study detail elements (layouts, phases)
│   │   ├── ui/             # Reusable atomic tokens (Buttons, Badges, Cards)
│   │   └── Navbar.tsx      # Hydrated floating nav with scroll tracking
│   ├── constants/
│   │   ├── content.ts      # Single source of truth for copywriting (separates copy from code)
│   │   └── project-brands.ts # Layout brand token mapping (Lime, Violet, Emerald, etc.)
│   ├── layouts/
│   │   └── Layout.astro    # Base document layout (SEO, analytics, preloads)
│   ├── pages/
│   │   ├── api/            # Serverless contact endpoints
│   │   ├── portfolio/      # Case study detail sub-routes
│   │   └── index.astro     # Core entry landing page
│   └── styles/
│       └── global.css      # Core styles, design tokens, and utility animations
└── tailwind.config.ts      # Custom theme setup extending the design tokens
```

---

## 📈 Measured Business Impact of Showcased Cases

Below are the key projects detailed as case studies in the portfolio:

### ⚡ [EmailFlow Pro (Salesforce SFMC Builder)](https://github.com/eeliasricardoo/meu-site)
* **The Constraint:** Producing campaign emails in Salesforce Marketing Cloud at Serasa Experian took 80 minutes of manual, repetitive code work.
* **The Solution:** Designed and engineered a visual drag-and-drop builder using React and AI integration.
* **The Impact:** Cut email production time **from 80 minutes to just 10 minutes** (an **87.5% efficiency boost**).

### 🏫 [EnglishRoom (1:1 Classroom Platform)](https://github.com/eeliasricardoo/meu-site)
* **The Constraint:** Interactive remote lessons were scattered across Zoom, Google Docs, and chat tools.
* **The Solution:** Built a single-screen live classroom surface integrating live video streaming (WebRTC), collaborative activities, and notes.
* **The Impact:** A successful solo build scaling from design token concepts to production live sessions.

### ⏳ [Support Queue Optimization](https://github.com/eeliasricardoo/meu-site)
* **The Constraint:** Customer support tickets lacked structured triage logic, causing high latency.
* **The Solution:** Researched triage bottlenecks, designed an intuitive prioritization UI, and shipped it.
* **The Impact:** Decreased average customer wait times by **22%**.

---

## 🚀 Setting Up Locally

If you want to run this project on your machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/eeliasricardoo/meu-site.git
   cd meu-site
   ```

2. **Install dependencies:**
   Make sure you have Node.js and **pnpm** installed.
   ```bash
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   pnpm dev
   ```
   Open `http://localhost:4321` in your browser.

4. **Build for production:**
   ```bash
   pnpm build
   ```

---

## 🤝 Let's Work Together

I am currently **available for new opportunities and contracts worldwide**. If you are looking for a professional who can own the entire frontend cycle from concept mockups to production code:

* **🗓️ Schedule a 15min Call:** [Calendly Link](https://calendly.com/eeliasricardoo)
* **✉️ Direct Email:** [eeliasricardoo@gmail.com](mailto:eeliasricardoo@gmail.com)
* **💼 LinkedIn:** [/in/eeliasricardoo](https://linkedin.com/in/eeliasricardoo)
* **📄 Download Resume (PDF):** [My Resume](https://eliasricardo.com/resume.pdf)
