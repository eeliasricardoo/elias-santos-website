# 📦 Dependency Removal Plan

## ✅ Phase 1: Remove Unused Radix UI Packages (19 packages)

**Safe to remove - NOT found in codebase:**

```bash
pnpm remove @radix-ui/react-accordion
pnpm remove @radix-ui/react-alert-dialog
pnpm remove @radix-ui/react-aspect-ratio
pnpm remove @radix-ui/react-checkbox
pnpm remove @radix-ui/react-collapsible
pnpm remove @radix-ui/react-context-menu
pnpm remove @radix-ui/react-dropdown-menu
pnpm remove @radix-ui/react-hover-card
pnpm remove @radix-ui/react-menubar
pnpm remove @radix-ui/react-navigation-menu
pnpm remove @radix-ui/react-popover
pnpm remove @radix-ui/react-progress
pnpm remove @radix-ui/react-radio-group
pnpm remove @radix-ui/react-scroll-area
pnpm remove @radix-ui/react-select
pnpm remove @radix-ui/react-slider
pnpm remove @radix-ui/react-tabs
pnpm remove @radix-ui/react-toggle
pnpm remove @radix-ui/react-toggle-group
```

**Estimated savings: ~150-200KB gzipped**

---

## ✅ Phase 2: Remove Other Unused Dependencies (7 packages)

```bash
pnpm remove embla-carousel-react
pnpm remove cmdk
pnpm remove input-otp
pnpm remove react-day-picker
pnpm remove react-resizable-panels
pnpm remove sonner
pnpm remove vaul
```

**Estimated savings: ~50-100KB gzipped**

---

## ✅ Phase 3: Delete Unused UI Component Files (3 files)

**Files that can be deleted:**

1. `src/components/ui/form.tsx` - Not imported anywhere
2. `src/components/ui/sidebar.tsx` - Not imported anywhere (23KB file!)
3. `src/components/ui/toaster.tsx` - Not imported anywhere

```bash
rm src/components/ui/form.tsx
rm src/components/ui/sidebar.tsx
rm src/components/ui/toaster.tsx
```

**Estimated savings: ~25KB source code**

---

## 🔍 Phase 4: Verify No Broken Imports

After removal, run:

```bash
pnpm build
```

If build fails, check error messages and restore needed dependencies.

---

## 📊 TOTAL EXPECTED SAVINGS

- **Package removals:** 26 packages
- **Bundle size reduction:** ~200-300KB (minified + gzipped)
- **node_modules size reduction:** ~50-100MB
- **Install time improvement:** ~5-10 seconds faster

---

## 🛡️ Safety Notes

1. ✅ `package.json.backup` created
2. ✅ All removals verified by grep search across entire codebase
3. ✅ Only removing packages with ZERO imports
4. 🔄 Can rollback with: `cp package.json.backup package.json && pnpm install`

---

## 📋 Packages KEPT (Actually Used)

### UI & Styling:
- ✅ @radix-ui/react-slot (buttons, forms)
- ✅ @radix-ui/react-label (forms, labels)
- ✅ @radix-ui/react-separator (separators)
- ✅ @radix-ui/react-toast (toasts)
- ✅ @radix-ui/react-avatar (avatars)
- ✅ @radix-ui/react-tooltip (tooltips)
- ✅ @radix-ui/react-dialog (dialogs, sheets)
- ✅ @radix-ui/react-switch (switches)
- ✅ class-variance-authority (variant styles)
- ✅ clsx (className utilities)
- ✅ tailwind-merge (Tailwind className merging)
- ✅ tailwindcss (CSS framework)
- ✅ @tailwindcss/vite (Vite plugin)
- ✅ tailwindcss-animate (animations)

### React & Core:
- ✅ react (core)
- ✅ react-dom (core)
- ✅ @astrojs/react (Astro integration)
- ✅ astro (framework)

### Icons & Animations:
- ✅ lucide-react (icons - 29+ files)
- ✅ framer-motion (animations - 52+ files)

### Functionality:
- ✅ react-hook-form (form handling)
- ✅ resend (email API)

### Fonts:
- ✅ @fontsource/inter (typography)

### Dev Dependencies:
- ✅ sharp (image optimization)
- ✅ terser (minification)
- ✅ @types/* (TypeScript types)
