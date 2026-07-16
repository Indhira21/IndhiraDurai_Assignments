import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://www.redbus.in/');
  await page.waitForTimeout(5000);
  await page.title();
  await page.url();
});