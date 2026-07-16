import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {

  await page.goto('https://www.redbus.in/', { waitUntil: 'domcontentloaded' });
  const PageTitle = await page.title();
  const PageURL = await page.url();

  console.log(`Page Title: ${PageTitle}`);
  console.log(`Page URL: ${PageURL}`);

  await page.waitForTimeout(5000);
});
