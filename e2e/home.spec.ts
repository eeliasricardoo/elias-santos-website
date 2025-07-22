import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should load the home page successfully', async ({ page }) => {
    await page.goto('/');

    // Aguardar a página carregar completamente
    await page.waitForLoadState('networkidle');

    // Verificar se a página carregou
    await expect(page).toHaveTitle(/Elias Santos/);

    // Verificar se o conteúdo principal está presente
    await expect(page.getByRole('heading', { level: 1 })).toContainText(
      'UX From the Future'
    );

    // Usar seletor mais específico para evitar múltiplos elementos
    await expect(page.locator('h2:has-text("Elias Santos")')).toBeVisible();
  });

  test('should display hero section correctly', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Aguardar as animações carregarem
    await page.waitForTimeout(2000);

    // Verificar elementos do hero
    await expect(
      page.getByText(
        'Strategic UX/UI Designer & Full Stack Developer. I transform complex business challenges into elegant, user-centered solutions that drive measurable results and accelerate time-to-market.'
      )
    ).toBeVisible();

    // Usar seletor mais específico
    await expect(page.locator('h2:has-text("Elias Santos")')).toBeVisible();

    // Verificar se a foto de perfil está presente
    await expect(page.locator('img[alt*="Elias"]')).toBeVisible();
  });

  test('should have working navigation', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Aguardar o navbar carregar
    await page.waitForTimeout(1000);

    // Verificar se o navbar está presente
    await expect(page.locator('nav')).toBeVisible();

    // Verificar se o logo está presente (usando seletor mais flexível)
    await expect(page.locator('nav img[alt="ES Logo"]')).toBeVisible();

    // Verificar se o seletor de idioma está presente
    await expect(page.locator('nav button')).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    // Testar em viewport mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Aguardar as animações carregarem
    await page.waitForTimeout(2000);

    // Verificar se o conteúdo é legível em mobile
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.locator('h2:has-text("Elias Santos")')).toBeVisible();
  });

  test('should have proper meta tags', async ({ page }) => {
    await page.goto('/');

    // Verificar meta description
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute(
      'content',
      /Professional portfolio/
    );

    // Verificar Open Graph tags
    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute('content', /Elias Santos/);
  });

  test('should have smooth scrolling behavior', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Aguardar as animações carregarem
    await page.waitForTimeout(2000);

    // Fazer scroll para ativar o progress bar
    await page.evaluate(() => {
      window.scrollTo(0, 100);
    });

    // Aguardar um pouco para o progress bar aparecer
    await page.waitForTimeout(1000);

    // Verificar se há indicadores de scroll (usando seletor mais flexível)
    await expect(page.locator('.fixed.top-0.left-0.right-0.h-1')).toBeVisible();
  });

  test('should load all sections correctly', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Aguardar as animações carregarem
    await page.waitForTimeout(2000);

    // Fazer scroll para carregar todas as seções
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });

    await page.waitForTimeout(2000);

    // Verificar se todas as seções principais estão presentes
    // Usar seletores mais flexíveis baseado na estrutura real
    await expect(page.locator('section')).toHaveCount(1); // Apenas uma section principal

    // Verificar seções específicas usando texto mais genérico
    await expect(page.getByText(/Portfolio/)).toBeVisible();
    await expect(page.getByText(/About/)).toBeVisible();
    await expect(page.getByText(/Contact/)).toBeVisible();
  });
});
