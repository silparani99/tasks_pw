import { test, expect } from '@playwright/test';

test('Enter data in shadow root on SelectorsHub XPath practice page', async ({ page }) => {
  await page.goto('https://selectorshub.com/xpath-practice-page/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);
  await page.locator('#kils').fill('Silpa');
  await page.locator('#pizza').fill('Passion');
  //await page.locator('input[type="text"]').fill('Playwright');
  //await page.locator('input[type="password"]').fill('Playwright123');

  await page.keyboard.press('Tab');
await page.keyboard.type('playwright');

await page.keyboard.press('Tab');
await page.keyboard.press('Tab');
await page.keyboard.type('MyPassword123');
await page.waitForTimeout(1000);
 await page.screenshot({ path: 'selectorshub-shadow.png' });
  
  });

  
 

