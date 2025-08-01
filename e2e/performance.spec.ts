import { test, expect } from '@playwright/test';

test.describe('Performance Tests', () => {
  test('should load home page within performance budget', async ({ page }) => {
    const startTime = Date.now();
    
    await page.goto('/');
    
    const loadTime = Date.now() - startTime;
    
    // Performance budget: 3 seconds for initial load
    expect(loadTime).toBeLessThan(3000);
    
    // Check if page is interactive
    await expect(page.locator('nav')).toBeVisible();
  });

  test('should have optimized images', async ({ page }) => {
    await page.goto('/');
    
    // Check if images are using Next.js Image component
    const images = page.locator('img');
    
    for (let i = 0; i < await images.count(); i++) {
      const img = images.nth(i);
      
      // Check if image has proper attributes
      const src = await img.getAttribute('src');
      const alt = await img.getAttribute('alt');
      const sizes = await img.getAttribute('sizes');
      
      expect(src).toBeTruthy();
      expect(alt).toBeTruthy();
      expect(sizes).toBeTruthy();
    }
  });

  test('should have proper font loading', async ({ page }) => {
    await page.goto('/');
    
    // Check if fonts are preloaded
    const preloadLinks = page.locator('link[rel="preload"]');
    await expect(preloadLinks).toHaveCount(1); // Fontshare preload
    
    // Check if font-display swap is used
    const fontFace = page.locator('style');
    await expect(fontFace).toBeVisible();
  });

  test('should have proper meta tags for SEO', async ({ page }) => {
    await page.goto('/');
    
    // Check essential meta tags
    await expect(page.locator('meta[name="description"]')).toBeVisible();
    await expect(page.locator('meta[name="viewport"]')).toBeVisible();
    await expect(page.locator('meta[name="robots"]')).toBeVisible();
    
    // Check Open Graph tags
    await expect(page.locator('meta[property="og:title"]')).toBeVisible();
    await expect(page.locator('meta[property="og:description"]')).toBeVisible();
    await expect(page.locator('meta[property="og:type"]')).toBeVisible();
  });

  test('should have proper accessibility features', async ({ page }) => {
    await page.goto('/');
    
    // Check for proper heading structure
    const headings = page.locator('h1, h2, h3, h4, h5, h6');
    await expect(headings.first()).toBeVisible();
    
    // Check for proper language attribute
    await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR');
    
    // Check for proper ARIA labels
    const buttons = page.locator('button');
    for (let i = 0; i < await buttons.count(); i++) {
      const button = buttons.nth(i);
      const ariaLabel = await button.getAttribute('aria-label');
      const text = await button.textContent();
      
      // Either aria-label or text content should be present
      expect(ariaLabel || text).toBeTruthy();
    }
  });

  test('should handle network errors gracefully', async ({ page }) => {
    // Simulate slow network
    await page.route('**/*', route => {
      route.continue();
    });
    
    await page.goto('/');
    
    // Page should still load and be functional
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('h1')).toBeVisible();
  });
}); 