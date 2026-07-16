# meu-site
> **Senior UX Engineer Portfolio · AI as pair, never pilot.**

[eeliasricardoo.com](https://eeliasricardoo.com) · [LinkedIn](https://linkedin.com/in/eeliasricardoo) · [Calendly](https://calendly.com/eeliasricardoo) · [Email](mailto:eeliasricardoo@gmail.com)

---

## ⚡ The Philosophy

This is the source code of my personal portfolio. It is designed to be a fast, high-fidelity showcase of how I build digital products: starting from a strict token-based design system in Figma, prototyping layouts, and shipping lightweight, highly optimized web applications.

The engineering goal here was simple: **zero bloat, maximum performance, and fluid micro-interactions.**

---

## 🛠️ The Tech Stack & Decisions

Instead of using a heavy framework out of the box, the architecture is split precisely based on performance and interactive requirements:

* **Astro (Static Engine):** Generates 100% static HTML by default. The entire page structure, text, and grids load with zero initial JavaScript overhead.
* **React (Selective Hydration):** Only loaded for specific islands of interactivity where state and transitions are required (e.g., the floating dynamic `<Navbar />`, the hero sound synthesizer, and the testimonials engine).
* **TailwindCSS (Design Tokens):** The design system tokens (colors, spacing, transitions) are configured in the Tailwind config and compiled down to a single lightweight utility stylesheet (< 20KB).
* **Framer Motion:** Handles interactive transitions, while static above-the-fold entrance transitions use native CSS.

---

## 🏎️ Performance & LCP Optimization

To keep the page loading under **100ms** and maintain a perfect Lighthouse score:

1. **Native CSS for Above-the-Fold Entries:** The hero title slide-up and fade-in animations are executed using native CSS animations in [HeroContent.astro](file:///Users/eeliasricardoo/Desktop/work/Meu%20site/meu-site/src/components/home/hero/HeroContent.astro). This prevents JavaScript execution from blocking the initial page render, ensuring an instant **First Contentful Paint (FCP)**.
2. **Idle-Hydrated Sound Design:** The retro audio synthesizer component [HeroSounds.tsx](file:///Users/eeliasricardoo/Desktop/work/Meu%20site/meu-site/src/components/home/hero/HeroSounds.tsx) is loaded using Astro's `client:idle`. It does not block page load or layout construction.
3. **Asset & Font Preloading:** Critical OpenGraph graphics and profile images are preloaded via headers, and DNS prefetching is configured for Google Fonts and Fontshare to eliminate layout shifts (CLS) and font flickering (FOUT).

---

## ⚙️ How My Tools Cooperate

I use AI tools to speed up my scaffolding and code loops, but the engineering architecture, product decisions, and final UX polished details are entirely mine.

* **Figma:** Core design tokens, high-fidelity UI layouts, and grid structures.
* **Lovable:** Rapid prototyping of interactive components.
* **Cursor & Claude:** Code generation and rapid refactoring.
* **Antigravity:** Agent-driven workflow orchestration and build checks.

---

## 📂 Project Structure

```text
meu-site/
├── src/
│   ├── components/
│   │   ├── home/           # Homepage modules (Hero, Stack, How I Work, Testimonials)
│   │   ├── portfolio/      # UI templates and detail sections for case studies
│   │   └── Navbar.tsx      # Hydrated floating nav with scroll progress tracking
│   ├── constants/
│   │   ├── content.ts      # Single source of truth for all copy & project metadata
│   │   └── project-brands.ts # Design token mappings for thematic project colors
│   ├── layouts/
│   │   └── Layout.astro    # Base wrapper (preloading, metadata, SEO configuration)
│   └── styles/
│       └── global.css      # Core tailwind directives, global tokens, and custom animations
└── tailwind.config.ts      # Theme extensions mapping the system tokens
```

---

## 🚀 Running Locally

Ensure you have **Node.js** and **pnpm** installed:

```bash
# Install dependencies
pnpm install

# Start local dev server (default port 4321)
pnpm dev

# Build production bundle to ./dist/
pnpm build
```

---

## 🤝 Let's Chat

I am open to Senior UX Engineering roles and contract work worldwide. Let's discuss design systems, tooling, or high-performance React architectures:

* **🗓️ Schedule a Call:** [Calendly](https://calendly.com/eeliasricardoo)
* **💼 LinkedIn:** [/in/eeliasricardoo](https://linkedin.com/in/eeliasricardoo)
* **✉️ Direct Email:** [eeliasricardoo@gmail.com](mailto:eeliasricardoo@gmail.com)
* **📄 Download Resume (PDF):** [Resume](https://eeliasricardoo.com/resume.pdf)
