import { test, expect } from '@playwright/test';
import { networkInterfaces } from 'node:os';

test('SimpleMaps India SVG page loads and contains SVG paths', async ({ page }) => {
  await page.goto('https://simplemaps.com/svg/country/in', { waitUntil: 'domcontentloaded' });
 const allstates= await page.locator("//div[@id='admin1_map_inner']//*[name()='svg']").allTextContents();
 
 for(let i=0;i<allstates.length;i++){
    console.log(allstates[i]);
     await page.waitForTimeout(5000);
    if(allstates[i].includes('Uttar Pradesh')){
      console.log('Found Uttar Pradesh!');
       await page.waitForTimeout(5000);
      await page.locator('svg path.sm_state.sm_state_INUP').click();
       await page.waitForTimeout(10000);
       await page.screenshot({ path: './UPScreenshot.png' });
       await page.waitForTimeout(5000);
    }
 }
});
