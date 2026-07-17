/**
 * Single source of truth for the case-study brand palette.
 * Mirrors the `--color-brand-*` design tokens in global.css.
 *
 * `bg`     — light/signature tone: fills and accents on dark surfaces.
 * `accent` — saturated tone: text and borders on light fills.
 */
export type BrandColor = 'lime' | 'cyan' | 'violet' | 'orange' | 'pink' | 'emerald' | 'red';

export interface ProjectBrand {
  bg: string;
  gradient: string;
  accent: string;
  label: string;
}

export const PROJECT_BRANDS: Record<BrandColor, ProjectBrand> = {
  lime: { bg: 'var(--color-brand-lime)', gradient: 'var(--gradient-brand-lime)', accent: 'var(--color-brand-lime-deep)', label: 'LIME / FEATURED' },
  cyan: { bg: 'var(--color-brand-cyan)', gradient: 'var(--gradient-brand-cyan)', accent: 'var(--color-brand-cyan-deep)', label: 'ROSE / PERSONAL' },
  violet: { bg: 'var(--color-brand-violet)', gradient: 'var(--gradient-brand-violet)', accent: 'var(--color-brand-violet-deep)', label: 'RUBY / TOOL' },
  orange: { bg: 'var(--color-brand-orange)', gradient: 'var(--gradient-brand-orange)', accent: 'var(--color-brand-orange-deep)', label: 'BLUSH / PLATFORM' },
  pink: { bg: 'var(--color-brand-pink)', gradient: 'var(--gradient-brand-pink)', accent: 'var(--color-brand-pink-deep)', label: 'DARK ROSE / NEW FEATURE' },
  emerald: { bg: 'var(--color-brand-emerald)', gradient: 'var(--gradient-brand-emerald)', accent: 'var(--color-brand-emerald-deep)', label: 'CORAL / OPEN SOURCE' },
  red: { bg: 'var(--color-brand-red)', gradient: 'var(--gradient-brand-red)', accent: 'var(--color-brand-red-deep)', label: 'RED / STREAMING' },
};

/** Order used by the home Work section (featured first). */
export const BRAND_ORDER: BrandColor[] = ['lime', 'cyan', 'violet', 'orange', 'pink', 'emerald', 'red'];

/** Maps a case-study route slug to its brand color. */
export const PROJECT_BRAND_BY_SLUG: Record<string, BrandColor> = {
  ilevar: 'lime',
  ventuschat: 'cyan',
  'sfmc-magic-builder': 'violet',
  ranking: 'orange',
  'support-queue': 'pink',
  netflix: 'red',
};
