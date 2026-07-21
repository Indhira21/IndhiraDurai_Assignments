import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {

  await page.goto('https://leaftaps.com/opentaps/control/main');
  
  await page.locator('input[id="username"]').fill('demosalesmanager');
  await page.locator('input[id="password"]').fill('crmsfa');
  await page.locator('input[class="decorativeSubmit"]').click();
  await page.waitForTimeout(4000);
 await page.locator('//a[contains(text(), "CRM/SFA")]').click();
  await page.waitForTimeout(2000);
  await page.locator('//a[text()="Create Lead"]').click();
  await page.waitForTimeout(2000);
 //fill the form fields to create a lead
  await page.locator('input[id="createLeadForm_companyName"]').fill('RELX');
  await page.locator('input[id="createLeadForm_firstName"]').fill('Indhira');
  await page.locator('input[id="createLeadForm_lastName"]').fill('Durai');
  await page.locator('input[id="createLeadForm_personalTitle"]').fill('Mrs');
  await page.locator('input[id="createLeadForm_generalProfTitle"]').fill('Mrs');
  await page.locator('input[id="createLeadForm_annualRevenue"]').fill('3000000'); 
  await page.locator('input[id="createLeadForm_departmentName"]').fill('IT');
  await page.locator('input[id="createLeadForm_primaryPhoneNumber"]').scrollIntoViewIfNeeded();
  await page.locator('input[id="createLeadForm_primaryPhoneNumber"]').fill('9876543210');
  await page.locator('input[class="smallSubmit"]').scrollIntoViewIfNeeded();
  await page.locator('input[class="smallSubmit"]').click();
  await page.waitForTimeout(4000);

  const ID = await page.locator('span[id="viewLead_companyName_sp"]').textContent();
    console.log(`Lead ID: ${ID}`);

});