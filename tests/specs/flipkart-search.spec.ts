import { test, expect } from '@playwright/test';

test('find the cheapest Mac mini on Flipkart', async ({ page }) => {
  await page.goto('https://www.flipkart.com/search', { waitUntil: 'domcontentloaded' });
  await page.keyboard.press('Escape');

  const searchBox = page.getByPlaceholder('Search for Products, Brands and More');
  await expect(searchBox).toBeVisible();
  await searchBox.fill('mac mini');
  await page.waitForTimeout(5000);

  await page.locator("svg[width='20']").first().click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(5000);
 await page.getByText('Price -- Low to High').first().click();
 await page.waitForTimeout(5000);

     const firstProduct = await page.locator('div.RGLWAk').locator('a').nth(1).textContent();
   const priceText = await page.locator('div.QiMO5r').locator('div').nth(0).textContent();
   expect(firstProduct).toContain('Apple Mac Mini (MXNF2HN/A) Core i3');
    expect(priceText).toContain('₹72,990');

  console.log(`The cheapest Mac mini on Flipkart is ${firstProduct}.priced at ${priceText}`);
});
