import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {

  await page.goto('https://login.salesforce.com/?locale=in');
  await page.waitForTimeout(2000);
  await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com');
  await page.locator('#password').fill('TestLeaf@2025');
  await page.locator('input[id="Login"]').click();
  await page.waitForTimeout(5000);

  const PageTitle = await page.title();
  const PageURL = await page.url();
  console.log(`Page Title: ${PageTitle}`);
  console.log(`Page URL: ${PageURL}`);
});
