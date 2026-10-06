// @ts-check

import { test, expect } from '@playwright/test';

test('search playwright on Google', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.waitForLoadState('domcontentloaded');

  const searchBox = page.locator("input[name='q']");
  await searchBox.waitFor({ state: 'visible' });

  await searchBox.fill('playwright');
  await searchBox.press('Enter');

  await expect(page).toHaveURL(/search\?q=playwright/);
  await expect(page.locator('text=Playwright')).toBeVisible();
});