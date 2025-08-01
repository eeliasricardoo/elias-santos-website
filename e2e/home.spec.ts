import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should load home page successfully', async ({ page }) => {
    await page.goto('/');
    
    // Check if page loads without errors
    await expect(page).toHaveTitle(/Elias Santos/);
    
    // Check if main sections are present
    await expect(page.locator('h1')).toContainText(/Elias Santos/);
    
    // Check if navigation is working
    await expect(page.locator('nav')).toBeVisible();
    
    // Check if contact button is present
    await expect(page.locator('button:has-text("Contact")')).toBeVisible();
  });

  test('should have proper meta tags', async ({ page }) => {
    await page.goto('/');
    
    // Check meta description
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /portfolio/);
    
    // Check viewport meta tag
    await expect(page.locator('meta[name="viewport"]')).toHaveAttribute('content', /width=device-width/);
  });

  test('should be responsive', async ({ page }) => {
    await page.goto('/');
    
    // Test desktop view
    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(page.locator('nav')).toBeVisible();
    
    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('nav')).toBeVisible();
    
    // Check if mobile-specific elements are hidden/shown correctly
    const contactButton = page.locator('button:has-text("Contact")');
    await expect(contactButton).toBeVisible();
  });

  test('should have working contact scroll', async ({ page }) => {
    await page.goto('/');
    
    // Click contact button
    await page.click('button:has-text("Contact")');
    
    // Wait for smooth scroll
    await page.waitForTimeout(1000);
    
    // Check if we're in the contact section
    const contactSection = page.locator('#get-in-touch');
    await expect(contactSection).toBeVisible();
  });

  test('should load images with proper sizes', async ({ page }) => {
    await page.goto('/');
    
    // Check if profile photo loads with sizes attribute
    const profilePhoto = page.locator('img[alt*="Elias Santos"]');
    await expect(profilePhoto).toHaveAttribute('sizes');
    
    // Check if logo loads with sizes attribute
    const logo = page.locator('img[alt="ES Logo"]');
    await expect(logo).toHaveAttribute('sizes');
  });

  test('should have proper accessibility', async ({ page }) => {
    await page.goto('/');
    
    // Check for proper heading structure
    const headings = page.locator('h1, h2, h3, h4, h5, h6');
    await expect(headings.first()).toBeVisible();
    
    // Check for alt text on images
    const images = page.locator('img');
    for (let i = 0; i < await images.count(); i++) {
      const alt = await images.nth(i).getAttribute('alt');
      expect(alt).toBeTruthy();
    }
  });
}); 