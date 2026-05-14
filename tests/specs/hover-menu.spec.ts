import { test, expect } from '@playwright/test';

test('Hover Menu shows submenu and allows interaction', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu', { waitUntil: 'domcontentloaded' });

 await page.getByTestId('nav-add-ons').hover();
  await page.waitForTimeout(2000); // Wait for submenu to appear    
  await page.getByTestId('test-id-Wifi').click();
    await page.waitForTimeout(2000); // Wait for any resulting action
   await page.mouse.move(10, 10); // Move mouse away to hide submenu
   await page.locator('em:has-text("menus")').click();
    let outputText = await page.getByTestId('hover-output').textContent();
    expect(outputText).toContain('testId": "test-id-Wifi');
     await page.waitForTimeout(2000); 
  await page.screenshot({ path: 'hover-menu.png' });
});
