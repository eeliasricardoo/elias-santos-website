import { test, expect } from '@playwright/test';

test.describe('Portfolio Pages', () => {
  test('should load carousel builder page', async ({ page }) => {
    await page.goto('/portfolio/carousel-builder');
    
    // Check if page loads successfully
    await expect(page).toHaveTitle(/Carousel Builder/);
    
    // Check if main content is present
    await expect(page.locator('h1')).toContainText(/Post & Carousel Generator/);
    
    // Check if back button works
    const backButton = page.locator('a:has-text("Back to Portfolio")');
    await expect(backButton).toBeVisible();
    
    // Test navigation back to home
    await backButton.click();
    await expect(page).toHaveURL('/');
  });

  test('should load ranking page', async ({ page }) => {
    await page.goto('/portfolio/ranking');
    
    // Check if page loads successfully
    await expect(page).toHaveTitle(/Ranking System/);
    
    // Check if main content is present
    await expect(page.locator('h1')).toContainText(/UX Case Study: Ranking System/);
    
    // Check if back button works
    const backButton = page.locator('button:has-text("Back")');
    await expect(backButton).toBeVisible();
  });

  test('should load ventuschat page', async ({ page }) => {
    await page.goto('/portfolio/ventuschat');
    
    // Check if page loads successfully
    await expect(page).toHaveTitle(/VentusChat/);
    
    // Check if main content is present
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should have proper image optimization', async ({ page }) => {
    await page.goto('/portfolio/carousel-builder');
    
    // Check if all images have sizes attribute
    const images = page.locator('img');
    for (let i = 0; i < await images.count(); i++) {
      const sizes = await images.nth(i).getAttribute('sizes');
      expect(sizes).toBeTruthy();
    }
  });

  test('should be responsive on portfolio pages', async ({ page }) => {
    await page.goto('/portfolio/carousel-builder');
    
    // Test desktop view
    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(page.locator('main')).toBeVisible();
    
    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('main')).toBeVisible();
    
    // Check if content is properly responsive
    const header = page.locator('header');
    await expect(header).toBeVisible();
  });

  test('should have working navigation between portfolio pages', async ({ page }) => {
    // Start from carousel builder
    await page.goto('/portfolio/carousel-builder');
    
    // Navigate to ranking
    await page.goto('/portfolio/ranking');
    await expect(page.locator('h1')).toContainText(/Ranking System/);
    
    // Navigate to ventuschat
    await page.goto('/portfolio/ventuschat');
    await expect(page.locator('h1')).toBeVisible();
  });
}); 