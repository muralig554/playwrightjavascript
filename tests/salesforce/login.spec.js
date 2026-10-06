import { test, expect } from '@playwright/test';

test('Open Salesforce', async ({ page }) => {

    await page.goto('https://login.salesforce.com/');

    //await expect(page).toHaveTitle(/Login/i);

    await page.locator('#username').fill('muralidhar554@gmail.com');
    
    await page.locator('input[type="submit"]').click();
    await page.locator('#password').fill('Dhanvi@3010');
    
     await page.locator('input[type="submit"]').click();
  await page.waitForTimeout(10000);
      await expect(page).toHaveURL(
        /drive-energy-6691\.lightning\.force\.com\/lightning\/page\/home/ );
         await expect(page.getByText('Home', { exact: true }).first()).toBeVisible();

});

