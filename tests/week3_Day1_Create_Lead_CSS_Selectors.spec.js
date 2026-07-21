import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {

  await page.goto('https://leaftaps.com/opentaps/control/main');
  
  await page.locator('#username').fill('demosalesmanager');
  await page.locator('#password').fill('crmsfa');
  await page.locator('.decorativeSubmit').click();
  await page.waitForTimeout(2000);
 await page.locator('a:has-text("CRM/SFA")').click();
  await page.waitForTimeout(2000);
  await page.locator('//a[text()="Create Lead"]').click();
  await page.waitForTimeout(2000);
 //fill the form fields to create a lead
  await page.locator('#createLeadForm_companyName').fill('RELX');
  await page.locator('#createLeadForm_firstName').fill('Indhira');
  await page.locator('#createLeadForm_lastName').fill('Durai');
  const source = await page.locator('#createLeadForm_dataSourceId option');
  const sourceOptions = await source.count();
  //print all the options in the dropdown
  for (let i = 0; i < sourceOptions; i++) {
    console.log(await source.nth(i).innerText());
  }
  //print the total number of options in the dropdown
  console.log(`Total number of options in the dropdown: ${sourceOptions}`);

  await page.locator('#createLeadForm_personalTitle').fill('Mrs');
  await page.locator('#createLeadForm_generalProfTitle').fill('Mrs');
  await page.locator('#createLeadForm_annualRevenue').fill('3000000'); 
  await page.locator('#createLeadForm_departmentName').fill('IT');
  await page.locator('#createLeadForm_primaryPhoneNumber').scrollIntoViewIfNeeded();
  await page.locator('#createLeadForm_primaryPhoneNumber').fill('9876543210');
  await page.locator('.smallSubmit').scrollIntoViewIfNeeded();
  await page.locator('.smallSubmit').click();
  await page.waitForTimeout(4000);

  const ID = await page.locator('#viewLead_companyName_sp').textContent();
    console.log(`Lead ID: ${ID}`);

});